//test 25-444
(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

bgt_tracker_instructions = {
    defaults: {
        debug: true,
        mpath: "/adt.ca/tms/common/js/tms/source/modules/",
        trackExit: ["adt.com","adt.bgtpartners.com","adtca.bgtpartners.com","javascript:"],
        trackDownload: ["pdf"],
        trackForms: ["AdtSearchInput"],
        invertTrackForms: true
    },
    containers: {},
    instructions: {
        google:{
            file: ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js',
            account: 'UA-27814952-1'
        }
    }
};

var TRACKER = (function () {

    var tms = {},
        bgti, // tracker Instrcutions
        DNIS,
        callback,
        options = {
            debug: true,
            extras: [],
            dependencies: [],
            trackExit: ["localhost","adt.com","javascript:","#"],
            trackDownload: ["pdf"],
            trackForms: ["leadForm"],
            google: {
                account: "UA-27553816-1",
                devAccoount: "UA-28702989-1",
                devURLS: ["perf","dev","authoring","adtca"],
                divisions: {
                    "default": "Corp",
                    "values": [
                        { url: "/", name: "Home" },
                        { url: "home-security", name: "Resi" },
                        { url: "small-business-security", name: "Biz" },
                        { url: "small-business", name: "Biz" },
                        { url: "medical-alert-systems", name: "Compan" }/*,
                        { url: "default", name: "Corp" }*/
                    ]
                },
                pageTypes: {
                    "default": "Lead Forms",
                    "values": [
                        { type: "no-form", name: "Content"},
                        { type: "no-DNIS",  name: "Contact Form"}
                    ]
                }
            }
        };

    /* Underscore JS Modified Functions */
    var breaker = {},
        ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype,
        nativeForEach = ArrayProto.forEach,
        nativeKeys = Object.keys,
        nativeSome = ArrayProto.some,
        slice = ArrayProto.slice,
        hop = ObjProto.hasOwnProperty;

    var any = function(obj, iterator, context) {
        iterator = iterator || _.identity;
        var result = false;
        if (obj === null) return result;
        if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
        tms.each(obj, function(value, index, list) {
            if (result || (result = iterator.call(context, value, index, list))) return breaker;
        });
        return !!result;
    };

    tms.each = function(obj, iterator, context) {
        if (obj === null) return;
        if (nativeForEach && obj.forEach === nativeForEach) {
            obj.forEach(iterator, context);
        } else if (obj.length === +obj.length) {
            for (var i = 0, l = obj.length; i < l; i++) {
                if (i in obj && iterator.call(context, obj[i], i, obj) === breaker) return;
            }
        } else {
            for (var key in obj) {
                if (hop.call(obj, key)) {
                    if (iterator.call(context, obj[key], key, obj) === breaker) return;
                }
            }
        }
    };

    // Retrieve the names of an object's properties.
    // Delegates to **ECMAScript 5**'s native `Object.keys`
    tms.keys = nativeKeys || function(obj) {
        if (obj !== Object(obj)) throw new TypeError('Invalid object');
        var keys = [];
        for (var key in obj) if (hop.call(obj, key)) keys[keys.length] = key;
        return keys;
    };

    // Return the first value which passes a truth test.
    tms.find = function(obj, iterator, context) {
        var result;
        any(obj, function(value, index, list) {
            if (iterator.call(context, value, index, list)) {
                result = value;
                return true;
            }
        });
        return result;
    };

    // Extend a given object with all the properties in passed-in object(s).
    tms.extend = function(obj) {
        tms.each(slice.call(arguments, 1), function(source) {
            for (var prop in source) {
                if (source[prop] !== void 0) obj[prop] = source[prop];
            }
        });
        return obj;
    };

    /* End underscore functions */

    /**
    * @namespace tms
    * @function
    * @name tms
    * @description Initializes the tracker script
    * @param {Object} opts and object literal with options
    */
    tms.init = function(callback){
        tms.google(callback);
    };

    tms.runInstructions = function(){
        tms.debug('Runnning');

        // if(typeof bgti.containers != "undefined"){
        //     tms.runContainer();
        // }
    };

    /**
    * @memberOf tms
    * @function
    * @name runContainer
    * @description Executes the instructions from the instruction file
    */
    tms.runContainer = function(){
        tms.each(bgti.containers, function(instruct){
            var m = instruct.defaults;
                code = (typeof m.code != "undefined") ? m.code : '';


            tms.doCode(code);
        });
    };

    /**
    * @memberOf tms
    * @function
    * @name readInstructions
    * @description Loads the instructions from the main instruction file to the module
    * @param {String} module a string containing the name of the module
    * @returns {Object} an object with the instructions
    */
    tms.readInstructions = function(module){
        if(typeof bgti == "undefined"){
            bgti = {};
            bgti.instructions = {}; // This is ugly and is used just for testing. Need to rework the instruction variable so modules can work independently
        }
        return (typeof module == "undefined") ? bgti : (typeof(bgti.instructions[module]) != "undefined") ? bgti.instructions[module] : bgti ;
    };

    /**
    * @memberOf tms
    * @function
    * @name showOptions
    * @description Expose the options for the modules
    * @returns {Object} an object with the options
    */
    tms.showOptions = function(){
        return options;
    };


    /**
    * @memberOf tms
    * @function
    * @name returnCallback
    * @description Runs the callback function
    * @param {Function} callback the callback function to be called after the file is loaded
    */
    tms.returnCallback = function(callback){
        if (typeof callback == "function") callback();
        else return false;
    };


    /**
    * @memberOf tms
    * @function
    * @name getInstructions
    * @description Temporary. Loads the instruction file
    * @param {Function} callback a callback function
    */
    tms.getInstructions = function(file, callback){
        // Loads the instruction file. This will be change to read from a database
        tms.loadFile(file, function(data){
            tms.returnCallback(callback);
        });
    };

    /**
    * @memberOf tms
    * @function
    * @name runContainer
    * @description Executes the instructions from the instruction file
    */
    tms.runContainer = function(){
        tms.each(bgti.containers, function(instruct){
            var m = instruct.defaults;
                code = (typeof m.code != "undefined") ? m.code : '';

            // If there is a file needed to be loaded, load it first
            if(typeof m.file != "undefined"){

                // Execute any code before we load the file
                if(typeof m.pre != "undefined"){
                    tms.debug("Executing code before file load: "+m.pre);
                    tms.doEval(m.pre);
                }

                tms.loadFile(m.file, function(){
                    tms.doCode(code);
                });
            }else{
                tms.doCode(code);
            }
        });
    };

    /**
    * @memberOf tms
    * @function
    * @name doCode
    * @description Runs the code contained on the instructions file
    * @param {String} code a string of code to be executed
    * @param {Function} callback a callback function
    */
    tms.doCode = function(code, callback){
        var fn = (typeof callback == "undefined") ? function(){ tms.doEval(code); } : callback;
        tms.inject(code, fn);
    };

    /**
    * @memberOf tms
    * @function
    * @name inject
    * @description Adds the html container to house the scripts.
    * @param {String} track a string containging the information to place in the div
    * @param {String} location astring containing the dom element where the div will be appended
    * @param {Function} callback a callback function
    */
    tms.inject = function (track, callback) {

        var div = document.getElementById('bgt_tracker_qt');
        if(typeof div == "undefined"){
            setTimeout(function () {
                tms.inject(track, callback);
            }, 100);
        }else{
            if(typeof div === null)
                div.innerHTML += track;

            tms.returnCallback(callback);
        }
    };

    /**
    * @memberOf tms
    * @function
    * @name doEval
    * @description Runs the code contained on the instructions file
    * @param {String} code a string of code to be executed
    */
    tms.doEval = function(code){
        // Need to find a better way to strip out tags.
        var c;

        if(typeof code !== "undefined" && code !== ""){
            if(code.indexOf("</script>") >= 0){
                c = code.substr(0, code.indexOf("</script>"));
                c = c.substr(code.indexOf(">")+1, code.length);
            }else{
                c = code;
            }

            if (window.execScript) {
                window.execScript(c);
            } else {
                var fn = function () {
                    window["eval"].call(window, c);
                };
                fn();
            }
            return c;
        }else{
            return false;
        }
    };


    /**
    * @memberOf tms
    * @function
    * @name inArray
    * @param {Array} obj Array to search at.
    * @param {object} item Item to search form.
    * @return {boolean} true if contains.
    */
    tms.inArray = function(obj, item) {
        if (obj && obj.length) {
            for (var i = 0; i < obj.length; i++) {
                if (obj[i] === item) {
                    return true;
                }
            }
        }
        return false;
    };


    /**
    * @memberOf tms
    * @function
    * @name domReady
    * @description Waits for the dom to be ready and appends the container div
    * @param {Function} calbback a callback function
    */
    tms.domReady = function(callback){
        if (document.readyState !== "complete") {
            setTimeout(function () {
                tms.domReady(callback);
            }, 100);
        } else {
            if(!document.getElementById('bgt_tracker_qt')){
                var div = document.createElement("div");
                div.id = "bgt_tracker_qt";
                fragment = document.createDocumentFragment();

                fragment.appendChild(div);
                var el = document.getElementsByTagName("head")[0];
                el.appendChild(fragment);
            }

            tms.returnCallback(callback);
        }
    };

    /**
    * @memberOf tms
    * @function
    * @name addEvent
    * @description Attaches an event to a DOM element
    * @param {String} elm a string containing the name of the DOM element where to attach the event
    * @param {String} evType a string containing the event type where the event will be called
    * @param {Function} fn the function to be called
    * @param {Boolean} useCapture (need to understand this more)
    */
    tms.addEvent = function(elm, evType, fn, useCapture) {
        var me = elm;
        if((typeof elm == "object") && (elm.length)){
            me = elm[0];
        }

        if(typeof elm == "string"){
            me = document.getElementById(elm.replace("#",""));
        }

        if(me.addEventListener) {
            me.addEventListener(evType, fn, useCapture);
            return true;

        }else if (me.attachEvent) {
            var r = me.attachEvent('on' + evType, fn);
            return r;

        }else {
            me['on' + evType] = fn;
        }
    };

    /**
    * @memberOf tms
    * @function
    * @name checkExtension
    * @description Checks if a string (filename) contains any of the specified extensions
    * @param {String} src the name of the file
    * @param {Array} extensions the array of extensions to check against
    * @param {Boolean} keepit a boolean which declares if the function should be return to its original or not
    */
    tms.checkExtension = function(src, extensions) {
        if (typeof src !== 'string') {
            return false;
        }
        var ext = src.split('?')[0];
        ext = ext.split('.');
        ext = ext[ext.length - 1];

        if (ext && tms.inArray(extensions, ext)) {
            return ext;
        }
        return false;
    };

    /**
    * @memberOf tms
    * @function
    * @name hasClass
    * @description Check if an element has the specified class
    * @param {HTMLelement} item a dom element
    * @param {Selector} selector a string with the class name to check
    * @returns {Boolean}
    */
    tms.hasClass = function( item, selector ) {
        var classes = item.className.split(" "),
            i = 0,
            l = classes.length;

        for (; i < l; i++ ) {
            if(selector == classes[i]) return true;
        }

        return false;
    };

    /**
    * @memberOf tms
    * @function
    * @name setRegExp
    * @description Sets a regular expression from a string
    * @param {String} exp the string to be used as a regular expresion
    * @returns {Regex} regexp a regular expression
    */
    tms.setRegExp = function(exp){
        if (( exp ) && (typeof exp != "object")) {
            regexp = (typeof exp === 'string') ? new RegExp( exp, 'i' ) : exp;
        }else{
            var t = '';
            tms.each(exp, function(ex){
                t += ex + "|";
            });

            t = t.substr(0, (t.length - 1));
            regexp = new RegExp( t, 'i' );
        }

        return regexp;
    };

    tms.setCookie = function(name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            var expires = "; expires="+date.toGMTString();
        }else{
            var expires = "";
        }

        if(days < 1){
            "expires=Thu, 01-Jan-70 00:00:01 GMT;";
        }

        document.cookie = name+"="+value+expires+";";
    };

    tms.readCookie = function(name){
        var theCookie=" "+document.cookie,
            index = theCookie.indexOf(" "+name+"=");

        if (index == -1) index = theCookie.indexOf(";"+name+"=");
        if (index ==-1 || name=="") return "";
        var index1 = theCookie.indexOf(";",index+1);
        if (index1==-1) index1=theCookie.length;

        return unescape(theCookie.substring(index+name.length+2,index1));
    };

    /**
    * @memberOf tms
    * @function
    * @name debug
    * @description Displays console log messages.
    * @param {String} what with the message to be displayed
    * @returns {String} the message
    */
    tms.debug = function(what, line){
        if(options.debug){
            if(typeof(line) !== "undefined"){
                console.log("Line: "+line);
            }
            console.log(what);
        }
        return what;
    };

    /**
    * @namespace google
    * @function
    * @name google
    * @description Initializes the Google module
    */
    tms.google = google = function(callback){

       // tms.doCode("<script type=\"text/javascript\">(function() {var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);})();</script>");

       var  _gaq = _gaq || [];

        google.pageLoad(callback);
        google.setExits();
        google.trackForms();

    };

    /**
    * @memberOf google
    * @function
    * @name getQueryParameters
    * @description Get specific query parameters
    * @param {String} what with the message to be displayed
    * @returns {String} the message
    */
    google.getQueryParameters = function(param){
        var result = {};

        if (window.location.search){
            // split up the query string and store in an associative array
            var params = window.location.search.slice(1).split("&");
            for (var i = 0; i < params.length; i++){
                var tmp = params[i].split("=");
                result[tmp[0]] = unescape(tmp[1]);
            }
        }

        return result;
    };

    /**
    * @memberOf google
    * @function
    * @name setAccount
    * @description Set the correct google account
    * @returns {String} the account number
    */
    google.setAccount = function(){

        var account = options.google.account,
            domain = document.domain,
            expression;

        tms.each(options.google.devURLS, function(item){

            expression = tms.setRegExp(item);

            if(domain.match(expression)){
                tms.debug("Dev domain, switch account");
                account = options.google.devAccoount;
            }
        });

        tms.debug("Setting account as: "+account);

        return account;
    };

    /**
    * @memberOf google
    * @function
    * @name setdivision
    * @description Sets the correct division for tracking based on URL
    * @returns {String} the division string
    */
    google.setDivision = function(){

        var division = options.google.divisions.default,
            href = window.location.href,
            expression;

        tms.each(options.google.divisions.values, function(item){

            expression = tms.setRegExp(item.url);

            if(href.match(expression)){
                division = item.name;
            }
        });

        tms.debug("Setting division as: "+division);

        return division;
    };

    /**
    * @memberOf google
    * @function
    * @name setPageType
    * @description Set the correct page type based on the form
    * @param {String} the DNIS value
    * @returns {String} the page type string
    */
    google.setPageType = function(DNIS){

        tms.debug("Set page type based on DNIS: "+DNIS);

        var type = options.google.pageTypes.default;

        tms.each(options.google.pageTypes.values, function(item){

            expression = tms.setRegExp(item.type);

            if(DNIS.match(expression)){
                type = item.name;
            }
        });

        tms.debug("Setting page type as: "+type);

        return type;
    };

    /**
    * @memberOf google
    * @function
    * @name pageLoad
    * @description Set the initial Page Load variables.
    */
    google.pageLoad = function(callback){
        var account = google.setAccount(),
            params = google.getQueryParameters();

        tms.debug("Track account: "+account);

        var track = [];

        $.subscribe("dnis.ready", function(DNIS){
            track.push(['_setAccount', account]);
            track.push(['_setAllowLinker', true]);
            track.push(['_setDomainName', location.hostname]);
            track.push(['_setCustomVar',1,'Visitor Segmentation',google.setDivision(),3]);
            track.push(['_setCustomVar',2,'Page Type',google.setPageType(DNIS),3]);
            track.push(['_setCustomVar',3,'Language','English',3]);

            if((typeof(params['CID']) !== "undefined") || (typeof(params['cid']) !== "undefined")){
                var code = (typeof(params['CID']) !== "undefined") ? params['CID'] : params['cid'];

                tms.debug("Tracking CID: " + code);
                track.push(['_setCustomVar',4,'CID Code',code,1]);
            }
            if((typeof(params['ECID']) !== "undefined") || (typeof(params['ecid']) !== "undefined")){
                var code = (typeof(params['ECID']) !== "undefined") ? params['ECID'] : params['ecid'];

                tms.debug("Tracking ECID: " + code);
                track.push(['_setCustomVar',5,'ECID Code',code,1]);
            }

            var send = {
                track: track
            };

            callback(send);
        });
    };

    /**
    * @memberOf google
    * @function
    * @name trackEvent
    * @description Set the click event for Google tracking.
    * @param {HTMLelement} element the dom element which will get the click event assigned
    * @param {Object} map an object containing the instructions for tracking
    */
    google.trackEvent = function(element, map){

        var tracker = window.parent.TRACKER,
            tracking = tms.readInstructions('google');

        var c = element.innerHTML;

        // Check if we need new variables
        if(typeof map.values != 'undefined'){
            tms.debug("Set additional click variables");
            var track = ["_trackEvent"];
            tms.each(map.values, function(item){
                tms.each(item, function(t){
                    if(t !== "") track.push(t);
                });
            });

            _gaq.push(track);

            tms.debug("Set trackevent to: ");
            tms.debug(track);
        }
    };

    /**
    * @memberOf google
    * @function
    * @name setEvent
    * @description Set a standard tracking event
    * @param {Object} data an object containing the instructions for tracking
    */
    google.setEvent = function(data){
        var track = ["_trackEvent"];

        tms.each(data, function(item){
            tms.each(item, function(t){
                if(t !== "") track.push(t);
            });
        });

        _gaq.push(track);

        tms.debug("Set trackevent to: ");
        tms.debug(track);
    };

    tms.google.setEvent = google.setEvent;

    /**
    * @memberOf google
    * @function
    * @name setExits
    * @description Sets the exit link tracking
    * @param {Array} exits an array of internal urls
    */
    google.setExits = function(){
        tms.debug(options.trackExit);
        var t = tms.setRegExp(options.trackExit),
            l;

        document.onclick = function(e){
            e = e || event;

            var target = e.srcElement || e.target;
            l = (typeof target.href != "undefined") ? target.href : '';

            if(l !== ""){
                if(!t.test(l)) {
                    tms.debug("Set exit link for: "+l);
                    google.setEvent([{category: "Exit Link", action: "click", name: l}]);
                }else{
                    if(tms.checkExtension(l, options.trackDownload)) {
                        tms.debug("Set download for: "+l);
                        google.setEvent([{category: "Download", action: "click", name: l}]);
                    }
                }
            }
        };
    };

    google.trackForms = function(){
        google.setForms(function(){
            tms.debug('Forms ready', (new Error).lineNumber);
        });
    };

    google.selectForms = function(){
        var forms = '';

        tms.each(options.trackForms, function(form){
            forms += (options.invertTrackForms) ? "form:not(#"+form+")," : "#"+form;
        });

        //forms = forms.substr(0, (forms.length -1));

        return $(forms);
    };

    google.setForms = function(callback){
        tms.domReady(function(){
            tms.debug("Dom ready, setting forms", (new Error).lineNumber);
            tms.debug("Set to track: ");
            tms.debug(options.trackForms, (new Error).lineNumber);

            var forms = (typeof(options.trackForms) == "object") ? google.selectForms() : document.getElementsByTagName("form"),
                i = 0,
                z,
                l = "No DNIS found",
                currentForm,
                totalForms = forms.length,
                counter = 0;

            tms.debug("Forms", (new Error).lineNumber);
            tms.debug(forms, (new Error).lineNumber);

            for(;counter < totalForms; counter++){
                currentForm = forms[counter];

                tms.debug(currentForm, (new Error).lineNumber);

                z = document.createAttribute('googletrack');
                z.value = 'false';
                currentForm.setAttributeNode(z); // Set an attribute on the form to keep track of what's happening. May be good to change to a data attribute instead

                google.setTrackSubmit(currentForm); // Set the action for the form submit

                l = google.getDnis(currentForm);

                currentForm.onclick = google.formAssign(currentForm, l);

                if(!tms.readCookie("adt-"+l+"-viewed")){
                    google.setEvent([{category: "DNIS Activity", action: "Form View", label: l}]);
                    tms.setCookie("adt-"+l+"-viewed", "viewed",1);
                    tms.debug("Setting event for form view: "+l, (new Error).lineNumber);
                }else{
                    tms.debug("Form "+l+" view already tracked", (new Error).lineNumber);
                }
            }

            if(totalForms <= 0){
                tms.debug("No forms found on the page");
                $.publish("dnis.ready", "no-form");
            }

            tms.returnCallback(callback);
        });
    };

    // Move this function to a dependency as it is only used by ADT. For now keep it here so it doesn't get scared on its own
    google.getDnis = function(form){
        // Hardcoded for now but we need a way to specify which field or fields to pass
        var l = "no-dnis";

        children = form.childNodes;
        for(var n = 0; n < children.length; n++){
            if (children[n].id == 'Promotion_Code'){
                l = children[n].value;
            }
        }

        $.publish("dnis.ready", l);

        return l;
    };

    google.trackSubmit = function(form){

        if(!$(form).find(".inputError").length){
            l = google.getDnis(form);
            tms.debug("Tracking submit for form: "+l);
            google.setEvent([{category: "DNIS Activity", action: "Form Submit", label: l}]);
            tms.setCookie("adt-"+l+"-viewed", "",-1);
            tms.setCookie("adt-"+l+"-start", "",-1);
        }else{
            tms.debug("Form not valid. Not tracking submit", (new Error).lineNumber);
        }

        return false;
    };

    google.setTrackSubmit = function(form){
        $(form).submit(function(){
            google.trackSubmit(form);
            return false;
        });
    };

    google.formAssign = function(currentForm, l){
        return function () {
            google.trackFormView(currentForm, l);
        };
    };

    google.trackFormView = function(form, l){
        tms.debug("Has the form been tracked?: "+form.getAttribute('googletrack'), (new Error).lineNumber);
        tms.debug("Form: "+form, (new Error).lineNumber);

        if((form.getAttribute('googletrack') == "false") && (!tms.readCookie("adt-"+l+"-start"))){
            // This form has not been tracked as Initiate. Let's track it
            z = document.createAttribute('googletrack');
            z.value = 'True';
            form.setAttributeNode(z); // Go through the whole createAttribute again thanks to IE7
            tms.debug('first time');

            l = google.getDnis(form);
            tms.debug("DNIS: "+l, (new Error).lineNumber);

            google.setEvent([{category: "DNIS Activity", action: "Form Initiate", label: l}]);
            tms.setCookie("adt-"+l+"-start", "start",1);

        }else{
            tms.debug('Form already tracked', (new Error).lineNumber);
        }
    };

    return tms;

}());


