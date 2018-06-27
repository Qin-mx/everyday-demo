### 每日一练

#### [公告滚动](http://qin-mx.github.io/everyday-demo/公告滚动)
 - 使用了jquery

 - 通过jquery的animate方法来设置margintop的值
    - 通过animate方法，在动画完成以后恢复margintop
    - 当恢复为0时，需要将第一个元素放置到底部，因此使用了appendTo()

#### [简单的复制功能](http://qin-mx.github.io/everyday-demo/实现复制功能)
 - 使用了execCommand("copy")的方法，具体参考(https://www.jb51.net/article/108667.htm)

#### [3D选项卡](http://qin-mx.github.io/everyday-demo/3D选项卡)
 - 主要用到了transform-style: preserve-3d
 - 使用lable的for属性绑定input实现点击功能
 - 通过改变角度，控制origin的控制点实现转动