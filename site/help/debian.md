---
sidebarShare: true
prev: false
next: false
---

# Debian Mirror

## Introduction

> [Debian](https://www.debian.org/), also known as Debian GNU/Linux, is a Linux distribution composed of free and open-source software.

## Backup Existing Configuration

``` sh
mv /etc/apt/sources.list /etc/apt/sources.list.bak
```

## Edit Configuration File

Write the following settings to `/etc/apt/sources.list` if you are using Debian "buster". If you are using other version, you can change the version "buster" in the following code to your version name.

``` toml
deb https://mirrors.sustech.rocks/debian/ buster main contrib non-free
# deb-src https://mirrors.sustech.rocks/debian/ buster main contrib non-free
deb https://mirrors.sustech.rocks/debian/ buster-updates main contrib non-free
# deb-src https://mirrors.sustech.rocks/debian/ buster-updates main contrib non-free
deb https://mirrors.sustech.rocks/debian/ buster-backports main contrib non-free
# deb-src https://mirrors.sustech.rocks/debian/ buster-backports main contrib non-free
deb https://mirrors.sustech.rocks/debian-security buster/updates main contrib non-free
# deb-src https://mirrors.sustech.rocks/debian-security buster/updates main contrib non-free
```

## Update Software Source

``` sh
apt-get update
```
