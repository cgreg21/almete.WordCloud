!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):(t.almete=t.almete||{},t.almete.WordCloud=i())}(this,function(){"use strict";function D(t,i,n){return Math.ceil(t*Math.abs(Math.sin(n))+i*Math.abs(Math.cos(n)))}function L(t,i,n){return Math.ceil(t*Math.abs(Math.cos(n))+i*Math.abs(Math.sin(n)))}function z(t,i,n,r,o){return[t,i,n,r+"px",o].join(" ")}function H(t,i){return Math.ceil(t/i)*i}function O(t,i,n){var r=n().getContext("2d");return r.font=i,r.measureText(t).width}var S=function(t,i,n,r,o,u,h){this.t=t,this.i=i,this.n=n,this.r=r,this.o=o,this.u=u,this.h=h,this.a=1,this.e=0,this.f=0,this.s=0},t={c:{configurable:!0},v:{configurable:!0},d:{configurable:!0},g:{configurable:!0},l:{configurable:!0},b:{configurable:!0},M:{configurable:!0},m:{configurable:!0},p:{configurable:!0},x:{configurable:!0},w:{configurable:!0},W:{configurable:!0},y:{configurable:!0},S:{configurable:!0},T:{configurable:!0},B:{configurable:!0},j:{configurable:!0},D:{configurable:!0},L:{configurable:!0},z:{configurable:!0},H:{configurable:!0}};t.c.get=function(){return 360*this.i},t.v.get=function(){return this.i*Math.PI*2},t.d.get=function(){return this.a},t.d.set=function(t){this.a!==t&&(this.a=t,this.O=void 0)},t.g.get=function(){return z(this.r,this.o,this.u,this.d,this.n)},t.l.get=function(){return void 0===this.R&&(this.R=O(this.t,z(this.r,this.o,this.u,1,this.n),this.h)),this.R},t.b.get=function(){return this.l*this.d},t.M.get=function(){return this.f*this.d},t.M.set=function(t){this.f=t/this.d},t.m.get=function(){return this.s*this.d},t.m.set=function(t){this.s=t/this.d},t.p.get=function(){return L(this.b,this.d,this.v)},t.x.get=function(){return D(this.b,this.d,this.v)},t.w.get=function(){return this.M-this.p/2},t.W.get=function(){return this.m-this.x/2},t.y.get=function(){return this.e},t.y.set=function(t){this.e!==t&&(this.e=t,this.O=void 0)},t.S.get=function(){return void 0===this.O&&(this.O=function(t,i,n,r,o,u,h,a,e){var f=z(i,n,r,o*=4,u),s=O(t,f,e),c=h*o*2,v=e(),d=v.getContext("2d"),g=H(L(c+2*o+s,c+3*o,a),4),l=H(D(c+2*o+s,c+3*o,a),4);v.width=g,v.height=l,d.translate(g/2,l/2),d.rotate(a),d.font=f,d.textAlign="center",d.textBaseline="middle",d.fillText(t,0,0),0<c&&(d.miterLimit=1,d.lineWidth=c,d.strokeText(t,0,0));for(var b=d.getImageData(0,0,g,l).data,M=[],m=1/0,p=0,x=1/0,w=0,W=g/4,y=l/4,S=0;S<W;++S)for(var T=0;T<y;++T)t:for(var B=0;B<4;++B)for(var j=0;j<4;++j)if(b[4*(g*(4*T+j)+(4*S+B))+3]){M.push([S,T]),m=Math.min(S,m),p=Math.max(S+1,p),x=Math.min(T,x),w=Math.max(T+1,w);break t}return 0<M.length?[M.map(function(t){var i=t[0],n=t[1];return[i-m,n-x]}),p-m,w-x,Math.ceil(W/2)-m,Math.ceil(y/2)-x]:[M,0,0,0,0]}(this.t,this.r,this.o,this.u,this.d,this.n,this.y,this.v,this.h)),this.O},t.T.get=function(){return this.S[0]},t.B.get=function(){return this.S[1]},t.j.get=function(){return this.S[2]},t.D.get=function(){return this.S[3]},t.L.get=function(){return this.S[4]},t.z.get=function(){return Math.ceil(this.M)-this.D},t.z.set=function(t){this.M=t+this.D},t.H.get=function(){return Math.ceil(this.m)-this.L},t.H.set=function(t){this.m=t+this.L},Object.defineProperties(S.prototype,t);var T=function(t){this.k=t,this.F()},i={M:{configurable:!0},m:{configurable:!0},P:{configurable:!0},V:{configurable:!0}};i.M.get=function(){return Math.ceil((this.q+this.A)/2)},i.m.get=function(){return Math.ceil((this.C+this.G)/2)},i.P.get=function(){return this.A-this.q},i.V.get=function(){return this.G-this.C},T.prototype.I=function(t,u,h){var a=this;t.forEach(function(t){var i=t[0],n=t[1],r=u+i,o=h+n;a.J[r+"|"+o]=!0,a.q=Math.min(r,a.q),a.A=Math.max(r+1,a.A),a.C=Math.min(o,a.C),a.G=Math.max(o+1,a.G)})},T.prototype.K=function(t,u,h){var a=this;return t.every(function(t){var i=t[0],n=t[1],r=u+i,o=h+n;return!a.J[r+"|"+o]})},T.prototype.N=function(r,t,i){var o=this;return function(t,i,n){var r,o,u=t[0],h=t[1],a=i[0],e=i[1];h<u?(r=1,o=h/u):r=u<h?(o=1,u/h):o=1;var f=[a,e];if(n(f))return f;for(var s=a,c=e,v=a,d=e,g=s,l=c;;){a-=r,e-=o,s+=r,c+=o;var b=Math.floor(a),M=Math.floor(e),m=Math.ceil(s),p=Math.ceil(c);if(g<m)for(var x=M;x<p;++x){var w=[m,x];if(n(w))return w}if(l<p)for(var W=m;b<W;--W){var y=[W,p];if(n(y))return y}if(b<v)for(var S=p;M<S;--S){var T=[b,S];if(n(T))return T}if(M<d)for(var B=b;B<m;++B){var j=[B,M];if(n(j))return j}v=b,d=M,g=m,l=p}}(this.k,[t+this.M,i+this.m],function(t){var i=t[0],n=t[1];return o.K(r,i,n)})},T.prototype.F=function(){this.J={},this.q=0,this.A=0,this.C=0,this.G=0},Object.defineProperties(T.prototype,i);return function(a,i,n,t){void 0===t&&(t={});var s=t.text;void 0===s&&(s="");var c=t.weight;void 0===c&&(c=1);var v=t.rotation;void 0===v&&(v=0);var d=t.rotationUnit;void 0===d&&(d="turn");var g=t.fontFamily;void 0===g&&(g="serif");var l=t.fontStyle;void 0===l&&(l="normal");var b=t.fontVariant;void 0===b&&(b="normal");var M=t.fontWeight;void 0===M&&(M="normal");var e=t.spacing;void 0===e&&(e=0);var r=t.fontSizeRatio;void 0===r&&(r=0);var o,u,m=t.createCanvas;if(void 0===m&&(m=function(){return document.createElement("canvas")}),1<(r=Math.abs(r))&&(r=1/r),0<i&&0<n&&0<(a=a.map(function(t){var i=t.fontFamily;void 0===i&&(i=g);var n=t.fontStyle;void 0===n&&(n=l);var r=t.fontVariant;void 0===r&&(r=b);var o=t.fontWeight;void 0===o&&(o=M);var u=t.rotation;void 0===u&&(u=v);var h=t.rotationUnit;void 0===h&&(h=d);var a=t.text;void 0===a&&(a=s);var e=t.weight;void 0===e&&(e=c);var f=new S(a,function(){switch(h){case"deg":return u/360;case"rad":return u/2/Math.PI}return u}(),i,n,r,o,m);return f.Q=e,f}).filter(function(t){return 0<t.b}).sort(function(t,i){return i.Q-t.Q})).length){var h=a[0],f=(o=a)[(u=o,u.length-1)],p=h.Q,x=f.Q;if(x<p){var w=0<r?1/r:0<x?p/x:p<0?x/p:1+p-x;a.forEach(function(t){var i,n,r;t.d=(i=t.Q,(r=1)+(i-(n=x))*(w-r)/(p-n))})}a.reduceRight(function(t,i){return i.d<2*t?i.d/=t:(t=i.d,i.d=1),i.U=t},1),a.forEach(function(t){t.d*=4});var W=new T([i,n]);if(a.reduce(function(t,i,n){if(i.U<t.U){W.F();var r=t.U/i.U;a.slice(0,n).forEach(function(t){t.d*=r,W.I(t.T,t.z,t.H)})}else W.I(t.T,t.z,t.H);i.y=e;var o=W.N(i.T,i.z,i.H),u=o[0],h=o[1];return i.z=u,i.H=h,i.y=0,i}),W.I(f.T,f.z,f.H),0<W.P&&0<W.V){var y=Math.min(i/W.P,n/W.V);a.forEach(function(t){t.M-=W.M,t.m-=W.m,t.d*=y,t.M+=i/2,t.m+=n/2})}return a.map(function(t){return{font:t.g,fontFamily:t.n,fontSize:t.d,fontStyle:t.r,fontVariant:t.o,fontWeight:t.u,height:t.x,left:t.w,rotationDeg:t.c,rotationRad:t.v,rotationTurn:t.i,text:t.t,textWidth:t.b,top:t.W,weight:t.Q,width:t.p}})}return[]}});
