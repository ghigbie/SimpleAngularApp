const express = require('express'),
          app = express();

app.set('port', process.env.PORT);
app.set('ip', process.env.IP);

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.listen(app.get('port'), app.get('ip'), () => {
    const port = app.get('port');
    console.log(`The server is listening on port ${port}.`);
});