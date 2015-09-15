// adBlocker tracking v1.0 - begin
    var s_adBlockDiv = $('<div>', {class: 'afs_ads', text: '&nbsp;'}); // create adBlocker tracking div
    $('footer').append(s_adBlockDiv); // set specific element per site
    (function() {
        if(!document.getElementsByClassName) return;
        var ads = document.getElementsByClassName('afs_ads'),
            ad  = ads[ads.length - 1];
        if(!ad || ad.innerHTML.length == 0 || ad.clientHeight === 0) {
            s.prop71 = 'enabled';
            s.eVar71 = 'D=c71';
        } else {
            ad.style.display = 'none'; // this removes the &nbps; from .afs_ads
            s.prop71 = 'not enabled';
            s.eVar71 = 'D=c71';
        }
    })();
    // adBlocker tracking - end
