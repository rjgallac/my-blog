---
title: Levenshtein Distance
date: "2019-03-08T00:00:00.284Z"
description: "Levenshtein Distance"
---
Needed for a recent code wars.

See https://en.wikipedia.org/wiki/Levenshtein_distance for explanation.

The java code
```
public class LevenshteinDistance {

    public int calc(String s1, int s1_length, String s2, int s2_length) {
        int cost;

        if(s1_length == 0) return s2_length;
        if(s2_length == 0) return s1_length;

        if(s1.charAt(s1_length-1) == s2.charAt(s2_length-1)){
            cost = 0;
        } else {
            cost = 1;
        }
        return min(
                calc(s1, s1_length-1, s2, s2_length) +1,
                min(
                calc(s1, s1_length, s2, s2_length -1) +1,
                calc(s1, s1_length-1, s2, s2_length -1) + cost)

        );
    }
}
```
```
@Test
public void test(){
    String s1 = "saturday";
    String s2 = "sunday";
    LevenshteinDistance levenshteinDistance = new LevenshteinDistance();
    int calc = levenshteinDistance.calc(s1, s1.length(), s2, s2.length());
    System.out.println(calc);
    assertEquals(3, calc);
}

@Test
public void test2(){
    String s1 = "test";
    String s2 = "test2";
    LevenshteinDistance levenshteinDistance = new LevenshteinDistance();
    int calc = levenshteinDistance.calc(s1, s1.length(), s2, s2.length());
    assertEquals(1, calc);
}
```