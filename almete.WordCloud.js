!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):(t.almete=t.almete||{},t.almete.WordCloud=i())}(this,function(){"use strict";function t(t,i){if(t.length>0)return i&&(t=t.map(i)),t.reduce(function(t,i){return Math.min(t,i)})}function i(t,i){if(t.length>0)return i&&(t=t.map(i)),t.reduce(function(t,i){return Math.max(t,i)})}function e(t,i){return Math.ceil(t/i)*i}function n(t,i,e){return Math.ceil(t*Math.abs(Math.cos(e))+i*Math.abs(Math.sin(e)))}function r(t,i,e){return Math.ceil(t*Math.abs(Math.sin(e))+i*Math.abs(Math.cos(e)))}function a(t,i,a,o,h,f,s,d,u,g){return t.map(function(t){var v=t.text;void 0===v&&(v=i);var c=t.weight;void 0===c&&(c=a);var l=t.rotation;void 0===l&&(l=o);var m=t.rotationUnit;void 0===m&&(m=h);var p=t.fontFamily;void 0===p&&(p=f);var x=t.fontStyle;void 0===x&&(x=s);var W=t.fontVariant;void 0===W&&(W=d);var S=t.fontWeight;return void 0===S&&(S=u),{text:v,weight:c,rotationTurn:function(){switch(m){case"deg":return l/360;case"rad":return function(t){return t/2/Math.PI}(l)}return l}(),get rotationDeg(){return 360*this.rotationTurn},get rotationRad(){return this.rotationTurn*Math.PI*2},fontStyle:x,fontVariant:W,fontWeight:S,get fontSize(){return this._fontSize},set fontSize(t){this._fontSize!==t&&(this._fontSize=t,this._textWidth=void 0,this._imagePixels=void 0)},fontFamily:p,get font(){return[this.fontStyle,this.fontVariant,this.fontWeight,this.fontSize+"px",this.fontFamily].join(" ")},get textWidth(){return void 0===this._textWidth&&(this._textWidth=function(t,i,e){var n=e().getContext("2d");return n.font=i,n.measureText(t).width}(this.text,this.font,g)),this._textWidth},left:0,top:0,get rectWidth(){return n(this.textWidth,this.fontSize,this.rotationRad)},get rectHeight(){return r(this.textWidth,this.fontSize,this.rotationRad)},get rectLeft(){return this.left-this.rectWidth/2},get rectTop(){return this.top-this.rectHeight/2},get padding(){return this._padding},set padding(t){this._padding!==t&&(this._padding=t,this._imagePixels=void 0)},get paddingInPixels(){return this.fontSize*this.padding},get imageWidth(){return e(n(this.textWidth+2*(this.paddingInPixels+this.fontSize),this.fontSize+2*(this.paddingInPixels+this.fontSize),this.rotationRad),2)},get imageHeight(){return e(r(this.textWidth+2*(this.paddingInPixels+this.fontSize),this.fontSize+2*(this.paddingInPixels+this.fontSize),this.rotationRad),2)},get lineWidth(){return 2*this.paddingInPixels},get imagePixels(){return void 0===this._imagePixels&&(this._imagePixels=function(t,i,e,n,r,a,o){var h=o(),f=h.getContext("2d");h.width=r,h.height=a,f.translate(r/2,a/2),f.rotate(n),f.font=e,f.textAlign="center",f.textBaseline="middle",f.fillText(t,0,0),i>0&&(f.miterLimit=1,f.lineWidth=i,f.strokeText(t,0,0));for(var s=f.getImageData(0,0,r,a).data,d=[],u=0;u<r;++u)for(var g=0;g<a;++g)s[4*(r*g+u)+3]&&d.push([u,g]);return d}(this.text,this.lineWidth,this.font,this.rotationRad,this.imageWidth,this.imageHeight,g)),this._imagePixels},get imageLeft(){return this.left-this.imageWidth/2},set imageLeft(t){this.left=t+this.imageWidth/2},get imageTop(){return this.top-this.imageHeight/2},set imageTop(t){this.top=t+this.imageHeight/2}}})}var o=4;return function(e,n,r,h){void 0===h&&(h={});var f=h.text;void 0===f&&(f="");var s=h.weight;void 0===s&&(s=1);var d=h.rotation;void 0===d&&(d=0);var u=h.rotationUnit;void 0===u&&(u="turn");var g=h.fontFamily;void 0===g&&(g="serif");var v=h.fontStyle;void 0===v&&(v="normal");var c=h.fontVariant;void 0===c&&(c="normal");var l=h.fontWeight;void 0===l&&(l="normal");var m=h.spacing;void 0===m&&(m=0);var p=h.fontSizeRatio;void 0===p&&(p=0);var x=h.createCanvas;if(void 0===x&&(x=function(){return document.createElement("canvas")}),e.length>0&&n>0&&r>0){e=a(e,f,s,d,u,g,v,c,l,x),(p=Math.abs(p))>1&&(p=1/p),e.sort(function(t,i){return i.weight-t.weight});var W=e[0].weight,S=e[e.length-1].weight;if(S<W?(p=p>0?1/p:S>0?W/S:W<0?S/W:1+W-S,e.forEach(function(t){var i,e,n;t.fontSize=o*(i=t.weight,(n=1)+(i-(e=S))*(p-n)/(W-e))})):e.forEach(function(t){t.fontSize=o}),e.length>1){var M={};e.reduce(function(t,i){t.padding=0,t.imagePixels.forEach(function(i){var e=i[0],n=i[1],r=t.imageLeft+e,a=t.imageTop+n;M[r+"|"+a]=!0}),i.padding=m;var e=function(t,i,e){var n,r,a=t[0],o=t[1],h=i[0],f=i[1];a>o?(n=1,r=o/a):o>a?(r=1,n=a/o):n=r=1;var s=[h,f];if(e(s))return s;for(var d=h,u=f,g=h,v=f,c=d,l=u;;){h-=n,f-=r,d+=n,u+=r;var m=Math.floor(h),p=Math.floor(f),x=Math.ceil(d),W=Math.ceil(u);if(x>c)for(var S=p;S<W;++S){var M=[x,S];if(e(M))return M}if(W>l)for(var z=x;z>m;--z){var P=[z,W];if(e(P))return P}if(m<g)for(var _=W;_>p;--_){var T=[m,_];if(e(T))return T}if(p<v)for(var y=m;y<x;++y){var w=[y,p];if(e(w))return w}g=m,v=p,c=x,l=W}}([n,r],[i.imageLeft,i.imageTop],function(t){var e=t[0],n=t[1];return i.imagePixels.every(function(t){var i=t[0],r=t[1];return!M[e+i+"|"+(n+r)]})}),a=e[0],o=e[1];return i.imageLeft=a,i.imageTop=o,i})}var z=t(e,function(t){return t.rectLeft}),P=i(e,function(t){return t.rectLeft+t.rectWidth}),_=P-z,T=P+z,y=t(e,function(t){return t.rectTop}),w=i(e,function(t){return t.rectTop+t.rectHeight}),I=w-y,L=w+y,H=Math.min(n/_,r/I);return e.forEach(function(t){t.left-=T/2,t.top-=L/2,t.fontSize*=H,t.left*=H,t.top*=H,t.left+=n/2,t.top+=r/2}),e}return[]}});
