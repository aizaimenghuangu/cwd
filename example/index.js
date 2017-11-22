

const express = require('express'),
    bodyParser = require('body-parser'),
    CWD = require('./../index'),
    app = express(),
morgan = require('morgan');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

if ('development' == app.get('env')) {
    // app.use(errorHandler());
    console.log('开发者模式');
    app.use(function(err, req, res, next) {
        log.info(JSON.stringify(err));
        res.render('error', {
            message: err.message,
            title: err.message,
            result: err.toString(),
            error: err
        });
    });
}

console.log(app.get('env'));


app.post('/', CWD());
app.listen(5566, function () {
    console.log('Express server listening on port http://localhost:5566');
});
