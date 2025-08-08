const express=require('express')
const dotenv=require('dotenv')
const cors=require('cors')
const cookieParser=require('cookie-parser')
const session=require('express-session')
const passport=require('passport')
const dbConnect = require('./utils/db')
const googleAuth = require('./middleware/googleAuth')
const googleStrategy=require('passport-google-oauth20').Strategy
const UserRouter=require('./routes/user')
const errorHandler = require('./middleware/errorHandler')
const {FRONTEND_URL,BACKEND_URL}=require('./config')

dotenv.config()


const app=express()
app.set('trust proxy', 1);

// app.use(cors({
//     origin:FRONTEND_URL,
//     credentials:true
// }))

app.use(cors({
  origin: FRONTEND_URL,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}));

app.use(session({
    secret:'secret',
    resave:false,
    saveUninitialized:true,
    cookie: {
    httpOnly: true,
      secure: true,
      sameSite: 'none',
    },
}))
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))


app.use(passport.initialize())
app.use(passport.session())

passport.use(new googleStrategy({
    clientID:process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL:`${BACKEND_URL}/auth/google/callback`
},(accessToken,refreshToken,profile,done)=>{
    return done(null,profile)
}))

passport.serializeUser((user,done)=>{
    done(null,user)
})

passport.deserializeUser((user,done)=>{
    done(null,user)
})

app.get('/auth/google',passport.authenticate('google',{
    scope:["email","profile"],
    prompt:"select_account"
}))

app.get('/auth/google/callback',
    passport.authenticate('google',{
        failureRedirect:FRONTEND_URL
    }),
    googleAuth,
    async(req,res)=>{
        res.redirect(`${FRONTEND_URL}/home`)
    }
)

app.use('/user',UserRouter)

app.use(errorHandler)

dbConnect()
app.listen(process.env.PORT,()=>{
    console.log(`listening on ${BACKEND_URL}`)
})

