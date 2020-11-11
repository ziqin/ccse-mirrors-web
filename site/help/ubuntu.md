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

For Ubuntu 18.04 LTS, write the following lines to `/etc/apt/sources.list`:

```
deb https://mirrors.sustech.edu.cn/ubuntu/ bionic main restricted universe multiverse
# deb-src https://mirrors.sustech.edu.cn/ubuntu/ bionic main restricted universe multiverse
deb https://mirrors.sustech.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
# deb-src https://mirrors.sustech.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
deb https://mirrors.sustech.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
# deb-src https://mirrors.sustech.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
deb https://mirrors.sustech.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
# deb-src https://mirrors.sustech.edu.cn/ubuntu/ bionic-security main restricted universe multiverse

# pre-release
# deb https://mirrors.sustech.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
# deb-src https://mirrors.sustech.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
```

::: tip
If you're using other releases, go to [Releases](https://wiki.ubuntu.com/Releases) to find the corresponding codename, and replace `bionic` in the above content.

By convention, the codename used in `sources.list` is the first word of the release's codename. For example, the code name of Ubuntu 19.04 is "Disco Dingo", so you should replace `bionic` with `disco`.
:::

## Refresh Repository Indexes

``` sh
sudo apt-get update
```
