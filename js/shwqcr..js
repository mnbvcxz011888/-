//tab切换
$(function() {
    //隐式迭代,给所有元素绑定点击事件
    $(".tab-item").click(function() {
        //两件事件
        // 从匹配的元素中删除 'active' 类
        //siblings找到每个div的所有同辈元素中带有类名为selected的元素。
        $(this).addClass("active").siblings().removeClass("active");
        //$(this).index()得到元素索引号
        var idx = $(this).index();
        //为匹配的元素加上 'selected' 类addClass("selected")
        $(".main").eq(idx).addClass("selected").siblings().removeClass("selected");
    });

});
//数量加号
$('.delivery-btn-up').click(function() {
    var ter = Number($("#delivery-num").val());
    ter += 1;
    $('#delivery-num').val(ter);
    console.log(ter);
    var num = Number($('.sewcw').html());
    var asd = num - 1;
    $('.sewcw').html(asd);
});
$('.delivery-btn-down').click(function() {
    var ter = Number($("#delivery-num").val());
    ter -= 1;
    if (ter <= 0) {
        return;
    }
    $('#delivery-num').val(ter);
    console.log(ter);
    var num = Number($('.sewcw').html());
    var asd = num + 1;
    $('.sewcw').html(asd);
});
//放大镜
//移入原图
$('.magnifying-glass-top').mouseover(function(e) {
    $('.big-glass').css('display', 'block');
    $('.mask').css('display', 'block');
});
//移除原图
$('.magnifying-glass-top').mouseout(function() {
        $('.big-glass').css('display', 'none');
        $('.mask').css('display', 'none');
    })
    // 当鼠标在“缩略图”窗口中移动时
$('.magnifying-glass-top').mousemove(function(e) {
    // 一、首先实现“放大镜”框跟随鼠标移动的功能（我们让鼠标处于“放大镜”框的中心）

    // 获取鼠标当前位置
    var pageX = e.pageX;
    var pageY = e.pageY;
    // 获取“缩略图”窗口在整个文档中的偏移位置
    var offsetX = $('.magnifying-glass-top').offset().left;
    var offsetY = $('.magnifying-glass-top').offset().top;
    // 计算鼠标在缩略图中的相对位置
    var relativeX = pageX - offsetX;
    var relativeY = pageY - offsetY;
    // 考虑到鼠标处于“放大镜”框的中心，我们要根据鼠标位置计算“放大镜”框的位置
    var magOffsetX = $('.mask').width() / 2;
    var magOffsetY = $('.mask').height() / 2;
    $('.mask').css({
        left: relativeX - magOffsetX + 'px',
        top: relativeY - magOffsetY + 'px'
    });
    // 获取“放大镜”框的新位置，后面会用到
    var magX = $('.mask').position().left;
    var magY = $('.mask').position().top;

    // 二、处理越界情况

    // 确定边界
    var maxMagX = $('.magnifying-glass-top').width() - $('.mask').width()
    var maxMagY = $('.magnifying-glass-top').height() - $('.mask').height()
        // 左边界
    if (magX <= 0) {
        $('.mask').css('left', '0px');
    }
    // 右边界
    if (magX >= maxMagX) {
        $('.mask').css('left', maxMagX + 'px');
    }
    // 上边界
    if (magY <= 0) {
        $('.mask').css('top', '0px');
    }
    // 下边界
    if (magY >= maxMagY) {
        $('.mask').css('top', maxMagY + 'px');
    }

    // 三、其次实现“原图”窗口中的图片随“放大镜”框的移动而相应移动

    // 按照之前确定的缩放比例移动“原图”窗口中的图片
    // 注意：图片的移动方向与鼠标的移动方向是相反的！
    var originX = magX * 2.5;
    var originY = magY * 2.5;
    $('.big-glass img').css({
        left: -originX + 'px',
        top: -originY + 'px'
    });
});
//点击添加到购物车
$('.to-goodsCart').click(function() {
    var ter = $('.title').html();
    var ter1 = $('.price').html();
    var path = $(".md-img").attr("src");
    $('.zhkr').html(ter);
    $('.sjhue').html(ter1);
    $("#img2").attr("src", path);
    console.log(path);
    // console.log(ter1);
});
var faw = $('.shopCart').find('span').html();
var dwq = Number($('img2').length);