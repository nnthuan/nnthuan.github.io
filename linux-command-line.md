## Docker
```bash
# [warning] docker warning config.json permission denied
# https://askubuntu.com/questions/747778

sudo chown "$USER":"$USER" /home/"$USER"/.docker -R
sudo chmod g+rwx "/home/$USER/.docker" -R
sudo usermod -aG docker $USER
```
