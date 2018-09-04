var MOFUN = window.MOFUN || {};



MOFUN.upgradeBrowser = function (list, ulCss, liCss) {
	list = list || ["ie", "cr", "fx", "op"];
	ulCss = ulCss || "";
	liCss = liCss || "";
	var browsers = {
		"ie": {
			name: "Internet Exlporer",
			desc: "支持上网加速，更快，更方便，更安全！",
			link: "http://windows.microsoft.com/zh-CN/internet-explorer/download-ie"
		},
		"cr": {
			name: "Chrome 浏览器",
			desc: "谷歌的全新网络浏览器，简单，快捷。",
			link: "https://www.google.com/intl/zh-CN/chrome/"
		},
		"fx": {
			name: "火狐浏览器",
			desc: "Firefox 一款可以随心定制的浏览器！",
			link: "http://firefox.com.cn/"
		},
		"op": {
			name: "Opera 浏览器",
			desc: "一直被模仿，一直被超越。",
			link: "http://www.opera.com/browser/"
		}
	};
	var div = document.createElement("ul");
	div.id = "upgradebrowser";
	div.style.cssText = ulCss;
	var temp = "";
	for (var i = 0, l = list.length; i < l; i++) {
		var browser = browsers[list[i]];
		temp += "<li style='" + liCss + "'><a href='" + browser.link + "' title='" + browser.desc + "'><img src='../_global/browser_logo/" + list[i] + ".png' alt='" + browser.name + "' /> <span>" + browser.name + "</span></a></li>"
	};
	div.innerHTML = temp;
	return div;
};

MOFUN.random = function (max, min) {
	max = max || 100;
	min = min || 0;
	return Math.ceil(Math.random() * (max - min) + min);
};

MOFUN.remove = function (ele) {
	ele && ele.parentNode.removeChild(ele);
};