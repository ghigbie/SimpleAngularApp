const express = require('express'),
         path = require('path'),
          app = express();

app.set('port', process.env.PORT);
app.set('ip', process.env.IP);

app.use('/node_modules', express.static(path.join(__dirname, '/node_modules')));
app.use('/angular-res', express.static(path.join(__dirname, '/angualr-res')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(app.get('port'), app.get('ip'), () => {
    const port = app.get('port');
    console.log(`The server is listening on port ${port}.`);
});