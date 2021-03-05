---
sidebarShare: true
prev: false
next: false
---

# AdoptOpenJDK Mirrors

## Windows/macOS 用户

打开[下载页面](https://mirrors.sustech.edu.cn/AdoptOpenJDK/)，选择所需的版本，下载独立安装包。

## Debian/Ubuntu 用户

首先信任 GPG 公钥:

```shell
wget -qO - https://adoptopenjdk.jfrog.io/adoptopenjdk/api/gpg/key/public | sudo apt-key add -
```

以Ubuntu 20.04 LTS 为例，在`/etc/apt/sources.list.d/AdoptOpenJDK.list`中新增一行（其他版本请将`focal`修改为响应的版本代号）：

```bash
deb https://mirrors.sustech.edu.cn/AdoptOpenJDK/deb focal main
```

## CentOS/RHEL

新建 `/etc/yum.repos.d/AdoptOpenJDK.repo`，内容为

```
[AdoptOpenJDK]
name=AdoptOpenJDK
baseurl=https://mirrors.sustech.edu.cn/AdoptOpenJDK/rpm/centos$releasever-$basearch/
enabled=1
gpgcheck=1
gpgkey=https://adoptopenjdk.jfrog.io/adoptopenjdk/api/gpg/key/public
```

再执行

```shell
sudo yum makecache
```

## 参考

- [https://mirrors.tuna.tsinghua.edu.cn/help/adoptopenjdk/](https://mirrors.tuna.tsinghua.edu.cn/help/adoptopenjdk/)