(function($){

  // Create a "dummy" jQuery object on which to bind, unbind and trigger event
  // handlers. Note that $({}) works in jQuery 1.4.3+, but because .unbind on
  // a "plain object" throws errors in older versions of jQuery, an element is
  // used here.
  var o = $('<b/>');

  // Subscribe to a topic. Works just like bind, except the passed handler
  // is wrapped in a function so that the event object can be stripped out.
  // Even though the event object might be useful, it is unnecessary and
  // will only complicate things in the future should the user decide to move
  // to a non-$.event-based pub/sub implementation.
  $.subscribe = function( topic, fn ) {

    // Call fn, stripping out the 1st argument (the event object).
    function wrapper() {
        return fn.apply( this, Array.prototype.slice.call( arguments, 1 ) );
    }

    // Add .guid property to function to allow it to be easily unbound. Note
    // that $.guid is new in jQuery 1.4+, and $.event.guid was used before.
    wrapper.guid = fn.guid = fn.guid || ( $.guid ? $.guid++ : $.event.guid++ );

    // Bind the handler.
    o.bind( topic, wrapper );
  };

  // Unsubscribe from a topic. Works exactly like unbind.
  $.unsubscribe = function() {
    o.unbind.apply( o, arguments );
  };

  // Publish a topic. Works exactly like trigger.
  $.publish = function() {
    o.trigger.apply( o, arguments );
  };

})(jQuery);

var _gaq = _gaq || [];

TRACKER.init(function(track){
    $.each(track.track, function(i, item){
        _gaq.push(item);
    });

    _gaq.push(['_trackPageview']);
});