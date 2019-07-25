module.exports.login = function(application, req, res){
    res.render('login', { dadosForm : {} });

}
module.exports.autenticar = function(application, req, res){ 
    var dadosForm = req.body;

    req.assert('user', 'Usuario não pode ser vazio.').notEmpty();
    req.assert('password', 'Senha não pode ser vazio.').notEmpty();

    var error = req.validationErrors();

    if(error){
        res.render('login', { dadosForm });
        return;
    }else{
        res.send('tudo testsdlkasjdljdflskd');
    }
}