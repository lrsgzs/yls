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

var doc = "";
for (var i in peoples) {
    doc = doc + "<br>"
    doc = doc + "<h5>" + i + "</h5>";
    for (var j in peoples[i]) {
        doc = doc + '<p><a href="' + peoples[i][j] + '">' + j + "</a></p> ";
    }
}

var tag = document.getElementById("peoples");
tag.innerHTML = tag.innerHTML + doc;
