!function(){var d,s=[],o=!1;function u(e,i){for(var t,n,o=$G(e).children,r=0;n=o[r++];)if("focus"==n.className){t=n.getAttribute(i);break}return t}function r(e){return e?e=utils.trim(e).replace(/v\.youku\.com\/v_show\/id_([\w\-=]+)\.html/i,"player.youku.com/embed/$1").replace(/v\.qq\.com\/x\/cover\/[\w]+\/([\w]+)\.html/i,"v.qq.com/iframe/player.html?vid=$1&tiny=0&auto=0").replace(/v\.qq\.com\/x\/page\/([\w]+)\.html/i,"v.qq.com/iframe/player.html?vid=$1&tiny=0&auto=0").replace(/www\.bilibili\.com\/video\/([a-zA-Z0-9]+)\/?.*$/i,"player.bilibili.com/player.html?bvid=$1"):""}function a(e){e&&(e=r(e),e=utils.unhtmlForUrl(e),$G("preview").innerHTML='<div class="previewMsg"><span>'+lang.urlError+'</span></div><iframe class="previewVideo"  src="'+e+'" width="420" height="280" frameborder=0 allowfullscreen></iframe>')}function e(e){this.$wrap=e.constructor==String?$("#"+e):$(e),this.init()}window.onload=function(){try{window.parent.callback.videoWidgetSelectVideo&&($G("videoSelect").style.display="inline-block",$G("videoSelect").addEventListener("click",function(){window.parent.callback.videoWidgetSelectVideo(function(e){$G("videoUrl").value=e[0],a(e[0])})}))}catch(e){}$focus($G("videoUrl")),function(){for(var o=$G("tabHeads").children,e=0;e<o.length;e++)domUtils.on(o[e],"click",function(e){for(var i,t=e.target||e.srcElement,n=0;n<o.length;n++)i=o[n].getAttribute("data-content-id"),o[n]==t?(domUtils.addClass(o[n],"focus"),domUtils.addClass($G(i),"focus")):(domUtils.removeClasses(o[n],"focus"),domUtils.removeClasses($G(i),"focus"))})}(),function(e){for(var i,t=0;i=e[t++];){var n,o=$G(i),r={none:lang.default,left:lang.floatLeft,right:lang.floatRight,center:lang.block};for(n in r){var a=document.createElement("div");a.setAttribute("name",n),"none"==n&&(a.className="focus"),a.style.cssText="background:url(images/"+n+"_focus.jpg);",a.setAttribute("title",r[n]),o.appendChild(a)}!function(e){for(var i,t=$G(e).children,n=0;i=t[n++];)domUtils.on(i,"click",function(){for(var e,i=0;e=t[i++];)e.className="",e.removeAttribute&&e.removeAttribute("class");this.className="focus"})}(i)}}(["videoFloat","upload_alignment"]),function(e){browser.ie?e.onpropertychange=function(){a(this.value)}:e.addEventListener("input",function(){a(this.value)},!1)}($G("videoUrl")),dialog.onok=function(){var e,i,t,n;switch($G("preview").innerHTML="",u("tabHeads","tabSrc")){case"video":return e=$G("videoWidth"),i=$G("videoHeight"),t=$G("videoUrl").value,n=u("videoFloat","name"),!!t&&(!!function(e){for(var i,t=0;i=e[t++];){var n=i.value;if(!/(0|^[1-9]\d*$)/.test(n)&&n)return alert(lang.numError),i.value="",i.focus(),!1}return!0}([e,i])&&void editor.execCommand("insertvideo",{url:r(t),width:e.value,height:i.value,align:n},o?"upload":null));case"videoSearch":return function(e){for(var i,t=domUtils.getElementsByTagName($G(e),"img"),n=[],o=0;i=t[o++];)i.getAttribute("selected")&&n.push({url:i.getAttribute("ue_video_url"),width:420,height:280,align:"none"});editor.execCommand("insertvideo",n)}("searchList");case"upload":return function(){var e,i=[],t=editor.getOpt("videoUrlPrefix"),n=parseInt($G("upload_width").value,10)||420,o=parseInt($G("upload_height").value,10)||280,r=u("upload_alignment","name")||"none";for(e in s){var a=s[e];i.push({url:t+a.url,width:n,height:o,align:r})}var l=d.getQueueCount();{if(l)return $(".info","#queueList").html('<span style="color:red;">'+"还有2个未上传文件".replace(/[\d]/,l)+"</span>"),!1;editor.execCommand("insertvideo",i,"upload")}}()}},dialog.oncancel=function(){$G("preview").innerHTML=""},function(){var e,i,t,n=editor.selection.getRange().getClosedNode();n&&n.className&&(t="edui-faked-video"==n.className,i=-1!=n.className.indexOf("edui-upload-video"),(t||i)&&($G("videoUrl").value=e=n.getAttribute("_url"),$G("videoWidth").value=n.width,$G("videoHeight").value=n.height,t=domUtils.getComputedStyle(n,"float"),function(e){for(var i,t=$G("videoFloat").children,n=0;i=t[n++];)i.getAttribute("name")==e?"focus"!=i.className&&(i.className="focus"):"focus"==i.className&&(i.className="")}("center"===domUtils.getComputedStyle(n.parentNode,"text-align")?"center":t)),i&&(o=!0)),a(e)}(),d=new e("queueList")},e.prototype={init:function(){this.fileList=[],this.initContainer(),this.initUploader()},initContainer:function(){this.$queue=this.$wrap.find(".filelist")},initUploader:function(){jQuery;var e=this.$wrap,i=(e.find(".filelist"),e.find(".statusBar")),e=(i.find(".info"),e.find(".uploadBtn"),e.find(".filePickerBtn"),e.find(".filePickerBlock"),e.find(".placeholder"),i.find(".progress").hide(),window.devicePixelRatio||1);e="transition"in(i=document.createElement("p").style)||"WebkitTransition"in i||"MozTransition"in i||"msTransition"in i||"OTransition"in i,i=null,editor.getActionUrl(editor.getOpt("videoActionName")),editor.getOpt("videoMaxSize"),(editor.getOpt("videoAllowFiles")||[]).join("").replace(/\./g,",").replace(/^[,]/,"")},getQueueCount:function(){for(var e,i=0,t=this.uploader.getFiles(),n=0;e=t[n++];)"queued"!=(e=e.getStatus())&&"uploading"!=e&&"progress"!=e||i++;return i},refresh:function(){this.uploader.refresh()}}}();