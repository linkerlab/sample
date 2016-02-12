FROM hypriot/rpi-node

ADD . /app
WORKDIR /app

CMD ["node", "web.js"]
