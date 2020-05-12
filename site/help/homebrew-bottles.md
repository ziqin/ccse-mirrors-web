---
sidebarShare: true
prev: false
next: false
---

# Homebrew-bottles Mirror

## Introduction

> Bottles are produced by installing a formula with brew install --build-bottle \<formula\> and then bottling it with brew bottle \<formula\>. This outputs the bottle DSL which should be inserted into the formula file.

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