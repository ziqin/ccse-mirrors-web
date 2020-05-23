---
sidebarShare: true
prev: false
next: false
---

# Homebrew-bottles Mirror

## Introduction

[Bottle](https://docs.brew.sh/Bottles) is Homebrew binary pre-compiled package. If a bottle is available and usable it will be downloaded and poured automatically when you `brew install`.

## Temporary Use

If you want to use the mirrors temporarily, you can just run the following line in your terminal, else you can change the environment variables.

``` sh
export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.sustech.rocks/homebrew-bottles
```

## Write Environment Variables

``` sh
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.sustech.rocks/homebrew-bottles' >> ~/.bash_profile
source ~/.bash_profile
```