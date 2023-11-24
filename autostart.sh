#!/bin/sh

picom -b &
nitrogen --restore &
sudo systemctl start bluetooth.service &
