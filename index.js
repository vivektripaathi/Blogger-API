const app = require('express')();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const userRoute = require('./src/routes/user')
const blogRoute = require('./src/routes/blog')
const authJwt = require('./src/helpers/jwt');
const errorHandler = require('./src/helpers/error-handler')
require('./src/config/database')
const api = process.env.API_URL

// Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('tiny'));
app.use(cors()); // Cors allows any type of application to request api
app.options('*', cors());
app.use(authJwt());
app.use((err, req, res, next) => {
    errorHandler(err, req, res, next);
});


// Routes
app.use(`${api}/users`, userRoute)
app.use(`${api}/blogs`, blogRoute)


app.listen(3000, ()=>{
    console.log("PORT : 3000")
});