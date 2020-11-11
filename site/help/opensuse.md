---
sidebarShare: true
prev: false
next: false
---

# Opensuse Mirror

## Introduction

> openSUSE, formerly SUSE Linux, is a Linux distribution sponsored by SUSE Software Solutions Germany GmbH and other companies.

## 禁用原有软件源

``` sh
sudo zypper mr -da
```

## 添加南科大镜像源，以 openSUSE Leap 42.3 为例：

``` sh
sudo zypper ar -fcg https://mirrors.sustech.edu.cn/opensuse/distribution/leap/42.3/repo/oss SUSTC:42.3:OSS
sudo zypper ar -fcg https://mirrors.sustech.edu.cn/opensuse/distribution/leap/42.3/repo/non-oss SUSTC:42.3:NON-OSS
sudo zypper ar -fcg https://mirrors.sustech.edu.cn/opensuse/update/leap/42.3/oss SUSTC:42.3:UPDATE-OSS
sudo zypper ar -fcg https://mirrors.sustech.edu.cn/opensuse/update/leap/42.3/non-oss SUSTC:42.3:UPDATE-NON-OSS
```

命令中最后一个参数为每一个源指定了一个 alias （别称），可以根据个人喜好更改。

## 手动刷新软件源

``` sh
sudo zypper ref
```

### 图形界面下配置方法

以 openSUSE Leap 42.3 为例：

1. 打开 YaST；
2. 点击 Software 分组中的 Software Repositories；
3. 在打开的窗口上方的列表中点击 openSUSE-Leap-42.3-Oss ，点击 Edit；
4. 将 download.opensuse.org 替换为 mirrors.ustc.edu.cn/opensuse，点OK；
5. 再用同样的方法编辑 openSUSE-Leap-42.3-Oss 和 openSUSE-Leap-42.3-Oss。

## 注意事项

- 由于使用了 MirrorBrain 技术， 中央服务器 (download.opensuse.org) 会按照 IP 地理位置中转下载请求到附近的镜像服务器（但刷新软件源时仍从中央服务器获取 元数据），所以更改软件源通常只会加快刷新软件源的速度，而对下载速度影响不大。 参见 [openSUSE 中文论坛](https://forum.suse.org.cn/t/opensuse/1759) 。
- 我们不提供 source 和 debug 源。
- Tumbleweed 滚动发行版软件源的地址与上述例子稍有不同。

## 相关链接

- 官方主页 [https://www.opensuse.org/](https://www.opensuse.org/)
- 邮件列表 [https://en.opensuse.org/Communicate/Mailinglists](https://en.opensuse.org/Communicate/Mailinglists)
- 论坛 [https://forums.opensuse.org/](https://forums.opensuse.org/)
- 中文论坛 [https://forum.suse.org.cn/](https://forum.suse.org.cn/)
- Wiki [https://en.opensuse.org/](https://en.opensuse.org/)
- 中文 Wiki [https://zh.opensuse.org/](https://zh.opensuse.org/)
- 文档 [https://en.opensuse.org/Documentation](https://en.opensuse.org/Documentation)
- openSUSE Guide [https://lug.ustc.edu.cn/sites/opensuse-guide/](https://lug.ustc.edu.cn/sites/opensuse-guide/)

## 参考文档

[https://mirrors.ustc.edu.cn/help/opensuse.html](https://mirrors.ustc.edu.cn/help/opensuse.html)
