const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');

const connect = require('./schemas');

const indexRouter = require('./routes')
const regRouter = require('./routes/reg')
const searchRouter = require('./routes/search')
const totalRouter = require('./routes/total')
const userRouter = require('./routes/users')

const app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'html')
nunjucks.configure('views', {
    express: app,
    watch: true,
})
connect();

app.use(express.static(path.join(__dirname, 'asset')))
app.use(express.static(path.join(__dirname, 'images')))
app.use(express.static(path.join(__dirname, 'common')))
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/', indexRouter)
app.use('/reg', regRouter)
app.use('/search', searchRouter)
app.use('/total', totalRouter)
app.use('/users/', userRouter)

app.use((req, res,next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 존재하지 않습니다`)
    error.status = 404;
    next(error);
});


app.use((err,req,res,netx)=>{
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error')
    // res.status(500).send(err.message);
})

app.listen(app.get('port'), () =>{
    console.log(app.get('port'), '번 포트에서 대기 중');
})