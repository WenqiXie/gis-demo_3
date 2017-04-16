// log 函数
var log = function() {
    console.log.apply(console, arguments)
}

// 选择单个标签
var e = function(selector) {
    return document.querySelector(selector)
}

// 选择全部相同标签
var es = function(selector) {
    return document.querySelectorAll(selector)
}

// 添加 dom
var appendHtml = function(element, html) {
	element.insertAdjacentHTML('beforeend', html)
}

// 绑定事件
var bindEvent = function(element, eventName, callback) {
    element.addEventListener(eventName, callback)
}

// 增减class
var toggleClass = function(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
}

// 删除所有class
var removeClassAll = function(className) {
    var selector = '.' + className
    var elements = document.querySelectorAll(selector)
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i]
        e.classList.remove(className)
    }
}

// 绑定所有
var bindAll = function(selector, eventName, callback) {
    var elements = document.querySelectorAll(selector)
    for(var i = 0; i < elements.length; i++) {
        var e = elements[i]
        bindEvent(e, eventName, callback)
    }
}

// find 函数可以查找 element 的所有子元素
var find = function(element, selector) {
    return element.querySelector(selector)
}
