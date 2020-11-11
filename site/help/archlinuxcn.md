---
sidebarShare: true
prev: false
next: false
---

# Arch Linux CN Mirror

## Introduction

> [Arch Linux 中文社区仓库](https://www.archlinuxcn.org/archlinux-cn-repo-and-mirror/)是由 Arch Linux 中文社区驱动的非官方软件仓库，包含许多官方仓库未提供的额外的软件包，以及已有软件的 git 版本等变种。一部分软件包的打包脚本来源于 AUR，但也有许多包与 AUR 不一样。

## Configuration

使用方法：在 /etc/pacman.conf 文件末尾添加以下两行：

``` toml
[archlinuxcn]
Server = https://mirrors.sustech.edu.cn/archlinuxcn/$arch
```

之后安装 archlinuxcn-keyring 包以导入 GPG key：

``` sh
pacman -Syu archlinuxcn-keyring
```
