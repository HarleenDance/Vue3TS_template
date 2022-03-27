import { Toast } from "vant";

/**
 * 各种表单验证方法放在这里
 * */
var methods = { 
    dateFormat(time, fmt) {
        if (fmt == undefined) {
            fmt = "yyyy-MM-dd HH:mm:ss";
        }
        if (time == null || time == undefined ||time == "") {
            return "";
        }
        var date = new Date(time);
        if(isNaN(date)){
            return "";
        }
        var o = {
            "M+": date.getMonth() + 1,
            "d+": date.getDate(),
            "H+": date.getHours(),
            "m+": date.getMinutes(),
            "s+": date.getSeconds(),
            "S+": date.getMilliseconds()
        };
        //因为date.getFullYear()出来的结果是number类型的,所以为了让结果变成字符串型，下面有两种方法：
        if (/(y+)/.test(fmt)) {
            //第一种：利用字符串连接符“+”给date.getFullYear()+""，加一个空字符串便可以将number类型转换成字符串。
            fmt = fmt.replace(
                RegExp.$1,
                (date.getFullYear() + "").substr(4 - RegExp.$1.length)
            );
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                //第二种：使用String()类型进行强制数据类型转换String(date.getFullYear())，这种更容易理解。
                fmt = fmt.replace(
                    RegExp.$1,
                    RegExp.$1.length == 1 ?
                        o[k] :
                        ("00" + o[k]).substr(String(o[k]).length)
                );
            }
        }
        return fmt;
    },
    //加载中状态
    ToastLoading(message){
        Toast.loading({
            message:message || '加载中...',
            duration:0,
           loadingType: 'spinner' 
        });
    },
    ClearLoading(){
        Toast.clear();
    }

    
}


/**
 * 更改日期
 * y年， m月， d日， h小时， n分钟，s秒
 * Example: new Date().add("d",-1)
 */
Date.prototype.add = function (part, value) {
    let newDate = new Date(this)
    value *= 1
    if (isNaN(value)) {
        value = 0
    }
    switch (part) {
        case 'y':
            newDate.setFullYear(this.getFullYear() + value)
            break
        case 'm':
            newDate.setMonth(this.getMonth() + value)
            break
        case 'd':
            newDate.setDate(this.getDate() + value)
            break
        case 'h':
            newDate.setHours(this.getHours() + value)
            break
        case 'n':
            newDate.setMinutes(this.getMinutes() + value)
            break
        case 's':
            newDate.setSeconds(this.getSeconds() + value)
            break
        default:
    }
    return newDate
}

export default methods;
