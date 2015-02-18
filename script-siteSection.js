function cleanUp (value) {
return value.toLowerCase().replace("-"," ").replace(".html","");
}


function getSection(url){
var parts = window.location.href.split("/"),
total = parts.length,
count = 0,
siteSection = "unknown";
for(; count <= total; count ++){
if ( parts[count] === "Home.html" ){
siteSection = "home";
s.prop1 = siteSection;
s.eVar11 = s.prop1;
} else if ( parts[count] === "Home" ) {
siteSection = (typeof(parts[count + 1]) !== "undefined") ? parts[count + 1] : parts[count];
siteSection = cleanUp(siteSection);
s.prop1 = siteSection;
s.eVar11 = s.prop1;
break;
}
}
return siteSection;
} 