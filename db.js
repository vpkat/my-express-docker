const mysql=require("mysql");

function connect()
{
    const connection = mysql.createConnection({
        host:'192.168.1.15',
        user:'root',
        password:'root',
        database:'dacdb',
        port:9696
    })

    connection.connect();

    return connection;
}

module.exports={
    connect:connect
}