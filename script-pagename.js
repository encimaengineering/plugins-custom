/*  Plugin - site section  */
//some change part 2
function cleanUp (value) {
  return value.toLowerCase().replace("-"," ").replace(".aspx","");
}

var parts = window.location.href.split("/"),
    total = parts.length,
    count = 0,
    siteSection = "unknown",
    s_pageName = "",
    urlPath = document.URL.toLowerCase();

if(urlPath.indexOf('.aspx') > -1){
    s_pageName = parts[3]
}else{
    s_pageName = parts[4] + '|' + parts[3];
}

s_pageName = cleanUp(s_pageName);
console.log('s_pageName = ' + s_pageName);