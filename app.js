// import the packages
import express from 'express'
const app = express();
import cors from 'cors'
import cookieParser from 'cookie-parser';
import morgan from 'morgan';


// import the files
import authRouter from './Route/authRouter.js'
import paymentRouter from './Route/paymentRouter.js'
import userRouter from './Route/userRegistrationRoute.js'

// parsing the data is present in the database
app.use(express.json());

// connection between the fromtend & backend
app.use(cors({
    origin: process.env.FRONTEND_URI,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

// parsing the data is stored in the cookie 
// it is the logger middleware
app.use(cookieParser())

//  to configure the access route on the web
app.use(morgan('dev'))

// for reading the query param 
app.use(express.urlencoded({ extended: true }));


// userRoute 
app.use('/api/auth', authRouter)

// PaymentRoute 
app.use('/api/payment', paymentRouter)


// User registration Router 
app.use('/api/user', userRouter)

app.all('*', (req, res, next) => {
    res.status(404).json({
        success: false,
        msg: `Route ${req.originalUrl} not found`
    })
})


// app.use(errorMiddleWare);
export default app;
