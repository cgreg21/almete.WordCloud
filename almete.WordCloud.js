!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t.almete=t.almete||{},t.almete.WordCloud=r())}(this,function(){"use strict";function t(t,r){switch(r){case"deg":return t/360;case"rad":return function(t){return t/2/Math.PI}(t)}return t}function r(r,n,e,i,o,a,f,u,c){return r.map(function(r){var h=r.text;void 0===h&&(h=n);var v=r.weight;void 0===v&&(v=e);var d=r.rotation;void 0===d&&(d=i);var s=r.rotationUnit;void 0===s&&(s=o);var l=r.fontFamily;void 0===l&&(l=a);var g=r.fontStyle;void 0===g&&(g=f);var m=r.fontVariant;void 0===m&&(m=u);var p=r.fontWeight;return void 0===p&&(p=c),{text:h,weight:v,rotationTurn:t(d,s),get rotationDeg(){return 360*this.rotationTurn},get rotationRad(){return 2*this.rotationTurn*Math.PI},fontFamily:l,fontStyle:g,fontVariant:m,fontWeight:p,get font(){return t=this.fontStyle,r=this.fontVariant,n=this.fontWeight,e=this.fontSize,i=this.fontFamily,[t,r,n,e+"px",i].join(" ");var t,r,n,e,i},get rectLeft(){return this.left-this.rectWidth/2},get rectTop(){return this.top-this.rectHeight/2}}})}function n(t,r){if(t.length>0)return r&&(t=t.map(r)),t.reduce(function(t,r){return Math.min(t,r)})}function e(t,r){if(t.length>0)return r&&(t=t.map(r)),t.reduce(function(t,r){return Math.max(t,r)})}function i(t,r,n,e,i){return e+(t-r)*(i-e)/(n-r)}function o(t,r,n){return[Math.ceil(t*Math.abs(Math.cos(n))+r*Math.abs(Math.sin(n))),Math.ceil(t*Math.abs(Math.sin(n))+r*Math.abs(Math.cos(n)))]}function a(t,r,n){var e=t.text,i=t.font,a=t.fontSize,f=t.rotationRad,u=n(),c=u.getContext("2d");c.font=i;var h=c.measureText(e).width,v=a,d=o(h,v,f),s=d[0],l=d[1],g=Math.max(c.measureText("m").width,a),m=o(h+2*g,v+2*g,f),p=m[0],M=m[1];u.width=p,u.height=M,c.translate(p/2,M/2),c.rotate(f),c.font=i,c.textAlign="center",c.textBaseline="middle",c.fillText(e,0,0),r>0&&(c.miterLimit=1,c.lineWidth=2*r,c.strokeText(e,0,0));var x=c.getImageData(0,0,p,M).data;return[h,s,l,x=function(t,r,n){for(var e=new Uint8Array(r*n),i=0,o=t.length;i<o;++i)e[i]=t[4*i+3]?1:0;return e}(x,p,M),p,M]}function f(t){var r;return function(n,e,i){var o,a=function(t,r,n){for(var e=[],i=0;i<r;++i)for(var o=0;o<n;++o)t[r*o+i]&&e.push([i,o]);return e}(n,e,i),f=-Math.floor(e/2),u=-Math.floor(i/2);r?(o=function(t,r,n){var e,i,o=t[0],a=t[1],f=r[0],u=r[1];o>a?(e=1,i=a/o):a>o?(i=1,e=o/a):e=i=1;var c=[f,u];if(n(c))return c;for(var h=f,v=u,d=f,s=u,l=h,g=v;;){f-=e,u-=i,h+=e,v+=i;var m=Math.floor(f),p=Math.floor(u),M=Math.ceil(h),x=Math.ceil(v);if(M>l)for(var w=p;w<x;++w){var y=[M,w];if(n(y))return y}if(x>g)for(var W=M;W>m;--W){var T=[W,x];if(n(T))return T}if(m<d)for(var b=x;b>p;--b){var S=[m,b];if(n(S))return S}if(p<s)for(var z=m;z<M;++z){var H=[z,p];if(n(H))return H}d=m,s=p,l=M,g=x}}(t,[f,u],function(t){var n=t[0],e=t[1];return a.every(function(t){var i=t[0],o=t[1];return!r[n+i+"|"+(e+o)]})}),f=o[0],u=o[1]):r={};return a.forEach(function(t){var n=t[0],e=t[1];r[f+n+"|"+(u+e)]=!0}),[f,u]}}return function(t,o,u,c){void 0===c&&(c={});var h=c.text;void 0===h&&(h="");var v=c.weight;void 0===v&&(v=1);var d=c.rotation;void 0===d&&(d=0);var s=c.rotationUnit;void 0===s&&(s="turn");var l=c.fontFamily;void 0===l&&(l="serif");var g=c.fontStyle;void 0===g&&(g="normal");var m=c.fontVariant;void 0===m&&(m="normal");var p=c.fontWeight;void 0===p&&(p="normal");var M=c.spacing;void 0===M&&(M=0);var x=c.fontSizeRatio;void 0===x&&(x=0);var w,y=c.createCanvas;if(void 0===y&&(y=function(){return document.createElement("canvas")}),t.length>0&&o>0&&u>0){t=r(t,h,v,d,s,l,g,m,p),w=function(t){return-t.weight};var W=function(t,r){if(t.length>0){var o=n(t,function(t){return t.weight}),a=e(t,function(t){return t.weight});if(o<a&&r>0&&r<1/0)return r<1&&(r=1/r),t.map(function(t){return i(t.weight,o,a,1,r)});if(o>0)return t.map(function(t){return t.weight/o});var f=1+Math.abs(o)+Math.abs(a);return t.map(function(t){return i(t.weight,o,a,1,f)})}return[]}(t=t.map(function(t){return[w(t),t]}).sort(function(t,r){var n=t[0],e=r[0];return n>e?1:n<e?-1:0}).map(function(t){return t[1]}),x),T=f([o,u]);return t.forEach(function(t,r){var n=W[r];Object.assign(t,{fontSize:n});var e=a(t,M,y),i=e[0],o=e[1],f=e[2],u=e[3],c=e[4],h=e[5],v=T(u,c,h),d=v[0]+c/2,s=v[1]+h/2;Object.assign(t,{textWidth:i,rectWidth:o,rectHeight:f,left:d,top:s})}),function(t,r,i){var o=n(t,function(t){return t.rectLeft}),a=e(t,function(t){return t.rectLeft+t.rectWidth}),f=a-o,u=a+o,c=n(t,function(t){return t.rectTop}),h=e(t,function(t){return t.rectTop+t.rectHeight}),v=h-c,d=h+c,s=Math.min(r/f,i/v);t.forEach(function(t){t.left-=u/2,t.top-=d/2,t.fontSize*=s,t.textWidth*=s,t.textHeight*=s,t.rectWidth*=s,t.rectHeight*=s,t.left*=s,t.top*=s,t.left+=r/2,t.top+=i/2})}(t,o,u),t}return[]}});
