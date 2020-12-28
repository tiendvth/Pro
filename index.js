var sql = require("mssql");

var config = {
    use : 'sa',
    password : 'vantien1997',
    server: 8888,
    database: 'BANHANG'
};
sql.connect(config, function (err){
    if (err) console.log(err)
});
var request = new sql.Request();
request.query('seclect  from Student ', function (err,recordset){
    if (err) console.log(err)
    res.send(recordset);
});