$(window).load(function () {

	divslider=null;
	$('a.link').click(function () {  
		$('#wrapper').scrollTo($(this).attr('href'), 800);
		//return false;  
	});  
	$('.flexslider').flexslider({
		animation: "slide",
		animationLoop: false,
		itemWidth: 788,
		itemMargin: 5,
		minItems: 1,
		maxItems: 5,
		start: function(slider){
		  $('body').removeClass('loading');
		  $('.slider').css('padding-top',((alto-($('.slider').height()))/2));
		},
		
		
	});

	$(".inline-contacto").colorbox(
		{
			inline:true,
			width:"980px",
			onOpen: function(){
				$('#cboxClose').addClass('close2');
			},
			onClosed: function(){
				$('#cboxClose').removeClass('close2');
			}
		}
	);
	$(".inline-franquicias").colorbox({inline:true, width:"615px"});
	  
	  
	  
	/* General setup*/
	ancho = $( window ).width();
	alto = $( window ).height();
	
	
	anchototal = ancho * 3;
	$(".contenedor, .contenedor2, .contenedor3").css('width',ancho);
	$(".contenedor, .contenedor2, .contenedor3, #mask").css('height',alto);
	$("#mask").css('width',anchototal);
	
	$('.blanco').css('width',$('.blanco').width()+'px');
	$('.blanco img').css('margin-left',(($('.blanco').width()-$('.blanco img').width())/2)+'px');

	$('.menu ul li span').css('width',($('.menu').width()*0.025)+'px')
	
	$('.uno .link').trigger('click')

});
/** sifr */
(function($){$.fn.sifr=function(prefs){var t=true,u=undefined,s,p;s=arguments.callee.prefs=arguments.callee.prefs||{asHex:function(x){var d=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];return isNaN(x)?'00':d[(x-x%16)/16]+d[x%16];},colors:{aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},toHex:function(color){var rgb;if(!color){return u;}return(rgb=color.match(/rgb\(([0-9]+),\s([0-9]+),\s([0-9]+)\)/))?'#'+this.asHex(rgb[1])+this.asHex(rgb[2])+this.asHex(rgb[3]):(rgb=this.colors[color])?'#'+this.asHex(rgb[0])+this.asHex(rgb[1])+this.asHex(rgb[2]):(color.length===4)?color.replace(/\#([0-9a-z])([0-9a-z])([0-9a-z])/,'#$1$1$2$2$3$3'):color;}};p=$.extend({},s,(prefs===false)?{unsifr:true}:prefs);if(p.save===t){arguments.callee.prefs=$.extend(p,{save:false});}if(this[0]===document){return;}if(!p.unsifr&&typeof p.before==='function'){p.before.apply(this,[p]);}this.each(function(){var ele=$(this),txt,alt,fir,embedOptions;fir=ele.children('.sIFR-alternate');if(fir){ele.html(fir.html());if(p.unsifr){return;}}if(typeof p.beforeEach==='function'){p.beforeEach.apply(this,[t,p]);}fir=ele.addClass('sIFR-replaced').wrapInner('<span class="sIFR-alternate" style="position: absolute; "></span>').children('.sIFR-alternate');alt=ele.append('<span class="sIFR-jquery" style="position: absolute; ">'+$.trim(fir.text())+'</span>').children('.sIFR-jquery');txt=$.trim(fir.html()).replace(/(>)\s+|\s+(<)/g,'$1$2').replace(/(id|name)=[A-Za-z0-9]+/g,'');if(p.textTransform){p.textTransform=p.textTransform.toLowerCase();if(p.textTransform==='uppercase'){txt=txt.toUpperCase();}if(p.textTransform==='lowercase'){txt=txt.html().toLowerCase();}if(p.textTransform==='capitalize'){var cap=txt.split(/(\s|\>)/);txt='';for(var i in cap){txt+=cap[i].charAt(0).toUpperCase()+cap[i].substr(1);}}}txt=ele.attr('href')?'<a href="'+ele.attr('href')+'">'+txt+'</a>':txt;embedOptions={flashvars:$.extend({h:alt.height()*(p.zoom||1),offsetLeft:p.offsetLeft||u,offsetTop:p.offsetTop||u,textAlign:p.textAlign||ele.css('textAlign').match(/left|center|right/)||'center',textColor:p.toHex(p.color||ele.css('color'))||u,txt:p.content||txt,underline:(p.underline===t||ele.css('textDecoration')==='underline')?t:u,w:alt.width()*(p.zoom||1)},p.flashvars),height:p.height||alt.height(),src:(p.path||'').replace(/([^\/])$/,'$1/')+(p.font||ele.css('fontFamily').replace(/^\s+|\s+$|,[\S|\s]+|'|"|(,)\s+/g,'$1')).replace(/([^\.][^s][^w][^f])$/,'$1.swf'),style:'margin: 1px 0 0; position: absolute; vertical-align: text-top;',width:p.width||alt.width(),wmode:'transparent'};embedOptions.flashvars.linkColor=p.toHex(p.link||ele.find('a').css('color'))||embedOptions.flashvars.textColor;embedOptions.flashvars.hoverColor=p.toHex(p.hover)||embedOptions.flashvars.linkColor;if(p.zoom){embedOptions.flashvars.offsetTop=((p.offsetTop||0)+((alt.height()-(alt.height()*p.zoom))/2))*(p.zoomTop||1);embedOptions.flashvars.offsetLeft=((p.offsetLeft||0)+((alt.width()-(alt.width()*p.zoom))/2))*(p.zoomLeft||1);}$().flash($.extend(embedOptions,p.embedOptions),$.extend({expressInstall:p.expressInstall||false,version:p.version||7,update:p.update||false},p.pluginOptions),function(options){fir.attr('style','visibility: hidden;');alt.remove();ele.prepend($.fn.flash.transform(options));});if(typeof p.afterEach==='function'){p.afterEach.apply(this,[t,p]);}});if(!p.unsifr&&typeof p.after==='function'){p.after.apply(this,[p]);}};$.fn.unsifr=function(){return this.each(function(){$(this).sifr(false);});};$.sifr=function(prefs){$(document).sifr($.extend({save:true},prefs));};$.sifr();})(jQuery);
/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2008 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 9/11/2008
 * @author Ariel Flesler
 * @version 1.4
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;(function(h){var m=h.scrollTo=function(b,c,g){h(window).scrollTo(b,c,g)};m.defaults={axis:'y',duration:1};m.window=function(b){return h(window).scrollable()};h.fn.scrollable=function(){return this.map(function(){var b=this.parentWindow||this.defaultView,c=this.nodeName=='#document'?b.frameElement||b:this,g=c.contentDocument||(c.contentWindow||c).document,i=c.setInterval;return c.nodeName=='IFRAME'||i&&h.browser.safari?g.body:i?g.documentElement:this})};h.fn.scrollTo=function(r,j,a){if(typeof j=='object'){a=j;j=0}if(typeof a=='function')a={onAfter:a};a=h.extend({},m.defaults,a);j=j||a.speed||a.duration;a.queue=a.queue&&a.axis.length>1;if(a.queue)j/=2;a.offset=n(a.offset);a.over=n(a.over);return this.scrollable().each(function(){var k=this,o=h(k),d=r,l,e={},p=o.is('html,body');switch(typeof d){case'number':case'string':if(/^([+-]=)?\d+(px)?$/.test(d)){d=n(d);break}d=h(d,this);case'object':if(d.is||d.style)l=(d=h(d)).offset()}h.each(a.axis.split(''),function(b,c){var g=c=='x'?'Left':'Top',i=g.toLowerCase(),f='scroll'+g,s=k[f],t=c=='x'?'Width':'Height',v=t.toLowerCase();if(l){e[f]=l[i]+(p?0:s-o.offset()[i]);if(a.margin){e[f]-=parseInt(d.css('margin'+g))||0;e[f]-=parseInt(d.css('border'+g+'Width'))||0}e[f]+=a.offset[i]||0;if(a.over[i])e[f]+=d[v]()*a.over[i]}else e[f]=d[i];if(/^\d+$/.test(e[f]))e[f]=e[f]<=0?0:Math.min(e[f],u(t));if(!b&&a.queue){if(s!=e[f])q(a.onAfterFirst);delete e[f]}});q(a.onAfter);function q(b){o.animate(e,j,a.easing,b&&function(){b.call(this,r,a)})};function u(b){var c='scroll'+b,g=k.ownerDocument;return p?Math.max(g.documentElement[c],g.body[c]):k[c]}}).end()};function n(b){return typeof b=='object'?b:{top:b,left:b}}})(jQuery);
/**
 * --------------------------------------------------------------------
 * jQuery-Plugin "pngFix"
 * Version: 1.1, 11.09.2007
 * by Andreas Eberhard, andreas.eberhard@gmail.com
 *                      http://jquery.andreaseberhard.de/
 *
 * Copyright (c) 2007 Andreas Eberhard
 * Licensed under GPL (http://www.opensource.org/licenses/gpl-license.php)
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(s($){3.1s.1k=s(j){j=3.1a({12:\'1m.1j\'},j);8 k=(n.P=="r 10 Z"&&U(n.v)==4&&n.v.E("14 5.5")!=-1);8 l=(n.P=="r 10 Z"&&U(n.v)==4&&n.v.E("14 6.0")!=-1);o(3.17.16&&(k||l)){3(2).L("1r[@m$=.M]").z(s(){3(2).7(\'q\',3(2).q());3(2).7(\'p\',3(2).p());8 a=\'\';8 b=\'\';8 c=(3(2).7(\'K\'))?\'K="\'+3(2).7(\'K\')+\'" \':\'\';8 d=(3(2).7(\'A\'))?\'A="\'+3(2).7(\'A\')+\'" \':\'\';8 e=(3(2).7(\'C\'))?\'C="\'+3(2).7(\'C\')+\'" \':\'\';8 f=(3(2).7(\'B\'))?\'B="\'+3(2).7(\'B\')+\'" \':\'\';8 g=(3(2).7(\'R\'))?\'1d:\'+3(2).7(\'R\')+\';\':\'\';8 h=(3(2).1c().7(\'1b\'))?\'19:18;\':\'\';o(2.9.y){a+=\'y:\'+2.9.y+\';\';2.9.y=\'\'}o(2.9.t){a+=\'t:\'+2.9.t+\';\';2.9.t=\'\'}o(2.9.w){a+=\'w:\'+2.9.w+\';\';2.9.w=\'\'}8 i=(2.9.15);b+=\'<x \'+c+d+e+f;b+=\'9="13:11;1q-1p:1o-1n;O:W-V;N:1l;\'+g+h;b+=\'q:\'+3(2).q()+\'u;\'+\'p:\'+3(2).p()+\'u;\';b+=\'J:I:H.r.G\'+\'(m=\\\'\'+3(2).7(\'m\')+\'\\\', D=\\\'F\\\');\';b+=i+\'"></x>\';o(a!=\'\'){b=\'<x 9="13:11;O:W-V;\'+a+h+\'q:\'+3(2).q()+\'u;\'+\'p:\'+3(2).p()+\'u;\'+\'">\'+b+\'</x>\'}3(2).1i();3(2).1h(b)});3(2).L("*").z(s(){8 a=3(2).T(\'N-S\');o(a.E(".M")!=-1){8 b=a.X(\'1g("\')[1].X(\'")\')[0];3(2).T(\'N-S\',\'1f\');3(2).Q(0).Y.J="I:H.r.G(m=\'"+b+"\',D=\'F\')"}});3(2).L("1e[@m$=.M]").z(s(){8 a=3(2).7(\'m\');3(2).Q(0).Y.J=\'I:H.r.G\'+\'(m=\\\'\'+a+\'\\\', D=\\\'F\\\');\';3(2).7(\'m\',j.12)})}1t 3}})(3);',62,92,'||this|jQuery||||attr|var|style|||||||||||||src|navigator|if|height|width|Microsoft|function|padding|px|appVersion|margin|span|border|each|class|alt|title|sizingMethod|indexOf|scale|AlphaImageLoader|DXImageTransform|progid|filter|id|find|png|background|display|appName|get|align|image|css|parseInt|block|inline|split|runtimeStyle|Explorer|Internet|relative|blankgif|position|MSIE|cssText|msie|browser|hand|cursor|extend|href|parent|float|input|none|url|after|hide|gif|pngFix|transparent|blank|line|pre|space|white|img|fn|return'.split('|'),0,{}));