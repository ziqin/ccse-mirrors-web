---
sidebarShare: true
prev: false
next: false
---

# Ubuntu Mirror

## Introduction

[Ubuntu](https://ubuntu.com/) is a popular and user-friendly Linux distribution based on Debian.

## Backup Existing Configuration

``` sh
sudo mv /etc/apt/source.list /etc/apt/source.list.backup
```

## Edit Configuration

Write the following lines to `/etc/apt/source.list`:

```
deb https://mirrors.sustech.rocks/ubuntu/ bionic main restricted universe multiverse
# deb-src https://mirrors.sustech.rocks/ubuntu/ bionic main restricted universe multiverse
deb https://mirrors.sustech.rocks/ubuntu/ bionic-updates main restricted universe multiverse
# deb-src https://mirrors.sustech.rocks/ubuntu/ bionic-updates main restricted universe multiverse
deb https://mirrors.sustech.rocks/ubuntu/ bionic-backports main restricted universe multiverse
# deb-src https://mirrors.sustech.rocks/ubuntu/ bionic-backports main restricted universe multiverse
deb https://mirrors.sustech.rocks/ubuntu/ bionic-security main restricted universe multiverse
# deb-src https://mirrors.sustech.rocks/ubuntu/ bionic-security main restricted universe multiverse

# pre-release
# deb https://mirrors.sustech.rocks/ubuntu/ bionic-proposed main restricted universe multiverse
# deb-src https://mirrors.sustech.rocks/ubuntu/ bionic-proposed main restricted universe multiverse
```

## Refresh Repository Indexes

``` sh
sudo apt-get update
```
