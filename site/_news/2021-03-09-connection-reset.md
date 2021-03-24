---
author: Qingyuan
date: 2021-03-09T14:00:00+0800
editLink: false
---
# 关于近期访问镜像站时遇到“连接被重置”的故障

参考 [https://c.cra.moe/t/topic/66](https://c.cra.moe/t/topic/66)，

> 在校外向镜像站公网v4地址的443端口发起的首个HTTPS连接会被中间设备(middlebox)抢答并阻断，镜像站主机根本没有收到这条TCP连接相关的数据包。
>
> 此情况经常发生，但仍有首次尝试即可顺利连接的记录。
>
> 中间设备似乎在截获一个TLS Client Hello后便会放行该IP随后向443端口发起的TCP连接。此放行规则的超时时间似乎不定，大致为30分钟至一个半小时。
>

我们正持续与信息中心调查此问题，后续的更新将在CRA Community的相应板块更新。