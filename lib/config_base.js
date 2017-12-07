const mysql = require('mysql');
const Sequelize = require('sequelize');

const dev_config = {
    database: 'wsc_blog',
    username: 'root',
    password: 'root',
    host: 'localhost',
    port: '3306'
}

const build_config = {

}

const config = dev_config;
    
const sequelize = new Sequelize(config.database,config.username,config.password,{
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})