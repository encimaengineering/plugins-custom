<style type="text/css">
	#exitBox{display:none;width:970px;}
	#exitBox_overlay{position:fixed;top:0px;left:0px;height:100%;width:100%;}
	.exitBox_overlayBG{background:#000;z-index:11000;}
	#exitBox #exitCloseBtn{background:url('http://www.clickchores.com/close-btn.png') no-repeat top right transparent;display:block;height:26px;position:absolute;right:0px;top:0px;visibility:visible;width:26px;z-index:13000;}
</style>

<script type="text/javascript">
	(function($){
		$(document).ready(function(){
			$.fn.exitBox = function(settings){
			
				var config = {'cookieName': 'exitBoxCheck',
					  'cookieDuration': 2 //days, decimals allowed
					 };
				
				if (settings) $.extend(config, settings);
				return this.each(function(){                                              	
					var obj = $(this);
					var lastMouseX;
					var lastMouseY;
					var sideBorderWidth = .1*$(window).width();
					var endBorderHeight = .1*$(window).height();
					var showing = false;
					var leftBorderCheck =
								rightBorderCheck =
								topBorderCheck =
								bottomBorderCheck = false;
										
					if (readCookie(config.cookieName) == null){
						$(obj).css({
							'display' : 'none',
							'position' : 'absolute',
							'zIndex' : '12000',
							'cursor' : 'pointer'
						});
						$(window).resize(function() {
							setBorderWidth();
							if (showing) {
								positionBox();
							}
						})
						
						$(window).scroll(function() {
							if (showing) {
								positionBox();
							}
						});

						$(document).mousemove(function(e){
							lastMouseX = e.pageX - $(window).scrollLeft();
							lastMouseY = e.pageY - $(window).scrollTop();
						});
						
						$(document).mouseover(function(){
							//monitoring mouse                                                       
						}).mouseleave(function(){
							if (checkMouse() && checkScreenSize()){
								showBox();         
							}
						})
						
						function checkScreenSize(){
							if ($(window).width() > 837 && $(window).height() > 421) {
							return true;        
							} else {
								return false;       
							}
						}
						
						function setBorderWidth(){
							sideBorderWidth = .1*$(window).width();
							endBorderHeight = .1*$(window).height();
						}

						function positionBox(){
							if (showing) {
								$(obj).css({
									/*'top' : ( ($(window).height()*.5+$(document).scrollTop()) - $(obj).height()*.5 )+'px',*/
									'top' : ( $(document).scrollTop() + 36 )+'px',
									'left' : ( $(window).width()*.5 - $(obj).width()*.5 )+'px'
								});
							}
						}
						
						function checkMouse(){                                                                              
							leftBorderCheck =
							rightBorderCheck =
							topBorderCheck =
							bottomBorderCheck = false;
							leftBorderCheck = (lastMouseX < sideBorderWidth) ? true : false;
							rightBorderCheck = (lastMouseX > ($(window).width()-sideBorderWidth)) ? true : false;
							topBorderCheck = (lastMouseY < endBorderHeight) ? true : false;
							bottomBorderCheck = (lastMouseY > ($(window).height()-endBorderHeight)) ? true : false;
							
							if ($(document).height() > $(window).height()) {
								//there's a scroll bar, don't fire on right side
								if ( (topBorderCheck) && (!leftBorderCheck || !bottomBorderCheck || !rightBorderCheck) ){
									return true;
								} else {
									return false;
								}
							} else {
								if ( /*leftBorderCheck || */topBorderCheck/* || bottomBorderCheck || rightBorderCheck*/ ){
									return true;        
								} else {
									return false;       
								}
							}
						}
						
						function showOverlay(){
							$("body").append('<div id="exitBox_overlay"></div>')
							$('#exitBox_overlay').hide().addClass("exitBox_overlayBG").css({'opacity': '.80', 'filter': 'alpha(opacity=80)'}).click(function(){
								$(obj).remove(); hideOverlay();
								}).fadeIn(200);
						}
						
						function hideOverlay(){
							$('#exitBox_overlay').fadeOut(200,function(){$(this).remove()});
						}
						
						function showBox(){                                                                              
							if (!showing) {
								showing = true;
								createCookie(config.cookieName,1,config.cookieDuration);
								positionBox();
								showOverlay();
								$(obj).css('display', 'block');
								$(obj).children().css('visibility', 'visible');
								$('#exitCloseBtn').click(function() {
									$(obj).remove();
									hideOverlay();
								});
							}
						}
					} else {
						$(obj).remove();
					}

					function createCookie(name,value,days) {
						if (days) {
							var date = new Date();
							date.setTime(date.getTime()+(days*24*60*60*1000));
							var expires = "; expires="+date.toGMTString();
						}
						else var expires = "";
						document.cookie = name+"="+value+expires+"; path=/";
					}
					
					function readCookie(name) {
						var nameEQ = name + "=";
						var ca = document.cookie.split(';');
						for(var i=0;i < ca.length;i++) {
							var c = ca[i];
							while (c.charAt(0)==' ') c = c.substring(1,c.length);
							if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
						}
						return null;
					}

					function eraseCookie(name) {
						createCookie(name,"",-1);
					}                                              
				});                           
			}; //exitBox plugin

			$('body').prepend('<div id="exitBox"><a href="http://www.surveygizmo.com/s3/1129434/Web-Survey-AIU" target="_blank" onclick=\"return gaqPopup(this);\"><img src="http://www.clickchores.com/aiu_exit.jpg"></a><div id="exitCloseBtn"></div></div>');
			$('#exitBox').exitBox({ 
				cookieName: 'AIU_Exit_Mitigation', 
				cookieDuration: 1
			});
		});
	})(jQuery);
</script>