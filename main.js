const express = require('/usr/local/lib/node_modules/'+'express');
const app = express();
const port = 3010;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html');
});

app.get('/diagram', (req, res) => {
    res.sendFile(__dirname+'/diagram.html');
}); 

app.get('/diagram_interactive', (req, res) => {
    res.sendFile(__dirname+'/diagram_interactive.html')
});

app.listen(port, () => {
    console.log(`listening at port:${port}`);
});