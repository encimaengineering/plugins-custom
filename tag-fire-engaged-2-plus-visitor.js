var marketingTagScript = document.createElement("script");
var firstScriptTag = document.getElementsByTagName("script")[0];
marketingTagScript.async = true;
marketingTagScript.src = "http://ib.adnxs.com/px?id=197545&t=1"; // tags src
firstScriptTag.parentNode.insertBefore(marketingTagScript, firstScriptTag);