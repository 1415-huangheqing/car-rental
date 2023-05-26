// sql语句
//sqlMap.js——SQL 语句映射文件，供 API 调用
var sqlMap = {
    user: {
        add: 'insert into  hhq.text (userName,password) values (?,?)',
    }

}
module.exports = sqlMap


