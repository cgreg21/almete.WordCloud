!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t.almete=t.almete||{},t.almete.WordCloud=r())}(this,function(){"use strict";function t(t,r){if(t.length>0)return r&&(t=t.map(r)),t.reduce(function(t,r){return Math.min(t,r)})}function r(t,r){if(t.length>0)return r&&(t=t.map(r)),t.reduce(function(t,r){return Math.max(t,r)})}function e(t,r,e){var n=e().getContext("2d");return n.font=r,n.measureText(t).width}function n(t,r,e){var n,i,o=t[0],a=t[1],f=r[0],h=r[1];o>a?(n=1,i=a/o):a>o?(i=1,n=o/a):n=i=1;var u=[f,h];if(e(u))return u;for(var v=f,c=h,d=f,s=h,l=v,g=c;;){f-=n,h-=i,v+=n,c+=i;var m=Math.floor(f),x=Math.floor(h),M=Math.ceil(v),p=Math.ceil(c);if(M>l)for(var W=x;W<p;++W){var y=[M,W];if(e(y))return y}if(p>g)for(var w=M;w>m;--w){var S=[w,p];if(e(S))return S}if(m<d)for(var T=p;T>x;--T){var z=[m,T];if(e(z))return z}if(x<s)for(var R=m;R<M;++R){var b=[R,x];if(e(b))return b}d=m,s=x,l=M,g=p}}var i=4;return function(o,a,f,h){var u;void 0===h&&(h={});var v=h.text;void 0===v&&(v="");var c=h.weight;void 0===c&&(c=1);var d=h.rotation;void 0===d&&(d=0);var s=h.rotationUnit;void 0===s&&(s="turn");var l=h.fontFamily;void 0===l&&(l="serif");var g=h.fontStyle;void 0===g&&(g="normal");var m=h.fontVariant;void 0===m&&(m="normal");var x=h.fontWeight;void 0===x&&(x="normal");var M=h.spacing;void 0===M&&(M=0);var p=h.fontSizeRatio;void 0===p&&(p=0);var W=h.createCanvas;if(void 0===W&&(W=function(){return document.createElement("canvas")}),o.length>0&&a>0&&f>0){o=o.map(function(t){var r=t.text;void 0===r&&(r=v);var e=t.weight;void 0===e&&(e=c);var n=t.rotation;void 0===n&&(n=d);var i=t.rotationUnit;void 0===i&&(i=s);var o=t.fontFamily;void 0===o&&(o=l);var a=t.fontStyle;void 0===a&&(a=g);var f=t.fontVariant;void 0===f&&(f=m);var h=t.fontWeight;return void 0===h&&(h=x),{text:r,weight:e,rotationTurn:function(){switch(i){case"deg":return n/360;case"rad":return function(t){return t/2/Math.PI}(n)}return n}(),get rotationDeg(){return 360*this.rotationTurn},get rotationRad(){return this.rotationTurn*Math.PI*2},fontFamily:o,fontStyle:a,fontVariant:f,fontWeight:h,get font(){return[this.fontStyle,this.fontVariant,this.fontWeight,this.fontSize+"px",this.fontFamily].join(" ")},get rectWidth(){return Math.ceil(this.textWidth*Math.abs(Math.cos(this.rotationRad))+this.fontSize*Math.abs(Math.sin(this.rotationRad)))},get rectHeight(){return Math.ceil(this.textWidth*Math.abs(Math.sin(this.rotationRad))+this.fontSize*Math.abs(Math.cos(this.rotationRad)))},get rectLeft(){return this.left-this.rectWidth/2},get rectTop(){return this.top-this.rectHeight/2}}}),(p=Math.abs(p))>1&&(p=1/p),o.sort(function(t,r){return r.weight-t.weight});var y=o[0].weight,w=o[o.length-1].weight;w<y?(p=p>0?1/p:w>0?y/w:y<0?w/y:1+y-w,o.forEach(function(t){var r,e,n;t.fontSize=i*(r=t.weight,(n=1)+(r-(e=w))*(p-n)/(y-e))})):o.forEach(function(t){t.fontSize=i});var S=o[0];if(S.textWidth=e(S.text,S.font,W),S.left=0,S.top=0,o.length>1){var T,z,R,b,E,C=function(){z=2+2*S.rectWidth,R=2+2*S.rectHeight,b=-Math.floor(z/2),E=-Math.floor(R/2);var t=function(t,r,e,n,i,o,a){var f=a(),h=f.getContext("2d");return f.width=i,f.height=o,h.translate(i/2,o/2),h.rotate(n),h.font=r,h.textAlign="center",h.textBaseline="middle",h.fillText(t,0,0),e>0&&(h.miterLimit=1,h.lineWidth=e,h.strokeText(t,0,0)),h.getImageData(0,0,i,o).data}(S.text,S.font,2*i*M,S.rotationRad,z,R,W);T=[];for(var r=0;r<z;++r)for(var e=0;e<R;++e)t[4*(z*e+r)+3]&&T.push([r,e])};C();for(var F={},H=1,L=o.length;H<L;++H)T.forEach(function(t){var r=t[0],e=t[1];F[b+r+"|"+(E+e)]=!0}),(S=o[H]).textWidth=e(S.text,S.font,W),C(),u=n([a,f],[b,E],function(t){var r=t[0],e=t[1];return T.every(function(t){var n=t[0],i=t[1];return!F[r+n+"|"+(e+i)]})}),b=u[0],E=u[1],S.left=b+z/2,S.top=E+R/2}var V=t(o,function(t){return t.rectLeft}),I=r(o,function(t){return t.rectLeft+t.rectWidth}),j=I-V,D=I+V,P=t(o,function(t){return t.rectTop}),U=r(o,function(t){return t.rectTop+t.rectHeight}),k=U-P,A=U+P,B=Math.min(a/j,f/k);return o.forEach(function(t){t.left-=D/2,t.top-=A/2,t.fontSize*=B,t.textWidth*=B,t.left*=B,t.top*=B,t.left+=a/2,t.top+=f/2}),o}return[]}});
