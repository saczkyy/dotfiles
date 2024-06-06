#!/bin/sh
eval `ssh-agent -s` &
ssh-add &
picom -b &
nitrogen --restore &
npm run start --prefix /home/saczky/react/weather-app/ &
