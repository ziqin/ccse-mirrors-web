---
sidebarShare: true
sidebarDepth: 3
---

# PyPI Mirror

[PyPI](https://pypi.org/), a.k.a. the Python Package Index, is a centralized "repository of software for the Python programming language".

The PyPI Mirror is synchronized with [pypi.org](https://pypi.org) with [bandersnatch](https://pypi.org/project/bandersnatch/). 


## TL;DR

``` sh
pip install --upgrade pip -index-url https://mirrors.sustech.rocks/simple
pip config set global.index-url https://mirrors.sustech.rocks/simple
```

That's all.


## Detailed Instructions

### 1. Confirm your python environment

The `python` and `pip` commands you're using may be
- installed with package manager (e.g., `apt-get`, `yum`, etc.)
- self-compiled
- isolated by a python 3 venv (virtual environment)
- equipped with Anaconda or installed in a conda virtual environment
- bundled with Intel Parallel Studio
- ...

You can execute the following commands to gain insight into the `pip` command that you are using.

``` sh
which pip
pip --version
```

::: tip For Python 3 Users:
You may need to replace `pip` with `pip3`.
:::

### 2. Configure Index-url

#### For pip >= 10.0

``` sh
pip config set global.index-url https://mirrors.sustech.rocks/pypi/simple
```

::: warning
- Use the `https` schema instead of `http`
- Don't omit `simple`
:::

#### For older versions

You can upgrade to the latest version first:

``` sh
# you may need root privilege
pip install --upgrade pip --index-url https://mirrors.sustech.rocks/pypi/simple
```

Or, you can stay with the old version and manually edit the configuration file with your text editor:

``` toml
[global]
index-url = https://mirrors.sustech.rocks/pypi/simple
```

Path of the per-user configuration file:
- Linux: `$HOME/.config/pip/pip.conf`
- macOS: `$HOME/Library/Application Support/pip/pip.conf` or `$HOME/.config/pip/pip.conf`
- Windows: `%APPDATA%\pip\pip.ini`

You may create a new file if it doesn't exist.

You can refer to [pip user guide](https://pip.pypa.io/en/stable/user_guide/#configuration) for per-virtualenv or site-wide configuration.


## Temporary Use

``` sh
pip install package-name --index-url https://mirrors.sustech.rocks/pypi/simple
```

## Install Packages without Root Privilege

In an environment where you have no root access, like SUSTech Taiyi/Qiming HPC or your lab machines, you are still able to install the python dependencies you want.

### Option 1: Python 3 Venv (Suggested)

You can create multiple virtual environments in your home directory so that you can have dependencies of different versions for different projects.

Typically, this approach creates symbolic links for system-wide python.

Please refer to <https://docs.python.org/3/library/venv.html> for detailed usage.

### Option 2: Pip User Install

Please refer to <https://pip.pypa.io/en/stable/user_guide/#user-installs> for detailed usage.

This method is not suggested if you are sharing an account with others.

### Option 3: Conda virtual environment

If you need Python of different versions, for example, Python 3.4 for project A and Python 3.7 for project B, you can consider create several Conda environments.

Please refer to <https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html> for detailed usage.
