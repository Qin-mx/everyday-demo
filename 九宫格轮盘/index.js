window.onload = function(){
    // 先获取必须的变量
    var btn = document.getElementsByClassName('box9')[0],
        btnchildren = btn.getElementsByClassName('bg')[0],
        items = this.document.getElementsByClassName('rotate__wrap-item'),
        click = false;
    var lottery = {
        index: -1, // 当前转动的位置
        count: 0, // 总共有多少
        timer: 0, // 时间函数
        speed: 20, // 初始速度
        times: 0 , // 转动次数
        cycle: 50, // 转动的保底次数，转动多少次在进入抽奖环节
        prize: -1, // 中奖位置
        init: function(){  // 初始化
            if( items.length > 0){
                this.count = items.length; // 当前个数
                if(items[this.index]){
                    items[this.index].classList.add('active'); // 初始下标添加一个active
                }
                btnchildren.classList.remove('onbtn')
            }
        },
        roll: function(){ // 滚动函数
            var index = this.index,
                count = this.count;
            // 让所有的都移除active
            if(items[index]){
                items[index].classList.remove('active'); 
            }
            index += 1;
            index = index > count-1 ? 0: index;
            items[index].classList.add('active');  // 让当前下标的添加上active;
            this.index = index; // 将当前的赋给
            return false;
        },
        stop: function(){
            // 结束滚动
            // 将当前下标的位置给了中奖位置
            this.prize = index;
            return false;
        }
    }
    function roll(){
        lottery.times += 1;
        lottery.roll(); // 
        console.log(lottery.speed)
        if(lottery.times > lottery.cycle + 10 && lottery.prize == lottery.index){

            // 如果满足当前条件以后，就停止动画
            clearTimeout(lottery.timer);
            lottery.prize = -1;
            lottery.times = 0;
            click = false;
            btnchildren.classList.remove('onbtn');
            setTimeout(function(){
                var text = items[lottery.index].getElementsByTagName('p')[0].innerHTML;
                alert(text)
            },200)

        }else{
            if(lottery.times < lottery.cycle){
                lottery.speed -= 10; // 加快速度
            }else if(lottery.times == lottery.cycle){
                // var index = Math.random()*lottery.count | 0;  //静态演示，随机产生一个奖品序号，实际需请求接口产
                var index = indexNum();
                // console.log(index)
                lottery.prize = index;
            }
            else{
                if (lottery.times > lottery.cycle + 10 && ((lottery.prize == 0 && lottery.index == 7) || lottery.prize == lottery.index + 1)) {
                    lottery.speed += 110;
                    // console.log(1)
                } else {
                    lottery.speed += 20;
                    // console.log(2)
                }
            }

            if( lottery.speed < 20 ){  // 保证最小速度
                lottery.speed = 20;
            }
            lottery.timer = setTimeout(roll,lottery.speed) // 循环调用
        }
        return false;
    }
    lottery.init();
    // 点击go然后开始转动
    btn.addEventListener('click',function(e){
        if(click){
            return false;
        } else{
           btnchildren.classList.add('onbtn')
           lottery.speed = 100;
           roll() //  开始转动以后禁止click
           click = true; // 结束以后恢复
        }   
    })

    // 处理概率问题
    function indexNum(){
        var random = Math.random();
        if( random < 0.03 ) return  0;
        if( random < 0.11 ) return  1;
        if( random < 0.21 )  return  2;
        if( random < 0.33 ) return  3;
        if( random < 0.45 ) return  4;
        if( random < 0.65 )  return  5;
        if( random < 0.65 )  return  6;
        return 7;
    }
}