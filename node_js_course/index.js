// const http = require('http');
// const EventEmitter = require('events');
const PORT = process.env.PORT || 5000;
//const Router = require('./framework/Router');
const Application = require('./framework/Application');
const userRouter = require('./src/user-router');

const app = new Application();

//const router = new Router();



app.addRouter(userRouter);

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));