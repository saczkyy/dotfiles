#!/bin/sh
eval $(ssh-agent) &
ssh-add &
picom -b &
nitrogen --restore &
npm run start --prefix /home/saczky/react/weather-app/ &
