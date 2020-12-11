var express = require('express');

var app= express();

//static files
app.use(express.static('public'));
app.use('/bootstrap4', express.static(__dirname + 'public/bootstrap4'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/image', express.static(__dirname + 'public/image'));

//set views
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/satellite' ,(req,res) =>{
    res.render('satellite' , {
        title: 'Satellite Parts'
    })
});
app.get('/launchpad' ,(req,res) =>{
    res.render('launchpad' , {
        title: 'Launchpad'
    })
})
app.get('/rocket' ,(req,res) =>{
    res.render('rocket' , {
        title: 'Rocket-Parts'
    })
})
var port=process.env.port | 3005;

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})