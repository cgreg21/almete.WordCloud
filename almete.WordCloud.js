!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):(t.almete=t.almete||{},t.almete.WordCloud=i())}(this,function(){"use strict";function T(t,i,n){return Math.ceil(t*Math.abs(Math.sin(n))+i*Math.abs(Math.cos(n)))}function O(t,i,n){return Math.ceil(t*Math.abs(Math.cos(n))+i*Math.abs(Math.sin(n)))}function S(t,i,n,r,a){return[t,i,n,r+"px",a].join(" ")}var D=function(t){this.t=t,this.i()},t={n:{configurable:!0},r:{configurable:!0},a:{configurable:!0},h:{configurable:!0}};t.n.get=function(){return Math.floor((this.o+this.e)/2)},t.r.get=function(){return Math.floor((this.u+this.f)/2)},t.a.get=function(){return this.e-this.o+1},t.h.get=function(){return this.f-this.u+1},D.prototype.s=function(t,i,n){for(var r=this,a=0;a<t.width;a++)for(var h=0;h<t.height;h++)if(t.data[4*(t.width*h+a)+3]){var o=i+a,e=n+h;r.v[o+"|"+e]=!0,r.o=Math.min(o,r.o),r.u=Math.min(e,r.u),r.e=Math.max(o,r.e),r.f=Math.max(e,r.f)}},D.prototype.c=function(t,h,o){var e=this;return t.every(function(t){var i=t[0],n=t[1],r=h+i,a=o+n;return!e.v[r+"|"+a]})},D.prototype.d=function(t){for(var r=this,a=[],i=0;i<t.width;i++)for(var n=0;n<t.height;n++)t.data[4*(t.width*n+i)+3]&&a.push([i,n]);if(0<a.length){var h=a.reduce(function(t,i){var n=t[0],r=t[1],a=i[0],h=i[1];return[Math.min(a,n),Math.min(h,r)]}),o=h[0],e=h[1],u=a.reduce(function(t,i){var n=t[0],r=t[1],a=i[0],h=i[1];return[Math.max(a,n),Math.max(h,r)]}),f=u[0],s=u[1];a=a.map(function(t){var i=t[0],n=t[1];return[i-o,n-e]});var v=function(t,i,n){var r,a,h=t[0],o=t[1],e=i[0],u=i[1];o<h?(r=1,a=o/h):r=h<o?(a=1,h/o):a=1;var f=[e,u];if(n(f))return f;for(var s=e,v=u,c=e,d=u,M=s,l=v;;){e-=r,u-=a,s+=r,v+=a;var g=Math.floor(e),b=Math.floor(u),m=Math.ceil(s),w=Math.ceil(v);if(M<m)for(var p=b;p<w;++p){var x=[m,p];if(n(x))return x}if(l<w)for(var y=m;g<y;--y){var W=[y,w];if(n(W))return W}if(g<c)for(var j=w;b<j;--j){var T=[g,j];if(n(T))return T}if(b<d)for(var O=g;O<m;++O){var S=[O,b];if(n(S))return S}c=g,d=b,M=m,l=w}}(this.t,[Math.floor((this.o+this.e+o-f)/2),Math.floor((this.u+this.f+e-s)/2)],function(t){var i=t[0],n=t[1];return r.c(a,i,n)}),c=v[0],d=v[1];return[c-o,d-e]}return[0,0]},D.prototype.i=function(){this.v={},this.o=1,this.e=0,this.u=1,this.f=0},Object.defineProperties(D.prototype,t);return function(r,i,n,t){void 0===t&&(t={});var s=t.text;void 0===s&&(s="");var v=t.weight;void 0===v&&(v=1);var c=t.fontFamily;void 0===c&&(c="serif");var d=t.fontStyle;void 0===d&&(d="normal");var M=t.fontVariant;void 0===M&&(M="normal");var l=t.fontWeight;void 0===l&&(l="normal");var g=t.rotation;void 0===g&&(g=0);var b=t.rotationUnit;void 0===b&&(b="turn");var h=t.spacing;void 0===h&&(h=0);var a=t.fontSizeRatio;void 0===a&&(a=0);var o,e,m=t.createCanvas;if(void 0===m&&(m=function(){return document.createElement("canvas")}),0<i&&0<n){var w=function(){function t(){this.M=1,this.l=0,this.g=0}var i={b:{configurable:!0},m:{configurable:!0},w:{configurable:!0},p:{configurable:!0},a:{configurable:!0},h:{configurable:!0}};return i.b.get=function(){return S(this.x,this.y,this.W,this.M,this.j)},i.m.get=function(){return this.T*this.M},i.w.get=function(){return 180*this.O/Math.PI},i.p.get=function(){return this.O/2/Math.PI},i.a.get=function(){return O(this.m,this.M,this.O)},i.h.get=function(){return T(this.m,this.M,this.O)},t.prototype.S=function(t){var i=m();i.width=Math.round(O(t+2*this.M+this.m,t+3*this.M,this.O)),i.height=Math.round(T(t+2*this.M+this.m,t+3*this.M,this.O));var n=i.getContext("2d");return n.translate(i.width/2,i.height/2),n.rotate(this.O),n.font=this.b,n.textAlign="center",n.textBaseline="middle",n.fillText(this.D,0,0),0<t&&(n.miterLimit=1,n.lineWidth=t*this.M,n.strokeText(this.D,0,0)),n.getImageData(0,0,i.width,i.height)},t.prototype.d=function(t){var i=this.S(2*h),n=t.d(i),r=n[0],a=n[1];this.l=r+(i.width-this.a)/2,this.g=a+(i.height-this.h)/2},t.prototype.s=function(t){var i=this.S(0),n=Math.round(this.l-(i.width-this.a)/2),r=Math.round(this.g-(i.height-this.h)/2);t.s(i,n,r)},t.prototype.F=function(t){this.M*=t,this.l*=t,this.g*=t},Object.defineProperties(t.prototype,i),t}();if(0<(r=r.map(function(t){var i=t.text;void 0===i&&(i=s);var n=t.weight;void 0===n&&(n=v);var r=t.fontFamily;void 0===r&&(r=c);var a=t.fontStyle;void 0===a&&(a=d);var h=t.fontVariant;void 0===h&&(h=M);var o=t.fontWeight;void 0===o&&(o=l);var e=t.rotation;void 0===e&&(e=g);var u,f=t.rotationUnit;return void 0===f&&(f=b),Object.assign(new w,{D:i,R:n,j:r,x:a,y:h,W:o,T:(u=m().getContext("2d"),u.font=S(a,h,o,1,r),u.measureText(i).width),O:function(){switch(f){case"deg":return e*Math.PI/180;case"turn":return e*Math.PI*2}return e}()})}).filter(function(t){return 0<t.m})).length){var u=r.slice().sort(function(t,i){return i.R-t.R}),f=u[0],p=(o=u)[(e=o,e.length-1)],x=f.R,y=p.R;y<x&&(a=1<(a=Math.abs(a))?a:0<a?1/a:0<y?x/y:x<0?y/x:1+x-y,r.forEach(function(t){var i,n,r;t.M=4*(i=t.R,(r=1/a)+(i-(n=y))*(1-r)/(x-n))}));var W=new D([i,n]);if(u.reduce(function(t,i,n){if(i.M<4){for(;r.forEach(function(t){t.F(2)}),i.M<4;);u.slice(0,n).forEach(function(t){t.s(W)})}else t.s(W);return i.d(W),i}),p.s(W),0<W.a&&0<W.h){var j=Math.min(i/W.a,n/W.h);r.forEach(function(t){t.l-=W.n,t.g-=W.r,t.F(j),t.l+=i/2,t.g+=n/2})}return r.map(function(t){return{text:t.D,weight:t.R,fontFamily:t.j,fontSize:t.M,fontStyle:t.x,fontVariant:t.y,fontWeight:t.W,font:t.b,textWidth:t.m,rotationDeg:t.w,rotationRad:t.O,rotationTurn:t.p,width:t.a,height:t.h,left:t.l,top:t.g}})}}return[]}});
