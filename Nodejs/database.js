'use strict';
var config = require('./databconfig.json').SQL;
const sql = require('mssql/msnodesqlv8');

async function database() 
{
    try 
    {
        let pool = await sql.connect(config);
        console.log('server connected successfully');
    } 
    catch (error) 
    {
        console.log(' server error :' + error);
    }
}

module.exports = 
{
    database: database,
};