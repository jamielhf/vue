/**
 * Created by linhaifeng on 2016/11/7.
 */



var Mock = require('mockjs');
var Random = Mock.Random;
Random.cname();
Random.image('200x100');
Random.cparagraph();
Random.ctitle();
/*
* 首页数据
*
* */
 Mock.mock(
    '/index/getList',
    {
        "data":{
            "code":"1000",
            "msg":"success",
            "data|10-11":[
                {
                    "name":"@cname",
                    "tag|1-3":["标签1"],
                    "userIcon":"@image",
                    "detail":"@cparagraph",
                    "imgGrounp|1-9":["@image"],
                    "articleId|+1":1
                },
            ]
        }
    }
)
     //首页图片新闻
     .mock(
         '/index/getImgList',
         {
             "data":{
                 "code":"1000",
                 "msg":"success",
                 "data|3-6":[
                     {
                         img:'@image',
                         imgUrl:'/index',
                     }
                 ]
             }
         }
     )
 /*
  * 文章数据
  *
  * */
     .mock(
         '/article/getData',
         {
             "data":{
                 "code":"1000",
                 "msg":"success",
                 "data":[
                     {
                         "name":"@cname",
                         "tag|1-3":["标签1"],
                         "userIcon":"@image",
                         "title":"@ctitle",
                         "imgGrounp|1-9":["@image"],
                         "articleId|+1":1,
                         "userId|+1":1,
                         "detail":"@cparagraph",
                         "time":"20161102 10:35",
                         "comment|2-4":[
                             {
                                 "commentId|1-100":1,
                                 "name":"@cname",
                                 "userIcon":"@image",
                                 "content":"@ctitle",
                                 "userId|1-100":1,
                                 "reply|2-5":[
                                     {
                                         "r_name":"@cname",
                                         "name":"jamie",
                                         "content":"@ctitle",
                                         "userId":"3",
                                         "r_userId":"4"

                                     }
                                 ]
                             }
                         ]
                     }
                 ]
             }
         }
     )

/*
* 提交评论
*
* */
     .mock(
         '/article/submit',
         {
             "data":{
                 "code":"1000",
                 "msg":"success",
                 "data":[
                     {
                         "name":"@cname",
                         "tag|1-3":["标签1"],
                         "userIcon":"@image",
                         "title":"@ctitle",
                         "imgGrounp|1-9":["@image"],
                         "articleId|+1":1,
                         "userId|+1":1,
                         "detail":"@cparagraph",
                         "time":"20161102 10:35",
                         "comment|2-4":[
                             {
                                 "commentId|1-100":1,
                                 "name":"@cname",
                                 "userIcon":"@image",
                                 "content":"@ctitle",
                                 "userId|1-100":1,
                                 "reply|6":[
                                     {
                                         "r_name":"@cname",
                                         "name":"jamie",
                                         "content":"@ctitle",
                                         "userId":"3",
                                         "r_userId":"4"

                                     }
                                 ]
                             }
                         ]
                     }
                 ]
             }
         }
     )

/*
 * 获取个人信息
 *
 * */
     .mock(
         '/home/index',
         {
             "data":{
                 "code":"1000",
                 "msg":"success",
                 "data":[
                     {
                         "name":"@cname",
                         "tag|1-3":["标签1"],
                         "userIcon":"@image",
                         "userId|+1":1
                     }
                 ]
             }
         }
     );
export default Mock;