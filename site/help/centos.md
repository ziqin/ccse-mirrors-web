---
sidebarShare: true
prev: false
next: false
---

# CentOS Mirror

## Introduction

[CentOS](https://www.centos.org/) is a popular community-driven Linux distribution renowned for its stability and reliability. It is highly compatible with Red Hat Enterprise Linux (RHEL).

## Backup Existing Configuration

``` sh
sudo mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
```

## Edit Configuration File

Use the following command to replace the software repository: (from [TUNA](https://mirrors.tuna.tsinghua.edu.cn/help/centos/))

``` bash
sudo sed -e 's|^mirrorlist=|#mirrorlist=|g' \
         -e 's|^#baseurl=http://mirror.centos.org|baseurl=https://mirrors.sustech.edu.cn|g' \
         -i.bak \
         /etc/yum.repos.d/CentOS-*.repo

```

## Refresh Cache

``` sh
sudo yum makecache
```

