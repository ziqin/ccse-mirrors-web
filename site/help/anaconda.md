---
sidebarShare: true
prev: false
next: false
---

# Anaconda Mirror

::: tip For TaiYi Users:
You should connect to TaiYi using Login04 node.
:::

## Introduction

> [Anaconda](https://en.wikipedia.org/wiki/Anaconda_(Python_distribution)) is a free and open-source distribution of the Python and R programming languages for scientific computing (data science, machine learning applications, large-scale data processing, predictive analytics, etc.), that aims to simplify package management and deployment.

## Configuration

You can run the following commands in your terminal:

``` sh
conda config --add channels https://mirrors.sustech.edu.cn/anaconda/pkgs/free/
conda config --add channels https://mirrors.sustech.edu.cn/anaconda/pkgs/main/
conda config --set show_channel_urls yes
```

Then a configuration file named `.condarc` will be created. And you can manually create the configuration file and edit it with your text editor:

``` toml
channels:
    - https://mirrors.sustech.edu.cn/anaconda/pkgs/free/
    - https://mirrors.sustech.edu.cn/anaconda/pkgs/main/
show_channel_urls: true
```

Path of the per-user configuration file:
- Linux: `$HOME/.condarc`
- macOS: `$HOME/.condarc`
- Windows: `C:\Users\<YourUserName>\.condarc`
