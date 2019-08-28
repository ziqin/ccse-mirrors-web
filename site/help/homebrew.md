---
sidebarShare: true
---

# Homebrew Mirror

## Introduction

[Homebrew](https://brew.sh/) is probably the most widely used package manager on macOS. With homebrew, people can get their software and dependencies installed by simply running a command in their terminals.

This mirror synchronizes Homebrew Formula Index from <https://github.com/Homebrew>.

## Configuration

``` sh
git -C $(brew --repo) remote set-url origin https://mirrors.sustech.rocks/homebrew/brew.git
git -C $(brew --repo homebrew/core) remote set-url origin https://mirrors.sustech.rocks/git/homebrew/homebrew-core.git
git -C $(brew --repo homebrew/cask) remote set-url origin https://mirrors.sustech.rocks/git/homebrew/homebrew-cask.git
```

## Refresh Indexes

``` sh
brew update
```