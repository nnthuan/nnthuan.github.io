---
layout: default
title: Use Case
description: "This document provides command-line use cases when you develop, code, DevOps, ... on a Linux environment"
---

## Find the process running on the port and kill it

```bash
# Check if port is in use in
sudo lsof -i -P -n | grep LISTEN

# Kill a process with PID
kill PID
```

## Generate a random password

```bash
openssl rand -base64 15
```

[back](./) | [home](/)
