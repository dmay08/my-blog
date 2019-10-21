// Require modules
const express = require('express')
const path = require('path')

// methodOverride allows us to "inform" the server that a req is a PUT or DELETE
const methodOverride = require('method-override')

// Create the Express app
const app = express();

// Route modules
const indexRoutes = require('./routes/index')
const blogPostsRoutes = require('./routes/blogPosts')

// Configure the app (app.set)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views')); // tells Express WHERE views can be found ('views' folder)

app.locals.title = 'My Blog'

// Mount middleware (app.use)
app.use(function (req, res, next) {
    console.log(req.headers['user-agent'])
    next() // must call this or request will stop w/o finishing
})
app.use(express.static(path.join(__dirname, 'public'))) // hooks up 'Public' folder (returns CSS, JS, HTML, etc.)
app.use(express.json()) // middleware to process 'json'
app.use(express.urlencoded({ extended: true })) // middleware to process 'x-www-form-urlencoded'
app.use(methodOverride('_method'))

// Use routes
app.use('/', indexRoutes) // line 35 = same but w/o 'indexRoutes' middleware
app.use('/blog-posts', blogPostsRoutes) // line 39 = same but w/o 'blogPostsRoutes' middleware

// app.get('/', function(req, res) {
//     res.render('home')
// })

// app.get('/blogPosts', function (req, res) {
//     res.render('blogPosts/index', {
//         blogPosts: blogPosts
//     })
// })

// Tell the app to listen on port 3000
app.listen(3000, function () {
    console.log('Listening on port 3000')
})