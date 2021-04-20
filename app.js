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

app.get('/' ,(req,res) =>{
    res.render('index' , {
        title: 'Home'
    })
});
// app.get('/satellite' ,(req,res) =>{
//     res.render('satellite' , {
//         title: 'Satellite Parts'
//     })
// });
// app.get('/launchpad' ,(req,res) =>{
//     res.render('launchpad' , {
//         title: 'Launchpad'
//     })
// })
// app.get('/rocket' ,(req,res) =>{
//     res.render('rocket' , {
//         title: 'Rocket-Parts'
//     })
// });
app.get('/lysr-1' ,(req,res) =>{
    res.render('lysr-1' , {
        title: 'Lysr-1'
    })
});
app.get('/lyron' ,(req,res) =>{
    res.render('lyron' , {
        title: 'Lyron'
    })
});
app.get('/contact' ,(req,res) =>{
    res.render('contact' , {
        title: 'Contact'
    })
});
app.get('*' ,(req,res) =>{
    res.render('404' , {
        title: '404'
    })
});
var port = process.env.port || 80;

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})