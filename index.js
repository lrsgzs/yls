peoples = {
    "编程部 - Scratch部": {
        "巩佳宁": "https://code.xueersi.com/space/19162616",
        "周小荻": "https://code.xueersi.com/space/19776819",
    },
    "编程部 - Python部": {
        "周小荻": "https://code.xueersi.com/space/19776819",
        "杨欣儒": "https://code.xueersi.com/space/16074710",
    },
    "编程部 - C++部": {
        "空": "#"
    },
    "编程部 - 动画部": {
        "盛翊展": "https://code.xueersi.com/space/60701655",
    },
    "编程部 - 跑酷部": {
        "盛翊展": "https://code.xueersi.com/space/60701655",
    },
    "编程部 - 改编部": {
        "空": "#"
    },
    "外交部": {
        "刘某杰": "https://code.xueersi.com/space/78145585",
    },
    "宣传部": {
        "周利贞": "https://code.xueersi.com/space/60177039",
    },
    "成员": {
        "杨云骢": "https://code.xueersi.com/space/12502420",
    }
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
    script_dom.innerHTML = peopels_str + "\n" + "shpe(peoples)";  // 设置脚本
    var head = document.getElementsByTagName('head').item(0);  //获取head标签
    head.appendChild(script_dom);  //添加标签
}

function shpe(peoples) {
    var doc = '';
    for (var i in peoples) {
        doc = doc + '<br>';
        doc = doc + '<h5>' + i + '</h5>';
        for (var j in peoples[i]) {
            doc = doc + '<p><a href=\"' + peoples[i][j] + '\" target="_blank">' + j + '</a></p>';
        }
    }
    var tag = document.getElementById('peoples');tag.innerHTML = tag.innerHTML + doc;
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
