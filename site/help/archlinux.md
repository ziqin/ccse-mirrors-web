---
sidebarShare: true
prev: false
next: false
---

# Arch Linux Mirror

## Introduction

[Arch Linux](https://manjaro.org/) is a famous rolling-release Linux distribution which follows the [KISS principle](https://en.wikipedia.org/wiki/KISS_principle).

## Configuration

Write the following line to `/etc/pacman.d/mirrorlist`:

``` toml
Server = https://mirrors.sustech.edu.cn/archlinux/stable/$repo/os/$arch
```

## Update Repository Indexes

``` sh
sudo pacman -Syy
```
