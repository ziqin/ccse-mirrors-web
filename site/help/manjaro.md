---
sidebarShare: true
prev: false
next: false
---

# Manjaro Mirror

## Introduction

[Manjaro](https://manjaro.org/) is a easy-to-install rolling-release Linux distribution based on [Arch Linux](https://www.archlinux.org/).

## Configuration

Write the following line to `/etc/pacman.d/mirrorlist`:

``` toml
Server = https://mirrors.sustech.edu.cn/manjaro/stable/$repo/$arch
```

## Update Repository Indexes

``` sh
sudo pacman -Syy
```
