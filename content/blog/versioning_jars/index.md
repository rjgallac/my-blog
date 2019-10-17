---
title: Versioning jars
date: "2018-04-15T00:00:00.284Z"
description: "Versioning jars, publishing SNAPSHOTS and RELEASES using Jenkins, Gradle and Nexus"
---
After struggling for a long time trying to get snapshots and release into their respective places in nexus I thought I’d share my experience. I’m working on a small test for bundling a client API with a server.  This seemed like an ideal time to improve my knowledge of nexus.


The client API contains the shared code such as DTOs that the ReST server and calling clients will use.  The idea is that you could pass a JAR that contains the DTOs and the client and a user could simply Autowire in the client and call your service by invoking
```
productClient.getOne(1L);
```
I started off creating using a local repo using the maven plugin in gradle.
```
apply plugin: 'maven'
uploadArchives {
    repositories {
        flatDir {
           dirs '../repos'
        }
    }
}
```
This works well, in the gradle tasks you should have a task called jar which when called creates the JAR and a task called uploadArchives which will put it in your local repo.  You can then reference the JARs from your other projects like so
```
 compile files('../repos/productapi-0.1.0.jar')
```
This works great when working on your own.  I can see a benefit of this when wanting to make changes locally without having to push to git before you can test with the server locally and risk breaking changes.

I then decided to create a local docker instance of nexus and start pushing to that. The maven plugin had me covered just by changing the flatdir to the following.
```
mavenDeployer {
    repository(url: 'http://localhost:8081/nexus/content/repositories/snapshots') {
        authentication(userName: "admin", password: "admin123")
    }
    pom.version = project.version
    pom.artifactId = project.artifactId
    pom.groupId = project.groupId
}
```
I wanted to also improve my understanding of versioning which has always been a bit of a mystery to me.  At this point I was happily pushing snapshots but what about releases and whats the difference anyway. I always thought SNAPSHOTS went something like 0.0.1-SNAPSHOT 0.0.2-SNAPSHOT 0.0.3-SNAPSHOT and then when you were happy you’d release i.e. 0.0.4-RELEASE.  Turns out, not so.  It looks like it goes 0.0.1-SNAPSHOT and you can have lots of iterations of this until your happy at which point when you release you have a 0.0.1-RELEASE. An automated process will then create a 0.0.2-SNAPSHOT for you.

So it was at this point I decided to look in nexus and work out how the hell I get a release file into the release part of nexus. By using a second plugin called maven release https://github.com/researchgate/gradle-release
```
plugins {
    id 'net.researchgate.release' version '2.6.0'
}
```
This gives you a nice little release task which when run you’ll see create a new JAR with the SNAPSHOT portion in the filename, updates the version in your gradle.properties and increments the version number. But it wasnt pushing the release build to nexus, I could see it locally but not in nexus.  A lot of googling later I stumbled upon this snippet
```
 repository(url: "http://localhost:8081/nexus/content/repositories/${project.version.endsWith('-SNAPSHOT') ? 'snapshots' : 'releases'}") {
```
which looked very hacky to me and I couldn’t get to work.

however much googling later I stumbled upon this
```
uploadArchives {
    repositories {
        mavenDeployer {
            snapshotRepository(url: 'http://localhost:8081/nexus/content/repositories/snapshots') {
                authentication(userName: "admin", password: "admin123")
            }
            repository(url: 'http://localhost:8081/nexus/content/repositories/releases') {
                authentication(userName: "admin", password: "admin123")
            }
            pom.version = project.version
            pom.artifactId = project.artifactId
            pom.groupId = project.groupId
        }
    }
}
```
which looked and felt better however still didn’t work.  It still wasn’t pushing to release. Lots of googling later I was still none the wiser until I took a break and realised that the release plugin was unaware of the maven upload plugin and I should be plugging the uploader into the release plugin.  My thinking was it was doing this

CREATE RELEASE -> CREATE SNAPSHOT -> UPLOAD

when I wanted

CREATE RELEASE -> UPLOAD -> CREATE SNAPSHOT

so I tried
```
afterReleaseBuild.dependsOn uploadArchives
```
and it worked.  Funny how one line makes a difference.

I then decided to get Jenkins involved and to let jenkins build the api and push to nexus. I did spend some time looking at the jenkins nexus plugin but I felt that that would be tying myself to installing plugins and I wanted as much as possible to live in my code(pipeline as code) and let gradle do the heavy lifting.