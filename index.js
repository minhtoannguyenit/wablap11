const express = require('express');
const path = require('path');

const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');

// 2. installation
const app = express();

// 3. configuration
// app.enable('case sensitive routing');
app.set('case sensitive routing', true);
app.set('env', 'development');


// 4. Middleware
// apply express buit-in middleware
// app.use(express.urlencoded());

// if we don't provide a path, it will be executed for all requests
// /user -> /user/*/*/*
// app.use('/user', function(req, res, next) {
//   console.log('Time:', Date.now());
//   res.send('Hello World');
// })


app.use(express.static(path.join(__dirname)));

app.use('/products', productRouter);
app.use('/users', userRouter);


// 404 handler
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// 6. Error Handling
app.use((err, req, res, next) => {
  res.status(500).send('Whoops! Something went wrong!');
});

// 7. bootup
app.listen(process.env.PORT ||3000, () => {
  console.log('Server is running at port 3000');
});