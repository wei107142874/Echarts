// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
var url="http://192.168.1.195/CWebService1.asmx/ForReasonsOfHospital";
var type="POST";
setxmlhttp(url,"",type,sceess);//指定回调函数
//执行成功回调
function  sceess(data) {
    setmain(data);
}

//设置xmlhttp
function setxmlhttp(url,data,type,callback) {
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open(type, url, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(data);
    xmlhttp.onreadystatechange = function (){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            if (typeof callback === "function"){
                callback(xmlhttp.responseText);
            }
        }
    }
}
//执行业务操作
function setmain(responseText) {
    var data = responseText;
    var pattern = />{1}\S*]<{1}/gi;
    data = jsonValue(data, pattern);
    var mqd=0;var zjd=0;var jsg=0;var fb=0;var tdh=0;var xj=0;var hjh=0;var hl=0;var js=0;var sr=0;var qt=0;
    var wmqd=0;var wzjd=0;var wjsg=0;var wfb=0;var wtdh=0;var wxj=0;var whjh=0;var whl=0;var wjs=0;var wsr=0;var wqt=0;
    for(var i=0;i<data.length;i++){
        switch(data[i].Reason){
            case "医院名气大":
                mqd++;
                if(data[i].Outsider=="外地人"){
                    wmqd++;
                }
                break;
            case "专家多":
                zjd++;
                if(data[i].Outsider=="外地人"){
                    wzjd++;
                }
                break;
            case "技术高":
                jsg++;
                if(data[i].Outsider=="外地人"){
                    wjsg++;
                }
                break;
            case "就近方便":
                fb++;
                if(data[i].Outsider=="外地人"){
                    wfb++;
                }
                break;
            case "服务态度好":
                tdh++;
                if(data[i].Outsider=="外地人"){
                    wtdh++;
                }
                break;
            case "设备先进":
                xj++;
                if(data[i].Outsider=="外地人"){
                    wxj++;
                }
                break;
            case "就诊环境好":
                hjh++;
                if(data[i].Outsider=="外地人"){
                    whjh++;
                }
                break;
            case "收费合理":
                hl++;
                if(data[i].Outsider=="外地人"){
                    whl++;
                }
                break;
            case "经他人介绍":
                js++;
                if(data[i].Outsider=="外地人"){
                    wjs++;
                }
                break;
            case "院内有熟人":
                sr++;
                if(data[i].Outsider=="外地人"){
                    wsr++;
                }
                break;
            case "其它":
                qt++;
                if(data[i].Outsider=="外地人"){
                    wqt++;
                }
                break;
        }
    }
    var totalReason = new Array();
    totalReason.push(mqd/data.length*100);
    totalReason.push(zjd/data.length*100);
    totalReason.push(jsg/data.length*100);
    totalReason.push(fb/data.length*100);
    totalReason.push(tdh/data.length*100);
    totalReason.push(xj/data.length*100);
    totalReason.push(hjh/data.length*100);
    totalReason.push(hl/data.length*100);
    totalReason.push(js/data.length*100);
    totalReason.push(sr/data.length*100);
    totalReason.push(qt/data.length*100);

    var outsider = new Array();
    outsider.push(wmqd/data.length*100);
    outsider.push(wzjd/data.length*100);
    outsider.push(wjsg/data.length*100);
    outsider.push(wfb/data.length*100);
    outsider.push(wtdh/data.length*100);
    outsider.push(wxj/data.length*100);
    outsider.push(whjh/data.length*100);
    outsider.push(whl/data.length*100);
    outsider.push(wjs/data.length*100);
    outsider.push(wsr/data.length*100);
    outsider.push(wqt/data.length*100);
    var title="患者来院理由分析";
    var option=setOption.setReasonAnaly(title,totalReason,outsider);
    myChart.setOption(option);
}
//获取WebService的数据转换成json格式
function jsonValue(data,pattern) {
    var data = data.match(pattern).toString();
    var start = data.indexOf(">");
    var end = data.indexOf("<");
    data = data.substring(start + 1, end);
    data = eval("(" + data + ")");//数据取出
    return data;
}