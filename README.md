# artspace-rover

Visit artspaces online and in realtime with the help of a steerable camera rover.


# current stage

The app is currently in development. The latest demo version can be found at: [artspace-rover](https://artspace-rover.herokuapp.com/)

A manual for setting everything up is in the works.

At the current stage most things will need to be provided via code. The goal is to change that with the ongoing development so endusers can setup everything in the admin backend.


# Features

For end users:
- Steer a camera robot through an exhibition, watching a reatime live stream
- Schedule appointments for digital artspace visits
- start instant visits based on availability

The app is configurable with the help of an admin backend:
- Setup the connection between users and rovers
- Generate new timeslots for scheduled appointments


# Project structure / tech stack

This React frontend app communicates with two separate backends:
- the NodeJS/Express app [artspace-rover-backend](https://github.com/maxupravitelev/artspace-rover-backend) provides API endpoints for managing rovers, exhibitions, timeslots etc. in MongoDB
- the Flask app [remote-robocam](https://github.com/maxupravitelev/remote-robocam) provides API and websocket endpoints for steering the actual rover (built around a raspberry pi)