---
layout: default
title: Use Case
description: "This document provides command-line use cases when you develop, code, DevOps, ... on a Linux environment.\n
Use your browser's search engine to find what you need. You can use the keyboard shortcut Ctrl + F.
"
---

## Find the process running on the port and kill

```bash
# Check if port is in use in
sudo lsof -i -P -n | grep LISTEN

# Kill a process with PID
kill PID
```

[back](../) | [home](/)
