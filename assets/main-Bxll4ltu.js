import{r as N,j as M,a as Zl,R as aa,c as Ql}from"./devicon.min-DVDzBaAl.js";function yr(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function ic(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var jt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},An={duration:.5,overwrite:!1,delay:0},Ro,Ke,_e,Wt=1e8,de=1/Wt,Qs=Math.PI*2,Jl=Qs/4,eu=0,sc=Math.sqrt,tu=Math.cos,ru=Math.sin,We=function(e){return typeof e=="string"},Se=function(e){return typeof e=="function"},Sr=function(e){return typeof e=="number"},Mo=function(e){return typeof e>"u"},dr=function(e){return typeof e=="object"},vt=function(e){return e!==!1},Eo=function(){return typeof window<"u"},Ai=function(e){return Se(e)||We(e)},oc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ot=Array.isArray,Js=/(?:-?\.?\d|\.)+/gi,ac=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Sn=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ds=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,cc=/[+-]=-?[.\d]+/,lc=/[^,'"\[\]\s]+/gi,nu=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ve,nr,eo,Do,Lt={},us={},uc,fc=function(e){return(us=In(e,Lt))&&St},Ao=function(e,r){return console.warn("Invalid property",e,"set to",r,"Missing plugin? gsap.registerPlugin()")},gi=function(e,r){return!r&&console.warn(e)},dc=function(e,r){return e&&(Lt[e]=r)&&us&&(us[e]=r)||Lt},mi=function(){return 0},iu={suppressEvents:!0,isStart:!0,kill:!1},Zi={suppressEvents:!0,kill:!1},su={suppressEvents:!0},Io={},zr=[],to={},hc,Et={},As={},ca=30,Qi=[],No="",jo=function(e){var r=e[0],t,n;if(dr(r)||Se(r)||(e=[e]),!(t=(r._gsap||{}).harness)){for(n=Qi.length;n--&&!Qi[n].targetTest(r););t=Qi[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new zc(e[n],t)))||e.splice(n,1);return e},rn=function(e){return e._gsap||jo(Vt(e))[0]._gsap},pc=function(e,r,t){return(t=e[r])&&Se(t)?e[r]():Mo(t)&&e.getAttribute&&e.getAttribute(r)||t},bt=function(e,r){return(e=e.split(",")).forEach(r)||e},Oe=function(e){return Math.round(e*1e5)/1e5||0},Ae=function(e){return Math.round(e*1e7)/1e7||0},Cn=function(e,r){var t=r.charAt(0),n=parseFloat(r.substr(2));return e=parseFloat(e),t==="+"?e+n:t==="-"?e-n:t==="*"?e*n:e/n},ou=function(e,r){for(var t=r.length,n=0;e.indexOf(r[n])<0&&++n<t;);return n<t},fs=function(){var e=zr.length,r=zr.slice(0),t,n;for(to={},zr.length=0,t=0;t<e;t++)n=r[t],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},zo=function(e){return!!(e._initted||e._startAt||e.add)},gc=function(e,r,t,n){zr.length&&!Ke&&fs(),e.render(r,t,!!(Ke&&r<0&&zo(e))),zr.length&&!Ke&&fs()},mc=function(e){var r=parseFloat(e);return(r||r===0)&&(e+"").match(lc).length<2?r:We(e)?e.trim():e},_c=function(e){return e},Ft=function(e,r){for(var t in r)t in e||(e[t]=r[t]);return e},au=function(e){return function(r,t){for(var n in t)n in r||n==="duration"&&e||n==="ease"||(r[n]=t[n])}},In=function(e,r){for(var t in r)e[t]=r[t];return e},la=function s(e,r){for(var t in r)t!=="__proto__"&&t!=="constructor"&&t!=="prototype"&&(e[t]=dr(r[t])?s(e[t]||(e[t]={}),r[t]):r[t]);return e},ds=function(e,r){var t={},n;for(n in e)n in r||(t[n]=e[n]);return t},ni=function(e){var r=e.parent||ve,t=e.keyframes?au(ot(e.keyframes)):Ft;if(vt(e.inherit))for(;r;)t(e,r.vars.defaults),r=r.parent||r._dp;return e},cu=function(e,r){for(var t=e.length,n=t===r.length;n&&t--&&e[t]===r[t];);return t<0},yc=function(e,r,t,n,i){var o=e[n],a;if(i)for(a=r[i];o&&o[i]>a;)o=o._prev;return o?(r._next=o._next,o._next=r):(r._next=e[t],e[t]=r),r._next?r._next._prev=r:e[n]=r,r._prev=o,r.parent=r._dp=e,r},Ss=function(e,r,t,n){t===void 0&&(t="_first"),n===void 0&&(n="_last");var i=r._prev,o=r._next;i?i._next=o:e[t]===r&&(e[t]=o),o?o._prev=i:e[n]===r&&(e[n]=i),r._next=r._prev=r.parent=null},$r=function(e,r){e.parent&&(!r||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},nn=function(e,r){if(e&&(!r||r._end>e._dur||r._start<0))for(var t=e;t;)t._dirty=1,t=t.parent;return e},lu=function(e){for(var r=e.parent;r&&r.parent;)r._dirty=1,r.totalDuration(),r=r.parent;return e},ro=function(e,r,t,n){return e._startAt&&(Ke?e._startAt.revert(Zi):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(r,!0,n))},uu=function s(e){return!e||e._ts&&s(e.parent)},ua=function(e){return e._repeat?Nn(e._tTime,e=e.duration()+e._rDelay)*e:0},Nn=function(e,r){var t=Math.floor(e=Ae(e/r));return e&&t===e?t-1:t},hs=function(e,r){return(e-r._start)*r._ts+(r._ts>=0?0:r._dirty?r.totalDuration():r._tDur)},Ts=function(e){return e._end=Ae(e._start+(e._tDur/Math.abs(e._ts||e._rts||de)||0))},ks=function(e,r){var t=e._dp;return t&&t.smoothChildTiming&&e._ts&&(e._start=Ae(t._time-(e._ts>0?r/e._ts:((e._dirty?e.totalDuration():e._tDur)-r)/-e._ts)),Ts(e),t._dirty||nn(t,e)),e},vc=function(e,r){var t;if((r._time||!r._dur&&r._initted||r._start<e._time&&(r._dur||!r.add))&&(t=hs(e.rawTime(),r),(!r._dur||Oi(0,r.totalDuration(),t)-r._tTime>de)&&r.render(t,!0)),nn(e,r)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(t=e;t._dp;)t.rawTime()>=0&&t.totalTime(t._tTime),t=t._dp;e._zTime=-de}},ar=function(e,r,t,n){return r.parent&&$r(r),r._start=Ae((Sr(t)?t:t||e!==ve?Bt(e,t,r):e._time)+r._delay),r._end=Ae(r._start+(r.totalDuration()/Math.abs(r.timeScale())||0)),yc(e,r,"_first","_last",e._sort?"_start":0),no(r)||(e._recent=r),n||vc(e,r),e._ts<0&&ks(e,e._tTime),e},bc=function(e,r){return(Lt.ScrollTrigger||Ao("scrollTrigger",r))&&Lt.ScrollTrigger.create(r,e)},xc=function(e,r,t,n,i){if(Fo(e,r,i),!e._initted)return 1;if(!t&&e._pt&&!Ke&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&hc!==At.frame)return zr.push(e),e._lazy=[i,n],1},fu=function s(e){var r=e.parent;return r&&r._ts&&r._initted&&!r._lock&&(r.rawTime()<0||s(r))},no=function(e){var r=e.data;return r==="isFromStart"||r==="isStart"},du=function(e,r,t,n){var i=e.ratio,o=r<0||!r&&(!e._start&&fu(e)&&!(!e._initted&&no(e))||(e._ts<0||e._dp._ts<0)&&!no(e))?0:1,a=e._rDelay,c=0,l,u,h;if(a&&e._repeat&&(c=Oi(0,e._tDur,r),u=Nn(c,a),e._yoyo&&u&1&&(o=1-o),u!==Nn(e._tTime,a)&&(i=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==i||Ke||n||e._zTime===de||!r&&e._zTime){if(!e._initted&&xc(e,r,n,t,c))return;for(h=e._zTime,e._zTime=r||(t?de:0),t||(t=r&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=c,l=e._pt;l;)l.r(o,l.d),l=l._next;r<0&&ro(e,r,t,!0),e._onUpdate&&!t&&Nt(e,"onUpdate"),c&&e._repeat&&!t&&e.parent&&Nt(e,"onRepeat"),(r>=e._tDur||r<0)&&e.ratio===o&&(o&&$r(e,1),!t&&!Ke&&(Nt(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=r)},hu=function(e,r,t){var n;if(t>r)for(n=e._first;n&&n._start<=t;){if(n.data==="isPause"&&n._start>r)return n;n=n._next}else for(n=e._last;n&&n._start>=t;){if(n.data==="isPause"&&n._start<r)return n;n=n._prev}},jn=function(e,r,t,n){var i=e._repeat,o=Ae(r)||0,a=e._tTime/e._tDur;return a&&!n&&(e._time*=o/e._dur),e._dur=o,e._tDur=i?i<0?1e10:Ae(o*(i+1)+e._rDelay*i):o,a>0&&!n&&ks(e,e._tTime=e._tDur*a),e.parent&&Ts(e),t||nn(e.parent,e),e},fa=function(e){return e instanceof pt?nn(e):jn(e,e._dur)},pu={_start:0,endTime:mi,totalDuration:mi},Bt=function s(e,r,t){var n=e.labels,i=e._recent||pu,o=e.duration()>=Wt?i.endTime(!1):e._dur,a,c,l;return We(r)&&(isNaN(r)||r in n)?(c=r.charAt(0),l=r.substr(-1)==="%",a=r.indexOf("="),c==="<"||c===">"?(a>=0&&(r=r.replace(/=/,"")),(c==="<"?i._start:i.endTime(i._repeat>=0))+(parseFloat(r.substr(1))||0)*(l?(a<0?i:t).totalDuration()/100:1)):a<0?(r in n||(n[r]=o),n[r]):(c=parseFloat(r.charAt(a-1)+r.substr(a+1)),l&&t&&(c=c/100*(ot(t)?t[0]:t).totalDuration()),a>1?s(e,r.substr(0,a-1),t)+c:o+c)):r==null?o:+r},ii=function(e,r,t){var n=Sr(r[1]),i=(n?2:1)+(e<2?0:1),o=r[i],a,c;if(n&&(o.duration=r[1]),o.parent=t,e){for(a=o,c=t;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=vt(c.vars.inherit)&&c.parent;o.immediateRender=vt(a.immediateRender),e<2?o.runBackwards=1:o.startAt=r[i-1]}return new De(r[0],o,r[i+1])},Xr=function(e,r){return e||e===0?r(e):r},Oi=function(e,r,t){return t<e?e:t>r?r:t},it=function(e,r){return!We(e)||!(r=nu.exec(e))?"":r[1]},gu=function(e,r,t){return Xr(t,function(n){return Oi(e,r,n)})},io=[].slice,wc=function(e,r){return e&&dr(e)&&"length"in e&&(!r&&!e.length||e.length-1 in e&&dr(e[0]))&&!e.nodeType&&e!==nr},mu=function(e,r,t){return t===void 0&&(t=[]),e.forEach(function(n){var i;return We(n)&&!r||wc(n,1)?(i=t).push.apply(i,Vt(n)):t.push(n)})||t},Vt=function(e,r,t){return _e&&!r&&_e.selector?_e.selector(e):We(e)&&!t&&(eo||!zn())?io.call((r||Do).querySelectorAll(e),0):ot(e)?mu(e,t):wc(e)?io.call(e,0):e?[e]:[]},so=function(e){return e=Vt(e)[0]||gi("Invalid scope")||{},function(r){var t=e.current||e.nativeElement||e;return Vt(r,t.querySelectorAll?t:t===e?gi("Invalid scope")||Do.createElement("div"):e)}},Sc=function(e){return e.sort(function(){return .5-Math.random()})},Tc=function(e){if(Se(e))return e;var r=dr(e)?e:{each:e},t=sn(r.ease),n=r.from||0,i=parseFloat(r.base)||0,o={},a=n>0&&n<1,c=isNaN(n)||a,l=r.axis,u=n,h=n;return We(n)?u=h={center:.5,edges:.5,end:1}[n]||0:!a&&c&&(u=n[0],h=n[1]),function(p,f,m){var d=(m||r).length,g=o[d],v,y,b,x,_,k,w,S,C;if(!g){if(C=r.grid==="auto"?0:(r.grid||[1,Wt])[1],!C){for(w=-Wt;w<(w=m[C++].getBoundingClientRect().left)&&C<d;);C<d&&C--}for(g=o[d]=[],v=c?Math.min(C,d)*u-.5:n%C,y=C===Wt?0:c?d*h/C-.5:n/C|0,w=0,S=Wt,k=0;k<d;k++)b=k%C-v,x=y-(k/C|0),g[k]=_=l?Math.abs(l==="y"?x:b):sc(b*b+x*x),_>w&&(w=_),_<S&&(S=_);n==="random"&&Sc(g),g.max=w-S,g.min=S,g.v=d=(parseFloat(r.amount)||parseFloat(r.each)*(C>d?d-1:l?l==="y"?d/C:C:Math.max(C,d/C))||0)*(n==="edges"?-1:1),g.b=d<0?i-d:i,g.u=it(r.amount||r.each)||0,t=t&&d<0?Ic(t):t}return d=(g[p]-g.min)/g.max||0,Ae(g.b+(t?t(d):d)*g.v)+g.u}},oo=function(e){var r=Math.pow(10,((e+"").split(".")[1]||"").length);return function(t){var n=Ae(Math.round(parseFloat(t)/e)*e*r);return(n-n%1)/r+(Sr(t)?0:it(t))}},kc=function(e,r){var t=ot(e),n,i;return!t&&dr(e)&&(n=t=e.radius||Wt,e.values?(e=Vt(e.values),(i=!Sr(e[0]))&&(n*=n)):e=oo(e.increment)),Xr(r,t?Se(e)?function(o){return i=e(o),Math.abs(i-o)<=n?i:o}:function(o){for(var a=parseFloat(i?o.x:o),c=parseFloat(i?o.y:0),l=Wt,u=0,h=e.length,p,f;h--;)i?(p=e[h].x-a,f=e[h].y-c,p=p*p+f*f):p=Math.abs(e[h]-a),p<l&&(l=p,u=h);return u=!n||l<=n?e[u]:o,i||u===o||Sr(o)?u:u+it(o)}:oo(e))},Cc=function(e,r,t,n){return Xr(ot(e)?!r:t===!0?!!(t=0):!n,function(){return ot(e)?e[~~(Math.random()*e.length)]:(t=t||1e-5)&&(n=t<1?Math.pow(10,(t+"").length-2):1)&&Math.floor(Math.round((e-t/2+Math.random()*(r-e+t*.99))/t)*t*n)/n})},_u=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(n){return r.reduce(function(i,o){return o(i)},n)}},yu=function(e,r){return function(t){return e(parseFloat(t))+(r||it(t))}},vu=function(e,r,t){return Oc(e,r,0,1,t)},Pc=function(e,r,t){return Xr(t,function(n){return e[~~r(n)]})},bu=function s(e,r,t){var n=r-e;return ot(e)?Pc(e,s(0,e.length),r):Xr(t,function(i){return(n+(i-e)%n)%n+e})},xu=function s(e,r,t){var n=r-e,i=n*2;return ot(e)?Pc(e,s(0,e.length-1),r):Xr(t,function(o){return o=(i+(o-e)%i)%i||0,e+(o>n?i-o:o)})},_i=function(e){for(var r=0,t="",n,i,o,a;~(n=e.indexOf("random(",r));)o=e.indexOf(")",n),a=e.charAt(n+7)==="[",i=e.substr(n+7,o-n-7).match(a?lc:Js),t+=e.substr(r,n-r)+Cc(a?i:+i[0],a?0:+i[1],+i[2]||1e-5),r=o+1;return t+e.substr(r,e.length-r)},Oc=function(e,r,t,n,i){var o=r-e,a=n-t;return Xr(i,function(c){return t+((c-e)/o*a||0)})},wu=function s(e,r,t,n){var i=isNaN(e+r)?0:function(f){return(1-f)*e+f*r};if(!i){var o=We(e),a={},c,l,u,h,p;if(t===!0&&(n=1)&&(t=null),o)e={p:e},r={p:r};else if(ot(e)&&!ot(r)){for(u=[],h=e.length,p=h-2,l=1;l<h;l++)u.push(s(e[l-1],e[l]));h--,i=function(m){m*=h;var d=Math.min(p,~~m);return u[d](m-d)},t=r}else n||(e=In(ot(e)?[]:{},e));if(!u){for(c in r)Lo.call(a,e,c,"get",r[c]);i=function(m){return Yo(m,a)||(o?e.p:e)}}}return Xr(t,i)},da=function(e,r,t){var n=e.labels,i=Wt,o,a,c;for(o in n)a=n[o]-r,a<0==!!t&&a&&i>(a=Math.abs(a))&&(c=o,i=a);return c},Nt=function(e,r,t){var n=e.vars,i=n[r],o=_e,a=e._ctx,c,l,u;if(i)return c=n[r+"Params"],l=n.callbackScope||e,t&&zr.length&&fs(),a&&(_e=a),u=c?i.apply(l,c):i.call(l),_e=o,u},Kn=function(e){return $r(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ke),e.progress()<1&&Nt(e,"onInterrupt"),e},Tn,Rc=[],Mc=function(e){if(e)if(e=!e.name&&e.default||e,Eo()||e.headless){var r=e.name,t=Se(e),n=r&&!t&&e.init?function(){this._props=[]}:e,i={init:mi,render:Yo,add:Lo,kill:Lu,modifier:zu,rawVars:0},o={targetTest:0,get:0,getSetter:Bo,aliases:{},register:0};if(zn(),e!==n){if(Et[r])return;Ft(n,Ft(ds(e,i),o)),In(n.prototype,In(i,ds(e,o))),Et[n.prop=r]=n,e.targetTest&&(Qi.push(n),Io[r]=1),r=(r==="css"?"CSS":r.charAt(0).toUpperCase()+r.substr(1))+"Plugin"}dc(r,n),e.register&&e.register(St,n,xt)}else Rc.push(e)},fe=255,Zn={aqua:[0,fe,fe],lime:[0,fe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,fe],navy:[0,0,128],white:[fe,fe,fe],olive:[128,128,0],yellow:[fe,fe,0],orange:[fe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[fe,0,0],pink:[fe,192,203],cyan:[0,fe,fe],transparent:[fe,fe,fe,0]},Is=function(e,r,t){return e+=e<0?1:e>1?-1:0,(e*6<1?r+(t-r)*e*6:e<.5?t:e*3<2?r+(t-r)*(2/3-e)*6:r)*fe+.5|0},Ec=function(e,r,t){var n=e?Sr(e)?[e>>16,e>>8&fe,e&fe]:0:Zn.black,i,o,a,c,l,u,h,p,f,m;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Zn[e])n=Zn[e];else if(e.charAt(0)==="#"){if(e.length<6&&(i=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+i+i+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&fe,n&fe,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&fe,e&fe]}else if(e.substr(0,3)==="hsl"){if(n=m=e.match(Js),!r)c=+n[0]%360/360,l=+n[1]/100,u=+n[2]/100,o=u<=.5?u*(l+1):u+l-u*l,i=u*2-o,n.length>3&&(n[3]*=1),n[0]=Is(c+1/3,i,o),n[1]=Is(c,i,o),n[2]=Is(c-1/3,i,o);else if(~e.indexOf("="))return n=e.match(ac),t&&n.length<4&&(n[3]=1),n}else n=e.match(Js)||Zn.transparent;n=n.map(Number)}return r&&!m&&(i=n[0]/fe,o=n[1]/fe,a=n[2]/fe,h=Math.max(i,o,a),p=Math.min(i,o,a),u=(h+p)/2,h===p?c=l=0:(f=h-p,l=u>.5?f/(2-h-p):f/(h+p),c=h===i?(o-a)/f+(o<a?6:0):h===o?(a-i)/f+2:(i-o)/f+4,c*=60),n[0]=~~(c+.5),n[1]=~~(l*100+.5),n[2]=~~(u*100+.5)),t&&n.length<4&&(n[3]=1),n},Dc=function(e){var r=[],t=[],n=-1;return e.split(Lr).forEach(function(i){var o=i.match(Sn)||[];r.push.apply(r,o),t.push(n+=o.length+1)}),r.c=t,r},ha=function(e,r,t){var n="",i=(e+n).match(Lr),o=r?"hsla(":"rgba(",a=0,c,l,u,h;if(!i)return e;if(i=i.map(function(p){return(p=Ec(p,r,1))&&o+(r?p[0]+","+p[1]+"%,"+p[2]+"%,"+p[3]:p.join(","))+")"}),t&&(u=Dc(e),c=t.c,c.join(n)!==u.c.join(n)))for(l=e.replace(Lr,"1").split(Sn),h=l.length-1;a<h;a++)n+=l[a]+(~c.indexOf(a)?i.shift()||o+"0,0,0,0)":(u.length?u:i.length?i:t).shift());if(!l)for(l=e.split(Lr),h=l.length-1;a<h;a++)n+=l[a]+i[a];return n+l[h]},Lr=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Zn)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),Su=/hsl[a]?\(/,Ac=function(e){var r=e.join(" "),t;if(Lr.lastIndex=0,Lr.test(r))return t=Su.test(r),e[1]=ha(e[1],t),e[0]=ha(e[0],t,Dc(e[1])),!0},yi,At=function(){var s=Date.now,e=500,r=33,t=s(),n=t,i=1e3/240,o=i,a=[],c,l,u,h,p,f,m=function d(g){var v=s()-n,y=g===!0,b,x,_,k;if((v>e||v<0)&&(t+=v-r),n+=v,_=n-t,b=_-o,(b>0||y)&&(k=++h.frame,p=_-h.time*1e3,h.time=_=_/1e3,o+=b+(b>=i?4:i-b),x=1),y||(c=l(d)),x)for(f=0;f<a.length;f++)a[f](_,p,k,g)};return h={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(g){return p/(1e3/(g||60))},wake:function(){uc&&(!eo&&Eo()&&(nr=eo=window,Do=nr.document||{},Lt.gsap=St,(nr.gsapVersions||(nr.gsapVersions=[])).push(St.version),fc(us||nr.GreenSockGlobals||!nr.gsap&&nr||{}),Rc.forEach(Mc)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&h.sleep(),l=u||function(g){return setTimeout(g,o-h.time*1e3+1|0)},yi=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),yi=0,l=mi},lagSmoothing:function(g,v){e=g||1/0,r=Math.min(v||33,e)},fps:function(g){i=1e3/(g||240),o=h.time*1e3+i},add:function(g,v,y){var b=v?function(x,_,k,w){g(x,_,k,w),h.remove(b)}:g;return h.remove(g),a[y?"unshift":"push"](b),zn(),b},remove:function(g,v){~(v=a.indexOf(g))&&a.splice(v,1)&&f>=v&&f--},_listeners:a},h}(),zn=function(){return!yi&&At.wake()},J={},Tu=/^[\d.\-M][\d.\-,\s]/,ku=/["']/g,Cu=function(e){for(var r={},t=e.substr(1,e.length-3).split(":"),n=t[0],i=1,o=t.length,a,c,l;i<o;i++)c=t[i],a=i!==o-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),r[n]=isNaN(l)?l.replace(ku,"").trim():+l,n=c.substr(a+1).trim();return r},Pu=function(e){var r=e.indexOf("(")+1,t=e.indexOf(")"),n=e.indexOf("(",r);return e.substring(r,~n&&n<t?e.indexOf(")",t+1):t)},Ou=function(e){var r=(e+"").split("("),t=J[r[0]];return t&&r.length>1&&t.config?t.config.apply(null,~e.indexOf("{")?[Cu(r[1])]:Pu(e).split(",").map(mc)):J._CE&&Tu.test(e)?J._CE("",e):t},Ic=function(e){return function(r){return 1-e(1-r)}},Nc=function s(e,r){for(var t=e._first,n;t;)t instanceof pt?s(t,r):t.vars.yoyoEase&&(!t._yoyo||!t._repeat)&&t._yoyo!==r&&(t.timeline?s(t.timeline,r):(n=t._ease,t._ease=t._yEase,t._yEase=n,t._yoyo=r)),t=t._next},sn=function(e,r){return e&&(Se(e)?e:J[e]||Ou(e))||r},pn=function(e,r,t,n){t===void 0&&(t=function(c){return 1-r(1-c)}),n===void 0&&(n=function(c){return c<.5?r(c*2)/2:1-r((1-c)*2)/2});var i={easeIn:r,easeOut:t,easeInOut:n},o;return bt(e,function(a){J[a]=Lt[a]=i,J[o=a.toLowerCase()]=t;for(var c in i)J[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=J[a+"."+c]=i[c]}),i},jc=function(e){return function(r){return r<.5?(1-e(1-r*2))/2:.5+e((r-.5)*2)/2}},Ns=function s(e,r,t){var n=r>=1?r:1,i=(t||(e?.3:.45))/(r<1?r:1),o=i/Qs*(Math.asin(1/n)||0),a=function(u){return u===1?1:n*Math.pow(2,-10*u)*ru((u-o)*i)+1},c=e==="out"?a:e==="in"?function(l){return 1-a(1-l)}:jc(a);return i=Qs/i,c.config=function(l,u){return s(e,l,u)},c},js=function s(e,r){r===void 0&&(r=1.70158);var t=function(o){return o?--o*o*((r+1)*o+r)+1:0},n=e==="out"?t:e==="in"?function(i){return 1-t(1-i)}:jc(t);return n.config=function(i){return s(e,i)},n};bt("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var r=e<5?e+1:e;pn(s+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(t*2,r)/2:1-Math.pow((1-t)*2,r)/2})});J.Linear.easeNone=J.none=J.Linear.easeIn;pn("Elastic",Ns("in"),Ns("out"),Ns());(function(s,e){var r=1/e,t=2*r,n=2.5*r,i=function(a){return a<r?s*a*a:a<t?s*Math.pow(a-1.5/e,2)+.75:a<n?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};pn("Bounce",function(o){return 1-i(1-o)},i)})(7.5625,2.75);pn("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});pn("Circ",function(s){return-(sc(1-s*s)-1)});pn("Sine",function(s){return s===1?1:-tu(s*Jl)+1});pn("Back",js("in"),js("out"),js());J.SteppedEase=J.steps=Lt.SteppedEase={config:function(e,r){e===void 0&&(e=1);var t=1/e,n=e+(r?0:1),i=r?1:0,o=1-de;return function(a){return((n*Oi(0,o,a)|0)+i)*t}}};An.ease=J["quad.out"];bt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return No+=s+","+s+"Params,"});var zc=function(e,r){this.id=eu++,e._gsap=this,this.target=e,this.harness=r,this.get=r?r.get:pc,this.set=r?r.getSetter:Bo},vi=function(){function s(r){this.vars=r,this._delay=+r.delay||0,(this._repeat=r.repeat===1/0?-2:r.repeat||0)&&(this._rDelay=r.repeatDelay||0,this._yoyo=!!r.yoyo||!!r.yoyoEase),this._ts=1,jn(this,+r.duration,1,1),this.data=r.data,_e&&(this._ctx=_e,_e.data.push(this)),yi||At.wake()}var e=s.prototype;return e.delay=function(t){return t||t===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},e.duration=function(t){return arguments.length?this.totalDuration(this._repeat>0?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},e.totalDuration=function(t){return arguments.length?(this._dirty=0,jn(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(t,n){if(zn(),!arguments.length)return this._tTime;var i=this._dp;if(i&&i.smoothChildTiming&&this._ts){for(ks(this,t),!i._dp||i.parent||vc(i,this);i&&i.parent;)i.parent._time!==i._start+(i._ts>=0?i._tTime/i._ts:(i.totalDuration()-i._tTime)/-i._ts)&&i.totalTime(i._tTime,!0),i=i.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&t<this._tDur||this._ts<0&&t>0||!this._tDur&&!t)&&ar(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===de||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),gc(this,t,n)),this},e.time=function(t,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+ua(this))%(this._dur+this._rDelay)||(t?this._dur:0),n):this._time},e.totalProgress=function(t,n){return arguments.length?this.totalTime(this.totalDuration()*t,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(t,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-t:t)+ua(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(t,n){var i=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*i,n):this._repeat?Nn(this._tTime,i)+1:1},e.timeScale=function(t,n){if(!arguments.length)return this._rts===-de?0:this._rts;if(this._rts===t)return this;var i=this.parent&&this._ts?hs(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-de?0:this._rts,this.totalTime(Oi(-Math.abs(this._delay),this.totalDuration(),i),n!==!1),Ts(this),lu(this)},e.paused=function(t){return arguments.length?(this._ps!==t&&(this._ps=t,t?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(zn(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==de&&(this._tTime-=de)))),this):this._ps},e.startTime=function(t){if(arguments.length){this._start=t;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&ar(n,this,t-this._delay),this}return this._start},e.endTime=function(t){return this._start+(vt(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(t){var n=this.parent||this._dp;return n?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?hs(n.rawTime(t),this):this._tTime:this._tTime},e.revert=function(t){t===void 0&&(t=su);var n=Ke;return Ke=t,zo(this)&&(this.timeline&&this.timeline.revert(t),this.totalTime(-.01,t.suppressEvents)),this.data!=="nested"&&t.kill!==!1&&this.kill(),Ke=n,this},e.globalTime=function(t){for(var n=this,i=arguments.length?t:n.rawTime();n;)i=n._start+i/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(t):i},e.repeat=function(t){return arguments.length?(this._repeat=t===1/0?-2:t,fa(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(t){if(arguments.length){var n=this._time;return this._rDelay=t,fa(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},e.seek=function(t,n){return this.totalTime(Bt(this,t),vt(n))},e.restart=function(t,n){return this.play().totalTime(t?-this._delay:0,vt(n)),this._dur||(this._zTime=-de),this},e.play=function(t,n){return t!=null&&this.seek(t,n),this.reversed(!1).paused(!1)},e.reverse=function(t,n){return t!=null&&this.seek(t||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(t,n){return t!=null&&this.seek(t,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-de:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-de,this},e.isActive=function(){var t=this.parent||this._dp,n=this._start,i;return!!(!t||this._ts&&this._initted&&t.isActive()&&(i=t.rawTime(!0))>=n&&i<this.endTime(!0)-de)},e.eventCallback=function(t,n,i){var o=this.vars;return arguments.length>1?(n?(o[t]=n,i&&(o[t+"Params"]=i),t==="onUpdate"&&(this._onUpdate=n)):delete o[t],this):o[t]},e.then=function(t){var n=this;return new Promise(function(i){var o=Se(t)?t:_c,a=function(){var l=n.then;n.then=null,Se(o)&&(o=o(n))&&(o.then||o===n)&&(n.then=l),i(o),n.then=l};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?a():n._prom=a})},e.kill=function(){Kn(this)},s}();Ft(vi.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-de,_prom:0,_ps:!1,_rts:1});var pt=function(s){ic(e,s);function e(t,n){var i;return t===void 0&&(t={}),i=s.call(this,t)||this,i.labels={},i.smoothChildTiming=!!t.smoothChildTiming,i.autoRemoveChildren=!!t.autoRemoveChildren,i._sort=vt(t.sortChildren),ve&&ar(t.parent||ve,yr(i),n),t.reversed&&i.reverse(),t.paused&&i.paused(!0),t.scrollTrigger&&bc(yr(i),t.scrollTrigger),i}var r=e.prototype;return r.to=function(n,i,o){return ii(0,arguments,this),this},r.from=function(n,i,o){return ii(1,arguments,this),this},r.fromTo=function(n,i,o,a){return ii(2,arguments,this),this},r.set=function(n,i,o){return i.duration=0,i.parent=this,ni(i).repeatDelay||(i.repeat=0),i.immediateRender=!!i.immediateRender,new De(n,i,Bt(this,o),1),this},r.call=function(n,i,o){return ar(this,De.delayedCall(0,n,i),o)},r.staggerTo=function(n,i,o,a,c,l,u){return o.duration=i,o.stagger=o.stagger||a,o.onComplete=l,o.onCompleteParams=u,o.parent=this,new De(n,o,Bt(this,c)),this},r.staggerFrom=function(n,i,o,a,c,l,u){return o.runBackwards=1,ni(o).immediateRender=vt(o.immediateRender),this.staggerTo(n,i,o,a,c,l,u)},r.staggerFromTo=function(n,i,o,a,c,l,u,h){return a.startAt=o,ni(a).immediateRender=vt(a.immediateRender),this.staggerTo(n,i,a,c,l,u,h)},r.render=function(n,i,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=n<=0?0:Ae(n),h=this._zTime<0!=n<0&&(this._initted||!l),p,f,m,d,g,v,y,b,x,_,k,w;if(this!==ve&&u>c&&n>=0&&(u=c),u!==this._tTime||o||h){if(a!==this._time&&l&&(u+=this._time-a,n+=this._time-a),p=u,x=this._start,b=this._ts,v=!b,h&&(l||(a=this._zTime),(n||!i)&&(this._zTime=n)),this._repeat){if(k=this._yoyo,g=l+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(g*100+n,i,o);if(p=Ae(u%g),u===c?(d=this._repeat,p=l):(_=Ae(u/g),d=~~_,d&&d===_&&(p=l,d--),p>l&&(p=l)),_=Nn(this._tTime,g),!a&&this._tTime&&_!==d&&this._tTime-_*g-this._dur<=0&&(_=d),k&&d&1&&(p=l-p,w=1),d!==_&&!this._lock){var S=k&&_&1,C=S===(k&&d&1);if(d<_&&(S=!S),a=S?0:u%l?l:u,this._lock=1,this.render(a||(w?0:Ae(d*g)),i,!l)._lock=0,this._tTime=u,!i&&this.parent&&Nt(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),a&&a!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,C&&(this._lock=2,a=S?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!v)return this;Nc(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=hu(this,Ae(a),Ae(p)),y&&(u-=p-(p=y._start))),this._tTime=u,this._time=p,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,a=0),!a&&u&&!i&&!_&&(Nt(this,"onStart"),this._tTime!==u))return this;if(p>=a&&n>=0)for(f=this._first;f;){if(m=f._next,(f._act||p>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(n,i,o);if(f.render(f._ts>0?(p-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(p-f._start)*f._ts,i,o),p!==this._time||!this._ts&&!v){y=0,m&&(u+=this._zTime=-de);break}}f=m}else{f=this._last;for(var O=n<0?n:p;f;){if(m=f._prev,(f._act||O<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(n,i,o);if(f.render(f._ts>0?(O-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(O-f._start)*f._ts,i,o||Ke&&zo(f)),p!==this._time||!this._ts&&!v){y=0,m&&(u+=this._zTime=O?-de:de);break}}f=m}}if(y&&!i&&(this.pause(),y.render(p>=a?0:-de)._zTime=p>=a?1:-1,this._ts))return this._start=x,Ts(this),this.render(n,i,o);this._onUpdate&&!i&&Nt(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((n||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&$r(this,1),!i&&!(n<0&&!a)&&(u||a||!c)&&(Nt(this,u===c&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},r.add=function(n,i){var o=this;if(Sr(i)||(i=Bt(this,i,n)),!(n instanceof vi)){if(ot(n))return n.forEach(function(a){return o.add(a,i)}),this;if(We(n))return this.addLabel(n,i);if(Se(n))n=De.delayedCall(0,n);else return this}return this!==n?ar(this,n,i):this},r.getChildren=function(n,i,o,a){n===void 0&&(n=!0),i===void 0&&(i=!0),o===void 0&&(o=!0),a===void 0&&(a=-Wt);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof De?i&&c.push(l):(o&&c.push(l),n&&c.push.apply(c,l.getChildren(!0,i,o)))),l=l._next;return c},r.getById=function(n){for(var i=this.getChildren(1,1,1),o=i.length;o--;)if(i[o].vars.id===n)return i[o]},r.remove=function(n){return We(n)?this.removeLabel(n):Se(n)?this.killTweensOf(n):(n.parent===this&&Ss(this,n),n===this._recent&&(this._recent=this._last),nn(this))},r.totalTime=function(n,i){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ae(At.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),s.prototype.totalTime.call(this,n,i),this._forcing=0,this):this._tTime},r.addLabel=function(n,i){return this.labels[n]=Bt(this,i),this},r.removeLabel=function(n){return delete this.labels[n],this},r.addPause=function(n,i,o){var a=De.delayedCall(0,i||mi,o);return a.data="isPause",this._hasPause=1,ar(this,a,Bt(this,n))},r.removePause=function(n){var i=this._first;for(n=Bt(this,n);i;)i._start===n&&i.data==="isPause"&&$r(i),i=i._next},r.killTweensOf=function(n,i,o){for(var a=this.getTweensOf(n,o),c=a.length;c--;)Dr!==a[c]&&a[c].kill(n,i);return this},r.getTweensOf=function(n,i){for(var o=[],a=Vt(n),c=this._first,l=Sr(i),u;c;)c instanceof De?ou(c._targets,a)&&(l?(!Dr||c._initted&&c._ts)&&c.globalTime(0)<=i&&c.globalTime(c.totalDuration())>i:!i||c.isActive())&&o.push(c):(u=c.getTweensOf(a,i)).length&&o.push.apply(o,u),c=c._next;return o},r.tweenTo=function(n,i){i=i||{};var o=this,a=Bt(o,n),c=i,l=c.startAt,u=c.onStart,h=c.onStartParams,p=c.immediateRender,f,m=De.to(o,Ft({ease:i.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:i.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale())||de,onStart:function(){if(o.pause(),!f){var g=i.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale());m._dur!==g&&jn(m,g,0,1).render(m._time,!0,!0),f=1}u&&u.apply(m,h||[])}},i));return p?m.render(0):m},r.tweenFromTo=function(n,i,o){return this.tweenTo(i,Ft({startAt:{time:Bt(this,n)}},o))},r.recent=function(){return this._recent},r.nextLabel=function(n){return n===void 0&&(n=this._time),da(this,Bt(this,n))},r.previousLabel=function(n){return n===void 0&&(n=this._time),da(this,Bt(this,n),1)},r.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+de)},r.shiftChildren=function(n,i,o){o===void 0&&(o=0);for(var a=this._first,c=this.labels,l;a;)a._start>=o&&(a._start+=n,a._end+=n),a=a._next;if(i)for(l in c)c[l]>=o&&(c[l]+=n);return nn(this)},r.invalidate=function(n){var i=this._first;for(this._lock=0;i;)i.invalidate(n),i=i._next;return s.prototype.invalidate.call(this,n)},r.clear=function(n){n===void 0&&(n=!0);for(var i=this._first,o;i;)o=i._next,this.remove(i),i=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),nn(this)},r.totalDuration=function(n){var i=0,o=this,a=o._last,c=Wt,l,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(h=o.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,ar(o,a,u-a._delay,1)._lock=0):c=u,u<0&&a._ts&&(i-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),c=0),a._end>i&&a._ts&&(i=a._end),a=l;jn(o,o===ve&&o._time>i?o._time:i,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(n){if(ve._ts&&(gc(ve,hs(n,ve)),hc=At.frame),At.frame>=ca){ca+=jt.autoSleep||120;var i=ve._first;if((!i||!i._ts)&&jt.autoSleep&&At._listeners.length<2){for(;i&&!i._ts;)i=i._next;i||At.sleep()}}},e}(vi);Ft(pt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Ru=function(e,r,t,n,i,o,a){var c=new xt(this._pt,e,r,0,1,Xc,null,i),l=0,u=0,h,p,f,m,d,g,v,y;for(c.b=t,c.e=n,t+="",n+="",(v=~n.indexOf("random("))&&(n=_i(n)),o&&(y=[t,n],o(y,e,r),t=y[0],n=y[1]),p=t.match(Ds)||[];h=Ds.exec(n);)m=h[0],d=n.substring(l,h.index),f?f=(f+1)%5:d.substr(-5)==="rgba("&&(f=1),m!==p[u++]&&(g=parseFloat(p[u-1])||0,c._pt={_next:c._pt,p:d||u===1?d:",",s:g,c:m.charAt(1)==="="?Cn(g,m)-g:parseFloat(m)-g,m:f&&f<4?Math.round:0},l=Ds.lastIndex);return c.c=l<n.length?n.substring(l,n.length):"",c.fp=a,(cc.test(n)||v)&&(c.e=0),this._pt=c,c},Lo=function(e,r,t,n,i,o,a,c,l,u){Se(n)&&(n=n(i||0,e,o));var h=e[r],p=t!=="get"?t:Se(h)?l?e[r.indexOf("set")||!Se(e["get"+r.substr(3)])?r:"get"+r.substr(3)](l):e[r]():h,f=Se(h)?l?Iu:Bc:$o,m;if(We(n)&&(~n.indexOf("random(")&&(n=_i(n)),n.charAt(1)==="="&&(m=Cn(p,n)+(it(p)||0),(m||m===0)&&(n=m))),!u||p!==n||ao)return!isNaN(p*n)&&n!==""?(m=new xt(this._pt,e,r,+p||0,n-(p||0),typeof h=="boolean"?ju:Yc,0,f),l&&(m.fp=l),a&&m.modifier(a,this,e),this._pt=m):(!h&&!(r in e)&&Ao(r,n),Ru.call(this,e,r,p,n,f,c||jt.stringFilter,l))},Mu=function(e,r,t,n,i){if(Se(e)&&(e=si(e,i,r,t,n)),!dr(e)||e.style&&e.nodeType||ot(e)||oc(e))return We(e)?si(e,i,r,t,n):e;var o={},a;for(a in e)o[a]=si(e[a],i,r,t,n);return o},Lc=function(e,r,t,n,i,o){var a,c,l,u;if(Et[e]&&(a=new Et[e]).init(i,a.rawVars?r[e]:Mu(r[e],n,i,o,t),t,n,o)!==!1&&(t._pt=c=new xt(t._pt,i,e,0,1,a.render,a,0,a.priority),t!==Tn))for(l=t._ptLookup[t._targets.indexOf(i)],u=a._props.length;u--;)l[a._props[u]]=c;return a},Dr,ao,Fo=function s(e,r,t){var n=e.vars,i=n.ease,o=n.startAt,a=n.immediateRender,c=n.lazy,l=n.onUpdate,u=n.runBackwards,h=n.yoyoEase,p=n.keyframes,f=n.autoRevert,m=e._dur,d=e._startAt,g=e._targets,v=e.parent,y=v&&v.data==="nested"?v.vars.targets:g,b=e._overwrite==="auto"&&!Ro,x=e.timeline,_,k,w,S,C,O,A,R,F,B,U,$,z;if(x&&(!p||!i)&&(i="none"),e._ease=sn(i,An.ease),e._yEase=h?Ic(sn(h===!0?i:h,An.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!x&&!!n.runBackwards,!x||p&&!n.stagger){if(R=g[0]?rn(g[0]).harness:0,$=R&&n[R.prop],_=ds(n,Io),d&&(d._zTime<0&&d.progress(1),r<0&&u&&a&&!f?d.render(-1,!0):d.revert(u&&m?Zi:iu),d._lazy=0),o){if($r(e._startAt=De.set(g,Ft({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!d&&vt(c),startAt:null,delay:0,onUpdate:l&&function(){return Nt(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,r<0&&(Ke||!a&&!f)&&e._startAt.revert(Zi),a&&m&&r<=0&&t<=0){r&&(e._zTime=r);return}}else if(u&&m&&!d){if(r&&(a=!1),w=Ft({overwrite:!1,data:"isFromStart",lazy:a&&!d&&vt(c),immediateRender:a,stagger:0,parent:v},_),$&&(w[R.prop]=$),$r(e._startAt=De.set(g,w)),e._startAt._dp=0,e._startAt._sat=e,r<0&&(Ke?e._startAt.revert(Zi):e._startAt.render(-1,!0)),e._zTime=r,!a)s(e._startAt,de,de);else if(!r)return}for(e._pt=e._ptCache=0,c=m&&vt(c)||c&&!m,k=0;k<g.length;k++){if(C=g[k],A=C._gsap||jo(g)[k]._gsap,e._ptLookup[k]=B={},to[A.id]&&zr.length&&fs(),U=y===g?k:y.indexOf(C),R&&(F=new R).init(C,$||_,e,U,y)!==!1&&(e._pt=S=new xt(e._pt,C,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(W){B[W]=S}),F.priority&&(O=1)),!R||$)for(w in _)Et[w]&&(F=Lc(w,_,e,U,C,y))?F.priority&&(O=1):B[w]=S=Lo.call(e,C,w,"get",_[w],U,y,0,n.stringFilter);e._op&&e._op[k]&&e.kill(C,e._op[k]),b&&e._pt&&(Dr=e,ve.killTweensOf(C,B,e.globalTime(r)),z=!e.parent,Dr=0),e._pt&&c&&(to[A.id]=1)}O&&Wc(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!z,p&&r<=0&&x.render(Wt,!0,!0)},Eu=function(e,r,t,n,i,o,a,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[r],u,h,p,f;if(!l)for(l=e._ptCache[r]=[],p=e._ptLookup,f=e._targets.length;f--;){if(u=p[f][r],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==r&&u.fp!==r;)u=u._next;if(!u)return ao=1,e.vars[r]="+=0",Fo(e,a),ao=0,c?gi(r+" not eligible for reset"):1;l.push(u)}for(f=l.length;f--;)h=l[f],u=h._pt||h,u.s=(n||n===0)&&!i?n:u.s+(n||0)+o*u.c,u.c=t-u.s,h.e&&(h.e=Oe(t)+it(h.e)),h.b&&(h.b=u.s+it(h.b))},Du=function(e,r){var t=e[0]?rn(e[0]).harness:0,n=t&&t.aliases,i,o,a,c;if(!n)return r;i=In({},r);for(o in n)if(o in i)for(c=n[o].split(","),a=c.length;a--;)i[c[a]]=i[o];return i},Au=function(e,r,t,n){var i=r.ease||n||"power1.inOut",o,a;if(ot(r))a=t[e]||(t[e]=[]),r.forEach(function(c,l){return a.push({t:l/(r.length-1)*100,v:c,e:i})});else for(o in r)a=t[o]||(t[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:r[o],e:i})},si=function(e,r,t,n,i){return Se(e)?e.call(r,t,n,i):We(e)&&~e.indexOf("random(")?_i(e):e},Fc=No+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",$c={};bt(Fc+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return $c[s]=1});var De=function(s){ic(e,s);function e(t,n,i,o){var a;typeof n=="number"&&(i.duration=n,n=i,i=null),a=s.call(this,o?n:ni(n))||this;var c=a.vars,l=c.duration,u=c.delay,h=c.immediateRender,p=c.stagger,f=c.overwrite,m=c.keyframes,d=c.defaults,g=c.scrollTrigger,v=c.yoyoEase,y=n.parent||ve,b=(ot(t)||oc(t)?Sr(t[0]):"length"in n)?[t]:Vt(t),x,_,k,w,S,C,O,A;if(a._targets=b.length?jo(b):gi("GSAP target "+t+" not found. https://gsap.com",!jt.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,m||p||Ai(l)||Ai(u)){if(n=a.vars,x=a.timeline=new pt({data:"nested",defaults:d||{},targets:y&&y.data==="nested"?y.vars.targets:b}),x.kill(),x.parent=x._dp=yr(a),x._start=0,p||Ai(l)||Ai(u)){if(w=b.length,O=p&&Tc(p),dr(p))for(S in p)~Fc.indexOf(S)&&(A||(A={}),A[S]=p[S]);for(_=0;_<w;_++)k=ds(n,$c),k.stagger=0,v&&(k.yoyoEase=v),A&&In(k,A),C=b[_],k.duration=+si(l,yr(a),_,C,b),k.delay=(+si(u,yr(a),_,C,b)||0)-a._delay,!p&&w===1&&k.delay&&(a._delay=u=k.delay,a._start+=u,k.delay=0),x.to(C,k,O?O(_,C,b):0),x._ease=J.none;x.duration()?l=u=0:a.timeline=0}else if(m){ni(Ft(x.vars.defaults,{ease:"none"})),x._ease=sn(m.ease||n.ease||"none");var R=0,F,B,U;if(ot(m))m.forEach(function($){return x.to(b,$,">")}),x.duration();else{k={};for(S in m)S==="ease"||S==="easeEach"||Au(S,m[S],k,m.easeEach);for(S in k)for(F=k[S].sort(function($,z){return $.t-z.t}),R=0,_=0;_<F.length;_++)B=F[_],U={ease:B.e,duration:(B.t-(_?F[_-1].t:0))/100*l},U[S]=B.v,x.to(b,U,R),R+=U.duration;x.duration()<l&&x.to({},{duration:l-x.duration()})}}l||a.duration(l=x.duration())}else a.timeline=0;return f===!0&&!Ro&&(Dr=yr(a),ve.killTweensOf(b),Dr=0),ar(y,yr(a),i),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(h||!l&&!m&&a._start===Ae(y._time)&&vt(h)&&uu(yr(a))&&y.data!=="nested")&&(a._tTime=-de,a.render(Math.max(0,-u)||0)),g&&bc(yr(a),g),a}var r=e.prototype;return r.render=function(n,i,o){var a=this._time,c=this._tDur,l=this._dur,u=n<0,h=n>c-de&&!u?c:n<de?0:n,p,f,m,d,g,v,y,b,x;if(!l)du(this,n,i,o);else if(h!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(p=h,b=this.timeline,this._repeat){if(d=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+n,i,o);if(p=Ae(h%d),h===c?(m=this._repeat,p=l):(g=Ae(h/d),m=~~g,m&&m===g?(p=l,m--):p>l&&(p=l)),v=this._yoyo&&m&1,v&&(x=this._yEase,p=l-p),g=Nn(this._tTime,d),p===a&&!o&&this._initted&&m===g)return this._tTime=h,this;m!==g&&(b&&this._yEase&&Nc(b,v),this.vars.repeatRefresh&&!v&&!this._lock&&p!==d&&this._initted&&(this._lock=o=1,this.render(Ae(d*m),!0).invalidate()._lock=0))}if(!this._initted){if(xc(this,u?n:p,o,i,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==g))return this;if(l!==this._dur)return this.render(n,i,o)}if(this._tTime=h,this._time=p,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(x||this._ease)(p/l),this._from&&(this.ratio=y=1-y),!a&&h&&!i&&!g&&(Nt(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;b&&b.render(n<0?n:b._dur*b._ease(p/this._dur),i,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!i&&(u&&ro(this,n,i,o),Nt(this,"onUpdate")),this._repeat&&m!==g&&this.vars.onRepeat&&!i&&this.parent&&Nt(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&ro(this,n,!0,!0),(n||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&$r(this,1),!i&&!(u&&!a)&&(h||a||v)&&(Nt(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},r.targets=function(){return this._targets},r.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),s.prototype.invalidate.call(this,n)},r.resetTo=function(n,i,o,a,c){yi||At.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Fo(this,l),u=this._ease(l/this._dur),Eu(this,n,i,o,a,u,l,c)?this.resetTo(n,i,o,a,1):(ks(this,0),this.parent||yc(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},r.kill=function(n,i){if(i===void 0&&(i="all"),!n&&(!i||i==="all"))return this._lazy=this._pt=0,this.parent?Kn(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ke),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,i,Dr&&Dr.vars.overwrite!==!0)._first||Kn(this),this.parent&&o!==this.timeline.totalDuration()&&jn(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=n?Vt(n):a,l=this._ptLookup,u=this._pt,h,p,f,m,d,g,v;if((!i||i==="all")&&cu(a,c))return i==="all"&&(this._pt=0),Kn(this);for(h=this._op=this._op||[],i!=="all"&&(We(i)&&(d={},bt(i,function(y){return d[y]=1}),i=d),i=Du(a,i)),v=a.length;v--;)if(~c.indexOf(a[v])){p=l[v],i==="all"?(h[v]=i,m=p,f={}):(f=h[v]=h[v]||{},m=i);for(d in m)g=p&&p[d],g&&((!("kill"in g.d)||g.d.kill(d)===!0)&&Ss(this,g,"_pt"),delete p[d]),f!=="all"&&(f[d]=1)}return this._initted&&!this._pt&&u&&Kn(this),this},e.to=function(n,i){return new e(n,i,arguments[2])},e.from=function(n,i){return ii(1,arguments)},e.delayedCall=function(n,i,o,a){return new e(i,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:i,onReverseComplete:i,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(n,i,o){return ii(2,arguments)},e.set=function(n,i){return i.duration=0,i.repeatDelay||(i.repeat=0),new e(n,i)},e.killTweensOf=function(n,i,o){return ve.killTweensOf(n,i,o)},e}(vi);Ft(De.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});bt("staggerTo,staggerFrom,staggerFromTo",function(s){De[s]=function(){var e=new pt,r=io.call(arguments,0);return r.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,r)}});var $o=function(e,r,t){return e[r]=t},Bc=function(e,r,t){return e[r](t)},Iu=function(e,r,t,n){return e[r](n.fp,t)},Nu=function(e,r,t){return e.setAttribute(r,t)},Bo=function(e,r){return Se(e[r])?Bc:Mo(e[r])&&e.setAttribute?Nu:$o},Yc=function(e,r){return r.set(r.t,r.p,Math.round((r.s+r.c*e)*1e6)/1e6,r)},ju=function(e,r){return r.set(r.t,r.p,!!(r.s+r.c*e),r)},Xc=function(e,r){var t=r._pt,n="";if(!e&&r.b)n=r.b;else if(e===1&&r.e)n=r.e;else{for(;t;)n=t.p+(t.m?t.m(t.s+t.c*e):Math.round((t.s+t.c*e)*1e4)/1e4)+n,t=t._next;n+=r.c}r.set(r.t,r.p,n,r)},Yo=function(e,r){for(var t=r._pt;t;)t.r(e,t.d),t=t._next},zu=function(e,r,t,n){for(var i=this._pt,o;i;)o=i._next,i.p===n&&i.modifier(e,r,t),i=o},Lu=function(e){for(var r=this._pt,t,n;r;)n=r._next,r.p===e&&!r.op||r.op===e?Ss(this,r,"_pt"):r.dep||(t=1),r=n;return!t},Fu=function(e,r,t,n){n.mSet(e,r,n.m.call(n.tween,t,n.mt),n)},Wc=function(e){for(var r=e._pt,t,n,i,o;r;){for(t=r._next,n=i;n&&n.pr>r.pr;)n=n._next;(r._prev=n?n._prev:o)?r._prev._next=r:i=r,(r._next=n)?n._prev=r:o=r,r=t}e._pt=i},xt=function(){function s(r,t,n,i,o,a,c,l,u){this.t=t,this.s=i,this.c=o,this.p=n,this.r=a||Yc,this.d=c||this,this.set=l||$o,this.pr=u||0,this._next=r,r&&(r._prev=this)}var e=s.prototype;return e.modifier=function(t,n,i){this.mSet=this.mSet||this.set,this.set=Fu,this.m=t,this.mt=i,this.tween=n},s}();bt(No+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Io[s]=1});Lt.TweenMax=Lt.TweenLite=De;Lt.TimelineLite=Lt.TimelineMax=pt;ve=new pt({sortChildren:!1,defaults:An,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});jt.stringFilter=Ac;var on=[],Ji={},$u=[],pa=0,Bu=0,zs=function(e){return(Ji[e]||$u).map(function(r){return r()})},co=function(){var e=Date.now(),r=[];e-pa>2&&(zs("matchMediaInit"),on.forEach(function(t){var n=t.queries,i=t.conditions,o,a,c,l;for(a in n)o=nr.matchMedia(n[a]).matches,o&&(c=1),o!==i[a]&&(i[a]=o,l=1);l&&(t.revert(),c&&r.push(t))}),zs("matchMediaRevert"),r.forEach(function(t){return t.onMatch(t,function(n){return t.add(null,n)})}),pa=e,zs("matchMedia"))},Vc=function(){function s(r,t){this.selector=t&&so(t),this.data=[],this._r=[],this.isReverted=!1,this.id=Bu++,r&&this.add(r)}var e=s.prototype;return e.add=function(t,n,i){Se(t)&&(i=n,n=t,t=Se);var o=this,a=function(){var l=_e,u=o.selector,h;return l&&l!==o&&l.data.push(o),i&&(o.selector=so(i)),_e=o,h=n.apply(o,arguments),Se(h)&&o._r.push(h),_e=l,o.selector=u,o.isReverted=!1,h};return o.last=a,t===Se?a(o,function(c){return o.add(null,c)}):t?o[t]=a:a},e.ignore=function(t){var n=_e;_e=null,t(this),_e=n},e.getTweens=function(){var t=[];return this.data.forEach(function(n){return n instanceof s?t.push.apply(t,n.getTweens()):n instanceof De&&!(n.parent&&n.parent.data==="nested")&&t.push(n)}),t},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(t,n){var i=this;if(t?function(){for(var a=i.getTweens(),c=i.data.length,l;c--;)l=i.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(t)}),c=i.data.length;c--;)l=i.data[c],l instanceof pt?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof De)&&l.revert&&l.revert(t);i._r.forEach(function(u){return u(t,i)}),i.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),n)for(var o=on.length;o--;)on[o].id===this.id&&on.splice(o,1)},e.revert=function(t){this.kill(t||{})},s}(),Yu=function(){function s(r){this.contexts=[],this.scope=r,_e&&_e.data.push(this)}var e=s.prototype;return e.add=function(t,n,i){dr(t)||(t={matches:t});var o=new Vc(0,i||this.scope),a=o.conditions={},c,l,u;_e&&!o.selector&&(o.selector=_e.selector),this.contexts.push(o),n=o.add("onMatch",n),o.queries=t;for(l in t)l==="all"?u=1:(c=nr.matchMedia(t[l]),c&&(on.indexOf(o)<0&&on.push(o),(a[l]=c.matches)&&(u=1),c.addListener?c.addListener(co):c.addEventListener("change",co)));return u&&n(o,function(h){return o.add(null,h)}),this},e.revert=function(t){this.kill(t||{})},e.kill=function(t){this.contexts.forEach(function(n){return n.kill(t,!0)})},s}(),ps={registerPlugin:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];r.forEach(function(n){return Mc(n)})},timeline:function(e){return new pt(e)},getTweensOf:function(e,r){return ve.getTweensOf(e,r)},getProperty:function(e,r,t,n){We(e)&&(e=Vt(e)[0]);var i=rn(e||{}).get,o=t?_c:mc;return t==="native"&&(t=""),e&&(r?o((Et[r]&&Et[r].get||i)(e,r,t,n)):function(a,c,l){return o((Et[a]&&Et[a].get||i)(e,a,c,l))})},quickSetter:function(e,r,t){if(e=Vt(e),e.length>1){var n=e.map(function(u){return St.quickSetter(u,r,t)}),i=n.length;return function(u){for(var h=i;h--;)n[h](u)}}e=e[0]||{};var o=Et[r],a=rn(e),c=a.harness&&(a.harness.aliases||{})[r]||r,l=o?function(u){var h=new o;Tn._pt=0,h.init(e,t?u+t:u,Tn,0,[e]),h.render(1,h),Tn._pt&&Yo(1,Tn)}:a.set(e,c);return o?l:function(u){return l(e,c,t?u+t:u,a,1)}},quickTo:function(e,r,t){var n,i=St.to(e,Ft((n={},n[r]="+=0.1",n.paused=!0,n.stagger=0,n),t||{})),o=function(c,l,u){return i.resetTo(r,c,l,u)};return o.tween=i,o},isTweening:function(e){return ve.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=sn(e.ease,An.ease)),la(An,e||{})},config:function(e){return la(jt,e||{})},registerEffect:function(e){var r=e.name,t=e.effect,n=e.plugins,i=e.defaults,o=e.extendTimeline;(n||"").split(",").forEach(function(a){return a&&!Et[a]&&!Lt[a]&&gi(r+" effect requires "+a+" plugin.")}),As[r]=function(a,c,l){return t(Vt(a),Ft(c||{},i),l)},o&&(pt.prototype[r]=function(a,c,l){return this.add(As[r](a,dr(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,r){J[e]=sn(r)},parseEase:function(e,r){return arguments.length?sn(e,r):J},getById:function(e){return ve.getById(e)},exportRoot:function(e,r){e===void 0&&(e={});var t=new pt(e),n,i;for(t.smoothChildTiming=vt(e.smoothChildTiming),ve.remove(t),t._dp=0,t._time=t._tTime=ve._time,n=ve._first;n;)i=n._next,(r||!(!n._dur&&n instanceof De&&n.vars.onComplete===n._targets[0]))&&ar(t,n,n._start-n._delay),n=i;return ar(ve,t,0),t},context:function(e,r){return e?new Vc(e,r):_e},matchMedia:function(e){return new Yu(e)},matchMediaRefresh:function(){return on.forEach(function(e){var r=e.conditions,t,n;for(n in r)r[n]&&(r[n]=!1,t=1);t&&e.revert()})||co()},addEventListener:function(e,r){var t=Ji[e]||(Ji[e]=[]);~t.indexOf(r)||t.push(r)},removeEventListener:function(e,r){var t=Ji[e],n=t&&t.indexOf(r);n>=0&&t.splice(n,1)},utils:{wrap:bu,wrapYoyo:xu,distribute:Tc,random:Cc,snap:kc,normalize:vu,getUnit:it,clamp:gu,splitColor:Ec,toArray:Vt,selector:so,mapRange:Oc,pipe:_u,unitize:yu,interpolate:wu,shuffle:Sc},install:fc,effects:As,ticker:At,updateRoot:pt.updateRoot,plugins:Et,globalTimeline:ve,core:{PropTween:xt,globals:dc,Tween:De,Timeline:pt,Animation:vi,getCache:rn,_removeLinkedListItem:Ss,reverting:function(){return Ke},context:function(e){return e&&_e&&(_e.data.push(e),e._ctx=_e),_e},suppressOverwrites:function(e){return Ro=e}}};bt("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return ps[s]=De[s]});At.add(pt.updateRoot);Tn=ps.to({},{duration:0});var Xu=function(e,r){for(var t=e._pt;t&&t.p!==r&&t.op!==r&&t.fp!==r;)t=t._next;return t},Wu=function(e,r){var t=e._targets,n,i,o;for(n in r)for(i=t.length;i--;)o=e._ptLookup[i][n],o&&(o=o.d)&&(o._pt&&(o=Xu(o,n)),o&&o.modifier&&o.modifier(r[n],e,t[i],n))},Ls=function(e,r){return{name:e,headless:1,rawVars:1,init:function(n,i,o){o._onInit=function(a){var c,l;if(We(i)&&(c={},bt(i,function(u){return c[u]=1}),i=c),r){c={};for(l in i)c[l]=r(i[l]);i=c}Wu(a,i)}}}},St=ps.registerPlugin({name:"attr",init:function(e,r,t,n,i){var o,a,c;this.tween=t;for(o in r)c=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(c||0)+"",r[o],n,i,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(e,r){for(var t=r._pt;t;)Ke?t.set(t.t,t.p,t.b,t):t.r(e,t.d),t=t._next}},{name:"endArray",headless:1,init:function(e,r){for(var t=r.length;t--;)this.add(e,t,e[t]||0,r[t],0,0,0,0,0,1)}},Ls("roundProps",oo),Ls("modifiers"),Ls("snap",kc))||ps;De.version=pt.version=St.version="3.13.0";uc=1;Eo()&&zn();J.Power0;J.Power1;J.Power2;J.Power3;J.Power4;J.Linear;J.Quad;J.Cubic;J.Quart;J.Quint;J.Strong;J.Elastic;J.Back;J.SteppedEase;J.Bounce;J.Sine;J.Expo;J.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ga,Ar,Pn,Xo,en,ma,Wo,Vu=function(){return typeof window<"u"},Tr={},Zr=180/Math.PI,On=Math.PI/180,yn=Math.atan2,_a=1e8,Vo=/([A-Z])/g,Hu=/(left|right|width|margin|padding|x)/i,Uu=/[\s,\(]\S/,cr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},lo=function(e,r){return r.set(r.t,r.p,Math.round((r.s+r.c*e)*1e4)/1e4+r.u,r)},qu=function(e,r){return r.set(r.t,r.p,e===1?r.e:Math.round((r.s+r.c*e)*1e4)/1e4+r.u,r)},Gu=function(e,r){return r.set(r.t,r.p,e?Math.round((r.s+r.c*e)*1e4)/1e4+r.u:r.b,r)},Ku=function(e,r){var t=r.s+r.c*e;r.set(r.t,r.p,~~(t+(t<0?-.5:.5))+r.u,r)},Hc=function(e,r){return r.set(r.t,r.p,e?r.e:r.b,r)},Uc=function(e,r){return r.set(r.t,r.p,e!==1?r.b:r.e,r)},Zu=function(e,r,t){return e.style[r]=t},Qu=function(e,r,t){return e.style.setProperty(r,t)},Ju=function(e,r,t){return e._gsap[r]=t},ef=function(e,r,t){return e._gsap.scaleX=e._gsap.scaleY=t},tf=function(e,r,t,n,i){var o=e._gsap;o.scaleX=o.scaleY=t,o.renderTransform(i,o)},rf=function(e,r,t,n,i){var o=e._gsap;o[r]=t,o.renderTransform(i,o)},be="transform",wt=be+"Origin",nf=function s(e,r){var t=this,n=this.target,i=n.style,o=n._gsap;if(e in Tr&&i){if(this.tfm=this.tfm||{},e!=="transform")e=cr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return t.tfm[a]=vr(n,a)}):this.tfm[e]=o.x?o[e]:vr(n,e),e===wt&&(this.tfm.zOrigin=o.zOrigin);else return cr.transform.split(",").forEach(function(a){return s.call(t,a,r)});if(this.props.indexOf(be)>=0)return;o.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(wt,r,"")),e=be}(i||r)&&this.props.push(e,r,i[e])},qc=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},sf=function(){var e=this.props,r=this.target,t=r.style,n=r._gsap,i,o;for(i=0;i<e.length;i+=3)e[i+1]?e[i+1]===2?r[e[i]](e[i+2]):r[e[i]]=e[i+2]:e[i+2]?t[e[i]]=e[i+2]:t.removeProperty(e[i].substr(0,2)==="--"?e[i]:e[i].replace(Vo,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),r.setAttribute("data-svg-origin",this.svgo||"")),i=Wo(),(!i||!i.isStart)&&!t[be]&&(qc(t),n.zOrigin&&t[wt]&&(t[wt]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},Gc=function(e,r){var t={target:e,props:[],revert:sf,save:nf};return e._gsap||St.core.getCache(e),r&&e.style&&e.nodeType&&r.split(",").forEach(function(n){return t.save(n)}),t},Kc,uo=function(e,r){var t=Ar.createElementNS?Ar.createElementNS((r||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ar.createElement(e);return t&&t.style?t:Ar.createElement(e)},Ht=function s(e,r,t){var n=getComputedStyle(e);return n[r]||n.getPropertyValue(r.replace(Vo,"-$1").toLowerCase())||n.getPropertyValue(r)||!t&&s(e,Ln(r)||r,1)||""},ya="O,Moz,ms,Ms,Webkit".split(","),Ln=function(e,r,t){var n=r||en,i=n.style,o=5;if(e in i&&!t)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(ya[o]+e in i););return o<0?null:(o===3?"ms":o>=0?ya[o]:"")+e},fo=function(){Vu()&&window.document&&(ga=window,Ar=ga.document,Pn=Ar.documentElement,en=uo("div")||{style:{}},uo("div"),be=Ln(be),wt=be+"Origin",en.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Kc=!!Ln("perspective"),Wo=St.core.reverting,Xo=1)},va=function(e){var r=e.ownerSVGElement,t=uo("svg",r&&r.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=e.cloneNode(!0),i;n.style.display="block",t.appendChild(n),Pn.appendChild(t);try{i=n.getBBox()}catch{}return t.removeChild(n),Pn.removeChild(t),i},ba=function(e,r){for(var t=r.length;t--;)if(e.hasAttribute(r[t]))return e.getAttribute(r[t])},Zc=function(e){var r,t;try{r=e.getBBox()}catch{r=va(e),t=1}return r&&(r.width||r.height)||t||(r=va(e)),r&&!r.width&&!r.x&&!r.y?{x:+ba(e,["x","cx","x1"])||0,y:+ba(e,["y","cy","y1"])||0,width:0,height:0}:r},Qc=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Zc(e))},un=function(e,r){if(r){var t=e.style,n;r in Tr&&r!==wt&&(r=be),t.removeProperty?(n=r.substr(0,2),(n==="ms"||r.substr(0,6)==="webkit")&&(r="-"+r),t.removeProperty(n==="--"?r:r.replace(Vo,"-$1").toLowerCase())):t.removeAttribute(r)}},Ir=function(e,r,t,n,i,o){var a=new xt(e._pt,r,t,0,1,o?Uc:Hc);return e._pt=a,a.b=n,a.e=i,e._props.push(t),a},xa={deg:1,rad:1,turn:1},of={grid:1,flex:1},Br=function s(e,r,t,n){var i=parseFloat(t)||0,o=(t+"").trim().substr((i+"").length)||"px",a=en.style,c=Hu.test(r),l=e.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),h=100,p=n==="px",f=n==="%",m,d,g,v;if(n===o||!i||xa[n]||xa[o])return i;if(o!=="px"&&!p&&(i=s(e,r,t,"px")),v=e.getCTM&&Qc(e),(f||o==="%")&&(Tr[r]||~r.indexOf("adius")))return m=v?e.getBBox()[c?"width":"height"]:e[u],Oe(f?i/m*h:i/100*m);if(a[c?"width":"height"]=h+(p?o:n),d=n!=="rem"&&~r.indexOf("adius")||n==="em"&&e.appendChild&&!l?e:e.parentNode,v&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===Ar||!d.appendChild)&&(d=Ar.body),g=d._gsap,g&&f&&g.width&&c&&g.time===At.time&&!g.uncache)return Oe(i/g.width*h);if(f&&(r==="height"||r==="width")){var y=e.style[r];e.style[r]=h+n,m=e[u],y?e.style[r]=y:un(e,r)}else(f||o==="%")&&!of[Ht(d,"display")]&&(a.position=Ht(e,"position")),d===e&&(a.position="static"),d.appendChild(en),m=en[u],d.removeChild(en),a.position="absolute";return c&&f&&(g=rn(d),g.time=At.time,g.width=d[u]),Oe(p?m*i/h:m&&i?h/m*i:0)},vr=function(e,r,t,n){var i;return Xo||fo(),r in cr&&r!=="transform"&&(r=cr[r],~r.indexOf(",")&&(r=r.split(",")[0])),Tr[r]&&r!=="transform"?(i=xi(e,n),i=r!=="transformOrigin"?i[r]:i.svg?i.origin:ms(Ht(e,wt))+" "+i.zOrigin+"px"):(i=e.style[r],(!i||i==="auto"||n||~(i+"").indexOf("calc("))&&(i=gs[r]&&gs[r](e,r,t)||Ht(e,r)||pc(e,r)||(r==="opacity"?1:0))),t&&!~(i+"").trim().indexOf(" ")?Br(e,r,i,t)+t:i},af=function(e,r,t,n){if(!t||t==="none"){var i=Ln(r,e,1),o=i&&Ht(e,i,1);o&&o!==t?(r=i,t=o):r==="borderColor"&&(t=Ht(e,"borderTopColor"))}var a=new xt(this._pt,e.style,r,0,1,Xc),c=0,l=0,u,h,p,f,m,d,g,v,y,b,x,_;if(a.b=t,a.e=n,t+="",n+="",n.substring(0,6)==="var(--"&&(n=Ht(e,n.substring(4,n.indexOf(")")))),n==="auto"&&(d=e.style[r],e.style[r]=n,n=Ht(e,r)||n,d?e.style[r]=d:un(e,r)),u=[t,n],Ac(u),t=u[0],n=u[1],p=t.match(Sn)||[],_=n.match(Sn)||[],_.length){for(;h=Sn.exec(n);)g=h[0],y=n.substring(c,h.index),m?m=(m+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(m=1),g!==(d=p[l++]||"")&&(f=parseFloat(d)||0,x=d.substr((f+"").length),g.charAt(1)==="="&&(g=Cn(f,g)+x),v=parseFloat(g),b=g.substr((v+"").length),c=Sn.lastIndex-b.length,b||(b=b||jt.units[r]||x,c===n.length&&(n+=b,a.e+=b)),x!==b&&(f=Br(e,r,d,b)||0),a._pt={_next:a._pt,p:y||l===1?y:",",s:f,c:v-f,m:m&&m<4||r==="zIndex"?Math.round:0});a.c=c<n.length?n.substring(c,n.length):""}else a.r=r==="display"&&n==="none"?Uc:Hc;return cc.test(n)&&(a.e=0),this._pt=a,a},wa={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},cf=function(e){var r=e.split(" "),t=r[0],n=r[1]||"50%";return(t==="top"||t==="bottom"||n==="left"||n==="right")&&(e=t,t=n,n=e),r[0]=wa[t]||t,r[1]=wa[n]||n,r.join(" ")},lf=function(e,r){if(r.tween&&r.tween._time===r.tween._dur){var t=r.t,n=t.style,i=r.u,o=t._gsap,a,c,l;if(i==="all"||i===!0)n.cssText="",c=1;else for(i=i.split(","),l=i.length;--l>-1;)a=i[l],Tr[a]&&(c=1,a=a==="transformOrigin"?wt:be),un(t,a);c&&(un(t,be),o&&(o.svg&&t.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",xi(t,1),o.uncache=1,qc(n)))}},gs={clearProps:function(e,r,t,n,i){if(i.data!=="isFromStart"){var o=e._pt=new xt(e._pt,r,t,0,0,lf);return o.u=n,o.pr=-10,o.tween=i,e._props.push(t),1}}},bi=[1,0,0,1,0,0],Jc={},el=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Sa=function(e){var r=Ht(e,be);return el(r)?bi:r.substr(7).match(ac).map(Oe)},Ho=function(e,r){var t=e._gsap||rn(e),n=e.style,i=Sa(e),o,a,c,l;return t.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,i=[c.a,c.b,c.c,c.d,c.e,c.f],i.join(",")==="1,0,0,1,0,0"?bi:i):(i===bi&&!e.offsetParent&&e!==Pn&&!t.svg&&(c=n.display,n.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,a=e.nextElementSibling,Pn.appendChild(e)),i=Sa(e),c?n.display=c:un(e,"display"),l&&(a?o.insertBefore(e,a):o?o.appendChild(e):Pn.removeChild(e))),r&&i.length>6?[i[0],i[1],i[4],i[5],i[12],i[13]]:i)},ho=function(e,r,t,n,i,o){var a=e._gsap,c=i||Ho(e,!0),l=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,p=a.yOffset||0,f=c[0],m=c[1],d=c[2],g=c[3],v=c[4],y=c[5],b=r.split(" "),x=parseFloat(b[0])||0,_=parseFloat(b[1])||0,k,w,S,C;t?c!==bi&&(w=f*g-m*d)&&(S=x*(g/w)+_*(-d/w)+(d*y-g*v)/w,C=x*(-m/w)+_*(f/w)-(f*y-m*v)/w,x=S,_=C):(k=Zc(e),x=k.x+(~b[0].indexOf("%")?x/100*k.width:x),_=k.y+(~(b[1]||b[0]).indexOf("%")?_/100*k.height:_)),n||n!==!1&&a.smooth?(v=x-l,y=_-u,a.xOffset=h+(v*f+y*d)-v,a.yOffset=p+(v*m+y*g)-y):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=_,a.smooth=!!n,a.origin=r,a.originIsAbsolute=!!t,e.style[wt]="0px 0px",o&&(Ir(o,a,"xOrigin",l,x),Ir(o,a,"yOrigin",u,_),Ir(o,a,"xOffset",h,a.xOffset),Ir(o,a,"yOffset",p,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+_)},xi=function(e,r){var t=e._gsap||new zc(e);if("x"in t&&!r&&!t.uncache)return t;var n=e.style,i=t.scaleX<0,o="px",a="deg",c=getComputedStyle(e),l=Ht(e,wt)||"0",u,h,p,f,m,d,g,v,y,b,x,_,k,w,S,C,O,A,R,F,B,U,$,z,W,re,T,le,Ve,kt,ge,Te;return u=h=p=d=g=v=y=b=x=0,f=m=1,t.svg=!!(e.getCTM&&Qc(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(n[be]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[be]!=="none"?c[be]:"")),n.scale=n.rotate=n.translate="none"),w=Ho(e,t.svg),t.svg&&(t.uncache?(W=e.getBBox(),l=t.xOrigin-W.x+"px "+(t.yOrigin-W.y)+"px",z=""):z=!r&&e.getAttribute("data-svg-origin"),ho(e,z||l,!!z||t.originIsAbsolute,t.smooth!==!1,w)),_=t.xOrigin||0,k=t.yOrigin||0,w!==bi&&(A=w[0],R=w[1],F=w[2],B=w[3],u=U=w[4],h=$=w[5],w.length===6?(f=Math.sqrt(A*A+R*R),m=Math.sqrt(B*B+F*F),d=A||R?yn(R,A)*Zr:0,y=F||B?yn(F,B)*Zr+d:0,y&&(m*=Math.abs(Math.cos(y*On))),t.svg&&(u-=_-(_*A+k*F),h-=k-(_*R+k*B))):(Te=w[6],kt=w[7],T=w[8],le=w[9],Ve=w[10],ge=w[11],u=w[12],h=w[13],p=w[14],S=yn(Te,Ve),g=S*Zr,S&&(C=Math.cos(-S),O=Math.sin(-S),z=U*C+T*O,W=$*C+le*O,re=Te*C+Ve*O,T=U*-O+T*C,le=$*-O+le*C,Ve=Te*-O+Ve*C,ge=kt*-O+ge*C,U=z,$=W,Te=re),S=yn(-F,Ve),v=S*Zr,S&&(C=Math.cos(-S),O=Math.sin(-S),z=A*C-T*O,W=R*C-le*O,re=F*C-Ve*O,ge=B*O+ge*C,A=z,R=W,F=re),S=yn(R,A),d=S*Zr,S&&(C=Math.cos(S),O=Math.sin(S),z=A*C+R*O,W=U*C+$*O,R=R*C-A*O,$=$*C-U*O,A=z,U=W),g&&Math.abs(g)+Math.abs(d)>359.9&&(g=d=0,v=180-v),f=Oe(Math.sqrt(A*A+R*R+F*F)),m=Oe(Math.sqrt($*$+Te*Te)),S=yn(U,$),y=Math.abs(S)>2e-4?S*Zr:0,x=ge?1/(ge<0?-ge:ge):0),t.svg&&(z=e.getAttribute("transform"),t.forceCSS=e.setAttribute("transform","")||!el(Ht(e,be)),z&&e.setAttribute("transform",z))),Math.abs(y)>90&&Math.abs(y)<270&&(i?(f*=-1,y+=d<=0?180:-180,d+=d<=0?180:-180):(m*=-1,y+=y<=0?180:-180)),r=r||t.uncache,t.x=u-((t.xPercent=u&&(!r&&t.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*t.xPercent/100:0)+o,t.y=h-((t.yPercent=h&&(!r&&t.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*t.yPercent/100:0)+o,t.z=p+o,t.scaleX=Oe(f),t.scaleY=Oe(m),t.rotation=Oe(d)+a,t.rotationX=Oe(g)+a,t.rotationY=Oe(v)+a,t.skewX=y+a,t.skewY=b+a,t.transformPerspective=x+o,(t.zOrigin=parseFloat(l.split(" ")[2])||!r&&t.zOrigin||0)&&(n[wt]=ms(l)),t.xOffset=t.yOffset=0,t.force3D=jt.force3D,t.renderTransform=t.svg?ff:Kc?tl:uf,t.uncache=0,t},ms=function(e){return(e=e.split(" "))[0]+" "+e[1]},Fs=function(e,r,t){var n=it(r);return Oe(parseFloat(r)+parseFloat(Br(e,"x",t+"px",n)))+n},uf=function(e,r){r.z="0px",r.rotationY=r.rotationX="0deg",r.force3D=0,tl(e,r)},Gr="0deg",Hn="0px",Kr=") ",tl=function(e,r){var t=r||this,n=t.xPercent,i=t.yPercent,o=t.x,a=t.y,c=t.z,l=t.rotation,u=t.rotationY,h=t.rotationX,p=t.skewX,f=t.skewY,m=t.scaleX,d=t.scaleY,g=t.transformPerspective,v=t.force3D,y=t.target,b=t.zOrigin,x="",_=v==="auto"&&e&&e!==1||v===!0;if(b&&(h!==Gr||u!==Gr)){var k=parseFloat(u)*On,w=Math.sin(k),S=Math.cos(k),C;k=parseFloat(h)*On,C=Math.cos(k),o=Fs(y,o,w*C*-b),a=Fs(y,a,-Math.sin(k)*-b),c=Fs(y,c,S*C*-b+b)}g!==Hn&&(x+="perspective("+g+Kr),(n||i)&&(x+="translate("+n+"%, "+i+"%) "),(_||o!==Hn||a!==Hn||c!==Hn)&&(x+=c!==Hn||_?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+Kr),l!==Gr&&(x+="rotate("+l+Kr),u!==Gr&&(x+="rotateY("+u+Kr),h!==Gr&&(x+="rotateX("+h+Kr),(p!==Gr||f!==Gr)&&(x+="skew("+p+", "+f+Kr),(m!==1||d!==1)&&(x+="scale("+m+", "+d+Kr),y.style[be]=x||"translate(0, 0)"},ff=function(e,r){var t=r||this,n=t.xPercent,i=t.yPercent,o=t.x,a=t.y,c=t.rotation,l=t.skewX,u=t.skewY,h=t.scaleX,p=t.scaleY,f=t.target,m=t.xOrigin,d=t.yOrigin,g=t.xOffset,v=t.yOffset,y=t.forceCSS,b=parseFloat(o),x=parseFloat(a),_,k,w,S,C;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=On,l*=On,_=Math.cos(c)*h,k=Math.sin(c)*h,w=Math.sin(c-l)*-p,S=Math.cos(c-l)*p,l&&(u*=On,C=Math.tan(l-u),C=Math.sqrt(1+C*C),w*=C,S*=C,u&&(C=Math.tan(u),C=Math.sqrt(1+C*C),_*=C,k*=C)),_=Oe(_),k=Oe(k),w=Oe(w),S=Oe(S)):(_=h,S=p,k=w=0),(b&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(b=Br(f,"x",o,"px"),x=Br(f,"y",a,"px")),(m||d||g||v)&&(b=Oe(b+m-(m*_+d*w)+g),x=Oe(x+d-(m*k+d*S)+v)),(n||i)&&(C=f.getBBox(),b=Oe(b+n/100*C.width),x=Oe(x+i/100*C.height)),C="matrix("+_+","+k+","+w+","+S+","+b+","+x+")",f.setAttribute("transform",C),y&&(f.style[be]=C)},df=function(e,r,t,n,i){var o=360,a=We(i),c=parseFloat(i)*(a&&~i.indexOf("rad")?Zr:1),l=c-n,u=n+l+"deg",h,p;return a&&(h=i.split("_")[1],h==="short"&&(l%=o,l!==l%(o/2)&&(l+=l<0?o:-o)),h==="cw"&&l<0?l=(l+o*_a)%o-~~(l/o)*o:h==="ccw"&&l>0&&(l=(l-o*_a)%o-~~(l/o)*o)),e._pt=p=new xt(e._pt,r,t,n,l,qu),p.e=u,p.u="deg",e._props.push(t),p},Ta=function(e,r){for(var t in r)e[t]=r[t];return e},hf=function(e,r,t){var n=Ta({},t._gsap),i="perspective,force3D,transformOrigin,svgOrigin",o=t.style,a,c,l,u,h,p,f,m;n.svg?(l=t.getAttribute("transform"),t.setAttribute("transform",""),o[be]=r,a=xi(t,1),un(t,be),t.setAttribute("transform",l)):(l=getComputedStyle(t)[be],o[be]=r,a=xi(t,1),o[be]=l);for(c in Tr)l=n[c],u=a[c],l!==u&&i.indexOf(c)<0&&(f=it(l),m=it(u),h=f!==m?Br(t,c,l,m):parseFloat(l),p=parseFloat(u),e._pt=new xt(e._pt,a,c,h,p-h,lo),e._pt.u=m||0,e._props.push(c));Ta(a,n)};bt("padding,margin,Width,Radius",function(s,e){var r="Top",t="Right",n="Bottom",i="Left",o=(e<3?[r,t,n,i]:[r+i,r+t,n+t,n+i]).map(function(a){return e<2?s+a:"border"+a+s});gs[e>1?"border"+s:s]=function(a,c,l,u,h){var p,f;if(arguments.length<4)return p=o.map(function(m){return vr(a,m,l)}),f=p.join(" "),f.split(p[0]).length===5?p[0]:f;p=(u+"").split(" "),f={},o.forEach(function(m,d){return f[m]=p[d]=p[d]||p[(d-1)/2|0]}),a.init(c,f,h)}});var rl={name:"css",register:fo,targetTest:function(e){return e.style&&e.nodeType},init:function(e,r,t,n,i){var o=this._props,a=e.style,c=t.vars.startAt,l,u,h,p,f,m,d,g,v,y,b,x,_,k,w,S;Xo||fo(),this.styles=this.styles||Gc(e),S=this.styles.props,this.tween=t;for(d in r)if(d!=="autoRound"&&(u=r[d],!(Et[d]&&Lc(d,r,t,n,e,i)))){if(f=typeof u,m=gs[d],f==="function"&&(u=u.call(t,n,e,i),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=_i(u)),m)m(this,e,d,u,t)&&(w=1);else if(d.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(d)+"").trim(),u+="",Lr.lastIndex=0,Lr.test(l)||(g=it(l),v=it(u)),v?g!==v&&(l=Br(e,d,l,v)+v):g&&(u+=g),this.add(a,"setProperty",l,u,n,i,0,0,d),o.push(d),S.push(d,0,a[d]);else if(f!=="undefined"){if(c&&d in c?(l=typeof c[d]=="function"?c[d].call(t,n,e,i):c[d],We(l)&&~l.indexOf("random(")&&(l=_i(l)),it(l+"")||l==="auto"||(l+=jt.units[d]||it(vr(e,d))||""),(l+"").charAt(1)==="="&&(l=vr(e,d))):l=vr(e,d),p=parseFloat(l),y=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),d in cr&&(d==="autoAlpha"&&(p===1&&vr(e,"visibility")==="hidden"&&h&&(p=0),S.push("visibility",0,a.visibility),Ir(this,a,"visibility",p?"inherit":"hidden",h?"inherit":"hidden",!h)),d!=="scale"&&d!=="transform"&&(d=cr[d],~d.indexOf(",")&&(d=d.split(",")[0]))),b=d in Tr,b){if(this.styles.save(d),f==="string"&&u.substring(0,6)==="var(--"&&(u=Ht(e,u.substring(4,u.indexOf(")"))),h=parseFloat(u)),x||(_=e._gsap,_.renderTransform&&!r.parseTransform||xi(e,r.parseTransform),k=r.smoothOrigin!==!1&&_.smooth,x=this._pt=new xt(this._pt,a,be,0,1,_.renderTransform,_,0,-1),x.dep=1),d==="scale")this._pt=new xt(this._pt,_,"scaleY",_.scaleY,(y?Cn(_.scaleY,y+h):h)-_.scaleY||0,lo),this._pt.u=0,o.push("scaleY",d),d+="X";else if(d==="transformOrigin"){S.push(wt,0,a[wt]),u=cf(u),_.svg?ho(e,u,0,k,0,this):(v=parseFloat(u.split(" ")[2])||0,v!==_.zOrigin&&Ir(this,_,"zOrigin",_.zOrigin,v),Ir(this,a,d,ms(l),ms(u)));continue}else if(d==="svgOrigin"){ho(e,u,1,k,0,this);continue}else if(d in Jc){df(this,_,d,p,y?Cn(p,y+u):u);continue}else if(d==="smoothOrigin"){Ir(this,_,"smooth",_.smooth,u);continue}else if(d==="force3D"){_[d]=u;continue}else if(d==="transform"){hf(this,u,e);continue}}else d in a||(d=Ln(d)||d);if(b||(h||h===0)&&(p||p===0)&&!Uu.test(u)&&d in a)g=(l+"").substr((p+"").length),h||(h=0),v=it(u)||(d in jt.units?jt.units[d]:g),g!==v&&(p=Br(e,d,l,v)),this._pt=new xt(this._pt,b?_:a,d,p,(y?Cn(p,y+h):h)-p,!b&&(v==="px"||d==="zIndex")&&r.autoRound!==!1?Ku:lo),this._pt.u=v||0,g!==v&&v!=="%"&&(this._pt.b=l,this._pt.r=Gu);else if(d in a)af.call(this,e,d,l,y?y+u:u);else if(d in e)this.add(e,d,l||e[d],y?y+u:u,n,i);else if(d!=="parseTransform"){Ao(d,u);continue}b||(d in a?S.push(d,0,a[d]):typeof e[d]=="function"?S.push(d,2,e[d]()):S.push(d,1,l||e[d])),o.push(d)}}w&&Wc(this)},render:function(e,r){if(r.tween._time||!Wo())for(var t=r._pt;t;)t.r(e,t.d),t=t._next;else r.styles.revert()},get:vr,aliases:cr,getSetter:function(e,r,t){var n=cr[r];return n&&n.indexOf(",")<0&&(r=n),r in Tr&&r!==wt&&(e._gsap.x||vr(e,"x"))?t&&ma===t?r==="scale"?ef:Ju:(ma=t||{})&&(r==="scale"?tf:rf):e.style&&!Mo(e.style[r])?Zu:~r.indexOf("-")?Qu:Bo(e,r)},core:{_removeProperty:un,_getMatrix:Ho}};St.utils.checkPrefix=Ln;St.core.getStyleSaver=Gc;(function(s,e,r,t){var n=bt(s+","+e+","+r,function(i){Tr[i]=1});bt(e,function(i){jt.units[i]="deg",Jc[i]=1}),cr[n[13]]=s+","+e,bt(t,function(i){var o=i.split(":");cr[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");bt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){jt.units[s]="px"});St.registerPlugin(rl);var te=St.registerPlugin(rl)||St;te.core.Tween;const pf="/images/elite-edge.webp",gf="/images/chip-8.webp",mf="/images/macos-neovim.webp",_f="/images/mintex.webp",yf="/images/unity-book.webp",vf="/images/planet-gravity.webp",bf="/images/interm.webp",xf="/images/blog.webp",wf="/images/showcase.webp",Sf=[pf,gf,mf,_f,yf,vf,bf,xf],Tf=[wf],nl="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.83337%2014.1667L14.1667%205.83334M14.1667%205.83334H5.83337M14.1667%205.83334V14.1667'%20stroke='%231E1E1E'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";function kf(){const s=[{label:"About",href:"#about"},{label:"Projects",href:"#work"},{label:"Blog",href:"/blog"},{label:"Showcase",href:"/showcase"},{label:"Resume",href:"/pages/Benjamin-Lertpunyaroj-Resume.pdf"}],e=N.useRef([]);e.current=[];const[r,t]=N.useState(null),n=i=>{i&&!e.current.includes(i)&&e.current.push(i)};return N.useEffect(()=>{e.current.forEach((i,o)=>{te.to(i,{opacity:r===null||r===o?1:.35,duration:.25,ease:"power1.out"})})},[r]),M.jsxs("header",{className:"flex justify-between items-center w-full h-30 bg-white text-[18px]",children:[M.jsxs("a",{href:"/",className:"relative pl-7 sm:pl-20 group flex items-center overflow-hidden select-none",children:[M.jsx("div",{className:"mr-1.5",children:"©"}),M.jsx("div",{className:"whitespace-nowrap ease-custom-cubic transition-transform duration-500 group-hover:[transform:translateX(calc(-100%-10rem))]",children:"coded by"}),M.jsx("div",{className:"whitespace-nowrap ease-custom-cubic px-1 transition-transform duration-500 group-hover:-translate-x-19",children:"Benjamin"}),M.jsx("div",{className:"whitespace-nowrap ease-custom-cubic translate-x-full transition-transform duration-500 group-hover:-translate-x-19",children:"Lobos Lertpunyaroj"})]}),M.jsx("nav",{className:"hidden md:flex gap-6 justify-center md:pr-20 lg:pr-50",children:s.map(({label:i,href:o},a)=>M.jsx("a",{href:o,ref:n,className:"font-interregular text-black select-none",onMouseEnter:()=>{t(a)},onMouseLeave:()=>{t(null)},children:i.split("").map((c,l)=>M.jsx("span",{className:"inline-block char whitespace-pre",children:c===" "?" ":c},l))},i))}),M.jsx("div",{className:"hidden lg:inline-flex items-center gap-2 pr-20",children:M.jsxs("a",{href:"#contact",className:"inline-flex items-center group",children:[M.jsx("span",{className:"font-interregular text-black",children:"Contact"}),M.jsx("img",{src:nl,className:"w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1",alt:""})]})})]})}function Cf(s,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(s,t.key,t)}}function Pf(s,e,r){return e&&Cf(s.prototype,e),s}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ge,es,It,Nr,jr,Rn,il,Qr,oi,sl,xr,Jt,ol,al=function(){return Ge||typeof window<"u"&&(Ge=window.gsap)&&Ge.registerPlugin&&Ge},cl=1,kn=[],K=[],ur=[],ai=Date.now,po=function(e,r){return r},Of=function(){var e=oi.core,r=e.bridge||{},t=e._scrollers,n=e._proxies;t.push.apply(t,K),n.push.apply(n,ur),K=t,ur=n,po=function(o,a){return r[o](a)}},Fr=function(e,r){return~ur.indexOf(e)&&ur[ur.indexOf(e)+1][r]},ci=function(e){return!!~sl.indexOf(e)},ut=function(e,r,t,n,i){return e.addEventListener(r,t,{passive:n!==!1,capture:!!i})},lt=function(e,r,t,n){return e.removeEventListener(r,t,!!n)},Ii="scrollLeft",Ni="scrollTop",go=function(){return xr&&xr.isPressed||K.cache++},_s=function(e,r){var t=function n(i){if(i||i===0){cl&&(It.history.scrollRestoration="manual");var o=xr&&xr.isPressed;i=n.v=Math.round(i)||(xr&&xr.iOS?1:0),e(i),n.cacheID=K.cache,o&&po("ss",i)}else(r||K.cache!==n.cacheID||po("ref"))&&(n.cacheID=K.cache,n.v=e());return n.v+n.offset};return t.offset=0,e&&t},gt={s:Ii,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:_s(function(s){return arguments.length?It.scrollTo(s,Le.sc()):It.pageXOffset||Nr[Ii]||jr[Ii]||Rn[Ii]||0})},Le={s:Ni,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:gt,sc:_s(function(s){return arguments.length?It.scrollTo(gt.sc(),s):It.pageYOffset||Nr[Ni]||jr[Ni]||Rn[Ni]||0})},yt=function(e,r){return(r&&r._ctx&&r._ctx.selector||Ge.utils.toArray)(e)[0]||(typeof e=="string"&&Ge.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Rf=function(e,r){for(var t=r.length;t--;)if(r[t]===e||r[t].contains(e))return!0;return!1},Yr=function(e,r){var t=r.s,n=r.sc;ci(e)&&(e=Nr.scrollingElement||jr);var i=K.indexOf(e),o=n===Le.sc?1:2;!~i&&(i=K.push(e)-1),K[i+o]||ut(e,"scroll",go);var a=K[i+o],c=a||(K[i+o]=_s(Fr(e,t),!0)||(ci(e)?n:_s(function(l){return arguments.length?e[t]=l:e[t]})));return c.target=e,a||(c.smooth=Ge.getProperty(e,"scrollBehavior")==="smooth"),c},mo=function(e,r,t){var n=e,i=e,o=ai(),a=o,c=r||50,l=Math.max(500,c*3),u=function(m,d){var g=ai();d||g-o>c?(i=n,n=m,a=o,o=g):t?n+=m:n=i+(m-i)/(g-a)*(o-a)},h=function(){i=n=t?0:n,a=o=0},p=function(m){var d=a,g=i,v=ai();return(m||m===0)&&m!==n&&u(m),o===a||v-a>l?0:(n+(t?g:-g))/((t?v:o)-d)*1e3};return{update:u,reset:h,getVelocity:p}},Un=function(e,r){return r&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},ka=function(e){var r=Math.max.apply(Math,e),t=Math.min.apply(Math,e);return Math.abs(r)>=Math.abs(t)?r:t},ll=function(){oi=Ge.core.globals().ScrollTrigger,oi&&oi.core&&Of()},ul=function(e){return Ge=e||al(),!es&&Ge&&typeof document<"u"&&document.body&&(It=window,Nr=document,jr=Nr.documentElement,Rn=Nr.body,sl=[It,Nr,jr,Rn],Ge.utils.clamp,ol=Ge.core.context||function(){},Qr="onpointerenter"in Rn?"pointer":"mouse",il=Re.isTouch=It.matchMedia&&It.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in It||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Jt=Re.eventTypes=("ontouchstart"in jr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in jr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return cl=0},500),ll(),es=1),es};gt.op=Le;K.cache=0;var Re=function(){function s(r){this.init(r)}var e=s.prototype;return e.init=function(t){es||ul(Ge)||console.warn("Please gsap.registerPlugin(Observer)"),oi||ll();var n=t.tolerance,i=t.dragMinimum,o=t.type,a=t.target,c=t.lineHeight,l=t.debounce,u=t.preventDefault,h=t.onStop,p=t.onStopDelay,f=t.ignore,m=t.wheelSpeed,d=t.event,g=t.onDragStart,v=t.onDragEnd,y=t.onDrag,b=t.onPress,x=t.onRelease,_=t.onRight,k=t.onLeft,w=t.onUp,S=t.onDown,C=t.onChangeX,O=t.onChangeY,A=t.onChange,R=t.onToggleX,F=t.onToggleY,B=t.onHover,U=t.onHoverEnd,$=t.onMove,z=t.ignoreCheck,W=t.isNormalizer,re=t.onGestureStart,T=t.onGestureEnd,le=t.onWheel,Ve=t.onEnable,kt=t.onDisable,ge=t.onClick,Te=t.scrollSpeed,Ne=t.capture,he=t.allowClicks,at=t.lockAxis,Ze=t.onLockAxis;this.target=a=yt(a)||jr,this.vars=t,f&&(f=Ge.utils.toArray(f)),n=n||1e-9,i=i||0,m=m||1,Te=Te||1,o=o||"wheel,touch,pointer",l=l!==!1,c||(c=parseFloat(It.getComputedStyle(Rn).lineHeight)||22);var kr,ct,mt,ee,ke,_t,Ct,P=this,Pt=0,hr=0,Cr=t.passive||!u&&t.passive!==!1,xe=Yr(a,gt),pr=Yr(a,Le),Pr=xe(),Wr=pr(),Fe=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Jt[0]==="pointerdown",Or=ci(a),Ce=a.ownerDocument||Nr,qt=[0,0,0],$t=[0,0,0],gr=0,Yn=function(){return gr=ai()},Me=function(L,ne){return(P.event=L)&&f&&Rf(L.target,f)||ne&&Fe&&L.pointerType!=="touch"||z&&z(L,ne)},Mi=function(){P._vx.reset(),P._vy.reset(),ct.pause(),h&&h(P)},mr=function(){var L=P.deltaX=ka(qt),ne=P.deltaY=ka($t),D=Math.abs(L)>=n,Y=Math.abs(ne)>=n;A&&(D||Y)&&A(P,L,ne,qt,$t),D&&(_&&P.deltaX>0&&_(P),k&&P.deltaX<0&&k(P),C&&C(P),R&&P.deltaX<0!=Pt<0&&R(P),Pt=P.deltaX,qt[0]=qt[1]=qt[2]=0),Y&&(S&&P.deltaY>0&&S(P),w&&P.deltaY<0&&w(P),O&&O(P),F&&P.deltaY<0!=hr<0&&F(P),hr=P.deltaY,$t[0]=$t[1]=$t[2]=0),(ee||mt)&&($&&$(P),mt&&(g&&mt===1&&g(P),y&&y(P),mt=0),ee=!1),_t&&!(_t=!1)&&Ze&&Ze(P),ke&&(le(P),ke=!1),kr=0},gn=function(L,ne,D){qt[D]+=L,$t[D]+=ne,P._vx.update(L),P._vy.update(ne),l?kr||(kr=requestAnimationFrame(mr)):mr()},mn=function(L,ne){at&&!Ct&&(P.axis=Ct=Math.abs(L)>Math.abs(ne)?"x":"y",_t=!0),Ct!=="y"&&(qt[2]+=L,P._vx.update(L,!0)),Ct!=="x"&&($t[2]+=ne,P._vy.update(ne,!0)),l?kr||(kr=requestAnimationFrame(mr)):mr()},Rr=function(L){if(!Me(L,1)){L=Un(L,u);var ne=L.clientX,D=L.clientY,Y=ne-P.x,j=D-P.y,X=P.isDragging;P.x=ne,P.y=D,(X||(Y||j)&&(Math.abs(P.startX-ne)>=i||Math.abs(P.startY-D)>=i))&&(mt=X?2:1,X||(P.isDragging=!0),mn(Y,j))}},Vr=P.onPress=function(V){Me(V,1)||V&&V.button||(P.axis=Ct=null,ct.pause(),P.isPressed=!0,V=Un(V),Pt=hr=0,P.startX=P.x=V.clientX,P.startY=P.y=V.clientY,P._vx.reset(),P._vy.reset(),ut(W?a:Ce,Jt[1],Rr,Cr,!0),P.deltaX=P.deltaY=0,b&&b(P))},Z=P.onRelease=function(V){if(!Me(V,1)){lt(W?a:Ce,Jt[1],Rr,!0);var L=!isNaN(P.y-P.startY),ne=P.isDragging,D=ne&&(Math.abs(P.x-P.startX)>3||Math.abs(P.y-P.startY)>3),Y=Un(V);!D&&L&&(P._vx.reset(),P._vy.reset(),u&&he&&Ge.delayedCall(.08,function(){if(ai()-gr>300&&!V.defaultPrevented){if(V.target.click)V.target.click();else if(Ce.createEvent){var j=Ce.createEvent("MouseEvents");j.initMouseEvent("click",!0,!0,It,1,Y.screenX,Y.screenY,Y.clientX,Y.clientY,!1,!1,!1,!1,0,null),V.target.dispatchEvent(j)}}})),P.isDragging=P.isGesturing=P.isPressed=!1,h&&ne&&!W&&ct.restart(!0),mt&&mr(),v&&ne&&v(P),x&&x(P,D)}},Hr=function(L){return L.touches&&L.touches.length>1&&(P.isGesturing=!0)&&re(L,P.isDragging)},Gt=function(){return(P.isGesturing=!1)||T(P)},Kt=function(L){if(!Me(L)){var ne=xe(),D=pr();gn((ne-Pr)*Te,(D-Wr)*Te,1),Pr=ne,Wr=D,h&&ct.restart(!0)}},Zt=function(L){if(!Me(L)){L=Un(L,u),le&&(ke=!0);var ne=(L.deltaMode===1?c:L.deltaMode===2?It.innerHeight:1)*m;gn(L.deltaX*ne,L.deltaY*ne,0),h&&!W&&ct.restart(!0)}},Ur=function(L){if(!Me(L)){var ne=L.clientX,D=L.clientY,Y=ne-P.x,j=D-P.y;P.x=ne,P.y=D,ee=!0,h&&ct.restart(!0),(Y||j)&&mn(Y,j)}},_n=function(L){P.event=L,B(P)},_r=function(L){P.event=L,U(P)},Xn=function(L){return Me(L)||Un(L,u)&&ge(P)};ct=P._dc=Ge.delayedCall(p||.25,Mi).pause(),P.deltaX=P.deltaY=0,P._vx=mo(0,50,!0),P._vy=mo(0,50,!0),P.scrollX=xe,P.scrollY=pr,P.isDragging=P.isGesturing=P.isPressed=!1,ol(this),P.enable=function(V){return P.isEnabled||(ut(Or?Ce:a,"scroll",go),o.indexOf("scroll")>=0&&ut(Or?Ce:a,"scroll",Kt,Cr,Ne),o.indexOf("wheel")>=0&&ut(a,"wheel",Zt,Cr,Ne),(o.indexOf("touch")>=0&&il||o.indexOf("pointer")>=0)&&(ut(a,Jt[0],Vr,Cr,Ne),ut(Ce,Jt[2],Z),ut(Ce,Jt[3],Z),he&&ut(a,"click",Yn,!0,!0),ge&&ut(a,"click",Xn),re&&ut(Ce,"gesturestart",Hr),T&&ut(Ce,"gestureend",Gt),B&&ut(a,Qr+"enter",_n),U&&ut(a,Qr+"leave",_r),$&&ut(a,Qr+"move",Ur)),P.isEnabled=!0,P.isDragging=P.isGesturing=P.isPressed=ee=mt=!1,P._vx.reset(),P._vy.reset(),Pr=xe(),Wr=pr(),V&&V.type&&Vr(V),Ve&&Ve(P)),P},P.disable=function(){P.isEnabled&&(kn.filter(function(V){return V!==P&&ci(V.target)}).length||lt(Or?Ce:a,"scroll",go),P.isPressed&&(P._vx.reset(),P._vy.reset(),lt(W?a:Ce,Jt[1],Rr,!0)),lt(Or?Ce:a,"scroll",Kt,Ne),lt(a,"wheel",Zt,Ne),lt(a,Jt[0],Vr,Ne),lt(Ce,Jt[2],Z),lt(Ce,Jt[3],Z),lt(a,"click",Yn,!0),lt(a,"click",Xn),lt(Ce,"gesturestart",Hr),lt(Ce,"gestureend",Gt),lt(a,Qr+"enter",_n),lt(a,Qr+"leave",_r),lt(a,Qr+"move",Ur),P.isEnabled=P.isPressed=P.isDragging=!1,kt&&kt(P))},P.kill=P.revert=function(){P.disable();var V=kn.indexOf(P);V>=0&&kn.splice(V,1),xr===P&&(xr=0)},kn.push(P),W&&ci(a)&&(xr=P),P.enable(d)},Pf(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s}();Re.version="3.13.0";Re.create=function(s){return new Re(s)};Re.register=ul;Re.getAll=function(){return kn.slice()};Re.getById=function(s){return kn.filter(function(e){return e.vars.id===s})[0]};al()&&Ge.registerPlugin(Re);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var I,xn,G,pe,Dt,ce,Uo,ys,wi,li,Qn,ji,rt,Cs,_o,dt,Ca,Pa,wn,fl,$s,dl,ft,yo,hl,pl,Er,vo,qo,Mn,Go,vs,bo,Bs,zi=1,nt=Date.now,Ys=nt(),Ut=0,Jn=0,Oa=function(e,r,t){var n=Mt(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return t["_"+r+"Clamp"]=n,n?e.substr(6,e.length-7):e},Ra=function(e,r){return r&&(!Mt(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Mf=function s(){return Jn&&requestAnimationFrame(s)},Ma=function(){return Cs=1},Ea=function(){return Cs=0},ir=function(e){return e},ei=function(e){return Math.round(e*1e5)/1e5||0},gl=function(){return typeof window<"u"},ml=function(){return I||gl()&&(I=window.gsap)&&I.registerPlugin&&I},fn=function(e){return!!~Uo.indexOf(e)},_l=function(e){return(e==="Height"?Go:G["inner"+e])||Dt["client"+e]||ce["client"+e]},yl=function(e){return Fr(e,"getBoundingClientRect")||(fn(e)?function(){return ss.width=G.innerWidth,ss.height=Go,ss}:function(){return br(e)})},Ef=function(e,r,t){var n=t.d,i=t.d2,o=t.a;return(o=Fr(e,"getBoundingClientRect"))?function(){return o()[n]}:function(){return(r?_l(i):e["client"+i])||0}},Df=function(e,r){return!r||~ur.indexOf(e)?yl(e):function(){return ss}},lr=function(e,r){var t=r.s,n=r.d2,i=r.d,o=r.a;return Math.max(0,(t="scroll"+n)&&(o=Fr(e,t))?o()-yl(e)()[i]:fn(e)?(Dt[t]||ce[t])-_l(n):e[t]-e["offset"+n])},Li=function(e,r){for(var t=0;t<wn.length;t+=3)(!r||~r.indexOf(wn[t+1]))&&e(wn[t],wn[t+1],wn[t+2])},Mt=function(e){return typeof e=="string"},st=function(e){return typeof e=="function"},ti=function(e){return typeof e=="number"},Jr=function(e){return typeof e=="object"},qn=function(e,r,t){return e&&e.progress(r?0:1)&&t&&e.pause()},Xs=function(e,r){if(e.enabled){var t=e._ctx?e._ctx.add(function(){return r(e)}):r(e);t&&t.totalTime&&(e.callbackAnimation=t)}},vn=Math.abs,vl="left",bl="top",Ko="right",Zo="bottom",an="width",cn="height",ui="Right",fi="Left",di="Top",hi="Bottom",Ee="padding",Yt="margin",Fn="Width",Qo="Height",ze="px",Xt=function(e){return G.getComputedStyle(e)},Af=function(e){var r=Xt(e).position;e.style.position=r==="absolute"||r==="fixed"?r:"relative"},Da=function(e,r){for(var t in r)t in e||(e[t]=r[t]);return e},br=function(e,r){var t=r&&Xt(e)[_o]!=="matrix(1, 0, 0, 1, 0, 0)"&&I.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect();return t&&t.progress(0).kill(),n},bs=function(e,r){var t=r.d2;return e["offset"+t]||e["client"+t]||0},xl=function(e){var r=[],t=e.labels,n=e.duration(),i;for(i in t)r.push(t[i]/n);return r},If=function(e){return function(r){return I.utils.snap(xl(e),r)}},Jo=function(e){var r=I.utils.snap(e),t=Array.isArray(e)&&e.slice(0).sort(function(n,i){return n-i});return t?function(n,i,o){o===void 0&&(o=.001);var a;if(!i)return r(n);if(i>0){for(n-=o,a=0;a<t.length;a++)if(t[a]>=n)return t[a];return t[a-1]}else for(a=t.length,n+=o;a--;)if(t[a]<=n)return t[a];return t[0]}:function(n,i,o){o===void 0&&(o=.001);var a=r(n);return!i||Math.abs(a-n)<o||a-n<0==i<0?a:r(i<0?n-e:n+e)}},Nf=function(e){return function(r,t){return Jo(xl(e))(r,t.direction)}},Fi=function(e,r,t,n){return t.split(",").forEach(function(i){return e(r,i,n)})},Xe=function(e,r,t,n,i){return e.addEventListener(r,t,{passive:!n,capture:!!i})},Be=function(e,r,t,n){return e.removeEventListener(r,t,!!n)},$i=function(e,r,t){t=t&&t.wheelHandler,t&&(e(r,"wheel",t),e(r,"touchmove",t))},Aa={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Bi={toggleActions:"play",anticipatePin:0},xs={top:0,left:0,center:.5,bottom:1,right:1},ts=function(e,r){if(Mt(e)){var t=e.indexOf("="),n=~t?+(e.charAt(t-1)+1)*parseFloat(e.substr(t+1)):0;~t&&(e.indexOf("%")>t&&(n*=r/100),e=e.substr(0,t-1)),e=n+(e in xs?xs[e]*r:~e.indexOf("%")?parseFloat(e)*r/100:parseFloat(e)||0)}return e},Yi=function(e,r,t,n,i,o,a,c){var l=i.startColor,u=i.endColor,h=i.fontSize,p=i.indent,f=i.fontWeight,m=pe.createElement("div"),d=fn(t)||Fr(t,"pinType")==="fixed",g=e.indexOf("scroller")!==-1,v=d?ce:t,y=e.indexOf("start")!==-1,b=y?l:u,x="border-color:"+b+";font-size:"+h+";color:"+b+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((g||c)&&d?"fixed;":"absolute;"),(g||c||!d)&&(x+=(n===Le?Ko:Zo)+":"+(o+parseFloat(p))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=y,m.setAttribute("class","gsap-marker-"+e+(r?" marker-"+r:"")),m.style.cssText=x,m.innerText=r||r===0?e+"-"+r:e,v.children[0]?v.insertBefore(m,v.children[0]):v.appendChild(m),m._offset=m["offset"+n.op.d2],rs(m,0,n,y),m},rs=function(e,r,t,n){var i={display:"block"},o=t[n?"os2":"p2"],a=t[n?"p2":"os2"];e._isFlipped=n,i[t.a+"Percent"]=n?-100:0,i[t.a]=n?"1px":0,i["border"+o+Fn]=1,i["border"+a+Fn]=0,i[t.p]=r+"px",I.set(e,i)},q=[],xo={},Si,Ia=function(){return nt()-Ut>34&&(Si||(Si=requestAnimationFrame(wr)))},bn=function(){(!ft||!ft.isPressed||ft.startX>ce.clientWidth)&&(K.cache++,ft?Si||(Si=requestAnimationFrame(wr)):wr(),Ut||hn("scrollStart"),Ut=nt())},Ws=function(){pl=G.innerWidth,hl=G.innerHeight},ri=function(e){K.cache++,(e===!0||!rt&&!dl&&!pe.fullscreenElement&&!pe.webkitFullscreenElement&&(!yo||pl!==G.innerWidth||Math.abs(G.innerHeight-hl)>G.innerHeight*.25))&&ys.restart(!0)},dn={},jf=[],wl=function s(){return Be(H,"scrollEnd",s)||tn(!0)},hn=function(e){return dn[e]&&dn[e].map(function(r){return r()})||jf},Rt=[],Sl=function(e){for(var r=0;r<Rt.length;r+=5)(!e||Rt[r+4]&&Rt[r+4].query===e)&&(Rt[r].style.cssText=Rt[r+1],Rt[r].getBBox&&Rt[r].setAttribute("transform",Rt[r+2]||""),Rt[r+3].uncache=1)},ea=function(e,r){var t;for(dt=0;dt<q.length;dt++)t=q[dt],t&&(!r||t._ctx===r)&&(e?t.kill(1):t.revert(!0,!0));vs=!0,r&&Sl(r),r||hn("revert")},Tl=function(e,r){K.cache++,(r||!ht)&&K.forEach(function(t){return st(t)&&t.cacheID++&&(t.rec=0)}),Mt(e)&&(G.history.scrollRestoration=qo=e)},ht,ln=0,Na,zf=function(){if(Na!==ln){var e=Na=ln;requestAnimationFrame(function(){return e===ln&&tn(!0)})}},kl=function(){ce.appendChild(Mn),Go=!ft&&Mn.offsetHeight||G.innerHeight,ce.removeChild(Mn)},ja=function(e){return wi(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(r){return r.style.display=e?"none":"block"})},tn=function(e,r){if(Dt=pe.documentElement,ce=pe.body,Uo=[G,pe,Dt,ce],Ut&&!e&&!vs){Xe(H,"scrollEnd",wl);return}kl(),ht=H.isRefreshing=!0,K.forEach(function(n){return st(n)&&++n.cacheID&&(n.rec=n())});var t=hn("refreshInit");fl&&H.sort(),r||ea(),K.forEach(function(n){st(n)&&(n.smooth&&(n.target.style.scrollBehavior="auto"),n(0))}),q.slice(0).forEach(function(n){return n.refresh()}),vs=!1,q.forEach(function(n){if(n._subPinOffset&&n.pin){var i=n.vars.horizontal?"offsetWidth":"offsetHeight",o=n.pin[i];n.revert(!0,1),n.adjustPinSpacing(n.pin[i]-o),n.refresh()}}),bo=1,ja(!0),q.forEach(function(n){var i=lr(n.scroller,n._dir),o=n.vars.end==="max"||n._endClamp&&n.end>i,a=n._startClamp&&n.start>=i;(o||a)&&n.setPositions(a?i-1:n.start,o?Math.max(a?i:n.start+1,i):n.end,!0)}),ja(!1),bo=0,t.forEach(function(n){return n&&n.render&&n.render(-1)}),K.forEach(function(n){st(n)&&(n.smooth&&requestAnimationFrame(function(){return n.target.style.scrollBehavior="smooth"}),n.rec&&n(n.rec))}),Tl(qo,1),ys.pause(),ln++,ht=2,wr(2),q.forEach(function(n){return st(n.vars.onRefresh)&&n.vars.onRefresh(n)}),ht=H.isRefreshing=!1,hn("refresh")},wo=0,ns=1,pi,wr=function(e){if(e===2||!ht&&!vs){H.isUpdating=!0,pi&&pi.update(0);var r=q.length,t=nt(),n=t-Ys>=50,i=r&&q[0].scroll();if(ns=wo>i?-1:1,ht||(wo=i),n&&(Ut&&!Cs&&t-Ut>200&&(Ut=0,hn("scrollEnd")),Qn=Ys,Ys=t),ns<0){for(dt=r;dt-- >0;)q[dt]&&q[dt].update(0,n);ns=1}else for(dt=0;dt<r;dt++)q[dt]&&q[dt].update(0,n);H.isUpdating=!1}Si=0},So=[vl,bl,Zo,Ko,Yt+hi,Yt+ui,Yt+di,Yt+fi,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],is=So.concat([an,cn,"boxSizing","max"+Fn,"max"+Qo,"position",Yt,Ee,Ee+di,Ee+ui,Ee+hi,Ee+fi]),Lf=function(e,r,t){En(t);var n=e._gsap;if(n.spacerIsNative)En(n.spacerState);else if(e._gsap.swappedIn){var i=r.parentNode;i&&(i.insertBefore(e,r),i.removeChild(r))}e._gsap.swappedIn=!1},Vs=function(e,r,t,n){if(!e._gsap.swappedIn){for(var i=So.length,o=r.style,a=e.style,c;i--;)c=So[i],o[c]=t[c];o.position=t.position==="absolute"?"absolute":"relative",t.display==="inline"&&(o.display="inline-block"),a[Zo]=a[Ko]="auto",o.flexBasis=t.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[an]=bs(e,gt)+ze,o[cn]=bs(e,Le)+ze,o[Ee]=a[Yt]=a[bl]=a[vl]="0",En(n),a[an]=a["max"+Fn]=t[an],a[cn]=a["max"+Qo]=t[cn],a[Ee]=t[Ee],e.parentNode!==r&&(e.parentNode.insertBefore(r,e),r.appendChild(e)),e._gsap.swappedIn=!0}},Ff=/([A-Z])/g,En=function(e){if(e){var r=e.t.style,t=e.length,n=0,i,o;for((e.t._gsap||I.core.getCache(e.t)).uncache=1;n<t;n+=2)o=e[n+1],i=e[n],o?r[i]=o:r[i]&&r.removeProperty(i.replace(Ff,"-$1").toLowerCase())}},Xi=function(e){for(var r=is.length,t=e.style,n=[],i=0;i<r;i++)n.push(is[i],t[is[i]]);return n.t=e,n},$f=function(e,r,t){for(var n=[],i=e.length,o=t?8:0,a;o<i;o+=2)a=e[o],n.push(a,a in r?r[a]:e[o+1]);return n.t=e.t,n},ss={left:0,top:0},za=function(e,r,t,n,i,o,a,c,l,u,h,p,f,m){st(e)&&(e=e(c)),Mt(e)&&e.substr(0,3)==="max"&&(e=p+(e.charAt(4)==="="?ts("0"+e.substr(3),t):0));var d=f?f.time():0,g,v,y;if(f&&f.seek(0),isNaN(e)||(e=+e),ti(e))f&&(e=I.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,p,e)),a&&rs(a,t,n,!0);else{st(r)&&(r=r(c));var b=(e||"0").split(" "),x,_,k,w;y=yt(r,c)||ce,x=br(y)||{},(!x||!x.left&&!x.top)&&Xt(y).display==="none"&&(w=y.style.display,y.style.display="block",x=br(y),w?y.style.display=w:y.style.removeProperty("display")),_=ts(b[0],x[n.d]),k=ts(b[1]||"0",t),e=x[n.p]-l[n.p]-u+_+i-k,a&&rs(a,k,n,t-k<20||a._isStart&&k>20),t-=t-k}if(m&&(c[m]=e||-.001,e<0&&(e=0)),o){var S=e+t,C=o._isStart;g="scroll"+n.d2,rs(o,S,n,C&&S>20||!C&&(h?Math.max(ce[g],Dt[g]):o.parentNode[g])<=S+1),h&&(l=br(a),h&&(o.style[n.op.p]=l[n.op.p]-n.op.m-o._offset+ze))}return f&&y&&(g=br(y),f.seek(p),v=br(y),f._caScrollDist=g[n.p]-v[n.p],e=e/f._caScrollDist*p),f&&f.seek(d),f?e:Math.round(e)},Bf=/(webkit|moz|length|cssText|inset)/i,La=function(e,r,t,n){if(e.parentNode!==r){var i=e.style,o,a;if(r===ce){e._stOrig=i.cssText,a=Xt(e);for(o in a)!+o&&!Bf.test(o)&&a[o]&&typeof i[o]=="string"&&o!=="0"&&(i[o]=a[o]);i.top=t,i.left=n}else i.cssText=e._stOrig;I.core.getCache(e).uncache=1,r.appendChild(e)}},Cl=function(e,r,t){var n=r,i=n;return function(o){var a=Math.round(e());return a!==n&&a!==i&&Math.abs(a-n)>3&&Math.abs(a-i)>3&&(o=a,t&&t()),i=n,n=Math.round(o),n}},Wi=function(e,r,t){var n={};n[r.p]="+="+t,I.set(e,n)},Fa=function(e,r){var t=Yr(e,r),n="_scroll"+r.p2,i=function o(a,c,l,u,h){var p=o.tween,f=c.onComplete,m={};l=l||t();var d=Cl(t,l,function(){p.kill(),o.tween=0});return h=u&&h||0,u=u||a-l,p&&p.kill(),c[n]=a,c.inherit=!1,c.modifiers=m,m[n]=function(){return d(l+u*p.ratio+h*p.ratio*p.ratio)},c.onUpdate=function(){K.cache++,o.tween&&wr()},c.onComplete=function(){o.tween=0,f&&f.call(p)},p=o.tween=I.to(e,c),p};return e[n]=t,t.wheelHandler=function(){return i.tween&&i.tween.kill()&&(i.tween=0)},Xe(e,"wheel",t.wheelHandler),H.isTouch&&Xe(e,"touchmove",t.wheelHandler),i},H=function(){function s(r,t){xn||s.register(I)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),vo(this),this.init(r,t)}var e=s.prototype;return e.init=function(t,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Jn){this.update=this.refresh=this.kill=ir;return}t=Da(Mt(t)||ti(t)||t.nodeType?{trigger:t}:t,Bi);var i=t,o=i.onUpdate,a=i.toggleClass,c=i.id,l=i.onToggle,u=i.onRefresh,h=i.scrub,p=i.trigger,f=i.pin,m=i.pinSpacing,d=i.invalidateOnRefresh,g=i.anticipatePin,v=i.onScrubComplete,y=i.onSnapComplete,b=i.once,x=i.snap,_=i.pinReparent,k=i.pinSpacer,w=i.containerAnimation,S=i.fastScrollEnd,C=i.preventOverlaps,O=t.horizontal||t.containerAnimation&&t.horizontal!==!1?gt:Le,A=!h&&h!==0,R=yt(t.scroller||G),F=I.core.getCache(R),B=fn(R),U=("pinType"in t?t.pinType:Fr(R,"pinType")||B&&"fixed")==="fixed",$=[t.onEnter,t.onLeave,t.onEnterBack,t.onLeaveBack],z=A&&t.toggleActions.split(" "),W="markers"in t?t.markers:Bi.markers,re=B?0:parseFloat(Xt(R)["border"+O.p2+Fn])||0,T=this,le=t.onRefreshInit&&function(){return t.onRefreshInit(T)},Ve=Ef(R,B,O),kt=Df(R,B),ge=0,Te=0,Ne=0,he=Yr(R,O),at,Ze,kr,ct,mt,ee,ke,_t,Ct,P,Pt,hr,Cr,xe,pr,Pr,Wr,Fe,Or,Ce,qt,$t,gr,Yn,Me,Mi,mr,gn,mn,Rr,Vr,Z,Hr,Gt,Kt,Zt,Ur,_n,_r;if(T._startClamp=T._endClamp=!1,T._dir=O,g*=45,T.scroller=R,T.scroll=w?w.time.bind(w):he,ct=he(),T.vars=t,n=n||t.animation,"refreshPriority"in t&&(fl=1,t.refreshPriority===-9999&&(pi=T)),F.tweenScroll=F.tweenScroll||{top:Fa(R,Le),left:Fa(R,gt)},T.tweenTo=at=F.tweenScroll[O.p],T.scrubDuration=function(D){Hr=ti(D)&&D,Hr?Z?Z.duration(D):Z=I.to(n,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Hr,paused:!0,onComplete:function(){return v&&v(T)}}):(Z&&Z.progress(1).kill(),Z=0)},n&&(n.vars.lazy=!1,n._initted&&!T.isReverted||n.vars.immediateRender!==!1&&t.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),T.animation=n.pause(),n.scrollTrigger=T,T.scrubDuration(h),Rr=0,c||(c=n.vars.id)),x&&((!Jr(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in ce.style&&I.set(B?[ce,Dt]:R,{scrollBehavior:"auto"}),K.forEach(function(D){return st(D)&&D.target===(B?pe.scrollingElement||Dt:R)&&(D.smooth=!1)}),kr=st(x.snapTo)?x.snapTo:x.snapTo==="labels"?If(n):x.snapTo==="labelsDirectional"?Nf(n):x.directional!==!1?function(D,Y){return Jo(x.snapTo)(D,nt()-Te<500?0:Y.direction)}:I.utils.snap(x.snapTo),Gt=x.duration||{min:.1,max:2},Gt=Jr(Gt)?li(Gt.min,Gt.max):li(Gt,Gt),Kt=I.delayedCall(x.delay||Hr/2||.1,function(){var D=he(),Y=nt()-Te<500,j=at.tween;if((Y||Math.abs(T.getVelocity())<10)&&!j&&!Cs&&ge!==D){var X=(D-ee)/xe,$e=n&&!A?n.totalProgress():X,Q=Y?0:($e-Vr)/(nt()-Qn)*1e3||0,Pe=I.utils.clamp(-X,1-X,vn(Q/2)*Q/.185),Qe=X+(x.inertia===!1?0:Pe),we,me,ue=x,Qt=ue.onStart,ye=ue.onInterrupt,Ot=ue.onComplete;if(we=kr(Qe,T),ti(we)||(we=Qe),me=Math.max(0,Math.round(ee+we*xe)),D<=ke&&D>=ee&&me!==D){if(j&&!j._initted&&j.data<=vn(me-D))return;x.inertia===!1&&(Pe=we-X),at(me,{duration:Gt(vn(Math.max(vn(Qe-$e),vn(we-$e))*.185/Q/.05||0)),ease:x.ease||"power3",data:vn(me-D),onInterrupt:function(){return Kt.restart(!0)&&ye&&ye(T)},onComplete:function(){T.update(),ge=he(),n&&!A&&(Z?Z.resetTo("totalProgress",we,n._tTime/n._tDur):n.progress(we)),Rr=Vr=n&&!A?n.totalProgress():T.progress,y&&y(T),Ot&&Ot(T)}},D,Pe*xe,me-D-Pe*xe),Qt&&Qt(T,at.tween)}}else T.isActive&&ge!==D&&Kt.restart(!0)}).pause()),c&&(xo[c]=T),p=T.trigger=yt(p||f!==!0&&f),_r=p&&p._gsap&&p._gsap.stRevert,_r&&(_r=_r(T)),f=f===!0?p:yt(f),Mt(a)&&(a={targets:p,className:a}),f&&(m===!1||m===Yt||(m=!m&&f.parentNode&&f.parentNode.style&&Xt(f.parentNode).display==="flex"?!1:Ee),T.pin=f,Ze=I.core.getCache(f),Ze.spacer?pr=Ze.pinState:(k&&(k=yt(k),k&&!k.nodeType&&(k=k.current||k.nativeElement),Ze.spacerIsNative=!!k,k&&(Ze.spacerState=Xi(k))),Ze.spacer=Fe=k||pe.createElement("div"),Fe.classList.add("pin-spacer"),c&&Fe.classList.add("pin-spacer-"+c),Ze.pinState=pr=Xi(f)),t.force3D!==!1&&I.set(f,{force3D:!0}),T.spacer=Fe=Ze.spacer,mn=Xt(f),Yn=mn[m+O.os2],Ce=I.getProperty(f),qt=I.quickSetter(f,O.a,ze),Vs(f,Fe,mn),Wr=Xi(f)),W){hr=Jr(W)?Da(W,Aa):Aa,P=Yi("scroller-start",c,R,O,hr,0),Pt=Yi("scroller-end",c,R,O,hr,0,P),Or=P["offset"+O.op.d2];var Xn=yt(Fr(R,"content")||R);_t=this.markerStart=Yi("start",c,Xn,O,hr,Or,0,w),Ct=this.markerEnd=Yi("end",c,Xn,O,hr,Or,0,w),w&&(_n=I.quickSetter([_t,Ct],O.a,ze)),!U&&!(ur.length&&Fr(R,"fixedMarkers")===!0)&&(Af(B?ce:R),I.set([P,Pt],{force3D:!0}),Mi=I.quickSetter(P,O.a,ze),gn=I.quickSetter(Pt,O.a,ze))}if(w){var V=w.vars.onUpdate,L=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){T.update(0,0,1),V&&V.apply(w,L||[])})}if(T.previous=function(){return q[q.indexOf(T)-1]},T.next=function(){return q[q.indexOf(T)+1]},T.revert=function(D,Y){if(!Y)return T.kill(!0);var j=D!==!1||!T.enabled,X=rt;j!==T.isReverted&&(j&&(Zt=Math.max(he(),T.scroll.rec||0),Ne=T.progress,Ur=n&&n.progress()),_t&&[_t,Ct,P,Pt].forEach(function($e){return $e.style.display=j?"none":"block"}),j&&(rt=T,T.update(j)),f&&(!_||!T.isActive)&&(j?Lf(f,Fe,pr):Vs(f,Fe,Xt(f),Me)),j||T.update(j),rt=X,T.isReverted=j)},T.refresh=function(D,Y,j,X){if(!((rt||!T.enabled)&&!Y)){if(f&&D&&Ut){Xe(s,"scrollEnd",wl);return}!ht&&le&&le(T),rt=T,at.tween&&!j&&(at.tween.kill(),at.tween=0),Z&&Z.pause(),d&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren&&n.getChildren(!0,!0,!1).forEach(function(Mr){return Mr.vars.immediateRender&&Mr.render(0,!0,!0)})),T.isReverted||T.revert(!0,!0),T._subPinOffset=!1;var $e=Ve(),Q=kt(),Pe=w?w.duration():lr(R,O),Qe=xe<=.01||!xe,we=0,me=X||0,ue=Jr(j)?j.end:t.end,Qt=t.endTrigger||p,ye=Jr(j)?j.start:t.start||(t.start===0||!p?0:f?"0 0":"0 100%"),Ot=T.pinnedContainer=t.pinnedContainer&&yt(t.pinnedContainer,T),er=p&&Math.max(0,q.indexOf(T))||0,He=er,Ue,Je,qr,Ei,et,je,tr,Es,oa,Wn,rr,Vn,Di;for(W&&Jr(j)&&(Vn=I.getProperty(P,O.p),Di=I.getProperty(Pt,O.p));He-- >0;)je=q[He],je.end||je.refresh(0,1)||(rt=T),tr=je.pin,tr&&(tr===p||tr===f||tr===Ot)&&!je.isReverted&&(Wn||(Wn=[]),Wn.unshift(je),je.revert(!0,!0)),je!==q[He]&&(er--,He--);for(st(ye)&&(ye=ye(T)),ye=Oa(ye,"start",T),ee=za(ye,p,$e,O,he(),_t,P,T,Q,re,U,Pe,w,T._startClamp&&"_startClamp")||(f?-.001:0),st(ue)&&(ue=ue(T)),Mt(ue)&&!ue.indexOf("+=")&&(~ue.indexOf(" ")?ue=(Mt(ye)?ye.split(" ")[0]:"")+ue:(we=ts(ue.substr(2),$e),ue=Mt(ye)?ye:(w?I.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,ee):ee)+we,Qt=p)),ue=Oa(ue,"end",T),ke=Math.max(ee,za(ue||(Qt?"100% 0":Pe),Qt,$e,O,he()+we,Ct,Pt,T,Q,re,U,Pe,w,T._endClamp&&"_endClamp"))||-.001,we=0,He=er;He--;)je=q[He],tr=je.pin,tr&&je.start-je._pinPush<=ee&&!w&&je.end>0&&(Ue=je.end-(T._startClamp?Math.max(0,je.start):je.start),(tr===p&&je.start-je._pinPush<ee||tr===Ot)&&isNaN(ye)&&(we+=Ue*(1-je.progress)),tr===f&&(me+=Ue));if(ee+=we,ke+=we,T._startClamp&&(T._startClamp+=we),T._endClamp&&!ht&&(T._endClamp=ke||-.001,ke=Math.min(ke,lr(R,O))),xe=ke-ee||(ee-=.01)&&.001,Qe&&(Ne=I.utils.clamp(0,1,I.utils.normalize(ee,ke,Zt))),T._pinPush=me,_t&&we&&(Ue={},Ue[O.a]="+="+we,Ot&&(Ue[O.p]="-="+he()),I.set([_t,Ct],Ue)),f&&!(bo&&T.end>=lr(R,O)))Ue=Xt(f),Ei=O===Le,qr=he(),$t=parseFloat(Ce(O.a))+me,!Pe&&ke>1&&(rr=(B?pe.scrollingElement||Dt:R).style,rr={style:rr,value:rr["overflow"+O.a.toUpperCase()]},B&&Xt(ce)["overflow"+O.a.toUpperCase()]!=="scroll"&&(rr.style["overflow"+O.a.toUpperCase()]="scroll")),Vs(f,Fe,Ue),Wr=Xi(f),Je=br(f,!0),Es=U&&Yr(R,Ei?gt:Le)(),m?(Me=[m+O.os2,xe+me+ze],Me.t=Fe,He=m===Ee?bs(f,O)+xe+me:0,He&&(Me.push(O.d,He+ze),Fe.style.flexBasis!=="auto"&&(Fe.style.flexBasis=He+ze)),En(Me),Ot&&q.forEach(function(Mr){Mr.pin===Ot&&Mr.vars.pinSpacing!==!1&&(Mr._subPinOffset=!0)}),U&&he(Zt)):(He=bs(f,O),He&&Fe.style.flexBasis!=="auto"&&(Fe.style.flexBasis=He+ze)),U&&(et={top:Je.top+(Ei?qr-ee:Es)+ze,left:Je.left+(Ei?Es:qr-ee)+ze,boxSizing:"border-box",position:"fixed"},et[an]=et["max"+Fn]=Math.ceil(Je.width)+ze,et[cn]=et["max"+Qo]=Math.ceil(Je.height)+ze,et[Yt]=et[Yt+di]=et[Yt+ui]=et[Yt+hi]=et[Yt+fi]="0",et[Ee]=Ue[Ee],et[Ee+di]=Ue[Ee+di],et[Ee+ui]=Ue[Ee+ui],et[Ee+hi]=Ue[Ee+hi],et[Ee+fi]=Ue[Ee+fi],Pr=$f(pr,et,_),ht&&he(0)),n?(oa=n._initted,$s(1),n.render(n.duration(),!0,!0),gr=Ce(O.a)-$t+xe+me,mr=Math.abs(xe-gr)>1,U&&mr&&Pr.splice(Pr.length-2,2),n.render(0,!0,!0),oa||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),$s(0)):gr=xe,rr&&(rr.value?rr.style["overflow"+O.a.toUpperCase()]=rr.value:rr.style.removeProperty("overflow-"+O.a));else if(p&&he()&&!w)for(Je=p.parentNode;Je&&Je!==ce;)Je._pinOffset&&(ee-=Je._pinOffset,ke-=Je._pinOffset),Je=Je.parentNode;Wn&&Wn.forEach(function(Mr){return Mr.revert(!1,!0)}),T.start=ee,T.end=ke,ct=mt=ht?Zt:he(),!w&&!ht&&(ct<Zt&&he(Zt),T.scroll.rec=0),T.revert(!1,!0),Te=nt(),Kt&&(ge=-1,Kt.restart(!0)),rt=0,n&&A&&(n._initted||Ur)&&n.progress()!==Ur&&n.progress(Ur||0,!0).render(n.time(),!0,!0),(Qe||Ne!==T.progress||w||d||n&&!n._initted)&&(n&&!A&&(n._initted||Ne||n.vars.immediateRender!==!1)&&n.totalProgress(w&&ee<-.001&&!Ne?I.utils.normalize(ee,ke,0):Ne,!0),T.progress=Qe||(ct-ee)/xe===Ne?0:Ne),f&&m&&(Fe._pinOffset=Math.round(T.progress*gr)),Z&&Z.invalidate(),isNaN(Vn)||(Vn-=I.getProperty(P,O.p),Di-=I.getProperty(Pt,O.p),Wi(P,O,Vn),Wi(_t,O,Vn-(X||0)),Wi(Pt,O,Di),Wi(Ct,O,Di-(X||0))),Qe&&!ht&&T.update(),u&&!ht&&!Cr&&(Cr=!0,u(T),Cr=!1)}},T.getVelocity=function(){return(he()-mt)/(nt()-Qn)*1e3||0},T.endAnimation=function(){qn(T.callbackAnimation),n&&(Z?Z.progress(1):n.paused()?A||qn(n,T.direction<0,1):qn(n,n.reversed()))},T.labelToScroll=function(D){return n&&n.labels&&(ee||T.refresh()||ee)+n.labels[D]/n.duration()*xe||0},T.getTrailing=function(D){var Y=q.indexOf(T),j=T.direction>0?q.slice(0,Y).reverse():q.slice(Y+1);return(Mt(D)?j.filter(function(X){return X.vars.preventOverlaps===D}):j).filter(function(X){return T.direction>0?X.end<=ee:X.start>=ke})},T.update=function(D,Y,j){if(!(w&&!j&&!D)){var X=ht===!0?Zt:T.scroll(),$e=D?0:(X-ee)/xe,Q=$e<0?0:$e>1?1:$e||0,Pe=T.progress,Qe,we,me,ue,Qt,ye,Ot,er;if(Y&&(mt=ct,ct=w?he():X,x&&(Vr=Rr,Rr=n&&!A?n.totalProgress():Q)),g&&f&&!rt&&!zi&&Ut&&(!Q&&ee<X+(X-mt)/(nt()-Qn)*g?Q=1e-4:Q===1&&ke>X+(X-mt)/(nt()-Qn)*g&&(Q=.9999)),Q!==Pe&&T.enabled){if(Qe=T.isActive=!!Q&&Q<1,we=!!Pe&&Pe<1,ye=Qe!==we,Qt=ye||!!Q!=!!Pe,T.direction=Q>Pe?1:-1,T.progress=Q,Qt&&!rt&&(me=Q&&!Pe?0:Q===1?1:Pe===1?2:3,A&&(ue=!ye&&z[me+1]!=="none"&&z[me+1]||z[me],er=n&&(ue==="complete"||ue==="reset"||ue in n))),C&&(ye||er)&&(er||h||!n)&&(st(C)?C(T):T.getTrailing(C).forEach(function(qr){return qr.endAnimation()})),A||(Z&&!rt&&!zi?(Z._dp._time-Z._start!==Z._time&&Z.render(Z._dp._time-Z._start),Z.resetTo?Z.resetTo("totalProgress",Q,n._tTime/n._tDur):(Z.vars.totalProgress=Q,Z.invalidate().restart())):n&&n.totalProgress(Q,!!(rt&&(Te||D)))),f){if(D&&m&&(Fe.style[m+O.os2]=Yn),!U)qt(ei($t+gr*Q));else if(Qt){if(Ot=!D&&Q>Pe&&ke+1>X&&X+1>=lr(R,O),_)if(!D&&(Qe||Ot)){var He=br(f,!0),Ue=X-ee;La(f,ce,He.top+(O===Le?Ue:0)+ze,He.left+(O===Le?0:Ue)+ze)}else La(f,Fe);En(Qe||Ot?Pr:Wr),mr&&Q<1&&Qe||qt($t+(Q===1&&!Ot?gr:0))}}x&&!at.tween&&!rt&&!zi&&Kt.restart(!0),a&&(ye||b&&Q&&(Q<1||!Bs))&&wi(a.targets).forEach(function(qr){return qr.classList[Qe||b?"add":"remove"](a.className)}),o&&!A&&!D&&o(T),Qt&&!rt?(A&&(er&&(ue==="complete"?n.pause().totalProgress(1):ue==="reset"?n.restart(!0).pause():ue==="restart"?n.restart(!0):n[ue]()),o&&o(T)),(ye||!Bs)&&(l&&ye&&Xs(T,l),$[me]&&Xs(T,$[me]),b&&(Q===1?T.kill(!1,1):$[me]=0),ye||(me=Q===1?1:3,$[me]&&Xs(T,$[me]))),S&&!Qe&&Math.abs(T.getVelocity())>(ti(S)?S:2500)&&(qn(T.callbackAnimation),Z?Z.progress(1):qn(n,ue==="reverse"?1:!Q,1))):A&&o&&!rt&&o(T)}if(gn){var Je=w?X/w.duration()*(w._caScrollDist||0):X;Mi(Je+(P._isFlipped?1:0)),gn(Je)}_n&&_n(-X/w.duration()*(w._caScrollDist||0))}},T.enable=function(D,Y){T.enabled||(T.enabled=!0,Xe(R,"resize",ri),B||Xe(R,"scroll",bn),le&&Xe(s,"refreshInit",le),D!==!1&&(T.progress=Ne=0,ct=mt=ge=he()),Y!==!1&&T.refresh())},T.getTween=function(D){return D&&at?at.tween:Z},T.setPositions=function(D,Y,j,X){if(w){var $e=w.scrollTrigger,Q=w.duration(),Pe=$e.end-$e.start;D=$e.start+Pe*D/Q,Y=$e.start+Pe*Y/Q}T.refresh(!1,!1,{start:Ra(D,j&&!!T._startClamp),end:Ra(Y,j&&!!T._endClamp)},X),T.update()},T.adjustPinSpacing=function(D){if(Me&&D){var Y=Me.indexOf(O.d)+1;Me[Y]=parseFloat(Me[Y])+D+ze,Me[1]=parseFloat(Me[1])+D+ze,En(Me)}},T.disable=function(D,Y){if(T.enabled&&(D!==!1&&T.revert(!0,!0),T.enabled=T.isActive=!1,Y||Z&&Z.pause(),Zt=0,Ze&&(Ze.uncache=1),le&&Be(s,"refreshInit",le),Kt&&(Kt.pause(),at.tween&&at.tween.kill()&&(at.tween=0)),!B)){for(var j=q.length;j--;)if(q[j].scroller===R&&q[j]!==T)return;Be(R,"resize",ri),B||Be(R,"scroll",bn)}},T.kill=function(D,Y){T.disable(D,Y),Z&&!Y&&Z.kill(),c&&delete xo[c];var j=q.indexOf(T);j>=0&&q.splice(j,1),j===dt&&ns>0&&dt--,j=0,q.forEach(function(X){return X.scroller===T.scroller&&(j=1)}),j||ht||(T.scroll.rec=0),n&&(n.scrollTrigger=null,D&&n.revert({kill:!1}),Y||n.kill()),_t&&[_t,Ct,P,Pt].forEach(function(X){return X.parentNode&&X.parentNode.removeChild(X)}),pi===T&&(pi=0),f&&(Ze&&(Ze.uncache=1),j=0,q.forEach(function(X){return X.pin===f&&j++}),j||(Ze.spacer=0)),t.onKill&&t.onKill(T)},q.push(T),T.enable(!1,!1),_r&&_r(T),n&&n.add&&!xe){var ne=T.update;T.update=function(){T.update=ne,K.cache++,ee||ke||T.refresh()},I.delayedCall(.01,T.update),xe=.01,ee=ke=0}else T.refresh();f&&zf()},s.register=function(t){return xn||(I=t||ml(),gl()&&window.document&&s.enable(),xn=Jn),xn},s.defaults=function(t){if(t)for(var n in t)Bi[n]=t[n];return Bi},s.disable=function(t,n){Jn=0,q.forEach(function(o){return o[n?"kill":"disable"](t)}),Be(G,"wheel",bn),Be(pe,"scroll",bn),clearInterval(ji),Be(pe,"touchcancel",ir),Be(ce,"touchstart",ir),Fi(Be,pe,"pointerdown,touchstart,mousedown",Ma),Fi(Be,pe,"pointerup,touchend,mouseup",Ea),ys.kill(),Li(Be);for(var i=0;i<K.length;i+=3)$i(Be,K[i],K[i+1]),$i(Be,K[i],K[i+2])},s.enable=function(){if(G=window,pe=document,Dt=pe.documentElement,ce=pe.body,I&&(wi=I.utils.toArray,li=I.utils.clamp,vo=I.core.context||ir,$s=I.core.suppressOverwrites||ir,qo=G.history.scrollRestoration||"auto",wo=G.pageYOffset||0,I.core.globals("ScrollTrigger",s),ce)){Jn=1,Mn=document.createElement("div"),Mn.style.height="100vh",Mn.style.position="absolute",kl(),Mf(),Re.register(I),s.isTouch=Re.isTouch,Er=Re.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),yo=Re.isTouch===1,Xe(G,"wheel",bn),Uo=[G,pe,Dt,ce],I.matchMedia?(s.matchMedia=function(l){var u=I.matchMedia(),h;for(h in l)u.add(h,l[h]);return u},I.addEventListener("matchMediaInit",function(){return ea()}),I.addEventListener("matchMediaRevert",function(){return Sl()}),I.addEventListener("matchMedia",function(){tn(0,1),hn("matchMedia")}),I.matchMedia().add("(orientation: portrait)",function(){return Ws(),Ws})):console.warn("Requires GSAP 3.11.0 or later"),Ws(),Xe(pe,"scroll",bn);var t=ce.hasAttribute("style"),n=ce.style,i=n.borderTopStyle,o=I.core.Animation.prototype,a,c;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=br(ce),Le.m=Math.round(a.top+Le.sc())||0,gt.m=Math.round(a.left+gt.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),t||(ce.setAttribute("style",""),ce.removeAttribute("style")),ji=setInterval(Ia,250),I.delayedCall(.5,function(){return zi=0}),Xe(pe,"touchcancel",ir),Xe(ce,"touchstart",ir),Fi(Xe,pe,"pointerdown,touchstart,mousedown",Ma),Fi(Xe,pe,"pointerup,touchend,mouseup",Ea),_o=I.utils.checkPrefix("transform"),is.push(_o),xn=nt(),ys=I.delayedCall(.2,tn).pause(),wn=[pe,"visibilitychange",function(){var l=G.innerWidth,u=G.innerHeight;pe.hidden?(Ca=l,Pa=u):(Ca!==l||Pa!==u)&&ri()},pe,"DOMContentLoaded",tn,G,"load",tn,G,"resize",ri],Li(Xe),q.forEach(function(l){return l.enable(0,1)}),c=0;c<K.length;c+=3)$i(Be,K[c],K[c+1]),$i(Be,K[c],K[c+2])}},s.config=function(t){"limitCallbacks"in t&&(Bs=!!t.limitCallbacks);var n=t.syncInterval;n&&clearInterval(ji)||(ji=n)&&setInterval(Ia,n),"ignoreMobileResize"in t&&(yo=s.isTouch===1&&t.ignoreMobileResize),"autoRefreshEvents"in t&&(Li(Be)||Li(Xe,t.autoRefreshEvents||"none"),dl=(t.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(t,n){var i=yt(t),o=K.indexOf(i),a=fn(i);~o&&K.splice(o,a?6:2),n&&(a?ur.unshift(G,n,ce,n,Dt,n):ur.unshift(i,n))},s.clearMatchMedia=function(t){q.forEach(function(n){return n._ctx&&n._ctx.query===t&&n._ctx.kill(!0,!0)})},s.isInViewport=function(t,n,i){var o=(Mt(t)?yt(t):t).getBoundingClientRect(),a=o[i?an:cn]*n||0;return i?o.right-a>0&&o.left+a<G.innerWidth:o.bottom-a>0&&o.top+a<G.innerHeight},s.positionInViewport=function(t,n,i){Mt(t)&&(t=yt(t));var o=t.getBoundingClientRect(),a=o[i?an:cn],c=n==null?a/2:n in xs?xs[n]*a:~n.indexOf("%")?parseFloat(n)*a/100:parseFloat(n)||0;return i?(o.left+c)/G.innerWidth:(o.top+c)/G.innerHeight},s.killAll=function(t){if(q.slice(0).forEach(function(i){return i.vars.id!=="ScrollSmoother"&&i.kill()}),t!==!0){var n=dn.killAll||[];dn={},n.forEach(function(i){return i()})}},s}();H.version="3.13.0";H.saveStyles=function(s){return s?wi(s).forEach(function(e){if(e&&e.style){var r=Rt.indexOf(e);r>=0&&Rt.splice(r,5),Rt.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),I.core.getCache(e),vo())}}):Rt};H.revert=function(s,e){return ea(!s,e)};H.create=function(s,e){return new H(s,e)};H.refresh=function(s){return s?ri(!0):(xn||H.register())&&tn(!0)};H.update=function(s){return++K.cache&&wr(s===!0?2:0)};H.clearScrollMemory=Tl;H.maxScroll=function(s,e){return lr(s,e?gt:Le)};H.getScrollFunc=function(s,e){return Yr(yt(s),e?gt:Le)};H.getById=function(s){return xo[s]};H.getAll=function(){return q.filter(function(s){return s.vars.id!=="ScrollSmoother"})};H.isScrolling=function(){return!!Ut};H.snapDirectional=Jo;H.addEventListener=function(s,e){var r=dn[s]||(dn[s]=[]);~r.indexOf(e)||r.push(e)};H.removeEventListener=function(s,e){var r=dn[s],t=r&&r.indexOf(e);t>=0&&r.splice(t,1)};H.batch=function(s,e){var r=[],t={},n=e.interval||.016,i=e.batchMax||1e9,o=function(l,u){var h=[],p=[],f=I.delayedCall(n,function(){u(h,p),h=[],p=[]}).pause();return function(m){h.length||f.restart(!0),h.push(m.trigger),p.push(m),i<=h.length&&f.progress(1)}},a;for(a in e)t[a]=a.substr(0,2)==="on"&&st(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return st(i)&&(i=i(),Xe(H,"refresh",function(){return i=e.batchMax()})),wi(s).forEach(function(c){var l={};for(a in t)l[a]=t[a];l.trigger=c,r.push(H.create(l))}),r};var $a=function(e,r,t,n){return r>n?e(n):r<0&&e(0),t>n?(n-r)/(t-r):t<0?r/(r-t):1},Hs=function s(e,r){r===!0?e.style.removeProperty("touch-action"):e.style.touchAction=r===!0?"auto":r?"pan-"+r+(Re.isTouch?" pinch-zoom":""):"none",e===Dt&&s(ce,r)},Vi={auto:1,scroll:1},Yf=function(e){var r=e.event,t=e.target,n=e.axis,i=(r.changedTouches?r.changedTouches[0]:r).target,o=i._gsap||I.core.getCache(i),a=nt(),c;if(!o._isScrollT||a-o._isScrollT>2e3){for(;i&&i!==ce&&(i.scrollHeight<=i.clientHeight&&i.scrollWidth<=i.clientWidth||!(Vi[(c=Xt(i)).overflowY]||Vi[c.overflowX]));)i=i.parentNode;o._isScroll=i&&i!==t&&!fn(i)&&(Vi[(c=Xt(i)).overflowY]||Vi[c.overflowX]),o._isScrollT=a}(o._isScroll||n==="x")&&(r.stopPropagation(),r._gsapAllow=!0)},Pl=function(e,r,t,n){return Re.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:r,onWheel:n=n&&Yf,onPress:n,onDrag:n,onScroll:n,onEnable:function(){return t&&Xe(pe,Re.eventTypes[0],Ya,!1,!0)},onDisable:function(){return Be(pe,Re.eventTypes[0],Ya,!0)}})},Xf=/(input|label|select|textarea)/i,Ba,Ya=function(e){var r=Xf.test(e.target.tagName);(r||Ba)&&(e._gsapAllow=!0,Ba=r)},Wf=function(e){Jr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var r=e,t=r.normalizeScrollX,n=r.momentum,i=r.allowNestedScroll,o=r.onRelease,a,c,l=yt(e.target)||Dt,u=I.core.globals().ScrollSmoother,h=u&&u.get(),p=Er&&(e.content&&yt(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),f=Yr(l,Le),m=Yr(l,gt),d=1,g=(Re.isTouch&&G.visualViewport?G.visualViewport.scale*G.visualViewport.width:G.outerWidth)/G.innerWidth,v=0,y=st(n)?function(){return n(a)}:function(){return n||2.8},b,x,_=Pl(l,e.type,!0,i),k=function(){return x=!1},w=ir,S=ir,C=function(){c=lr(l,Le),S=li(Er?1:0,c),t&&(w=li(0,lr(l,gt))),b=ln},O=function(){p._gsap.y=ei(parseFloat(p._gsap.y)+f.offset)+"px",p.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(p._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},A=function(){if(x){requestAnimationFrame(k);var W=ei(a.deltaY/2),re=S(f.v-W);if(p&&re!==f.v+f.offset){f.offset=re-f.v;var T=ei((parseFloat(p&&p._gsap.y)||0)-f.offset);p.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+T+", 0, 1)",p._gsap.y=T+"px",f.cacheID=K.cache,wr()}return!0}f.offset&&O(),x=!0},R,F,B,U,$=function(){C(),R.isActive()&&R.vars.scrollY>c&&(f()>c?R.progress(1)&&f(c):R.resetTo("scrollY",c))};return p&&I.set(p,{y:"+=0"}),e.ignoreCheck=function(z){return Er&&z.type==="touchmove"&&A()||d>1.05&&z.type!=="touchstart"||a.isGesturing||z.touches&&z.touches.length>1},e.onPress=function(){x=!1;var z=d;d=ei((G.visualViewport&&G.visualViewport.scale||1)/g),R.pause(),z!==d&&Hs(l,d>1.01?!0:t?!1:"x"),F=m(),B=f(),C(),b=ln},e.onRelease=e.onGestureStart=function(z,W){if(f.offset&&O(),!W)U.restart(!0);else{K.cache++;var re=y(),T,le;t&&(T=m(),le=T+re*.05*-z.velocityX/.227,re*=$a(m,T,le,lr(l,gt)),R.vars.scrollX=w(le)),T=f(),le=T+re*.05*-z.velocityY/.227,re*=$a(f,T,le,lr(l,Le)),R.vars.scrollY=S(le),R.invalidate().duration(re).play(.01),(Er&&R.vars.scrollY>=c||T>=c-1)&&I.to({},{onUpdate:$,duration:re})}o&&o(z)},e.onWheel=function(){R._ts&&R.pause(),nt()-v>1e3&&(b=0,v=nt())},e.onChange=function(z,W,re,T,le){if(ln!==b&&C(),W&&t&&m(w(T[2]===W?F+(z.startX-z.x):m()+W-T[1])),re){f.offset&&O();var Ve=le[2]===re,kt=Ve?B+z.startY-z.y:f()+re-le[1],ge=S(kt);Ve&&kt!==ge&&(B+=ge-kt),f(ge)}(re||W)&&wr()},e.onEnable=function(){Hs(l,t?!1:"x"),H.addEventListener("refresh",$),Xe(G,"resize",$),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=m.smooth=!1),_.enable()},e.onDisable=function(){Hs(l,!0),Be(G,"resize",$),H.removeEventListener("refresh",$),_.kill()},e.lockAxis=e.lockAxis!==!1,a=new Re(e),a.iOS=Er,Er&&!f()&&f(1),Er&&I.ticker.add(ir),U=a._dc,R=I.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:t?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Cl(f,f(),function(){return R.pause()})},onUpdate:wr,onComplete:U.vars.onComplete}),a};H.sort=function(s){if(st(s))return q.sort(s);var e=G.pageYOffset||0;return H.getAll().forEach(function(r){return r._sortY=r.trigger?e+r.trigger.getBoundingClientRect().top:r.start+G.innerHeight}),q.sort(s||function(r,t){return(r.vars.refreshPriority||0)*-1e6+(r.vars.containerAnimation?1e6:r._sortY)-((t.vars.containerAnimation?1e6:t._sortY)+(t.vars.refreshPriority||0)*-1e6)})};H.observe=function(s){return new Re(s)};H.normalizeScroll=function(s){if(typeof s>"u")return ft;if(s===!0&&ft)return ft.enable();if(s===!1){ft&&ft.kill(),ft=s;return}var e=s instanceof Re?s:Wf(s);return ft&&ft.target===e.target&&ft.kill(),fn(e.target)&&(ft=e),e};H.core={_getVelocityProp:mo,_inputObserver:Pl,_scrollers:K,_proxies:ur,bridge:{ss:function(){Ut||hn("scrollStart"),Ut=nt()},ref:function(){return rt}}};ml()&&I.registerPlugin(H);const Vf=()=>2+Math.random()*.7;function Hi({word:s}){return s.split("").map((e,r)=>M.jsx("div",{className:"letter font-intersemibold text-[70px]/[60px] md:text-[155px]/[150px] lg:text-[215px]/[200px] xl:text-[265px]/[250px]","data-speed":Vf(),children:e},r))}te.registerPlugin(H);const Ui=["Benjamin","Lobos ","L.","antifragility by design"],Hf=()=>Math.random()*60-30,Uf=()=>.8+Math.random()*.7,qf=s=>{const e=H.maxScroll(window);te.utils.toArray(".letter",s).forEach(r=>{const t=Uf();r.dataset.speed=t,te.to(r,{y:(1-t)*e,rotation:Hf(),ease:"power2.out",duration:.8,scrollTrigger:{trigger:document.documentElement,start:0,end:window.innerHeight,scrub:.5,invalidateOnRefresh:!0}})})};function Gf(){const s=N.useRef(null),e=N.useRef(null),r=1500,t=N.useRef(!1);return N.useEffect(()=>{const n=s.current,i=e.current;if(!n||!i)return;qf(n),H.refresh();let o;te.set(i,{autoAlpha:0});const a=()=>{t.current||te.to(i,{autoAlpha:1,duration:.6,ease:"power2.out"})},c=()=>{te.to(i,{autoAlpha:0,duration:.25,ease:"power2.out"})},l=()=>{t.current||(t.current=!0,c())};o=setTimeout(a,r);const u={passive:!0,once:!0};return window.addEventListener("scroll",l,u),window.addEventListener("wheel",l,u),window.addEventListener("touchmove",l,u),()=>{clearTimeout(o),window.removeEventListener("scroll",l),window.removeEventListener("wheel",l),window.removeEventListener("touchmove",l),H.getAll().forEach(h=>h.kill())}},[]),M.jsxs("div",{ref:s,className:"bg-white relative w-full h-200 md:h-355 overflow-hidden",children:[M.jsxs("div",{className:"absolute bottom-0 left-0 pb-130 xl:pb-170 pl-2 md:pb-170 lg:170 md:pl-20 flex h-screen flex-col justify-end",children:[M.jsx("div",{className:"flex flex-wrap",children:M.jsx(Hi,{word:Ui[0]})}),M.jsxs("div",{className:"flex flex-wrap",children:[M.jsx(Hi,{word:Ui[1]}),M.jsx("div",{className:"w-4 sm:w-20"}),M.jsx(Hi,{word:Ui[2]})]})]}),M.jsx("div",{className:"hidden absolute bottom-0 left-0 md:flex flex-wrap",children:M.jsx(Hi,{word:Ui[3]})}),M.jsx("h2",{ref:e,className:"hidden lg:block absolute bottom-0 right-0 pb-170 pr-20 text-black text-[50px] pointer-events-none select-none",children:"Scroll"})]})}var os={exports:{}},Kf=os.exports,Xa;function Zf(){return Xa||(Xa=1,function(s,e){(function(t,n){s.exports=n(Zl())})(typeof self<"u"?self:Kf,function(r){return function(t){var n={};function i(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,i),a.l=!0,a.exports}return i.m=t,i.c=n,i.d=function(o,a,c){i.o(o,a)||Object.defineProperty(o,a,{enumerable:!0,get:c})},i.r=function(o){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},i.t=function(o,a){if(1&a&&(o=i(o)),8&a||4&a&&typeof o=="object"&&o&&o.__esModule)return o;var c=Object.create(null);if(i.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:o}),2&a&&typeof o!="string")for(var l in o)i.d(c,l,(function(u){return o[u]}).bind(null,l));return c},i.n=function(o){var a=o&&o.__esModule?function(){return o.default}:function(){return o};return i.d(a,"a",a),a},i.o=function(o,a){return Object.prototype.hasOwnProperty.call(o,a)},i.p="",i(i.s=3)}([function(t,n){t.exports=r},function(t,n,i){function o(v){return(o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b})(v)}function a(v,y){if(!(v instanceof y))throw new TypeError("Cannot call a class as a function")}function c(v,y){if(typeof y!="function"&&y!==null)throw new TypeError("Super expression must either be null or a function");v.prototype=Object.create(y&&y.prototype,{constructor:{value:v,writable:!0,configurable:!0}}),y&&l(v,y)}function l(v,y){return(l=Object.setPrototypeOf||function(x,_){return x.__proto__=_,x})(v,y)}function u(v){var y=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var x,_=p(v);if(y){var k=p(this).constructor;x=Reflect.construct(_,arguments,k)}else x=_.apply(this,arguments);return h(this,x)}}function h(v,y){return!y||o(y)!=="object"&&typeof y!="function"?function(x){if(x===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return x}(v):y}function p(v){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(b){return b.__proto__||Object.getPrototypeOf(b)})(v)}var f=this&&this.__importDefault||function(v){return v&&v.__esModule?v:{default:v}};Object.defineProperty(n,"__esModule",{value:!0}),n.Background=n.Parallax=void 0;var m=f(i(0)),d=function(v){c(b,v);var y=u(b);function b(){return a(this,b),y.apply(this,arguments)}return b}(m.default.Component);n.Parallax=d;var g=function(v){c(b,v);var y=u(b);function b(){return a(this,b),y.apply(this,arguments)}return b}(m.default.Component);n.Background=g},function(t,n,i){Object.defineProperty(n,"__esModule",{value:!0}),n.canUseDOM=n.getNodeHeight=n.isScrolledIntoView=n.getWindowHeight=void 0,n.getWindowHeight=function(o){if(!o)return 0;var a=window,c=document,l=c.documentElement,u=c.getElementsByTagName("body")[0];return a.innerHeight||l.clientHeight||u.clientHeight},n.isScrolledIntoView=function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,c=arguments.length>2?arguments[2]:void 0;if(!c)return!1;var l=o.getBoundingClientRect().top-a,u=o.getBoundingClientRect().bottom+a;return l<=n.getWindowHeight(c)&&u>=0},n.getNodeHeight=function(o,a){return o?a&&"clientHeight"in a?a.clientHeight:n.getWindowHeight(o):0},n.canUseDOM=function(){return!(typeof window>"u"||!window.document||!window.document.createElement)}},function(t,n,i){var o=this&&this.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(n,"__esModule",{value:!0}),n.Background=n.Parallax=void 0;var a=o(i(4));n.Parallax=a.default;var c=o(i(7));n.Background=c.default},function(t,n,i){function o(x){return(o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(k){return typeof k}:function(k){return k&&typeof Symbol=="function"&&k.constructor===Symbol&&k!==Symbol.prototype?"symbol":typeof k})(x)}function a(x,_){for(var k=0;k<_.length;k++){var w=_[k];w.enumerable=w.enumerable||!1,w.configurable=!0,"value"in w&&(w.writable=!0),Object.defineProperty(x,w.key,w)}}function c(x,_){return(c=Object.setPrototypeOf||function(w,S){return w.__proto__=S,w})(x,_)}function l(x){var _=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var w,S=h(x);if(_){var C=h(this).constructor;w=Reflect.construct(S,arguments,C)}else w=S.apply(this,arguments);return u(this,w)}}function u(x,_){return!_||o(_)!=="object"&&typeof _!="function"?function(w){if(w===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return w}(x):_}function h(x){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(k){return k.__proto__||Object.getPrototypeOf(k)})(x)}var p=this&&this.__importDefault||function(x){return x&&x.__esModule?x:{default:x}};Object.defineProperty(n,"__esModule",{value:!0});var f=p(i(0)),m=i(1),d=i(5),g=i(2),v=p(i(6)),y={position:"absolute",left:"50%",WebkitTransform:"translate3d(-50%, 0, 0)",transform:"translate3d(-50%, 0, 0)",WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",MozBackfaceVisibility:"hidden",MsBackfaceVisibility:"hidden"},b=function(x){(function(S,C){if(typeof C!="function"&&C!==null)throw new TypeError("Super expression must either be null or a function");S.prototype=Object.create(C&&C.prototype,{constructor:{value:S,writable:!0,configurable:!0}}),C&&c(S,C)})(k,x);var _=l(k);function k(w){var S;return function(O,A){if(!(O instanceof A))throw new TypeError("Cannot call a class as a function")}(this,k),(S=_.call(this,w)).onWindowResize=function(){S.parentHeight=g.getNodeHeight(S.canUseDOM,S.parent),S.updatePosition()},S.onWindowLoad=function(){S.updatePosition()},S.onScroll=function(){if(S.canUseDOM){var C=Date.now();C-S.timestamp>=10&&g.isScrolledIntoView(S.node,100,S.canUseDOM)&&(window.requestAnimationFrame(S.updatePosition),S.timestamp=C)}},S.onContentMount=function(C){S.content=C},S.updatePosition=function(){if(S.content){var C=!1;S.contentHeight=S.content.getBoundingClientRect().height,S.contentWidth=S.node.getBoundingClientRect().width,S.img&&S.img.naturalWidth/S.img.naturalHeight<S.contentWidth/S.getImageHeight()&&(C=!0);var O=d.getRelativePosition(S.node,S.canUseDOM),A=!!S.img,R=S.bg&&S.state.splitChildren.bgChildren.length>0;A&&S.setImagePosition(O,C),R&&S.setBackgroundPosition(O),A||R||S.setState({percentage:O})}},S.state={bgImage:w.bgImage,bgImageSrcSet:w.bgImageSrcSet,bgImageSizes:w.bgImageSizes,imgStyle:y,bgStyle:Object.assign(Object.assign({},y),w.bgStyle),percentage:0,splitChildren:d.getSplitChildren(w)},S.canUseDOM=g.canUseDOM(),S.node=null,S.content=null,S.bgImageLoaded=!1,S.bgImageRef=void 0,S.parent=w.parent,S.parentHeight=g.getNodeHeight(S.canUseDOM,S.parent),S.timestamp=Date.now(),S.isDynamicBlur=d.getHasDynamicBlur(w.blur),S}return function(S,C,O){return C&&a(S.prototype,C),O&&a(S,O),S}(k,[{key:"componentDidMount",value:function(){var S=this.props.parent,C=this.state,O=C.bgImage,A=C.bgImageSrcSet,R=C.bgImageSizes;this.parent=S||document,this.addListeners(),O?this.loadImage(O,A,R):this.updatePosition()}},{key:"componentDidUpdate",value:function(S){var C=this.props,O=C.parent,A=C.bgImage,R=C.bgImageSrcSet,F=C.bgImageSizes,B=this.state.bgImage;S.parent!==O&&(this.removeListeners(this.parent),this.parent=O,O&&this.addListeners()),this.parentHeight=g.getNodeHeight(this.canUseDOM,this.parent),B!==A&&this.loadImage(A,R,F)}},{key:"componentWillUnmount",value:function(){this.removeListeners(this.parent),this.releaseImage()}},{key:"setBackgroundPosition",value:function(S){var C=this.props,O=C.disabled,A=C.strength,R=Object.assign({},this.state.bgStyle);if(!O){var F="translate3d(-50%, ".concat((A<0?A:0)-A*S,"px, 0)");R.WebkitTransform=F,R.transform=F}this.setState({bgStyle:R,percentage:S})}},{key:"setImagePosition",value:function(S){var C=arguments.length>1&&arguments[1]!==void 0&&arguments[1],O=this.props,A=O.disabled,R=O.strength,F=O.blur,B=C?"auto":"".concat(this.getImageHeight(),"px"),U=C?"".concat(this.contentWidth,"px"):"auto",$=Object.assign(Object.assign({},this.state.imgStyle),{height:B,width:U});if(!A){var z=R<0,W=(z?R:0)-R*S,re="translate3d(-50%, ".concat(W,"px, 0)"),T="none";F&&(T="blur(".concat(d.getBlurValue(this.isDynamicBlur,F,S),"px)")),$.WebkitTransform=re,$.transform=re,$.WebkitFilter=T,$.filter=T}this.setState({imgStyle:$,percentage:S})}},{key:"getImageHeight",value:function(){var S=this.props.strength,C=(S<0?2.5:1)*Math.abs(S);return Math.floor(this.contentHeight+C)}},{key:"loadImage",value:function(S,C,O){var A=this;this.releaseImage(),this.bgImageRef=new Image,this.bgImageRef.onload=function(R){A.setState({bgImage:S,bgImageSrcSet:C,bgImageSizes:O},function(){return A.updatePosition()}),A.props.onLoad&&A.props.onLoad(R)},this.bgImageRef.onerror=this.bgImageRef.onload,this.bgImageRef.src=S,this.bgImageRef.srcset=C||"",this.bgImageRef.sizes=O||""}},{key:"releaseImage",value:function(){this.bgImageRef&&(this.bgImageRef.onload=null,this.bgImageRef.onerror=null,delete this.bgImageRef)}},{key:"addListeners",value:function(){this.canUseDOM&&this.parent&&(this.parent.addEventListener("scroll",this.onScroll,!1),window.addEventListener("resize",this.onWindowResize,!1),window.addEventListener("load",this.onWindowLoad,!1))}},{key:"removeListeners",value:function(S){this.canUseDOM&&(S&&S.removeEventListener("scroll",this.onScroll,!1),window.removeEventListener("resize",this.onWindowResize,!1),window.removeEventListener("load",this.onWindowLoad,!1))}},{key:"render",value:function(){var S=this,C=this.props,O=C.className,A=C.style,R=C.bgClassName,F=C.contentClassName,B=C.bgImageAlt,U=C.renderLayer,$=C.bgImageStyle,z=C.lazy,W=this.state,re=W.bgImage,T=W.bgImageSrcSet,le=W.bgImageSizes,Ve=W.percentage,kt=W.imgStyle,ge=W.bgStyle,Te=W.splitChildren;return f.default.createElement("div",{className:"react-parallax ".concat(O),style:Object.assign({position:"relative",overflow:"hidden"},A),ref:function(he){S.node=he}},re?f.default.createElement("img",{className:R,src:re,srcSet:T,sizes:le,ref:function(he){S.img=he},alt:B,style:Object.assign(Object.assign({},kt),$),loading:z?"lazy":"eager"}):null,U?U(-(Ve-1)):null,Te.bgChildren.length>0?f.default.createElement("div",{className:"react-parallax-background-children",ref:function(he){S.bg=he},style:ge},Te.bgChildren):null,f.default.createElement(v.default,{onMount:this.onContentMount,className:F},Te.children))}}],[{key:"getDerivedStateFromProps",value:function(S){return{splitChildren:d.getSplitChildren(S)}}}]),k}(m.Parallax);b.defaultProps={bgClassName:"react-parallax-bgimage",bgImageAlt:"",className:"",contentClassName:"",disabled:!1,strength:100},n.default=b},function(t,n,i){function o(l){return(o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(h){return typeof h}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h})(l)}Object.defineProperty(n,"__esModule",{value:!0}),n.setBlur=n.getBlurValue=n.getHasDynamicBlur=n.getSplitChildren=n.getRelativePosition=n.getPercentage=void 0;var a=i(0),c=i(2);n.getPercentage=function(l,u,h){return(h-l)/(u-l)||0},n.getRelativePosition=function(l,u){if(!u)return 0;var h=l.getBoundingClientRect(),p=h.top,f=h.height,m=c.getNodeHeight(u),d=f>m?f:m,g=Math.round(p>d?d:p);return n.getPercentage(0,d,g)},n.getSplitChildren=function(l){var u=[],h=a.Children.toArray(l.children);return h.forEach(function(p,f){var m=p;m.type&&m.type.isParallaxBackground&&(u=u.concat(h.splice(f,1)))}),{bgChildren:u,children:h}},n.getHasDynamicBlur=function(l){return o(l)==="object"&&l.min!==void 0&&l.max!==void 0},n.getBlurValue=function(l,u,h){return l?u.min+(1-h)*u.max:u},n.setBlur=function(l,u){l.style.webkitFilter="blur(".concat(u,"px)"),l.style.filter="blur(".concat(u,"px)")}},function(t,n,i){var o=this&&this.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(n,"__esModule",{value:!0});var a=o(i(0));n.default=function(l){var u=l.children,h=l.onMount,p=l.className;return a.default.createElement("div",{ref:function(m){return h(m)},className:p||"react-parallax-content",style:{position:"relative"}},u)}},function(t,n,i){function o(g){return(o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y})(g)}function a(g,v){if(!(g instanceof v))throw new TypeError("Cannot call a class as a function")}function c(g,v){for(var y=0;y<v.length;y++){var b=v[y];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(g,b.key,b)}}function l(g,v){return(l=Object.setPrototypeOf||function(b,x){return b.__proto__=x,b})(g,v)}function u(g){var v=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var b,x=p(g);if(v){var _=p(this).constructor;b=Reflect.construct(x,arguments,_)}else b=x.apply(this,arguments);return h(this,b)}}function h(g,v){return!v||o(v)!=="object"&&typeof v!="function"?function(b){if(b===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b}(g):v}function p(g){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(y){return y.__proto__||Object.getPrototypeOf(y)})(g)}var f=this&&this.__importDefault||function(g){return g&&g.__esModule?g:{default:g}};Object.defineProperty(n,"__esModule",{value:!0});var m=f(i(0)),d=function(g){(function(x,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function");x.prototype=Object.create(_&&_.prototype,{constructor:{value:x,writable:!0,configurable:!0}}),_&&l(x,_)})(y,g);var v=u(y);function y(){return a(this,y),v.apply(this,arguments)}return function(x,_,k){return _&&c(x.prototype,_),x}(y,[{key:"render",value:function(){var x=this.props,_=x.className,k=x.children;return m.default.createElement("div",{className:"react-parallax-background ".concat(_)},k)}}]),y}(i(1).Background);d.defaultProps={className:""},d.isParallaxBackground=!0,n.default=d}])})}(os)),os.exports}var Qf=Zf();const Jf="/assets/bg-C28rPa-6.webp";te.registerPlugin(H);function ed(){const s=["Frontend","Systems","Comp Arch","Databases","CLI Tooling","Linux/unix"],e=N.useRef([]);e.current=[];const r=N.useRef(null),t=n=>{n&&!e.current.includes(n)&&e.current.push(n)};return N.useEffect(()=>{const n=o=>window.innerWidth-o.getBoundingClientRect().left-o.offsetWidth-10,i=te.context(()=>{const o=te.timeline({scrollTrigger:{trigger:r.current,start:"top center",end:"+=500",scrub:1,invalidateOnRefresh:!0}});e.current.forEach((a,c)=>{o.to(a,{x:()=>n(a),ease:"power3.out"},c*.15)})},r);return()=>i.revert()},[]),M.jsxs("div",{className:"relative w-full h-[100vh] overflow-hidden",children:[M.jsx(Qf.Parallax,{bgImage:Jf,strength:300,bgImageStyle:{objectFit:"cover",objectPosition:"center",minWidth:"100%",minHeight:"100%",width:"auto",height:"auto"},children:M.jsx("div",{style:{height:"100vh"}})}),M.jsx("div",{ref:r,className:"hidden absolute top-0 left-0 pt-5 md:flex flex-col items-start pointer-events-none",children:s.map(n=>M.jsx("h2",{ref:t,className:`text-white ${n==="CS @ Purdue"?"uppercase font-intersemibold text-[80px]":"uppercase font-interregular text-[140px]"} leading-none`,children:n},n))}),M.jsx("div",{className:"md:hidden absolute top-0 left-0 pt-5 flex flex-col items-start pointer-events-none pt-50 sm:pt-20",children:s.map(n=>M.jsx("h2",{className:"text-white uppercase font-interregular text-[70px] sm:text-[115px] leading-none text-nowrap",children:n}))})]})}function td(s){if(s.sheet)return s.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===s)return document.styleSheets[e]}function rd(s){var e=document.createElement("style");return e.setAttribute("data-emotion",s.key),s.nonce!==void 0&&e.setAttribute("nonce",s.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var nd=function(){function s(r){var t=this;this._insertTag=function(n){var i;t.tags.length===0?t.insertionPoint?i=t.insertionPoint.nextSibling:t.prepend?i=t.container.firstChild:i=t.before:i=t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(n,i),t.tags.push(n)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var e=s.prototype;return e.hydrate=function(t){t.forEach(this._insertTag)},e.insert=function(t){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(rd(this));var n=this.tags[this.tags.length-1];if(this.isSpeedy){var i=td(n);try{i.insertRule(t,i.cssRules.length)}catch{}}else n.appendChild(document.createTextNode(t));this.ctr++},e.flush=function(){this.tags.forEach(function(t){var n;return(n=t.parentNode)==null?void 0:n.removeChild(t)}),this.tags=[],this.ctr=0},s}(),tt="-ms-",ws="-moz-",ie="-webkit-",Ol="comm",ta="rule",ra="decl",id="@import",Rl="@keyframes",sd="@layer",od=Math.abs,Ps=String.fromCharCode,ad=Object.assign;function cd(s,e){return qe(s,0)^45?(((e<<2^qe(s,0))<<2^qe(s,1))<<2^qe(s,2))<<2^qe(s,3):0}function Ml(s){return s.trim()}function ld(s,e){return(s=e.exec(s))?s[0]:s}function se(s,e,r){return s.replace(e,r)}function To(s,e){return s.indexOf(e)}function qe(s,e){return s.charCodeAt(e)|0}function Ti(s,e,r){return s.slice(e,r)}function sr(s){return s.length}function na(s){return s.length}function qi(s,e){return e.push(s),s}function ud(s,e){return s.map(e).join("")}var Os=1,$n=1,El=0,Tt=0,Ie=0,Bn="";function Rs(s,e,r,t,n,i,o){return{value:s,root:e,parent:r,type:t,props:n,children:i,line:Os,column:$n,length:o,return:""}}function Gn(s,e){return ad(Rs("",null,null,"",null,null,0),s,{length:-s.length},e)}function fd(){return Ie}function dd(){return Ie=Tt>0?qe(Bn,--Tt):0,$n--,Ie===10&&($n=1,Os--),Ie}function zt(){return Ie=Tt<El?qe(Bn,Tt++):0,$n++,Ie===10&&($n=1,Os++),Ie}function fr(){return qe(Bn,Tt)}function as(){return Tt}function Ri(s,e){return Ti(Bn,s,e)}function ki(s){switch(s){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Dl(s){return Os=$n=1,El=sr(Bn=s),Tt=0,[]}function Al(s){return Bn="",s}function cs(s){return Ml(Ri(Tt-1,ko(s===91?s+2:s===40?s+1:s)))}function hd(s){for(;(Ie=fr())&&Ie<33;)zt();return ki(s)>2||ki(Ie)>3?"":" "}function pd(s,e){for(;--e&&zt()&&!(Ie<48||Ie>102||Ie>57&&Ie<65||Ie>70&&Ie<97););return Ri(s,as()+(e<6&&fr()==32&&zt()==32))}function ko(s){for(;zt();)switch(Ie){case s:return Tt;case 34:case 39:s!==34&&s!==39&&ko(Ie);break;case 40:s===41&&ko(s);break;case 92:zt();break}return Tt}function gd(s,e){for(;zt()&&s+Ie!==57;)if(s+Ie===84&&fr()===47)break;return"/*"+Ri(e,Tt-1)+"*"+Ps(s===47?s:zt())}function md(s){for(;!ki(fr());)zt();return Ri(s,Tt)}function _d(s){return Al(ls("",null,null,null,[""],s=Dl(s),0,[0],s))}function ls(s,e,r,t,n,i,o,a,c){for(var l=0,u=0,h=o,p=0,f=0,m=0,d=1,g=1,v=1,y=0,b="",x=n,_=i,k=t,w=b;g;)switch(m=y,y=zt()){case 40:if(m!=108&&qe(w,h-1)==58){To(w+=se(cs(y),"&","&\f"),"&\f")!=-1&&(v=-1);break}case 34:case 39:case 91:w+=cs(y);break;case 9:case 10:case 13:case 32:w+=hd(m);break;case 92:w+=pd(as()-1,7);continue;case 47:switch(fr()){case 42:case 47:qi(yd(gd(zt(),as()),e,r),c);break;default:w+="/"}break;case 123*d:a[l++]=sr(w)*v;case 125*d:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+u:v==-1&&(w=se(w,/\f/g,"")),f>0&&sr(w)-h&&qi(f>32?Va(w+";",t,r,h-1):Va(se(w," ","")+";",t,r,h-2),c);break;case 59:w+=";";default:if(qi(k=Wa(w,e,r,l,u,n,a,b,x=[],_=[],h),i),y===123)if(u===0)ls(w,e,k,k,x,i,h,a,_);else switch(p===99&&qe(w,3)===110?100:p){case 100:case 108:case 109:case 115:ls(s,k,k,t&&qi(Wa(s,k,k,0,0,n,a,b,n,x=[],h),_),n,_,h,a,t?x:_);break;default:ls(w,k,k,k,[""],_,0,a,_)}}l=u=f=0,d=v=1,b=w="",h=o;break;case 58:h=1+sr(w),f=m;default:if(d<1){if(y==123)--d;else if(y==125&&d++==0&&dd()==125)continue}switch(w+=Ps(y),y*d){case 38:v=u>0?1:(w+="\f",-1);break;case 44:a[l++]=(sr(w)-1)*v,v=1;break;case 64:fr()===45&&(w+=cs(zt())),p=fr(),u=h=sr(b=w+=md(as())),y++;break;case 45:m===45&&sr(w)==2&&(d=0)}}return i}function Wa(s,e,r,t,n,i,o,a,c,l,u){for(var h=n-1,p=n===0?i:[""],f=na(p),m=0,d=0,g=0;m<t;++m)for(var v=0,y=Ti(s,h+1,h=od(d=o[m])),b=s;v<f;++v)(b=Ml(d>0?p[v]+" "+y:se(y,/&\f/g,p[v])))&&(c[g++]=b);return Rs(s,e,r,n===0?ta:a,c,l,u)}function yd(s,e,r){return Rs(s,e,r,Ol,Ps(fd()),Ti(s,2,-2),0)}function Va(s,e,r,t){return Rs(s,e,r,ra,Ti(s,0,t),Ti(s,t+1,-1),t)}function Dn(s,e){for(var r="",t=na(s),n=0;n<t;n++)r+=e(s[n],n,s,e)||"";return r}function vd(s,e,r,t){switch(s.type){case sd:if(s.children.length)break;case id:case ra:return s.return=s.return||s.value;case Ol:return"";case Rl:return s.return=s.value+"{"+Dn(s.children,t)+"}";case ta:s.value=s.props.join(",")}return sr(r=Dn(s.children,t))?s.return=s.value+"{"+r+"}":""}function bd(s){var e=na(s);return function(r,t,n,i){for(var o="",a=0;a<e;a++)o+=s[a](r,t,n,i)||"";return o}}function xd(s){return function(e){e.root||(e=e.return)&&s(e)}}function wd(s){var e=Object.create(null);return function(r){return e[r]===void 0&&(e[r]=s(r)),e[r]}}var Sd=function(e,r,t){for(var n=0,i=0;n=i,i=fr(),n===38&&i===12&&(r[t]=1),!ki(i);)zt();return Ri(e,Tt)},Td=function(e,r){var t=-1,n=44;do switch(ki(n)){case 0:n===38&&fr()===12&&(r[t]=1),e[t]+=Sd(Tt-1,r,t);break;case 2:e[t]+=cs(n);break;case 4:if(n===44){e[++t]=fr()===58?"&\f":"",r[t]=e[t].length;break}default:e[t]+=Ps(n)}while(n=zt());return e},kd=function(e,r){return Al(Td(Dl(e),r))},Ha=new WeakMap,Cd=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var r=e.value,t=e.parent,n=e.column===t.column&&e.line===t.line;t.type!=="rule";)if(t=t.parent,!t)return;if(!(e.props.length===1&&r.charCodeAt(0)!==58&&!Ha.get(t))&&!n){Ha.set(e,!0);for(var i=[],o=kd(r,i),a=t.props,c=0,l=0;c<o.length;c++)for(var u=0;u<a.length;u++,l++)e.props[l]=i[c]?o[c].replace(/&\f/g,a[u]):a[u]+" "+o[c]}}},Pd=function(e){if(e.type==="decl"){var r=e.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(e.return="",e.value="")}};function Il(s,e){switch(cd(s,e)){case 5103:return ie+"print-"+s+s;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ie+s+s;case 5349:case 4246:case 4810:case 6968:case 2756:return ie+s+ws+s+tt+s+s;case 6828:case 4268:return ie+s+tt+s+s;case 6165:return ie+s+tt+"flex-"+s+s;case 5187:return ie+s+se(s,/(\w+).+(:[^]+)/,ie+"box-$1$2"+tt+"flex-$1$2")+s;case 5443:return ie+s+tt+"flex-item-"+se(s,/flex-|-self/,"")+s;case 4675:return ie+s+tt+"flex-line-pack"+se(s,/align-content|flex-|-self/,"")+s;case 5548:return ie+s+tt+se(s,"shrink","negative")+s;case 5292:return ie+s+tt+se(s,"basis","preferred-size")+s;case 6060:return ie+"box-"+se(s,"-grow","")+ie+s+tt+se(s,"grow","positive")+s;case 4554:return ie+se(s,/([^-])(transform)/g,"$1"+ie+"$2")+s;case 6187:return se(se(se(s,/(zoom-|grab)/,ie+"$1"),/(image-set)/,ie+"$1"),s,"")+s;case 5495:case 3959:return se(s,/(image-set\([^]*)/,ie+"$1$`$1");case 4968:return se(se(s,/(.+:)(flex-)?(.*)/,ie+"box-pack:$3"+tt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ie+s+s;case 4095:case 3583:case 4068:case 2532:return se(s,/(.+)-inline(.+)/,ie+"$1$2")+s;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(sr(s)-1-e>6)switch(qe(s,e+1)){case 109:if(qe(s,e+4)!==45)break;case 102:return se(s,/(.+:)(.+)-([^]+)/,"$1"+ie+"$2-$3$1"+ws+(qe(s,e+3)==108?"$3":"$2-$3"))+s;case 115:return~To(s,"stretch")?Il(se(s,"stretch","fill-available"),e)+s:s}break;case 4949:if(qe(s,e+1)!==115)break;case 6444:switch(qe(s,sr(s)-3-(~To(s,"!important")&&10))){case 107:return se(s,":",":"+ie)+s;case 101:return se(s,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ie+(qe(s,14)===45?"inline-":"")+"box$3$1"+ie+"$2$3$1"+tt+"$2box$3")+s}break;case 5936:switch(qe(s,e+11)){case 114:return ie+s+tt+se(s,/[svh]\w+-[tblr]{2}/,"tb")+s;case 108:return ie+s+tt+se(s,/[svh]\w+-[tblr]{2}/,"tb-rl")+s;case 45:return ie+s+tt+se(s,/[svh]\w+-[tblr]{2}/,"lr")+s}return ie+s+tt+s+s}return s}var Od=function(e,r,t,n){if(e.length>-1&&!e.return)switch(e.type){case ra:e.return=Il(e.value,e.length);break;case Rl:return Dn([Gn(e,{value:se(e.value,"@","@"+ie)})],n);case ta:if(e.length)return ud(e.props,function(i){switch(ld(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Dn([Gn(e,{props:[se(i,/:(read-\w+)/,":"+ws+"$1")]})],n);case"::placeholder":return Dn([Gn(e,{props:[se(i,/:(plac\w+)/,":"+ie+"input-$1")]}),Gn(e,{props:[se(i,/:(plac\w+)/,":"+ws+"$1")]}),Gn(e,{props:[se(i,/:(plac\w+)/,tt+"input-$1")]})],n)}return""})}},Rd=[Od],Md=function(e){var r=e.key;if(r==="css"){var t=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(t,function(d){var g=d.getAttribute("data-emotion");g.indexOf(" ")!==-1&&(document.head.appendChild(d),d.setAttribute("data-s",""))})}var n=e.stylisPlugins||Rd,i={},o,a=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(d){for(var g=d.getAttribute("data-emotion").split(" "),v=1;v<g.length;v++)i[g[v]]=!0;a.push(d)});var c,l=[Cd,Pd];{var u,h=[vd,xd(function(d){u.insert(d)})],p=bd(l.concat(n,h)),f=function(g){return Dn(_d(g),p)};c=function(g,v,y,b){u=y,f(g?g+"{"+v.styles+"}":v.styles),b&&(m.inserted[v.name]=!0)}}var m={key:r,sheet:new nd({key:r,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:c};return m.sheet.hydrate(a),m},Us={exports:{}},oe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ua;function Ed(){if(Ua)return oe;Ua=1;var s=typeof Symbol=="function"&&Symbol.for,e=s?Symbol.for("react.element"):60103,r=s?Symbol.for("react.portal"):60106,t=s?Symbol.for("react.fragment"):60107,n=s?Symbol.for("react.strict_mode"):60108,i=s?Symbol.for("react.profiler"):60114,o=s?Symbol.for("react.provider"):60109,a=s?Symbol.for("react.context"):60110,c=s?Symbol.for("react.async_mode"):60111,l=s?Symbol.for("react.concurrent_mode"):60111,u=s?Symbol.for("react.forward_ref"):60112,h=s?Symbol.for("react.suspense"):60113,p=s?Symbol.for("react.suspense_list"):60120,f=s?Symbol.for("react.memo"):60115,m=s?Symbol.for("react.lazy"):60116,d=s?Symbol.for("react.block"):60121,g=s?Symbol.for("react.fundamental"):60117,v=s?Symbol.for("react.responder"):60118,y=s?Symbol.for("react.scope"):60119;function b(_){if(typeof _=="object"&&_!==null){var k=_.$$typeof;switch(k){case e:switch(_=_.type,_){case c:case l:case t:case i:case n:case h:return _;default:switch(_=_&&_.$$typeof,_){case a:case u:case m:case f:case o:return _;default:return k}}case r:return k}}}function x(_){return b(_)===l}return oe.AsyncMode=c,oe.ConcurrentMode=l,oe.ContextConsumer=a,oe.ContextProvider=o,oe.Element=e,oe.ForwardRef=u,oe.Fragment=t,oe.Lazy=m,oe.Memo=f,oe.Portal=r,oe.Profiler=i,oe.StrictMode=n,oe.Suspense=h,oe.isAsyncMode=function(_){return x(_)||b(_)===c},oe.isConcurrentMode=x,oe.isContextConsumer=function(_){return b(_)===a},oe.isContextProvider=function(_){return b(_)===o},oe.isElement=function(_){return typeof _=="object"&&_!==null&&_.$$typeof===e},oe.isForwardRef=function(_){return b(_)===u},oe.isFragment=function(_){return b(_)===t},oe.isLazy=function(_){return b(_)===m},oe.isMemo=function(_){return b(_)===f},oe.isPortal=function(_){return b(_)===r},oe.isProfiler=function(_){return b(_)===i},oe.isStrictMode=function(_){return b(_)===n},oe.isSuspense=function(_){return b(_)===h},oe.isValidElementType=function(_){return typeof _=="string"||typeof _=="function"||_===t||_===l||_===i||_===n||_===h||_===p||typeof _=="object"&&_!==null&&(_.$$typeof===m||_.$$typeof===f||_.$$typeof===o||_.$$typeof===a||_.$$typeof===u||_.$$typeof===g||_.$$typeof===v||_.$$typeof===y||_.$$typeof===d)},oe.typeOf=b,oe}var qa;function Dd(){return qa||(qa=1,Us.exports=Ed()),Us.exports}var qs,Ga;function Ad(){if(Ga)return qs;Ga=1;var s=Dd(),e={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},t={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},n={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};i[s.ForwardRef]=t,i[s.Memo]=n;function o(m){return s.isMemo(m)?n:i[m.$$typeof]||e}var a=Object.defineProperty,c=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,p=Object.prototype;function f(m,d,g){if(typeof d!="string"){if(p){var v=h(d);v&&v!==p&&f(m,v,g)}var y=c(d);l&&(y=y.concat(l(d)));for(var b=o(m),x=o(d),_=0;_<y.length;++_){var k=y[_];if(!r[k]&&!(g&&g[k])&&!(x&&x[k])&&!(b&&b[k])){var w=u(d,k);try{a(m,k,w)}catch{}}}}return m}return qs=f,qs}Ad();var Id=!0;function Nl(s,e,r){var t="";return r.split(" ").forEach(function(n){s[n]!==void 0?e.push(s[n]+";"):n&&(t+=n+" ")}),t}var ia=function(e,r,t){var n=e.key+"-"+r.name;(t===!1||Id===!1)&&e.registered[n]===void 0&&(e.registered[n]=r.styles)},jl=function(e,r,t){ia(e,r,t);var n=e.key+"-"+r.name;if(e.inserted[r.name]===void 0){var i=r;do e.insert(r===i?"."+n:"",i,e.sheet,!0),i=i.next;while(i!==void 0)}};function Nd(s){for(var e=0,r,t=0,n=s.length;n>=4;++t,n-=4)r=s.charCodeAt(t)&255|(s.charCodeAt(++t)&255)<<8|(s.charCodeAt(++t)&255)<<16|(s.charCodeAt(++t)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,e=(r&65535)*1540483477+((r>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(n){case 3:e^=(s.charCodeAt(t+2)&255)<<16;case 2:e^=(s.charCodeAt(t+1)&255)<<8;case 1:e^=s.charCodeAt(t)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var jd={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},zd=/[A-Z]|^ms/g,Ld=/_EMO_([^_]+?)_([^]*?)_EMO_/g,zl=function(e){return e.charCodeAt(1)===45},Ka=function(e){return e!=null&&typeof e!="boolean"},Gs=wd(function(s){return zl(s)?s:s.replace(zd,"-$&").toLowerCase()}),Za=function(e,r){switch(e){case"animation":case"animationName":if(typeof r=="string")return r.replace(Ld,function(t,n,i){return or={name:n,styles:i,next:or},n})}return jd[e]!==1&&!zl(e)&&typeof r=="number"&&r!==0?r+"px":r};function Ci(s,e,r){if(r==null)return"";var t=r;if(t.__emotion_styles!==void 0)return t;switch(typeof r){case"boolean":return"";case"object":{var n=r;if(n.anim===1)return or={name:n.name,styles:n.styles,next:or},n.name;var i=r;if(i.styles!==void 0){var o=i.next;if(o!==void 0)for(;o!==void 0;)or={name:o.name,styles:o.styles,next:or},o=o.next;var a=i.styles+";";return a}return Fd(s,e,r)}case"function":{if(s!==void 0){var c=or,l=r(s);return or=c,Ci(s,e,l)}break}}var u=r;if(e==null)return u;var h=e[u];return h!==void 0?h:u}function Fd(s,e,r){var t="";if(Array.isArray(r))for(var n=0;n<r.length;n++)t+=Ci(s,e,r[n])+";";else for(var i in r){var o=r[i];if(typeof o!="object"){var a=o;e!=null&&e[a]!==void 0?t+=i+"{"+e[a]+"}":Ka(a)&&(t+=Gs(i)+":"+Za(i,a)+";")}else if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var c=0;c<o.length;c++)Ka(o[c])&&(t+=Gs(i)+":"+Za(i,o[c])+";");else{var l=Ci(s,e,o);switch(i){case"animation":case"animationName":{t+=Gs(i)+":"+l+";";break}default:t+=i+"{"+l+"}"}}}return t}var Qa=/label:\s*([^\s;{]+)\s*(;|$)/g,or;function sa(s,e,r){if(s.length===1&&typeof s[0]=="object"&&s[0]!==null&&s[0].styles!==void 0)return s[0];var t=!0,n="";or=void 0;var i=s[0];if(i==null||i.raw===void 0)t=!1,n+=Ci(r,e,i);else{var o=i;n+=o[0]}for(var a=1;a<s.length;a++)if(n+=Ci(r,e,s[a]),t){var c=i;n+=c[a]}Qa.lastIndex=0;for(var l="",u;(u=Qa.exec(n))!==null;)l+="-"+u[1];var h=Nd(n)+l;return{name:h,styles:n,next:or}}var $d=function(e){return e()},Bd=aa.useInsertionEffect?aa.useInsertionEffect:!1,Ll=Bd||$d,Fl=N.createContext(typeof HTMLElement<"u"?Md({key:"css"}):null);Fl.Provider;var $l=function(e){return N.forwardRef(function(r,t){var n=N.useContext(Fl);return e(r,n,t)})},Bl=N.createContext({}),Ms={}.hasOwnProperty,Co="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Yl=function(e,r){var t={};for(var n in r)Ms.call(r,n)&&(t[n]=r[n]);return t[Co]=e,t},Yd=function(e){var r=e.cache,t=e.serialized,n=e.isStringTag;return ia(r,t,n),Ll(function(){return jl(r,t,n)}),null},Xd=$l(function(s,e,r){var t=s.css;typeof t=="string"&&e.registered[t]!==void 0&&(t=e.registered[t]);var n=s[Co],i=[t],o="";typeof s.className=="string"?o=Nl(e.registered,i,s.className):s.className!=null&&(o=s.className+" ");var a=sa(i,void 0,N.useContext(Bl));o+=e.key+"-"+a.name;var c={};for(var l in s)Ms.call(s,l)&&l!=="css"&&l!==Co&&(c[l]=s[l]);return c.className=o,r&&(c.ref=r),N.createElement(N.Fragment,null,N.createElement(Yd,{cache:e,serialized:a,isStringTag:typeof n=="string"}),N.createElement(n,c))}),Xl=Xd,Wd=M.Fragment,Ye=function(e,r,t){return Ms.call(r,"css")?M.jsx(Xl,Yl(e,r),t):M.jsx(e,r,t)},Ja=function(e,r){var t=arguments;if(r==null||!Ms.call(r,"css"))return N.createElement.apply(void 0,t);var n=t.length,i=new Array(n);i[0]=Xl,i[1]=Yl(e,r);for(var o=2;o<n;o++)i[o]=t[o];return N.createElement.apply(null,i)};(function(s){var e;e||(e=s.JSX||(s.JSX={}))})(Ja||(Ja={}));function Wl(){for(var s=arguments.length,e=new Array(s),r=0;r<s;r++)e[r]=arguments[r];return sa(e)}function E(){var s=Wl.apply(void 0,arguments),e="animation-"+s.name;return{name:e,styles:"@keyframes "+e+"{"+s.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var Vd=function s(e){for(var r=e.length,t=0,n="";t<r;t++){var i=e[t];if(i!=null){var o=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))o=s(i);else{o="";for(var a in i)i[a]&&a&&(o&&(o+=" "),o+=a)}break}default:o=i}o&&(n&&(n+=" "),n+=o)}}return n};function Hd(s,e,r){var t=[],n=Nl(s,t,r);return t.length<2?r:n+e(t)}var Ud=function(e){var r=e.cache,t=e.serializedArr;return Ll(function(){for(var n=0;n<t.length;n++)jl(r,t[n],!1)}),null},Ks=$l(function(s,e){var r=[],t=function(){for(var c=arguments.length,l=new Array(c),u=0;u<c;u++)l[u]=arguments[u];var h=sa(l,e.registered);return r.push(h),ia(e,h,!1),e.key+"-"+h.name},n=function(){for(var c=arguments.length,l=new Array(c),u=0;u<c;u++)l[u]=arguments[u];return Hd(e.registered,t,Vd(l))},i={css:t,cx:n,theme:N.useContext(Bl)},o=s.children(i);return N.createElement(N.Fragment,null,N.createElement(Ud,{cache:e,serializedArr:r}),o)}),qd=Object.defineProperty,Gd=(s,e,r)=>e in s?qd(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r,Gi=(s,e,r)=>Gd(s,typeof e!="symbol"?e+"":e,r),Po=new Map,Ki=new WeakMap,ec=0,Kd=void 0;function Zd(s){return s?(Ki.has(s)||(ec+=1,Ki.set(s,ec.toString())),Ki.get(s)):"0"}function Qd(s){return Object.keys(s).sort().filter(e=>s[e]!==void 0).map(e=>`${e}_${e==="root"?Zd(s.root):s[e]}`).toString()}function Jd(s){const e=Qd(s);let r=Po.get(e);if(!r){const t=new Map;let n;const i=new IntersectionObserver(o=>{o.forEach(a=>{var c;const l=a.isIntersecting&&n.some(u=>a.intersectionRatio>=u);s.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=l),(c=t.get(a.target))==null||c.forEach(u=>{u(l,a)})})},s);n=i.thresholds||(Array.isArray(s.threshold)?s.threshold:[s.threshold||0]),r={id:e,observer:i,elements:t},Po.set(e,r)}return r}function Vl(s,e,r={},t=Kd){if(typeof window.IntersectionObserver>"u"&&t!==void 0){const c=s.getBoundingClientRect();return e(t,{isIntersecting:t,target:s,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:c,intersectionRect:c,rootBounds:c}),()=>{}}const{id:n,observer:i,elements:o}=Jd(r),a=o.get(s)||[];return o.has(s)||o.set(s,a),a.push(e),i.observe(s),function(){a.splice(a.indexOf(e),1),a.length===0&&(o.delete(s),i.unobserve(s)),o.size===0&&(i.disconnect(),Po.delete(n))}}function e0(s){return typeof s.children!="function"}var tc=class extends N.Component{constructor(s){super(s),Gi(this,"node",null),Gi(this,"_unobserveCb",null),Gi(this,"handleNode",e=>{this.node&&(this.unobserve(),!e&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()}),Gi(this,"handleChange",(e,r)=>{e&&this.props.triggerOnce&&this.unobserve(),e0(this.props)||this.setState({inView:e,entry:r}),this.props.onChange&&this.props.onChange(e,r)}),this.state={inView:!!s.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(s){(s.rootMargin!==this.props.rootMargin||s.root!==this.props.root||s.threshold!==this.props.threshold||s.skip!==this.props.skip||s.trackVisibility!==this.props.trackVisibility||s.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:s,root:e,rootMargin:r,trackVisibility:t,delay:n,fallbackInView:i}=this.props;this._unobserveCb=Vl(this.node,this.handleChange,{threshold:s,root:e,rootMargin:r,trackVisibility:t,delay:n},i)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:s}=this.props;if(typeof s=="function"){const{inView:f,entry:m}=this.state;return s({inView:f,entry:m,ref:this.handleNode})}const{as:e,triggerOnce:r,threshold:t,root:n,rootMargin:i,onChange:o,skip:a,trackVisibility:c,delay:l,initialInView:u,fallbackInView:h,...p}=this.props;return N.createElement(e||"div",{ref:this.handleNode,...p},s)}};function Hl({threshold:s,delay:e,trackVisibility:r,rootMargin:t,root:n,triggerOnce:i,skip:o,initialInView:a,fallbackInView:c,onChange:l}={}){var u;const[h,p]=N.useState(null),f=N.useRef(l),[m,d]=N.useState({inView:!!a,entry:void 0});f.current=l,N.useEffect(()=>{if(o||!h)return;let b;return b=Vl(h,(x,_)=>{d({inView:x,entry:_}),f.current&&f.current(x,_),_.isIntersecting&&i&&b&&(b(),b=void 0)},{root:n,rootMargin:t,threshold:s,trackVisibility:r,delay:e},c),()=>{b&&b()}},[Array.isArray(s)?s.toString():s,h,n,t,i,o,r,c,e]);const g=(u=m.entry)==null?void 0:u.target,v=N.useRef(void 0);!h&&g&&!i&&!o&&v.current!==g&&(v.current=g,d({inView:!!a,entry:void 0}));const y=[p,m.inView,m.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}var Zs={exports:{}},ae={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rc;function t0(){if(rc)return ae;rc=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),t=Symbol.for("react.strict_mode"),n=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),o=Symbol.for("react.context"),a=Symbol.for("react.server_context"),c=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),u=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.for("react.offscreen"),m;m=Symbol.for("react.module.reference");function d(g){if(typeof g=="object"&&g!==null){var v=g.$$typeof;switch(v){case s:switch(g=g.type,g){case r:case n:case t:case l:case u:return g;default:switch(g=g&&g.$$typeof,g){case a:case o:case c:case p:case h:case i:return g;default:return v}}case e:return v}}}return ae.ContextConsumer=o,ae.ContextProvider=i,ae.Element=s,ae.ForwardRef=c,ae.Fragment=r,ae.Lazy=p,ae.Memo=h,ae.Portal=e,ae.Profiler=n,ae.StrictMode=t,ae.Suspense=l,ae.SuspenseList=u,ae.isAsyncMode=function(){return!1},ae.isConcurrentMode=function(){return!1},ae.isContextConsumer=function(g){return d(g)===o},ae.isContextProvider=function(g){return d(g)===i},ae.isElement=function(g){return typeof g=="object"&&g!==null&&g.$$typeof===s},ae.isForwardRef=function(g){return d(g)===c},ae.isFragment=function(g){return d(g)===r},ae.isLazy=function(g){return d(g)===p},ae.isMemo=function(g){return d(g)===h},ae.isPortal=function(g){return d(g)===e},ae.isProfiler=function(g){return d(g)===n},ae.isStrictMode=function(g){return d(g)===t},ae.isSuspense=function(g){return d(g)===l},ae.isSuspenseList=function(g){return d(g)===u},ae.isValidElementType=function(g){return typeof g=="string"||typeof g=="function"||g===r||g===n||g===t||g===l||g===u||g===f||typeof g=="object"&&g!==null&&(g.$$typeof===p||g.$$typeof===h||g.$$typeof===i||g.$$typeof===o||g.$$typeof===c||g.$$typeof===m||g.getModuleId!==void 0)},ae.typeOf=d,ae}var nc;function r0(){return nc||(nc=1,Zs.exports=t0()),Zs.exports}var n0=r0();const i0=E`
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
`,s0=E`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,o0=E`
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
`,a0=E`
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
`,l0=E`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,u0=E`
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
`,f0=E`
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
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,p0=E`
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
`,m0=E`
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
`;const Ul=E`
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
`;function _0({duration:s=1e3,delay:e=0,timingFunction:r="ease",keyframes:t=Ul,iterationCount:n=1}){return Wl`
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
  `}function y0(s){return s==null}function v0(s){return typeof s=="string"||typeof s=="number"||typeof s=="boolean"}function ql(s,e){return r=>r?s():e()}function Pi(s){return ql(s,()=>null)}function Oo(s){return Pi(()=>({opacity:0}))(s)}const Gl=s=>{const{cascade:e=!1,damping:r=.5,delay:t=0,duration:n=1e3,fraction:i=0,keyframes:o=Ul,triggerOnce:a=!1,className:c,style:l,childClassName:u,childStyle:h,children:p,onVisibilityChange:f}=s,m=N.useMemo(()=>_0({keyframes:o,duration:n}),[n,o]);return y0(p)?null:v0(p)?Ye(x0,{...s,animationStyles:m,children:String(p)}):n0.isFragment(p)?Ye(Kl,{...s,animationStyles:m}):Ye(Wd,{children:N.Children.map(p,(d,g)=>{if(!N.isValidElement(d))return null;const v=t+(e?g*n*r:0);switch(d.type){case"ol":case"ul":return Ye(Ks,{children:({cx:y})=>Ye(d.type,{...d.props,className:y(c,d.props.className),style:Object.assign({},l,d.props.style),children:Ye(Gl,{...s,children:d.props.children})})});case"li":return Ye(tc,{threshold:i,triggerOnce:a,onChange:f,children:({inView:y,ref:b})=>Ye(Ks,{children:({cx:x})=>Ye(d.type,{...d.props,ref:b,className:x(u,d.props.className),css:Pi(()=>m)(y),style:Object.assign({},h,d.props.style,Oo(!y),{animationDelay:v+"ms"})})})});default:return Ye(tc,{threshold:i,triggerOnce:a,onChange:f,children:({inView:y,ref:b})=>Ye("div",{ref:b,className:c,css:Pi(()=>m)(y),style:Object.assign({},l,Oo(!y),{animationDelay:v+"ms"}),children:Ye(Ks,{children:({cx:x})=>Ye(d.type,{...d.props,className:x(u,d.props.className),style:Object.assign({},h,d.props.style)})})})})}})})},b0={display:"inline-block",whiteSpace:"pre"},x0=s=>{const{animationStyles:e,cascade:r=!1,damping:t=.5,delay:n=0,duration:i=1e3,fraction:o=0,triggerOnce:a=!1,className:c,style:l,children:u,onVisibilityChange:h}=s,{ref:p,inView:f}=Hl({triggerOnce:a,threshold:o,onChange:h});return ql(()=>Ye("div",{ref:p,className:c,style:Object.assign({},l,b0),children:u.split("").map((m,d)=>Ye("span",{css:Pi(()=>e)(f),style:{animationDelay:n+d*i*t+"ms"},children:m},d))}),()=>Ye(Kl,{...s,children:u}))(r)},Kl=s=>{const{animationStyles:e,fraction:r=0,triggerOnce:t=!1,className:n,style:i,children:o,onVisibilityChange:a}=s,{ref:c,inView:l}=Hl({triggerOnce:t,threshold:r,onChange:a});return Ye("div",{ref:c,className:n,css:Pi(()=>e)(l),style:Object.assign({},i,Oo(!l)),children:o})};function w0(s){switch(s){case"bounce":return[i0,{transformOrigin:"center bottom"}];case"flash":return[s0];case"headShake":return[o0,{animationTimingFunction:"ease-in-out"}];case"heartBeat":return[a0,{animationTimingFunction:"ease-in-out"}];case"jello":return[c0,{transformOrigin:"center"}];case"pulse":return[l0,{animationTimingFunction:"ease-in-out"}];case"rubberBand":return[u0];case"shake":return[f0];case"shakeX":return[d0];case"shakeY":return[h0];case"swing":return[p0,{transformOrigin:"top center"}];case"tada":return[g0];case"wobble":return[m0]}}const S0=s=>{const{effect:e="bounce",style:r,...t}=s,[n,i]=N.useMemo(()=>w0(e),[e]);return Ye(Gl,{keyframes:n,style:Object.assign({},r,i),...t})};E`
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
`;function T0(){const s=N.useRef(null),e=N.useRef(null);return N.useEffect(()=>{te.registerPlugin(H);const r=te.context(()=>{te.from(s.current.querySelectorAll("img"),{opacity:0,y:20,stagger:.08,duration:.6,ease:"power3.out",scrollTrigger:{trigger:s.current,start:"top 80%",once:!0}}),te.from(e.current.querySelectorAll("img"),{opacity:0,y:20,stagger:.08,duration:.6,ease:"power3.out",delay:.3,scrollTrigger:{trigger:e.current,start:"top 80%",once:!0}})});return()=>r.revert()},[]),M.jsxs("div",{ref:root,id:"about",className:"relative bg-gradient-to-b from-gradexit to-white w-full min-h-screen pb-40",children:[M.jsx(S0,{effect:"tada",triggerOnce:!0,children:M.jsx("h1",{className:"pt-30 lg:pr-215 font-intersemibold text-[60px] text-center leading-none",children:"Hi!"})}),M.jsx("h1",{className:"font-intersemibold text-[70px] sm:text-[100px] md:text-[120px] lg:text-[160px] text-center leading-none",children:"I'm Benjamin"}),M.jsx("div",{ref:s,className:"pt-20 top-100 flex flex-wrap gap-3 justify-center w-full",children:["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/lua/lua-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/latex/latex-original.svg"].map(r=>M.jsx("img",{src:r,alt:"",className:"h-10 w-10 md:h-15 md:w-15"},r))}),M.jsx("div",{ref:e,className:"pt-14 md:pt-5 top-120 flex flex-wrap gap-4 justify-center w-full",children:["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hugo/hugo-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unix/unix-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/debian/debian-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gcc/gcc-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neovim/neovim-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vim/vim-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sdl/sdl-original.svg"].map(r=>M.jsx("img",{src:r,alt:"",className:"h-10 w-10 md:h-12 md:w-12"},r))}),M.jsxs("div",{className:"pt-20 flex flex-col items-center gap-10 px-4",children:[M.jsx("p",{className:"font-interregular text-[25px] text-left max-w-4xl",children:"Hi, I’m Benjamin Lobos Lertpunyaroj, a third‑year CS student at Purdue University. I enjoy exploring how low‑level systems work, and also front‑end web design."}),M.jsx("p",{className:"font-interlight text-[25px] text-left max-w-4xl",children:"While most of my current work is focused on low‑level languages/software/tooling, my experience is far broader, going into other areas as well. Lately, I’ve found computer architecture design quite interesting and enjoy actively learning about that field."}),M.jsx("p",{className:"font-interlight text-[25px] text-left max-w-4xl",children:"I currently work as a teaching assistant for Purdue’s CS 240 course, Programming in C. There, I design and write homework assignments, midterm practices, and contribute to exam development work in LaTeX."})]})]})}const k0="/icons/github.svg",C0="/icons/link.svg",P0="/icons/amazon.svg";function O0(){const s="(min-width: 768px)",[e,r]=N.useState(()=>window.matchMedia(s).matches?.8:.5);N.useEffect(()=>{const y=window.matchMedia(s),b=({matches:x})=>r(x?.8:.5);return y.addEventListener("change",b),()=>y.removeEventListener("change",b)},[]);const t={github:k0,link:C0,amazon:P0},n=[{label:"benji's digital camera",img:"/images/digital.webp",desc:"javascript, html/css",red:"https://blobosle.com/digital/",links:[{type:"link",url:"https://blobosle.com/digital/"}]},{label:"boilerbyte",img:"/images/boilerbyte.webp",desc:"react, tailwindCSS, vite, vercel",red:"https://boilerbyte.com/",links:[{type:"link",url:"https://boilerbyte.com/"},{type:"github",url:"https://github.com/Blobosle/boilerbyte"}]},{label:"elite edge",img:"/images/elite-edge.webp",desc:"react, tailwindCSS, python, postgreSQL",red:"/eliteedge/",links:[]},{label:"chip-8 emulator/interpreter",img:"/images/chip-8.webp",desc:"C, C++ (SDL2 graphics)",red:"https://github.com/blobosle/chip-8",links:[{type:"github",url:"https://github.com/blobosle/chip-8"}]},{label:"macos neovim",img:"/images/macos-neovim.webp",desc:"bash, applescript",red:"https://github.com/Blobosle/macos-neovim",links:[{type:"github",url:"https://github.com/Blobosle/macos-neovim"}]},{label:"mintex",img:"/images/mintex.webp",desc:"latex, lua",red:"https://github.com/Blobosle/mintex.nvim",links:[{type:"github",url:"https://github.com/Blobosle/mintex.nvim"}]},{label:"unity 2d: front to back",img:"/images/unity-book.webp",desc:"technical game dev publishing",red:"https://www.amazon.com/Unity-2D-Front-Back-development-ebook/dp/B0BG1C3BZT",links:[{type:"amazon",url:"https://www.amazon.com/Unity-2D-Front-Back-development-ebook/dp/B0BG1C3BZT"}]},{label:"planet gravity",img:"/images/planet-gravity.webp",desc:"C#, unity game engine",red:"https://github.com/WayraCodes/Planet-Gravity",links:[{type:"github",url:"https://github.com/WayraCodes/Planet-Gravity"}]},{label:"interm.nvim",img:"/images/interm.webp",desc:"lua, vimscript",red:"https://github.com/your-org/interm.nvim",links:[{type:"github",url:"https://github.com/your-org/interm.nvim"}]},{label:"non-ergodic blog",img:"/images/blog.webp",desc:"hugo site, css",red:"https://blobosle.com/blog",links:[{type:"link",url:"https://blobosle.com/blog"},{type:"github",url:"https://github.com/Blobosle/Blobosle.github.io"}]}],i="/images/showcase.webp",o=450*e,a=400*e,c=16,[l,u]=N.useState({src:null,x:0,y:0,visible:!1}),[h,p]=N.useState(null),f=N.useRef(null),m=N.useRef(null);N.useEffect(()=>{!l.visible||!l.src||!m.current||(te.set(m.current,{scaleY:0,transformOrigin:"bottom center"}),te.to(m.current,{scaleY:1,duration:.2,ease:"power2.out",onComplete:()=>p(null)}))},[l.src,l.visible]),N.useEffect(()=>{l.visible&&f.current&&(te.set(f.current,{scale:.6,transformOrigin:"center center"}),te.to(f.current,{scale:1,duration:.1,ease:"power2.out"}))},[l.visible]);const d=N.useCallback(y=>()=>{y&&(f.current&&(te.killTweensOf(f.current),te.set(f.current,{scale:1})),p(l.src),u(b=>({...b,src:y,visible:!0})))},[l.src]),g=N.useCallback(y=>{if(!l.visible)return;const b=y.clientX+20,x=y.clientY+20,_=Math.min(Math.max(c,b),window.innerWidth-o-c),k=Math.min(Math.max(c,x),window.innerHeight-a-c);u(w=>({...w,x:_,y:k}))},[l.visible]),v=N.useCallback(()=>{l.visible&&(f.current?(te.killTweensOf(f.current),te.to(f.current,{scale:.6,duration:.25,ease:"power2.in",onComplete:()=>{u(y=>({...y,visible:!1,src:null})),p(null)}})):(u(y=>({...y,visible:!1,src:null})),p(null)))},[l.visible]);return M.jsxs("section",{id:"work",className:"relative bg-white w-full h-450",onMouseMove:g,children:[M.jsx("div",{className:"pt-7 inline-flex items-center gap-2 w-fit",onMouseEnter:d(i),onMouseLeave:v,children:M.jsxs("a",{href:"https://blobosle.com/showcase/",className:"inline-flex items-center group",target:"_blank",rel:"noopener noreferrer",children:[M.jsx("span",{className:"pl-13 font-intersemibold text-black text-[30px] leading-none",children:"Showcase"}),M.jsx("img",{src:nl,className:"w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"})]})}),M.jsx("h1",{className:"pointer-events-none pl-10 font-intersemibold text-black text-[90px] sm:text-[170px] leading-none",children:"My Work"}),M.jsx("ul",{className:"flex flex-col mt-8 select-none",children:n.map(({label:y,desc:b,red:x,img:_,links:k=[]})=>M.jsxs("li",{className:"relative group",children:[M.jsxs("div",{className:"grid grid-cols-2 items-center",children:[M.jsx("a",{href:x||void 0,target:x?"_blank":void 0,className:"pt-5 pb-5",onMouseEnter:d(_),onMouseLeave:v,children:M.jsx("h2",{className:"pl-10 font-interregular hover:text-gray-500 transition-colors duration-200 ease-in-out text-black text-[25px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px]",children:M.jsx("span",{className:"inline-block lg:hover:-translate-x-2 transition-transform duration-300 ease-in-out",children:y})})}),M.jsxs("div",{className:"pr-5",children:[M.jsx("p",{className:"font-interregular text-gray-400 text-[20px] text-right",children:b}),k.length>0&&M.jsx("div",{className:"flex gap-3 pt-2 justify-end",children:k.map(({type:w,url:S})=>{const C=t[w];return C?M.jsx("a",{href:S,target:"_blank",rel:"noopener noreferrer",children:M.jsx("img",{src:C,alt:`${w} icon`,className:"w-8 h-8 hover:scale-120 transition-transform"})},`${y}-${w}`):null})})]})]}),M.jsx("div",{className:"h-px w-full bg-black"})]},y))}),l.visible&&M.jsx("div",{className:"fixed z-50 pointer-events-none",style:{width:o,height:a,top:l.y,left:l.x},children:M.jsxs("div",{ref:f,className:"w-full h-full overflow-hidden rounded-2xl shadow-xl bg-white relative",children:[h&&M.jsx("img",{src:h,alt:"",className:"absolute inset-0 w-full h-full object-cover"}),l.src&&M.jsx("img",{ref:m,rel:"preload",src:l.src,alt:"Project preview",className:"absolute inset-0 w-full h-full object-cover will-change-transform"},l.src)]})})]})}function R0(){const[s,e]=N.useState(null),r=N.useRef([]),t=[{href:"https://www.linkedin.com/in/benjamin-lobos-lertpunyaroj-91509b230/",label:"→ LinkedIn"},{href:"https://github.com/Blobosle",label:"→ Github"},{href:"mailto:blobosle@gmail.com",label:"→ Email"}],n=o=>{const a=r.current[o]?.querySelectorAll(".char");a&&(te.killTweensOf(a),te.to(a,{x:()=>te.utils.random(-60,60),y:()=>te.utils.random(-50,50),rotation:()=>te.utils.random(-180,180),ease:"power3.out",duration:.6,stagger:.02}))},i=o=>{const a=r.current[o]?.querySelectorAll(".char");a&&(te.killTweensOf(a),te.to(a,{x:0,y:0,rotation:0,ease:"power3.inOut",duration:.6,stagger:.02}))};return M.jsx("div",{id:"contact",className:"flex flex-col items-center justify-center w-full bg-black h-230",children:t.map((o,a)=>{const c=s===a,l=s!==null&&!c;return M.jsx("a",{ref:u=>r.current[a]=u,href:o.href,target:"_blank",rel:"noopener noreferrer",onMouseEnter:()=>{e(a),n(a)},onMouseLeave:()=>{e(null),i(a)},className:`text-white text-center font-interregular text-[60px] md:text-[100px] transition-all duration-300
              ${c?"tracking-wider scale-105":""}
              ${l?"opacity-40":"opacity-100"}
                        `,children:o.label.split("").map((u,h)=>M.jsx("span",{className:"inline-block char whitespace-pre",children:u===" "?" ":u},h))},a)})})}function M0({size:s=32,ease:e=.15,color:r="bg-orange-500"}){if(typeof window<"u"&&window.matchMedia("(pointer: coarse)").matches)return null;const[n,i]=N.useState({x:-100,y:-100}),o=N.useRef({x:-100,y:-100}),a=N.useRef();return N.useEffect(()=>{const c=u=>{o.current={x:u.clientX-s/2,y:u.clientY-s/2}},l=()=>{i(u=>{const h=o.current.x-u.x,p=o.current.y-u.y;return{x:u.x+h*e,y:u.y+p*e}}),a.current=requestAnimationFrame(l)};return window.addEventListener("pointermove",c),l(),()=>{window.removeEventListener("pointermove",c),cancelAnimationFrame(a.current)}},[e,s]),M.jsx("div",{className:`pointer-events-none fixed top-0 left-0 z-50 rounded-full mix-blend-difference ${r} opacity-90`,style:{width:s,height:s,transform:`translate3d(${n.x}px, ${n.y}px, 0)`}})}function E0(){const[s,e]=N.useState(!1),r=N.useRef(null),t=n=>new Promise((i,o)=>{const a=new Image;a.onload=()=>i(),a.onerror=()=>o(),a.src=n});return N.useEffect(()=>{const n=()=>{Promise.all([...Sf,...Tf].map(t)).finally(()=>{requestAnimationFrame(()=>e(!0))})};if(document.readyState==="complete")n();else return window.addEventListener("load",n),()=>window.removeEventListener("load",n)},[]),N.useEffect(()=>{if(!s||!r.current)return;const n=te.timeline({defaults:{ease:"power4.inOut"}});te.set(r.current,{clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)"}),n.to(r.current,{clipPath:"polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",duration:1.2,skewX:10,rotation:3,scale:1.05}).to(r.current,{opacity:0,duration:.25,pointerEvents:"none"},"-=0.15")},[s]),M.jsxs("div",{children:[M.jsx("div",{ref:r,className:"fixed inset-0 bg-black flex items-center justify-center text-white z-[9999] select-none"}),M.jsxs(M.Fragment,{children:[M.jsx(M0,{size:32,ease:.05}),M.jsx(kf,{}),M.jsx(Gf,{}),M.jsx(ed,{}),M.jsx(T0,{}),M.jsx(O0,{}),M.jsx(R0,{})]})]})}function D0(){return M.jsx("main",{children:M.jsx(E0,{})})}Ql.createRoot(document.getElementById("root")).render(M.jsx(N.StrictMode,{children:M.jsx(D0,{})}));
