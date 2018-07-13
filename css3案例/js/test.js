// 获取元素
var getClass = function ( selector ){
    return document.getElementsByClassName(selector);
}
// 检测类名
var hasClass = function(ele, name) {
    return ele.className.match(new RegExp('(\\s|^)' + name + '(\\s|$)'));
}
// 添加类名
var addClass = function(ele,name){
    // 获取当前元素
    if (!this.hasClass(ele, name)) {
        ele.className += " " + name;
    }
}

// 删除类名

var removeClass = function (ele, name) {
    if (this.hasClass(ele, name)) {
        var reg = new RegExp('(\\s|^)' + name + '(\\s|$)');
        ele.className = ele.className.replace(reg, '');
    }
}

/*替换类名*/
var replaceClass = function(ele, newName, oldName) {
    this.removeClass(ele, oldName);
    this.addClass(ele, newName);
}
   

window.onload = function(){
    // 让所有页面都初始化
    for( var i in screenAnimateElements){
        adminaddClass(i)
    }
    getClass
    setTimeout(function () {
        handleForClass(screenAnimateElements['screen-1'],'_animated_init','_animated_done')
    },500)

    // 点击跳转
    var ele = getClass('header__nav-item');
    for( var j = 0; j< ele.length-1;j++){
        ele[j].index = j;
        ele[j].onclick = function(){
            var index = this.index;
            handleNav(index,20+index*70);
            window.scrollTo(0, index*800);
        }
    }

}   
// 监听滚动事件
window.onscroll = function(){
    var  scrollTop =document.documentElement.scrollTop + 200 ;
    var head = getClass('header')[0];

    if(scrollTop > 80){
        addClass(head , 'header_fixed')
    }else{
        removeClass(head, 'header_fixed')
    }
    if(scrollTop > 1 ){
        handleForClass(screenAnimateElements['screen-1'],'_animated_init','_animated_done');
        handleNav(0,20)
    }
    if(scrollTop > 1*800){
        handleForClass(screenAnimateElements['screen-2'],'_animated_init','_animated_done');
        handleNav(1,95)
    } 
    if(scrollTop > 2*800 ){
        handleForClass(screenAnimateElements['screen-3'],'_animated_init','_animated_done');
        handleNav(2,165)
    } 
    if(scrollTop > 3*800 ){
        handleForClass(screenAnimateElements['screen-4'],'_animated_init','_animated_done');
        handleNav(3,240);
    } 
    if(scrollTop > 4*800 ){
        handleForClass(screenAnimateElements['screen-5'],'_animated_init','_animated_done');
        handleNav(4,315);
    }
}
// 处理导航
function handleNav(i,num){
    console.log(i)
    for( var j = 0; j< getClass('header__nav-item').length-1;j++){
        getClass('header__nav-item')[j].className = 'header__nav-item';
        
    }
    var ele = document.getElementsByClassName('header__nav-item')[i];
    ele.className = 'header__nav-item'+' '+'header__nav-item_active';
    getClass('header__nav-item-line')[0].style.left= num + "px";
}

