const { Socket } = require("dgram");
const express  = require("express")
const http  = require("http");
const path = require('path')
const {Server} = require("socket.io");

const app = express();
const server = http.createServer(app)
const io = new Server(server )

//socket connections 
io.on('connection',(Socket)=>{
    Socket.on("user-message",(message)=>{
        console.log(`A new user Message`,message)
        io.emit("message", message)
    })
})
app.use(express.static(path.resolve("./public")));


app.get("/",(req,res)=>{
    return res.sendFile('/public/index.html')
})



server.listen(8080,()=>{
    console.log("starver starded")
})

