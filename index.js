function shpe(peoples) {
    var doc = '';
    for (var i in peoples) {
        doc = doc + '<br>';
        doc = doc + '<h5>' + i + '</h5>';
        for (var j in peoples[i]) {
            doc = doc + '<p><a href=\"' + peoples[i][j] + '\" target="_blank">' + j + '</a></p>';
        }
    }
    var tag = document.getElementById('peoples');
    tag.innerHTML = tag.innerHTML + doc;
}

function shwo(works) {
    var doc = '';
    for (var i in works) {
        doc = doc + '<br>';
        doc = doc + '<p><a href=\"' + works[i] + '\" target="_blank">' + i + '</a></p>';
    }
    var tag = document.getElementById('works');
    tag.innerHTML = tag.innerHTML + doc;
}

function shst(studios) {
    var doc = '';
    for (var i in studios) {
        doc = doc + '<br>';
        doc = doc + '<h5>' + i + '</h5>';
        for (var j in studios[i]) {
            var temp = '<h6>' + j + '：<a href="' + studios[i][j][1] + '" target="_blank">' + studios[i][j][0] + "</a></h6>";
            doc = doc + temp;
        }
    }
    var tag = document.getElementById('studio');
    tag.innerHTML = tag.innerHTML + doc;
}

// 解码
function getDecode(str){
    return decodeURIComponent(atob(str).split('').map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
}

// 显示人员
var show_text = function(data){
    peopels_str = getDecode(data["data"]["content"]).replaceAll("\r", "");  // 获取文章markdown（md）数据
    
    var script_dom = document.createElement('script');  // 创建标签
    script_dom.language = 'javascript';  // 设置语言
    script_dom.type = 'text/javascript';  // 设置类型
    script_dom.innerHTML = peopels_str + "\n" + "shpe(peoples);shwo(works);shst(studios)";  // 设置脚本
    var head = document.getElementsByTagName('head').item(0);  //获取head标签
    head.appendChild(script_dom);  //添加标签
}

// 构造api接口url
var url = "https://api.github.com/repos/lrsgzs/blog_topics/contents/yls.js?callback=show_text"

// 通过callback和script标签来加载api，解决跨域问题
var script_dom = document.createElement('script');  // 创建标签
script_dom.src = url;  //设置src
script_dom.language = 'javascript';  // 设置语言
script_dom.type = 'text/javascript';  // 设置类型
var head = document.getElementsByTagName('head').item(0);  //获取head标签
head.appendChild(script_dom);  //添加标签
