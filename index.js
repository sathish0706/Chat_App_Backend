require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db/connection');
const cookieParser = require('cookie-parser');
const http = require('http');
const { Server } = require('socket.io')

const authRoute = require('./routes/auth.routes')
const userRoute = require('./routes/user.routes')
const chatRoute = require('./routes/chat.routes')


const app = express();

const server = http.createServer(app);

const io = new Server(server,{
    cors: {
        origin: 'https://roaring-moonbeam-8ed29d.netlify.app',
        methods: ['GET', 'POST']
    }
})

db()

app.use(express.json());
app.use(cookieParser())

app.use(cors({
origin: 'https://roaring-moonbeam-8ed29d.netlify.app/',
credentials: true
}));



app.use('/api', authRoute);
app.use('/api', userRoute)
app.use('/api', chatRoute)

chatRoute(io);

const PORT = process.env.PORT || 4000;
console.log(process.env.MONGO_URL)
console.log(process.env.PORT)

server.listen(PORT, () => {
    console.log(`App is running on PORT ${PORT}`);
})
