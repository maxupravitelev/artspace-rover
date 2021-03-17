import io from "socket.io-client";
// import { SOCKET_URL } from "config";


export const initSocket = (socketUrl) => {
    const socket = io(socketUrl)
    return socket
}
// const SOCKET_URL = 'http://192.168.178.50:6475/'

// export const socket = io(SOCKET_URL)