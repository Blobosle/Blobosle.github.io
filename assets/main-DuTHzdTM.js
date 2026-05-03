import{r as A,j as R,a as Qc,R as aa,c as Jc}from"./devicon.min-DEp3NKOc.js";function yr(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function sl(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Nt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},An={duration:.5,overwrite:!1,delay:0},Ro,Ze,_e,Wt=1e8,de=1/Wt,Qs=Math.PI*2,eu=Qs/4,tu=0,ol=Math.sqrt,ru=Math.cos,nu=Math.sin,We=function(e){return typeof e=="string"},Se=function(e){return typeof e=="function"},Sr=function(e){return typeof e=="number"},Mo=function(e){return typeof e>"u"},dr=function(e){return typeof e=="object"},vt=function(e){return e!==!1},Eo=function(){return typeof window<"u"},Ai=function(e){return Se(e)||We(e)},al=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ot=Array.isArray,Js=/(?:-?\.?\d|\.)+/gi,ll=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Sn=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ds=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,cl=/[+-]=-?[.\d]+/,ul=/[^,'"\[\]\s]+/gi,iu=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ve,nr,eo,Do,zt={},us={},fl,dl=function(e){return(us=In(e,zt))&&St},Ao=function(e,r){return console.warn("Invalid property",e,"set to",r,"Missing plugin? gsap.registerPlugin()")},mi=function(e,r){return!r&&console.warn(e)},hl=function(e,r){return e&&(zt[e]=r)&&us&&(us[e]=r)||zt},gi=function(){return 0},su={suppressEvents:!0,isStart:!0,kill:!1},Ki={suppressEvents:!0,kill:!1},ou={suppressEvents:!0},Io={},Lr=[],to={},pl,Et={},As={},la=30,Qi=[],jo="",No=function(e){var r=e[0],t,n;if(dr(r)||Se(r)||(e=[e]),!(t=(r._gsap||{}).harness)){for(n=Qi.length;n--&&!Qi[n].targetTest(r););t=Qi[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new zl(e[n],t)))||e.splice(n,1);return e},rn=function(e){return e._gsap||No(Vt(e))[0]._gsap},ml=function(e,r,t){return(t=e[r])&&Se(t)?e[r]():Mo(t)&&e.getAttribute&&e.getAttribute(r)||t},bt=function(e,r){return(e=e.split(",")).forEach(r)||e},Oe=function(e){return Math.round(e*1e5)/1e5||0},Ae=function(e){return Math.round(e*1e7)/1e7||0},Cn=function(e,r){var t=r.charAt(0),n=parseFloat(r.substr(2));return e=parseFloat(e),t==="+"?e+n:t==="-"?e-n:t==="*"?e*n:e/n},au=function(e,r){for(var t=r.length,n=0;e.indexOf(r[n])<0&&++n<t;);return n<t},fs=function(){var e=Lr.length,r=Lr.slice(0),t,n;for(to={},Lr.length=0,t=0;t<e;t++)n=r[t],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Lo=function(e){return!!(e._initted||e._startAt||e.add)},gl=function(e,r,t,n){Lr.length&&!Ze&&fs(),e.render(r,t,!!(Ze&&r<0&&Lo(e))),Lr.length&&!Ze&&fs()},_l=function(e){var r=parseFloat(e);return(r||r===0)&&(e+"").match(ul).length<2?r:We(e)?e.trim():e},yl=function(e){return e},Ft=function(e,r){for(var t in r)t in e||(e[t]=r[t]);return e},lu=function(e){return function(r,t){for(var n in t)n in r||n==="duration"&&e||n==="ease"||(r[n]=t[n])}},In=function(e,r){for(var t in r)e[t]=r[t];return e},ca=function s(e,r){for(var t in r)t!=="__proto__"&&t!=="constructor"&&t!=="prototype"&&(e[t]=dr(r[t])?s(e[t]||(e[t]={}),r[t]):r[t]);return e},ds=function(e,r){var t={},n;for(n in e)n in r||(t[n]=e[n]);return t},ni=function(e){var r=e.parent||ve,t=e.keyframes?lu(ot(e.keyframes)):Ft;if(vt(e.inherit))for(;r;)t(e,r.vars.defaults),r=r.parent||r._dp;return e},cu=function(e,r){for(var t=e.length,n=t===r.length;n&&t--&&e[t]===r[t];);return t<0},vl=function(e,r,t,n,i){var o=e[n],a;if(i)for(a=r[i];o&&o[i]>a;)o=o._prev;return o?(r._next=o._next,o._next=r):(r._next=e[t],e[t]=r),r._next?r._next._prev=r:e[n]=r,r._prev=o,r.parent=r._dp=e,r},Ss=function(e,r,t,n){t===void 0&&(t="_first"),n===void 0&&(n="_last");var i=r._prev,o=r._next;i?i._next=o:e[t]===r&&(e[t]=o),o?o._prev=i:e[n]===r&&(e[n]=i),r._next=r._prev=r.parent=null},$r=function(e,r){e.parent&&(!r||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},nn=function(e,r){if(e&&(!r||r._end>e._dur||r._start<0))for(var t=e;t;)t._dirty=1,t=t.parent;return e},uu=function(e){for(var r=e.parent;r&&r.parent;)r._dirty=1,r.totalDuration(),r=r.parent;return e},ro=function(e,r,t,n){return e._startAt&&(Ze?e._startAt.revert(Ki):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(r,!0,n))},fu=function s(e){return!e||e._ts&&s(e.parent)},ua=function(e){return e._repeat?jn(e._tTime,e=e.duration()+e._rDelay)*e:0},jn=function(e,r){var t=Math.floor(e=Ae(e/r));return e&&t===e?t-1:t},hs=function(e,r){return(e-r._start)*r._ts+(r._ts>=0?0:r._dirty?r.totalDuration():r._tDur)},Ts=function(e){return e._end=Ae(e._start+(e._tDur/Math.abs(e._ts||e._rts||de)||0))},ks=function(e,r){var t=e._dp;return t&&t.smoothChildTiming&&e._ts&&(e._start=Ae(t._time-(e._ts>0?r/e._ts:((e._dirty?e.totalDuration():e._tDur)-r)/-e._ts)),Ts(e),t._dirty||nn(t,e)),e},bl=function(e,r){var t;if((r._time||!r._dur&&r._initted||r._start<e._time&&(r._dur||!r.add))&&(t=hs(e.rawTime(),r),(!r._dur||Oi(0,r.totalDuration(),t)-r._tTime>de)&&r.render(t,!0)),nn(e,r)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(t=e;t._dp;)t.rawTime()>=0&&t.totalTime(t._tTime),t=t._dp;e._zTime=-de}},ar=function(e,r,t,n){return r.parent&&$r(r),r._start=Ae((Sr(t)?t:t||e!==ve?Bt(e,t,r):e._time)+r._delay),r._end=Ae(r._start+(r.totalDuration()/Math.abs(r.timeScale())||0)),vl(e,r,"_first","_last",e._sort?"_start":0),no(r)||(e._recent=r),n||bl(e,r),e._ts<0&&ks(e,e._tTime),e},xl=function(e,r){return(zt.ScrollTrigger||Ao("scrollTrigger",r))&&zt.ScrollTrigger.create(r,e)},wl=function(e,r,t,n,i){if(Fo(e,r,i),!e._initted)return 1;if(!t&&e._pt&&!Ze&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&pl!==At.frame)return Lr.push(e),e._lazy=[i,n],1},du=function s(e){var r=e.parent;return r&&r._ts&&r._initted&&!r._lock&&(r.rawTime()<0||s(r))},no=function(e){var r=e.data;return r==="isFromStart"||r==="isStart"},hu=function(e,r,t,n){var i=e.ratio,o=r<0||!r&&(!e._start&&du(e)&&!(!e._initted&&no(e))||(e._ts<0||e._dp._ts<0)&&!no(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=Oi(0,e._tDur,r),u=jn(l,a),e._yoyo&&u&1&&(o=1-o),u!==jn(e._tTime,a)&&(i=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==i||Ze||n||e._zTime===de||!r&&e._zTime){if(!e._initted&&wl(e,r,n,t,l))return;for(f=e._zTime,e._zTime=r||(t?de:0),t||(t=r&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;r<0&&ro(e,r,t,!0),e._onUpdate&&!t&&jt(e,"onUpdate"),l&&e._repeat&&!t&&e.parent&&jt(e,"onRepeat"),(r>=e._tDur||r<0)&&e.ratio===o&&(o&&$r(e,1),!t&&!Ze&&(jt(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=r)},pu=function(e,r,t){var n;if(t>r)for(n=e._first;n&&n._start<=t;){if(n.data==="isPause"&&n._start>r)return n;n=n._next}else for(n=e._last;n&&n._start>=t;){if(n.data==="isPause"&&n._start<r)return n;n=n._prev}},Nn=function(e,r,t,n){var i=e._repeat,o=Ae(r)||0,a=e._tTime/e._tDur;return a&&!n&&(e._time*=o/e._dur),e._dur=o,e._tDur=i?i<0?1e10:Ae(o*(i+1)+e._rDelay*i):o,a>0&&!n&&ks(e,e._tTime=e._tDur*a),e.parent&&Ts(e),t||nn(e.parent,e),e},fa=function(e){return e instanceof pt?nn(e):Nn(e,e._dur)},mu={_start:0,endTime:gi,totalDuration:gi},Bt=function s(e,r,t){var n=e.labels,i=e._recent||mu,o=e.duration()>=Wt?i.endTime(!1):e._dur,a,l,c;return We(r)&&(isNaN(r)||r in n)?(l=r.charAt(0),c=r.substr(-1)==="%",a=r.indexOf("="),l==="<"||l===">"?(a>=0&&(r=r.replace(/=/,"")),(l==="<"?i._start:i.endTime(i._repeat>=0))+(parseFloat(r.substr(1))||0)*(c?(a<0?i:t).totalDuration()/100:1)):a<0?(r in n||(n[r]=o),n[r]):(l=parseFloat(r.charAt(a-1)+r.substr(a+1)),c&&t&&(l=l/100*(ot(t)?t[0]:t).totalDuration()),a>1?s(e,r.substr(0,a-1),t)+l:o+l)):r==null?o:+r},ii=function(e,r,t){var n=Sr(r[1]),i=(n?2:1)+(e<2?0:1),o=r[i],a,l;if(n&&(o.duration=r[1]),o.parent=t,e){for(a=o,l=t;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=vt(l.vars.inherit)&&l.parent;o.immediateRender=vt(a.immediateRender),e<2?o.runBackwards=1:o.startAt=r[i-1]}return new De(r[0],o,r[i+1])},Xr=function(e,r){return e||e===0?r(e):r},Oi=function(e,r,t){return t<e?e:t>r?r:t},it=function(e,r){return!We(e)||!(r=iu.exec(e))?"":r[1]},gu=function(e,r,t){return Xr(t,function(n){return Oi(e,r,n)})},io=[].slice,Sl=function(e,r){return e&&dr(e)&&"length"in e&&(!r&&!e.length||e.length-1 in e&&dr(e[0]))&&!e.nodeType&&e!==nr},_u=function(e,r,t){return t===void 0&&(t=[]),e.forEach(function(n){var i;return We(n)&&!r||Sl(n,1)?(i=t).push.apply(i,Vt(n)):t.push(n)})||t},Vt=function(e,r,t){return _e&&!r&&_e.selector?_e.selector(e):We(e)&&!t&&(eo||!Ln())?io.call((r||Do).querySelectorAll(e),0):ot(e)?_u(e,t):Sl(e)?io.call(e,0):e?[e]:[]},so=function(e){return e=Vt(e)[0]||mi("Invalid scope")||{},function(r){var t=e.current||e.nativeElement||e;return Vt(r,t.querySelectorAll?t:t===e?mi("Invalid scope")||Do.createElement("div"):e)}},Tl=function(e){return e.sort(function(){return .5-Math.random()})},kl=function(e){if(Se(e))return e;var r=dr(e)?e:{each:e},t=sn(r.ease),n=r.from||0,i=parseFloat(r.base)||0,o={},a=n>0&&n<1,l=isNaN(n)||a,c=r.axis,u=n,f=n;return We(n)?u=f={center:.5,edges:.5,end:1}[n]||0:!a&&l&&(u=n[0],f=n[1]),function(p,h,g){var d=(g||r).length,m=o[d],b,y,x,w,_,C,v,S,k;if(!m){if(k=r.grid==="auto"?0:(r.grid||[1,Wt])[1],!k){for(v=-Wt;v<(v=g[k++].getBoundingClientRect().left)&&k<d;);k<d&&k--}for(m=o[d]=[],b=l?Math.min(k,d)*u-.5:n%k,y=k===Wt?0:l?d*f/k-.5:n/k|0,v=0,S=Wt,C=0;C<d;C++)x=C%k-b,w=y-(C/k|0),m[C]=_=c?Math.abs(c==="y"?w:x):ol(x*x+w*w),_>v&&(v=_),_<S&&(S=_);n==="random"&&Tl(m),m.max=v-S,m.min=S,m.v=d=(parseFloat(r.amount)||parseFloat(r.each)*(k>d?d-1:c?c==="y"?d/k:k:Math.max(k,d/k))||0)*(n==="edges"?-1:1),m.b=d<0?i-d:i,m.u=it(r.amount||r.each)||0,t=t&&d<0?jl(t):t}return d=(m[p]-m.min)/m.max||0,Ae(m.b+(t?t(d):d)*m.v)+m.u}},oo=function(e){var r=Math.pow(10,((e+"").split(".")[1]||"").length);return function(t){var n=Ae(Math.round(parseFloat(t)/e)*e*r);return(n-n%1)/r+(Sr(t)?0:it(t))}},Cl=function(e,r){var t=ot(e),n,i;return!t&&dr(e)&&(n=t=e.radius||Wt,e.values?(e=Vt(e.values),(i=!Sr(e[0]))&&(n*=n)):e=oo(e.increment)),Xr(r,t?Se(e)?function(o){return i=e(o),Math.abs(i-o)<=n?i:o}:function(o){for(var a=parseFloat(i?o.x:o),l=parseFloat(i?o.y:0),c=Wt,u=0,f=e.length,p,h;f--;)i?(p=e[f].x-a,h=e[f].y-l,p=p*p+h*h):p=Math.abs(e[f]-a),p<c&&(c=p,u=f);return u=!n||c<=n?e[u]:o,i||u===o||Sr(o)?u:u+it(o)}:oo(e))},Pl=function(e,r,t,n){return Xr(ot(e)?!r:t===!0?!!(t=0):!n,function(){return ot(e)?e[~~(Math.random()*e.length)]:(t=t||1e-5)&&(n=t<1?Math.pow(10,(t+"").length-2):1)&&Math.floor(Math.round((e-t/2+Math.random()*(r-e+t*.99))/t)*t*n)/n})},yu=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(n){return r.reduce(function(i,o){return o(i)},n)}},vu=function(e,r){return function(t){return e(parseFloat(t))+(r||it(t))}},bu=function(e,r,t){return Rl(e,r,0,1,t)},Ol=function(e,r,t){return Xr(t,function(n){return e[~~r(n)]})},xu=function s(e,r,t){var n=r-e;return ot(e)?Ol(e,s(0,e.length),r):Xr(t,function(i){return(n+(i-e)%n)%n+e})},wu=function s(e,r,t){var n=r-e,i=n*2;return ot(e)?Ol(e,s(0,e.length-1),r):Xr(t,function(o){return o=(i+(o-e)%i)%i||0,e+(o>n?i-o:o)})},_i=function(e){for(var r=0,t="",n,i,o,a;~(n=e.indexOf("random(",r));)o=e.indexOf(")",n),a=e.charAt(n+7)==="[",i=e.substr(n+7,o-n-7).match(a?ul:Js),t+=e.substr(r,n-r)+Pl(a?i:+i[0],a?0:+i[1],+i[2]||1e-5),r=o+1;return t+e.substr(r,e.length-r)},Rl=function(e,r,t,n,i){var o=r-e,a=n-t;return Xr(i,function(l){return t+((l-e)/o*a||0)})},Su=function s(e,r,t,n){var i=isNaN(e+r)?0:function(h){return(1-h)*e+h*r};if(!i){var o=We(e),a={},l,c,u,f,p;if(t===!0&&(n=1)&&(t=null),o)e={p:e},r={p:r};else if(ot(e)&&!ot(r)){for(u=[],f=e.length,p=f-2,c=1;c<f;c++)u.push(s(e[c-1],e[c]));f--,i=function(g){g*=f;var d=Math.min(p,~~g);return u[d](g-d)},t=r}else n||(e=In(ot(e)?[]:{},e));if(!u){for(l in r)zo.call(a,e,l,"get",r[l]);i=function(g){return Yo(g,a)||(o?e.p:e)}}}return Xr(t,i)},da=function(e,r,t){var n=e.labels,i=Wt,o,a,l;for(o in n)a=n[o]-r,a<0==!!t&&a&&i>(a=Math.abs(a))&&(l=o,i=a);return l},jt=function(e,r,t){var n=e.vars,i=n[r],o=_e,a=e._ctx,l,c,u;if(i)return l=n[r+"Params"],c=n.callbackScope||e,t&&Lr.length&&fs(),a&&(_e=a),u=l?i.apply(c,l):i.call(c),_e=o,u},Zn=function(e){return $r(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ze),e.progress()<1&&jt(e,"onInterrupt"),e},Tn,Ml=[],El=function(e){if(e)if(e=!e.name&&e.default||e,Eo()||e.headless){var r=e.name,t=Se(e),n=r&&!t&&e.init?function(){this._props=[]}:e,i={init:gi,render:Yo,add:zo,kill:Fu,modifier:zu,rawVars:0},o={targetTest:0,get:0,getSetter:Bo,aliases:{},register:0};if(Ln(),e!==n){if(Et[r])return;Ft(n,Ft(ds(e,i),o)),In(n.prototype,In(i,ds(e,o))),Et[n.prop=r]=n,e.targetTest&&(Qi.push(n),Io[r]=1),r=(r==="css"?"CSS":r.charAt(0).toUpperCase()+r.substr(1))+"Plugin"}hl(r,n),e.register&&e.register(St,n,xt)}else Ml.push(e)},fe=255,Kn={aqua:[0,fe,fe],lime:[0,fe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,fe],navy:[0,0,128],white:[fe,fe,fe],olive:[128,128,0],yellow:[fe,fe,0],orange:[fe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[fe,0,0],pink:[fe,192,203],cyan:[0,fe,fe],transparent:[fe,fe,fe,0]},Is=function(e,r,t){return e+=e<0?1:e>1?-1:0,(e*6<1?r+(t-r)*e*6:e<.5?t:e*3<2?r+(t-r)*(2/3-e)*6:r)*fe+.5|0},Dl=function(e,r,t){var n=e?Sr(e)?[e>>16,e>>8&fe,e&fe]:0:Kn.black,i,o,a,l,c,u,f,p,h,g;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Kn[e])n=Kn[e];else if(e.charAt(0)==="#"){if(e.length<6&&(i=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+i+i+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&fe,n&fe,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&fe,e&fe]}else if(e.substr(0,3)==="hsl"){if(n=g=e.match(Js),!r)l=+n[0]%360/360,c=+n[1]/100,u=+n[2]/100,o=u<=.5?u*(c+1):u+c-u*c,i=u*2-o,n.length>3&&(n[3]*=1),n[0]=Is(l+1/3,i,o),n[1]=Is(l,i,o),n[2]=Is(l-1/3,i,o);else if(~e.indexOf("="))return n=e.match(ll),t&&n.length<4&&(n[3]=1),n}else n=e.match(Js)||Kn.transparent;n=n.map(Number)}return r&&!g&&(i=n[0]/fe,o=n[1]/fe,a=n[2]/fe,f=Math.max(i,o,a),p=Math.min(i,o,a),u=(f+p)/2,f===p?l=c=0:(h=f-p,c=u>.5?h/(2-f-p):h/(f+p),l=f===i?(o-a)/h+(o<a?6:0):f===o?(a-i)/h+2:(i-o)/h+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(u*100+.5)),t&&n.length<4&&(n[3]=1),n},Al=function(e){var r=[],t=[],n=-1;return e.split(zr).forEach(function(i){var o=i.match(Sn)||[];r.push.apply(r,o),t.push(n+=o.length+1)}),r.c=t,r},ha=function(e,r,t){var n="",i=(e+n).match(zr),o=r?"hsla(":"rgba(",a=0,l,c,u,f;if(!i)return e;if(i=i.map(function(p){return(p=Dl(p,r,1))&&o+(r?p[0]+","+p[1]+"%,"+p[2]+"%,"+p[3]:p.join(","))+")"}),t&&(u=Al(e),l=t.c,l.join(n)!==u.c.join(n)))for(c=e.replace(zr,"1").split(Sn),f=c.length-1;a<f;a++)n+=c[a]+(~l.indexOf(a)?i.shift()||o+"0,0,0,0)":(u.length?u:i.length?i:t).shift());if(!c)for(c=e.split(zr),f=c.length-1;a<f;a++)n+=c[a]+i[a];return n+c[f]},zr=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Kn)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),Tu=/hsl[a]?\(/,Il=function(e){var r=e.join(" "),t;if(zr.lastIndex=0,zr.test(r))return t=Tu.test(r),e[1]=ha(e[1],t),e[0]=ha(e[0],t,Al(e[1])),!0},yi,At=function(){var s=Date.now,e=500,r=33,t=s(),n=t,i=1e3/240,o=i,a=[],l,c,u,f,p,h,g=function d(m){var b=s()-n,y=m===!0,x,w,_,C;if((b>e||b<0)&&(t+=b-r),n+=b,_=n-t,x=_-o,(x>0||y)&&(C=++f.frame,p=_-f.time*1e3,f.time=_=_/1e3,o+=x+(x>=i?4:i-x),w=1),y||(l=c(d)),w)for(h=0;h<a.length;h++)a[h](_,p,C,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return p/(1e3/(m||60))},wake:function(){fl&&(!eo&&Eo()&&(nr=eo=window,Do=nr.document||{},zt.gsap=St,(nr.gsapVersions||(nr.gsapVersions=[])).push(St.version),dl(us||nr.GreenSockGlobals||!nr.gsap&&nr||{}),Ml.forEach(El)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},yi=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),yi=0,c=gi},lagSmoothing:function(m,b){e=m||1/0,r=Math.min(b||33,e)},fps:function(m){i=1e3/(m||240),o=f.time*1e3+i},add:function(m,b,y){var x=b?function(w,_,C,v){m(w,_,C,v),f.remove(x)}:m;return f.remove(m),a[y?"unshift":"push"](x),Ln(),x},remove:function(m,b){~(b=a.indexOf(m))&&a.splice(b,1)&&h>=b&&h--},_listeners:a},f}(),Ln=function(){return!yi&&At.wake()},J={},ku=/^[\d.\-M][\d.\-,\s]/,Cu=/["']/g,Pu=function(e){for(var r={},t=e.substr(1,e.length-3).split(":"),n=t[0],i=1,o=t.length,a,l,c;i<o;i++)l=t[i],a=i!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),r[n]=isNaN(c)?c.replace(Cu,"").trim():+c,n=l.substr(a+1).trim();return r},Ou=function(e){var r=e.indexOf("(")+1,t=e.indexOf(")"),n=e.indexOf("(",r);return e.substring(r,~n&&n<t?e.indexOf(")",t+1):t)},Ru=function(e){var r=(e+"").split("("),t=J[r[0]];return t&&r.length>1&&t.config?t.config.apply(null,~e.indexOf("{")?[Pu(r[1])]:Ou(e).split(",").map(_l)):J._CE&&ku.test(e)?J._CE("",e):t},jl=function(e){return function(r){return 1-e(1-r)}},Nl=function s(e,r){for(var t=e._first,n;t;)t instanceof pt?s(t,r):t.vars.yoyoEase&&(!t._yoyo||!t._repeat)&&t._yoyo!==r&&(t.timeline?s(t.timeline,r):(n=t._ease,t._ease=t._yEase,t._yEase=n,t._yoyo=r)),t=t._next},sn=function(e,r){return e&&(Se(e)?e:J[e]||Ru(e))||r},pn=function(e,r,t,n){t===void 0&&(t=function(l){return 1-r(1-l)}),n===void 0&&(n=function(l){return l<.5?r(l*2)/2:1-r((1-l)*2)/2});var i={easeIn:r,easeOut:t,easeInOut:n},o;return bt(e,function(a){J[a]=zt[a]=i,J[o=a.toLowerCase()]=t;for(var l in i)J[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=J[a+"."+l]=i[l]}),i},Ll=function(e){return function(r){return r<.5?(1-e(1-r*2))/2:.5+e((r-.5)*2)/2}},js=function s(e,r,t){var n=r>=1?r:1,i=(t||(e?.3:.45))/(r<1?r:1),o=i/Qs*(Math.asin(1/n)||0),a=function(u){return u===1?1:n*Math.pow(2,-10*u)*nu((u-o)*i)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Ll(a);return i=Qs/i,l.config=function(c,u){return s(e,c,u)},l},Ns=function s(e,r){r===void 0&&(r=1.70158);var t=function(o){return o?--o*o*((r+1)*o+r)+1:0},n=e==="out"?t:e==="in"?function(i){return 1-t(1-i)}:Ll(t);return n.config=function(i){return s(e,i)},n};bt("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var r=e<5?e+1:e;pn(s+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(t*2,r)/2:1-Math.pow((1-t)*2,r)/2})});J.Linear.easeNone=J.none=J.Linear.easeIn;pn("Elastic",js("in"),js("out"),js());(function(s,e){var r=1/e,t=2*r,n=2.5*r,i=function(a){return a<r?s*a*a:a<t?s*Math.pow(a-1.5/e,2)+.75:a<n?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};pn("Bounce",function(o){return 1-i(1-o)},i)})(7.5625,2.75);pn("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});pn("Circ",function(s){return-(ol(1-s*s)-1)});pn("Sine",function(s){return s===1?1:-ru(s*eu)+1});pn("Back",Ns("in"),Ns("out"),Ns());J.SteppedEase=J.steps=zt.SteppedEase={config:function(e,r){e===void 0&&(e=1);var t=1/e,n=e+(r?0:1),i=r?1:0,o=1-de;return function(a){return((n*Oi(0,o,a)|0)+i)*t}}};An.ease=J["quad.out"];bt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return jo+=s+","+s+"Params,"});var zl=function(e,r){this.id=tu++,e._gsap=this,this.target=e,this.harness=r,this.get=r?r.get:ml,this.set=r?r.getSetter:Bo},vi=function(){function s(r){this.vars=r,this._delay=+r.delay||0,(this._repeat=r.repeat===1/0?-2:r.repeat||0)&&(this._rDelay=r.repeatDelay||0,this._yoyo=!!r.yoyo||!!r.yoyoEase),this._ts=1,Nn(this,+r.duration,1,1),this.data=r.data,_e&&(this._ctx=_e,_e.data.push(this)),yi||At.wake()}var e=s.prototype;return e.delay=function(t){return t||t===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},e.duration=function(t){return arguments.length?this.totalDuration(this._repeat>0?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},e.totalDuration=function(t){return arguments.length?(this._dirty=0,Nn(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(t,n){if(Ln(),!arguments.length)return this._tTime;var i=this._dp;if(i&&i.smoothChildTiming&&this._ts){for(ks(this,t),!i._dp||i.parent||bl(i,this);i&&i.parent;)i.parent._time!==i._start+(i._ts>=0?i._tTime/i._ts:(i.totalDuration()-i._tTime)/-i._ts)&&i.totalTime(i._tTime,!0),i=i.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&t<this._tDur||this._ts<0&&t>0||!this._tDur&&!t)&&ar(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===de||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),gl(this,t,n)),this},e.time=function(t,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+ua(this))%(this._dur+this._rDelay)||(t?this._dur:0),n):this._time},e.totalProgress=function(t,n){return arguments.length?this.totalTime(this.totalDuration()*t,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(t,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-t:t)+ua(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(t,n){var i=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*i,n):this._repeat?jn(this._tTime,i)+1:1},e.timeScale=function(t,n){if(!arguments.length)return this._rts===-de?0:this._rts;if(this._rts===t)return this;var i=this.parent&&this._ts?hs(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-de?0:this._rts,this.totalTime(Oi(-Math.abs(this._delay),this.totalDuration(),i),n!==!1),Ts(this),uu(this)},e.paused=function(t){return arguments.length?(this._ps!==t&&(this._ps=t,t?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ln(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==de&&(this._tTime-=de)))),this):this._ps},e.startTime=function(t){if(arguments.length){this._start=t;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&ar(n,this,t-this._delay),this}return this._start},e.endTime=function(t){return this._start+(vt(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(t){var n=this.parent||this._dp;return n?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?hs(n.rawTime(t),this):this._tTime:this._tTime},e.revert=function(t){t===void 0&&(t=ou);var n=Ze;return Ze=t,Lo(this)&&(this.timeline&&this.timeline.revert(t),this.totalTime(-.01,t.suppressEvents)),this.data!=="nested"&&t.kill!==!1&&this.kill(),Ze=n,this},e.globalTime=function(t){for(var n=this,i=arguments.length?t:n.rawTime();n;)i=n._start+i/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(t):i},e.repeat=function(t){return arguments.length?(this._repeat=t===1/0?-2:t,fa(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(t){if(arguments.length){var n=this._time;return this._rDelay=t,fa(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},e.seek=function(t,n){return this.totalTime(Bt(this,t),vt(n))},e.restart=function(t,n){return this.play().totalTime(t?-this._delay:0,vt(n)),this._dur||(this._zTime=-de),this},e.play=function(t,n){return t!=null&&this.seek(t,n),this.reversed(!1).paused(!1)},e.reverse=function(t,n){return t!=null&&this.seek(t||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(t,n){return t!=null&&this.seek(t,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-de:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-de,this},e.isActive=function(){var t=this.parent||this._dp,n=this._start,i;return!!(!t||this._ts&&this._initted&&t.isActive()&&(i=t.rawTime(!0))>=n&&i<this.endTime(!0)-de)},e.eventCallback=function(t,n,i){var o=this.vars;return arguments.length>1?(n?(o[t]=n,i&&(o[t+"Params"]=i),t==="onUpdate"&&(this._onUpdate=n)):delete o[t],this):o[t]},e.then=function(t){var n=this;return new Promise(function(i){var o=Se(t)?t:yl,a=function(){var c=n.then;n.then=null,Se(o)&&(o=o(n))&&(o.then||o===n)&&(n.then=c),i(o),n.then=c};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?a():n._prom=a})},e.kill=function(){Zn(this)},s}();Ft(vi.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-de,_prom:0,_ps:!1,_rts:1});var pt=function(s){sl(e,s);function e(t,n){var i;return t===void 0&&(t={}),i=s.call(this,t)||this,i.labels={},i.smoothChildTiming=!!t.smoothChildTiming,i.autoRemoveChildren=!!t.autoRemoveChildren,i._sort=vt(t.sortChildren),ve&&ar(t.parent||ve,yr(i),n),t.reversed&&i.reverse(),t.paused&&i.paused(!0),t.scrollTrigger&&xl(yr(i),t.scrollTrigger),i}var r=e.prototype;return r.to=function(n,i,o){return ii(0,arguments,this),this},r.from=function(n,i,o){return ii(1,arguments,this),this},r.fromTo=function(n,i,o,a){return ii(2,arguments,this),this},r.set=function(n,i,o){return i.duration=0,i.parent=this,ni(i).repeatDelay||(i.repeat=0),i.immediateRender=!!i.immediateRender,new De(n,i,Bt(this,o),1),this},r.call=function(n,i,o){return ar(this,De.delayedCall(0,n,i),o)},r.staggerTo=function(n,i,o,a,l,c,u){return o.duration=i,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new De(n,o,Bt(this,l)),this},r.staggerFrom=function(n,i,o,a,l,c,u){return o.runBackwards=1,ni(o).immediateRender=vt(o.immediateRender),this.staggerTo(n,i,o,a,l,c,u)},r.staggerFromTo=function(n,i,o,a,l,c,u,f){return a.startAt=o,ni(a).immediateRender=vt(a.immediateRender),this.staggerTo(n,i,a,l,c,u,f)},r.render=function(n,i,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=n<=0?0:Ae(n),f=this._zTime<0!=n<0&&(this._initted||!c),p,h,g,d,m,b,y,x,w,_,C,v;if(this!==ve&&u>l&&n>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,n+=this._time-a),p=u,w=this._start,x=this._ts,b=!x,f&&(c||(a=this._zTime),(n||!i)&&(this._zTime=n)),this._repeat){if(C=this._yoyo,m=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(m*100+n,i,o);if(p=Ae(u%m),u===l?(d=this._repeat,p=c):(_=Ae(u/m),d=~~_,d&&d===_&&(p=c,d--),p>c&&(p=c)),_=jn(this._tTime,m),!a&&this._tTime&&_!==d&&this._tTime-_*m-this._dur<=0&&(_=d),C&&d&1&&(p=c-p,v=1),d!==_&&!this._lock){var S=C&&_&1,k=S===(C&&d&1);if(d<_&&(S=!S),a=S?0:u%c?c:u,this._lock=1,this.render(a||(v?0:Ae(d*m)),i,!c)._lock=0,this._tTime=u,!i&&this.parent&&jt(this,"onRepeat"),this.vars.repeatRefresh&&!v&&(this.invalidate()._lock=1),a&&a!==this._time||b!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,k&&(this._lock=2,a=S?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!v&&this.invalidate()),this._lock=0,!this._ts&&!b)return this;Nl(this,v)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=pu(this,Ae(a),Ae(p)),y&&(u-=p-(p=y._start))),this._tTime=u,this._time=p,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,a=0),!a&&u&&!i&&!_&&(jt(this,"onStart"),this._tTime!==u))return this;if(p>=a&&n>=0)for(h=this._first;h;){if(g=h._next,(h._act||p>=h._start)&&h._ts&&y!==h){if(h.parent!==this)return this.render(n,i,o);if(h.render(h._ts>0?(p-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(p-h._start)*h._ts,i,o),p!==this._time||!this._ts&&!b){y=0,g&&(u+=this._zTime=-de);break}}h=g}else{h=this._last;for(var O=n<0?n:p;h;){if(g=h._prev,(h._act||O<=h._end)&&h._ts&&y!==h){if(h.parent!==this)return this.render(n,i,o);if(h.render(h._ts>0?(O-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(O-h._start)*h._ts,i,o||Ze&&Lo(h)),p!==this._time||!this._ts&&!b){y=0,g&&(u+=this._zTime=O?-de:de);break}}h=g}}if(y&&!i&&(this.pause(),y.render(p>=a?0:-de)._zTime=p>=a?1:-1,this._ts))return this._start=w,Ts(this),this.render(n,i,o);this._onUpdate&&!i&&jt(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(w===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&$r(this,1),!i&&!(n<0&&!a)&&(u||a||!l)&&(jt(this,u===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},r.add=function(n,i){var o=this;if(Sr(i)||(i=Bt(this,i,n)),!(n instanceof vi)){if(ot(n))return n.forEach(function(a){return o.add(a,i)}),this;if(We(n))return this.addLabel(n,i);if(Se(n))n=De.delayedCall(0,n);else return this}return this!==n?ar(this,n,i):this},r.getChildren=function(n,i,o,a){n===void 0&&(n=!0),i===void 0&&(i=!0),o===void 0&&(o=!0),a===void 0&&(a=-Wt);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof De?i&&l.push(c):(o&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,i,o)))),c=c._next;return l},r.getById=function(n){for(var i=this.getChildren(1,1,1),o=i.length;o--;)if(i[o].vars.id===n)return i[o]},r.remove=function(n){return We(n)?this.removeLabel(n):Se(n)?this.killTweensOf(n):(n.parent===this&&Ss(this,n),n===this._recent&&(this._recent=this._last),nn(this))},r.totalTime=function(n,i){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ae(At.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),s.prototype.totalTime.call(this,n,i),this._forcing=0,this):this._tTime},r.addLabel=function(n,i){return this.labels[n]=Bt(this,i),this},r.removeLabel=function(n){return delete this.labels[n],this},r.addPause=function(n,i,o){var a=De.delayedCall(0,i||gi,o);return a.data="isPause",this._hasPause=1,ar(this,a,Bt(this,n))},r.removePause=function(n){var i=this._first;for(n=Bt(this,n);i;)i._start===n&&i.data==="isPause"&&$r(i),i=i._next},r.killTweensOf=function(n,i,o){for(var a=this.getTweensOf(n,o),l=a.length;l--;)Dr!==a[l]&&a[l].kill(n,i);return this},r.getTweensOf=function(n,i){for(var o=[],a=Vt(n),l=this._first,c=Sr(i),u;l;)l instanceof De?au(l._targets,a)&&(c?(!Dr||l._initted&&l._ts)&&l.globalTime(0)<=i&&l.globalTime(l.totalDuration())>i:!i||l.isActive())&&o.push(l):(u=l.getTweensOf(a,i)).length&&o.push.apply(o,u),l=l._next;return o},r.tweenTo=function(n,i){i=i||{};var o=this,a=Bt(o,n),l=i,c=l.startAt,u=l.onStart,f=l.onStartParams,p=l.immediateRender,h,g=De.to(o,Ft({ease:i.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:i.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||de,onStart:function(){if(o.pause(),!h){var m=i.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Nn(g,m,0,1).render(g._time,!0,!0),h=1}u&&u.apply(g,f||[])}},i));return p?g.render(0):g},r.tweenFromTo=function(n,i,o){return this.tweenTo(i,Ft({startAt:{time:Bt(this,n)}},o))},r.recent=function(){return this._recent},r.nextLabel=function(n){return n===void 0&&(n=this._time),da(this,Bt(this,n))},r.previousLabel=function(n){return n===void 0&&(n=this._time),da(this,Bt(this,n),1)},r.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+de)},r.shiftChildren=function(n,i,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=n,a._end+=n),a=a._next;if(i)for(c in l)l[c]>=o&&(l[c]+=n);return nn(this)},r.invalidate=function(n){var i=this._first;for(this._lock=0;i;)i.invalidate(n),i=i._next;return s.prototype.invalidate.call(this,n)},r.clear=function(n){n===void 0&&(n=!0);for(var i=this._first,o;i;)o=i._next,this.remove(i),i=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),nn(this)},r.totalDuration=function(n){var i=0,o=this,a=o._last,l=Wt,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ar(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(i-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>i&&a._ts&&(i=a._end),a=c;Nn(o,o===ve&&o._time>i?o._time:i,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(n){if(ve._ts&&(gl(ve,hs(n,ve)),pl=At.frame),At.frame>=la){la+=Nt.autoSleep||120;var i=ve._first;if((!i||!i._ts)&&Nt.autoSleep&&At._listeners.length<2){for(;i&&!i._ts;)i=i._next;i||At.sleep()}}},e}(vi);Ft(pt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Mu=function(e,r,t,n,i,o,a){var l=new xt(this._pt,e,r,0,1,Wl,null,i),c=0,u=0,f,p,h,g,d,m,b,y;for(l.b=t,l.e=n,t+="",n+="",(b=~n.indexOf("random("))&&(n=_i(n)),o&&(y=[t,n],o(y,e,r),t=y[0],n=y[1]),p=t.match(Ds)||[];f=Ds.exec(n);)g=f[0],d=n.substring(c,f.index),h?h=(h+1)%5:d.substr(-5)==="rgba("&&(h=1),g!==p[u++]&&(m=parseFloat(p[u-1])||0,l._pt={_next:l._pt,p:d||u===1?d:",",s:m,c:g.charAt(1)==="="?Cn(m,g)-m:parseFloat(g)-m,m:h&&h<4?Math.round:0},c=Ds.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=a,(cl.test(n)||b)&&(l.e=0),this._pt=l,l},zo=function(e,r,t,n,i,o,a,l,c,u){Se(n)&&(n=n(i||0,e,o));var f=e[r],p=t!=="get"?t:Se(f)?c?e[r.indexOf("set")||!Se(e["get"+r.substr(3)])?r:"get"+r.substr(3)](c):e[r]():f,h=Se(f)?c?ju:Yl:$o,g;if(We(n)&&(~n.indexOf("random(")&&(n=_i(n)),n.charAt(1)==="="&&(g=Cn(p,n)+(it(p)||0),(g||g===0)&&(n=g))),!u||p!==n||ao)return!isNaN(p*n)&&n!==""?(g=new xt(this._pt,e,r,+p||0,n-(p||0),typeof f=="boolean"?Lu:Xl,0,h),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(r in e)&&Ao(r,n),Mu.call(this,e,r,p,n,h,l||Nt.stringFilter,c))},Eu=function(e,r,t,n,i){if(Se(e)&&(e=si(e,i,r,t,n)),!dr(e)||e.style&&e.nodeType||ot(e)||al(e))return We(e)?si(e,i,r,t,n):e;var o={},a;for(a in e)o[a]=si(e[a],i,r,t,n);return o},Fl=function(e,r,t,n,i,o){var a,l,c,u;if(Et[e]&&(a=new Et[e]).init(i,a.rawVars?r[e]:Eu(r[e],n,i,o,t),t,n,o)!==!1&&(t._pt=l=new xt(t._pt,i,e,0,1,a.render,a,0,a.priority),t!==Tn))for(c=t._ptLookup[t._targets.indexOf(i)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Dr,ao,Fo=function s(e,r,t){var n=e.vars,i=n.ease,o=n.startAt,a=n.immediateRender,l=n.lazy,c=n.onUpdate,u=n.runBackwards,f=n.yoyoEase,p=n.keyframes,h=n.autoRevert,g=e._dur,d=e._startAt,m=e._targets,b=e.parent,y=b&&b.data==="nested"?b.vars.targets:m,x=e._overwrite==="auto"&&!Ro,w=e.timeline,_,C,v,S,k,O,I,M,L,$,U,B,z;if(w&&(!p||!i)&&(i="none"),e._ease=sn(i,An.ease),e._yEase=f?jl(sn(f===!0?i:f,An.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!w&&!!n.runBackwards,!w||p&&!n.stagger){if(M=m[0]?rn(m[0]).harness:0,B=M&&n[M.prop],_=ds(n,Io),d&&(d._zTime<0&&d.progress(1),r<0&&u&&a&&!h?d.render(-1,!0):d.revert(u&&g?Ki:su),d._lazy=0),o){if($r(e._startAt=De.set(m,Ft({data:"isStart",overwrite:!1,parent:b,immediateRender:!0,lazy:!d&&vt(l),startAt:null,delay:0,onUpdate:c&&function(){return jt(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,r<0&&(Ze||!a&&!h)&&e._startAt.revert(Ki),a&&g&&r<=0&&t<=0){r&&(e._zTime=r);return}}else if(u&&g&&!d){if(r&&(a=!1),v=Ft({overwrite:!1,data:"isFromStart",lazy:a&&!d&&vt(l),immediateRender:a,stagger:0,parent:b},_),B&&(v[M.prop]=B),$r(e._startAt=De.set(m,v)),e._startAt._dp=0,e._startAt._sat=e,r<0&&(Ze?e._startAt.revert(Ki):e._startAt.render(-1,!0)),e._zTime=r,!a)s(e._startAt,de,de);else if(!r)return}for(e._pt=e._ptCache=0,l=g&&vt(l)||l&&!g,C=0;C<m.length;C++){if(k=m[C],I=k._gsap||No(m)[C]._gsap,e._ptLookup[C]=$={},to[I.id]&&Lr.length&&fs(),U=y===m?C:y.indexOf(k),M&&(L=new M).init(k,B||_,e,U,y)!==!1&&(e._pt=S=new xt(e._pt,k,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(W){$[W]=S}),L.priority&&(O=1)),!M||B)for(v in _)Et[v]&&(L=Fl(v,_,e,U,k,y))?L.priority&&(O=1):$[v]=S=zo.call(e,k,v,"get",_[v],U,y,0,n.stringFilter);e._op&&e._op[C]&&e.kill(k,e._op[C]),x&&e._pt&&(Dr=e,ve.killTweensOf(k,$,e.globalTime(r)),z=!e.parent,Dr=0),e._pt&&l&&(to[I.id]=1)}O&&Vl(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!z,p&&r<=0&&w.render(Wt,!0,!0)},Du=function(e,r,t,n,i,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[r],u,f,p,h;if(!c)for(c=e._ptCache[r]=[],p=e._ptLookup,h=e._targets.length;h--;){if(u=p[h][r],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==r&&u.fp!==r;)u=u._next;if(!u)return ao=1,e.vars[r]="+=0",Fo(e,a),ao=0,l?mi(r+" not eligible for reset"):1;c.push(u)}for(h=c.length;h--;)f=c[h],u=f._pt||f,u.s=(n||n===0)&&!i?n:u.s+(n||0)+o*u.c,u.c=t-u.s,f.e&&(f.e=Oe(t)+it(f.e)),f.b&&(f.b=u.s+it(f.b))},Au=function(e,r){var t=e[0]?rn(e[0]).harness:0,n=t&&t.aliases,i,o,a,l;if(!n)return r;i=In({},r);for(o in n)if(o in i)for(l=n[o].split(","),a=l.length;a--;)i[l[a]]=i[o];return i},Iu=function(e,r,t,n){var i=r.ease||n||"power1.inOut",o,a;if(ot(r))a=t[e]||(t[e]=[]),r.forEach(function(l,c){return a.push({t:c/(r.length-1)*100,v:l,e:i})});else for(o in r)a=t[o]||(t[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:r[o],e:i})},si=function(e,r,t,n,i){return Se(e)?e.call(r,t,n,i):We(e)&&~e.indexOf("random(")?_i(e):e},$l=jo+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Bl={};bt($l+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Bl[s]=1});var De=function(s){sl(e,s);function e(t,n,i,o){var a;typeof n=="number"&&(i.duration=n,n=i,i=null),a=s.call(this,o?n:ni(n))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,p=l.stagger,h=l.overwrite,g=l.keyframes,d=l.defaults,m=l.scrollTrigger,b=l.yoyoEase,y=n.parent||ve,x=(ot(t)||al(t)?Sr(t[0]):"length"in n)?[t]:Vt(t),w,_,C,v,S,k,O,I;if(a._targets=x.length?No(x):mi("GSAP target "+t+" not found. https://gsap.com",!Nt.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,g||p||Ai(c)||Ai(u)){if(n=a.vars,w=a.timeline=new pt({data:"nested",defaults:d||{},targets:y&&y.data==="nested"?y.vars.targets:x}),w.kill(),w.parent=w._dp=yr(a),w._start=0,p||Ai(c)||Ai(u)){if(v=x.length,O=p&&kl(p),dr(p))for(S in p)~$l.indexOf(S)&&(I||(I={}),I[S]=p[S]);for(_=0;_<v;_++)C=ds(n,Bl),C.stagger=0,b&&(C.yoyoEase=b),I&&In(C,I),k=x[_],C.duration=+si(c,yr(a),_,k,x),C.delay=(+si(u,yr(a),_,k,x)||0)-a._delay,!p&&v===1&&C.delay&&(a._delay=u=C.delay,a._start+=u,C.delay=0),w.to(k,C,O?O(_,k,x):0),w._ease=J.none;w.duration()?c=u=0:a.timeline=0}else if(g){ni(Ft(w.vars.defaults,{ease:"none"})),w._ease=sn(g.ease||n.ease||"none");var M=0,L,$,U;if(ot(g))g.forEach(function(B){return w.to(x,B,">")}),w.duration();else{C={};for(S in g)S==="ease"||S==="easeEach"||Iu(S,g[S],C,g.easeEach);for(S in C)for(L=C[S].sort(function(B,z){return B.t-z.t}),M=0,_=0;_<L.length;_++)$=L[_],U={ease:$.e,duration:($.t-(_?L[_-1].t:0))/100*c},U[S]=$.v,w.to(x,U,M),M+=U.duration;w.duration()<c&&w.to({},{duration:c-w.duration()})}}c||a.duration(c=w.duration())}else a.timeline=0;return h===!0&&!Ro&&(Dr=yr(a),ve.killTweensOf(x),Dr=0),ar(y,yr(a),i),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(f||!c&&!g&&a._start===Ae(y._time)&&vt(f)&&fu(yr(a))&&y.data!=="nested")&&(a._tTime=-de,a.render(Math.max(0,-u)||0)),m&&xl(yr(a),m),a}var r=e.prototype;return r.render=function(n,i,o){var a=this._time,l=this._tDur,c=this._dur,u=n<0,f=n>l-de&&!u?l:n<de?0:n,p,h,g,d,m,b,y,x,w;if(!c)hu(this,n,i,o);else if(f!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(p=f,x=this.timeline,this._repeat){if(d=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+n,i,o);if(p=Ae(f%d),f===l?(g=this._repeat,p=c):(m=Ae(f/d),g=~~m,g&&g===m?(p=c,g--):p>c&&(p=c)),b=this._yoyo&&g&1,b&&(w=this._yEase,p=c-p),m=jn(this._tTime,d),p===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(x&&this._yEase&&Nl(x,b),this.vars.repeatRefresh&&!b&&!this._lock&&p!==d&&this._initted&&(this._lock=o=1,this.render(Ae(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(wl(this,u?n:p,o,i,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(n,i,o)}if(this._tTime=f,this._time=p,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(w||this._ease)(p/c),this._from&&(this.ratio=y=1-y),!a&&f&&!i&&!m&&(jt(this,"onStart"),this._tTime!==f))return this;for(h=this._pt;h;)h.r(y,h.d),h=h._next;x&&x.render(n<0?n:x._dur*x._ease(p/this._dur),i,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!i&&(u&&ro(this,n,i,o),jt(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!i&&this.parent&&jt(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&ro(this,n,!0,!0),(n||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&$r(this,1),!i&&!(u&&!a)&&(f||a||b)&&(jt(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},r.targets=function(){return this._targets},r.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),s.prototype.invalidate.call(this,n)},r.resetTo=function(n,i,o,a,l){yi||At.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Fo(this,c),u=this._ease(c/this._dur),Du(this,n,i,o,a,u,c,l)?this.resetTo(n,i,o,a,1):(ks(this,0),this.parent||vl(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},r.kill=function(n,i){if(i===void 0&&(i="all"),!n&&(!i||i==="all"))return this._lazy=this._pt=0,this.parent?Zn(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ze),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,i,Dr&&Dr.vars.overwrite!==!0)._first||Zn(this),this.parent&&o!==this.timeline.totalDuration()&&Nn(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=n?Vt(n):a,c=this._ptLookup,u=this._pt,f,p,h,g,d,m,b;if((!i||i==="all")&&cu(a,l))return i==="all"&&(this._pt=0),Zn(this);for(f=this._op=this._op||[],i!=="all"&&(We(i)&&(d={},bt(i,function(y){return d[y]=1}),i=d),i=Au(a,i)),b=a.length;b--;)if(~l.indexOf(a[b])){p=c[b],i==="all"?(f[b]=i,g=p,h={}):(h=f[b]=f[b]||{},g=i);for(d in g)m=p&&p[d],m&&((!("kill"in m.d)||m.d.kill(d)===!0)&&Ss(this,m,"_pt"),delete p[d]),h!=="all"&&(h[d]=1)}return this._initted&&!this._pt&&u&&Zn(this),this},e.to=function(n,i){return new e(n,i,arguments[2])},e.from=function(n,i){return ii(1,arguments)},e.delayedCall=function(n,i,o,a){return new e(i,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:i,onReverseComplete:i,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(n,i,o){return ii(2,arguments)},e.set=function(n,i){return i.duration=0,i.repeatDelay||(i.repeat=0),new e(n,i)},e.killTweensOf=function(n,i,o){return ve.killTweensOf(n,i,o)},e}(vi);Ft(De.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});bt("staggerTo,staggerFrom,staggerFromTo",function(s){De[s]=function(){var e=new pt,r=io.call(arguments,0);return r.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,r)}});var $o=function(e,r,t){return e[r]=t},Yl=function(e,r,t){return e[r](t)},ju=function(e,r,t,n){return e[r](n.fp,t)},Nu=function(e,r,t){return e.setAttribute(r,t)},Bo=function(e,r){return Se(e[r])?Yl:Mo(e[r])&&e.setAttribute?Nu:$o},Xl=function(e,r){return r.set(r.t,r.p,Math.round((r.s+r.c*e)*1e6)/1e6,r)},Lu=function(e,r){return r.set(r.t,r.p,!!(r.s+r.c*e),r)},Wl=function(e,r){var t=r._pt,n="";if(!e&&r.b)n=r.b;else if(e===1&&r.e)n=r.e;else{for(;t;)n=t.p+(t.m?t.m(t.s+t.c*e):Math.round((t.s+t.c*e)*1e4)/1e4)+n,t=t._next;n+=r.c}r.set(r.t,r.p,n,r)},Yo=function(e,r){for(var t=r._pt;t;)t.r(e,t.d),t=t._next},zu=function(e,r,t,n){for(var i=this._pt,o;i;)o=i._next,i.p===n&&i.modifier(e,r,t),i=o},Fu=function(e){for(var r=this._pt,t,n;r;)n=r._next,r.p===e&&!r.op||r.op===e?Ss(this,r,"_pt"):r.dep||(t=1),r=n;return!t},$u=function(e,r,t,n){n.mSet(e,r,n.m.call(n.tween,t,n.mt),n)},Vl=function(e){for(var r=e._pt,t,n,i,o;r;){for(t=r._next,n=i;n&&n.pr>r.pr;)n=n._next;(r._prev=n?n._prev:o)?r._prev._next=r:i=r,(r._next=n)?n._prev=r:o=r,r=t}e._pt=i},xt=function(){function s(r,t,n,i,o,a,l,c,u){this.t=t,this.s=i,this.c=o,this.p=n,this.r=a||Xl,this.d=l||this,this.set=c||$o,this.pr=u||0,this._next=r,r&&(r._prev=this)}var e=s.prototype;return e.modifier=function(t,n,i){this.mSet=this.mSet||this.set,this.set=$u,this.m=t,this.mt=i,this.tween=n},s}();bt(jo+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Io[s]=1});zt.TweenMax=zt.TweenLite=De;zt.TimelineLite=zt.TimelineMax=pt;ve=new pt({sortChildren:!1,defaults:An,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Nt.stringFilter=Il;var on=[],Ji={},Bu=[],pa=0,Yu=0,Ls=function(e){return(Ji[e]||Bu).map(function(r){return r()})},lo=function(){var e=Date.now(),r=[];e-pa>2&&(Ls("matchMediaInit"),on.forEach(function(t){var n=t.queries,i=t.conditions,o,a,l,c;for(a in n)o=nr.matchMedia(n[a]).matches,o&&(l=1),o!==i[a]&&(i[a]=o,c=1);c&&(t.revert(),l&&r.push(t))}),Ls("matchMediaRevert"),r.forEach(function(t){return t.onMatch(t,function(n){return t.add(null,n)})}),pa=e,Ls("matchMedia"))},Hl=function(){function s(r,t){this.selector=t&&so(t),this.data=[],this._r=[],this.isReverted=!1,this.id=Yu++,r&&this.add(r)}var e=s.prototype;return e.add=function(t,n,i){Se(t)&&(i=n,n=t,t=Se);var o=this,a=function(){var c=_e,u=o.selector,f;return c&&c!==o&&c.data.push(o),i&&(o.selector=so(i)),_e=o,f=n.apply(o,arguments),Se(f)&&o._r.push(f),_e=c,o.selector=u,o.isReverted=!1,f};return o.last=a,t===Se?a(o,function(l){return o.add(null,l)}):t?o[t]=a:a},e.ignore=function(t){var n=_e;_e=null,t(this),_e=n},e.getTweens=function(){var t=[];return this.data.forEach(function(n){return n instanceof s?t.push.apply(t,n.getTweens()):n instanceof De&&!(n.parent&&n.parent.data==="nested")&&t.push(n)}),t},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(t,n){var i=this;if(t?function(){for(var a=i.getTweens(),l=i.data.length,c;l--;)c=i.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(t)}),l=i.data.length;l--;)c=i.data[l],c instanceof pt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof De)&&c.revert&&c.revert(t);i._r.forEach(function(u){return u(t,i)}),i.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),n)for(var o=on.length;o--;)on[o].id===this.id&&on.splice(o,1)},e.revert=function(t){this.kill(t||{})},s}(),Xu=function(){function s(r){this.contexts=[],this.scope=r,_e&&_e.data.push(this)}var e=s.prototype;return e.add=function(t,n,i){dr(t)||(t={matches:t});var o=new Hl(0,i||this.scope),a=o.conditions={},l,c,u;_e&&!o.selector&&(o.selector=_e.selector),this.contexts.push(o),n=o.add("onMatch",n),o.queries=t;for(c in t)c==="all"?u=1:(l=nr.matchMedia(t[c]),l&&(on.indexOf(o)<0&&on.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(lo):l.addEventListener("change",lo)));return u&&n(o,function(f){return o.add(null,f)}),this},e.revert=function(t){this.kill(t||{})},e.kill=function(t){this.contexts.forEach(function(n){return n.kill(t,!0)})},s}(),ps={registerPlugin:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];r.forEach(function(n){return El(n)})},timeline:function(e){return new pt(e)},getTweensOf:function(e,r){return ve.getTweensOf(e,r)},getProperty:function(e,r,t,n){We(e)&&(e=Vt(e)[0]);var i=rn(e||{}).get,o=t?yl:_l;return t==="native"&&(t=""),e&&(r?o((Et[r]&&Et[r].get||i)(e,r,t,n)):function(a,l,c){return o((Et[a]&&Et[a].get||i)(e,a,l,c))})},quickSetter:function(e,r,t){if(e=Vt(e),e.length>1){var n=e.map(function(u){return St.quickSetter(u,r,t)}),i=n.length;return function(u){for(var f=i;f--;)n[f](u)}}e=e[0]||{};var o=Et[r],a=rn(e),l=a.harness&&(a.harness.aliases||{})[r]||r,c=o?function(u){var f=new o;Tn._pt=0,f.init(e,t?u+t:u,Tn,0,[e]),f.render(1,f),Tn._pt&&Yo(1,Tn)}:a.set(e,l);return o?c:function(u){return c(e,l,t?u+t:u,a,1)}},quickTo:function(e,r,t){var n,i=St.to(e,Ft((n={},n[r]="+=0.1",n.paused=!0,n.stagger=0,n),t||{})),o=function(l,c,u){return i.resetTo(r,l,c,u)};return o.tween=i,o},isTweening:function(e){return ve.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=sn(e.ease,An.ease)),ca(An,e||{})},config:function(e){return ca(Nt,e||{})},registerEffect:function(e){var r=e.name,t=e.effect,n=e.plugins,i=e.defaults,o=e.extendTimeline;(n||"").split(",").forEach(function(a){return a&&!Et[a]&&!zt[a]&&mi(r+" effect requires "+a+" plugin.")}),As[r]=function(a,l,c){return t(Vt(a),Ft(l||{},i),c)},o&&(pt.prototype[r]=function(a,l,c){return this.add(As[r](a,dr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,r){J[e]=sn(r)},parseEase:function(e,r){return arguments.length?sn(e,r):J},getById:function(e){return ve.getById(e)},exportRoot:function(e,r){e===void 0&&(e={});var t=new pt(e),n,i;for(t.smoothChildTiming=vt(e.smoothChildTiming),ve.remove(t),t._dp=0,t._time=t._tTime=ve._time,n=ve._first;n;)i=n._next,(r||!(!n._dur&&n instanceof De&&n.vars.onComplete===n._targets[0]))&&ar(t,n,n._start-n._delay),n=i;return ar(ve,t,0),t},context:function(e,r){return e?new Hl(e,r):_e},matchMedia:function(e){return new Xu(e)},matchMediaRefresh:function(){return on.forEach(function(e){var r=e.conditions,t,n;for(n in r)r[n]&&(r[n]=!1,t=1);t&&e.revert()})||lo()},addEventListener:function(e,r){var t=Ji[e]||(Ji[e]=[]);~t.indexOf(r)||t.push(r)},removeEventListener:function(e,r){var t=Ji[e],n=t&&t.indexOf(r);n>=0&&t.splice(n,1)},utils:{wrap:xu,wrapYoyo:wu,distribute:kl,random:Pl,snap:Cl,normalize:bu,getUnit:it,clamp:gu,splitColor:Dl,toArray:Vt,selector:so,mapRange:Rl,pipe:yu,unitize:vu,interpolate:Su,shuffle:Tl},install:dl,effects:As,ticker:At,updateRoot:pt.updateRoot,plugins:Et,globalTimeline:ve,core:{PropTween:xt,globals:hl,Tween:De,Timeline:pt,Animation:vi,getCache:rn,_removeLinkedListItem:Ss,reverting:function(){return Ze},context:function(e){return e&&_e&&(_e.data.push(e),e._ctx=_e),_e},suppressOverwrites:function(e){return Ro=e}}};bt("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return ps[s]=De[s]});At.add(pt.updateRoot);Tn=ps.to({},{duration:0});var Wu=function(e,r){for(var t=e._pt;t&&t.p!==r&&t.op!==r&&t.fp!==r;)t=t._next;return t},Vu=function(e,r){var t=e._targets,n,i,o;for(n in r)for(i=t.length;i--;)o=e._ptLookup[i][n],o&&(o=o.d)&&(o._pt&&(o=Wu(o,n)),o&&o.modifier&&o.modifier(r[n],e,t[i],n))},zs=function(e,r){return{name:e,headless:1,rawVars:1,init:function(n,i,o){o._onInit=function(a){var l,c;if(We(i)&&(l={},bt(i,function(u){return l[u]=1}),i=l),r){l={};for(c in i)l[c]=r(i[c]);i=l}Vu(a,i)}}}},St=ps.registerPlugin({name:"attr",init:function(e,r,t,n,i){var o,a,l;this.tween=t;for(o in r)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",r[o],n,i,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,r){for(var t=r._pt;t;)Ze?t.set(t.t,t.p,t.b,t):t.r(e,t.d),t=t._next}},{name:"endArray",headless:1,init:function(e,r){for(var t=r.length;t--;)this.add(e,t,e[t]||0,r[t],0,0,0,0,0,1)}},zs("roundProps",oo),zs("modifiers"),zs("snap",Cl))||ps;De.version=pt.version=St.version="3.13.0";fl=1;Eo()&&Ln();J.Power0;J.Power1;J.Power2;J.Power3;J.Power4;J.Linear;J.Quad;J.Cubic;J.Quart;J.Quint;J.Strong;J.Elastic;J.Back;J.SteppedEase;J.Bounce;J.Sine;J.Expo;J.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ma,Ar,Pn,Xo,en,ga,Wo,Hu=function(){return typeof window<"u"},Tr={},Kr=180/Math.PI,On=Math.PI/180,yn=Math.atan2,_a=1e8,Vo=/([A-Z])/g,Uu=/(left|right|width|margin|padding|x)/i,qu=/[\s,\(]\S/,lr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},co=function(e,r){return r.set(r.t,r.p,Math.round((r.s+r.c*e)*1e4)/1e4+r.u,r)},Gu=function(e,r){return r.set(r.t,r.p,e===1?r.e:Math.round((r.s+r.c*e)*1e4)/1e4+r.u,r)},Zu=function(e,r){return r.set(r.t,r.p,e?Math.round((r.s+r.c*e)*1e4)/1e4+r.u:r.b,r)},Ku=function(e,r){var t=r.s+r.c*e;r.set(r.t,r.p,~~(t+(t<0?-.5:.5))+r.u,r)},Ul=function(e,r){return r.set(r.t,r.p,e?r.e:r.b,r)},ql=function(e,r){return r.set(r.t,r.p,e!==1?r.b:r.e,r)},Qu=function(e,r,t){return e.style[r]=t},Ju=function(e,r,t){return e.style.setProperty(r,t)},ef=function(e,r,t){return e._gsap[r]=t},tf=function(e,r,t){return e._gsap.scaleX=e._gsap.scaleY=t},rf=function(e,r,t,n,i){var o=e._gsap;o.scaleX=o.scaleY=t,o.renderTransform(i,o)},nf=function(e,r,t,n,i){var o=e._gsap;o[r]=t,o.renderTransform(i,o)},be="transform",wt=be+"Origin",sf=function s(e,r){var t=this,n=this.target,i=n.style,o=n._gsap;if(e in Tr&&i){if(this.tfm=this.tfm||{},e!=="transform")e=lr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return t.tfm[a]=vr(n,a)}):this.tfm[e]=o.x?o[e]:vr(n,e),e===wt&&(this.tfm.zOrigin=o.zOrigin);else return lr.transform.split(",").forEach(function(a){return s.call(t,a,r)});if(this.props.indexOf(be)>=0)return;o.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(wt,r,"")),e=be}(i||r)&&this.props.push(e,r,i[e])},Gl=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},of=function(){var e=this.props,r=this.target,t=r.style,n=r._gsap,i,o;for(i=0;i<e.length;i+=3)e[i+1]?e[i+1]===2?r[e[i]](e[i+2]):r[e[i]]=e[i+2]:e[i+2]?t[e[i]]=e[i+2]:t.removeProperty(e[i].substr(0,2)==="--"?e[i]:e[i].replace(Vo,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),r.setAttribute("data-svg-origin",this.svgo||"")),i=Wo(),(!i||!i.isStart)&&!t[be]&&(Gl(t),n.zOrigin&&t[wt]&&(t[wt]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},Zl=function(e,r){var t={target:e,props:[],revert:of,save:sf};return e._gsap||St.core.getCache(e),r&&e.style&&e.nodeType&&r.split(",").forEach(function(n){return t.save(n)}),t},Kl,uo=function(e,r){var t=Ar.createElementNS?Ar.createElementNS((r||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ar.createElement(e);return t&&t.style?t:Ar.createElement(e)},Ht=function s(e,r,t){var n=getComputedStyle(e);return n[r]||n.getPropertyValue(r.replace(Vo,"-$1").toLowerCase())||n.getPropertyValue(r)||!t&&s(e,zn(r)||r,1)||""},ya="O,Moz,ms,Ms,Webkit".split(","),zn=function(e,r,t){var n=r||en,i=n.style,o=5;if(e in i&&!t)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(ya[o]+e in i););return o<0?null:(o===3?"ms":o>=0?ya[o]:"")+e},fo=function(){Hu()&&window.document&&(ma=window,Ar=ma.document,Pn=Ar.documentElement,en=uo("div")||{style:{}},uo("div"),be=zn(be),wt=be+"Origin",en.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Kl=!!zn("perspective"),Wo=St.core.reverting,Xo=1)},va=function(e){var r=e.ownerSVGElement,t=uo("svg",r&&r.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=e.cloneNode(!0),i;n.style.display="block",t.appendChild(n),Pn.appendChild(t);try{i=n.getBBox()}catch{}return t.removeChild(n),Pn.removeChild(t),i},ba=function(e,r){for(var t=r.length;t--;)if(e.hasAttribute(r[t]))return e.getAttribute(r[t])},Ql=function(e){var r,t;try{r=e.getBBox()}catch{r=va(e),t=1}return r&&(r.width||r.height)||t||(r=va(e)),r&&!r.width&&!r.x&&!r.y?{x:+ba(e,["x","cx","x1"])||0,y:+ba(e,["y","cy","y1"])||0,width:0,height:0}:r},Jl=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Ql(e))},un=function(e,r){if(r){var t=e.style,n;r in Tr&&r!==wt&&(r=be),t.removeProperty?(n=r.substr(0,2),(n==="ms"||r.substr(0,6)==="webkit")&&(r="-"+r),t.removeProperty(n==="--"?r:r.replace(Vo,"-$1").toLowerCase())):t.removeAttribute(r)}},Ir=function(e,r,t,n,i,o){var a=new xt(e._pt,r,t,0,1,o?ql:Ul);return e._pt=a,a.b=n,a.e=i,e._props.push(t),a},xa={deg:1,rad:1,turn:1},af={grid:1,flex:1},Br=function s(e,r,t,n){var i=parseFloat(t)||0,o=(t+"").trim().substr((i+"").length)||"px",a=en.style,l=Uu.test(r),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,p=n==="px",h=n==="%",g,d,m,b;if(n===o||!i||xa[n]||xa[o])return i;if(o!=="px"&&!p&&(i=s(e,r,t,"px")),b=e.getCTM&&Jl(e),(h||o==="%")&&(Tr[r]||~r.indexOf("adius")))return g=b?e.getBBox()[l?"width":"height"]:e[u],Oe(h?i/g*f:i/100*g);if(a[l?"width":"height"]=f+(p?o:n),d=n!=="rem"&&~r.indexOf("adius")||n==="em"&&e.appendChild&&!c?e:e.parentNode,b&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===Ar||!d.appendChild)&&(d=Ar.body),m=d._gsap,m&&h&&m.width&&l&&m.time===At.time&&!m.uncache)return Oe(i/m.width*f);if(h&&(r==="height"||r==="width")){var y=e.style[r];e.style[r]=f+n,g=e[u],y?e.style[r]=y:un(e,r)}else(h||o==="%")&&!af[Ht(d,"display")]&&(a.position=Ht(e,"position")),d===e&&(a.position="static"),d.appendChild(en),g=en[u],d.removeChild(en),a.position="absolute";return l&&h&&(m=rn(d),m.time=At.time,m.width=d[u]),Oe(p?g*i/f:g&&i?f/g*i:0)},vr=function(e,r,t,n){var i;return Xo||fo(),r in lr&&r!=="transform"&&(r=lr[r],~r.indexOf(",")&&(r=r.split(",")[0])),Tr[r]&&r!=="transform"?(i=xi(e,n),i=r!=="transformOrigin"?i[r]:i.svg?i.origin:gs(Ht(e,wt))+" "+i.zOrigin+"px"):(i=e.style[r],(!i||i==="auto"||n||~(i+"").indexOf("calc("))&&(i=ms[r]&&ms[r](e,r,t)||Ht(e,r)||ml(e,r)||(r==="opacity"?1:0))),t&&!~(i+"").trim().indexOf(" ")?Br(e,r,i,t)+t:i},lf=function(e,r,t,n){if(!t||t==="none"){var i=zn(r,e,1),o=i&&Ht(e,i,1);o&&o!==t?(r=i,t=o):r==="borderColor"&&(t=Ht(e,"borderTopColor"))}var a=new xt(this._pt,e.style,r,0,1,Wl),l=0,c=0,u,f,p,h,g,d,m,b,y,x,w,_;if(a.b=t,a.e=n,t+="",n+="",n.substring(0,6)==="var(--"&&(n=Ht(e,n.substring(4,n.indexOf(")")))),n==="auto"&&(d=e.style[r],e.style[r]=n,n=Ht(e,r)||n,d?e.style[r]=d:un(e,r)),u=[t,n],Il(u),t=u[0],n=u[1],p=t.match(Sn)||[],_=n.match(Sn)||[],_.length){for(;f=Sn.exec(n);)m=f[0],y=n.substring(l,f.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),m!==(d=p[c++]||"")&&(h=parseFloat(d)||0,w=d.substr((h+"").length),m.charAt(1)==="="&&(m=Cn(h,m)+w),b=parseFloat(m),x=m.substr((b+"").length),l=Sn.lastIndex-x.length,x||(x=x||Nt.units[r]||w,l===n.length&&(n+=x,a.e+=x)),w!==x&&(h=Br(e,r,d,x)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:h,c:b-h,m:g&&g<4||r==="zIndex"?Math.round:0});a.c=l<n.length?n.substring(l,n.length):""}else a.r=r==="display"&&n==="none"?ql:Ul;return cl.test(n)&&(a.e=0),this._pt=a,a},wa={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},cf=function(e){var r=e.split(" "),t=r[0],n=r[1]||"50%";return(t==="top"||t==="bottom"||n==="left"||n==="right")&&(e=t,t=n,n=e),r[0]=wa[t]||t,r[1]=wa[n]||n,r.join(" ")},uf=function(e,r){if(r.tween&&r.tween._time===r.tween._dur){var t=r.t,n=t.style,i=r.u,o=t._gsap,a,l,c;if(i==="all"||i===!0)n.cssText="",l=1;else for(i=i.split(","),c=i.length;--c>-1;)a=i[c],Tr[a]&&(l=1,a=a==="transformOrigin"?wt:be),un(t,a);l&&(un(t,be),o&&(o.svg&&t.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",xi(t,1),o.uncache=1,Gl(n)))}},ms={clearProps:function(e,r,t,n,i){if(i.data!=="isFromStart"){var o=e._pt=new xt(e._pt,r,t,0,0,uf);return o.u=n,o.pr=-10,o.tween=i,e._props.push(t),1}}},bi=[1,0,0,1,0,0],ec={},tc=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Sa=function(e){var r=Ht(e,be);return tc(r)?bi:r.substr(7).match(ll).map(Oe)},Ho=function(e,r){var t=e._gsap||rn(e),n=e.style,i=Sa(e),o,a,l,c;return t.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,i=[l.a,l.b,l.c,l.d,l.e,l.f],i.join(",")==="1,0,0,1,0,0"?bi:i):(i===bi&&!e.offsetParent&&e!==Pn&&!t.svg&&(l=n.display,n.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Pn.appendChild(e)),i=Sa(e),l?n.display=l:un(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Pn.removeChild(e))),r&&i.length>6?[i[0],i[1],i[4],i[5],i[12],i[13]]:i)},ho=function(e,r,t,n,i,o){var a=e._gsap,l=i||Ho(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,p=a.yOffset||0,h=l[0],g=l[1],d=l[2],m=l[3],b=l[4],y=l[5],x=r.split(" "),w=parseFloat(x[0])||0,_=parseFloat(x[1])||0,C,v,S,k;t?l!==bi&&(v=h*m-g*d)&&(S=w*(m/v)+_*(-d/v)+(d*y-m*b)/v,k=w*(-g/v)+_*(h/v)-(h*y-g*b)/v,w=S,_=k):(C=Ql(e),w=C.x+(~x[0].indexOf("%")?w/100*C.width:w),_=C.y+(~(x[1]||x[0]).indexOf("%")?_/100*C.height:_)),n||n!==!1&&a.smooth?(b=w-c,y=_-u,a.xOffset=f+(b*h+y*d)-b,a.yOffset=p+(b*g+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=w,a.yOrigin=_,a.smooth=!!n,a.origin=r,a.originIsAbsolute=!!t,e.style[wt]="0px 0px",o&&(Ir(o,a,"xOrigin",c,w),Ir(o,a,"yOrigin",u,_),Ir(o,a,"xOffset",f,a.xOffset),Ir(o,a,"yOffset",p,a.yOffset)),e.setAttribute("data-svg-origin",w+" "+_)},xi=function(e,r){var t=e._gsap||new zl(e);if("x"in t&&!r&&!t.uncache)return t;var n=e.style,i=t.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Ht(e,wt)||"0",u,f,p,h,g,d,m,b,y,x,w,_,C,v,S,k,O,I,M,L,$,U,B,z,W,re,T,ce,Ve,kt,me,Te;return u=f=p=d=m=b=y=x=w=0,h=g=1,t.svg=!!(e.getCTM&&Jl(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[be]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[be]!=="none"?l[be]:"")),n.scale=n.rotate=n.translate="none"),v=Ho(e,t.svg),t.svg&&(t.uncache?(W=e.getBBox(),c=t.xOrigin-W.x+"px "+(t.yOrigin-W.y)+"px",z=""):z=!r&&e.getAttribute("data-svg-origin"),ho(e,z||c,!!z||t.originIsAbsolute,t.smooth!==!1,v)),_=t.xOrigin||0,C=t.yOrigin||0,v!==bi&&(I=v[0],M=v[1],L=v[2],$=v[3],u=U=v[4],f=B=v[5],v.length===6?(h=Math.sqrt(I*I+M*M),g=Math.sqrt($*$+L*L),d=I||M?yn(M,I)*Kr:0,y=L||$?yn(L,$)*Kr+d:0,y&&(g*=Math.abs(Math.cos(y*On))),t.svg&&(u-=_-(_*I+C*L),f-=C-(_*M+C*$))):(Te=v[6],kt=v[7],T=v[8],ce=v[9],Ve=v[10],me=v[11],u=v[12],f=v[13],p=v[14],S=yn(Te,Ve),m=S*Kr,S&&(k=Math.cos(-S),O=Math.sin(-S),z=U*k+T*O,W=B*k+ce*O,re=Te*k+Ve*O,T=U*-O+T*k,ce=B*-O+ce*k,Ve=Te*-O+Ve*k,me=kt*-O+me*k,U=z,B=W,Te=re),S=yn(-L,Ve),b=S*Kr,S&&(k=Math.cos(-S),O=Math.sin(-S),z=I*k-T*O,W=M*k-ce*O,re=L*k-Ve*O,me=$*O+me*k,I=z,M=W,L=re),S=yn(M,I),d=S*Kr,S&&(k=Math.cos(S),O=Math.sin(S),z=I*k+M*O,W=U*k+B*O,M=M*k-I*O,B=B*k-U*O,I=z,U=W),m&&Math.abs(m)+Math.abs(d)>359.9&&(m=d=0,b=180-b),h=Oe(Math.sqrt(I*I+M*M+L*L)),g=Oe(Math.sqrt(B*B+Te*Te)),S=yn(U,B),y=Math.abs(S)>2e-4?S*Kr:0,w=me?1/(me<0?-me:me):0),t.svg&&(z=e.getAttribute("transform"),t.forceCSS=e.setAttribute("transform","")||!tc(Ht(e,be)),z&&e.setAttribute("transform",z))),Math.abs(y)>90&&Math.abs(y)<270&&(i?(h*=-1,y+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),r=r||t.uncache,t.x=u-((t.xPercent=u&&(!r&&t.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*t.xPercent/100:0)+o,t.y=f-((t.yPercent=f&&(!r&&t.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*t.yPercent/100:0)+o,t.z=p+o,t.scaleX=Oe(h),t.scaleY=Oe(g),t.rotation=Oe(d)+a,t.rotationX=Oe(m)+a,t.rotationY=Oe(b)+a,t.skewX=y+a,t.skewY=x+a,t.transformPerspective=w+o,(t.zOrigin=parseFloat(c.split(" ")[2])||!r&&t.zOrigin||0)&&(n[wt]=gs(c)),t.xOffset=t.yOffset=0,t.force3D=Nt.force3D,t.renderTransform=t.svg?df:Kl?rc:ff,t.uncache=0,t},gs=function(e){return(e=e.split(" "))[0]+" "+e[1]},Fs=function(e,r,t){var n=it(r);return Oe(parseFloat(r)+parseFloat(Br(e,"x",t+"px",n)))+n},ff=function(e,r){r.z="0px",r.rotationY=r.rotationX="0deg",r.force3D=0,rc(e,r)},Gr="0deg",Hn="0px",Zr=") ",rc=function(e,r){var t=r||this,n=t.xPercent,i=t.yPercent,o=t.x,a=t.y,l=t.z,c=t.rotation,u=t.rotationY,f=t.rotationX,p=t.skewX,h=t.skewY,g=t.scaleX,d=t.scaleY,m=t.transformPerspective,b=t.force3D,y=t.target,x=t.zOrigin,w="",_=b==="auto"&&e&&e!==1||b===!0;if(x&&(f!==Gr||u!==Gr)){var C=parseFloat(u)*On,v=Math.sin(C),S=Math.cos(C),k;C=parseFloat(f)*On,k=Math.cos(C),o=Fs(y,o,v*k*-x),a=Fs(y,a,-Math.sin(C)*-x),l=Fs(y,l,S*k*-x+x)}m!==Hn&&(w+="perspective("+m+Zr),(n||i)&&(w+="translate("+n+"%, "+i+"%) "),(_||o!==Hn||a!==Hn||l!==Hn)&&(w+=l!==Hn||_?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Zr),c!==Gr&&(w+="rotate("+c+Zr),u!==Gr&&(w+="rotateY("+u+Zr),f!==Gr&&(w+="rotateX("+f+Zr),(p!==Gr||h!==Gr)&&(w+="skew("+p+", "+h+Zr),(g!==1||d!==1)&&(w+="scale("+g+", "+d+Zr),y.style[be]=w||"translate(0, 0)"},df=function(e,r){var t=r||this,n=t.xPercent,i=t.yPercent,o=t.x,a=t.y,l=t.rotation,c=t.skewX,u=t.skewY,f=t.scaleX,p=t.scaleY,h=t.target,g=t.xOrigin,d=t.yOrigin,m=t.xOffset,b=t.yOffset,y=t.forceCSS,x=parseFloat(o),w=parseFloat(a),_,C,v,S,k;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=On,c*=On,_=Math.cos(l)*f,C=Math.sin(l)*f,v=Math.sin(l-c)*-p,S=Math.cos(l-c)*p,c&&(u*=On,k=Math.tan(c-u),k=Math.sqrt(1+k*k),v*=k,S*=k,u&&(k=Math.tan(u),k=Math.sqrt(1+k*k),_*=k,C*=k)),_=Oe(_),C=Oe(C),v=Oe(v),S=Oe(S)):(_=f,S=p,C=v=0),(x&&!~(o+"").indexOf("px")||w&&!~(a+"").indexOf("px"))&&(x=Br(h,"x",o,"px"),w=Br(h,"y",a,"px")),(g||d||m||b)&&(x=Oe(x+g-(g*_+d*v)+m),w=Oe(w+d-(g*C+d*S)+b)),(n||i)&&(k=h.getBBox(),x=Oe(x+n/100*k.width),w=Oe(w+i/100*k.height)),k="matrix("+_+","+C+","+v+","+S+","+x+","+w+")",h.setAttribute("transform",k),y&&(h.style[be]=k)},hf=function(e,r,t,n,i){var o=360,a=We(i),l=parseFloat(i)*(a&&~i.indexOf("rad")?Kr:1),c=l-n,u=n+c+"deg",f,p;return a&&(f=i.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*_a)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*_a)%o-~~(c/o)*o)),e._pt=p=new xt(e._pt,r,t,n,c,Gu),p.e=u,p.u="deg",e._props.push(t),p},Ta=function(e,r){for(var t in r)e[t]=r[t];return e},pf=function(e,r,t){var n=Ta({},t._gsap),i="perspective,force3D,transformOrigin,svgOrigin",o=t.style,a,l,c,u,f,p,h,g;n.svg?(c=t.getAttribute("transform"),t.setAttribute("transform",""),o[be]=r,a=xi(t,1),un(t,be),t.setAttribute("transform",c)):(c=getComputedStyle(t)[be],o[be]=r,a=xi(t,1),o[be]=c);for(l in Tr)c=n[l],u=a[l],c!==u&&i.indexOf(l)<0&&(h=it(c),g=it(u),f=h!==g?Br(t,l,c,g):parseFloat(c),p=parseFloat(u),e._pt=new xt(e._pt,a,l,f,p-f,co),e._pt.u=g||0,e._props.push(l));Ta(a,n)};bt("padding,margin,Width,Radius",function(s,e){var r="Top",t="Right",n="Bottom",i="Left",o=(e<3?[r,t,n,i]:[r+i,r+t,n+t,n+i]).map(function(a){return e<2?s+a:"border"+a+s});ms[e>1?"border"+s:s]=function(a,l,c,u,f){var p,h;if(arguments.length<4)return p=o.map(function(g){return vr(a,g,c)}),h=p.join(" "),h.split(p[0]).length===5?p[0]:h;p=(u+"").split(" "),h={},o.forEach(function(g,d){return h[g]=p[d]=p[d]||p[(d-1)/2|0]}),a.init(l,h,f)}});var nc={name:"css",register:fo,targetTest:function(e){return e.style&&e.nodeType},init:function(e,r,t,n,i){var o=this._props,a=e.style,l=t.vars.startAt,c,u,f,p,h,g,d,m,b,y,x,w,_,C,v,S;Xo||fo(),this.styles=this.styles||Zl(e),S=this.styles.props,this.tween=t;for(d in r)if(d!=="autoRound"&&(u=r[d],!(Et[d]&&Fl(d,r,t,n,e,i)))){if(h=typeof u,g=ms[d],h==="function"&&(u=u.call(t,n,e,i),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=_i(u)),g)g(this,e,d,u,t)&&(v=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(d)+"").trim(),u+="",zr.lastIndex=0,zr.test(c)||(m=it(c),b=it(u)),b?m!==b&&(c=Br(e,d,c,b)+b):m&&(u+=m),this.add(a,"setProperty",c,u,n,i,0,0,d),o.push(d),S.push(d,0,a[d]);else if(h!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(t,n,e,i):l[d],We(c)&&~c.indexOf("random(")&&(c=_i(c)),it(c+"")||c==="auto"||(c+=Nt.units[d]||it(vr(e,d))||""),(c+"").charAt(1)==="="&&(c=vr(e,d))):c=vr(e,d),p=parseFloat(c),y=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),f=parseFloat(u),d in lr&&(d==="autoAlpha"&&(p===1&&vr(e,"visibility")==="hidden"&&f&&(p=0),S.push("visibility",0,a.visibility),Ir(this,a,"visibility",p?"inherit":"hidden",f?"inherit":"hidden",!f)),d!=="scale"&&d!=="transform"&&(d=lr[d],~d.indexOf(",")&&(d=d.split(",")[0]))),x=d in Tr,x){if(this.styles.save(d),h==="string"&&u.substring(0,6)==="var(--"&&(u=Ht(e,u.substring(4,u.indexOf(")"))),f=parseFloat(u)),w||(_=e._gsap,_.renderTransform&&!r.parseTransform||xi(e,r.parseTransform),C=r.smoothOrigin!==!1&&_.smooth,w=this._pt=new xt(this._pt,a,be,0,1,_.renderTransform,_,0,-1),w.dep=1),d==="scale")this._pt=new xt(this._pt,_,"scaleY",_.scaleY,(y?Cn(_.scaleY,y+f):f)-_.scaleY||0,co),this._pt.u=0,o.push("scaleY",d),d+="X";else if(d==="transformOrigin"){S.push(wt,0,a[wt]),u=cf(u),_.svg?ho(e,u,0,C,0,this):(b=parseFloat(u.split(" ")[2])||0,b!==_.zOrigin&&Ir(this,_,"zOrigin",_.zOrigin,b),Ir(this,a,d,gs(c),gs(u)));continue}else if(d==="svgOrigin"){ho(e,u,1,C,0,this);continue}else if(d in ec){hf(this,_,d,p,y?Cn(p,y+u):u);continue}else if(d==="smoothOrigin"){Ir(this,_,"smooth",_.smooth,u);continue}else if(d==="force3D"){_[d]=u;continue}else if(d==="transform"){pf(this,u,e);continue}}else d in a||(d=zn(d)||d);if(x||(f||f===0)&&(p||p===0)&&!qu.test(u)&&d in a)m=(c+"").substr((p+"").length),f||(f=0),b=it(u)||(d in Nt.units?Nt.units[d]:m),m!==b&&(p=Br(e,d,c,b)),this._pt=new xt(this._pt,x?_:a,d,p,(y?Cn(p,y+f):f)-p,!x&&(b==="px"||d==="zIndex")&&r.autoRound!==!1?Ku:co),this._pt.u=b||0,m!==b&&b!=="%"&&(this._pt.b=c,this._pt.r=Zu);else if(d in a)lf.call(this,e,d,c,y?y+u:u);else if(d in e)this.add(e,d,c||e[d],y?y+u:u,n,i);else if(d!=="parseTransform"){Ao(d,u);continue}x||(d in a?S.push(d,0,a[d]):typeof e[d]=="function"?S.push(d,2,e[d]()):S.push(d,1,c||e[d])),o.push(d)}}v&&Vl(this)},render:function(e,r){if(r.tween._time||!Wo())for(var t=r._pt;t;)t.r(e,t.d),t=t._next;else r.styles.revert()},get:vr,aliases:lr,getSetter:function(e,r,t){var n=lr[r];return n&&n.indexOf(",")<0&&(r=n),r in Tr&&r!==wt&&(e._gsap.x||vr(e,"x"))?t&&ga===t?r==="scale"?tf:ef:(ga=t||{})&&(r==="scale"?rf:nf):e.style&&!Mo(e.style[r])?Qu:~r.indexOf("-")?Ju:Bo(e,r)},core:{_removeProperty:un,_getMatrix:Ho}};St.utils.checkPrefix=zn;St.core.getStyleSaver=Zl;(function(s,e,r,t){var n=bt(s+","+e+","+r,function(i){Tr[i]=1});bt(e,function(i){Nt.units[i]="deg",ec[i]=1}),lr[n[13]]=s+","+e,bt(t,function(i){var o=i.split(":");lr[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");bt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Nt.units[s]="px"});St.registerPlugin(nc);var te=St.registerPlugin(nc)||St;te.core.Tween;const mf="/images/elite-edge.webp",gf="/images/chip-8.webp",_f="/images/macos-neovim.webp",yf="/images/mintex.webp",vf="/images/unity-book.webp",bf="/images/planet-gravity.webp",xf="/images/interm.webp",wf="/images/blog.webp",Sf="/images/showcase.webp",Tf=[mf,gf,_f,yf,vf,bf,xf,wf],kf=[Sf],ic="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.83337%2014.1667L14.1667%205.83334M14.1667%205.83334H5.83337M14.1667%205.83334V14.1667'%20stroke='%231E1E1E'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";function Cf(){const s=[{label:"About",href:"#about"},{label:"Projects",href:"#work"},{label:"Praxis",href:"/blog"},{label:"Showcase",href:"/showcase"},{label:"Resume",href:"/pages/Benjamin-Lertpunyaroj-Resume.pdf"}],e=A.useRef([]);e.current=[];const[r,t]=A.useState(null),n=i=>{i&&!e.current.includes(i)&&e.current.push(i)};return A.useEffect(()=>{e.current.forEach((i,o)=>{te.to(i,{opacity:r===null||r===o?1:.35,duration:.25,ease:"power1.out"})})},[r]),R.jsxs("header",{className:"flex justify-between items-center w-full h-30 bg-white text-[18px]",children:[R.jsxs("a",{href:"/",className:"relative pl-7 sm:pl-20 group flex items-center overflow-hidden select-none",children:[R.jsx("div",{className:"mr-1.5",children:"©"}),R.jsx("div",{className:"whitespace-nowrap ease-custom-cubic transition-transform duration-500 group-hover:[transform:translateX(calc(-100%-10rem))]",children:"coded by"}),R.jsx("div",{className:"whitespace-nowrap ease-custom-cubic px-1 transition-transform duration-500 group-hover:-translate-x-19",children:"Benjamin"}),R.jsx("div",{className:"whitespace-nowrap ease-custom-cubic translate-x-full transition-transform duration-500 group-hover:-translate-x-19",children:"Lobos Lertpunyaroj"})]}),R.jsx("nav",{className:"hidden md:flex gap-6 justify-center md:pr-20 lg:pr-50",children:s.map(({label:i,href:o},a)=>R.jsx("a",{href:o,ref:n,className:"font-interregular text-black select-none",onMouseEnter:()=>{t(a)},onMouseLeave:()=>{t(null)},children:i.split("").map((l,c)=>R.jsx("span",{className:"inline-block char whitespace-pre",children:l===" "?" ":l},c))},i))}),R.jsx("div",{className:"hidden lg:inline-flex items-center gap-2 pr-20",children:R.jsxs("a",{href:"#contact",className:"inline-flex items-center group",children:[R.jsx("span",{className:"font-interregular text-black",children:"Contact"}),R.jsx("img",{src:ic,className:"w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1",alt:""})]})})]})}function Pf(s,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(s,t.key,t)}}function Of(s,e,r){return e&&Pf(s.prototype,e),s}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ge,es,It,jr,Nr,Rn,sc,Qr,oi,oc,xr,Jt,ac,lc=function(){return Ge||typeof window<"u"&&(Ge=window.gsap)&&Ge.registerPlugin&&Ge},cc=1,kn=[],Z=[],ur=[],ai=Date.now,po=function(e,r){return r},Rf=function(){var e=oi.core,r=e.bridge||{},t=e._scrollers,n=e._proxies;t.push.apply(t,Z),n.push.apply(n,ur),Z=t,ur=n,po=function(o,a){return r[o](a)}},Fr=function(e,r){return~ur.indexOf(e)&&ur[ur.indexOf(e)+1][r]},li=function(e){return!!~oc.indexOf(e)},ut=function(e,r,t,n,i){return e.addEventListener(r,t,{passive:n!==!1,capture:!!i})},ct=function(e,r,t,n){return e.removeEventListener(r,t,!!n)},Ii="scrollLeft",ji="scrollTop",mo=function(){return xr&&xr.isPressed||Z.cache++},_s=function(e,r){var t=function n(i){if(i||i===0){cc&&(It.history.scrollRestoration="manual");var o=xr&&xr.isPressed;i=n.v=Math.round(i)||(xr&&xr.iOS?1:0),e(i),n.cacheID=Z.cache,o&&po("ss",i)}else(r||Z.cache!==n.cacheID||po("ref"))&&(n.cacheID=Z.cache,n.v=e());return n.v+n.offset};return t.offset=0,e&&t},mt={s:Ii,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:_s(function(s){return arguments.length?It.scrollTo(s,ze.sc()):It.pageXOffset||jr[Ii]||Nr[Ii]||Rn[Ii]||0})},ze={s:ji,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:mt,sc:_s(function(s){return arguments.length?It.scrollTo(mt.sc(),s):It.pageYOffset||jr[ji]||Nr[ji]||Rn[ji]||0})},yt=function(e,r){return(r&&r._ctx&&r._ctx.selector||Ge.utils.toArray)(e)[0]||(typeof e=="string"&&Ge.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Mf=function(e,r){for(var t=r.length;t--;)if(r[t]===e||r[t].contains(e))return!0;return!1},Yr=function(e,r){var t=r.s,n=r.sc;li(e)&&(e=jr.scrollingElement||Nr);var i=Z.indexOf(e),o=n===ze.sc?1:2;!~i&&(i=Z.push(e)-1),Z[i+o]||ut(e,"scroll",mo);var a=Z[i+o],l=a||(Z[i+o]=_s(Fr(e,t),!0)||(li(e)?n:_s(function(c){return arguments.length?e[t]=c:e[t]})));return l.target=e,a||(l.smooth=Ge.getProperty(e,"scrollBehavior")==="smooth"),l},go=function(e,r,t){var n=e,i=e,o=ai(),a=o,l=r||50,c=Math.max(500,l*3),u=function(g,d){var m=ai();d||m-o>l?(i=n,n=g,a=o,o=m):t?n+=g:n=i+(g-i)/(m-a)*(o-a)},f=function(){i=n=t?0:n,a=o=0},p=function(g){var d=a,m=i,b=ai();return(g||g===0)&&g!==n&&u(g),o===a||b-a>c?0:(n+(t?m:-m))/((t?b:o)-d)*1e3};return{update:u,reset:f,getVelocity:p}},Un=function(e,r){return r&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},ka=function(e){var r=Math.max.apply(Math,e),t=Math.min.apply(Math,e);return Math.abs(r)>=Math.abs(t)?r:t},uc=function(){oi=Ge.core.globals().ScrollTrigger,oi&&oi.core&&Rf()},fc=function(e){return Ge=e||lc(),!es&&Ge&&typeof document<"u"&&document.body&&(It=window,jr=document,Nr=jr.documentElement,Rn=jr.body,oc=[It,jr,Nr,Rn],Ge.utils.clamp,ac=Ge.core.context||function(){},Qr="onpointerenter"in Rn?"pointer":"mouse",sc=Re.isTouch=It.matchMedia&&It.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in It||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Jt=Re.eventTypes=("ontouchstart"in Nr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Nr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return cc=0},500),uc(),es=1),es};mt.op=ze;Z.cache=0;var Re=function(){function s(r){this.init(r)}var e=s.prototype;return e.init=function(t){es||fc(Ge)||console.warn("Please gsap.registerPlugin(Observer)"),oi||uc();var n=t.tolerance,i=t.dragMinimum,o=t.type,a=t.target,l=t.lineHeight,c=t.debounce,u=t.preventDefault,f=t.onStop,p=t.onStopDelay,h=t.ignore,g=t.wheelSpeed,d=t.event,m=t.onDragStart,b=t.onDragEnd,y=t.onDrag,x=t.onPress,w=t.onRelease,_=t.onRight,C=t.onLeft,v=t.onUp,S=t.onDown,k=t.onChangeX,O=t.onChangeY,I=t.onChange,M=t.onToggleX,L=t.onToggleY,$=t.onHover,U=t.onHoverEnd,B=t.onMove,z=t.ignoreCheck,W=t.isNormalizer,re=t.onGestureStart,T=t.onGestureEnd,ce=t.onWheel,Ve=t.onEnable,kt=t.onDisable,me=t.onClick,Te=t.scrollSpeed,je=t.capture,he=t.allowClicks,at=t.lockAxis,Ke=t.onLockAxis;this.target=a=yt(a)||Nr,this.vars=t,h&&(h=Ge.utils.toArray(h)),n=n||1e-9,i=i||0,g=g||1,Te=Te||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(It.getComputedStyle(Rn).lineHeight)||22);var kr,lt,gt,ee,ke,_t,Ct,P=this,Pt=0,hr=0,Cr=t.passive||!u&&t.passive!==!1,xe=Yr(a,mt),pr=Yr(a,ze),Pr=xe(),Wr=pr(),Fe=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Jt[0]==="pointerdown",Or=li(a),Ce=a.ownerDocument||jr,qt=[0,0,0],$t=[0,0,0],mr=0,Yn=function(){return mr=ai()},Me=function(F,ne){return(P.event=F)&&h&&Mf(F.target,h)||ne&&Fe&&F.pointerType!=="touch"||z&&z(F,ne)},Mi=function(){P._vx.reset(),P._vy.reset(),lt.pause(),f&&f(P)},gr=function(){var F=P.deltaX=ka(qt),ne=P.deltaY=ka($t),D=Math.abs(F)>=n,Y=Math.abs(ne)>=n;I&&(D||Y)&&I(P,F,ne,qt,$t),D&&(_&&P.deltaX>0&&_(P),C&&P.deltaX<0&&C(P),k&&k(P),M&&P.deltaX<0!=Pt<0&&M(P),Pt=P.deltaX,qt[0]=qt[1]=qt[2]=0),Y&&(S&&P.deltaY>0&&S(P),v&&P.deltaY<0&&v(P),O&&O(P),L&&P.deltaY<0!=hr<0&&L(P),hr=P.deltaY,$t[0]=$t[1]=$t[2]=0),(ee||gt)&&(B&&B(P),gt&&(m&&gt===1&&m(P),y&&y(P),gt=0),ee=!1),_t&&!(_t=!1)&&Ke&&Ke(P),ke&&(ce(P),ke=!1),kr=0},mn=function(F,ne,D){qt[D]+=F,$t[D]+=ne,P._vx.update(F),P._vy.update(ne),c?kr||(kr=requestAnimationFrame(gr)):gr()},gn=function(F,ne){at&&!Ct&&(P.axis=Ct=Math.abs(F)>Math.abs(ne)?"x":"y",_t=!0),Ct!=="y"&&(qt[2]+=F,P._vx.update(F,!0)),Ct!=="x"&&($t[2]+=ne,P._vy.update(ne,!0)),c?kr||(kr=requestAnimationFrame(gr)):gr()},Rr=function(F){if(!Me(F,1)){F=Un(F,u);var ne=F.clientX,D=F.clientY,Y=ne-P.x,N=D-P.y,X=P.isDragging;P.x=ne,P.y=D,(X||(Y||N)&&(Math.abs(P.startX-ne)>=i||Math.abs(P.startY-D)>=i))&&(gt=X?2:1,X||(P.isDragging=!0),gn(Y,N))}},Vr=P.onPress=function(V){Me(V,1)||V&&V.button||(P.axis=Ct=null,lt.pause(),P.isPressed=!0,V=Un(V),Pt=hr=0,P.startX=P.x=V.clientX,P.startY=P.y=V.clientY,P._vx.reset(),P._vy.reset(),ut(W?a:Ce,Jt[1],Rr,Cr,!0),P.deltaX=P.deltaY=0,x&&x(P))},K=P.onRelease=function(V){if(!Me(V,1)){ct(W?a:Ce,Jt[1],Rr,!0);var F=!isNaN(P.y-P.startY),ne=P.isDragging,D=ne&&(Math.abs(P.x-P.startX)>3||Math.abs(P.y-P.startY)>3),Y=Un(V);!D&&F&&(P._vx.reset(),P._vy.reset(),u&&he&&Ge.delayedCall(.08,function(){if(ai()-mr>300&&!V.defaultPrevented){if(V.target.click)V.target.click();else if(Ce.createEvent){var N=Ce.createEvent("MouseEvents");N.initMouseEvent("click",!0,!0,It,1,Y.screenX,Y.screenY,Y.clientX,Y.clientY,!1,!1,!1,!1,0,null),V.target.dispatchEvent(N)}}})),P.isDragging=P.isGesturing=P.isPressed=!1,f&&ne&&!W&&lt.restart(!0),gt&&gr(),b&&ne&&b(P),w&&w(P,D)}},Hr=function(F){return F.touches&&F.touches.length>1&&(P.isGesturing=!0)&&re(F,P.isDragging)},Gt=function(){return(P.isGesturing=!1)||T(P)},Zt=function(F){if(!Me(F)){var ne=xe(),D=pr();mn((ne-Pr)*Te,(D-Wr)*Te,1),Pr=ne,Wr=D,f&&lt.restart(!0)}},Kt=function(F){if(!Me(F)){F=Un(F,u),ce&&(ke=!0);var ne=(F.deltaMode===1?l:F.deltaMode===2?It.innerHeight:1)*g;mn(F.deltaX*ne,F.deltaY*ne,0),f&&!W&&lt.restart(!0)}},Ur=function(F){if(!Me(F)){var ne=F.clientX,D=F.clientY,Y=ne-P.x,N=D-P.y;P.x=ne,P.y=D,ee=!0,f&&lt.restart(!0),(Y||N)&&gn(Y,N)}},_n=function(F){P.event=F,$(P)},_r=function(F){P.event=F,U(P)},Xn=function(F){return Me(F)||Un(F,u)&&me(P)};lt=P._dc=Ge.delayedCall(p||.25,Mi).pause(),P.deltaX=P.deltaY=0,P._vx=go(0,50,!0),P._vy=go(0,50,!0),P.scrollX=xe,P.scrollY=pr,P.isDragging=P.isGesturing=P.isPressed=!1,ac(this),P.enable=function(V){return P.isEnabled||(ut(Or?Ce:a,"scroll",mo),o.indexOf("scroll")>=0&&ut(Or?Ce:a,"scroll",Zt,Cr,je),o.indexOf("wheel")>=0&&ut(a,"wheel",Kt,Cr,je),(o.indexOf("touch")>=0&&sc||o.indexOf("pointer")>=0)&&(ut(a,Jt[0],Vr,Cr,je),ut(Ce,Jt[2],K),ut(Ce,Jt[3],K),he&&ut(a,"click",Yn,!0,!0),me&&ut(a,"click",Xn),re&&ut(Ce,"gesturestart",Hr),T&&ut(Ce,"gestureend",Gt),$&&ut(a,Qr+"enter",_n),U&&ut(a,Qr+"leave",_r),B&&ut(a,Qr+"move",Ur)),P.isEnabled=!0,P.isDragging=P.isGesturing=P.isPressed=ee=gt=!1,P._vx.reset(),P._vy.reset(),Pr=xe(),Wr=pr(),V&&V.type&&Vr(V),Ve&&Ve(P)),P},P.disable=function(){P.isEnabled&&(kn.filter(function(V){return V!==P&&li(V.target)}).length||ct(Or?Ce:a,"scroll",mo),P.isPressed&&(P._vx.reset(),P._vy.reset(),ct(W?a:Ce,Jt[1],Rr,!0)),ct(Or?Ce:a,"scroll",Zt,je),ct(a,"wheel",Kt,je),ct(a,Jt[0],Vr,je),ct(Ce,Jt[2],K),ct(Ce,Jt[3],K),ct(a,"click",Yn,!0),ct(a,"click",Xn),ct(Ce,"gesturestart",Hr),ct(Ce,"gestureend",Gt),ct(a,Qr+"enter",_n),ct(a,Qr+"leave",_r),ct(a,Qr+"move",Ur),P.isEnabled=P.isPressed=P.isDragging=!1,kt&&kt(P))},P.kill=P.revert=function(){P.disable();var V=kn.indexOf(P);V>=0&&kn.splice(V,1),xr===P&&(xr=0)},kn.push(P),W&&li(a)&&(xr=P),P.enable(d)},Of(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s}();Re.version="3.13.0";Re.create=function(s){return new Re(s)};Re.register=fc;Re.getAll=function(){return kn.slice()};Re.getById=function(s){return kn.filter(function(e){return e.vars.id===s})[0]};lc()&&Ge.registerPlugin(Re);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var j,xn,G,pe,Dt,le,Uo,ys,wi,ci,Qn,Ni,rt,Cs,_o,dt,Ca,Pa,wn,dc,$s,hc,ft,yo,pc,mc,Er,vo,qo,Mn,Go,vs,bo,Bs,Li=1,nt=Date.now,Ys=nt(),Ut=0,Jn=0,Oa=function(e,r,t){var n=Mt(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return t["_"+r+"Clamp"]=n,n?e.substr(6,e.length-7):e},Ra=function(e,r){return r&&(!Mt(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Ef=function s(){return Jn&&requestAnimationFrame(s)},Ma=function(){return Cs=1},Ea=function(){return Cs=0},ir=function(e){return e},ei=function(e){return Math.round(e*1e5)/1e5||0},gc=function(){return typeof window<"u"},_c=function(){return j||gc()&&(j=window.gsap)&&j.registerPlugin&&j},fn=function(e){return!!~Uo.indexOf(e)},yc=function(e){return(e==="Height"?Go:G["inner"+e])||Dt["client"+e]||le["client"+e]},vc=function(e){return Fr(e,"getBoundingClientRect")||(fn(e)?function(){return ss.width=G.innerWidth,ss.height=Go,ss}:function(){return br(e)})},Df=function(e,r,t){var n=t.d,i=t.d2,o=t.a;return(o=Fr(e,"getBoundingClientRect"))?function(){return o()[n]}:function(){return(r?yc(i):e["client"+i])||0}},Af=function(e,r){return!r||~ur.indexOf(e)?vc(e):function(){return ss}},cr=function(e,r){var t=r.s,n=r.d2,i=r.d,o=r.a;return Math.max(0,(t="scroll"+n)&&(o=Fr(e,t))?o()-vc(e)()[i]:fn(e)?(Dt[t]||le[t])-yc(n):e[t]-e["offset"+n])},zi=function(e,r){for(var t=0;t<wn.length;t+=3)(!r||~r.indexOf(wn[t+1]))&&e(wn[t],wn[t+1],wn[t+2])},Mt=function(e){return typeof e=="string"},st=function(e){return typeof e=="function"},ti=function(e){return typeof e=="number"},Jr=function(e){return typeof e=="object"},qn=function(e,r,t){return e&&e.progress(r?0:1)&&t&&e.pause()},Xs=function(e,r){if(e.enabled){var t=e._ctx?e._ctx.add(function(){return r(e)}):r(e);t&&t.totalTime&&(e.callbackAnimation=t)}},vn=Math.abs,bc="left",xc="top",Zo="right",Ko="bottom",an="width",ln="height",ui="Right",fi="Left",di="Top",hi="Bottom",Ee="padding",Yt="margin",Fn="Width",Qo="Height",Le="px",Xt=function(e){return G.getComputedStyle(e)},If=function(e){var r=Xt(e).position;e.style.position=r==="absolute"||r==="fixed"?r:"relative"},Da=function(e,r){for(var t in r)t in e||(e[t]=r[t]);return e},br=function(e,r){var t=r&&Xt(e)[_o]!=="matrix(1, 0, 0, 1, 0, 0)"&&j.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect();return t&&t.progress(0).kill(),n},bs=function(e,r){var t=r.d2;return e["offset"+t]||e["client"+t]||0},wc=function(e){var r=[],t=e.labels,n=e.duration(),i;for(i in t)r.push(t[i]/n);return r},jf=function(e){return function(r){return j.utils.snap(wc(e),r)}},Jo=function(e){var r=j.utils.snap(e),t=Array.isArray(e)&&e.slice(0).sort(function(n,i){return n-i});return t?function(n,i,o){o===void 0&&(o=.001);var a;if(!i)return r(n);if(i>0){for(n-=o,a=0;a<t.length;a++)if(t[a]>=n)return t[a];return t[a-1]}else for(a=t.length,n+=o;a--;)if(t[a]<=n)return t[a];return t[0]}:function(n,i,o){o===void 0&&(o=.001);var a=r(n);return!i||Math.abs(a-n)<o||a-n<0==i<0?a:r(i<0?n-e:n+e)}},Nf=function(e){return function(r,t){return Jo(wc(e))(r,t.direction)}},Fi=function(e,r,t,n){return t.split(",").forEach(function(i){return e(r,i,n)})},Xe=function(e,r,t,n,i){return e.addEventListener(r,t,{passive:!n,capture:!!i})},Be=function(e,r,t,n){return e.removeEventListener(r,t,!!n)},$i=function(e,r,t){t=t&&t.wheelHandler,t&&(e(r,"wheel",t),e(r,"touchmove",t))},Aa={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Bi={toggleActions:"play",anticipatePin:0},xs={top:0,left:0,center:.5,bottom:1,right:1},ts=function(e,r){if(Mt(e)){var t=e.indexOf("="),n=~t?+(e.charAt(t-1)+1)*parseFloat(e.substr(t+1)):0;~t&&(e.indexOf("%")>t&&(n*=r/100),e=e.substr(0,t-1)),e=n+(e in xs?xs[e]*r:~e.indexOf("%")?parseFloat(e)*r/100:parseFloat(e)||0)}return e},Yi=function(e,r,t,n,i,o,a,l){var c=i.startColor,u=i.endColor,f=i.fontSize,p=i.indent,h=i.fontWeight,g=pe.createElement("div"),d=fn(t)||Fr(t,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,b=d?le:t,y=e.indexOf("start")!==-1,x=y?c:u,w="border-color:"+x+";font-size:"+f+";color:"+x+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return w+="position:"+((m||l)&&d?"fixed;":"absolute;"),(m||l||!d)&&(w+=(n===ze?Zo:Ko)+":"+(o+parseFloat(p))+"px;"),a&&(w+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=y,g.setAttribute("class","gsap-marker-"+e+(r?" marker-"+r:"")),g.style.cssText=w,g.innerText=r||r===0?e+"-"+r:e,b.children[0]?b.insertBefore(g,b.children[0]):b.appendChild(g),g._offset=g["offset"+n.op.d2],rs(g,0,n,y),g},rs=function(e,r,t,n){var i={display:"block"},o=t[n?"os2":"p2"],a=t[n?"p2":"os2"];e._isFlipped=n,i[t.a+"Percent"]=n?-100:0,i[t.a]=n?"1px":0,i["border"+o+Fn]=1,i["border"+a+Fn]=0,i[t.p]=r+"px",j.set(e,i)},q=[],xo={},Si,Ia=function(){return nt()-Ut>34&&(Si||(Si=requestAnimationFrame(wr)))},bn=function(){(!ft||!ft.isPressed||ft.startX>le.clientWidth)&&(Z.cache++,ft?Si||(Si=requestAnimationFrame(wr)):wr(),Ut||hn("scrollStart"),Ut=nt())},Ws=function(){mc=G.innerWidth,pc=G.innerHeight},ri=function(e){Z.cache++,(e===!0||!rt&&!hc&&!pe.fullscreenElement&&!pe.webkitFullscreenElement&&(!yo||mc!==G.innerWidth||Math.abs(G.innerHeight-pc)>G.innerHeight*.25))&&ys.restart(!0)},dn={},Lf=[],Sc=function s(){return Be(H,"scrollEnd",s)||tn(!0)},hn=function(e){return dn[e]&&dn[e].map(function(r){return r()})||Lf},Rt=[],Tc=function(e){for(var r=0;r<Rt.length;r+=5)(!e||Rt[r+4]&&Rt[r+4].query===e)&&(Rt[r].style.cssText=Rt[r+1],Rt[r].getBBox&&Rt[r].setAttribute("transform",Rt[r+2]||""),Rt[r+3].uncache=1)},ea=function(e,r){var t;for(dt=0;dt<q.length;dt++)t=q[dt],t&&(!r||t._ctx===r)&&(e?t.kill(1):t.revert(!0,!0));vs=!0,r&&Tc(r),r||hn("revert")},kc=function(e,r){Z.cache++,(r||!ht)&&Z.forEach(function(t){return st(t)&&t.cacheID++&&(t.rec=0)}),Mt(e)&&(G.history.scrollRestoration=qo=e)},ht,cn=0,ja,zf=function(){if(ja!==cn){var e=ja=cn;requestAnimationFrame(function(){return e===cn&&tn(!0)})}},Cc=function(){le.appendChild(Mn),Go=!ft&&Mn.offsetHeight||G.innerHeight,le.removeChild(Mn)},Na=function(e){return wi(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(r){return r.style.display=e?"none":"block"})},tn=function(e,r){if(Dt=pe.documentElement,le=pe.body,Uo=[G,pe,Dt,le],Ut&&!e&&!vs){Xe(H,"scrollEnd",Sc);return}Cc(),ht=H.isRefreshing=!0,Z.forEach(function(n){return st(n)&&++n.cacheID&&(n.rec=n())});var t=hn("refreshInit");dc&&H.sort(),r||ea(),Z.forEach(function(n){st(n)&&(n.smooth&&(n.target.style.scrollBehavior="auto"),n(0))}),q.slice(0).forEach(function(n){return n.refresh()}),vs=!1,q.forEach(function(n){if(n._subPinOffset&&n.pin){var i=n.vars.horizontal?"offsetWidth":"offsetHeight",o=n.pin[i];n.revert(!0,1),n.adjustPinSpacing(n.pin[i]-o),n.refresh()}}),bo=1,Na(!0),q.forEach(function(n){var i=cr(n.scroller,n._dir),o=n.vars.end==="max"||n._endClamp&&n.end>i,a=n._startClamp&&n.start>=i;(o||a)&&n.setPositions(a?i-1:n.start,o?Math.max(a?i:n.start+1,i):n.end,!0)}),Na(!1),bo=0,t.forEach(function(n){return n&&n.render&&n.render(-1)}),Z.forEach(function(n){st(n)&&(n.smooth&&requestAnimationFrame(function(){return n.target.style.scrollBehavior="smooth"}),n.rec&&n(n.rec))}),kc(qo,1),ys.pause(),cn++,ht=2,wr(2),q.forEach(function(n){return st(n.vars.onRefresh)&&n.vars.onRefresh(n)}),ht=H.isRefreshing=!1,hn("refresh")},wo=0,ns=1,pi,wr=function(e){if(e===2||!ht&&!vs){H.isUpdating=!0,pi&&pi.update(0);var r=q.length,t=nt(),n=t-Ys>=50,i=r&&q[0].scroll();if(ns=wo>i?-1:1,ht||(wo=i),n&&(Ut&&!Cs&&t-Ut>200&&(Ut=0,hn("scrollEnd")),Qn=Ys,Ys=t),ns<0){for(dt=r;dt-- >0;)q[dt]&&q[dt].update(0,n);ns=1}else for(dt=0;dt<r;dt++)q[dt]&&q[dt].update(0,n);H.isUpdating=!1}Si=0},So=[bc,xc,Ko,Zo,Yt+hi,Yt+ui,Yt+di,Yt+fi,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],is=So.concat([an,ln,"boxSizing","max"+Fn,"max"+Qo,"position",Yt,Ee,Ee+di,Ee+ui,Ee+hi,Ee+fi]),Ff=function(e,r,t){En(t);var n=e._gsap;if(n.spacerIsNative)En(n.spacerState);else if(e._gsap.swappedIn){var i=r.parentNode;i&&(i.insertBefore(e,r),i.removeChild(r))}e._gsap.swappedIn=!1},Vs=function(e,r,t,n){if(!e._gsap.swappedIn){for(var i=So.length,o=r.style,a=e.style,l;i--;)l=So[i],o[l]=t[l];o.position=t.position==="absolute"?"absolute":"relative",t.display==="inline"&&(o.display="inline-block"),a[Ko]=a[Zo]="auto",o.flexBasis=t.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[an]=bs(e,mt)+Le,o[ln]=bs(e,ze)+Le,o[Ee]=a[Yt]=a[xc]=a[bc]="0",En(n),a[an]=a["max"+Fn]=t[an],a[ln]=a["max"+Qo]=t[ln],a[Ee]=t[Ee],e.parentNode!==r&&(e.parentNode.insertBefore(r,e),r.appendChild(e)),e._gsap.swappedIn=!0}},$f=/([A-Z])/g,En=function(e){if(e){var r=e.t.style,t=e.length,n=0,i,o;for((e.t._gsap||j.core.getCache(e.t)).uncache=1;n<t;n+=2)o=e[n+1],i=e[n],o?r[i]=o:r[i]&&r.removeProperty(i.replace($f,"-$1").toLowerCase())}},Xi=function(e){for(var r=is.length,t=e.style,n=[],i=0;i<r;i++)n.push(is[i],t[is[i]]);return n.t=e,n},Bf=function(e,r,t){for(var n=[],i=e.length,o=t?8:0,a;o<i;o+=2)a=e[o],n.push(a,a in r?r[a]:e[o+1]);return n.t=e.t,n},ss={left:0,top:0},La=function(e,r,t,n,i,o,a,l,c,u,f,p,h,g){st(e)&&(e=e(l)),Mt(e)&&e.substr(0,3)==="max"&&(e=p+(e.charAt(4)==="="?ts("0"+e.substr(3),t):0));var d=h?h.time():0,m,b,y;if(h&&h.seek(0),isNaN(e)||(e=+e),ti(e))h&&(e=j.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,p,e)),a&&rs(a,t,n,!0);else{st(r)&&(r=r(l));var x=(e||"0").split(" "),w,_,C,v;y=yt(r,l)||le,w=br(y)||{},(!w||!w.left&&!w.top)&&Xt(y).display==="none"&&(v=y.style.display,y.style.display="block",w=br(y),v?y.style.display=v:y.style.removeProperty("display")),_=ts(x[0],w[n.d]),C=ts(x[1]||"0",t),e=w[n.p]-c[n.p]-u+_+i-C,a&&rs(a,C,n,t-C<20||a._isStart&&C>20),t-=t-C}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var S=e+t,k=o._isStart;m="scroll"+n.d2,rs(o,S,n,k&&S>20||!k&&(f?Math.max(le[m],Dt[m]):o.parentNode[m])<=S+1),f&&(c=br(a),f&&(o.style[n.op.p]=c[n.op.p]-n.op.m-o._offset+Le))}return h&&y&&(m=br(y),h.seek(p),b=br(y),h._caScrollDist=m[n.p]-b[n.p],e=e/h._caScrollDist*p),h&&h.seek(d),h?e:Math.round(e)},Yf=/(webkit|moz|length|cssText|inset)/i,za=function(e,r,t,n){if(e.parentNode!==r){var i=e.style,o,a;if(r===le){e._stOrig=i.cssText,a=Xt(e);for(o in a)!+o&&!Yf.test(o)&&a[o]&&typeof i[o]=="string"&&o!=="0"&&(i[o]=a[o]);i.top=t,i.left=n}else i.cssText=e._stOrig;j.core.getCache(e).uncache=1,r.appendChild(e)}},Pc=function(e,r,t){var n=r,i=n;return function(o){var a=Math.round(e());return a!==n&&a!==i&&Math.abs(a-n)>3&&Math.abs(a-i)>3&&(o=a,t&&t()),i=n,n=Math.round(o),n}},Wi=function(e,r,t){var n={};n[r.p]="+="+t,j.set(e,n)},Fa=function(e,r){var t=Yr(e,r),n="_scroll"+r.p2,i=function o(a,l,c,u,f){var p=o.tween,h=l.onComplete,g={};c=c||t();var d=Pc(t,c,function(){p.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,p&&p.kill(),l[n]=a,l.inherit=!1,l.modifiers=g,g[n]=function(){return d(c+u*p.ratio+f*p.ratio*p.ratio)},l.onUpdate=function(){Z.cache++,o.tween&&wr()},l.onComplete=function(){o.tween=0,h&&h.call(p)},p=o.tween=j.to(e,l),p};return e[n]=t,t.wheelHandler=function(){return i.tween&&i.tween.kill()&&(i.tween=0)},Xe(e,"wheel",t.wheelHandler),H.isTouch&&Xe(e,"touchmove",t.wheelHandler),i},H=function(){function s(r,t){xn||s.register(j)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),vo(this),this.init(r,t)}var e=s.prototype;return e.init=function(t,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Jn){this.update=this.refresh=this.kill=ir;return}t=Da(Mt(t)||ti(t)||t.nodeType?{trigger:t}:t,Bi);var i=t,o=i.onUpdate,a=i.toggleClass,l=i.id,c=i.onToggle,u=i.onRefresh,f=i.scrub,p=i.trigger,h=i.pin,g=i.pinSpacing,d=i.invalidateOnRefresh,m=i.anticipatePin,b=i.onScrubComplete,y=i.onSnapComplete,x=i.once,w=i.snap,_=i.pinReparent,C=i.pinSpacer,v=i.containerAnimation,S=i.fastScrollEnd,k=i.preventOverlaps,O=t.horizontal||t.containerAnimation&&t.horizontal!==!1?mt:ze,I=!f&&f!==0,M=yt(t.scroller||G),L=j.core.getCache(M),$=fn(M),U=("pinType"in t?t.pinType:Fr(M,"pinType")||$&&"fixed")==="fixed",B=[t.onEnter,t.onLeave,t.onEnterBack,t.onLeaveBack],z=I&&t.toggleActions.split(" "),W="markers"in t?t.markers:Bi.markers,re=$?0:parseFloat(Xt(M)["border"+O.p2+Fn])||0,T=this,ce=t.onRefreshInit&&function(){return t.onRefreshInit(T)},Ve=Df(M,$,O),kt=Af(M,$),me=0,Te=0,je=0,he=Yr(M,O),at,Ke,kr,lt,gt,ee,ke,_t,Ct,P,Pt,hr,Cr,xe,pr,Pr,Wr,Fe,Or,Ce,qt,$t,mr,Yn,Me,Mi,gr,mn,gn,Rr,Vr,K,Hr,Gt,Zt,Kt,Ur,_n,_r;if(T._startClamp=T._endClamp=!1,T._dir=O,m*=45,T.scroller=M,T.scroll=v?v.time.bind(v):he,lt=he(),T.vars=t,n=n||t.animation,"refreshPriority"in t&&(dc=1,t.refreshPriority===-9999&&(pi=T)),L.tweenScroll=L.tweenScroll||{top:Fa(M,ze),left:Fa(M,mt)},T.tweenTo=at=L.tweenScroll[O.p],T.scrubDuration=function(D){Hr=ti(D)&&D,Hr?K?K.duration(D):K=j.to(n,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Hr,paused:!0,onComplete:function(){return b&&b(T)}}):(K&&K.progress(1).kill(),K=0)},n&&(n.vars.lazy=!1,n._initted&&!T.isReverted||n.vars.immediateRender!==!1&&t.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),T.animation=n.pause(),n.scrollTrigger=T,T.scrubDuration(f),Rr=0,l||(l=n.vars.id)),w&&((!Jr(w)||w.push)&&(w={snapTo:w}),"scrollBehavior"in le.style&&j.set($?[le,Dt]:M,{scrollBehavior:"auto"}),Z.forEach(function(D){return st(D)&&D.target===($?pe.scrollingElement||Dt:M)&&(D.smooth=!1)}),kr=st(w.snapTo)?w.snapTo:w.snapTo==="labels"?jf(n):w.snapTo==="labelsDirectional"?Nf(n):w.directional!==!1?function(D,Y){return Jo(w.snapTo)(D,nt()-Te<500?0:Y.direction)}:j.utils.snap(w.snapTo),Gt=w.duration||{min:.1,max:2},Gt=Jr(Gt)?ci(Gt.min,Gt.max):ci(Gt,Gt),Zt=j.delayedCall(w.delay||Hr/2||.1,function(){var D=he(),Y=nt()-Te<500,N=at.tween;if((Y||Math.abs(T.getVelocity())<10)&&!N&&!Cs&&me!==D){var X=(D-ee)/xe,$e=n&&!I?n.totalProgress():X,Q=Y?0:($e-Vr)/(nt()-Qn)*1e3||0,Pe=j.utils.clamp(-X,1-X,vn(Q/2)*Q/.185),Qe=X+(w.inertia===!1?0:Pe),we,ge,ue=w,Qt=ue.onStart,ye=ue.onInterrupt,Ot=ue.onComplete;if(we=kr(Qe,T),ti(we)||(we=Qe),ge=Math.max(0,Math.round(ee+we*xe)),D<=ke&&D>=ee&&ge!==D){if(N&&!N._initted&&N.data<=vn(ge-D))return;w.inertia===!1&&(Pe=we-X),at(ge,{duration:Gt(vn(Math.max(vn(Qe-$e),vn(we-$e))*.185/Q/.05||0)),ease:w.ease||"power3",data:vn(ge-D),onInterrupt:function(){return Zt.restart(!0)&&ye&&ye(T)},onComplete:function(){T.update(),me=he(),n&&!I&&(K?K.resetTo("totalProgress",we,n._tTime/n._tDur):n.progress(we)),Rr=Vr=n&&!I?n.totalProgress():T.progress,y&&y(T),Ot&&Ot(T)}},D,Pe*xe,ge-D-Pe*xe),Qt&&Qt(T,at.tween)}}else T.isActive&&me!==D&&Zt.restart(!0)}).pause()),l&&(xo[l]=T),p=T.trigger=yt(p||h!==!0&&h),_r=p&&p._gsap&&p._gsap.stRevert,_r&&(_r=_r(T)),h=h===!0?p:yt(h),Mt(a)&&(a={targets:p,className:a}),h&&(g===!1||g===Yt||(g=!g&&h.parentNode&&h.parentNode.style&&Xt(h.parentNode).display==="flex"?!1:Ee),T.pin=h,Ke=j.core.getCache(h),Ke.spacer?pr=Ke.pinState:(C&&(C=yt(C),C&&!C.nodeType&&(C=C.current||C.nativeElement),Ke.spacerIsNative=!!C,C&&(Ke.spacerState=Xi(C))),Ke.spacer=Fe=C||pe.createElement("div"),Fe.classList.add("pin-spacer"),l&&Fe.classList.add("pin-spacer-"+l),Ke.pinState=pr=Xi(h)),t.force3D!==!1&&j.set(h,{force3D:!0}),T.spacer=Fe=Ke.spacer,gn=Xt(h),Yn=gn[g+O.os2],Ce=j.getProperty(h),qt=j.quickSetter(h,O.a,Le),Vs(h,Fe,gn),Wr=Xi(h)),W){hr=Jr(W)?Da(W,Aa):Aa,P=Yi("scroller-start",l,M,O,hr,0),Pt=Yi("scroller-end",l,M,O,hr,0,P),Or=P["offset"+O.op.d2];var Xn=yt(Fr(M,"content")||M);_t=this.markerStart=Yi("start",l,Xn,O,hr,Or,0,v),Ct=this.markerEnd=Yi("end",l,Xn,O,hr,Or,0,v),v&&(_n=j.quickSetter([_t,Ct],O.a,Le)),!U&&!(ur.length&&Fr(M,"fixedMarkers")===!0)&&(If($?le:M),j.set([P,Pt],{force3D:!0}),Mi=j.quickSetter(P,O.a,Le),mn=j.quickSetter(Pt,O.a,Le))}if(v){var V=v.vars.onUpdate,F=v.vars.onUpdateParams;v.eventCallback("onUpdate",function(){T.update(0,0,1),V&&V.apply(v,F||[])})}if(T.previous=function(){return q[q.indexOf(T)-1]},T.next=function(){return q[q.indexOf(T)+1]},T.revert=function(D,Y){if(!Y)return T.kill(!0);var N=D!==!1||!T.enabled,X=rt;N!==T.isReverted&&(N&&(Kt=Math.max(he(),T.scroll.rec||0),je=T.progress,Ur=n&&n.progress()),_t&&[_t,Ct,P,Pt].forEach(function($e){return $e.style.display=N?"none":"block"}),N&&(rt=T,T.update(N)),h&&(!_||!T.isActive)&&(N?Ff(h,Fe,pr):Vs(h,Fe,Xt(h),Me)),N||T.update(N),rt=X,T.isReverted=N)},T.refresh=function(D,Y,N,X){if(!((rt||!T.enabled)&&!Y)){if(h&&D&&Ut){Xe(s,"scrollEnd",Sc);return}!ht&&ce&&ce(T),rt=T,at.tween&&!N&&(at.tween.kill(),at.tween=0),K&&K.pause(),d&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren&&n.getChildren(!0,!0,!1).forEach(function(Mr){return Mr.vars.immediateRender&&Mr.render(0,!0,!0)})),T.isReverted||T.revert(!0,!0),T._subPinOffset=!1;var $e=Ve(),Q=kt(),Pe=v?v.duration():cr(M,O),Qe=xe<=.01||!xe,we=0,ge=X||0,ue=Jr(N)?N.end:t.end,Qt=t.endTrigger||p,ye=Jr(N)?N.start:t.start||(t.start===0||!p?0:h?"0 0":"0 100%"),Ot=T.pinnedContainer=t.pinnedContainer&&yt(t.pinnedContainer,T),er=p&&Math.max(0,q.indexOf(T))||0,He=er,Ue,Je,qr,Ei,et,Ne,tr,Es,oa,Wn,rr,Vn,Di;for(W&&Jr(N)&&(Vn=j.getProperty(P,O.p),Di=j.getProperty(Pt,O.p));He-- >0;)Ne=q[He],Ne.end||Ne.refresh(0,1)||(rt=T),tr=Ne.pin,tr&&(tr===p||tr===h||tr===Ot)&&!Ne.isReverted&&(Wn||(Wn=[]),Wn.unshift(Ne),Ne.revert(!0,!0)),Ne!==q[He]&&(er--,He--);for(st(ye)&&(ye=ye(T)),ye=Oa(ye,"start",T),ee=La(ye,p,$e,O,he(),_t,P,T,Q,re,U,Pe,v,T._startClamp&&"_startClamp")||(h?-.001:0),st(ue)&&(ue=ue(T)),Mt(ue)&&!ue.indexOf("+=")&&(~ue.indexOf(" ")?ue=(Mt(ye)?ye.split(" ")[0]:"")+ue:(we=ts(ue.substr(2),$e),ue=Mt(ye)?ye:(v?j.utils.mapRange(0,v.duration(),v.scrollTrigger.start,v.scrollTrigger.end,ee):ee)+we,Qt=p)),ue=Oa(ue,"end",T),ke=Math.max(ee,La(ue||(Qt?"100% 0":Pe),Qt,$e,O,he()+we,Ct,Pt,T,Q,re,U,Pe,v,T._endClamp&&"_endClamp"))||-.001,we=0,He=er;He--;)Ne=q[He],tr=Ne.pin,tr&&Ne.start-Ne._pinPush<=ee&&!v&&Ne.end>0&&(Ue=Ne.end-(T._startClamp?Math.max(0,Ne.start):Ne.start),(tr===p&&Ne.start-Ne._pinPush<ee||tr===Ot)&&isNaN(ye)&&(we+=Ue*(1-Ne.progress)),tr===h&&(ge+=Ue));if(ee+=we,ke+=we,T._startClamp&&(T._startClamp+=we),T._endClamp&&!ht&&(T._endClamp=ke||-.001,ke=Math.min(ke,cr(M,O))),xe=ke-ee||(ee-=.01)&&.001,Qe&&(je=j.utils.clamp(0,1,j.utils.normalize(ee,ke,Kt))),T._pinPush=ge,_t&&we&&(Ue={},Ue[O.a]="+="+we,Ot&&(Ue[O.p]="-="+he()),j.set([_t,Ct],Ue)),h&&!(bo&&T.end>=cr(M,O)))Ue=Xt(h),Ei=O===ze,qr=he(),$t=parseFloat(Ce(O.a))+ge,!Pe&&ke>1&&(rr=($?pe.scrollingElement||Dt:M).style,rr={style:rr,value:rr["overflow"+O.a.toUpperCase()]},$&&Xt(le)["overflow"+O.a.toUpperCase()]!=="scroll"&&(rr.style["overflow"+O.a.toUpperCase()]="scroll")),Vs(h,Fe,Ue),Wr=Xi(h),Je=br(h,!0),Es=U&&Yr(M,Ei?mt:ze)(),g?(Me=[g+O.os2,xe+ge+Le],Me.t=Fe,He=g===Ee?bs(h,O)+xe+ge:0,He&&(Me.push(O.d,He+Le),Fe.style.flexBasis!=="auto"&&(Fe.style.flexBasis=He+Le)),En(Me),Ot&&q.forEach(function(Mr){Mr.pin===Ot&&Mr.vars.pinSpacing!==!1&&(Mr._subPinOffset=!0)}),U&&he(Kt)):(He=bs(h,O),He&&Fe.style.flexBasis!=="auto"&&(Fe.style.flexBasis=He+Le)),U&&(et={top:Je.top+(Ei?qr-ee:Es)+Le,left:Je.left+(Ei?Es:qr-ee)+Le,boxSizing:"border-box",position:"fixed"},et[an]=et["max"+Fn]=Math.ceil(Je.width)+Le,et[ln]=et["max"+Qo]=Math.ceil(Je.height)+Le,et[Yt]=et[Yt+di]=et[Yt+ui]=et[Yt+hi]=et[Yt+fi]="0",et[Ee]=Ue[Ee],et[Ee+di]=Ue[Ee+di],et[Ee+ui]=Ue[Ee+ui],et[Ee+hi]=Ue[Ee+hi],et[Ee+fi]=Ue[Ee+fi],Pr=Bf(pr,et,_),ht&&he(0)),n?(oa=n._initted,$s(1),n.render(n.duration(),!0,!0),mr=Ce(O.a)-$t+xe+ge,gr=Math.abs(xe-mr)>1,U&&gr&&Pr.splice(Pr.length-2,2),n.render(0,!0,!0),oa||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),$s(0)):mr=xe,rr&&(rr.value?rr.style["overflow"+O.a.toUpperCase()]=rr.value:rr.style.removeProperty("overflow-"+O.a));else if(p&&he()&&!v)for(Je=p.parentNode;Je&&Je!==le;)Je._pinOffset&&(ee-=Je._pinOffset,ke-=Je._pinOffset),Je=Je.parentNode;Wn&&Wn.forEach(function(Mr){return Mr.revert(!1,!0)}),T.start=ee,T.end=ke,lt=gt=ht?Kt:he(),!v&&!ht&&(lt<Kt&&he(Kt),T.scroll.rec=0),T.revert(!1,!0),Te=nt(),Zt&&(me=-1,Zt.restart(!0)),rt=0,n&&I&&(n._initted||Ur)&&n.progress()!==Ur&&n.progress(Ur||0,!0).render(n.time(),!0,!0),(Qe||je!==T.progress||v||d||n&&!n._initted)&&(n&&!I&&(n._initted||je||n.vars.immediateRender!==!1)&&n.totalProgress(v&&ee<-.001&&!je?j.utils.normalize(ee,ke,0):je,!0),T.progress=Qe||(lt-ee)/xe===je?0:je),h&&g&&(Fe._pinOffset=Math.round(T.progress*mr)),K&&K.invalidate(),isNaN(Vn)||(Vn-=j.getProperty(P,O.p),Di-=j.getProperty(Pt,O.p),Wi(P,O,Vn),Wi(_t,O,Vn-(X||0)),Wi(Pt,O,Di),Wi(Ct,O,Di-(X||0))),Qe&&!ht&&T.update(),u&&!ht&&!Cr&&(Cr=!0,u(T),Cr=!1)}},T.getVelocity=function(){return(he()-gt)/(nt()-Qn)*1e3||0},T.endAnimation=function(){qn(T.callbackAnimation),n&&(K?K.progress(1):n.paused()?I||qn(n,T.direction<0,1):qn(n,n.reversed()))},T.labelToScroll=function(D){return n&&n.labels&&(ee||T.refresh()||ee)+n.labels[D]/n.duration()*xe||0},T.getTrailing=function(D){var Y=q.indexOf(T),N=T.direction>0?q.slice(0,Y).reverse():q.slice(Y+1);return(Mt(D)?N.filter(function(X){return X.vars.preventOverlaps===D}):N).filter(function(X){return T.direction>0?X.end<=ee:X.start>=ke})},T.update=function(D,Y,N){if(!(v&&!N&&!D)){var X=ht===!0?Kt:T.scroll(),$e=D?0:(X-ee)/xe,Q=$e<0?0:$e>1?1:$e||0,Pe=T.progress,Qe,we,ge,ue,Qt,ye,Ot,er;if(Y&&(gt=lt,lt=v?he():X,w&&(Vr=Rr,Rr=n&&!I?n.totalProgress():Q)),m&&h&&!rt&&!Li&&Ut&&(!Q&&ee<X+(X-gt)/(nt()-Qn)*m?Q=1e-4:Q===1&&ke>X+(X-gt)/(nt()-Qn)*m&&(Q=.9999)),Q!==Pe&&T.enabled){if(Qe=T.isActive=!!Q&&Q<1,we=!!Pe&&Pe<1,ye=Qe!==we,Qt=ye||!!Q!=!!Pe,T.direction=Q>Pe?1:-1,T.progress=Q,Qt&&!rt&&(ge=Q&&!Pe?0:Q===1?1:Pe===1?2:3,I&&(ue=!ye&&z[ge+1]!=="none"&&z[ge+1]||z[ge],er=n&&(ue==="complete"||ue==="reset"||ue in n))),k&&(ye||er)&&(er||f||!n)&&(st(k)?k(T):T.getTrailing(k).forEach(function(qr){return qr.endAnimation()})),I||(K&&!rt&&!Li?(K._dp._time-K._start!==K._time&&K.render(K._dp._time-K._start),K.resetTo?K.resetTo("totalProgress",Q,n._tTime/n._tDur):(K.vars.totalProgress=Q,K.invalidate().restart())):n&&n.totalProgress(Q,!!(rt&&(Te||D)))),h){if(D&&g&&(Fe.style[g+O.os2]=Yn),!U)qt(ei($t+mr*Q));else if(Qt){if(Ot=!D&&Q>Pe&&ke+1>X&&X+1>=cr(M,O),_)if(!D&&(Qe||Ot)){var He=br(h,!0),Ue=X-ee;za(h,le,He.top+(O===ze?Ue:0)+Le,He.left+(O===ze?0:Ue)+Le)}else za(h,Fe);En(Qe||Ot?Pr:Wr),gr&&Q<1&&Qe||qt($t+(Q===1&&!Ot?mr:0))}}w&&!at.tween&&!rt&&!Li&&Zt.restart(!0),a&&(ye||x&&Q&&(Q<1||!Bs))&&wi(a.targets).forEach(function(qr){return qr.classList[Qe||x?"add":"remove"](a.className)}),o&&!I&&!D&&o(T),Qt&&!rt?(I&&(er&&(ue==="complete"?n.pause().totalProgress(1):ue==="reset"?n.restart(!0).pause():ue==="restart"?n.restart(!0):n[ue]()),o&&o(T)),(ye||!Bs)&&(c&&ye&&Xs(T,c),B[ge]&&Xs(T,B[ge]),x&&(Q===1?T.kill(!1,1):B[ge]=0),ye||(ge=Q===1?1:3,B[ge]&&Xs(T,B[ge]))),S&&!Qe&&Math.abs(T.getVelocity())>(ti(S)?S:2500)&&(qn(T.callbackAnimation),K?K.progress(1):qn(n,ue==="reverse"?1:!Q,1))):I&&o&&!rt&&o(T)}if(mn){var Je=v?X/v.duration()*(v._caScrollDist||0):X;Mi(Je+(P._isFlipped?1:0)),mn(Je)}_n&&_n(-X/v.duration()*(v._caScrollDist||0))}},T.enable=function(D,Y){T.enabled||(T.enabled=!0,Xe(M,"resize",ri),$||Xe(M,"scroll",bn),ce&&Xe(s,"refreshInit",ce),D!==!1&&(T.progress=je=0,lt=gt=me=he()),Y!==!1&&T.refresh())},T.getTween=function(D){return D&&at?at.tween:K},T.setPositions=function(D,Y,N,X){if(v){var $e=v.scrollTrigger,Q=v.duration(),Pe=$e.end-$e.start;D=$e.start+Pe*D/Q,Y=$e.start+Pe*Y/Q}T.refresh(!1,!1,{start:Ra(D,N&&!!T._startClamp),end:Ra(Y,N&&!!T._endClamp)},X),T.update()},T.adjustPinSpacing=function(D){if(Me&&D){var Y=Me.indexOf(O.d)+1;Me[Y]=parseFloat(Me[Y])+D+Le,Me[1]=parseFloat(Me[1])+D+Le,En(Me)}},T.disable=function(D,Y){if(T.enabled&&(D!==!1&&T.revert(!0,!0),T.enabled=T.isActive=!1,Y||K&&K.pause(),Kt=0,Ke&&(Ke.uncache=1),ce&&Be(s,"refreshInit",ce),Zt&&(Zt.pause(),at.tween&&at.tween.kill()&&(at.tween=0)),!$)){for(var N=q.length;N--;)if(q[N].scroller===M&&q[N]!==T)return;Be(M,"resize",ri),$||Be(M,"scroll",bn)}},T.kill=function(D,Y){T.disable(D,Y),K&&!Y&&K.kill(),l&&delete xo[l];var N=q.indexOf(T);N>=0&&q.splice(N,1),N===dt&&ns>0&&dt--,N=0,q.forEach(function(X){return X.scroller===T.scroller&&(N=1)}),N||ht||(T.scroll.rec=0),n&&(n.scrollTrigger=null,D&&n.revert({kill:!1}),Y||n.kill()),_t&&[_t,Ct,P,Pt].forEach(function(X){return X.parentNode&&X.parentNode.removeChild(X)}),pi===T&&(pi=0),h&&(Ke&&(Ke.uncache=1),N=0,q.forEach(function(X){return X.pin===h&&N++}),N||(Ke.spacer=0)),t.onKill&&t.onKill(T)},q.push(T),T.enable(!1,!1),_r&&_r(T),n&&n.add&&!xe){var ne=T.update;T.update=function(){T.update=ne,Z.cache++,ee||ke||T.refresh()},j.delayedCall(.01,T.update),xe=.01,ee=ke=0}else T.refresh();h&&zf()},s.register=function(t){return xn||(j=t||_c(),gc()&&window.document&&s.enable(),xn=Jn),xn},s.defaults=function(t){if(t)for(var n in t)Bi[n]=t[n];return Bi},s.disable=function(t,n){Jn=0,q.forEach(function(o){return o[n?"kill":"disable"](t)}),Be(G,"wheel",bn),Be(pe,"scroll",bn),clearInterval(Ni),Be(pe,"touchcancel",ir),Be(le,"touchstart",ir),Fi(Be,pe,"pointerdown,touchstart,mousedown",Ma),Fi(Be,pe,"pointerup,touchend,mouseup",Ea),ys.kill(),zi(Be);for(var i=0;i<Z.length;i+=3)$i(Be,Z[i],Z[i+1]),$i(Be,Z[i],Z[i+2])},s.enable=function(){if(G=window,pe=document,Dt=pe.documentElement,le=pe.body,j&&(wi=j.utils.toArray,ci=j.utils.clamp,vo=j.core.context||ir,$s=j.core.suppressOverwrites||ir,qo=G.history.scrollRestoration||"auto",wo=G.pageYOffset||0,j.core.globals("ScrollTrigger",s),le)){Jn=1,Mn=document.createElement("div"),Mn.style.height="100vh",Mn.style.position="absolute",Cc(),Ef(),Re.register(j),s.isTouch=Re.isTouch,Er=Re.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),yo=Re.isTouch===1,Xe(G,"wheel",bn),Uo=[G,pe,Dt,le],j.matchMedia?(s.matchMedia=function(c){var u=j.matchMedia(),f;for(f in c)u.add(f,c[f]);return u},j.addEventListener("matchMediaInit",function(){return ea()}),j.addEventListener("matchMediaRevert",function(){return Tc()}),j.addEventListener("matchMedia",function(){tn(0,1),hn("matchMedia")}),j.matchMedia().add("(orientation: portrait)",function(){return Ws(),Ws})):console.warn("Requires GSAP 3.11.0 or later"),Ws(),Xe(pe,"scroll",bn);var t=le.hasAttribute("style"),n=le.style,i=n.borderTopStyle,o=j.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=br(le),ze.m=Math.round(a.top+ze.sc())||0,mt.m=Math.round(a.left+mt.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),t||(le.setAttribute("style",""),le.removeAttribute("style")),Ni=setInterval(Ia,250),j.delayedCall(.5,function(){return Li=0}),Xe(pe,"touchcancel",ir),Xe(le,"touchstart",ir),Fi(Xe,pe,"pointerdown,touchstart,mousedown",Ma),Fi(Xe,pe,"pointerup,touchend,mouseup",Ea),_o=j.utils.checkPrefix("transform"),is.push(_o),xn=nt(),ys=j.delayedCall(.2,tn).pause(),wn=[pe,"visibilitychange",function(){var c=G.innerWidth,u=G.innerHeight;pe.hidden?(Ca=c,Pa=u):(Ca!==c||Pa!==u)&&ri()},pe,"DOMContentLoaded",tn,G,"load",tn,G,"resize",ri],zi(Xe),q.forEach(function(c){return c.enable(0,1)}),l=0;l<Z.length;l+=3)$i(Be,Z[l],Z[l+1]),$i(Be,Z[l],Z[l+2])}},s.config=function(t){"limitCallbacks"in t&&(Bs=!!t.limitCallbacks);var n=t.syncInterval;n&&clearInterval(Ni)||(Ni=n)&&setInterval(Ia,n),"ignoreMobileResize"in t&&(yo=s.isTouch===1&&t.ignoreMobileResize),"autoRefreshEvents"in t&&(zi(Be)||zi(Xe,t.autoRefreshEvents||"none"),hc=(t.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(t,n){var i=yt(t),o=Z.indexOf(i),a=fn(i);~o&&Z.splice(o,a?6:2),n&&(a?ur.unshift(G,n,le,n,Dt,n):ur.unshift(i,n))},s.clearMatchMedia=function(t){q.forEach(function(n){return n._ctx&&n._ctx.query===t&&n._ctx.kill(!0,!0)})},s.isInViewport=function(t,n,i){var o=(Mt(t)?yt(t):t).getBoundingClientRect(),a=o[i?an:ln]*n||0;return i?o.right-a>0&&o.left+a<G.innerWidth:o.bottom-a>0&&o.top+a<G.innerHeight},s.positionInViewport=function(t,n,i){Mt(t)&&(t=yt(t));var o=t.getBoundingClientRect(),a=o[i?an:ln],l=n==null?a/2:n in xs?xs[n]*a:~n.indexOf("%")?parseFloat(n)*a/100:parseFloat(n)||0;return i?(o.left+l)/G.innerWidth:(o.top+l)/G.innerHeight},s.killAll=function(t){if(q.slice(0).forEach(function(i){return i.vars.id!=="ScrollSmoother"&&i.kill()}),t!==!0){var n=dn.killAll||[];dn={},n.forEach(function(i){return i()})}},s}();H.version="3.13.0";H.saveStyles=function(s){return s?wi(s).forEach(function(e){if(e&&e.style){var r=Rt.indexOf(e);r>=0&&Rt.splice(r,5),Rt.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),j.core.getCache(e),vo())}}):Rt};H.revert=function(s,e){return ea(!s,e)};H.create=function(s,e){return new H(s,e)};H.refresh=function(s){return s?ri(!0):(xn||H.register())&&tn(!0)};H.update=function(s){return++Z.cache&&wr(s===!0?2:0)};H.clearScrollMemory=kc;H.maxScroll=function(s,e){return cr(s,e?mt:ze)};H.getScrollFunc=function(s,e){return Yr(yt(s),e?mt:ze)};H.getById=function(s){return xo[s]};H.getAll=function(){return q.filter(function(s){return s.vars.id!=="ScrollSmoother"})};H.isScrolling=function(){return!!Ut};H.snapDirectional=Jo;H.addEventListener=function(s,e){var r=dn[s]||(dn[s]=[]);~r.indexOf(e)||r.push(e)};H.removeEventListener=function(s,e){var r=dn[s],t=r&&r.indexOf(e);t>=0&&r.splice(t,1)};H.batch=function(s,e){var r=[],t={},n=e.interval||.016,i=e.batchMax||1e9,o=function(c,u){var f=[],p=[],h=j.delayedCall(n,function(){u(f,p),f=[],p=[]}).pause();return function(g){f.length||h.restart(!0),f.push(g.trigger),p.push(g),i<=f.length&&h.progress(1)}},a;for(a in e)t[a]=a.substr(0,2)==="on"&&st(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return st(i)&&(i=i(),Xe(H,"refresh",function(){return i=e.batchMax()})),wi(s).forEach(function(l){var c={};for(a in t)c[a]=t[a];c.trigger=l,r.push(H.create(c))}),r};var $a=function(e,r,t,n){return r>n?e(n):r<0&&e(0),t>n?(n-r)/(t-r):t<0?r/(r-t):1},Hs=function s(e,r){r===!0?e.style.removeProperty("touch-action"):e.style.touchAction=r===!0?"auto":r?"pan-"+r+(Re.isTouch?" pinch-zoom":""):"none",e===Dt&&s(le,r)},Vi={auto:1,scroll:1},Xf=function(e){var r=e.event,t=e.target,n=e.axis,i=(r.changedTouches?r.changedTouches[0]:r).target,o=i._gsap||j.core.getCache(i),a=nt(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;i&&i!==le&&(i.scrollHeight<=i.clientHeight&&i.scrollWidth<=i.clientWidth||!(Vi[(l=Xt(i)).overflowY]||Vi[l.overflowX]));)i=i.parentNode;o._isScroll=i&&i!==t&&!fn(i)&&(Vi[(l=Xt(i)).overflowY]||Vi[l.overflowX]),o._isScrollT=a}(o._isScroll||n==="x")&&(r.stopPropagation(),r._gsapAllow=!0)},Oc=function(e,r,t,n){return Re.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:r,onWheel:n=n&&Xf,onPress:n,onDrag:n,onScroll:n,onEnable:function(){return t&&Xe(pe,Re.eventTypes[0],Ya,!1,!0)},onDisable:function(){return Be(pe,Re.eventTypes[0],Ya,!0)}})},Wf=/(input|label|select|textarea)/i,Ba,Ya=function(e){var r=Wf.test(e.target.tagName);(r||Ba)&&(e._gsapAllow=!0,Ba=r)},Vf=function(e){Jr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var r=e,t=r.normalizeScrollX,n=r.momentum,i=r.allowNestedScroll,o=r.onRelease,a,l,c=yt(e.target)||Dt,u=j.core.globals().ScrollSmoother,f=u&&u.get(),p=Er&&(e.content&&yt(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),h=Yr(c,ze),g=Yr(c,mt),d=1,m=(Re.isTouch&&G.visualViewport?G.visualViewport.scale*G.visualViewport.width:G.outerWidth)/G.innerWidth,b=0,y=st(n)?function(){return n(a)}:function(){return n||2.8},x,w,_=Oc(c,e.type,!0,i),C=function(){return w=!1},v=ir,S=ir,k=function(){l=cr(c,ze),S=ci(Er?1:0,l),t&&(v=ci(0,cr(c,mt))),x=cn},O=function(){p._gsap.y=ei(parseFloat(p._gsap.y)+h.offset)+"px",p.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(p._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},I=function(){if(w){requestAnimationFrame(C);var W=ei(a.deltaY/2),re=S(h.v-W);if(p&&re!==h.v+h.offset){h.offset=re-h.v;var T=ei((parseFloat(p&&p._gsap.y)||0)-h.offset);p.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+T+", 0, 1)",p._gsap.y=T+"px",h.cacheID=Z.cache,wr()}return!0}h.offset&&O(),w=!0},M,L,$,U,B=function(){k(),M.isActive()&&M.vars.scrollY>l&&(h()>l?M.progress(1)&&h(l):M.resetTo("scrollY",l))};return p&&j.set(p,{y:"+=0"}),e.ignoreCheck=function(z){return Er&&z.type==="touchmove"&&I()||d>1.05&&z.type!=="touchstart"||a.isGesturing||z.touches&&z.touches.length>1},e.onPress=function(){w=!1;var z=d;d=ei((G.visualViewport&&G.visualViewport.scale||1)/m),M.pause(),z!==d&&Hs(c,d>1.01?!0:t?!1:"x"),L=g(),$=h(),k(),x=cn},e.onRelease=e.onGestureStart=function(z,W){if(h.offset&&O(),!W)U.restart(!0);else{Z.cache++;var re=y(),T,ce;t&&(T=g(),ce=T+re*.05*-z.velocityX/.227,re*=$a(g,T,ce,cr(c,mt)),M.vars.scrollX=v(ce)),T=h(),ce=T+re*.05*-z.velocityY/.227,re*=$a(h,T,ce,cr(c,ze)),M.vars.scrollY=S(ce),M.invalidate().duration(re).play(.01),(Er&&M.vars.scrollY>=l||T>=l-1)&&j.to({},{onUpdate:B,duration:re})}o&&o(z)},e.onWheel=function(){M._ts&&M.pause(),nt()-b>1e3&&(x=0,b=nt())},e.onChange=function(z,W,re,T,ce){if(cn!==x&&k(),W&&t&&g(v(T[2]===W?L+(z.startX-z.x):g()+W-T[1])),re){h.offset&&O();var Ve=ce[2]===re,kt=Ve?$+z.startY-z.y:h()+re-ce[1],me=S(kt);Ve&&kt!==me&&($+=me-kt),h(me)}(re||W)&&wr()},e.onEnable=function(){Hs(c,t?!1:"x"),H.addEventListener("refresh",B),Xe(G,"resize",B),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=g.smooth=!1),_.enable()},e.onDisable=function(){Hs(c,!0),Be(G,"resize",B),H.removeEventListener("refresh",B),_.kill()},e.lockAxis=e.lockAxis!==!1,a=new Re(e),a.iOS=Er,Er&&!h()&&h(1),Er&&j.ticker.add(ir),U=a._dc,M=j.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:t?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Pc(h,h(),function(){return M.pause()})},onUpdate:wr,onComplete:U.vars.onComplete}),a};H.sort=function(s){if(st(s))return q.sort(s);var e=G.pageYOffset||0;return H.getAll().forEach(function(r){return r._sortY=r.trigger?e+r.trigger.getBoundingClientRect().top:r.start+G.innerHeight}),q.sort(s||function(r,t){return(r.vars.refreshPriority||0)*-1e6+(r.vars.containerAnimation?1e6:r._sortY)-((t.vars.containerAnimation?1e6:t._sortY)+(t.vars.refreshPriority||0)*-1e6)})};H.observe=function(s){return new Re(s)};H.normalizeScroll=function(s){if(typeof s>"u")return ft;if(s===!0&&ft)return ft.enable();if(s===!1){ft&&ft.kill(),ft=s;return}var e=s instanceof Re?s:Vf(s);return ft&&ft.target===e.target&&ft.kill(),fn(e.target)&&(ft=e),e};H.core={_getVelocityProp:go,_inputObserver:Oc,_scrollers:Z,_proxies:ur,bridge:{ss:function(){Ut||hn("scrollStart"),Ut=nt()},ref:function(){return rt}}};_c()&&j.registerPlugin(H);const Hf=()=>2+Math.random()*.7;function Hi({word:s}){return s.split("").map((e,r)=>R.jsx("div",{className:"letter font-intersemibold text-[70px]/[60px] md:text-[155px]/[150px] lg:text-[215px]/[200px] xl:text-[265px]/[250px]","data-speed":Hf(),children:e},r))}te.registerPlugin(H);const Ui=["Benjamin","Lobos ","L.","antifragility by design"],Uf=()=>Math.random()*60-30,qf=()=>.8+Math.random()*.7,Gf=s=>{const e=H.maxScroll(window);te.utils.toArray(".letter",s).forEach(r=>{const t=qf();r.dataset.speed=t,te.to(r,{y:(1-t)*e,rotation:Uf(),ease:"power2.out",duration:.8,scrollTrigger:{trigger:document.documentElement,start:0,end:window.innerHeight,scrub:.5,invalidateOnRefresh:!0}})})};function Zf(){const s=A.useRef(null),e=A.useRef(null),r=1500,t=A.useRef(!1);return A.useEffect(()=>{const n=s.current,i=e.current;if(!n||!i)return;Gf(n),H.refresh();let o;te.set(i,{autoAlpha:0});const a=()=>{t.current||te.to(i,{autoAlpha:1,duration:.6,ease:"power2.out"})},l=()=>{te.to(i,{autoAlpha:0,duration:.25,ease:"power2.out"})},c=()=>{t.current||(t.current=!0,l())};o=setTimeout(a,r);const u={passive:!0,once:!0};return window.addEventListener("scroll",c,u),window.addEventListener("wheel",c,u),window.addEventListener("touchmove",c,u),()=>{clearTimeout(o),window.removeEventListener("scroll",c),window.removeEventListener("wheel",c),window.removeEventListener("touchmove",c),H.getAll().forEach(f=>f.kill())}},[]),R.jsxs("div",{ref:s,className:"bg-white relative w-full h-200 md:h-355 overflow-hidden",children:[R.jsxs("div",{className:"absolute bottom-0 left-0 pb-130 xl:pb-170 pl-2 md:pb-170 lg:170 md:pl-20 flex h-screen flex-col justify-end",children:[R.jsx("div",{className:"flex flex-wrap",children:R.jsx(Hi,{word:Ui[0]})}),R.jsxs("div",{className:"flex flex-wrap",children:[R.jsx(Hi,{word:Ui[1]}),R.jsx("div",{className:"w-4 sm:w-20"}),R.jsx(Hi,{word:Ui[2]})]})]}),R.jsx("div",{className:"hidden absolute bottom-0 left-0 md:flex flex-wrap",children:R.jsx(Hi,{word:Ui[3]})}),R.jsx("h2",{ref:e,className:"hidden lg:block absolute bottom-0 right-0 pb-170 pr-20 text-black text-[50px] pointer-events-none select-none",children:"Scroll"})]})}var os={exports:{}},Kf=os.exports,Xa;function Qf(){return Xa||(Xa=1,function(s,e){(function(t,n){s.exports=n(Qc())})(typeof self<"u"?self:Kf,function(r){return function(t){var n={};function i(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,i),a.l=!0,a.exports}return i.m=t,i.c=n,i.d=function(o,a,l){i.o(o,a)||Object.defineProperty(o,a,{enumerable:!0,get:l})},i.r=function(o){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},i.t=function(o,a){if(1&a&&(o=i(o)),8&a||4&a&&typeof o=="object"&&o&&o.__esModule)return o;var l=Object.create(null);if(i.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:o}),2&a&&typeof o!="string")for(var c in o)i.d(l,c,(function(u){return o[u]}).bind(null,c));return l},i.n=function(o){var a=o&&o.__esModule?function(){return o.default}:function(){return o};return i.d(a,"a",a),a},i.o=function(o,a){return Object.prototype.hasOwnProperty.call(o,a)},i.p="",i(i.s=3)}([function(t,n){t.exports=r},function(t,n,i){function o(b){return(o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(x){return typeof x}:function(x){return x&&typeof Symbol=="function"&&x.constructor===Symbol&&x!==Symbol.prototype?"symbol":typeof x})(b)}function a(b,y){if(!(b instanceof y))throw new TypeError("Cannot call a class as a function")}function l(b,y){if(typeof y!="function"&&y!==null)throw new TypeError("Super expression must either be null or a function");b.prototype=Object.create(y&&y.prototype,{constructor:{value:b,writable:!0,configurable:!0}}),y&&c(b,y)}function c(b,y){return(c=Object.setPrototypeOf||function(w,_){return w.__proto__=_,w})(b,y)}function u(b){var y=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var w,_=p(b);if(y){var C=p(this).constructor;w=Reflect.construct(_,arguments,C)}else w=_.apply(this,arguments);return f(this,w)}}function f(b,y){return!y||o(y)!=="object"&&typeof y!="function"?function(w){if(w===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return w}(b):y}function p(b){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(x){return x.__proto__||Object.getPrototypeOf(x)})(b)}var h=this&&this.__importDefault||function(b){return b&&b.__esModule?b:{default:b}};Object.defineProperty(n,"__esModule",{value:!0}),n.Background=n.Parallax=void 0;var g=h(i(0)),d=function(b){l(x,b);var y=u(x);function x(){return a(this,x),y.apply(this,arguments)}return x}(g.default.Component);n.Parallax=d;var m=function(b){l(x,b);var y=u(x);function x(){return a(this,x),y.apply(this,arguments)}return x}(g.default.Component);n.Background=m},function(t,n,i){Object.defineProperty(n,"__esModule",{value:!0}),n.canUseDOM=n.getNodeHeight=n.isScrolledIntoView=n.getWindowHeight=void 0,n.getWindowHeight=function(o){if(!o)return 0;var a=window,l=document,c=l.documentElement,u=l.getElementsByTagName("body")[0];return a.innerHeight||c.clientHeight||u.clientHeight},n.isScrolledIntoView=function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,l=arguments.length>2?arguments[2]:void 0;if(!l)return!1;var c=o.getBoundingClientRect().top-a,u=o.getBoundingClientRect().bottom+a;return c<=n.getWindowHeight(l)&&u>=0},n.getNodeHeight=function(o,a){return o?a&&"clientHeight"in a?a.clientHeight:n.getWindowHeight(o):0},n.canUseDOM=function(){return!(typeof window>"u"||!window.document||!window.document.createElement)}},function(t,n,i){var o=this&&this.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(n,"__esModule",{value:!0}),n.Background=n.Parallax=void 0;var a=o(i(4));n.Parallax=a.default;var l=o(i(7));n.Background=l.default},function(t,n,i){function o(w){return(o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C})(w)}function a(w,_){for(var C=0;C<_.length;C++){var v=_[C];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(w,v.key,v)}}function l(w,_){return(l=Object.setPrototypeOf||function(v,S){return v.__proto__=S,v})(w,_)}function c(w){var _=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var v,S=f(w);if(_){var k=f(this).constructor;v=Reflect.construct(S,arguments,k)}else v=S.apply(this,arguments);return u(this,v)}}function u(w,_){return!_||o(_)!=="object"&&typeof _!="function"?function(v){if(v===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return v}(w):_}function f(w){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(C){return C.__proto__||Object.getPrototypeOf(C)})(w)}var p=this&&this.__importDefault||function(w){return w&&w.__esModule?w:{default:w}};Object.defineProperty(n,"__esModule",{value:!0});var h=p(i(0)),g=i(1),d=i(5),m=i(2),b=p(i(6)),y={position:"absolute",left:"50%",WebkitTransform:"translate3d(-50%, 0, 0)",transform:"translate3d(-50%, 0, 0)",WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",MozBackfaceVisibility:"hidden",MsBackfaceVisibility:"hidden"},x=function(w){(function(S,k){if(typeof k!="function"&&k!==null)throw new TypeError("Super expression must either be null or a function");S.prototype=Object.create(k&&k.prototype,{constructor:{value:S,writable:!0,configurable:!0}}),k&&l(S,k)})(C,w);var _=c(C);function C(v){var S;return function(O,I){if(!(O instanceof I))throw new TypeError("Cannot call a class as a function")}(this,C),(S=_.call(this,v)).onWindowResize=function(){S.parentHeight=m.getNodeHeight(S.canUseDOM,S.parent),S.updatePosition()},S.onWindowLoad=function(){S.updatePosition()},S.onScroll=function(){if(S.canUseDOM){var k=Date.now();k-S.timestamp>=10&&m.isScrolledIntoView(S.node,100,S.canUseDOM)&&(window.requestAnimationFrame(S.updatePosition),S.timestamp=k)}},S.onContentMount=function(k){S.content=k},S.updatePosition=function(){if(S.content){var k=!1;S.contentHeight=S.content.getBoundingClientRect().height,S.contentWidth=S.node.getBoundingClientRect().width,S.img&&S.img.naturalWidth/S.img.naturalHeight<S.contentWidth/S.getImageHeight()&&(k=!0);var O=d.getRelativePosition(S.node,S.canUseDOM),I=!!S.img,M=S.bg&&S.state.splitChildren.bgChildren.length>0;I&&S.setImagePosition(O,k),M&&S.setBackgroundPosition(O),I||M||S.setState({percentage:O})}},S.state={bgImage:v.bgImage,bgImageSrcSet:v.bgImageSrcSet,bgImageSizes:v.bgImageSizes,imgStyle:y,bgStyle:Object.assign(Object.assign({},y),v.bgStyle),percentage:0,splitChildren:d.getSplitChildren(v)},S.canUseDOM=m.canUseDOM(),S.node=null,S.content=null,S.bgImageLoaded=!1,S.bgImageRef=void 0,S.parent=v.parent,S.parentHeight=m.getNodeHeight(S.canUseDOM,S.parent),S.timestamp=Date.now(),S.isDynamicBlur=d.getHasDynamicBlur(v.blur),S}return function(S,k,O){return k&&a(S.prototype,k),O&&a(S,O),S}(C,[{key:"componentDidMount",value:function(){var S=this.props.parent,k=this.state,O=k.bgImage,I=k.bgImageSrcSet,M=k.bgImageSizes;this.parent=S||document,this.addListeners(),O?this.loadImage(O,I,M):this.updatePosition()}},{key:"componentDidUpdate",value:function(S){var k=this.props,O=k.parent,I=k.bgImage,M=k.bgImageSrcSet,L=k.bgImageSizes,$=this.state.bgImage;S.parent!==O&&(this.removeListeners(this.parent),this.parent=O,O&&this.addListeners()),this.parentHeight=m.getNodeHeight(this.canUseDOM,this.parent),$!==I&&this.loadImage(I,M,L)}},{key:"componentWillUnmount",value:function(){this.removeListeners(this.parent),this.releaseImage()}},{key:"setBackgroundPosition",value:function(S){var k=this.props,O=k.disabled,I=k.strength,M=Object.assign({},this.state.bgStyle);if(!O){var L="translate3d(-50%, ".concat((I<0?I:0)-I*S,"px, 0)");M.WebkitTransform=L,M.transform=L}this.setState({bgStyle:M,percentage:S})}},{key:"setImagePosition",value:function(S){var k=arguments.length>1&&arguments[1]!==void 0&&arguments[1],O=this.props,I=O.disabled,M=O.strength,L=O.blur,$=k?"auto":"".concat(this.getImageHeight(),"px"),U=k?"".concat(this.contentWidth,"px"):"auto",B=Object.assign(Object.assign({},this.state.imgStyle),{height:$,width:U});if(!I){var z=M<0,W=(z?M:0)-M*S,re="translate3d(-50%, ".concat(W,"px, 0)"),T="none";L&&(T="blur(".concat(d.getBlurValue(this.isDynamicBlur,L,S),"px)")),B.WebkitTransform=re,B.transform=re,B.WebkitFilter=T,B.filter=T}this.setState({imgStyle:B,percentage:S})}},{key:"getImageHeight",value:function(){var S=this.props.strength,k=(S<0?2.5:1)*Math.abs(S);return Math.floor(this.contentHeight+k)}},{key:"loadImage",value:function(S,k,O){var I=this;this.releaseImage(),this.bgImageRef=new Image,this.bgImageRef.onload=function(M){I.setState({bgImage:S,bgImageSrcSet:k,bgImageSizes:O},function(){return I.updatePosition()}),I.props.onLoad&&I.props.onLoad(M)},this.bgImageRef.onerror=this.bgImageRef.onload,this.bgImageRef.src=S,this.bgImageRef.srcset=k||"",this.bgImageRef.sizes=O||""}},{key:"releaseImage",value:function(){this.bgImageRef&&(this.bgImageRef.onload=null,this.bgImageRef.onerror=null,delete this.bgImageRef)}},{key:"addListeners",value:function(){this.canUseDOM&&this.parent&&(this.parent.addEventListener("scroll",this.onScroll,!1),window.addEventListener("resize",this.onWindowResize,!1),window.addEventListener("load",this.onWindowLoad,!1))}},{key:"removeListeners",value:function(S){this.canUseDOM&&(S&&S.removeEventListener("scroll",this.onScroll,!1),window.removeEventListener("resize",this.onWindowResize,!1),window.removeEventListener("load",this.onWindowLoad,!1))}},{key:"render",value:function(){var S=this,k=this.props,O=k.className,I=k.style,M=k.bgClassName,L=k.contentClassName,$=k.bgImageAlt,U=k.renderLayer,B=k.bgImageStyle,z=k.lazy,W=this.state,re=W.bgImage,T=W.bgImageSrcSet,ce=W.bgImageSizes,Ve=W.percentage,kt=W.imgStyle,me=W.bgStyle,Te=W.splitChildren;return h.default.createElement("div",{className:"react-parallax ".concat(O),style:Object.assign({position:"relative",overflow:"hidden"},I),ref:function(he){S.node=he}},re?h.default.createElement("img",{className:M,src:re,srcSet:T,sizes:ce,ref:function(he){S.img=he},alt:$,style:Object.assign(Object.assign({},kt),B),loading:z?"lazy":"eager"}):null,U?U(-(Ve-1)):null,Te.bgChildren.length>0?h.default.createElement("div",{className:"react-parallax-background-children",ref:function(he){S.bg=he},style:me},Te.bgChildren):null,h.default.createElement(b.default,{onMount:this.onContentMount,className:L},Te.children))}}],[{key:"getDerivedStateFromProps",value:function(S){return{splitChildren:d.getSplitChildren(S)}}}]),C}(g.Parallax);x.defaultProps={bgClassName:"react-parallax-bgimage",bgImageAlt:"",className:"",contentClassName:"",disabled:!1,strength:100},n.default=x},function(t,n,i){function o(c){return(o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f})(c)}Object.defineProperty(n,"__esModule",{value:!0}),n.setBlur=n.getBlurValue=n.getHasDynamicBlur=n.getSplitChildren=n.getRelativePosition=n.getPercentage=void 0;var a=i(0),l=i(2);n.getPercentage=function(c,u,f){return(f-c)/(u-c)||0},n.getRelativePosition=function(c,u){if(!u)return 0;var f=c.getBoundingClientRect(),p=f.top,h=f.height,g=l.getNodeHeight(u),d=h>g?h:g,m=Math.round(p>d?d:p);return n.getPercentage(0,d,m)},n.getSplitChildren=function(c){var u=[],f=a.Children.toArray(c.children);return f.forEach(function(p,h){var g=p;g.type&&g.type.isParallaxBackground&&(u=u.concat(f.splice(h,1)))}),{bgChildren:u,children:f}},n.getHasDynamicBlur=function(c){return o(c)==="object"&&c.min!==void 0&&c.max!==void 0},n.getBlurValue=function(c,u,f){return c?u.min+(1-f)*u.max:u},n.setBlur=function(c,u){c.style.webkitFilter="blur(".concat(u,"px)"),c.style.filter="blur(".concat(u,"px)")}},function(t,n,i){var o=this&&this.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(n,"__esModule",{value:!0});var a=o(i(0));n.default=function(c){var u=c.children,f=c.onMount,p=c.className;return a.default.createElement("div",{ref:function(g){return f(g)},className:p||"react-parallax-content",style:{position:"relative"}},u)}},function(t,n,i){function o(m){return(o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y})(m)}function a(m,b){if(!(m instanceof b))throw new TypeError("Cannot call a class as a function")}function l(m,b){for(var y=0;y<b.length;y++){var x=b[y];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(m,x.key,x)}}function c(m,b){return(c=Object.setPrototypeOf||function(x,w){return x.__proto__=w,x})(m,b)}function u(m){var b=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var x,w=p(m);if(b){var _=p(this).constructor;x=Reflect.construct(w,arguments,_)}else x=w.apply(this,arguments);return f(this,x)}}function f(m,b){return!b||o(b)!=="object"&&typeof b!="function"?function(x){if(x===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return x}(m):b}function p(m){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(y){return y.__proto__||Object.getPrototypeOf(y)})(m)}var h=this&&this.__importDefault||function(m){return m&&m.__esModule?m:{default:m}};Object.defineProperty(n,"__esModule",{value:!0});var g=h(i(0)),d=function(m){(function(w,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function");w.prototype=Object.create(_&&_.prototype,{constructor:{value:w,writable:!0,configurable:!0}}),_&&c(w,_)})(y,m);var b=u(y);function y(){return a(this,y),b.apply(this,arguments)}return function(w,_,C){return _&&l(w.prototype,_),w}(y,[{key:"render",value:function(){var w=this.props,_=w.className,C=w.children;return g.default.createElement("div",{className:"react-parallax-background ".concat(_)},C)}}]),y}(i(1).Background);d.defaultProps={className:""},d.isParallaxBackground=!0,n.default=d}])})}(os)),os.exports}var Jf=Qf();const ed="/assets/bg-C28rPa-6.webp";te.registerPlugin(H);function td(){const s=["Frontend","Backend","Low-level","Embedded","CLI Tooling","Linux/unix"],e=A.useRef([]);e.current=[];const r=A.useRef(null),t=n=>{n&&!e.current.includes(n)&&e.current.push(n)};return A.useEffect(()=>{const n=o=>window.innerWidth-o.getBoundingClientRect().left-o.offsetWidth-10,i=te.context(()=>{const o=te.timeline({scrollTrigger:{trigger:r.current,start:"top center",end:"+=500",scrub:1,invalidateOnRefresh:!0}});e.current.forEach((a,l)=>{o.to(a,{x:()=>n(a),ease:"power3.out"},l*.15)})},r);return()=>i.revert()},[]),R.jsxs("div",{className:"relative w-full h-[100vh] overflow-hidden",children:[R.jsx(Jf.Parallax,{bgImage:ed,strength:300,bgImageStyle:{objectFit:"cover",objectPosition:"center",minWidth:"100%",minHeight:"100%",width:"auto",height:"auto"},children:R.jsx("div",{style:{height:"100vh"}})}),R.jsx("div",{ref:r,className:"hidden absolute top-0 left-0 pt-5 md:flex flex-col items-start pointer-events-none",children:s.map(n=>R.jsx("h2",{ref:t,className:`text-white ${n==="CS @ Purdue"?"uppercase font-intersemibold text-[80px]":"uppercase font-interregular text-[140px]"} leading-none`,children:n},n))}),R.jsx("div",{className:"md:hidden absolute top-0 left-0 pt-5 flex flex-col items-start pointer-events-none pt-50 sm:pt-20",children:s.map(n=>R.jsx("h2",{className:"text-white uppercase font-interregular text-[70px] sm:text-[115px] leading-none text-nowrap",children:n}))})]})}function rd(s){if(s.sheet)return s.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===s)return document.styleSheets[e]}function nd(s){var e=document.createElement("style");return e.setAttribute("data-emotion",s.key),s.nonce!==void 0&&e.setAttribute("nonce",s.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var id=function(){function s(r){var t=this;this._insertTag=function(n){var i;t.tags.length===0?t.insertionPoint?i=t.insertionPoint.nextSibling:t.prepend?i=t.container.firstChild:i=t.before:i=t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(n,i),t.tags.push(n)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var e=s.prototype;return e.hydrate=function(t){t.forEach(this._insertTag)},e.insert=function(t){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(nd(this));var n=this.tags[this.tags.length-1];if(this.isSpeedy){var i=rd(n);try{i.insertRule(t,i.cssRules.length)}catch{}}else n.appendChild(document.createTextNode(t));this.ctr++},e.flush=function(){this.tags.forEach(function(t){var n;return(n=t.parentNode)==null?void 0:n.removeChild(t)}),this.tags=[],this.ctr=0},s}(),tt="-ms-",ws="-moz-",ie="-webkit-",Rc="comm",ta="rule",ra="decl",sd="@import",Mc="@keyframes",od="@layer",ad=Math.abs,Ps=String.fromCharCode,ld=Object.assign;function cd(s,e){return qe(s,0)^45?(((e<<2^qe(s,0))<<2^qe(s,1))<<2^qe(s,2))<<2^qe(s,3):0}function Ec(s){return s.trim()}function ud(s,e){return(s=e.exec(s))?s[0]:s}function se(s,e,r){return s.replace(e,r)}function To(s,e){return s.indexOf(e)}function qe(s,e){return s.charCodeAt(e)|0}function Ti(s,e,r){return s.slice(e,r)}function sr(s){return s.length}function na(s){return s.length}function qi(s,e){return e.push(s),s}function fd(s,e){return s.map(e).join("")}var Os=1,$n=1,Dc=0,Tt=0,Ie=0,Bn="";function Rs(s,e,r,t,n,i,o){return{value:s,root:e,parent:r,type:t,props:n,children:i,line:Os,column:$n,length:o,return:""}}function Gn(s,e){return ld(Rs("",null,null,"",null,null,0),s,{length:-s.length},e)}function dd(){return Ie}function hd(){return Ie=Tt>0?qe(Bn,--Tt):0,$n--,Ie===10&&($n=1,Os--),Ie}function Lt(){return Ie=Tt<Dc?qe(Bn,Tt++):0,$n++,Ie===10&&($n=1,Os++),Ie}function fr(){return qe(Bn,Tt)}function as(){return Tt}function Ri(s,e){return Ti(Bn,s,e)}function ki(s){switch(s){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ac(s){return Os=$n=1,Dc=sr(Bn=s),Tt=0,[]}function Ic(s){return Bn="",s}function ls(s){return Ec(Ri(Tt-1,ko(s===91?s+2:s===40?s+1:s)))}function pd(s){for(;(Ie=fr())&&Ie<33;)Lt();return ki(s)>2||ki(Ie)>3?"":" "}function md(s,e){for(;--e&&Lt()&&!(Ie<48||Ie>102||Ie>57&&Ie<65||Ie>70&&Ie<97););return Ri(s,as()+(e<6&&fr()==32&&Lt()==32))}function ko(s){for(;Lt();)switch(Ie){case s:return Tt;case 34:case 39:s!==34&&s!==39&&ko(Ie);break;case 40:s===41&&ko(s);break;case 92:Lt();break}return Tt}function gd(s,e){for(;Lt()&&s+Ie!==57;)if(s+Ie===84&&fr()===47)break;return"/*"+Ri(e,Tt-1)+"*"+Ps(s===47?s:Lt())}function _d(s){for(;!ki(fr());)Lt();return Ri(s,Tt)}function yd(s){return Ic(cs("",null,null,null,[""],s=Ac(s),0,[0],s))}function cs(s,e,r,t,n,i,o,a,l){for(var c=0,u=0,f=o,p=0,h=0,g=0,d=1,m=1,b=1,y=0,x="",w=n,_=i,C=t,v=x;m;)switch(g=y,y=Lt()){case 40:if(g!=108&&qe(v,f-1)==58){To(v+=se(ls(y),"&","&\f"),"&\f")!=-1&&(b=-1);break}case 34:case 39:case 91:v+=ls(y);break;case 9:case 10:case 13:case 32:v+=pd(g);break;case 92:v+=md(as()-1,7);continue;case 47:switch(fr()){case 42:case 47:qi(vd(gd(Lt(),as()),e,r),l);break;default:v+="/"}break;case 123*d:a[c++]=sr(v)*b;case 125*d:case 59:case 0:switch(y){case 0:case 125:m=0;case 59+u:b==-1&&(v=se(v,/\f/g,"")),h>0&&sr(v)-f&&qi(h>32?Va(v+";",t,r,f-1):Va(se(v," ","")+";",t,r,f-2),l);break;case 59:v+=";";default:if(qi(C=Wa(v,e,r,c,u,n,a,x,w=[],_=[],f),i),y===123)if(u===0)cs(v,e,C,C,w,i,f,a,_);else switch(p===99&&qe(v,3)===110?100:p){case 100:case 108:case 109:case 115:cs(s,C,C,t&&qi(Wa(s,C,C,0,0,n,a,x,n,w=[],f),_),n,_,f,a,t?w:_);break;default:cs(v,C,C,C,[""],_,0,a,_)}}c=u=h=0,d=b=1,x=v="",f=o;break;case 58:f=1+sr(v),h=g;default:if(d<1){if(y==123)--d;else if(y==125&&d++==0&&hd()==125)continue}switch(v+=Ps(y),y*d){case 38:b=u>0?1:(v+="\f",-1);break;case 44:a[c++]=(sr(v)-1)*b,b=1;break;case 64:fr()===45&&(v+=ls(Lt())),p=fr(),u=f=sr(x=v+=_d(as())),y++;break;case 45:g===45&&sr(v)==2&&(d=0)}}return i}function Wa(s,e,r,t,n,i,o,a,l,c,u){for(var f=n-1,p=n===0?i:[""],h=na(p),g=0,d=0,m=0;g<t;++g)for(var b=0,y=Ti(s,f+1,f=ad(d=o[g])),x=s;b<h;++b)(x=Ec(d>0?p[b]+" "+y:se(y,/&\f/g,p[b])))&&(l[m++]=x);return Rs(s,e,r,n===0?ta:a,l,c,u)}function vd(s,e,r){return Rs(s,e,r,Rc,Ps(dd()),Ti(s,2,-2),0)}function Va(s,e,r,t){return Rs(s,e,r,ra,Ti(s,0,t),Ti(s,t+1,-1),t)}function Dn(s,e){for(var r="",t=na(s),n=0;n<t;n++)r+=e(s[n],n,s,e)||"";return r}function bd(s,e,r,t){switch(s.type){case od:if(s.children.length)break;case sd:case ra:return s.return=s.return||s.value;case Rc:return"";case Mc:return s.return=s.value+"{"+Dn(s.children,t)+"}";case ta:s.value=s.props.join(",")}return sr(r=Dn(s.children,t))?s.return=s.value+"{"+r+"}":""}function xd(s){var e=na(s);return function(r,t,n,i){for(var o="",a=0;a<e;a++)o+=s[a](r,t,n,i)||"";return o}}function wd(s){return function(e){e.root||(e=e.return)&&s(e)}}function Sd(s){var e=Object.create(null);return function(r){return e[r]===void 0&&(e[r]=s(r)),e[r]}}var Td=function(e,r,t){for(var n=0,i=0;n=i,i=fr(),n===38&&i===12&&(r[t]=1),!ki(i);)Lt();return Ri(e,Tt)},kd=function(e,r){var t=-1,n=44;do switch(ki(n)){case 0:n===38&&fr()===12&&(r[t]=1),e[t]+=Td(Tt-1,r,t);break;case 2:e[t]+=ls(n);break;case 4:if(n===44){e[++t]=fr()===58?"&\f":"",r[t]=e[t].length;break}default:e[t]+=Ps(n)}while(n=Lt());return e},Cd=function(e,r){return Ic(kd(Ac(e),r))},Ha=new WeakMap,Pd=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var r=e.value,t=e.parent,n=e.column===t.column&&e.line===t.line;t.type!=="rule";)if(t=t.parent,!t)return;if(!(e.props.length===1&&r.charCodeAt(0)!==58&&!Ha.get(t))&&!n){Ha.set(e,!0);for(var i=[],o=Cd(r,i),a=t.props,l=0,c=0;l<o.length;l++)for(var u=0;u<a.length;u++,c++)e.props[c]=i[l]?o[l].replace(/&\f/g,a[u]):a[u]+" "+o[l]}}},Od=function(e){if(e.type==="decl"){var r=e.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(e.return="",e.value="")}};function jc(s,e){switch(cd(s,e)){case 5103:return ie+"print-"+s+s;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ie+s+s;case 5349:case 4246:case 4810:case 6968:case 2756:return ie+s+ws+s+tt+s+s;case 6828:case 4268:return ie+s+tt+s+s;case 6165:return ie+s+tt+"flex-"+s+s;case 5187:return ie+s+se(s,/(\w+).+(:[^]+)/,ie+"box-$1$2"+tt+"flex-$1$2")+s;case 5443:return ie+s+tt+"flex-item-"+se(s,/flex-|-self/,"")+s;case 4675:return ie+s+tt+"flex-line-pack"+se(s,/align-content|flex-|-self/,"")+s;case 5548:return ie+s+tt+se(s,"shrink","negative")+s;case 5292:return ie+s+tt+se(s,"basis","preferred-size")+s;case 6060:return ie+"box-"+se(s,"-grow","")+ie+s+tt+se(s,"grow","positive")+s;case 4554:return ie+se(s,/([^-])(transform)/g,"$1"+ie+"$2")+s;case 6187:return se(se(se(s,/(zoom-|grab)/,ie+"$1"),/(image-set)/,ie+"$1"),s,"")+s;case 5495:case 3959:return se(s,/(image-set\([^]*)/,ie+"$1$`$1");case 4968:return se(se(s,/(.+:)(flex-)?(.*)/,ie+"box-pack:$3"+tt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ie+s+s;case 4095:case 3583:case 4068:case 2532:return se(s,/(.+)-inline(.+)/,ie+"$1$2")+s;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(sr(s)-1-e>6)switch(qe(s,e+1)){case 109:if(qe(s,e+4)!==45)break;case 102:return se(s,/(.+:)(.+)-([^]+)/,"$1"+ie+"$2-$3$1"+ws+(qe(s,e+3)==108?"$3":"$2-$3"))+s;case 115:return~To(s,"stretch")?jc(se(s,"stretch","fill-available"),e)+s:s}break;case 4949:if(qe(s,e+1)!==115)break;case 6444:switch(qe(s,sr(s)-3-(~To(s,"!important")&&10))){case 107:return se(s,":",":"+ie)+s;case 101:return se(s,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ie+(qe(s,14)===45?"inline-":"")+"box$3$1"+ie+"$2$3$1"+tt+"$2box$3")+s}break;case 5936:switch(qe(s,e+11)){case 114:return ie+s+tt+se(s,/[svh]\w+-[tblr]{2}/,"tb")+s;case 108:return ie+s+tt+se(s,/[svh]\w+-[tblr]{2}/,"tb-rl")+s;case 45:return ie+s+tt+se(s,/[svh]\w+-[tblr]{2}/,"lr")+s}return ie+s+tt+s+s}return s}var Rd=function(e,r,t,n){if(e.length>-1&&!e.return)switch(e.type){case ra:e.return=jc(e.value,e.length);break;case Mc:return Dn([Gn(e,{value:se(e.value,"@","@"+ie)})],n);case ta:if(e.length)return fd(e.props,function(i){switch(ud(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Dn([Gn(e,{props:[se(i,/:(read-\w+)/,":"+ws+"$1")]})],n);case"::placeholder":return Dn([Gn(e,{props:[se(i,/:(plac\w+)/,":"+ie+"input-$1")]}),Gn(e,{props:[se(i,/:(plac\w+)/,":"+ws+"$1")]}),Gn(e,{props:[se(i,/:(plac\w+)/,tt+"input-$1")]})],n)}return""})}},Md=[Rd],Ed=function(e){var r=e.key;if(r==="css"){var t=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(t,function(d){var m=d.getAttribute("data-emotion");m.indexOf(" ")!==-1&&(document.head.appendChild(d),d.setAttribute("data-s",""))})}var n=e.stylisPlugins||Md,i={},o,a=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(d){for(var m=d.getAttribute("data-emotion").split(" "),b=1;b<m.length;b++)i[m[b]]=!0;a.push(d)});var l,c=[Pd,Od];{var u,f=[bd,wd(function(d){u.insert(d)})],p=xd(c.concat(n,f)),h=function(m){return Dn(yd(m),p)};l=function(m,b,y,x){u=y,h(m?m+"{"+b.styles+"}":b.styles),x&&(g.inserted[b.name]=!0)}}var g={key:r,sheet:new id({key:r,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:l};return g.sheet.hydrate(a),g},Us={exports:{}},oe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ua;function Dd(){if(Ua)return oe;Ua=1;var s=typeof Symbol=="function"&&Symbol.for,e=s?Symbol.for("react.element"):60103,r=s?Symbol.for("react.portal"):60106,t=s?Symbol.for("react.fragment"):60107,n=s?Symbol.for("react.strict_mode"):60108,i=s?Symbol.for("react.profiler"):60114,o=s?Symbol.for("react.provider"):60109,a=s?Symbol.for("react.context"):60110,l=s?Symbol.for("react.async_mode"):60111,c=s?Symbol.for("react.concurrent_mode"):60111,u=s?Symbol.for("react.forward_ref"):60112,f=s?Symbol.for("react.suspense"):60113,p=s?Symbol.for("react.suspense_list"):60120,h=s?Symbol.for("react.memo"):60115,g=s?Symbol.for("react.lazy"):60116,d=s?Symbol.for("react.block"):60121,m=s?Symbol.for("react.fundamental"):60117,b=s?Symbol.for("react.responder"):60118,y=s?Symbol.for("react.scope"):60119;function x(_){if(typeof _=="object"&&_!==null){var C=_.$$typeof;switch(C){case e:switch(_=_.type,_){case l:case c:case t:case i:case n:case f:return _;default:switch(_=_&&_.$$typeof,_){case a:case u:case g:case h:case o:return _;default:return C}}case r:return C}}}function w(_){return x(_)===c}return oe.AsyncMode=l,oe.ConcurrentMode=c,oe.ContextConsumer=a,oe.ContextProvider=o,oe.Element=e,oe.ForwardRef=u,oe.Fragment=t,oe.Lazy=g,oe.Memo=h,oe.Portal=r,oe.Profiler=i,oe.StrictMode=n,oe.Suspense=f,oe.isAsyncMode=function(_){return w(_)||x(_)===l},oe.isConcurrentMode=w,oe.isContextConsumer=function(_){return x(_)===a},oe.isContextProvider=function(_){return x(_)===o},oe.isElement=function(_){return typeof _=="object"&&_!==null&&_.$$typeof===e},oe.isForwardRef=function(_){return x(_)===u},oe.isFragment=function(_){return x(_)===t},oe.isLazy=function(_){return x(_)===g},oe.isMemo=function(_){return x(_)===h},oe.isPortal=function(_){return x(_)===r},oe.isProfiler=function(_){return x(_)===i},oe.isStrictMode=function(_){return x(_)===n},oe.isSuspense=function(_){return x(_)===f},oe.isValidElementType=function(_){return typeof _=="string"||typeof _=="function"||_===t||_===c||_===i||_===n||_===f||_===p||typeof _=="object"&&_!==null&&(_.$$typeof===g||_.$$typeof===h||_.$$typeof===o||_.$$typeof===a||_.$$typeof===u||_.$$typeof===m||_.$$typeof===b||_.$$typeof===y||_.$$typeof===d)},oe.typeOf=x,oe}var qa;function Ad(){return qa||(qa=1,Us.exports=Dd()),Us.exports}var qs,Ga;function Id(){if(Ga)return qs;Ga=1;var s=Ad(),e={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},t={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},n={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};i[s.ForwardRef]=t,i[s.Memo]=n;function o(g){return s.isMemo(g)?n:i[g.$$typeof]||e}var a=Object.defineProperty,l=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,p=Object.prototype;function h(g,d,m){if(typeof d!="string"){if(p){var b=f(d);b&&b!==p&&h(g,b,m)}var y=l(d);c&&(y=y.concat(c(d)));for(var x=o(g),w=o(d),_=0;_<y.length;++_){var C=y[_];if(!r[C]&&!(m&&m[C])&&!(w&&w[C])&&!(x&&x[C])){var v=u(d,C);try{a(g,C,v)}catch{}}}}return g}return qs=h,qs}Id();var jd=!0;function Nc(s,e,r){var t="";return r.split(" ").forEach(function(n){s[n]!==void 0?e.push(s[n]+";"):n&&(t+=n+" ")}),t}var ia=function(e,r,t){var n=e.key+"-"+r.name;(t===!1||jd===!1)&&e.registered[n]===void 0&&(e.registered[n]=r.styles)},Lc=function(e,r,t){ia(e,r,t);var n=e.key+"-"+r.name;if(e.inserted[r.name]===void 0){var i=r;do e.insert(r===i?"."+n:"",i,e.sheet,!0),i=i.next;while(i!==void 0)}};function Nd(s){for(var e=0,r,t=0,n=s.length;n>=4;++t,n-=4)r=s.charCodeAt(t)&255|(s.charCodeAt(++t)&255)<<8|(s.charCodeAt(++t)&255)<<16|(s.charCodeAt(++t)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,e=(r&65535)*1540483477+((r>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(n){case 3:e^=(s.charCodeAt(t+2)&255)<<16;case 2:e^=(s.charCodeAt(t+1)&255)<<8;case 1:e^=s.charCodeAt(t)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var Ld={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},zd=/[A-Z]|^ms/g,Fd=/_EMO_([^_]+?)_([^]*?)_EMO_/g,zc=function(e){return e.charCodeAt(1)===45},Za=function(e){return e!=null&&typeof e!="boolean"},Gs=Sd(function(s){return zc(s)?s:s.replace(zd,"-$&").toLowerCase()}),Ka=function(e,r){switch(e){case"animation":case"animationName":if(typeof r=="string")return r.replace(Fd,function(t,n,i){return or={name:n,styles:i,next:or},n})}return Ld[e]!==1&&!zc(e)&&typeof r=="number"&&r!==0?r+"px":r};function Ci(s,e,r){if(r==null)return"";var t=r;if(t.__emotion_styles!==void 0)return t;switch(typeof r){case"boolean":return"";case"object":{var n=r;if(n.anim===1)return or={name:n.name,styles:n.styles,next:or},n.name;var i=r;if(i.styles!==void 0){var o=i.next;if(o!==void 0)for(;o!==void 0;)or={name:o.name,styles:o.styles,next:or},o=o.next;var a=i.styles+";";return a}return $d(s,e,r)}case"function":{if(s!==void 0){var l=or,c=r(s);return or=l,Ci(s,e,c)}break}}var u=r;if(e==null)return u;var f=e[u];return f!==void 0?f:u}function $d(s,e,r){var t="";if(Array.isArray(r))for(var n=0;n<r.length;n++)t+=Ci(s,e,r[n])+";";else for(var i in r){var o=r[i];if(typeof o!="object"){var a=o;e!=null&&e[a]!==void 0?t+=i+"{"+e[a]+"}":Za(a)&&(t+=Gs(i)+":"+Ka(i,a)+";")}else if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var l=0;l<o.length;l++)Za(o[l])&&(t+=Gs(i)+":"+Ka(i,o[l])+";");else{var c=Ci(s,e,o);switch(i){case"animation":case"animationName":{t+=Gs(i)+":"+c+";";break}default:t+=i+"{"+c+"}"}}}return t}var Qa=/label:\s*([^\s;{]+)\s*(;|$)/g,or;function sa(s,e,r){if(s.length===1&&typeof s[0]=="object"&&s[0]!==null&&s[0].styles!==void 0)return s[0];var t=!0,n="";or=void 0;var i=s[0];if(i==null||i.raw===void 0)t=!1,n+=Ci(r,e,i);else{var o=i;n+=o[0]}for(var a=1;a<s.length;a++)if(n+=Ci(r,e,s[a]),t){var l=i;n+=l[a]}Qa.lastIndex=0;for(var c="",u;(u=Qa.exec(n))!==null;)c+="-"+u[1];var f=Nd(n)+c;return{name:f,styles:n,next:or}}var Bd=function(e){return e()},Yd=aa.useInsertionEffect?aa.useInsertionEffect:!1,Fc=Yd||Bd,$c=A.createContext(typeof HTMLElement<"u"?Ed({key:"css"}):null);$c.Provider;var Bc=function(e){return A.forwardRef(function(r,t){var n=A.useContext($c);return e(r,n,t)})},Yc=A.createContext({}),Ms={}.hasOwnProperty,Co="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Xc=function(e,r){var t={};for(var n in r)Ms.call(r,n)&&(t[n]=r[n]);return t[Co]=e,t},Xd=function(e){var r=e.cache,t=e.serialized,n=e.isStringTag;return ia(r,t,n),Fc(function(){return Lc(r,t,n)}),null},Wd=Bc(function(s,e,r){var t=s.css;typeof t=="string"&&e.registered[t]!==void 0&&(t=e.registered[t]);var n=s[Co],i=[t],o="";typeof s.className=="string"?o=Nc(e.registered,i,s.className):s.className!=null&&(o=s.className+" ");var a=sa(i,void 0,A.useContext(Yc));o+=e.key+"-"+a.name;var l={};for(var c in s)Ms.call(s,c)&&c!=="css"&&c!==Co&&(l[c]=s[c]);return l.className=o,r&&(l.ref=r),A.createElement(A.Fragment,null,A.createElement(Xd,{cache:e,serialized:a,isStringTag:typeof n=="string"}),A.createElement(n,l))}),Wc=Wd,Vd=R.Fragment,Ye=function(e,r,t){return Ms.call(r,"css")?R.jsx(Wc,Xc(e,r),t):R.jsx(e,r,t)},Ja=function(e,r){var t=arguments;if(r==null||!Ms.call(r,"css"))return A.createElement.apply(void 0,t);var n=t.length,i=new Array(n);i[0]=Wc,i[1]=Xc(e,r);for(var o=2;o<n;o++)i[o]=t[o];return A.createElement.apply(null,i)};(function(s){var e;e||(e=s.JSX||(s.JSX={}))})(Ja||(Ja={}));function Vc(){for(var s=arguments.length,e=new Array(s),r=0;r<s;r++)e[r]=arguments[r];return sa(e)}function E(){var s=Vc.apply(void 0,arguments),e="animation-"+s.name;return{name:e,styles:"@keyframes "+e+"{"+s.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var Hd=function s(e){for(var r=e.length,t=0,n="";t<r;t++){var i=e[t];if(i!=null){var o=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))o=s(i);else{o="";for(var a in i)i[a]&&a&&(o&&(o+=" "),o+=a)}break}default:o=i}o&&(n&&(n+=" "),n+=o)}}return n};function Ud(s,e,r){var t=[],n=Nc(s,t,r);return t.length<2?r:n+e(t)}var qd=function(e){var r=e.cache,t=e.serializedArr;return Fc(function(){for(var n=0;n<t.length;n++)Lc(r,t[n],!1)}),null},Zs=Bc(function(s,e){var r=[],t=function(){for(var l=arguments.length,c=new Array(l),u=0;u<l;u++)c[u]=arguments[u];var f=sa(c,e.registered);return r.push(f),ia(e,f,!1),e.key+"-"+f.name},n=function(){for(var l=arguments.length,c=new Array(l),u=0;u<l;u++)c[u]=arguments[u];return Ud(e.registered,t,Hd(c))},i={css:t,cx:n,theme:A.useContext(Yc)},o=s.children(i);return A.createElement(A.Fragment,null,A.createElement(qd,{cache:e,serializedArr:r}),o)}),Gd=Object.defineProperty,Zd=(s,e,r)=>e in s?Gd(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r,Gi=(s,e,r)=>Zd(s,typeof e!="symbol"?e+"":e,r),Po=new Map,Zi=new WeakMap,el=0,Kd=void 0;function Qd(s){return s?(Zi.has(s)||(el+=1,Zi.set(s,el.toString())),Zi.get(s)):"0"}function Jd(s){return Object.keys(s).sort().filter(e=>s[e]!==void 0).map(e=>`${e}_${e==="root"?Qd(s.root):s[e]}`).toString()}function e0(s){const e=Jd(s);let r=Po.get(e);if(!r){const t=new Map;let n;const i=new IntersectionObserver(o=>{o.forEach(a=>{var l;const c=a.isIntersecting&&n.some(u=>a.intersectionRatio>=u);s.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=c),(l=t.get(a.target))==null||l.forEach(u=>{u(c,a)})})},s);n=i.thresholds||(Array.isArray(s.threshold)?s.threshold:[s.threshold||0]),r={id:e,observer:i,elements:t},Po.set(e,r)}return r}function Hc(s,e,r={},t=Kd){if(typeof window.IntersectionObserver>"u"&&t!==void 0){const l=s.getBoundingClientRect();return e(t,{isIntersecting:t,target:s,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:n,observer:i,elements:o}=e0(r),a=o.get(s)||[];return o.has(s)||o.set(s,a),a.push(e),i.observe(s),function(){a.splice(a.indexOf(e),1),a.length===0&&(o.delete(s),i.unobserve(s)),o.size===0&&(i.disconnect(),Po.delete(n))}}function t0(s){return typeof s.children!="function"}var tl=class extends A.Component{constructor(s){super(s),Gi(this,"node",null),Gi(this,"_unobserveCb",null),Gi(this,"handleNode",e=>{this.node&&(this.unobserve(),!e&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()}),Gi(this,"handleChange",(e,r)=>{e&&this.props.triggerOnce&&this.unobserve(),t0(this.props)||this.setState({inView:e,entry:r}),this.props.onChange&&this.props.onChange(e,r)}),this.state={inView:!!s.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(s){(s.rootMargin!==this.props.rootMargin||s.root!==this.props.root||s.threshold!==this.props.threshold||s.skip!==this.props.skip||s.trackVisibility!==this.props.trackVisibility||s.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:s,root:e,rootMargin:r,trackVisibility:t,delay:n,fallbackInView:i}=this.props;this._unobserveCb=Hc(this.node,this.handleChange,{threshold:s,root:e,rootMargin:r,trackVisibility:t,delay:n},i)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:s}=this.props;if(typeof s=="function"){const{inView:h,entry:g}=this.state;return s({inView:h,entry:g,ref:this.handleNode})}const{as:e,triggerOnce:r,threshold:t,root:n,rootMargin:i,onChange:o,skip:a,trackVisibility:l,delay:c,initialInView:u,fallbackInView:f,...p}=this.props;return A.createElement(e||"div",{ref:this.handleNode,...p},s)}};function Uc({threshold:s,delay:e,trackVisibility:r,rootMargin:t,root:n,triggerOnce:i,skip:o,initialInView:a,fallbackInView:l,onChange:c}={}){var u;const[f,p]=A.useState(null),h=A.useRef(c),[g,d]=A.useState({inView:!!a,entry:void 0});h.current=c,A.useEffect(()=>{if(o||!f)return;let x;return x=Hc(f,(w,_)=>{d({inView:w,entry:_}),h.current&&h.current(w,_),_.isIntersecting&&i&&x&&(x(),x=void 0)},{root:n,rootMargin:t,threshold:s,trackVisibility:r,delay:e},l),()=>{x&&x()}},[Array.isArray(s)?s.toString():s,f,n,t,i,o,r,l,e]);const m=(u=g.entry)==null?void 0:u.target,b=A.useRef(void 0);!f&&m&&!i&&!o&&b.current!==m&&(b.current=m,d({inView:!!a,entry:void 0}));const y=[p,g.inView,g.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}var Ks={exports:{}},ae={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rl;function r0(){if(rl)return ae;rl=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),t=Symbol.for("react.strict_mode"),n=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),o=Symbol.for("react.context"),a=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),u=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.for("react.offscreen"),g;g=Symbol.for("react.module.reference");function d(m){if(typeof m=="object"&&m!==null){var b=m.$$typeof;switch(b){case s:switch(m=m.type,m){case r:case n:case t:case c:case u:return m;default:switch(m=m&&m.$$typeof,m){case a:case o:case l:case p:case f:case i:return m;default:return b}}case e:return b}}}return ae.ContextConsumer=o,ae.ContextProvider=i,ae.Element=s,ae.ForwardRef=l,ae.Fragment=r,ae.Lazy=p,ae.Memo=f,ae.Portal=e,ae.Profiler=n,ae.StrictMode=t,ae.Suspense=c,ae.SuspenseList=u,ae.isAsyncMode=function(){return!1},ae.isConcurrentMode=function(){return!1},ae.isContextConsumer=function(m){return d(m)===o},ae.isContextProvider=function(m){return d(m)===i},ae.isElement=function(m){return typeof m=="object"&&m!==null&&m.$$typeof===s},ae.isForwardRef=function(m){return d(m)===l},ae.isFragment=function(m){return d(m)===r},ae.isLazy=function(m){return d(m)===p},ae.isMemo=function(m){return d(m)===f},ae.isPortal=function(m){return d(m)===e},ae.isProfiler=function(m){return d(m)===n},ae.isStrictMode=function(m){return d(m)===t},ae.isSuspense=function(m){return d(m)===c},ae.isSuspenseList=function(m){return d(m)===u},ae.isValidElementType=function(m){return typeof m=="string"||typeof m=="function"||m===r||m===n||m===t||m===c||m===u||m===h||typeof m=="object"&&m!==null&&(m.$$typeof===p||m.$$typeof===f||m.$$typeof===i||m.$$typeof===o||m.$$typeof===l||m.$$typeof===g||m.getModuleId!==void 0)},ae.typeOf=d,ae}var nl;function n0(){return nl||(nl=1,Ks.exports=r0()),Ks.exports}var i0=n0();const s0=E`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,o0=E`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,a0=E`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,l0=E`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,c0=E`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,u0=E`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,f0=E`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,d0=E`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,h0=E`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,p0=E`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,m0=E`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,g0=E`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,_0=E`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;E`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;const qc=E`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function y0({duration:s=1e3,delay:e=0,timingFunction:r="ease",keyframes:t=qc,iterationCount:n=1}){return Vc`
    animation-duration: ${s}ms;
    animation-timing-function: ${r};
    animation-delay: ${e}ms;
    animation-name: ${t};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${n};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function v0(s){return s==null}function b0(s){return typeof s=="string"||typeof s=="number"||typeof s=="boolean"}function Gc(s,e){return r=>r?s():e()}function Pi(s){return Gc(s,()=>null)}function Oo(s){return Pi(()=>({opacity:0}))(s)}const Zc=s=>{const{cascade:e=!1,damping:r=.5,delay:t=0,duration:n=1e3,fraction:i=0,keyframes:o=qc,triggerOnce:a=!1,className:l,style:c,childClassName:u,childStyle:f,children:p,onVisibilityChange:h}=s,g=A.useMemo(()=>y0({keyframes:o,duration:n}),[n,o]);return v0(p)?null:b0(p)?Ye(w0,{...s,animationStyles:g,children:String(p)}):i0.isFragment(p)?Ye(Kc,{...s,animationStyles:g}):Ye(Vd,{children:A.Children.map(p,(d,m)=>{if(!A.isValidElement(d))return null;const b=t+(e?m*n*r:0);switch(d.type){case"ol":case"ul":return Ye(Zs,{children:({cx:y})=>Ye(d.type,{...d.props,className:y(l,d.props.className),style:Object.assign({},c,d.props.style),children:Ye(Zc,{...s,children:d.props.children})})});case"li":return Ye(tl,{threshold:i,triggerOnce:a,onChange:h,children:({inView:y,ref:x})=>Ye(Zs,{children:({cx:w})=>Ye(d.type,{...d.props,ref:x,className:w(u,d.props.className),css:Pi(()=>g)(y),style:Object.assign({},f,d.props.style,Oo(!y),{animationDelay:b+"ms"})})})});default:return Ye(tl,{threshold:i,triggerOnce:a,onChange:h,children:({inView:y,ref:x})=>Ye("div",{ref:x,className:l,css:Pi(()=>g)(y),style:Object.assign({},c,Oo(!y),{animationDelay:b+"ms"}),children:Ye(Zs,{children:({cx:w})=>Ye(d.type,{...d.props,className:w(u,d.props.className),style:Object.assign({},f,d.props.style)})})})})}})})},x0={display:"inline-block",whiteSpace:"pre"},w0=s=>{const{animationStyles:e,cascade:r=!1,damping:t=.5,delay:n=0,duration:i=1e3,fraction:o=0,triggerOnce:a=!1,className:l,style:c,children:u,onVisibilityChange:f}=s,{ref:p,inView:h}=Uc({triggerOnce:a,threshold:o,onChange:f});return Gc(()=>Ye("div",{ref:p,className:l,style:Object.assign({},c,x0),children:u.split("").map((g,d)=>Ye("span",{css:Pi(()=>e)(h),style:{animationDelay:n+d*i*t+"ms"},children:g},d))}),()=>Ye(Kc,{...s,children:u}))(r)},Kc=s=>{const{animationStyles:e,fraction:r=0,triggerOnce:t=!1,className:n,style:i,children:o,onVisibilityChange:a}=s,{ref:l,inView:c}=Uc({triggerOnce:t,threshold:r,onChange:a});return Ye("div",{ref:l,className:n,css:Pi(()=>e)(c),style:Object.assign({},i,Oo(!c)),children:o})};function S0(s){switch(s){case"bounce":return[s0,{transformOrigin:"center bottom"}];case"flash":return[o0];case"headShake":return[a0,{animationTimingFunction:"ease-in-out"}];case"heartBeat":return[l0,{animationTimingFunction:"ease-in-out"}];case"jello":return[c0,{transformOrigin:"center"}];case"pulse":return[u0,{animationTimingFunction:"ease-in-out"}];case"rubberBand":return[f0];case"shake":return[d0];case"shakeX":return[h0];case"shakeY":return[p0];case"swing":return[m0,{transformOrigin:"top center"}];case"tada":return[g0];case"wobble":return[_0]}}const T0=s=>{const{effect:e="bounce",style:r,...t}=s,[n,i]=A.useMemo(()=>S0(e),[e]);return Ye(Zc,{keyframes:n,style:Object.assign({},r,i),...t})};E`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;E`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;E`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;E`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;E`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;E`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;E`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`;E`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`;E`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`;E`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;E`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;E`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;E`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;E`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;E`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;E`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;E`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;E`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;E`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;E`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;E`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;E`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;E`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;E`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;E`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;E`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;E`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;E`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;E`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;E`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;E`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;E`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;E`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;E`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;E`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;E`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;E`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function k0(){const s=A.useRef(null),e=A.useRef(null);return A.useEffect(()=>{te.registerPlugin(H);const r=te.context(()=>{te.from(s.current.querySelectorAll("img"),{opacity:0,y:20,stagger:.08,duration:.6,ease:"power3.out",scrollTrigger:{trigger:s.current,start:"top 80%",once:!0}}),te.from(e.current.querySelectorAll("img"),{opacity:0,y:20,stagger:.08,duration:.6,ease:"power3.out",delay:.3,scrollTrigger:{trigger:e.current,start:"top 80%",once:!0}})});return()=>r.revert()},[]),R.jsxs("div",{ref:root,id:"about",className:"relative bg-gradient-to-b from-gradexit to-white w-full min-h-screen pb-40",children:[R.jsx(T0,{effect:"tada",triggerOnce:!0,children:R.jsx("h1",{className:"pt-30 lg:pr-215 font-intersemibold text-[60px] text-center leading-none",children:"Hi!"})}),R.jsx("h1",{className:"font-intersemibold text-[70px] sm:text-[100px] md:text-[120px] lg:text-[160px] text-center leading-none",children:"I'm Benjamin"}),R.jsx("div",{ref:s,className:"pt-20 top-100 flex flex-wrap gap-3 justify-center w-full",children:["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/lua/lua-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/latex/latex-original.svg"].map(r=>R.jsx("img",{src:r,alt:"",className:"h-10 w-10 md:h-15 md:w-15"},r))}),R.jsx("div",{ref:e,className:"pt-14 md:pt-5 top-120 flex flex-wrap gap-4 justify-center w-full",children:["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hugo/hugo-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unix/unix-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/debian/debian-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gcc/gcc-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neovim/neovim-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vim/vim-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sdl/sdl-original.svg"].map(r=>R.jsx("img",{src:r,alt:"",className:"h-10 w-10 md:h-12 md:w-12"},r))}),R.jsxs("div",{className:"pt-20 flex flex-col items-center gap-10 px-4",children:[R.jsx("p",{className:"font-interregular text-[25px] text-left max-w-4xl",children:"Hi, I’m Benjamin Lobos Lertpunyaroj, a third‑year CS student at Purdue University. I enjoy exploring how low‑level systems work, and also front‑end web design."}),R.jsx("p",{className:"font-interlight text-[25px] text-left max-w-4xl",children:"While most of my current work is focused on low‑level languages/software/tooling, my experience is far broader, going into other areas as well. Lately, I’ve found computer architecture design quite interesting and enjoy actively learning about that field."}),R.jsx("p",{className:"font-interlight text-[25px] text-left max-w-4xl",children:"I currently work as a teaching assistant for Purdue’s CS 240 course, Programming in C. There, I design and write homework assignments, midterm practices, and contribute to exam development work in LaTeX."})]})]})}const C0="/icons/github.svg",P0="/icons/link.svg",O0="/icons/amazon.svg";function R0(s){return s>=20?"bg-blue-950 border-blue-950":s>=10?"bg-blue-900 border-blue-950":s>=5?"bg-blue-800/80 border-blue-900":s>=1?"bg-blue-700/50 border-blue-800/60":"bg-stone-100/90 border-stone-200"}function M0(s){return new Date(s).toLocaleDateString(void 0,{weekday:"long",month:"short",day:"numeric",year:"numeric",timeZone:"UTC"})}function il(s){return new Date(s).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric",timeZone:"UTC"})}function E0(s){if(!s||s.length===0)return[];const e=[...s].map(n=>({date:n.date,contributionCount:n.count??n.contributionCount??0,weekday:new Date(`${n.date}T00:00:00Z`).getUTCDay()})).sort((n,i)=>new Date(n.date)-new Date(i.date)),r=[];let t=new Array(7).fill(null);for(let n=0;n<e.length;n++){const i=e[n];t[i.weekday]=i;const o=i.weekday===6,a=n===e.length-1;(o||a)&&(r.push(t),t=new Array(7).fill(null))}return r}function D0({username:s="Blobosle",year:e="last",setDisableCursorTrail:r}){const[t,n]=A.useState(null),[i,o]=A.useState(!0),[a,l]=A.useState("");A.useEffect(()=>{let p=!1;async function h(){try{o(!0),l("");const g=await fetch(`https://github-contributions-api.jogruber.de/v4/${s}?y=${e}`);if(!g.ok)throw new Error(`Request failed: ${g.status}`);const d=await g.json();p||n(d)}catch(g){p||l(g.message||"Failed to load contributions")}finally{p||o(!1)}}return h(),()=>{p=!0}},[s,e]);const c=A.useMemo(()=>E0(t?.contributions||[]),[t]),u=t?.contributions?.[0],f=t?.contributions?.[t.contributions.length-1];return i?R.jsx("div",{className:"w-full py-4 text-sm text-stone-500"}):a?R.jsxs("div",{className:"w-full py-4 text-sm text-red-600",children:["Failed to load GitHub contributions: ",a]}):R.jsx("div",{className:"mt-7 block bg-transparent py-2",children:R.jsx("div",{className:"overflow-visible pt-10",children:R.jsx("div",{className:"w-full py-1",onMouseEnter:()=>r?.(!0),onMouseLeave:()=>r?.(!1),children:R.jsx("div",{className:"w-full overflow-x-auto py-4 [direction:rtl]",children:R.jsxs("div",{className:"flex w-max flex-row items-center gap-4 px-6 [direction:ltr]",children:[u&&R.jsx("div",{className:"[writing-mode:vertical-rl] rotate-180 text-center font-interregular text-lg text-stone-600",children:il(u.date)}),R.jsx("div",{className:"flex flex-row gap-1 overflow-visible",children:c.map((p,h)=>R.jsx("div",{className:"flex flex-col gap-1 overflow-visible",children:p.map((g,d)=>g?R.jsxs("div",{className:"group relative",children:[R.jsx("a",{href:`https://github.com/${s}`,target:"_blank",rel:"noreferrer","aria-label":`${g.contributionCount} commit${g.contributionCount===1?"":"s"} on ${M0(g.date)}`,className:`block h-6 w-6 rounded-md border shadow-sm transition-transform ease-out hover:scale-125 hover:border-2 ${R0(g.contributionCount)}`}),g.contributionCount>0&&R.jsxs("div",{className:`font-interlight pointer-events-none absolute left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-md border border-black bg-white px-2 py-1 text-xs text-black opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 ${d<1?"top-full mt-2":"bottom-full mb-2"}`,children:[g.contributionCount," commit",g.contributionCount===1?"":"s"]})]},`${g.date}-${d}`):R.jsx("div",{className:"h-6 w-6"},`empty-${h}-${d}`))},h))}),f&&R.jsx("div",{className:"[writing-mode:vertical-rl] text-center font-interregular text-lg text-stone-600",children:il(f.date)})]})})})})})}function A0({setDisableCursorTrail:s}){const e="(min-width: 768px)",[r,t]=A.useState(()=>window.matchMedia(e).matches?.8:.5);A.useEffect(()=>{const v=window.matchMedia(e),S=({matches:k})=>t(k?.8:.5);return v.addEventListener("change",S),()=>v.removeEventListener("change",S)},[]);const n={github:C0,link:P0,amazon:O0},i=[{label:"BoilerMate",img:"/images/boilermate.webp",desc:"typescript, postgreSQL, supabase, prisma, nestJS",red:"https://boilermate.dinhhuytuan.dev/",links:[{type:"link",url:"https://boilermate.dinhhuytuan.dev/"},{type:"github",url:"https://github.com/Blobosle/boilermate"}]},{label:"slayterHIL",img:"/images/slayterHIL.webp",desc:"embedded C, C++, raspberry pi, RTOS",red:"https://esap.dev/",links:[{type:"link",url:"https://esap.dev/"},{type:"github",url:"https://github.com/embedded-purdue/slayterHIL"}]},{label:"ScreenCopy",img:"/images/screen-copy.webp",desc:"swift, electron, typescript, esbuild",red:"https://github.com/Blobosle/screen-copy",links:[{type:"github",url:"https://github.com/Blobosle/screen-copy"}]},{label:"elite edge",img:"/images/elite-edge.webp",desc:"react, tailwindCSS, python, postgreSQL",red:"https://www.eliteedge.one/",links:[{type:"link",url:"https://www.eliteedge.one/"},{type:"link",url:"https://medium.com/@maixuankhoi05/a-decade-of-college-basketball-9a0eaeb3806e"},{}]},{label:"automated minecraft journal",img:"/images/minecraft.webp",desc:"web assembly, C++, react, JS, shell",red:"https://minecraft.blobosle.com/",links:[{type:"link",url:"https://minecraft.blobosle.com/"},{type:"github",url:"https://github.com/Blobosle/wasm-myworld"}]},{label:"chip-8 emulator/interpreter",img:"/images/chip-8.webp",desc:"C, C++ (SDL2 graphics)",red:"https://github.com/blobosle/chip-8",links:[{type:"github",url:"https://github.com/blobosle/chip-8"}]},{label:"macos neovim",img:"/images/macos-neovim.webp",desc:"bash, applescript",red:"https://github.com/Blobosle/macos-neovim",links:[{type:"github",url:"https://github.com/Blobosle/macos-neovim"}]},{label:"mintex",img:"/images/mintex.webp",desc:"latex, lua",red:"https://github.com/Blobosle/mintex.nvim",links:[{type:"github",url:"https://github.com/Blobosle/mintex.nvim"}]},{label:"unity 2d: front to back",img:"/images/unity-book.webp",desc:"technical game dev publishing",red:"https://www.amazon.com/Unity-2D-Front-Back-development-ebook/dp/B0BG1C3BZT",links:[{type:"amazon",url:"https://www.amazon.com/Unity-2D-Front-Back-development-ebook/dp/B0BG1C3BZT"}]},{label:"benji's digital camera",img:"/images/digital.webp",desc:"javascript, html/css",red:"https://blobosle.com/digital/",links:[{type:"link",url:"https://blobosle.com/digital/"}]},{label:"boilerbyte",img:"/images/boilerbyte.webp",desc:"react, tailwindCSS, vite, vercel",red:"https://boilerbyte.com/",links:[{type:"link",url:"https://boilerbyte.com/"},{type:"github",url:"https://github.com/Blobosle/boilerbyte"}]},{label:"planet gravity",img:"/images/planet-gravity.webp",desc:"C#, unity game engine",red:"https://github.com/WayraCodes/Planet-Gravity",links:[{type:"github",url:"https://github.com/WayraCodes/Planet-Gravity"}]},{label:"interm.nvim",img:"/images/interm.webp",desc:"lua, vimscript",red:"https://github.com/your-org/interm.nvim",links:[{type:"github",url:"https://github.com/Blobosle/interm.nvim"}]}],o="/images/showcase.webp",a=450*r,l=400*r,c=16,[u,f]=A.useState({src:null,visible:!1}),[p,h]=A.useState(null),g=A.useRef(null),d=A.useRef(null),m=A.useRef(null),b=A.useRef(null),y=A.useRef({x:0,y:0}),x=A.useRef(null);x.current===null&&(x.current=[...new Set([o,...i.map(({img:v})=>v)])]),A.useEffect(()=>{const v=()=>{x.current.forEach(k=>{const O=new Image;O.decoding="async",O.src=k,typeof O.decode=="function"&&O.decode().catch(()=>{})})};if(typeof window.requestIdleCallback=="function"){const k=window.requestIdleCallback(v);return()=>window.cancelIdleCallback(k)}const S=window.setTimeout(v,0);return()=>window.clearTimeout(S)},[]),A.useEffect(()=>{!u.visible||!u.src||!m.current||(te.set(m.current,{scaleY:0,transformOrigin:"bottom center"}),te.to(m.current,{scaleY:1,duration:.2,ease:"power2.out",onComplete:()=>h(null)}))},[u.src,u.visible]),A.useEffect(()=>{u.visible&&g.current&&(te.set(g.current,{scale:.6,transformOrigin:"center center"}),te.to(g.current,{scale:1,duration:.1,ease:"power2.out"}))},[u.visible]);const w=A.useCallback(v=>()=>{v&&(g.current&&(te.killTweensOf(g.current),te.set(g.current,{scale:1})),h(u.src),f(S=>({...S,src:v,visible:!0})))},[u.src]),_=A.useCallback(v=>{if(!u.visible||!d.current)return;const S=v.clientX+20,k=v.clientY+20,O=Math.min(Math.max(c,S),window.innerWidth-a-c),I=Math.min(Math.max(c,k),window.innerHeight-l-c);y.current={x:O,y:I},b.current===null&&(b.current=window.requestAnimationFrame(()=>{if(b.current=null,!d.current)return;const{x:M,y:L}=y.current;d.current.style.transform=`translate3d(${M}px, ${L}px, 0)`}))},[u.visible,l,a]),C=A.useCallback(()=>{u.visible&&(b.current!==null&&(window.cancelAnimationFrame(b.current),b.current=null),g.current?(te.killTweensOf(g.current),te.to(g.current,{scale:.6,duration:.25,ease:"power2.in",onComplete:()=>{f(v=>({...v,visible:!1,src:null})),h(null)}})):(f(v=>({...v,visible:!1,src:null})),h(null)))},[u.visible]);return R.jsxs("section",{id:"work",className:"relative bg-white w-full h-700",onMouseMove:_,children:[R.jsx("div",{className:"pt-7 inline-flex items-center gap-2 w-fit",onMouseEnter:w(o),onMouseLeave:C,children:R.jsxs("a",{href:"https://blobosle.com/showcase/",className:"inline-flex items-center group",target:"_blank",rel:"noopener noreferrer",children:[R.jsx("span",{className:"pl-13 font-intersemibold text-black text-[30px] leading-none",children:"Showcase"}),R.jsx("img",{src:ic,className:"w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"})]})}),R.jsx("h1",{className:"pointer-events-none pl-10 font-intersemibold text-black text-[90px] sm:text-[170px] leading-none",children:"My Work"}),R.jsx(D0,{setDisableCursorTrail:s}),R.jsx("ul",{className:"flex flex-col mt-8 select-none",children:i.map(({label:v,desc:S,red:k,img:O,links:I=[]})=>R.jsxs("li",{className:"relative group",children:[R.jsxs("div",{className:"grid grid-cols-2 items-center",children:[R.jsx("a",{href:k||void 0,target:k?"_blank":void 0,className:"pt-5 pb-5",onMouseEnter:w(O),onMouseLeave:C,children:R.jsx("h2",{className:"pl-10 font-interregular hover:text-gray-500 transition-colors duration-200 ease-in-out text-black text-[25px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px]",children:R.jsx("span",{className:"inline-block lg:hover:-translate-x-2 transition-transform duration-300 ease-in-out",children:v})})}),R.jsxs("div",{className:"pr-5",children:[R.jsx("p",{className:"font-interregular text-gray-400 text-[20px] text-right",children:S}),I.length>0&&R.jsx("div",{className:"flex gap-3 pt-2 justify-end",children:I.map(({type:M,url:L})=>{const $=n[M];return $?R.jsx("a",{href:L,target:"_blank",rel:"noopener noreferrer",children:R.jsx("img",{src:$,alt:`${M} icon`,className:"w-8 h-8 hover:scale-120 transition-transform"})},`${v}-${M}`):null})})]})]}),R.jsx("div",{className:"h-px w-full bg-black"})]},v))}),u.visible&&R.jsx("div",{ref:d,className:"fixed z-50 pointer-events-none",style:{width:a,height:l,top:0,left:0,willChange:"transform",transform:"translate3d(0, 0, 0)"},children:R.jsxs("div",{ref:g,className:"w-full h-full overflow-hidden rounded-2xl shadow-xl bg-white relative",children:[p&&R.jsx("img",{src:p,alt:"",className:"absolute inset-0 w-full h-full object-cover"}),u.src&&R.jsx("img",{ref:m,src:u.src,alt:"Project preview",decoding:"async",className:"absolute inset-0 w-full h-full object-cover will-change-transform"},u.src)]})})]})}function I0(){const[s,e]=A.useState(null),r=A.useRef([]),t=[{href:"https://www.linkedin.com/in/benjamin-lobos-lertpunyaroj-91509b230/",label:"→ LinkedIn"},{href:"https://github.com/Blobosle",label:"→ Github"},{href:"mailto:blobosle@gmail.com",label:"→ Email"}],n=o=>{const a=r.current[o]?.querySelectorAll(".char");a&&(te.killTweensOf(a),te.to(a,{x:()=>te.utils.random(-60,60),y:()=>te.utils.random(-50,50),rotation:()=>te.utils.random(-180,180),ease:"power3.out",duration:.6,stagger:.02}))},i=o=>{const a=r.current[o]?.querySelectorAll(".char");a&&(te.killTweensOf(a),te.to(a,{x:0,y:0,rotation:0,ease:"power3.inOut",duration:.6,stagger:.02}))};return R.jsx("div",{id:"contact",className:"flex flex-col items-center justify-center w-full bg-black h-230",children:t.map((o,a)=>{const l=s===a,c=s!==null&&!l;return R.jsx("a",{ref:u=>r.current[a]=u,href:o.href,target:"_blank",rel:"noopener noreferrer",onMouseEnter:()=>{e(a),n(a)},onMouseLeave:()=>{e(null),i(a)},className:`text-white text-center font-interregular text-[60px] md:text-[100px] transition-all duration-300
              ${l?"tracking-wider scale-105":""}
              ${c?"opacity-40":"opacity-100"}
                        `,children:o.label.split("").map((u,f)=>R.jsx("span",{className:"inline-block char whitespace-pre",children:u===" "?" ":u},f))},a)})})}function j0({size:s=32,ease:e=.15,color:r="bg-orange-500",hidden:t=!1}){if(typeof window<"u"&&window.matchMedia("(pointer: coarse)").matches)return null;const[i,o]=A.useState({x:-100,y:-100}),a=A.useRef({x:-100,y:-100}),l=A.useRef();return A.useEffect(()=>{const c=f=>{a.current={x:f.clientX-s/2,y:f.clientY-s/2}},u=()=>{o(f=>{const p=a.current.x-f.x,h=a.current.y-f.y;return{x:f.x+p*e,y:f.y+h*e}}),l.current=requestAnimationFrame(u)};return window.addEventListener("pointermove",c),u(),()=>{window.removeEventListener("pointermove",c),cancelAnimationFrame(l.current)}},[e,s]),R.jsx("div",{className:`pointer-events-none fixed top-0 left-0 z-50 rounded-full mix-blend-difference ${r} transition-opacity duration-150 ${t?"opacity-0":"opacity-90"}`,style:{width:s,height:s,transform:`translate3d(${i.x}px, ${i.y}px, 0)`}})}function N0(){const[s,e]=A.useState(!1),r=A.useRef(null),[t,n]=A.useState(!1),[i,o]=A.useState(!1),a=l=>new Promise((c,u)=>{const f=new Image;f.onload=()=>c(),f.onerror=()=>u(),f.src=l});return A.useEffect(()=>{const l=()=>{Promise.all([...Tf,...kf].map(a)).finally(()=>{requestAnimationFrame(()=>e(!0))})};if(document.readyState==="complete")l();else return window.addEventListener("load",l),()=>window.removeEventListener("load",l)},[]),A.useEffect(()=>{if(!s||!r.current)return;const l=te.timeline({defaults:{ease:"power4.inOut"}});te.set(r.current,{clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)"}),l.to(r.current,{clipPath:"polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",duration:1.2,skewX:10,rotation:3,scale:1.05}).to(r.current,{opacity:0,duration:.25,pointerEvents:"none"},"-=0.15")},[s]),R.jsxs("div",{children:[R.jsx("div",{ref:r,className:"fixed inset-0 bg-black flex items-center justify-center text-white z-[9999] select-none"}),R.jsxs(R.Fragment,{children:[R.jsx(j0,{size:32,ease:.05,hidden:i}),R.jsx(Cf,{}),R.jsx(Zf,{}),R.jsx(td,{}),R.jsx(k0,{}),R.jsx(A0,{setDisableCursorTrail:o}),R.jsx(I0,{})]})]})}function L0(){return R.jsx("main",{children:R.jsx(N0,{})})}Jc.createRoot(document.getElementById("root")).render(R.jsx(A.StrictMode,{children:R.jsx(L0,{})}));
