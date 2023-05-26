//api路由
//userApi.js —— 测试用 API 示例

var models = require('./db');
var express = require('express');
var app=express();
var router = express.Router();
var mysql = require('mysql');
var $sql = require('./sqlMap');
// 连接数据库
var conn = mysql.createConnection(models.mysql);
conn.connect();
var jsonWrite = function (res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1', msg: '操作失败'
        });
    }
    else {
        res.json(
            ret
        );
    }
};
// 增加用户接口
router.post('/addUser', (req, res) => {
    var sql = $sql.user.add;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.userName, params.password], function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});

router.get('/query',(req,res)=>{
    conn.query('select * from hhq.text',function(err,row){
        if(err){
             console.log(err)            
        }
        console.log(typeof row)
        let data = JSON.stringify(row)
        res.end(data)
    })
});

router.post('/login',(req,res)=>{
    var params=req.body;
    var sql='select * from hhq.text where ='+params.userName;
    connection.query(sql, function(err, result) {
		if (err) {   //链接失败 直接return;
			console.log('[错误]' + err);
			return;
		};

		if (result.length) {   //如果查到了数据
			console.log('------------start----------------');
			var string = JSON.stringify(result);
			var json = JSON.parse(string)[0];
			console.log(string)
			if (json.password == params.password) {
				console.log('密码校验正确');
			} else {
                                console.log('密码校验错误');
			}
			console.log('--------------end-----------------');
		} else {
			console.log('账号不存在')
		}
	})
})

module.exports = router;

