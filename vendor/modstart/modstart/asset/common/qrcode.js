!function(e){var n={};function o(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=n,o.d=function(r,t,e){o.o(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:e})},o.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},o.t=function(t,r){if(1&r&&(t=o(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var n in t)o.d(e,n,function(r){return t[r]}.bind(null,n));return e},o.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return o.d(t,"a",t),t},o.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},o.p="/asset//",o(o.s=316)}({257:function(n,o,r){!function(e){var r,t;!function(u){"use strict";var r,s=e,o=!(!(r=document.createElement("canvas")).getContext||!r.getContext("2d"));function d(r,t,e,n,o){e=Math.max(1,e||1),n=Math.min(40,n||40);for(var i=e;i<=n;i+=1)try{return function(r,t,e,n){var o={},i=u(e,t);i.addData(r),i.make(),n=n||0;var a=i.getModuleCount(),s=i.getModuleCount()+2*n;return o.text=r,o.level=t,o.version=e,o.moduleCount=s,o.isDark=function(r,t){return t-=n,!((r-=n)<0||a<=r||t<0||a<=t)&&i.isDark(r,t)},o.addBlank=function(a,u,f,c){var l=o.isDark,g=1/s;o.isDark=function(r,t){var e=t*g,n=r*g,o=e+g,i=n+g;return l(r,t)&&(o<a||f<e||i<u||c<n)}},o}(r,t,i,o)}catch(r){}}function i(r,t,e){s(e.background).is("img")?t.drawImage(e.background,0,0,e.size,e.size):e.background&&(t.fillStyle=e.background,t.fillRect(e.left,e.top,e.size,e.size));var n,o,i,a,u,f,c=e.mode;1===c||2===c?function(r,t,e){var n=e.size,o="bold "+e.mSize*n+"px "+e.fontname,i=s("<canvas/>")[0].getContext("2d");i.font=o;var a=i.measureText(e.label).width,u=e.mSize,f=a/n,i=(1-f)*e.mPosX,a=(1-u)*e.mPosY,f=i+f,u=a+u;1===e.mode?r.addBlank(0,a-.01,n,u+.01):r.addBlank(i-.01,a-.01,.01+f,u+.01),t.fillStyle=e.fontcolor,t.font=o,t.fillText(e.label,i*n,a*n+.75*e.mSize*n)}(r,t,e):3!==c&&4!==c||(n=r,o=t,a=(i=e).size,u=i.image.naturalWidth||1,f=i.image.naturalHeight||1,c=i.mSize,t=(1-(r=c*u/f))*i.mPosX,e=(1-c)*i.mPosY,u=t+r,f=e+c,3===i.mode?n.addBlank(0,e-.01,a,f+.01):n.addBlank(t-.01,e-.01,.01+u,f+.01),o.drawImage(i.image,t*a,e*a,r*a,c*a))}function c(r,t,e,n,o,i,a,u){r.isDark(a,u)&&t.rect(n,o,i,i)}function l(r,t,e,n,o,i,a,u){var f=r.isDark,c=n+i,l=o+i,g=e.radius*i,s=a-1,d=a+1,h=u-1,v=u+1,w=f(a,u),p=f(s,h),m=f(s,u),y=f(s,v),b=f(a,v),k=f(d,v),B=f(d,u),x=f(d,h),r=f(a,h);w?(e=t,i=n,s=o,v=c,u=l,d=g,f=!m&&!b,a=!B&&!b,h=!B&&!r,(w=!m&&!r)?e.moveTo(i+d,s):e.moveTo(i,s),f?(e.lineTo(v-d,s),e.arcTo(v,s,v,u,d)):e.lineTo(v,s),a?(e.lineTo(v,u-d),e.arcTo(v,u,i,u,d)):e.lineTo(v,u),h?(e.lineTo(i+d,u),e.arcTo(i,u,i,s,d)):e.lineTo(i,u),w?(e.lineTo(i,s+d),e.arcTo(i,s,v,s,d)):e.lineTo(i,s)):(t=t,n=n,o=o,c=c,l=l,g=g,y=m&&b&&y,k=B&&b&&k,x=B&&r&&x,m&&r&&p&&(t.moveTo(n+g,o),t.lineTo(n,o),t.lineTo(n,o+g),t.arcTo(n,o,n+g,o,g)),y&&(t.moveTo(c-g,o),t.lineTo(c,o),t.lineTo(c,o+g),t.arcTo(c,o,c-g,o,g)),k&&(t.moveTo(c-g,l),t.lineTo(c,l),t.lineTo(c,l-g),t.arcTo(c,l,c-g,l,g)),x&&(t.moveTo(n+g,l),t.lineTo(n,l),t.lineTo(n,l-g),t.arcTo(n,l,n+g,l,g)))}function a(r,t){var e=d(t.text,t.ecLevel,t.minVersion,t.maxVersion,t.quiet);if(!e)return null;var n=s(r).data("qrcode",e),r=n[0].getContext("2d");return i(e,r,t),function(r,t,e){var n,o,i,a=r.moduleCount,u=e.size/a,f=c;for(0<e.radius&&e.radius<=.5&&(f=l),t.beginPath(),n=0;n<a;n+=1)for(o=0;o<a;o+=1)f(r,t,e,e.left+o*u,e.top+n*u,u,n,o);s(e.fill).is("img")?(t.strokeStyle="rgba(0,0,0,0.5)",t.lineWidth=2,t.stroke(),i=t.globalCompositeOperation,t.globalCompositeOperation="destination-out",t.fill(),t.globalCompositeOperation=i,t.clip(),t.drawImage(e.fill,0,0,e.size,e.size),t.restore()):(t.fillStyle=e.fill,t.fill())}(e,r,t),n}function f(r){return a(s("<canvas/>").attr("width",r.size).attr("height",r.size),r)}var t={render:"canvas",minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:0,quiet:0,mode:0,mSize:.1,mPosX:.5,mPosY:.5,label:"no label",fontname:"sans",fontcolor:"#000",image:null};s.fn.qrcode=function(r){var n=s.extend({},t,r);return this.each(function(r,t){var e;"canvas"===t.nodeName.toLowerCase()?a(t,n):s(t).append((e=n,o&&"canvas"===e.render?f(e):o&&"image"===e.render?(t=e,s("<img/>").attr("src",f(t)[0].toDataURL("image/png"))):function(r){var t=d(r.text,r.ecLevel,r.minVersion,r.maxVersion,r.quiet);if(!t)return null;var e,n,o=r.size,i=r.background,a=Math.floor,u=t.moduleCount,f=a(o/u),c=a(.5*(o-f*u)),o={position:"relative",left:0,top:0,padding:0,margin:0,width:o,height:o},l={position:"absolute",padding:0,margin:0,width:f,height:f,"background-color":r.fill},g=s("<div/>").data("qrcode",t).css(o);for(i&&g.css("background-color",i),e=0;e<u;e+=1)for(n=0;n<u;n+=1)t.isDark(e,n)&&s("<div/>").css(l).css({left:c+n*f,top:c+e*f}).appendTo(g);return g}(e)))})}}((t=function(){function t(r,t){function o(r,t){l=function(r){for(var t=new Array(r),e=0;e<r;e+=1){t[e]=new Array(r);for(var n=0;n<r;n+=1)t[e][n]=null}return t}(g=4*u+17),f(0,0),f(g-7,0),f(0,g-7),s(),c(),h(r,t),7<=u&&d(r),null==e&&(e=w(u,i,n)),v(e,t)}var u=r,i=p[t],l=null,g=0,e=null,n=new Array,a={},f=function(r,t){for(var e=-1;e<=7;e+=1)if(!(r+e<=-1||g<=r+e))for(var n=-1;n<=7;n+=1)t+n<=-1||g<=t+n||(l[r+e][t+n]=0<=e&&e<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==e||6==e)||2<=e&&e<=4&&2<=n&&n<=4)},c=function(){for(var r=8;r<g-8;r+=1)null==l[r][6]&&(l[r][6]=r%2==0);for(var t=8;t<g-8;t+=1)null==l[6][t]&&(l[6][t]=t%2==0)},s=function(){for(var r=m.getPatternPosition(u),t=0;t<r.length;t+=1)for(var e=0;e<r.length;e+=1){var n=r[t],o=r[e];if(null==l[n][o])for(var i=-2;i<=2;i+=1)for(var a=-2;a<=2;a+=1)l[n+i][o+a]=-2==i||2==i||-2==a||2==a||0==i&&0==a}},d=function(r){for(var t=m.getBCHTypeNumber(u),e=0;e<18;e+=1){var n=!r&&1==(t>>e&1);l[Math.floor(e/3)][e%3+g-8-3]=n}for(e=0;e<18;e+=1)n=!r&&1==(t>>e&1),l[e%3+g-8-3][Math.floor(e/3)]=n},h=function(r,t){for(var e=m.getBCHTypeInfo(i<<3|t),n=0;n<15;n+=1){var o=!r&&1==(e>>n&1);n<6?l[n][8]=o:n<8?l[n+1][8]=o:l[g-15+n][8]=o}for(n=0;n<15;n+=1)o=!r&&1==(e>>n&1),n<8?l[8][g-n-1]=o:n<9?l[8][15-n-1+1]=o:l[8][15-n-1]=o;l[g-8][8]=!r},v=function(r,t){for(var e=-1,n=g-1,o=7,i=0,a=m.getMaskFunction(t),u=g-1;0<u;u-=2)for(6==u&&--u;;){for(var f,c=0;c<2;c+=1)null==l[n][u-c]&&(f=!1,i<r.length&&(f=1==(r[i]>>>o&1)),a(n,u-c)&&(f=!f),l[n][u-c]=f,-1==--o&&(i+=1,o=7));if((n+=e)<0||g<=n){n-=e,e=-e;break}}},w=function(r,t,e){for(var n=B.getRSBlocks(r,t),o=x(),i=0;i<e.length;i+=1){var a=e[i];o.put(a.getMode(),4),o.put(a.getLength(),m.getLengthInBits(a.getMode(),r)),a.write(o)}for(var u=0,i=0;i<n.length;i+=1)u+=n[i].dataCount;if(o.getLengthInBits()>8*u)throw new Error("code length overflow. ("+o.getLengthInBits()+">"+8*u+")");for(o.getLengthInBits()+4<=8*u&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*u||(o.put(236,8),o.getLengthInBits()>=8*u));)o.put(17,8);return function(r,t){for(var e=0,n=0,o=0,i=new Array(t.length),a=new Array(t.length),u=0;u<t.length;u+=1){var f=t[u].dataCount,c=t[u].totalCount-f,n=Math.max(n,f),o=Math.max(o,c);i[u]=new Array(f);for(var l=0;l<i[u].length;l+=1)i[u][l]=255&r.getBuffer()[l+e];e+=f;var c=m.getErrorCorrectPolynomial(c),g=y(i[u],c.getLength()-1).mod(c);for(a[u]=new Array(c.getLength()-1),l=0;l<a[u].length;l+=1){var s=l+g.getLength()-a[u].length;a[u][l]=0<=s?g.getAt(s):0}}for(var d=0,l=0;l<t.length;l+=1)d+=t[l].totalCount;var h=new Array(d),v=0;for(l=0;l<n;l+=1)for(u=0;u<t.length;u+=1)l<i[u].length&&(h[v]=i[u][l],v+=1);for(l=0;l<o;l+=1)for(u=0;u<t.length;u+=1)l<a[u].length&&(h[v]=a[u][l],v+=1);return h}(o,n)};return a.addData=function(r){r=C(r);n.push(r),e=null},a.isDark=function(r,t){if(r<0||g<=r||t<0||g<=t)throw new Error(r+","+t);return l[r][t]},a.getModuleCount=function(){return g},a.make=function(){o(!1,function(){for(var r=0,t=0,e=0;e<8;e+=1){o(!0,e);var n=m.getLostPoint(a);(0==e||n<r)&&(r=n,t=e)}return t}())},a.createTableTag=function(r,t){r=r||2;var e="";e+='<table style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: "+(t=void 0===t?4*r:t)+"px;",e+='">',e+="<tbody>";for(var n=0;n<a.getModuleCount();n+=1){e+="<tr>";for(var o=0;o<a.getModuleCount();o+=1)e+='<td style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: 0px;",e+=" width: "+r+"px;",e+=" height: "+r+"px;",e+=" background-color: ",e+=a.isDark(n,o)?"#000000":"#ffffff",e+=";",e+='"/>';e+="</tr>"}return(e+="</tbody>")+"</table>"},a.createImgTag=function(e,r){e=e||2,r=void 0===r?4*e:r;var t=a.getModuleCount()*e+2*r,n=r,o=t-r;return T(t,t,function(r,t){if(n<=r&&r<o&&n<=t&&t<o){r=Math.floor((r-n)/e),t=Math.floor((t-n)/e);return a.isDark(t,r)?0:1}return 1})},a}t.stringToBytes=function(r){for(var t=new Array,e=0;e<r.length;e+=1){var n=r.charCodeAt(e);t.push(255&n)}return t},t.createStringToBytes=function(u,f){var o=function(){function r(){var r=t.read();if(-1==r)throw new Error;return r}for(var t=c(u),e=0,n={};;){var o=t.read();if(-1==o)break;var i=r(),a=r()<<8|r();n[String.fromCharCode(o<<8|i)]=a,e+=1}if(e!=f)throw new Error(e+" != "+f);return n}(),i="?".charCodeAt(0);return function(r){for(var t=new Array,e=0;e<r.length;e+=1){var n=r.charCodeAt(e);n<128?t.push(n):"number"==typeof(n=o[r.charAt(e)])?(255&n)==n?t.push(n):(t.push(n>>>8),t.push(255&n)):t.push(i)}return t}};var e,r,n,p={L:1,M:0,Q:3,H:2},m=(e=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],n=function(r){for(var t=0;0!=r;)t+=1,r>>>=1;return t},(r={}).getBCHTypeInfo=function(r){for(var t=r<<10;0<=n(t)-n(1335);)t^=1335<<n(t)-n(1335);return 21522^(r<<10|t)},r.getBCHTypeNumber=function(r){for(var t=r<<12;0<=n(t)-n(7973);)t^=7973<<n(t)-n(7973);return r<<12|t},r.getPatternPosition=function(r){return e[r-1]},r.getMaskFunction=function(r){switch(r){case 0:return function(r,t){return(r+t)%2==0};case 1:return function(r,t){return r%2==0};case 2:return function(r,t){return t%3==0};case 3:return function(r,t){return(r+t)%3==0};case 4:return function(r,t){return(Math.floor(r/2)+Math.floor(t/3))%2==0};case 5:return function(r,t){return r*t%2+r*t%3==0};case 6:return function(r,t){return(r*t%2+r*t%3)%2==0};case 7:return function(r,t){return(r*t%3+(r+t)%2)%2==0};default:throw new Error("bad maskPattern:"+r)}},r.getErrorCorrectPolynomial=function(r){for(var t=y([1],0),e=0;e<r;e+=1)t=t.multiply(y([1,a.gexp(e)],0));return t},r.getLengthInBits=function(r,t){if(1<=t&&t<10)switch(r){case 1:return 10;case 2:return 9;case 4:case 8:return 8;default:throw new Error("mode:"+r)}else if(t<27)switch(r){case 1:return 12;case 2:return 11;case 4:return 16;case 8:return 10;default:throw new Error("mode:"+r)}else{if(!(t<41))throw new Error("type:"+t);switch(r){case 1:return 14;case 2:return 13;case 4:return 16;case 8:return 12;default:throw new Error("mode:"+r)}}},r.getLostPoint=function(r){for(var t=r.getModuleCount(),e=0,n=0;n<t;n+=1)for(var o=0;o<t;o+=1){for(var i=0,a=r.isDark(n,o),u=-1;u<=1;u+=1)if(!(n+u<0||t<=n+u))for(var f=-1;f<=1;f+=1)o+f<0||t<=o+f||0==u&&0==f||a==r.isDark(n+u,o+f)&&(i+=1);5<i&&(e+=3+i-5)}for(n=0;n<t-1;n+=1)for(o=0;o<t-1;o+=1){var c=0;r.isDark(n,o)&&(c+=1),r.isDark(n+1,o)&&(c+=1),r.isDark(n,o+1)&&(c+=1),r.isDark(n+1,o+1)&&(c+=1),0!=c&&4!=c||(e+=3)}for(n=0;n<t;n+=1)for(o=0;o<t-6;o+=1)r.isDark(n,o)&&!r.isDark(n,o+1)&&r.isDark(n,o+2)&&r.isDark(n,o+3)&&r.isDark(n,o+4)&&!r.isDark(n,o+5)&&r.isDark(n,o+6)&&(e+=40);for(o=0;o<t;o+=1)for(n=0;n<t-6;n+=1)r.isDark(n,o)&&!r.isDark(n+1,o)&&r.isDark(n+2,o)&&r.isDark(n+3,o)&&r.isDark(n+4,o)&&!r.isDark(n+5,o)&&r.isDark(n+6,o)&&(e+=40);for(var l=0,o=0;o<t;o+=1)for(n=0;n<t;n+=1)r.isDark(n,o)&&(l+=1);return e+Math.abs(100*l/t/t-50)/5*10},r),a=function(){for(var t=new Array(256),e=new Array(256),r=0;r<8;r+=1)t[r]=1<<r;for(r=8;r<256;r+=1)t[r]=t[r-4]^t[r-5]^t[r-6]^t[r-8];for(r=0;r<255;r+=1)e[t[r]]=r;return{glog:function(r){if(r<1)throw new Error("glog("+r+")");return e[r]},gexp:function(r){for(;r<0;)r+=255;for(;256<=r;)r-=255;return t[r]}}}();function y(n,o){if(void 0===n.length)throw new Error(n.length+"/"+o);var t=function(){for(var r=0;r<n.length&&0==n[r];)r+=1;for(var t=new Array(n.length-r+o),e=0;e<n.length-r;e+=1)t[e]=n[e+r];return t}(),i={getAt:function(r){return t[r]},getLength:function(){return t.length},multiply:function(r){for(var t=new Array(i.getLength()+r.getLength()-1),e=0;e<i.getLength();e+=1)for(var n=0;n<r.getLength();n+=1)t[e+n]^=a.gexp(a.glog(i.getAt(e))+a.glog(r.getAt(n)));return y(t,0)},mod:function(r){if(i.getLength()-r.getLength()<0)return i;for(var t=a.glog(i.getAt(0))-a.glog(r.getAt(0)),e=new Array(i.getLength()),n=0;n<i.getLength();n+=1)e[n]=i.getAt(n);for(n=0;n<r.getLength();n+=1)e[n]^=a.gexp(a.glog(r.getAt(n))+t);return y(e,0).mod(r)}};return i}function b(){var e=new Array,o={writeByte:function(r){e.push(255&r)},writeShort:function(r){o.writeByte(r),o.writeByte(r>>>8)},writeBytes:function(r,t,e){t=t||0,e=e||r.length;for(var n=0;n<e;n+=1)o.writeByte(r[n+t])},writeString:function(r){for(var t=0;t<r.length;t+=1)o.writeByte(r.charCodeAt(t))},toByteArray:function(){return e},toString:function(){var r="";r+="[";for(var t=0;t<e.length;t+=1)0<t&&(r+=","),r+=e[t];return r+"]"}};return o}function k(r,t){var n=r,o=t,d=new Array(r*t),t={setPixel:function(r,t,e){d[t*n+r]=e},write:function(r){r.writeString("GIF87a"),r.writeShort(n),r.writeShort(o),r.writeByte(128),r.writeByte(0),r.writeByte(0),r.writeByte(0),r.writeByte(0),r.writeByte(0),r.writeByte(255),r.writeByte(255),r.writeByte(255),r.writeString(","),r.writeShort(0),r.writeShort(0),r.writeShort(n),r.writeShort(o),r.writeByte(0);var t=i(2);r.writeByte(2);for(var e=0;255<t.length-e;)r.writeByte(255),r.writeBytes(t,e,255),e+=255;r.writeByte(t.length-e),r.writeBytes(t,e,t.length-e),r.writeByte(0),r.writeString(";")}},i=function(r){for(var t=1<<r,e=1+(1<<r),n=r+1,o=h(),i=0;i<t;i+=1)o.add(String.fromCharCode(i));o.add(String.fromCharCode(t)),o.add(String.fromCharCode(e));var a,u,f,r=b(),c=(a=r,f=u=0,{write:function(r,t){if(r>>>t!=0)throw new Error("length over");for(;8<=u+t;)a.writeByte(255&(r<<u|f)),t-=8-u,r>>>=8-u,u=f=0;f|=r<<u,u+=t},flush:function(){0<u&&a.writeByte(f)}});c.write(t,n);var l=0,g=String.fromCharCode(d[l]);for(l+=1;l<d.length;){var s=String.fromCharCode(d[l]);l+=1,o.contains(g+s)?g+=s:(c.write(o.indexOf(g),n),o.size()<4095&&(o.size()==1<<n&&(n+=1),o.add(g+s)),g=s)}return c.write(o.indexOf(g),n),c.write(e,n),c.flush(),r.toByteArray()},h=function(){var t={},e=0,n={add:function(r){if(n.contains(r))throw new Error("dup key:"+r);t[r]=e,e+=1},size:function(){return e},indexOf:function(r){return t[r]},contains:function(r){return void 0!==t[r]}};return n};return t}var s,B=(s=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],{getRSBlocks:function(r,t){var e=function(r){switch(t){case p.L:return s[4*(r-1)+0];case p.M:return s[4*(r-1)+1];case p.Q:return s[4*(r-1)+2];case p.H:return s[4*(r-1)+3];default:return}}(r);if(void 0===e)throw new Error("bad rs block @ typeNumber:"+r+"/errorCorrectLevel:"+t);for(var n,o,i=e.length/3,a=new Array,u=0;u<i;u+=1)for(var f=e[3*u+0],c=e[3*u+1],l=e[3*u+2],g=0;g<f;g+=1)a.push((n=l,void 0,(o={}).totalCount=c,o.dataCount=n,o));return a}}),x=function(){var e=new Array,n=0,o={getBuffer:function(){return e},getAt:function(r){var t=Math.floor(r/8);return 1==(e[t]>>>7-r%8&1)},put:function(r,t){for(var e=0;e<t;e+=1)o.putBit(1==(r>>>t-e-1&1))},getLengthInBits:function(){return n},putBit:function(r){var t=Math.floor(n/8);e.length<=t&&e.push(0),r&&(e[t]|=128>>>n%8),n+=1}};return o},C=function(r){var e=t.stringToBytes(r);return{getMode:function(){return 4},getLength:function(r){return e.length},write:function(r){for(var t=0;t<e.length;t+=1)r.put(e[t],8)}}},c=function(r){var e=r,n=0,o=0,i=0,r={read:function(){for(;i<8;){if(n>=e.length){if(0==i)return-1;throw new Error("unexpected end of file./"+i)}var r=e.charAt(n);if(n+=1,"="==r)return i=0,-1;r.match(/^\s$/)||(o=o<<6|a(r.charCodeAt(0)),i+=6)}var t=o>>>i-8&255;return i-=8,t}},a=function(r){if(65<=r&&r<=90)return r-65;if(97<=r&&r<=122)return r-97+26;if(48<=r&&r<=57)return r-48+52;if(43==r)return 62;if(47==r)return 63;throw new Error("c:"+r)};return r},T=function(r,t,e,n){for(var o=k(r,t),i=0;i<t;i+=1)for(var a=0;a<r;a+=1)o.setPixel(a,i,e(a,i));var u=b();o.write(u);for(var f,c,l,g,s,d,h=(l=c=f=0,g="",d=function(r){if(!(r<0)){if(r<26)return 65+r;if(r<52)return r-26+97;if(r<62)return r-52+48;if(62==r)return 43;if(63==r)return 47}throw new Error("n:"+r)},(s={}).writeByte=function(r){for(f=f<<8|255&r,c+=8,l+=1;6<=c;)p(f>>>c-6),c-=6},s.flush=function(){if(0<c&&(p(f<<6-c),c=f=0),l%3!=0)for(var r=3-l%3,t=0;t<r;t+=1)g+="="},s.toString=function(){return g},s),v=u.toByteArray(),w=0;w<v.length;w+=1)h.writeByte(v[w]);function p(r){g+=String.fromCharCode(d(63&r))}h.flush();u="";return u+="<img",u+=' src="',u+="data:image/gif;base64,",u+=h,u+='"',u+=' width="',u+=r,u+='"',u+=' height="',u+=t,u+='"',n&&(u+=' alt="',u+=n,u+='"'),u+"/>"};return t}(),void 0===(r="function"==typeof(r=function(){return t})?r.apply(o,[]):r)||(n.exports=r),t.stringToBytes=function(r){for(var t=[],e=0;e<r.length;e++){var n=r.charCodeAt(e);n<128?t.push(n):n<2048?t.push(192|n>>6,128|63&n):n<55296||57344<=n?t.push(224|n>>12,128|n>>6&63,128|63&n):(e++,n=65536+((1023&n)<<10|1023&r.charCodeAt(e)),t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n))}return t},t))}.call(this,r(5))},316:function(r,t,e){!function(t){e(257),t(function(){t(document).on("click","[data-page-qrcode]",function(){window.api.dialog.dialogContent('<div style="width:240px;height:240px;padding:20px;box-sizing:border-box;" data-qrcode-pop></div>',{openCallback:function(){t("[data-qrcode-pop]").qrcode({size:200,text:window.location.href,background:"#FFF"})}})}),t(document).on("click","[data-qrcode-content]",function(){var r=t(this).attr("data-qrcode-content");window.api.dialog.dialogContent('<div style="width:240px;height:240px;padding:20px;box-sizing:border-box;" data-qrcode-pop></div>',{openCallback:function(){t("[data-qrcode-pop]").qrcode({size:200,text:r,background:"#FFF"})}})})})}.call(this,e(5))},5:function(r,t){r.exports=window.$}});