---
sidebarShare: true
---

# Alpine Mirror

## Introduction

> [Alpine Linux](https://alpinelinux.org/) is a security-oriented, lightweight Linux distribution based on musl libc and busybox.

Many people build their Docker images based on [alpine](https://hub.docker.com/_/alpine) to reduce the image size.

## Configuration

Suppose you are using Alpine Linux 3.10. You can write the following line to `/etc/apk/repositories`:

``` toml
https://mirrors.sustech.rocks/alpine/v3.10/main
https://mirrors.sustech.rocks/alpine/v3.10/community
```

## Use Mirror to Build Docker Image

You can also specify repositories in a Dockerfile:

``` dockerfile
FROM alpine:3.10

RUN echo "https://mirrors.sustech.rocks/alpine/v3.10/main" > /etc/apk/repositories ; \
    echo "https://mirrors.sustech.rocks/alpine/v3.10/community" >> /etc/apk/repositories ; \
    # followed by your wonderful commands
```

::: tip
Note that the first redirection uses `>` to overwrite the existing file while the second one uses `>>` to append a line.
:::
