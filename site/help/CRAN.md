---
sidebarShare: true
prev: false
next: false
---

# CRAN Mirror

::: tip For TaiYi Users:
You should connect to TaiYi using Login04 node.
:::

## Temporary Use

``` sh
install.packages("<PackageName>", repos="https://mirrors.sustech.rocks/CRAN")
```

## Change the Configuration File

And you can manually create the configuration file and edit it with your text editor:

``` toml
options("repos" = c(CRAN="https://mirrors.sustech.rocks/CRAN"))
```

Path of the per-user configuration file:
- Linux: `$HOME/.Rprofile`
- macOS: `$HOME/.Rprofile`
