$(document).ready(function(){
    var timer,
        speed = 1500;
        // 使用setInterval时间函数
    timer = setInterval(function(){
        // 使用animate方法，修改top值
        // 先让ul向上走20px
        $('.wrap').find('ul:first').animate({'marginTop':-40+'px'},500,function(){
            // 当前是在动画完成后执行
            $(this).css({marginTop:0})
            .find("li:first")
            .appendTo(this)
            // 如果展示两条，则在执行
            $(this).find("li:first")
            .appendTo(this)
        })
    },speed)
})