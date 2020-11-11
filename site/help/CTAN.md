---
sidebarShare: true
prev: false
next: false
---

# CTAN Mirror

## Temporary Update

Run the following command in your terminal.

``` sh
tlmgr update --all --repository https://mirrors.sustech.edu.cn/CTAN/systems/texlive/tlnet
```

## Change Settings Permanently

Run the following command in your terminal.

``` sh
sudo tlmgr option repository https://mirrors.sustech.edu.cn/CTAN/systems/texlive/tlnet
tlmgr update --all
```
