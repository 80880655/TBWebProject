/*
 * @Author: Gao,feng /Siny0
 * @Description:  配置个人使用的JS
 * @Version: 
 * @Create Date: Do not edit
 * @LastEditors  : Gao,feng /Siny0
 * @LastEditTime : 2020-04-01 15:57:33
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
 * 3.返回的是JSON的格式; 被卷去部分的函数。
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


// 4.屏幕宽度自动检测
function client() {
    if (window.innerWidth != null) {   // ie9+ 和其他浏览器
        return {
            Width: window.innerWidth,
            Height: window.innerHeight
        }
    }
    else if (document.compatMode == 'CSS1Compat') {
        //2.标准模式：检测是不是怪异模式的浏览器 --- 就是没有声明 <!DOCTYPE html>，如果是 CSS1Compat，则代表是标准模式
        return {
            Width: document.documentElement.clientWidth,
            Height: document.documentElement.clientHeight
        }
    }
    //3.怪异模式：剩下的都是怪异模式
    return {
        Width: document.body.clientWidth,
        Height: document.body.clientHeight
    }
}


// 5.阻止冒泡
function stopPropagation(event) {
    var event = event || window.event;
    if (event && event.stopPropagation) {
        event.stopPropagation();
    }
    else {
        event.cancelBubble = true;
    }
}

// 6.返回targetId,来判断当前用户点击的是那一个元素会标签
function getTargetId(event) {
    var event = event || window.event;
    var targetId = event.target ? event.target.id : event.srcElement.id;
    return targetId;
}

//7. 匀速运动函数
function animate(obj, target) {
    clearInterval(obj.timer);  // 先清除定时器
    var speed = obj.offsetLeft < target ? 15 : -15;
    obj.timer = setInterval(function () {
        var result = target - obj.offsetLeft;
        obj.style.left = obj.offsetLeft + speed + 'px';

        // Math.abs()取绝对值
        if (Math.abs(result) <= 15) {
            clearInterval(obj.timer);
            // 如果在这个差值范围内，则直接等于这个值就可以了
            obj.style.left = target + 'px';
        }
    }, 10);
}

//8.获取当前样式的兼容函数，上面的缓动函数的依赖; current 英文解释：现在的/当前的； 也可以设置透明度，
//如果是透明度则需要注意 是小数0.6这种数字
function getStyle(tag, attr) {
    if (tag.currentStyle) {
        //ie浏览器使用
        return tag.currentStyle[attr];
    } else {
        //W3C 非IE浏览器使用，比如火狐、谷歌等浏览器
        return windows.getComputedStyle(tag, null)[attr];
        // return getComputedStyle(tag, false)[attr];
    }
}

//9.动态缓慢动画函数（回调函数），传入 对象、目标、属性、方法体
function animation(obj, target, attr,fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        // 获取当前 box对象的位置，替代 obj.offsetLeft ; 注意单位的转换，单位会带上 px，所以使用 parseInt 转换。
        var current = parseInt(getCurrentStyle(obj, attr));

        // var step = (target - parseInt(getCurrentStyle(box, attr))) / 10;
        var step = (target - current) / 10;

        step = step > 0 ? Math.ceil(step) : Math.floor(step);

        // obj.style[attr] = obj.offsetLeft + step + 'px';
        obj.style[attr] = current + step + 'px';

        if (current == target) {
            clearInterval(obj.timer);

            // 回调函数
            if (fn) {
                fn();
            }
        }
    }, 25);
}

















