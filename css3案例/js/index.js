    // 定义变量
var screenAnimateElements  = {
        'screen-1':[
            'screen-1__wrap-heading',
            'screen-1__phone',
            'screen-1__shadow'
        ],
        'screen-2':[
            'screen-2__wrap-heading',
            'screen-2__wrap-subheading',
            'screen-2__wrap-phone',
            'screen-2_point1',
            'screen-2_point2',
            'screen-2_point3'
        ],
        'screen-3':[
            'screen-3__wrap-heading',
            'screen-3__wrap-subheading',
            'screen-3__wrap-phone',
            'screen-3__wrap__features'
        ],
        'screen-4':[
            'screen-4__wrap-heading',
            'screen-4__wrap-subheading',
            'screen-4-phone-item_1',
            'screen-4-phone-item_2',
            'screen-4-phone-item_3',
            'screen-4-phone-item_4'
        ],
        'screen-5':[
            'screen-5__wrap-heading',
            'screen-5__wrap-subheading',
            'screen-5__back'
        ]
}

// 执行函数
function adminaddClass(screenCls){
    var screen = document.getElementsByClassName(screenCls)[0] // 获取当前屏幕的元素
    var animateElements = screenAnimateElements[screenCls]// 需要设置动画
    // 定义变量，判断当前是否有初始化的元素
    var isSetAnimateClass = false;
    // // 判断是否开始动画
    // var isAnimate = false;
    // screen.onclick = function(){
        if(!isSetAnimateClass){
            // 没有初始化的元素就添加上
            // for(var i = 0;i<animateElements.length;i++){
            //     var element = document.getElementsByClassName(animateElements[i])[0]// 获取要动画的元素
            //     console.log(element)
            //     // 设置初始类名
            //     var baseCls = element.getAttribute('class'); // 拿到当前类名
            //     // 添加一个初始类名
            //     element.setAttribute('class', baseCls +' '+''+baseCls+'_animated_init')
            // }
            handleForClass(animateElements)
            // isAnimate = true;
            isSetAnimateClass = true;
            return;
        }

        // if(!isAnimate){
        //     // for(var i = 0;i<animateElements.length;i++){
        //     //     var element = document.getElementsByClassName(animateElements[i])[0]// 获取要动画的元素
        //     //     // 设置初始类名
        //     //     var baseCls = element.getAttribute('class'); // 拿到当前类名
        //     //     // 添加一个初始类名
        //     //     element.setAttribute('class', baseCls.replace('_animated_done','_animated_init'))
        //     // }
        //     handleForClass(animateElements,'_animated_done','_animated_init')
        //     isAnimate = true;   
        // }else{
        //     // for(var i = 0;i<animateElements.length;i++){
        //     //     var element = document.getElementsByClassName(animateElements[i])[0]// 获取要动画的元素
        //     //     // 设置初始类名
        //     //     var baseCls = element.getAttribute('class'); // 拿到当前类名
        //     //     // 添加一个初始类名
        //     //     element.setAttribute('class', baseCls.replace('_animated_init','_animated_done'))
        //     // }
        //     handleForClass(animateElements,'_animated_init','_animated_done')
        //     isAnimate = false;   
        // }

    // }
}

// 传入元素
// for( var i in screenAnimateElements){
//     adminaddClass(i)
// }

// 定义一个函数处理for循环
function handleForClass( animCls,cls1,cls2){
    for(var i = 0;i<animCls.length;i++){
        var element = document.getElementsByClassName(animCls[i])[0]// 获取要动画的元素
        // 设置初始类名
        var baseCls = element.getAttribute('class'); // 拿到当前类名
        // 添加一个初始类名
        if( cls1&&cls2){
            element.setAttribute('class', baseCls.replace(cls1,cls2))
        }else{
            element.setAttribute('class', baseCls +' '+''+baseCls+'_animated_init')
        }
        
    }
}
