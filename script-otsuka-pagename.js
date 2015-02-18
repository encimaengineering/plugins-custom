/*  Plugin - site section  */
function cleanUp (value) {
  return value.toLowerCase().replace("-"," ");
}

var parts = window.location.href.replace(".html","").replace("index","").split("/"),
    total = parts.length,
    count = 0,
    siteSection = "unknown",
    s_pageName = "",
    urlPath = document.URL.toLowerCase();


if(parts[3] === ""){
  s_pageName="home";
  cosole.log(s_pageName);
}else{
  for (count = 3; count < total; count++) {
    console.log('new line - parts['+count+'] = ' + parts[count]);
  }
}

console.log('parts[0] = '+parts[0]);
console.log('parts[1] = '+parts[1]);
console.log('parts[2] = '+parts[2]);
console.log('parts[3] = '+parts[3]);
console.log('parts[4] = '+parts[4]);
console.log('parts = ' + parts);


//example:

/*  Plugin - site section  */
function cleanUp (value) {
  return value.toLowerCase().replace("-"," ").replace(".html","");
}

var parts = window.location.href.split("/"),
    total = parts.length,
    count = 0,
    siteSection = "unknown";

for(; count <= total; count ++){
    if ( parts[count] === "Home.html" ){ // if home page, set to home
    siteSection = "home";
    s.prop1 = cleanUp(siteSection);
    } else if ( parts[count] === "Home" ) { // path after home is the site section
    siteSection = (typeof(parts[count + 1]) !== "undefined") ? parts[count + 1] : parts[count];
    break;
  }
}
s.prop1 = cleanUp(siteSection);