const express = require('express');
const httpProxy = require('express-http-proxy');

// Constants
const PORT = 3001;
const marketingURL = "localhost:3000";
const basketURL = "localhost:5000";

//Routes
const compositionRoute = require("./routes/composition");


// App
const app = express();

app.get('/', (req, res) => {
    res.send('Server is running');
});

//proxy
app.use('/campaign', httpProxy(marketingURL));
app.use('/basket', httpProxy(basketURL));

app.use('/api', compositionRoute);

app.listen(PORT, () => console.log("Listen to port "+PORT));
