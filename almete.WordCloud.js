!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):((t=t||self).almete=t.almete||{},t.almete.WordCloud=i())}(this,function(){"use strict";function W(t,i,n){return Math.ceil(t*Math.abs(Math.sin(n))+i*Math.abs(Math.cos(n)))}function j(t,i,n){return Math.ceil(t*Math.abs(Math.cos(n))+i*Math.abs(Math.sin(n)))}function L(t,i,n,r,h){return[t,i,n,r+"px",h].join(" ")}var O=function(t){this.t=t,this.i()},t={n:{configurable:!0},r:{configurable:!0},h:{configurable:!0},o:{configurable:!0}};t.n.get=function(){return Math.floor((this.a+this.e)/2)},t.r.get=function(){return Math.floor((this.u+this.f)/2)},t.h.get=function(){return this.e-this.a+1},t.o.get=function(){return this.f-this.u+1},O.prototype.s=function(t,i,n){for(var r=0;r<t.width;r++)for(var h=0;h<t.height;h++)if(t.data[4*(t.width*h+r)+3]){var o=i+r,a=n+h;this.c[o+"|"+a]=!0,this.a=Math.min(o,this.a),this.u=Math.min(a,this.u),this.e=Math.max(o,this.e),this.f=Math.max(a,this.f)}},O.prototype.v=function(t,o,a){var e=this;return t.every(function(t){var i=t[0],n=t[1],r=o+i,h=a+n;return!e.c[r+"|"+h]})},O.prototype.d=function(t){for(var r=this,i=[],n=0;n<t.width;n++)for(var h=0;h<t.height;h++)t.data[4*(t.width*h+n)+3]&&i.push([n,h]);if(i.length){var o=i.reduce(function(t,i){var n=t[0],r=t[1],h=i[0],o=i[1];return[Math.min(h,n),Math.min(o,r)]}),a=o[0],e=o[1],u=i.reduce(function(t,i){var n=t[0],r=t[1],h=i[0],o=i[1];return[Math.max(h,n),Math.max(o,r)]}),f=u[0],s=u[1],c=i.map(function(t){var i=t[0],n=t[1];return[i-a,n-e]}),v=f-a+1,d=s-e+1,M=function(t,i,n){var r,h,o=t[0],a=t[1],e=i[0],u=i[1];a<o?(r=1,h=a/o):r=o<a?(h=1,o/a):h=1;var f=[e,u];if(n(f))return f;for(var s=e,c=u,v=e,d=u,M=s,l=c;;){e-=r,u-=h,s+=r,c+=h;var g=Math.floor(e),_=Math.floor(u),b=Math.ceil(s),m=Math.ceil(c);if(M<b)for(var p=_;p<m;++p){var w=[b,p];if(n(w))return w}if(l<m)for(var x=b;g<x;--x){var y=[x,m];if(n(y))return y}if(g<v)for(var T=m;_<T;--T){var W=[g,T];if(n(W))return W}if(_<d)for(var j=g;j<b;++j){var L=[j,_];if(n(L))return L}v=g,d=_,M=b,l=m}}(this.t,[this.n-Math.floor(v/2),this.r-Math.floor(d/2)],function(t){var i=t[0],n=t[1];return r.v(c,i,n)}),l=M[0],g=M[1];return[l-a,g-e]}return[0,0]},O.prototype.i=function(){this.c={},this.a=1,this.u=1,this.e=0,this.f=0},Object.defineProperties(O.prototype,t);return function(r,i,n,t){void 0===t&&(t={});var s=t.createCanvas;void 0===s&&(s=function(){return document.createElement("canvas")});var c=t.fontFamily;void 0===c&&(c="serif");var h=t.fontSizeRatio;void 0===h&&(h=0);var v=t.fontStyle;void 0===v&&(v="normal");var d=t.fontVariant;void 0===d&&(d="normal");var M=t.fontWeight;void 0===M&&(M="normal");var o=t.gap;void 0===o&&(o=0);var l=t.rotation;void 0===l&&(l=0);var g=t.rotationUnit;void 0===g&&(g="turn");var _=t.text;void 0===_&&(_="");var a,e,b=t.weight;if(void 0===b&&(b=1),i&&n){var m=function(){function t(){this.M=1,this.l=0,this.g=0}var i={_:{configurable:!0},b:{configurable:!0},m:{configurable:!0},p:{configurable:!0},n:{configurable:!0},r:{configurable:!0},h:{configurable:!0},o:{configurable:!0}};return i._.get=function(){return L(this.w,this.x,this.y,this.M,this.T)},i.b.get=function(){return this.W*this.M},i.m.get=function(){return 180*this.j/Math.PI},i.p.get=function(){return this.j/2/Math.PI},i.n.get=function(){return this.l+this.h/2},i.r.get=function(){return this.g+this.o/2},i.h.get=function(){return j(this.b,this.M,this.j)},i.o.get=function(){return W(this.b,this.M,this.j)},t.prototype.L=function(t){var i=t*this.M,n=s();n.width=Math.round(j(i+2*this.M+this.b,i+3*this.M,this.j)),n.height=Math.round(W(i+2*this.M+this.b,i+3*this.M,this.j));var r=n.getContext("2d");return r.translate(n.width/2,n.height/2),r.rotate(this.j),r.font=this._,r.textAlign="center",r.textBaseline="middle",r.fillText(this.O,0,0),0<i&&(r.miterLimit=1,r.lineWidth=i,r.strokeText(this.O,0,0)),r.getImageData(0,0,n.width,n.height)},t.prototype.d=function(t){var i=this.L(2*o),n=t.d(i),r=n[0],h=n[1];this.l=r+(i.width-this.h)/2,this.g=h+(i.height-this.o)/2},t.prototype.s=function(t){var i=this.L(0),n=Math.round(this.l-(i.width-this.h)/2),r=Math.round(this.g-(i.height-this.o)/2);t.s(i,n,r)},t.prototype.S=function(t){this.M*=t,this.l*=t,this.g*=t},Object.defineProperties(t.prototype,i),t}();if((r=r.map(function(t){var i=t.fontFamily;void 0===i&&(i=c);var n=t.fontStyle;void 0===n&&(n=v);var r=t.fontVariant;void 0===r&&(r=d);var h=t.fontWeight;void 0===h&&(h=M);var o=t.rotation;void 0===o&&(o=l);var a=t.rotationUnit;void 0===a&&(a=g);var e=t.text;void 0===e&&(e=_);var u,f=t.weight;return void 0===f&&(f=b),Object.assign(new m,{T:i,w:n,x:r,y:h,W:(u=s().getContext("2d"),u.font=L(n,r,h,1,i),u.measureText(e).width),j:function(){switch(a){case"deg":return o*Math.PI/180;case"turn":return o*Math.PI*2}return o}(),O:e,D:f})}).filter(function(t){return t.b})).length){var u=r.slice().sort(function(t,i){return i.D-t.D}),f=u[0],p=(a=u)[(e=a,e.length-1)],w=f.D,x=p.D;x<w&&(h=1<(h=Math.abs(h))?h:0<h?1/h:0<x?w/x:w<0?x/w:1+w-x,r.forEach(function(t){var i,n,r;t.M=4*(i=t.D,(r=1/h)+(i-(n=x))*(1-r)/(w-n))}));var y=new O([i,n]);if(u.reduce(function(t,i,n){if(i.M<4){for(;r.forEach(function(t){t.S(2)}),i.M<4;);u.slice(0,n).forEach(function(t){t.s(y)})}else t.s(y);return i.d(y),i}),p.s(y),y.h&&y.o){var T=Math.min(i/y.h,n/y.o);r.forEach(function(t){t.l-=y.n,t.g-=y.r,t.S(T),t.l+=i/2,t.g+=n/2})}return r.map(function(t){return{centerLeft:t.n,centerTop:t.r,font:t._,fontFamily:t.T,fontSize:t.M,fontStyle:t.w,fontVariant:t.x,fontWeight:t.y,height:t.o,left:t.l,rotationDeg:t.m,rotationRad:t.j,rotationTurn:t.p,text:t.O,textWidth:t.b,top:t.g,weight:t.D,width:t.h}})}}return[]}});
