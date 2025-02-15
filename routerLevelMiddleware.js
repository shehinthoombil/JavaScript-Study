const express = require('express')
const app = express()
const router = express.Router();

// let middleware = (req,res,next)=>{
//     if(!req.query.age){
//         res.send("age wanted")
//     }else if(req.query.age < 18){
//         res.send("you cannot access")
//     }else{
//         next();
//     }
// }
// router.use((req, res, next) => {
//     console.log('Time:', new Date().toISOString()); // Logs the current time
//     next(); // Move to the next middleware or route
//   });

const checkAuth = (req, res, next) => {
    console.log('Middleware running...');
    if (req.query.auth === 'true') {
        next(); // Allow the request to proceed
    } else {
        res.send('Access denied! Authorization required.');
    }
};

router.get('/',(req,res)=>{
    res.send('Welcome to home')
})

router.get('/user',(req,res)=>{
    res.send('Welcome to the user page')
})

router.get('/contact',(req,res)=>{
    res.send('welcome to the contact')
})

// app.use('/api',router)
router.use(checkAuth);

app.get('/', (req, res) => {
    res.send('This is the root route');
});
app.listen(4000,()=>console.log("running"))

