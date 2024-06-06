#!/bin/sh
eval `ssh-agent -s` &
ssh-add &
picom -b &
nitrogen --restore &
sudo systemctl start bluetooth.service &
