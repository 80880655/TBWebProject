/*
 * @Author: Gao,feng /Siny0
 * @Description:  配置个人使用的JS
 * @Version: 
 * @Create Date: Do not edit
 * @LastEditors  : Gao,feng /Siny0
 * @LastEditTime : 2020-01-16 17:17:33
 */



/**
 *  1.显示和隐藏
 */
function show(obj) { 
    obj.style.display = "block"; 
}

function hide(obj) { 
    obj.style.display = "none"; 
}

/**
 * 2.传入ID传回对象
 */
function $(id) {
    return document.getElementById(id);
}


/**
 * 3.返回的是JSON的格式
 */
function scroll() {
    if (window.pageYOffset != null) {   // ie9+ 和其他浏览器
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if (document.compatMode == 'CSS1Compat') {
        //2.标准模式：检测是不是怪异模式的浏览器 --- 就是没有声明 <!DOCTYPE html>，如果是 CSS1Compat，则代表是标准模式
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {    //3.怪异模式：剩下的都是怪异模式
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}


























