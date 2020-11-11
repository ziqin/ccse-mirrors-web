---
sidebarShare: true
prev: false
next: false
---

# Ubuntu-ports Mirror

## Configuration

Write the following settings to `/etc/apt/sources.list` if you are using Ubuntu 18.04 LTS. If you are using other version, you can change the version name "bionic" in the following code to your version name.

``` toml
deb https://mirrors.sustech.edu.cn/ubuntu-ports/ bionic main restricted universe multiverse
# deb-src https://mirrors.sustech.edu.cn/ubuntu-ports/ bionic main restricted universe multiverse
deb https://mirrors.sustech.edu.cn/ubuntu-ports/ bionic-updates main restricted universe multiverse
# deb-src https://mirrors.sustech.edu.cn/ubuntu-ports/ bionic-updates main restricted universe multiverse
deb https://mirrors.sustech.edu.cn/ubuntu-ports/ bionic-backports main restricted universe multiverse
# deb-src https://mirrors.sustech.edu.cn/ubuntu-ports/ bionic-backports main restricted universe multiverse
deb https://mirrors.sustech.edu.cn/ubuntu-ports/ bionic-security main restricted universe multiverse
# deb-src https://mirrors.sustech.edu.cn/ubuntu-ports/ bionic-security main restricted universe multiverse

# deb https://mirrors.sustech.edu.cn/ubuntu-ports/ bionic-proposed main restricted universe multiverse
# deb-src https://mirrors.sustech.edu.cn/ubuntu-ports/ bionic-proposed main restricted universe multiverse
```

## Update Software Source

``` sh
apt-get update
```
