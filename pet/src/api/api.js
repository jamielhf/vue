/**
 * Created by linhaifeng on 2016/11/16.
 */
import axios from 'axios';

export  default {

    /*
     * 获取首页列表信息
     * */
    indexGetList:function (cb) {

        axios.get('/index/getList').then(function (res) {
            if(res.data.data.code ==1000){

                cb(res.data.data.data);
            }

        });

    },
    /*
    * 获取首页图片
    * */
    indexGetImg:function (cb) {
        axios.get('/index/getImgList').then(function (res) {
            if(res.data.data.code ==1000){
                cb(res.data.data.data);
            }

        });
    },
    /*
    * 获取文章详情
    * @param id 文章id
    * */
    articleGetContent:function (id,cb) {
        axios.get('/article/getData',{
            "articleId":id
        }).then(function (res) {
            if(res.data.data.code ==1000){
                cb(res.data.data.data[0]);
            }
        })
    },
    /*
     * 提交评论
     * @param id 文章id
     * */
    articleSubmit:function (val,uid,rname,aid,commentId,cb) {
        axios.get('/article/submit',{val:val,uid:uid,rid:rname,aid:aid,commentId:commentId}).then(function (res) {
            console.log(val);
            if(res.data.data.code ==1000){
                cb(res.data.data.data[0]);
            }})

    }




};


