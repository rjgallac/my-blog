---
title: Oh My Zsh -installing on ubuntu
date: "2019-06-06T00:00:05.284Z"
description: "Oh My Zsh -installing on ubuntu"
---
This is a great command line improvement for me for linux especially if you’re using git as it’ll show you quite clearly which branch you’re on.
```
    apt install zsh
    chsh -s /bin/zsh root
    wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh
    cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc
    source ~/.zshrc
    nano ~/.zshrc
```
on git bash you may needs to install powerfonts and change some git bash settings to UTF-8 if you are not seeing the icons and a bit of gibberish but it should work if you’re in x-win. If you run this it’ll tell you something up with your fonts and character encoding.
```
    echo "\ue0b0 \u00b1 \ue0a0 \u27a6 \u2718 \u26a1 \u2699"
```
Youll probably have to do something like the following to fix

https://github.com/powerline/fonts
./install