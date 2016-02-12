FROM hypriot/rpi-node

ADD . /app
WORKDIR /app

CMD ["npm", "start"]
