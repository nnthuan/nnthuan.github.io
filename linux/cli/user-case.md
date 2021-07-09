---
layout: default
title: Use Case
description: Use case
---

## Find the process running on the port and kill

```bash
# Check if port is in use in
sudo lsof -i -P -n | grep LISTEN

# Kill a process with PID
kill PID
```
