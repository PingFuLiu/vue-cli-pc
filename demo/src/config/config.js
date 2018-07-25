/*
*请求管理
*/

import axios from 'axios'

//let host = 'http://lpf.bangxue100.com/home/'
//let host = 'http://beta.bangxue100.com/home/'
//let host = 'http://dev.bangxue100.com/home/'
//let host = "http://test.bangxue100.com/home/"

var host = '';
if(window.location.hostname.indexOf('bangxue100') > -1){//路由里面域名 线上
    host = '/home/' ;
}else{//本地
    host = 'http://lpf.bangxue100.com/home/';
}

/*
*接口统一管理
*/
let urls = key => {
    return host + {
        'index': 'index',//首页接口
        'login': 'nologin/login',//登录接口
        'islogin': 'nologin/islogin',//判断是否登录接口
    }[key]
}

/*
*请求数据格式json转string
*/
let json2String = jsonData => {
    var strArr = [];
    for(var k in jsonData){
        if(typeof jsonData[k] == 'object'){
            json2String(jsonData[k]);
        }else{
            strArr.push(k + '=' + jsonData[k]);
        }
    }
    strArr.sort();
    return strArr.join('&');
}

/*
*axios简易封装
*/
axios.defaults.withCredentials = true; // axios请求携带cookie
export let ajax = (obj) => {
    //loading
    let divEle;
    if(!obj.noLoading){
        divEle = document.createElement('div');
        divEle.className = 'mask';
        divEle.id = 'load';
        document.body.appendChild(divEle);
    }
    console.log(obj)
    console.log(axios)
    let type = obj.type || 'post';
    let params = type == 'post' ? json2String(obj.data) : {
        params: obj.data,
    }
    axios[type](urls(obj.key),params)
        .then(function(response){ 
            if(document.getElementById('load') != null){//移除loading
                !obj.noLoading && document.body.removeChild(divEle);
            }
            if(typeof response.data == 'string' || !response.data){
                response.data = JSON.parse(response.data || "{}");
                obj.success(response.data);//成功回调
            }else{
                obj.success(response.data);//成功回调
            }
        })
        .catch(function(error){
            //全局error处理
            if(document.getElementById('load') != null){//移除loading
                !obj.noLoading && document.body.removeChild(divEle);
            }
        })

}
