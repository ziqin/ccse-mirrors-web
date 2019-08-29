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
sudo mv /etc/apt/sources.list /etc/apt/sources.list.backup
```

## Edit Configuration

For Ubuntu 18.04 LTS, Write the following lines to `/etc/apt/sources.list`:
> If you're using other releases, go to [Releases](https://wiki.ubuntu.com/Releases) to find the corresponding codename, and replace `bionic` in the following content.
> By convension, the codename used in `sources.list` is the first word of the release's codename. (e.g. Ubuntu 19.04 Codename 'Disco Dingo' -> replace `bionic` with `disco`)

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
