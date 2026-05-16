import{r as A,j as R,a as Jc,R as aa,c as eu}from"./devicon.min-DEp3NKOc.js";function yr(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function sl(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Nt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},An={duration:.5,overwrite:!1,delay:0},Ro,Ze,_e,Wt=1e8,de=1/Wt,Qs=Math.PI*2,tu=Qs/4,ru=0,ol=Math.sqrt,nu=Math.cos,iu=Math.sin,We=function(e){return typeof e=="string"},Se=function(e){return typeof e=="function"},Sr=function(e){return typeof e=="number"},Mo=function(e){return typeof e>"u"},dr=function(e){return typeof e=="object"},vt=function(e){return e!==!1},Eo=function(){return typeof window<"u"},Ai=function(e){return Se(e)||We(e)},al=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ot=Array.isArray,Js=/(?:-?\.?\d|\.)+/gi,ll=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Sn=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ds=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,cl=/[+-]=-?[.\d]+/,ul=/[^,'"\[\]\s]+/gi,su=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ve,nr,eo,Do,zt={},us={},fl,dl=function(e){return(us=In(e,zt))&&St},Ao=function(e,r){return console.warn("Invalid property",e,"set to",r,"Missing plugin? gsap.registerPlugin()")},mi=function(e,r){return!r&&console.warn(e)},hl=function(e,r){return e&&(zt[e]=r)&&us&&(us[e]=r)||zt},gi=function(){return 0},ou={suppressEvents:!0,isStart:!0,kill:!1},Ki={suppressEvents:!0,kill:!1},au={suppressEvents:!0},Io={},Lr=[],to={},pl,Et={},As={},la=30,Qi=[],jo="",No=function(e){var r=e[0],t,n;if(dr(r)||Se(r)||(e=[e]),!(t=(r._gsap||{}).harness)){for(n=Qi.length;n--&&!Qi[n].targetTest(r););t=Qi[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new zl(e[n],t)))||e.splice(n,1);return e},rn=function(e){return e._gsap||No(Vt(e))[0]._gsap},ml=function(e,r,t){return(t=e[r])&&Se(t)?e[r]():Mo(t)&&e.getAttribute&&e.getAttribute(r)||t},bt=function(e,r){return(e=e.split(",")).forEach(r)||e},Oe=function(e){return Math.round(e*1e5)/1e5||0},Ae=function(e){return Math.round(e*1e7)/1e7||0},Cn=function(e,r){var t=r.charAt(0),n=parseFloat(r.substr(2));return e=parseFloat(e),t==="+"?e+n:t==="-"?e-n:t==="*"?e*n:e/n},lu=function(e,r){for(var t=r.length,n=0;e.indexOf(r[n])<0&&++n<t;);return n<t},fs=function(){var e=Lr.length,r=Lr.slice(0),t,n;for(to={},Lr.length=0,t=0;t<e;t++)n=r[t],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Lo=function(e){return!!(e._initted||e._startAt||e.add)},gl=function(e,r,t,n){Lr.length&&!Ze&&fs(),e.render(r,t,!!(Ze&&r<0&&Lo(e))),Lr.length&&!Ze&&fs()},_l=function(e){var r=parseFloat(e);return(r||r===0)&&(e+"").match(ul).length<2?r:We(e)?e.trim():e},yl=function(e){return e},$t=function(e,r){for(var t in r)t in e||(e[t]=r[t]);return e},cu=function(e){return function(r,t){for(var n in t)n in r||n==="duration"&&e||n==="ease"||(r[n]=t[n])}},In=function(e,r){for(var t in r)e[t]=r[t];return e},ca=function s(e,r){for(var t in r)t!=="__proto__"&&t!=="constructor"&&t!=="prototype"&&(e[t]=dr(r[t])?s(e[t]||(e[t]={}),r[t]):r[t]);return e},ds=function(e,r){var t={},n;for(n in e)n in r||(t[n]=e[n]);return t},ni=function(e){var r=e.parent||ve,t=e.keyframes?cu(ot(e.keyframes)):$t;if(vt(e.inherit))for(;r;)t(e,r.vars.defaults),r=r.parent||r._dp;return e},uu=function(e,r){for(var t=e.length,n=t===r.length;n&&t--&&e[t]===r[t];);return t<0},vl=function(e,r,t,n,i){var o=e[n],a;if(i)for(a=r[i];o&&o[i]>a;)o=o._prev;return o?(r._next=o._next,o._next=r):(r._next=e[t],e[t]=r),r._next?r._next._prev=r:e[n]=r,r._prev=o,r.parent=r._dp=e,r},Ss=function(e,r,t,n){t===void 0&&(t="_first"),n===void 0&&(n="_last");var i=r._prev,o=r._next;i?i._next=o:e[t]===r&&(e[t]=o),o?o._prev=i:e[n]===r&&(e[n]=i),r._next=r._prev=r.parent=null},Fr=function(e,r){e.parent&&(!r||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},nn=function(e,r){if(e&&(!r||r._end>e._dur||r._start<0))for(var t=e;t;)t._dirty=1,t=t.parent;return e},fu=function(e){for(var r=e.parent;r&&r.parent;)r._dirty=1,r.totalDuration(),r=r.parent;return e},ro=function(e,r,t,n){return e._startAt&&(Ze?e._startAt.revert(Ki):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(r,!0,n))},du=function s(e){return!e||e._ts&&s(e.parent)},ua=function(e){return e._repeat?jn(e._tTime,e=e.duration()+e._rDelay)*e:0},jn=function(e,r){var t=Math.floor(e=Ae(e/r));return e&&t===e?t-1:t},hs=function(e,r){return(e-r._start)*r._ts+(r._ts>=0?0:r._dirty?r.totalDuration():r._tDur)},Ts=function(e){return e._end=Ae(e._start+(e._tDur/Math.abs(e._ts||e._rts||de)||0))},ks=function(e,r){var t=e._dp;return t&&t.smoothChildTiming&&e._ts&&(e._start=Ae(t._time-(e._ts>0?r/e._ts:((e._dirty?e.totalDuration():e._tDur)-r)/-e._ts)),Ts(e),t._dirty||nn(t,e)),e},bl=function(e,r){var t;if((r._time||!r._dur&&r._initted||r._start<e._time&&(r._dur||!r.add))&&(t=hs(e.rawTime(),r),(!r._dur||Oi(0,r.totalDuration(),t)-r._tTime>de)&&r.render(t,!0)),nn(e,r)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(t=e;t._dp;)t.rawTime()>=0&&t.totalTime(t._tTime),t=t._dp;e._zTime=-de}},ar=function(e,r,t,n){return r.parent&&Fr(r),r._start=Ae((Sr(t)?t:t||e!==ve?Bt(e,t,r):e._time)+r._delay),r._end=Ae(r._start+(r.totalDuration()/Math.abs(r.timeScale())||0)),vl(e,r,"_first","_last",e._sort?"_start":0),no(r)||(e._recent=r),n||bl(e,r),e._ts<0&&ks(e,e._tTime),e},xl=function(e,r){return(zt.ScrollTrigger||Ao("scrollTrigger",r))&&zt.ScrollTrigger.create(r,e)},wl=function(e,r,t,n,i){if($o(e,r,i),!e._initted)return 1;if(!t&&e._pt&&!Ze&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&pl!==At.frame)return Lr.push(e),e._lazy=[i,n],1},hu=function s(e){var r=e.parent;return r&&r._ts&&r._initted&&!r._lock&&(r.rawTime()<0||s(r))},no=function(e){var r=e.data;return r==="isFromStart"||r==="isStart"},pu=function(e,r,t,n){var i=e.ratio,o=r<0||!r&&(!e._start&&hu(e)&&!(!e._initted&&no(e))||(e._ts<0||e._dp._ts<0)&&!no(e))?0:1,a=e._rDelay,l=0,c,u,d;if(a&&e._repeat&&(l=Oi(0,e._tDur,r),u=jn(l,a),e._yoyo&&u&1&&(o=1-o),u!==jn(e._tTime,a)&&(i=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==i||Ze||n||e._zTime===de||!r&&e._zTime){if(!e._initted&&wl(e,r,n,t,l))return;for(d=e._zTime,e._zTime=r||(t?de:0),t||(t=r&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;r<0&&ro(e,r,t,!0),e._onUpdate&&!t&&jt(e,"onUpdate"),l&&e._repeat&&!t&&e.parent&&jt(e,"onRepeat"),(r>=e._tDur||r<0)&&e.ratio===o&&(o&&Fr(e,1),!t&&!Ze&&(jt(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=r)},mu=function(e,r,t){var n;if(t>r)for(n=e._first;n&&n._start<=t;){if(n.data==="isPause"&&n._start>r)return n;n=n._next}else for(n=e._last;n&&n._start>=t;){if(n.data==="isPause"&&n._start<r)return n;n=n._prev}},Nn=function(e,r,t,n){var i=e._repeat,o=Ae(r)||0,a=e._tTime/e._tDur;return a&&!n&&(e._time*=o/e._dur),e._dur=o,e._tDur=i?i<0?1e10:Ae(o*(i+1)+e._rDelay*i):o,a>0&&!n&&ks(e,e._tTime=e._tDur*a),e.parent&&Ts(e),t||nn(e.parent,e),e},fa=function(e){return e instanceof pt?nn(e):Nn(e,e._dur)},gu={_start:0,endTime:gi,totalDuration:gi},Bt=function s(e,r,t){var n=e.labels,i=e._recent||gu,o=e.duration()>=Wt?i.endTime(!1):e._dur,a,l,c;return We(r)&&(isNaN(r)||r in n)?(l=r.charAt(0),c=r.substr(-1)==="%",a=r.indexOf("="),l==="<"||l===">"?(a>=0&&(r=r.replace(/=/,"")),(l==="<"?i._start:i.endTime(i._repeat>=0))+(parseFloat(r.substr(1))||0)*(c?(a<0?i:t).totalDuration()/100:1)):a<0?(r in n||(n[r]=o),n[r]):(l=parseFloat(r.charAt(a-1)+r.substr(a+1)),c&&t&&(l=l/100*(ot(t)?t[0]:t).totalDuration()),a>1?s(e,r.substr(0,a-1),t)+l:o+l)):r==null?o:+r},ii=function(e,r,t){var n=Sr(r[1]),i=(n?2:1)+(e<2?0:1),o=r[i],a,l;if(n&&(o.duration=r[1]),o.parent=t,e){for(a=o,l=t;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=vt(l.vars.inherit)&&l.parent;o.immediateRender=vt(a.immediateRender),e<2?o.runBackwards=1:o.startAt=r[i-1]}return new De(r[0],o,r[i+1])},Xr=function(e,r){return e||e===0?r(e):r},Oi=function(e,r,t){return t<e?e:t>r?r:t},it=function(e,r){return!We(e)||!(r=su.exec(e))?"":r[1]},_u=function(e,r,t){return Xr(t,function(n){return Oi(e,r,n)})},io=[].slice,Sl=function(e,r){return e&&dr(e)&&"length"in e&&(!r&&!e.length||e.length-1 in e&&dr(e[0]))&&!e.nodeType&&e!==nr},yu=function(e,r,t){return t===void 0&&(t=[]),e.forEach(function(n){var i;return We(n)&&!r||Sl(n,1)?(i=t).push.apply(i,Vt(n)):t.push(n)})||t},Vt=function(e,r,t){return _e&&!r&&_e.selector?_e.selector(e):We(e)&&!t&&(eo||!Ln())?io.call((r||Do).querySelectorAll(e),0):ot(e)?yu(e,t):Sl(e)?io.call(e,0):e?[e]:[]},so=function(e){return e=Vt(e)[0]||mi("Invalid scope")||{},function(r){var t=e.current||e.nativeElement||e;return Vt(r,t.querySelectorAll?t:t===e?mi("Invalid scope")||Do.createElement("div"):e)}},Tl=function(e){return e.sort(function(){return .5-Math.random()})},kl=function(e){if(Se(e))return e;var r=dr(e)?e:{each:e},t=sn(r.ease),n=r.from||0,i=parseFloat(r.base)||0,o={},a=n>0&&n<1,l=isNaN(n)||a,c=r.axis,u=n,d=n;return We(n)?u=d={center:.5,edges:.5,end:1}[n]||0:!a&&l&&(u=n[0],d=n[1]),function(p,h,g){var f=(g||r).length,m=o[f],b,y,x,w,_,C,v,S,k;if(!m){if(k=r.grid==="auto"?0:(r.grid||[1,Wt])[1],!k){for(v=-Wt;v<(v=g[k++].getBoundingClientRect().left)&&k<f;);k<f&&k--}for(m=o[f]=[],b=l?Math.min(k,f)*u-.5:n%k,y=k===Wt?0:l?f*d/k-.5:n/k|0,v=0,S=Wt,C=0;C<f;C++)x=C%k-b,w=y-(C/k|0),m[C]=_=c?Math.abs(c==="y"?w:x):ol(x*x+w*w),_>v&&(v=_),_<S&&(S=_);n==="random"&&Tl(m),m.max=v-S,m.min=S,m.v=f=(parseFloat(r.amount)||parseFloat(r.each)*(k>f?f-1:c?c==="y"?f/k:k:Math.max(k,f/k))||0)*(n==="edges"?-1:1),m.b=f<0?i-f:i,m.u=it(r.amount||r.each)||0,t=t&&f<0?jl(t):t}return f=(m[p]-m.min)/m.max||0,Ae(m.b+(t?t(f):f)*m.v)+m.u}},oo=function(e){var r=Math.pow(10,((e+"").split(".")[1]||"").length);return function(t){var n=Ae(Math.round(parseFloat(t)/e)*e*r);return(n-n%1)/r+(Sr(t)?0:it(t))}},Cl=function(e,r){var t=ot(e),n,i;return!t&&dr(e)&&(n=t=e.radius||Wt,e.values?(e=Vt(e.values),(i=!Sr(e[0]))&&(n*=n)):e=oo(e.increment)),Xr(r,t?Se(e)?function(o){return i=e(o),Math.abs(i-o)<=n?i:o}:function(o){for(var a=parseFloat(i?o.x:o),l=parseFloat(i?o.y:0),c=Wt,u=0,d=e.length,p,h;d--;)i?(p=e[d].x-a,h=e[d].y-l,p=p*p+h*h):p=Math.abs(e[d]-a),p<c&&(c=p,u=d);return u=!n||c<=n?e[u]:o,i||u===o||Sr(o)?u:u+it(o)}:oo(e))},Pl=function(e,r,t,n){return Xr(ot(e)?!r:t===!0?!!(t=0):!n,function(){return ot(e)?e[~~(Math.random()*e.length)]:(t=t||1e-5)&&(n=t<1?Math.pow(10,(t+"").length-2):1)&&Math.floor(Math.round((e-t/2+Math.random()*(r-e+t*.99))/t)*t*n)/n})},vu=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(n){return r.reduce(function(i,o){return o(i)},n)}},bu=function(e,r){return function(t){return e(parseFloat(t))+(r||it(t))}},xu=function(e,r,t){return Rl(e,r,0,1,t)},Ol=function(e,r,t){return Xr(t,function(n){return e[~~r(n)]})},wu=function s(e,r,t){var n=r-e;return ot(e)?Ol(e,s(0,e.length),r):Xr(t,function(i){return(n+(i-e)%n)%n+e})},Su=function s(e,r,t){var n=r-e,i=n*2;return ot(e)?Ol(e,s(0,e.length-1),r):Xr(t,function(o){return o=(i+(o-e)%i)%i||0,e+(o>n?i-o:o)})},_i=function(e){for(var r=0,t="",n,i,o,a;~(n=e.indexOf("random(",r));)o=e.indexOf(")",n),a=e.charAt(n+7)==="[",i=e.substr(n+7,o-n-7).match(a?ul:Js),t+=e.substr(r,n-r)+Pl(a?i:+i[0],a?0:+i[1],+i[2]||1e-5),r=o+1;return t+e.substr(r,e.length-r)},Rl=function(e,r,t,n,i){var o=r-e,a=n-t;return Xr(i,function(l){return t+((l-e)/o*a||0)})},Tu=function s(e,r,t,n){var i=isNaN(e+r)?0:function(h){return(1-h)*e+h*r};if(!i){var o=We(e),a={},l,c,u,d,p;if(t===!0&&(n=1)&&(t=null),o)e={p:e},r={p:r};else if(ot(e)&&!ot(r)){for(u=[],d=e.length,p=d-2,c=1;c<d;c++)u.push(s(e[c-1],e[c]));d--,i=function(g){g*=d;var f=Math.min(p,~~g);return u[f](g-f)},t=r}else n||(e=In(ot(e)?[]:{},e));if(!u){for(l in r)zo.call(a,e,l,"get",r[l]);i=function(g){return Yo(g,a)||(o?e.p:e)}}}return Xr(t,i)},da=function(e,r,t){var n=e.labels,i=Wt,o,a,l;for(o in n)a=n[o]-r,a<0==!!t&&a&&i>(a=Math.abs(a))&&(l=o,i=a);return l},jt=function(e,r,t){var n=e.vars,i=n[r],o=_e,a=e._ctx,l,c,u;if(i)return l=n[r+"Params"],c=n.callbackScope||e,t&&Lr.length&&fs(),a&&(_e=a),u=l?i.apply(c,l):i.call(c),_e=o,u},Zn=function(e){return Fr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ze),e.progress()<1&&jt(e,"onInterrupt"),e},Tn,Ml=[],El=function(e){if(e)if(e=!e.name&&e.default||e,Eo()||e.headless){var r=e.name,t=Se(e),n=r&&!t&&e.init?function(){this._props=[]}:e,i={init:gi,render:Yo,add:zo,kill:Fu,modifier:$u,rawVars:0},o={targetTest:0,get:0,getSetter:Bo,aliases:{},register:0};if(Ln(),e!==n){if(Et[r])return;$t(n,$t(ds(e,i),o)),In(n.prototype,In(i,ds(e,o))),Et[n.prop=r]=n,e.targetTest&&(Qi.push(n),Io[r]=1),r=(r==="css"?"CSS":r.charAt(0).toUpperCase()+r.substr(1))+"Plugin"}hl(r,n),e.register&&e.register(St,n,xt)}else Ml.push(e)},fe=255,Kn={aqua:[0,fe,fe],lime:[0,fe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,fe],navy:[0,0,128],white:[fe,fe,fe],olive:[128,128,0],yellow:[fe,fe,0],orange:[fe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[fe,0,0],pink:[fe,192,203],cyan:[0,fe,fe],transparent:[fe,fe,fe,0]},Is=function(e,r,t){return e+=e<0?1:e>1?-1:0,(e*6<1?r+(t-r)*e*6:e<.5?t:e*3<2?r+(t-r)*(2/3-e)*6:r)*fe+.5|0},Dl=function(e,r,t){var n=e?Sr(e)?[e>>16,e>>8&fe,e&fe]:0:Kn.black,i,o,a,l,c,u,d,p,h,g;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Kn[e])n=Kn[e];else if(e.charAt(0)==="#"){if(e.length<6&&(i=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+i+i+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&fe,n&fe,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&fe,e&fe]}else if(e.substr(0,3)==="hsl"){if(n=g=e.match(Js),!r)l=+n[0]%360/360,c=+n[1]/100,u=+n[2]/100,o=u<=.5?u*(c+1):u+c-u*c,i=u*2-o,n.length>3&&(n[3]*=1),n[0]=Is(l+1/3,i,o),n[1]=Is(l,i,o),n[2]=Is(l-1/3,i,o);else if(~e.indexOf("="))return n=e.match(ll),t&&n.length<4&&(n[3]=1),n}else n=e.match(Js)||Kn.transparent;n=n.map(Number)}return r&&!g&&(i=n[0]/fe,o=n[1]/fe,a=n[2]/fe,d=Math.max(i,o,a),p=Math.min(i,o,a),u=(d+p)/2,d===p?l=c=0:(h=d-p,c=u>.5?h/(2-d-p):h/(d+p),l=d===i?(o-a)/h+(o<a?6:0):d===o?(a-i)/h+2:(i-o)/h+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(u*100+.5)),t&&n.length<4&&(n[3]=1),n},Al=function(e){var r=[],t=[],n=-1;return e.split(zr).forEach(function(i){var o=i.match(Sn)||[];r.push.apply(r,o),t.push(n+=o.length+1)}),r.c=t,r},ha=function(e,r,t){var n="",i=(e+n).match(zr),o=r?"hsla(":"rgba(",a=0,l,c,u,d;if(!i)return e;if(i=i.map(function(p){return(p=Dl(p,r,1))&&o+(r?p[0]+","+p[1]+"%,"+p[2]+"%,"+p[3]:p.join(","))+")"}),t&&(u=Al(e),l=t.c,l.join(n)!==u.c.join(n)))for(c=e.replace(zr,"1").split(Sn),d=c.length-1;a<d;a++)n+=c[a]+(~l.indexOf(a)?i.shift()||o+"0,0,0,0)":(u.length?u:i.length?i:t).shift());if(!c)for(c=e.split(zr),d=c.length-1;a<d;a++)n+=c[a]+i[a];return n+c[d]},zr=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Kn)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),ku=/hsl[a]?\(/,Il=function(e){var r=e.join(" "),t;if(zr.lastIndex=0,zr.test(r))return t=ku.test(r),e[1]=ha(e[1],t),e[0]=ha(e[0],t,Al(e[1])),!0},yi,At=function(){var s=Date.now,e=500,r=33,t=s(),n=t,i=1e3/240,o=i,a=[],l,c,u,d,p,h,g=function f(m){var b=s()-n,y=m===!0,x,w,_,C;if((b>e||b<0)&&(t+=b-r),n+=b,_=n-t,x=_-o,(x>0||y)&&(C=++d.frame,p=_-d.time*1e3,d.time=_=_/1e3,o+=x+(x>=i?4:i-x),w=1),y||(l=c(f)),w)for(h=0;h<a.length;h++)a[h](_,p,C,m)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return p/(1e3/(m||60))},wake:function(){fl&&(!eo&&Eo()&&(nr=eo=window,Do=nr.document||{},zt.gsap=St,(nr.gsapVersions||(nr.gsapVersions=[])).push(St.version),dl(us||nr.GreenSockGlobals||!nr.gsap&&nr||{}),Ml.forEach(El)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(m){return setTimeout(m,o-d.time*1e3+1|0)},yi=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),yi=0,c=gi},lagSmoothing:function(m,b){e=m||1/0,r=Math.min(b||33,e)},fps:function(m){i=1e3/(m||240),o=d.time*1e3+i},add:function(m,b,y){var x=b?function(w,_,C,v){m(w,_,C,v),d.remove(x)}:m;return d.remove(m),a[y?"unshift":"push"](x),Ln(),x},remove:function(m,b){~(b=a.indexOf(m))&&a.splice(b,1)&&h>=b&&h--},_listeners:a},d}(),Ln=function(){return!yi&&At.wake()},J={},Cu=/^[\d.\-M][\d.\-,\s]/,Pu=/["']/g,Ou=function(e){for(var r={},t=e.substr(1,e.length-3).split(":"),n=t[0],i=1,o=t.length,a,l,c;i<o;i++)l=t[i],a=i!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),r[n]=isNaN(c)?c.replace(Pu,"").trim():+c,n=l.substr(a+1).trim();return r},Ru=function(e){var r=e.indexOf("(")+1,t=e.indexOf(")"),n=e.indexOf("(",r);return e.substring(r,~n&&n<t?e.indexOf(")",t+1):t)},Mu=function(e){var r=(e+"").split("("),t=J[r[0]];return t&&r.length>1&&t.config?t.config.apply(null,~e.indexOf("{")?[Ou(r[1])]:Ru(e).split(",").map(_l)):J._CE&&Cu.test(e)?J._CE("",e):t},jl=function(e){return function(r){return 1-e(1-r)}},Nl=function s(e,r){for(var t=e._first,n;t;)t instanceof pt?s(t,r):t.vars.yoyoEase&&(!t._yoyo||!t._repeat)&&t._yoyo!==r&&(t.timeline?s(t.timeline,r):(n=t._ease,t._ease=t._yEase,t._yEase=n,t._yoyo=r)),t=t._next},sn=function(e,r){return e&&(Se(e)?e:J[e]||Mu(e))||r},pn=function(e,r,t,n){t===void 0&&(t=function(l){return 1-r(1-l)}),n===void 0&&(n=function(l){return l<.5?r(l*2)/2:1-r((1-l)*2)/2});var i={easeIn:r,easeOut:t,easeInOut:n},o;return bt(e,function(a){J[a]=zt[a]=i,J[o=a.toLowerCase()]=t;for(var l in i)J[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=J[a+"."+l]=i[l]}),i},Ll=function(e){return function(r){return r<.5?(1-e(1-r*2))/2:.5+e((r-.5)*2)/2}},js=function s(e,r,t){var n=r>=1?r:1,i=(t||(e?.3:.45))/(r<1?r:1),o=i/Qs*(Math.asin(1/n)||0),a=function(u){return u===1?1:n*Math.pow(2,-10*u)*iu((u-o)*i)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Ll(a);return i=Qs/i,l.config=function(c,u){return s(e,c,u)},l},Ns=function s(e,r){r===void 0&&(r=1.70158);var t=function(o){return o?--o*o*((r+1)*o+r)+1:0},n=e==="out"?t:e==="in"?function(i){return 1-t(1-i)}:Ll(t);return n.config=function(i){return s(e,i)},n};bt("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var r=e<5?e+1:e;pn(s+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(t*2,r)/2:1-Math.pow((1-t)*2,r)/2})});J.Linear.easeNone=J.none=J.Linear.easeIn;pn("Elastic",js("in"),js("out"),js());(function(s,e){var r=1/e,t=2*r,n=2.5*r,i=function(a){return a<r?s*a*a:a<t?s*Math.pow(a-1.5/e,2)+.75:a<n?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};pn("Bounce",function(o){return 1-i(1-o)},i)})(7.5625,2.75);pn("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});pn("Circ",function(s){return-(ol(1-s*s)-1)});pn("Sine",function(s){return s===1?1:-nu(s*tu)+1});pn("Back",Ns("in"),Ns("out"),Ns());J.SteppedEase=J.steps=zt.SteppedEase={config:function(e,r){e===void 0&&(e=1);var t=1/e,n=e+(r?0:1),i=r?1:0,o=1-de;return function(a){return((n*Oi(0,o,a)|0)+i)*t}}};An.ease=J["quad.out"];bt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return jo+=s+","+s+"Params,"});var zl=function(e,r){this.id=ru++,e._gsap=this,this.target=e,this.harness=r,this.get=r?r.get:ml,this.set=r?r.getSetter:Bo},vi=function(){function s(r){this.vars=r,this._delay=+r.delay||0,(this._repeat=r.repeat===1/0?-2:r.repeat||0)&&(this._rDelay=r.repeatDelay||0,this._yoyo=!!r.yoyo||!!r.yoyoEase),this._ts=1,Nn(this,+r.duration,1,1),this.data=r.data,_e&&(this._ctx=_e,_e.data.push(this)),yi||At.wake()}var e=s.prototype;return e.delay=function(t){return t||t===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},e.duration=function(t){return arguments.length?this.totalDuration(this._repeat>0?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},e.totalDuration=function(t){return arguments.length?(this._dirty=0,Nn(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(t,n){if(Ln(),!arguments.length)return this._tTime;var i=this._dp;if(i&&i.smoothChildTiming&&this._ts){for(ks(this,t),!i._dp||i.parent||bl(i,this);i&&i.parent;)i.parent._time!==i._start+(i._ts>=0?i._tTime/i._ts:(i.totalDuration()-i._tTime)/-i._ts)&&i.totalTime(i._tTime,!0),i=i.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&t<this._tDur||this._ts<0&&t>0||!this._tDur&&!t)&&ar(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===de||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),gl(this,t,n)),this},e.time=function(t,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+ua(this))%(this._dur+this._rDelay)||(t?this._dur:0),n):this._time},e.totalProgress=function(t,n){return arguments.length?this.totalTime(this.totalDuration()*t,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(t,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-t:t)+ua(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(t,n){var i=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*i,n):this._repeat?jn(this._tTime,i)+1:1},e.timeScale=function(t,n){if(!arguments.length)return this._rts===-de?0:this._rts;if(this._rts===t)return this;var i=this.parent&&this._ts?hs(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-de?0:this._rts,this.totalTime(Oi(-Math.abs(this._delay),this.totalDuration(),i),n!==!1),Ts(this),fu(this)},e.paused=function(t){return arguments.length?(this._ps!==t&&(this._ps=t,t?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ln(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==de&&(this._tTime-=de)))),this):this._ps},e.startTime=function(t){if(arguments.length){this._start=t;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&ar(n,this,t-this._delay),this}return this._start},e.endTime=function(t){return this._start+(vt(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(t){var n=this.parent||this._dp;return n?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?hs(n.rawTime(t),this):this._tTime:this._tTime},e.revert=function(t){t===void 0&&(t=au);var n=Ze;return Ze=t,Lo(this)&&(this.timeline&&this.timeline.revert(t),this.totalTime(-.01,t.suppressEvents)),this.data!=="nested"&&t.kill!==!1&&this.kill(),Ze=n,this},e.globalTime=function(t){for(var n=this,i=arguments.length?t:n.rawTime();n;)i=n._start+i/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(t):i},e.repeat=function(t){return arguments.length?(this._repeat=t===1/0?-2:t,fa(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(t){if(arguments.length){var n=this._time;return this._rDelay=t,fa(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},e.seek=function(t,n){return this.totalTime(Bt(this,t),vt(n))},e.restart=function(t,n){return this.play().totalTime(t?-this._delay:0,vt(n)),this._dur||(this._zTime=-de),this},e.play=function(t,n){return t!=null&&this.seek(t,n),this.reversed(!1).paused(!1)},e.reverse=function(t,n){return t!=null&&this.seek(t||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(t,n){return t!=null&&this.seek(t,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-de:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-de,this},e.isActive=function(){var t=this.parent||this._dp,n=this._start,i;return!!(!t||this._ts&&this._initted&&t.isActive()&&(i=t.rawTime(!0))>=n&&i<this.endTime(!0)-de)},e.eventCallback=function(t,n,i){var o=this.vars;return arguments.length>1?(n?(o[t]=n,i&&(o[t+"Params"]=i),t==="onUpdate"&&(this._onUpdate=n)):delete o[t],this):o[t]},e.then=function(t){var n=this;return new Promise(function(i){var o=Se(t)?t:yl,a=function(){var c=n.then;n.then=null,Se(o)&&(o=o(n))&&(o.then||o===n)&&(n.then=c),i(o),n.then=c};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?a():n._prom=a})},e.kill=function(){Zn(this)},s}();$t(vi.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-de,_prom:0,_ps:!1,_rts:1});var pt=function(s){sl(e,s);function e(t,n){var i;return t===void 0&&(t={}),i=s.call(this,t)||this,i.labels={},i.smoothChildTiming=!!t.smoothChildTiming,i.autoRemoveChildren=!!t.autoRemoveChildren,i._sort=vt(t.sortChildren),ve&&ar(t.parent||ve,yr(i),n),t.reversed&&i.reverse(),t.paused&&i.paused(!0),t.scrollTrigger&&xl(yr(i),t.scrollTrigger),i}var r=e.prototype;return r.to=function(n,i,o){return ii(0,arguments,this),this},r.from=function(n,i,o){return ii(1,arguments,this),this},r.fromTo=function(n,i,o,a){return ii(2,arguments,this),this},r.set=function(n,i,o){return i.duration=0,i.parent=this,ni(i).repeatDelay||(i.repeat=0),i.immediateRender=!!i.immediateRender,new De(n,i,Bt(this,o),1),this},r.call=function(n,i,o){return ar(this,De.delayedCall(0,n,i),o)},r.staggerTo=function(n,i,o,a,l,c,u){return o.duration=i,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new De(n,o,Bt(this,l)),this},r.staggerFrom=function(n,i,o,a,l,c,u){return o.runBackwards=1,ni(o).immediateRender=vt(o.immediateRender),this.staggerTo(n,i,o,a,l,c,u)},r.staggerFromTo=function(n,i,o,a,l,c,u,d){return a.startAt=o,ni(a).immediateRender=vt(a.immediateRender),this.staggerTo(n,i,a,l,c,u,d)},r.render=function(n,i,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=n<=0?0:Ae(n),d=this._zTime<0!=n<0&&(this._initted||!c),p,h,g,f,m,b,y,x,w,_,C,v;if(this!==ve&&u>l&&n>=0&&(u=l),u!==this._tTime||o||d){if(a!==this._time&&c&&(u+=this._time-a,n+=this._time-a),p=u,w=this._start,x=this._ts,b=!x,d&&(c||(a=this._zTime),(n||!i)&&(this._zTime=n)),this._repeat){if(C=this._yoyo,m=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(m*100+n,i,o);if(p=Ae(u%m),u===l?(f=this._repeat,p=c):(_=Ae(u/m),f=~~_,f&&f===_&&(p=c,f--),p>c&&(p=c)),_=jn(this._tTime,m),!a&&this._tTime&&_!==f&&this._tTime-_*m-this._dur<=0&&(_=f),C&&f&1&&(p=c-p,v=1),f!==_&&!this._lock){var S=C&&_&1,k=S===(C&&f&1);if(f<_&&(S=!S),a=S?0:u%c?c:u,this._lock=1,this.render(a||(v?0:Ae(f*m)),i,!c)._lock=0,this._tTime=u,!i&&this.parent&&jt(this,"onRepeat"),this.vars.repeatRefresh&&!v&&(this.invalidate()._lock=1),a&&a!==this._time||b!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,k&&(this._lock=2,a=S?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!v&&this.invalidate()),this._lock=0,!this._ts&&!b)return this;Nl(this,v)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=mu(this,Ae(a),Ae(p)),y&&(u-=p-(p=y._start))),this._tTime=u,this._time=p,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,a=0),!a&&u&&!i&&!_&&(jt(this,"onStart"),this._tTime!==u))return this;if(p>=a&&n>=0)for(h=this._first;h;){if(g=h._next,(h._act||p>=h._start)&&h._ts&&y!==h){if(h.parent!==this)return this.render(n,i,o);if(h.render(h._ts>0?(p-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(p-h._start)*h._ts,i,o),p!==this._time||!this._ts&&!b){y=0,g&&(u+=this._zTime=-de);break}}h=g}else{h=this._last;for(var O=n<0?n:p;h;){if(g=h._prev,(h._act||O<=h._end)&&h._ts&&y!==h){if(h.parent!==this)return this.render(n,i,o);if(h.render(h._ts>0?(O-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(O-h._start)*h._ts,i,o||Ze&&Lo(h)),p!==this._time||!this._ts&&!b){y=0,g&&(u+=this._zTime=O?-de:de);break}}h=g}}if(y&&!i&&(this.pause(),y.render(p>=a?0:-de)._zTime=p>=a?1:-1,this._ts))return this._start=w,Ts(this),this.render(n,i,o);this._onUpdate&&!i&&jt(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(w===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Fr(this,1),!i&&!(n<0&&!a)&&(u||a||!l)&&(jt(this,u===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},r.add=function(n,i){var o=this;if(Sr(i)||(i=Bt(this,i,n)),!(n instanceof vi)){if(ot(n))return n.forEach(function(a){return o.add(a,i)}),this;if(We(n))return this.addLabel(n,i);if(Se(n))n=De.delayedCall(0,n);else return this}return this!==n?ar(this,n,i):this},r.getChildren=function(n,i,o,a){n===void 0&&(n=!0),i===void 0&&(i=!0),o===void 0&&(o=!0),a===void 0&&(a=-Wt);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof De?i&&l.push(c):(o&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,i,o)))),c=c._next;return l},r.getById=function(n){for(var i=this.getChildren(1,1,1),o=i.length;o--;)if(i[o].vars.id===n)return i[o]},r.remove=function(n){return We(n)?this.removeLabel(n):Se(n)?this.killTweensOf(n):(n.parent===this&&Ss(this,n),n===this._recent&&(this._recent=this._last),nn(this))},r.totalTime=function(n,i){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ae(At.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),s.prototype.totalTime.call(this,n,i),this._forcing=0,this):this._tTime},r.addLabel=function(n,i){return this.labels[n]=Bt(this,i),this},r.removeLabel=function(n){return delete this.labels[n],this},r.addPause=function(n,i,o){var a=De.delayedCall(0,i||gi,o);return a.data="isPause",this._hasPause=1,ar(this,a,Bt(this,n))},r.removePause=function(n){var i=this._first;for(n=Bt(this,n);i;)i._start===n&&i.data==="isPause"&&Fr(i),i=i._next},r.killTweensOf=function(n,i,o){for(var a=this.getTweensOf(n,o),l=a.length;l--;)Dr!==a[l]&&a[l].kill(n,i);return this},r.getTweensOf=function(n,i){for(var o=[],a=Vt(n),l=this._first,c=Sr(i),u;l;)l instanceof De?lu(l._targets,a)&&(c?(!Dr||l._initted&&l._ts)&&l.globalTime(0)<=i&&l.globalTime(l.totalDuration())>i:!i||l.isActive())&&o.push(l):(u=l.getTweensOf(a,i)).length&&o.push.apply(o,u),l=l._next;return o},r.tweenTo=function(n,i){i=i||{};var o=this,a=Bt(o,n),l=i,c=l.startAt,u=l.onStart,d=l.onStartParams,p=l.immediateRender,h,g=De.to(o,$t({ease:i.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:i.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||de,onStart:function(){if(o.pause(),!h){var m=i.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Nn(g,m,0,1).render(g._time,!0,!0),h=1}u&&u.apply(g,d||[])}},i));return p?g.render(0):g},r.tweenFromTo=function(n,i,o){return this.tweenTo(i,$t({startAt:{time:Bt(this,n)}},o))},r.recent=function(){return this._recent},r.nextLabel=function(n){return n===void 0&&(n=this._time),da(this,Bt(this,n))},r.previousLabel=function(n){return n===void 0&&(n=this._time),da(this,Bt(this,n),1)},r.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+de)},r.shiftChildren=function(n,i,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=n,a._end+=n),a=a._next;if(i)for(c in l)l[c]>=o&&(l[c]+=n);return nn(this)},r.invalidate=function(n){var i=this._first;for(this._lock=0;i;)i.invalidate(n),i=i._next;return s.prototype.invalidate.call(this,n)},r.clear=function(n){n===void 0&&(n=!0);for(var i=this._first,o;i;)o=i._next,this.remove(i),i=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),nn(this)},r.totalDuration=function(n){var i=0,o=this,a=o._last,l=Wt,c,u,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ar(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(i-=u,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>i&&a._ts&&(i=a._end),a=c;Nn(o,o===ve&&o._time>i?o._time:i,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(n){if(ve._ts&&(gl(ve,hs(n,ve)),pl=At.frame),At.frame>=la){la+=Nt.autoSleep||120;var i=ve._first;if((!i||!i._ts)&&Nt.autoSleep&&At._listeners.length<2){for(;i&&!i._ts;)i=i._next;i||At.sleep()}}},e}(vi);$t(pt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Eu=function(e,r,t,n,i,o,a){var l=new xt(this._pt,e,r,0,1,Wl,null,i),c=0,u=0,d,p,h,g,f,m,b,y;for(l.b=t,l.e=n,t+="",n+="",(b=~n.indexOf("random("))&&(n=_i(n)),o&&(y=[t,n],o(y,e,r),t=y[0],n=y[1]),p=t.match(Ds)||[];d=Ds.exec(n);)g=d[0],f=n.substring(c,d.index),h?h=(h+1)%5:f.substr(-5)==="rgba("&&(h=1),g!==p[u++]&&(m=parseFloat(p[u-1])||0,l._pt={_next:l._pt,p:f||u===1?f:",",s:m,c:g.charAt(1)==="="?Cn(m,g)-m:parseFloat(g)-m,m:h&&h<4?Math.round:0},c=Ds.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=a,(cl.test(n)||b)&&(l.e=0),this._pt=l,l},zo=function(e,r,t,n,i,o,a,l,c,u){Se(n)&&(n=n(i||0,e,o));var d=e[r],p=t!=="get"?t:Se(d)?c?e[r.indexOf("set")||!Se(e["get"+r.substr(3)])?r:"get"+r.substr(3)](c):e[r]():d,h=Se(d)?c?Nu:Yl:Fo,g;if(We(n)&&(~n.indexOf("random(")&&(n=_i(n)),n.charAt(1)==="="&&(g=Cn(p,n)+(it(p)||0),(g||g===0)&&(n=g))),!u||p!==n||ao)return!isNaN(p*n)&&n!==""?(g=new xt(this._pt,e,r,+p||0,n-(p||0),typeof d=="boolean"?zu:Xl,0,h),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!d&&!(r in e)&&Ao(r,n),Eu.call(this,e,r,p,n,h,l||Nt.stringFilter,c))},Du=function(e,r,t,n,i){if(Se(e)&&(e=si(e,i,r,t,n)),!dr(e)||e.style&&e.nodeType||ot(e)||al(e))return We(e)?si(e,i,r,t,n):e;var o={},a;for(a in e)o[a]=si(e[a],i,r,t,n);return o},$l=function(e,r,t,n,i,o){var a,l,c,u;if(Et[e]&&(a=new Et[e]).init(i,a.rawVars?r[e]:Du(r[e],n,i,o,t),t,n,o)!==!1&&(t._pt=l=new xt(t._pt,i,e,0,1,a.render,a,0,a.priority),t!==Tn))for(c=t._ptLookup[t._targets.indexOf(i)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Dr,ao,$o=function s(e,r,t){var n=e.vars,i=n.ease,o=n.startAt,a=n.immediateRender,l=n.lazy,c=n.onUpdate,u=n.runBackwards,d=n.yoyoEase,p=n.keyframes,h=n.autoRevert,g=e._dur,f=e._startAt,m=e._targets,b=e.parent,y=b&&b.data==="nested"?b.vars.targets:m,x=e._overwrite==="auto"&&!Ro,w=e.timeline,_,C,v,S,k,O,I,M,N,F,W,B,z;if(w&&(!p||!i)&&(i="none"),e._ease=sn(i,An.ease),e._yEase=d?jl(sn(d===!0?i:d,An.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!w&&!!n.runBackwards,!w||p&&!n.stagger){if(M=m[0]?rn(m[0]).harness:0,B=M&&n[M.prop],_=ds(n,Io),f&&(f._zTime<0&&f.progress(1),r<0&&u&&a&&!h?f.render(-1,!0):f.revert(u&&g?Ki:ou),f._lazy=0),o){if(Fr(e._startAt=De.set(m,$t({data:"isStart",overwrite:!1,parent:b,immediateRender:!0,lazy:!f&&vt(l),startAt:null,delay:0,onUpdate:c&&function(){return jt(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,r<0&&(Ze||!a&&!h)&&e._startAt.revert(Ki),a&&g&&r<=0&&t<=0){r&&(e._zTime=r);return}}else if(u&&g&&!f){if(r&&(a=!1),v=$t({overwrite:!1,data:"isFromStart",lazy:a&&!f&&vt(l),immediateRender:a,stagger:0,parent:b},_),B&&(v[M.prop]=B),Fr(e._startAt=De.set(m,v)),e._startAt._dp=0,e._startAt._sat=e,r<0&&(Ze?e._startAt.revert(Ki):e._startAt.render(-1,!0)),e._zTime=r,!a)s(e._startAt,de,de);else if(!r)return}for(e._pt=e._ptCache=0,l=g&&vt(l)||l&&!g,C=0;C<m.length;C++){if(k=m[C],I=k._gsap||No(m)[C]._gsap,e._ptLookup[C]=F={},to[I.id]&&Lr.length&&fs(),W=y===m?C:y.indexOf(k),M&&(N=new M).init(k,B||_,e,W,y)!==!1&&(e._pt=S=new xt(e._pt,k,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(V){F[V]=S}),N.priority&&(O=1)),!M||B)for(v in _)Et[v]&&(N=$l(v,_,e,W,k,y))?N.priority&&(O=1):F[v]=S=zo.call(e,k,v,"get",_[v],W,y,0,n.stringFilter);e._op&&e._op[C]&&e.kill(k,e._op[C]),x&&e._pt&&(Dr=e,ve.killTweensOf(k,F,e.globalTime(r)),z=!e.parent,Dr=0),e._pt&&l&&(to[I.id]=1)}O&&Vl(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!z,p&&r<=0&&w.render(Wt,!0,!0)},Au=function(e,r,t,n,i,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[r],u,d,p,h;if(!c)for(c=e._ptCache[r]=[],p=e._ptLookup,h=e._targets.length;h--;){if(u=p[h][r],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==r&&u.fp!==r;)u=u._next;if(!u)return ao=1,e.vars[r]="+=0",$o(e,a),ao=0,l?mi(r+" not eligible for reset"):1;c.push(u)}for(h=c.length;h--;)d=c[h],u=d._pt||d,u.s=(n||n===0)&&!i?n:u.s+(n||0)+o*u.c,u.c=t-u.s,d.e&&(d.e=Oe(t)+it(d.e)),d.b&&(d.b=u.s+it(d.b))},Iu=function(e,r){var t=e[0]?rn(e[0]).harness:0,n=t&&t.aliases,i,o,a,l;if(!n)return r;i=In({},r);for(o in n)if(o in i)for(l=n[o].split(","),a=l.length;a--;)i[l[a]]=i[o];return i},ju=function(e,r,t,n){var i=r.ease||n||"power1.inOut",o,a;if(ot(r))a=t[e]||(t[e]=[]),r.forEach(function(l,c){return a.push({t:c/(r.length-1)*100,v:l,e:i})});else for(o in r)a=t[o]||(t[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:r[o],e:i})},si=function(e,r,t,n,i){return Se(e)?e.call(r,t,n,i):We(e)&&~e.indexOf("random(")?_i(e):e},Fl=jo+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Bl={};bt(Fl+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Bl[s]=1});var De=function(s){sl(e,s);function e(t,n,i,o){var a;typeof n=="number"&&(i.duration=n,n=i,i=null),a=s.call(this,o?n:ni(n))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,p=l.stagger,h=l.overwrite,g=l.keyframes,f=l.defaults,m=l.scrollTrigger,b=l.yoyoEase,y=n.parent||ve,x=(ot(t)||al(t)?Sr(t[0]):"length"in n)?[t]:Vt(t),w,_,C,v,S,k,O,I;if(a._targets=x.length?No(x):mi("GSAP target "+t+" not found. https://gsap.com",!Nt.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,g||p||Ai(c)||Ai(u)){if(n=a.vars,w=a.timeline=new pt({data:"nested",defaults:f||{},targets:y&&y.data==="nested"?y.vars.targets:x}),w.kill(),w.parent=w._dp=yr(a),w._start=0,p||Ai(c)||Ai(u)){if(v=x.length,O=p&&kl(p),dr(p))for(S in p)~Fl.indexOf(S)&&(I||(I={}),I[S]=p[S]);for(_=0;_<v;_++)C=ds(n,Bl),C.stagger=0,b&&(C.yoyoEase=b),I&&In(C,I),k=x[_],C.duration=+si(c,yr(a),_,k,x),C.delay=(+si(u,yr(a),_,k,x)||0)-a._delay,!p&&v===1&&C.delay&&(a._delay=u=C.delay,a._start+=u,C.delay=0),w.to(k,C,O?O(_,k,x):0),w._ease=J.none;w.duration()?c=u=0:a.timeline=0}else if(g){ni($t(w.vars.defaults,{ease:"none"})),w._ease=sn(g.ease||n.ease||"none");var M=0,N,F,W;if(ot(g))g.forEach(function(B){return w.to(x,B,">")}),w.duration();else{C={};for(S in g)S==="ease"||S==="easeEach"||ju(S,g[S],C,g.easeEach);for(S in C)for(N=C[S].sort(function(B,z){return B.t-z.t}),M=0,_=0;_<N.length;_++)F=N[_],W={ease:F.e,duration:(F.t-(_?N[_-1].t:0))/100*c},W[S]=F.v,w.to(x,W,M),M+=W.duration;w.duration()<c&&w.to({},{duration:c-w.duration()})}}c||a.duration(c=w.duration())}else a.timeline=0;return h===!0&&!Ro&&(Dr=yr(a),ve.killTweensOf(x),Dr=0),ar(y,yr(a),i),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(d||!c&&!g&&a._start===Ae(y._time)&&vt(d)&&du(yr(a))&&y.data!=="nested")&&(a._tTime=-de,a.render(Math.max(0,-u)||0)),m&&xl(yr(a),m),a}var r=e.prototype;return r.render=function(n,i,o){var a=this._time,l=this._tDur,c=this._dur,u=n<0,d=n>l-de&&!u?l:n<de?0:n,p,h,g,f,m,b,y,x,w;if(!c)pu(this,n,i,o);else if(d!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(p=d,x=this.timeline,this._repeat){if(f=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(f*100+n,i,o);if(p=Ae(d%f),d===l?(g=this._repeat,p=c):(m=Ae(d/f),g=~~m,g&&g===m?(p=c,g--):p>c&&(p=c)),b=this._yoyo&&g&1,b&&(w=this._yEase,p=c-p),m=jn(this._tTime,f),p===a&&!o&&this._initted&&g===m)return this._tTime=d,this;g!==m&&(x&&this._yEase&&Nl(x,b),this.vars.repeatRefresh&&!b&&!this._lock&&p!==f&&this._initted&&(this._lock=o=1,this.render(Ae(f*g),!0).invalidate()._lock=0))}if(!this._initted){if(wl(this,u?n:p,o,i,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(n,i,o)}if(this._tTime=d,this._time=p,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(w||this._ease)(p/c),this._from&&(this.ratio=y=1-y),!a&&d&&!i&&!m&&(jt(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(y,h.d),h=h._next;x&&x.render(n<0?n:x._dur*x._ease(p/this._dur),i,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!i&&(u&&ro(this,n,i,o),jt(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!i&&this.parent&&jt(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&ro(this,n,!0,!0),(n||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Fr(this,1),!i&&!(u&&!a)&&(d||a||b)&&(jt(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},r.targets=function(){return this._targets},r.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),s.prototype.invalidate.call(this,n)},r.resetTo=function(n,i,o,a,l){yi||At.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||$o(this,c),u=this._ease(c/this._dur),Au(this,n,i,o,a,u,c,l)?this.resetTo(n,i,o,a,1):(ks(this,0),this.parent||vl(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},r.kill=function(n,i){if(i===void 0&&(i="all"),!n&&(!i||i==="all"))return this._lazy=this._pt=0,this.parent?Zn(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ze),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,i,Dr&&Dr.vars.overwrite!==!0)._first||Zn(this),this.parent&&o!==this.timeline.totalDuration()&&Nn(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=n?Vt(n):a,c=this._ptLookup,u=this._pt,d,p,h,g,f,m,b;if((!i||i==="all")&&uu(a,l))return i==="all"&&(this._pt=0),Zn(this);for(d=this._op=this._op||[],i!=="all"&&(We(i)&&(f={},bt(i,function(y){return f[y]=1}),i=f),i=Iu(a,i)),b=a.length;b--;)if(~l.indexOf(a[b])){p=c[b],i==="all"?(d[b]=i,g=p,h={}):(h=d[b]=d[b]||{},g=i);for(f in g)m=p&&p[f],m&&((!("kill"in m.d)||m.d.kill(f)===!0)&&Ss(this,m,"_pt"),delete p[f]),h!=="all"&&(h[f]=1)}return this._initted&&!this._pt&&u&&Zn(this),this},e.to=function(n,i){return new e(n,i,arguments[2])},e.from=function(n,i){return ii(1,arguments)},e.delayedCall=function(n,i,o,a){return new e(i,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:i,onReverseComplete:i,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(n,i,o){return ii(2,arguments)},e.set=function(n,i){return i.duration=0,i.repeatDelay||(i.repeat=0),new e(n,i)},e.killTweensOf=function(n,i,o){return ve.killTweensOf(n,i,o)},e}(vi);$t(De.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});bt("staggerTo,staggerFrom,staggerFromTo",function(s){De[s]=function(){var e=new pt,r=io.call(arguments,0);return r.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,r)}});var Fo=function(e,r,t){return e[r]=t},Yl=function(e,r,t){return e[r](t)},Nu=function(e,r,t,n){return e[r](n.fp,t)},Lu=function(e,r,t){return e.setAttribute(r,t)},Bo=function(e,r){return Se(e[r])?Yl:Mo(e[r])&&e.setAttribute?Lu:Fo},Xl=function(e,r){return r.set(r.t,r.p,Math.round((r.s+r.c*e)*1e6)/1e6,r)},zu=function(e,r){return r.set(r.t,r.p,!!(r.s+r.c*e),r)},Wl=function(e,r){var t=r._pt,n="";if(!e&&r.b)n=r.b;else if(e===1&&r.e)n=r.e;else{for(;t;)n=t.p+(t.m?t.m(t.s+t.c*e):Math.round((t.s+t.c*e)*1e4)/1e4)+n,t=t._next;n+=r.c}r.set(r.t,r.p,n,r)},Yo=function(e,r){for(var t=r._pt;t;)t.r(e,t.d),t=t._next},$u=function(e,r,t,n){for(var i=this._pt,o;i;)o=i._next,i.p===n&&i.modifier(e,r,t),i=o},Fu=function(e){for(var r=this._pt,t,n;r;)n=r._next,r.p===e&&!r.op||r.op===e?Ss(this,r,"_pt"):r.dep||(t=1),r=n;return!t},Bu=function(e,r,t,n){n.mSet(e,r,n.m.call(n.tween,t,n.mt),n)},Vl=function(e){for(var r=e._pt,t,n,i,o;r;){for(t=r._next,n=i;n&&n.pr>r.pr;)n=n._next;(r._prev=n?n._prev:o)?r._prev._next=r:i=r,(r._next=n)?n._prev=r:o=r,r=t}e._pt=i},xt=function(){function s(r,t,n,i,o,a,l,c,u){this.t=t,this.s=i,this.c=o,this.p=n,this.r=a||Xl,this.d=l||this,this.set=c||Fo,this.pr=u||0,this._next=r,r&&(r._prev=this)}var e=s.prototype;return e.modifier=function(t,n,i){this.mSet=this.mSet||this.set,this.set=Bu,this.m=t,this.mt=i,this.tween=n},s}();bt(jo+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Io[s]=1});zt.TweenMax=zt.TweenLite=De;zt.TimelineLite=zt.TimelineMax=pt;ve=new pt({sortChildren:!1,defaults:An,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Nt.stringFilter=Il;var on=[],Ji={},Yu=[],pa=0,Xu=0,Ls=function(e){return(Ji[e]||Yu).map(function(r){return r()})},lo=function(){var e=Date.now(),r=[];e-pa>2&&(Ls("matchMediaInit"),on.forEach(function(t){var n=t.queries,i=t.conditions,o,a,l,c;for(a in n)o=nr.matchMedia(n[a]).matches,o&&(l=1),o!==i[a]&&(i[a]=o,c=1);c&&(t.revert(),l&&r.push(t))}),Ls("matchMediaRevert"),r.forEach(function(t){return t.onMatch(t,function(n){return t.add(null,n)})}),pa=e,Ls("matchMedia"))},Hl=function(){function s(r,t){this.selector=t&&so(t),this.data=[],this._r=[],this.isReverted=!1,this.id=Xu++,r&&this.add(r)}var e=s.prototype;return e.add=function(t,n,i){Se(t)&&(i=n,n=t,t=Se);var o=this,a=function(){var c=_e,u=o.selector,d;return c&&c!==o&&c.data.push(o),i&&(o.selector=so(i)),_e=o,d=n.apply(o,arguments),Se(d)&&o._r.push(d),_e=c,o.selector=u,o.isReverted=!1,d};return o.last=a,t===Se?a(o,function(l){return o.add(null,l)}):t?o[t]=a:a},e.ignore=function(t){var n=_e;_e=null,t(this),_e=n},e.getTweens=function(){var t=[];return this.data.forEach(function(n){return n instanceof s?t.push.apply(t,n.getTweens()):n instanceof De&&!(n.parent&&n.parent.data==="nested")&&t.push(n)}),t},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(t,n){var i=this;if(t?function(){for(var a=i.getTweens(),l=i.data.length,c;l--;)c=i.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(t)}),l=i.data.length;l--;)c=i.data[l],c instanceof pt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof De)&&c.revert&&c.revert(t);i._r.forEach(function(u){return u(t,i)}),i.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),n)for(var o=on.length;o--;)on[o].id===this.id&&on.splice(o,1)},e.revert=function(t){this.kill(t||{})},s}(),Wu=function(){function s(r){this.contexts=[],this.scope=r,_e&&_e.data.push(this)}var e=s.prototype;return e.add=function(t,n,i){dr(t)||(t={matches:t});var o=new Hl(0,i||this.scope),a=o.conditions={},l,c,u;_e&&!o.selector&&(o.selector=_e.selector),this.contexts.push(o),n=o.add("onMatch",n),o.queries=t;for(c in t)c==="all"?u=1:(l=nr.matchMedia(t[c]),l&&(on.indexOf(o)<0&&on.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(lo):l.addEventListener("change",lo)));return u&&n(o,function(d){return o.add(null,d)}),this},e.revert=function(t){this.kill(t||{})},e.kill=function(t){this.contexts.forEach(function(n){return n.kill(t,!0)})},s}(),ps={registerPlugin:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];r.forEach(function(n){return El(n)})},timeline:function(e){return new pt(e)},getTweensOf:function(e,r){return ve.getTweensOf(e,r)},getProperty:function(e,r,t,n){We(e)&&(e=Vt(e)[0]);var i=rn(e||{}).get,o=t?yl:_l;return t==="native"&&(t=""),e&&(r?o((Et[r]&&Et[r].get||i)(e,r,t,n)):function(a,l,c){return o((Et[a]&&Et[a].get||i)(e,a,l,c))})},quickSetter:function(e,r,t){if(e=Vt(e),e.length>1){var n=e.map(function(u){return St.quickSetter(u,r,t)}),i=n.length;return function(u){for(var d=i;d--;)n[d](u)}}e=e[0]||{};var o=Et[r],a=rn(e),l=a.harness&&(a.harness.aliases||{})[r]||r,c=o?function(u){var d=new o;Tn._pt=0,d.init(e,t?u+t:u,Tn,0,[e]),d.render(1,d),Tn._pt&&Yo(1,Tn)}:a.set(e,l);return o?c:function(u){return c(e,l,t?u+t:u,a,1)}},quickTo:function(e,r,t){var n,i=St.to(e,$t((n={},n[r]="+=0.1",n.paused=!0,n.stagger=0,n),t||{})),o=function(l,c,u){return i.resetTo(r,l,c,u)};return o.tween=i,o},isTweening:function(e){return ve.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=sn(e.ease,An.ease)),ca(An,e||{})},config:function(e){return ca(Nt,e||{})},registerEffect:function(e){var r=e.name,t=e.effect,n=e.plugins,i=e.defaults,o=e.extendTimeline;(n||"").split(",").forEach(function(a){return a&&!Et[a]&&!zt[a]&&mi(r+" effect requires "+a+" plugin.")}),As[r]=function(a,l,c){return t(Vt(a),$t(l||{},i),c)},o&&(pt.prototype[r]=function(a,l,c){return this.add(As[r](a,dr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,r){J[e]=sn(r)},parseEase:function(e,r){return arguments.length?sn(e,r):J},getById:function(e){return ve.getById(e)},exportRoot:function(e,r){e===void 0&&(e={});var t=new pt(e),n,i;for(t.smoothChildTiming=vt(e.smoothChildTiming),ve.remove(t),t._dp=0,t._time=t._tTime=ve._time,n=ve._first;n;)i=n._next,(r||!(!n._dur&&n instanceof De&&n.vars.onComplete===n._targets[0]))&&ar(t,n,n._start-n._delay),n=i;return ar(ve,t,0),t},context:function(e,r){return e?new Hl(e,r):_e},matchMedia:function(e){return new Wu(e)},matchMediaRefresh:function(){return on.forEach(function(e){var r=e.conditions,t,n;for(n in r)r[n]&&(r[n]=!1,t=1);t&&e.revert()})||lo()},addEventListener:function(e,r){var t=Ji[e]||(Ji[e]=[]);~t.indexOf(r)||t.push(r)},removeEventListener:function(e,r){var t=Ji[e],n=t&&t.indexOf(r);n>=0&&t.splice(n,1)},utils:{wrap:wu,wrapYoyo:Su,distribute:kl,random:Pl,snap:Cl,normalize:xu,getUnit:it,clamp:_u,splitColor:Dl,toArray:Vt,selector:so,mapRange:Rl,pipe:vu,unitize:bu,interpolate:Tu,shuffle:Tl},install:dl,effects:As,ticker:At,updateRoot:pt.updateRoot,plugins:Et,globalTimeline:ve,core:{PropTween:xt,globals:hl,Tween:De,Timeline:pt,Animation:vi,getCache:rn,_removeLinkedListItem:Ss,reverting:function(){return Ze},context:function(e){return e&&_e&&(_e.data.push(e),e._ctx=_e),_e},suppressOverwrites:function(e){return Ro=e}}};bt("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return ps[s]=De[s]});At.add(pt.updateRoot);Tn=ps.to({},{duration:0});var Vu=function(e,r){for(var t=e._pt;t&&t.p!==r&&t.op!==r&&t.fp!==r;)t=t._next;return t},Hu=function(e,r){var t=e._targets,n,i,o;for(n in r)for(i=t.length;i--;)o=e._ptLookup[i][n],o&&(o=o.d)&&(o._pt&&(o=Vu(o,n)),o&&o.modifier&&o.modifier(r[n],e,t[i],n))},zs=function(e,r){return{name:e,headless:1,rawVars:1,init:function(n,i,o){o._onInit=function(a){var l,c;if(We(i)&&(l={},bt(i,function(u){return l[u]=1}),i=l),r){l={};for(c in i)l[c]=r(i[c]);i=l}Hu(a,i)}}}},St=ps.registerPlugin({name:"attr",init:function(e,r,t,n,i){var o,a,l;this.tween=t;for(o in r)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",r[o],n,i,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,r){for(var t=r._pt;t;)Ze?t.set(t.t,t.p,t.b,t):t.r(e,t.d),t=t._next}},{name:"endArray",headless:1,init:function(e,r){for(var t=r.length;t--;)this.add(e,t,e[t]||0,r[t],0,0,0,0,0,1)}},zs("roundProps",oo),zs("modifiers"),zs("snap",Cl))||ps;De.version=pt.version=St.version="3.13.0";fl=1;Eo()&&Ln();J.Power0;J.Power1;J.Power2;J.Power3;J.Power4;J.Linear;J.Quad;J.Cubic;J.Quart;J.Quint;J.Strong;J.Elastic;J.Back;J.SteppedEase;J.Bounce;J.Sine;J.Expo;J.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ma,Ar,Pn,Xo,en,ga,Wo,Uu=function(){return typeof window<"u"},Tr={},Kr=180/Math.PI,On=Math.PI/180,yn=Math.atan2,_a=1e8,Vo=/([A-Z])/g,qu=/(left|right|width|margin|padding|x)/i,Gu=/[\s,\(]\S/,lr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},co=function(e,r){return r.set(r.t,r.p,Math.round((r.s+r.c*e)*1e4)/1e4+r.u,r)},Zu=function(e,r){return r.set(r.t,r.p,e===1?r.e:Math.round((r.s+r.c*e)*1e4)/1e4+r.u,r)},Ku=function(e,r){return r.set(r.t,r.p,e?Math.round((r.s+r.c*e)*1e4)/1e4+r.u:r.b,r)},Qu=function(e,r){var t=r.s+r.c*e;r.set(r.t,r.p,~~(t+(t<0?-.5:.5))+r.u,r)},Ul=function(e,r){return r.set(r.t,r.p,e?r.e:r.b,r)},ql=function(e,r){return r.set(r.t,r.p,e!==1?r.b:r.e,r)},Ju=function(e,r,t){return e.style[r]=t},ef=function(e,r,t){return e.style.setProperty(r,t)},tf=function(e,r,t){return e._gsap[r]=t},rf=function(e,r,t){return e._gsap.scaleX=e._gsap.scaleY=t},nf=function(e,r,t,n,i){var o=e._gsap;o.scaleX=o.scaleY=t,o.renderTransform(i,o)},sf=function(e,r,t,n,i){var o=e._gsap;o[r]=t,o.renderTransform(i,o)},be="transform",wt=be+"Origin",of=function s(e,r){var t=this,n=this.target,i=n.style,o=n._gsap;if(e in Tr&&i){if(this.tfm=this.tfm||{},e!=="transform")e=lr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return t.tfm[a]=vr(n,a)}):this.tfm[e]=o.x?o[e]:vr(n,e),e===wt&&(this.tfm.zOrigin=o.zOrigin);else return lr.transform.split(",").forEach(function(a){return s.call(t,a,r)});if(this.props.indexOf(be)>=0)return;o.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(wt,r,"")),e=be}(i||r)&&this.props.push(e,r,i[e])},Gl=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},af=function(){var e=this.props,r=this.target,t=r.style,n=r._gsap,i,o;for(i=0;i<e.length;i+=3)e[i+1]?e[i+1]===2?r[e[i]](e[i+2]):r[e[i]]=e[i+2]:e[i+2]?t[e[i]]=e[i+2]:t.removeProperty(e[i].substr(0,2)==="--"?e[i]:e[i].replace(Vo,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),r.setAttribute("data-svg-origin",this.svgo||"")),i=Wo(),(!i||!i.isStart)&&!t[be]&&(Gl(t),n.zOrigin&&t[wt]&&(t[wt]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},Zl=function(e,r){var t={target:e,props:[],revert:af,save:of};return e._gsap||St.core.getCache(e),r&&e.style&&e.nodeType&&r.split(",").forEach(function(n){return t.save(n)}),t},Kl,uo=function(e,r){var t=Ar.createElementNS?Ar.createElementNS((r||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ar.createElement(e);return t&&t.style?t:Ar.createElement(e)},Ht=function s(e,r,t){var n=getComputedStyle(e);return n[r]||n.getPropertyValue(r.replace(Vo,"-$1").toLowerCase())||n.getPropertyValue(r)||!t&&s(e,zn(r)||r,1)||""},ya="O,Moz,ms,Ms,Webkit".split(","),zn=function(e,r,t){var n=r||en,i=n.style,o=5;if(e in i&&!t)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(ya[o]+e in i););return o<0?null:(o===3?"ms":o>=0?ya[o]:"")+e},fo=function(){Uu()&&window.document&&(ma=window,Ar=ma.document,Pn=Ar.documentElement,en=uo("div")||{style:{}},uo("div"),be=zn(be),wt=be+"Origin",en.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Kl=!!zn("perspective"),Wo=St.core.reverting,Xo=1)},va=function(e){var r=e.ownerSVGElement,t=uo("svg",r&&r.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=e.cloneNode(!0),i;n.style.display="block",t.appendChild(n),Pn.appendChild(t);try{i=n.getBBox()}catch{}return t.removeChild(n),Pn.removeChild(t),i},ba=function(e,r){for(var t=r.length;t--;)if(e.hasAttribute(r[t]))return e.getAttribute(r[t])},Ql=function(e){var r,t;try{r=e.getBBox()}catch{r=va(e),t=1}return r&&(r.width||r.height)||t||(r=va(e)),r&&!r.width&&!r.x&&!r.y?{x:+ba(e,["x","cx","x1"])||0,y:+ba(e,["y","cy","y1"])||0,width:0,height:0}:r},Jl=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Ql(e))},un=function(e,r){if(r){var t=e.style,n;r in Tr&&r!==wt&&(r=be),t.removeProperty?(n=r.substr(0,2),(n==="ms"||r.substr(0,6)==="webkit")&&(r="-"+r),t.removeProperty(n==="--"?r:r.replace(Vo,"-$1").toLowerCase())):t.removeAttribute(r)}},Ir=function(e,r,t,n,i,o){var a=new xt(e._pt,r,t,0,1,o?ql:Ul);return e._pt=a,a.b=n,a.e=i,e._props.push(t),a},xa={deg:1,rad:1,turn:1},lf={grid:1,flex:1},Br=function s(e,r,t,n){var i=parseFloat(t)||0,o=(t+"").trim().substr((i+"").length)||"px",a=en.style,l=qu.test(r),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,p=n==="px",h=n==="%",g,f,m,b;if(n===o||!i||xa[n]||xa[o])return i;if(o!=="px"&&!p&&(i=s(e,r,t,"px")),b=e.getCTM&&Jl(e),(h||o==="%")&&(Tr[r]||~r.indexOf("adius")))return g=b?e.getBBox()[l?"width":"height"]:e[u],Oe(h?i/g*d:i/100*g);if(a[l?"width":"height"]=d+(p?o:n),f=n!=="rem"&&~r.indexOf("adius")||n==="em"&&e.appendChild&&!c?e:e.parentNode,b&&(f=(e.ownerSVGElement||{}).parentNode),(!f||f===Ar||!f.appendChild)&&(f=Ar.body),m=f._gsap,m&&h&&m.width&&l&&m.time===At.time&&!m.uncache)return Oe(i/m.width*d);if(h&&(r==="height"||r==="width")){var y=e.style[r];e.style[r]=d+n,g=e[u],y?e.style[r]=y:un(e,r)}else(h||o==="%")&&!lf[Ht(f,"display")]&&(a.position=Ht(e,"position")),f===e&&(a.position="static"),f.appendChild(en),g=en[u],f.removeChild(en),a.position="absolute";return l&&h&&(m=rn(f),m.time=At.time,m.width=f[u]),Oe(p?g*i/d:g&&i?d/g*i:0)},vr=function(e,r,t,n){var i;return Xo||fo(),r in lr&&r!=="transform"&&(r=lr[r],~r.indexOf(",")&&(r=r.split(",")[0])),Tr[r]&&r!=="transform"?(i=xi(e,n),i=r!=="transformOrigin"?i[r]:i.svg?i.origin:gs(Ht(e,wt))+" "+i.zOrigin+"px"):(i=e.style[r],(!i||i==="auto"||n||~(i+"").indexOf("calc("))&&(i=ms[r]&&ms[r](e,r,t)||Ht(e,r)||ml(e,r)||(r==="opacity"?1:0))),t&&!~(i+"").trim().indexOf(" ")?Br(e,r,i,t)+t:i},cf=function(e,r,t,n){if(!t||t==="none"){var i=zn(r,e,1),o=i&&Ht(e,i,1);o&&o!==t?(r=i,t=o):r==="borderColor"&&(t=Ht(e,"borderTopColor"))}var a=new xt(this._pt,e.style,r,0,1,Wl),l=0,c=0,u,d,p,h,g,f,m,b,y,x,w,_;if(a.b=t,a.e=n,t+="",n+="",n.substring(0,6)==="var(--"&&(n=Ht(e,n.substring(4,n.indexOf(")")))),n==="auto"&&(f=e.style[r],e.style[r]=n,n=Ht(e,r)||n,f?e.style[r]=f:un(e,r)),u=[t,n],Il(u),t=u[0],n=u[1],p=t.match(Sn)||[],_=n.match(Sn)||[],_.length){for(;d=Sn.exec(n);)m=d[0],y=n.substring(l,d.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),m!==(f=p[c++]||"")&&(h=parseFloat(f)||0,w=f.substr((h+"").length),m.charAt(1)==="="&&(m=Cn(h,m)+w),b=parseFloat(m),x=m.substr((b+"").length),l=Sn.lastIndex-x.length,x||(x=x||Nt.units[r]||w,l===n.length&&(n+=x,a.e+=x)),w!==x&&(h=Br(e,r,f,x)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:h,c:b-h,m:g&&g<4||r==="zIndex"?Math.round:0});a.c=l<n.length?n.substring(l,n.length):""}else a.r=r==="display"&&n==="none"?ql:Ul;return cl.test(n)&&(a.e=0),this._pt=a,a},wa={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},uf=function(e){var r=e.split(" "),t=r[0],n=r[1]||"50%";return(t==="top"||t==="bottom"||n==="left"||n==="right")&&(e=t,t=n,n=e),r[0]=wa[t]||t,r[1]=wa[n]||n,r.join(" ")},ff=function(e,r){if(r.tween&&r.tween._time===r.tween._dur){var t=r.t,n=t.style,i=r.u,o=t._gsap,a,l,c;if(i==="all"||i===!0)n.cssText="",l=1;else for(i=i.split(","),c=i.length;--c>-1;)a=i[c],Tr[a]&&(l=1,a=a==="transformOrigin"?wt:be),un(t,a);l&&(un(t,be),o&&(o.svg&&t.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",xi(t,1),o.uncache=1,Gl(n)))}},ms={clearProps:function(e,r,t,n,i){if(i.data!=="isFromStart"){var o=e._pt=new xt(e._pt,r,t,0,0,ff);return o.u=n,o.pr=-10,o.tween=i,e._props.push(t),1}}},bi=[1,0,0,1,0,0],ec={},tc=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Sa=function(e){var r=Ht(e,be);return tc(r)?bi:r.substr(7).match(ll).map(Oe)},Ho=function(e,r){var t=e._gsap||rn(e),n=e.style,i=Sa(e),o,a,l,c;return t.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,i=[l.a,l.b,l.c,l.d,l.e,l.f],i.join(",")==="1,0,0,1,0,0"?bi:i):(i===bi&&!e.offsetParent&&e!==Pn&&!t.svg&&(l=n.display,n.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Pn.appendChild(e)),i=Sa(e),l?n.display=l:un(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Pn.removeChild(e))),r&&i.length>6?[i[0],i[1],i[4],i[5],i[12],i[13]]:i)},ho=function(e,r,t,n,i,o){var a=e._gsap,l=i||Ho(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,p=a.yOffset||0,h=l[0],g=l[1],f=l[2],m=l[3],b=l[4],y=l[5],x=r.split(" "),w=parseFloat(x[0])||0,_=parseFloat(x[1])||0,C,v,S,k;t?l!==bi&&(v=h*m-g*f)&&(S=w*(m/v)+_*(-f/v)+(f*y-m*b)/v,k=w*(-g/v)+_*(h/v)-(h*y-g*b)/v,w=S,_=k):(C=Ql(e),w=C.x+(~x[0].indexOf("%")?w/100*C.width:w),_=C.y+(~(x[1]||x[0]).indexOf("%")?_/100*C.height:_)),n||n!==!1&&a.smooth?(b=w-c,y=_-u,a.xOffset=d+(b*h+y*f)-b,a.yOffset=p+(b*g+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=w,a.yOrigin=_,a.smooth=!!n,a.origin=r,a.originIsAbsolute=!!t,e.style[wt]="0px 0px",o&&(Ir(o,a,"xOrigin",c,w),Ir(o,a,"yOrigin",u,_),Ir(o,a,"xOffset",d,a.xOffset),Ir(o,a,"yOffset",p,a.yOffset)),e.setAttribute("data-svg-origin",w+" "+_)},xi=function(e,r){var t=e._gsap||new zl(e);if("x"in t&&!r&&!t.uncache)return t;var n=e.style,i=t.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Ht(e,wt)||"0",u,d,p,h,g,f,m,b,y,x,w,_,C,v,S,k,O,I,M,N,F,W,B,z,V,re,T,ce,Ve,kt,me,Te;return u=d=p=f=m=b=y=x=w=0,h=g=1,t.svg=!!(e.getCTM&&Jl(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[be]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[be]!=="none"?l[be]:"")),n.scale=n.rotate=n.translate="none"),v=Ho(e,t.svg),t.svg&&(t.uncache?(V=e.getBBox(),c=t.xOrigin-V.x+"px "+(t.yOrigin-V.y)+"px",z=""):z=!r&&e.getAttribute("data-svg-origin"),ho(e,z||c,!!z||t.originIsAbsolute,t.smooth!==!1,v)),_=t.xOrigin||0,C=t.yOrigin||0,v!==bi&&(I=v[0],M=v[1],N=v[2],F=v[3],u=W=v[4],d=B=v[5],v.length===6?(h=Math.sqrt(I*I+M*M),g=Math.sqrt(F*F+N*N),f=I||M?yn(M,I)*Kr:0,y=N||F?yn(N,F)*Kr+f:0,y&&(g*=Math.abs(Math.cos(y*On))),t.svg&&(u-=_-(_*I+C*N),d-=C-(_*M+C*F))):(Te=v[6],kt=v[7],T=v[8],ce=v[9],Ve=v[10],me=v[11],u=v[12],d=v[13],p=v[14],S=yn(Te,Ve),m=S*Kr,S&&(k=Math.cos(-S),O=Math.sin(-S),z=W*k+T*O,V=B*k+ce*O,re=Te*k+Ve*O,T=W*-O+T*k,ce=B*-O+ce*k,Ve=Te*-O+Ve*k,me=kt*-O+me*k,W=z,B=V,Te=re),S=yn(-N,Ve),b=S*Kr,S&&(k=Math.cos(-S),O=Math.sin(-S),z=I*k-T*O,V=M*k-ce*O,re=N*k-Ve*O,me=F*O+me*k,I=z,M=V,N=re),S=yn(M,I),f=S*Kr,S&&(k=Math.cos(S),O=Math.sin(S),z=I*k+M*O,V=W*k+B*O,M=M*k-I*O,B=B*k-W*O,I=z,W=V),m&&Math.abs(m)+Math.abs(f)>359.9&&(m=f=0,b=180-b),h=Oe(Math.sqrt(I*I+M*M+N*N)),g=Oe(Math.sqrt(B*B+Te*Te)),S=yn(W,B),y=Math.abs(S)>2e-4?S*Kr:0,w=me?1/(me<0?-me:me):0),t.svg&&(z=e.getAttribute("transform"),t.forceCSS=e.setAttribute("transform","")||!tc(Ht(e,be)),z&&e.setAttribute("transform",z))),Math.abs(y)>90&&Math.abs(y)<270&&(i?(h*=-1,y+=f<=0?180:-180,f+=f<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),r=r||t.uncache,t.x=u-((t.xPercent=u&&(!r&&t.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*t.xPercent/100:0)+o,t.y=d-((t.yPercent=d&&(!r&&t.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*t.yPercent/100:0)+o,t.z=p+o,t.scaleX=Oe(h),t.scaleY=Oe(g),t.rotation=Oe(f)+a,t.rotationX=Oe(m)+a,t.rotationY=Oe(b)+a,t.skewX=y+a,t.skewY=x+a,t.transformPerspective=w+o,(t.zOrigin=parseFloat(c.split(" ")[2])||!r&&t.zOrigin||0)&&(n[wt]=gs(c)),t.xOffset=t.yOffset=0,t.force3D=Nt.force3D,t.renderTransform=t.svg?hf:Kl?rc:df,t.uncache=0,t},gs=function(e){return(e=e.split(" "))[0]+" "+e[1]},$s=function(e,r,t){var n=it(r);return Oe(parseFloat(r)+parseFloat(Br(e,"x",t+"px",n)))+n},df=function(e,r){r.z="0px",r.rotationY=r.rotationX="0deg",r.force3D=0,rc(e,r)},Gr="0deg",Hn="0px",Zr=") ",rc=function(e,r){var t=r||this,n=t.xPercent,i=t.yPercent,o=t.x,a=t.y,l=t.z,c=t.rotation,u=t.rotationY,d=t.rotationX,p=t.skewX,h=t.skewY,g=t.scaleX,f=t.scaleY,m=t.transformPerspective,b=t.force3D,y=t.target,x=t.zOrigin,w="",_=b==="auto"&&e&&e!==1||b===!0;if(x&&(d!==Gr||u!==Gr)){var C=parseFloat(u)*On,v=Math.sin(C),S=Math.cos(C),k;C=parseFloat(d)*On,k=Math.cos(C),o=$s(y,o,v*k*-x),a=$s(y,a,-Math.sin(C)*-x),l=$s(y,l,S*k*-x+x)}m!==Hn&&(w+="perspective("+m+Zr),(n||i)&&(w+="translate("+n+"%, "+i+"%) "),(_||o!==Hn||a!==Hn||l!==Hn)&&(w+=l!==Hn||_?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Zr),c!==Gr&&(w+="rotate("+c+Zr),u!==Gr&&(w+="rotateY("+u+Zr),d!==Gr&&(w+="rotateX("+d+Zr),(p!==Gr||h!==Gr)&&(w+="skew("+p+", "+h+Zr),(g!==1||f!==1)&&(w+="scale("+g+", "+f+Zr),y.style[be]=w||"translate(0, 0)"},hf=function(e,r){var t=r||this,n=t.xPercent,i=t.yPercent,o=t.x,a=t.y,l=t.rotation,c=t.skewX,u=t.skewY,d=t.scaleX,p=t.scaleY,h=t.target,g=t.xOrigin,f=t.yOrigin,m=t.xOffset,b=t.yOffset,y=t.forceCSS,x=parseFloat(o),w=parseFloat(a),_,C,v,S,k;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=On,c*=On,_=Math.cos(l)*d,C=Math.sin(l)*d,v=Math.sin(l-c)*-p,S=Math.cos(l-c)*p,c&&(u*=On,k=Math.tan(c-u),k=Math.sqrt(1+k*k),v*=k,S*=k,u&&(k=Math.tan(u),k=Math.sqrt(1+k*k),_*=k,C*=k)),_=Oe(_),C=Oe(C),v=Oe(v),S=Oe(S)):(_=d,S=p,C=v=0),(x&&!~(o+"").indexOf("px")||w&&!~(a+"").indexOf("px"))&&(x=Br(h,"x",o,"px"),w=Br(h,"y",a,"px")),(g||f||m||b)&&(x=Oe(x+g-(g*_+f*v)+m),w=Oe(w+f-(g*C+f*S)+b)),(n||i)&&(k=h.getBBox(),x=Oe(x+n/100*k.width),w=Oe(w+i/100*k.height)),k="matrix("+_+","+C+","+v+","+S+","+x+","+w+")",h.setAttribute("transform",k),y&&(h.style[be]=k)},pf=function(e,r,t,n,i){var o=360,a=We(i),l=parseFloat(i)*(a&&~i.indexOf("rad")?Kr:1),c=l-n,u=n+c+"deg",d,p;return a&&(d=i.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*_a)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*_a)%o-~~(c/o)*o)),e._pt=p=new xt(e._pt,r,t,n,c,Zu),p.e=u,p.u="deg",e._props.push(t),p},Ta=function(e,r){for(var t in r)e[t]=r[t];return e},mf=function(e,r,t){var n=Ta({},t._gsap),i="perspective,force3D,transformOrigin,svgOrigin",o=t.style,a,l,c,u,d,p,h,g;n.svg?(c=t.getAttribute("transform"),t.setAttribute("transform",""),o[be]=r,a=xi(t,1),un(t,be),t.setAttribute("transform",c)):(c=getComputedStyle(t)[be],o[be]=r,a=xi(t,1),o[be]=c);for(l in Tr)c=n[l],u=a[l],c!==u&&i.indexOf(l)<0&&(h=it(c),g=it(u),d=h!==g?Br(t,l,c,g):parseFloat(c),p=parseFloat(u),e._pt=new xt(e._pt,a,l,d,p-d,co),e._pt.u=g||0,e._props.push(l));Ta(a,n)};bt("padding,margin,Width,Radius",function(s,e){var r="Top",t="Right",n="Bottom",i="Left",o=(e<3?[r,t,n,i]:[r+i,r+t,n+t,n+i]).map(function(a){return e<2?s+a:"border"+a+s});ms[e>1?"border"+s:s]=function(a,l,c,u,d){var p,h;if(arguments.length<4)return p=o.map(function(g){return vr(a,g,c)}),h=p.join(" "),h.split(p[0]).length===5?p[0]:h;p=(u+"").split(" "),h={},o.forEach(function(g,f){return h[g]=p[f]=p[f]||p[(f-1)/2|0]}),a.init(l,h,d)}});var nc={name:"css",register:fo,targetTest:function(e){return e.style&&e.nodeType},init:function(e,r,t,n,i){var o=this._props,a=e.style,l=t.vars.startAt,c,u,d,p,h,g,f,m,b,y,x,w,_,C,v,S;Xo||fo(),this.styles=this.styles||Zl(e),S=this.styles.props,this.tween=t;for(f in r)if(f!=="autoRound"&&(u=r[f],!(Et[f]&&$l(f,r,t,n,e,i)))){if(h=typeof u,g=ms[f],h==="function"&&(u=u.call(t,n,e,i),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=_i(u)),g)g(this,e,f,u,t)&&(v=1);else if(f.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(f)+"").trim(),u+="",zr.lastIndex=0,zr.test(c)||(m=it(c),b=it(u)),b?m!==b&&(c=Br(e,f,c,b)+b):m&&(u+=m),this.add(a,"setProperty",c,u,n,i,0,0,f),o.push(f),S.push(f,0,a[f]);else if(h!=="undefined"){if(l&&f in l?(c=typeof l[f]=="function"?l[f].call(t,n,e,i):l[f],We(c)&&~c.indexOf("random(")&&(c=_i(c)),it(c+"")||c==="auto"||(c+=Nt.units[f]||it(vr(e,f))||""),(c+"").charAt(1)==="="&&(c=vr(e,f))):c=vr(e,f),p=parseFloat(c),y=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),d=parseFloat(u),f in lr&&(f==="autoAlpha"&&(p===1&&vr(e,"visibility")==="hidden"&&d&&(p=0),S.push("visibility",0,a.visibility),Ir(this,a,"visibility",p?"inherit":"hidden",d?"inherit":"hidden",!d)),f!=="scale"&&f!=="transform"&&(f=lr[f],~f.indexOf(",")&&(f=f.split(",")[0]))),x=f in Tr,x){if(this.styles.save(f),h==="string"&&u.substring(0,6)==="var(--"&&(u=Ht(e,u.substring(4,u.indexOf(")"))),d=parseFloat(u)),w||(_=e._gsap,_.renderTransform&&!r.parseTransform||xi(e,r.parseTransform),C=r.smoothOrigin!==!1&&_.smooth,w=this._pt=new xt(this._pt,a,be,0,1,_.renderTransform,_,0,-1),w.dep=1),f==="scale")this._pt=new xt(this._pt,_,"scaleY",_.scaleY,(y?Cn(_.scaleY,y+d):d)-_.scaleY||0,co),this._pt.u=0,o.push("scaleY",f),f+="X";else if(f==="transformOrigin"){S.push(wt,0,a[wt]),u=uf(u),_.svg?ho(e,u,0,C,0,this):(b=parseFloat(u.split(" ")[2])||0,b!==_.zOrigin&&Ir(this,_,"zOrigin",_.zOrigin,b),Ir(this,a,f,gs(c),gs(u)));continue}else if(f==="svgOrigin"){ho(e,u,1,C,0,this);continue}else if(f in ec){pf(this,_,f,p,y?Cn(p,y+u):u);continue}else if(f==="smoothOrigin"){Ir(this,_,"smooth",_.smooth,u);continue}else if(f==="force3D"){_[f]=u;continue}else if(f==="transform"){mf(this,u,e);continue}}else f in a||(f=zn(f)||f);if(x||(d||d===0)&&(p||p===0)&&!Gu.test(u)&&f in a)m=(c+"").substr((p+"").length),d||(d=0),b=it(u)||(f in Nt.units?Nt.units[f]:m),m!==b&&(p=Br(e,f,c,b)),this._pt=new xt(this._pt,x?_:a,f,p,(y?Cn(p,y+d):d)-p,!x&&(b==="px"||f==="zIndex")&&r.autoRound!==!1?Qu:co),this._pt.u=b||0,m!==b&&b!=="%"&&(this._pt.b=c,this._pt.r=Ku);else if(f in a)cf.call(this,e,f,c,y?y+u:u);else if(f in e)this.add(e,f,c||e[f],y?y+u:u,n,i);else if(f!=="parseTransform"){Ao(f,u);continue}x||(f in a?S.push(f,0,a[f]):typeof e[f]=="function"?S.push(f,2,e[f]()):S.push(f,1,c||e[f])),o.push(f)}}v&&Vl(this)},render:function(e,r){if(r.tween._time||!Wo())for(var t=r._pt;t;)t.r(e,t.d),t=t._next;else r.styles.revert()},get:vr,aliases:lr,getSetter:function(e,r,t){var n=lr[r];return n&&n.indexOf(",")<0&&(r=n),r in Tr&&r!==wt&&(e._gsap.x||vr(e,"x"))?t&&ga===t?r==="scale"?rf:tf:(ga=t||{})&&(r==="scale"?nf:sf):e.style&&!Mo(e.style[r])?Ju:~r.indexOf("-")?ef:Bo(e,r)},core:{_removeProperty:un,_getMatrix:Ho}};St.utils.checkPrefix=zn;St.core.getStyleSaver=Zl;(function(s,e,r,t){var n=bt(s+","+e+","+r,function(i){Tr[i]=1});bt(e,function(i){Nt.units[i]="deg",ec[i]=1}),lr[n[13]]=s+","+e,bt(t,function(i){var o=i.split(":");lr[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");bt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Nt.units[s]="px"});St.registerPlugin(nc);var te=St.registerPlugin(nc)||St;te.core.Tween;const ic="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.83337%2014.1667L14.1667%205.83334M14.1667%205.83334H5.83337M14.1667%205.83334V14.1667'%20stroke='%231E1E1E'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";function gf(){const s=[{label:"About",href:"#about"},{label:"Projects",href:"#work"},{label:"Praxis",href:"/blog"},{label:"Resume",href:"/pages/Benjamin-Lertpunyaroj-Resume.pdf"}],e=A.useRef([]);e.current=[];const[r,t]=A.useState(null),n=i=>{i&&!e.current.includes(i)&&e.current.push(i)};return A.useEffect(()=>{e.current.forEach((i,o)=>{te.to(i,{opacity:r===null||r===o?1:.35,duration:.25,ease:"power1.out"})})},[r]),R.jsxs("header",{className:"flex justify-between items-center w-full h-30 bg-white text-[18px]",children:[R.jsxs("a",{href:"/",className:"relative pl-7 sm:pl-20 group flex items-center overflow-hidden select-none",children:[R.jsx("div",{className:"mr-1.5",children:"©"}),R.jsx("div",{className:"whitespace-nowrap ease-custom-cubic transition-transform duration-500 group-hover:[transform:translateX(calc(-100%-10rem))]",children:"coded by"}),R.jsx("div",{className:"whitespace-nowrap ease-custom-cubic px-1 transition-transform duration-500 group-hover:-translate-x-19",children:"Benjamin"}),R.jsx("div",{className:"whitespace-nowrap ease-custom-cubic translate-x-full transition-transform duration-500 group-hover:-translate-x-19",children:"Lobos Lertpunyaroj"})]}),R.jsx("nav",{className:"hidden md:flex gap-6 justify-center md:pr-20 lg:pr-50",children:s.map(({label:i,href:o},a)=>R.jsx("a",{href:o,ref:n,className:"font-interregular text-black select-none",onMouseEnter:()=>{t(a)},onMouseLeave:()=>{t(null)},children:i.split("").map((l,c)=>R.jsx("span",{className:"inline-block char whitespace-pre",children:l===" "?" ":l},c))},i))}),R.jsx("div",{className:"hidden lg:inline-flex items-center gap-2 pr-20",children:R.jsxs("a",{href:"#contact",className:"inline-flex items-center group",children:[R.jsx("span",{className:"font-interregular text-black",children:"Contact"}),R.jsx("img",{src:ic,className:"w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1",alt:""})]})})]})}function _f(s,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(s,t.key,t)}}function yf(s,e,r){return e&&_f(s.prototype,e),s}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ge,es,It,jr,Nr,Rn,sc,Qr,oi,oc,xr,Jt,ac,lc=function(){return Ge||typeof window<"u"&&(Ge=window.gsap)&&Ge.registerPlugin&&Ge},cc=1,kn=[],Z=[],ur=[],ai=Date.now,po=function(e,r){return r},vf=function(){var e=oi.core,r=e.bridge||{},t=e._scrollers,n=e._proxies;t.push.apply(t,Z),n.push.apply(n,ur),Z=t,ur=n,po=function(o,a){return r[o](a)}},$r=function(e,r){return~ur.indexOf(e)&&ur[ur.indexOf(e)+1][r]},li=function(e){return!!~oc.indexOf(e)},ut=function(e,r,t,n,i){return e.addEventListener(r,t,{passive:n!==!1,capture:!!i})},ct=function(e,r,t,n){return e.removeEventListener(r,t,!!n)},Ii="scrollLeft",ji="scrollTop",mo=function(){return xr&&xr.isPressed||Z.cache++},_s=function(e,r){var t=function n(i){if(i||i===0){cc&&(It.history.scrollRestoration="manual");var o=xr&&xr.isPressed;i=n.v=Math.round(i)||(xr&&xr.iOS?1:0),e(i),n.cacheID=Z.cache,o&&po("ss",i)}else(r||Z.cache!==n.cacheID||po("ref"))&&(n.cacheID=Z.cache,n.v=e());return n.v+n.offset};return t.offset=0,e&&t},mt={s:Ii,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:_s(function(s){return arguments.length?It.scrollTo(s,ze.sc()):It.pageXOffset||jr[Ii]||Nr[Ii]||Rn[Ii]||0})},ze={s:ji,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:mt,sc:_s(function(s){return arguments.length?It.scrollTo(mt.sc(),s):It.pageYOffset||jr[ji]||Nr[ji]||Rn[ji]||0})},yt=function(e,r){return(r&&r._ctx&&r._ctx.selector||Ge.utils.toArray)(e)[0]||(typeof e=="string"&&Ge.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},bf=function(e,r){for(var t=r.length;t--;)if(r[t]===e||r[t].contains(e))return!0;return!1},Yr=function(e,r){var t=r.s,n=r.sc;li(e)&&(e=jr.scrollingElement||Nr);var i=Z.indexOf(e),o=n===ze.sc?1:2;!~i&&(i=Z.push(e)-1),Z[i+o]||ut(e,"scroll",mo);var a=Z[i+o],l=a||(Z[i+o]=_s($r(e,t),!0)||(li(e)?n:_s(function(c){return arguments.length?e[t]=c:e[t]})));return l.target=e,a||(l.smooth=Ge.getProperty(e,"scrollBehavior")==="smooth"),l},go=function(e,r,t){var n=e,i=e,o=ai(),a=o,l=r||50,c=Math.max(500,l*3),u=function(g,f){var m=ai();f||m-o>l?(i=n,n=g,a=o,o=m):t?n+=g:n=i+(g-i)/(m-a)*(o-a)},d=function(){i=n=t?0:n,a=o=0},p=function(g){var f=a,m=i,b=ai();return(g||g===0)&&g!==n&&u(g),o===a||b-a>c?0:(n+(t?m:-m))/((t?b:o)-f)*1e3};return{update:u,reset:d,getVelocity:p}},Un=function(e,r){return r&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},ka=function(e){var r=Math.max.apply(Math,e),t=Math.min.apply(Math,e);return Math.abs(r)>=Math.abs(t)?r:t},uc=function(){oi=Ge.core.globals().ScrollTrigger,oi&&oi.core&&vf()},fc=function(e){return Ge=e||lc(),!es&&Ge&&typeof document<"u"&&document.body&&(It=window,jr=document,Nr=jr.documentElement,Rn=jr.body,oc=[It,jr,Nr,Rn],Ge.utils.clamp,ac=Ge.core.context||function(){},Qr="onpointerenter"in Rn?"pointer":"mouse",sc=Re.isTouch=It.matchMedia&&It.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in It||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Jt=Re.eventTypes=("ontouchstart"in Nr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Nr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return cc=0},500),uc(),es=1),es};mt.op=ze;Z.cache=0;var Re=function(){function s(r){this.init(r)}var e=s.prototype;return e.init=function(t){es||fc(Ge)||console.warn("Please gsap.registerPlugin(Observer)"),oi||uc();var n=t.tolerance,i=t.dragMinimum,o=t.type,a=t.target,l=t.lineHeight,c=t.debounce,u=t.preventDefault,d=t.onStop,p=t.onStopDelay,h=t.ignore,g=t.wheelSpeed,f=t.event,m=t.onDragStart,b=t.onDragEnd,y=t.onDrag,x=t.onPress,w=t.onRelease,_=t.onRight,C=t.onLeft,v=t.onUp,S=t.onDown,k=t.onChangeX,O=t.onChangeY,I=t.onChange,M=t.onToggleX,N=t.onToggleY,F=t.onHover,W=t.onHoverEnd,B=t.onMove,z=t.ignoreCheck,V=t.isNormalizer,re=t.onGestureStart,T=t.onGestureEnd,ce=t.onWheel,Ve=t.onEnable,kt=t.onDisable,me=t.onClick,Te=t.scrollSpeed,je=t.capture,he=t.allowClicks,at=t.lockAxis,Ke=t.onLockAxis;this.target=a=yt(a)||Nr,this.vars=t,h&&(h=Ge.utils.toArray(h)),n=n||1e-9,i=i||0,g=g||1,Te=Te||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(It.getComputedStyle(Rn).lineHeight)||22);var kr,lt,gt,ee,ke,_t,Ct,P=this,Pt=0,hr=0,Cr=t.passive||!u&&t.passive!==!1,xe=Yr(a,mt),pr=Yr(a,ze),Pr=xe(),Wr=pr(),$e=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Jt[0]==="pointerdown",Or=li(a),Ce=a.ownerDocument||jr,qt=[0,0,0],Ft=[0,0,0],mr=0,Yn=function(){return mr=ai()},Me=function($,ne){return(P.event=$)&&h&&bf($.target,h)||ne&&$e&&$.pointerType!=="touch"||z&&z($,ne)},Mi=function(){P._vx.reset(),P._vy.reset(),lt.pause(),d&&d(P)},gr=function(){var $=P.deltaX=ka(qt),ne=P.deltaY=ka(Ft),D=Math.abs($)>=n,Y=Math.abs(ne)>=n;I&&(D||Y)&&I(P,$,ne,qt,Ft),D&&(_&&P.deltaX>0&&_(P),C&&P.deltaX<0&&C(P),k&&k(P),M&&P.deltaX<0!=Pt<0&&M(P),Pt=P.deltaX,qt[0]=qt[1]=qt[2]=0),Y&&(S&&P.deltaY>0&&S(P),v&&P.deltaY<0&&v(P),O&&O(P),N&&P.deltaY<0!=hr<0&&N(P),hr=P.deltaY,Ft[0]=Ft[1]=Ft[2]=0),(ee||gt)&&(B&&B(P),gt&&(m&&gt===1&&m(P),y&&y(P),gt=0),ee=!1),_t&&!(_t=!1)&&Ke&&Ke(P),ke&&(ce(P),ke=!1),kr=0},mn=function($,ne,D){qt[D]+=$,Ft[D]+=ne,P._vx.update($),P._vy.update(ne),c?kr||(kr=requestAnimationFrame(gr)):gr()},gn=function($,ne){at&&!Ct&&(P.axis=Ct=Math.abs($)>Math.abs(ne)?"x":"y",_t=!0),Ct!=="y"&&(qt[2]+=$,P._vx.update($,!0)),Ct!=="x"&&(Ft[2]+=ne,P._vy.update(ne,!0)),c?kr||(kr=requestAnimationFrame(gr)):gr()},Rr=function($){if(!Me($,1)){$=Un($,u);var ne=$.clientX,D=$.clientY,Y=ne-P.x,L=D-P.y,X=P.isDragging;P.x=ne,P.y=D,(X||(Y||L)&&(Math.abs(P.startX-ne)>=i||Math.abs(P.startY-D)>=i))&&(gt=X?2:1,X||(P.isDragging=!0),gn(Y,L))}},Vr=P.onPress=function(H){Me(H,1)||H&&H.button||(P.axis=Ct=null,lt.pause(),P.isPressed=!0,H=Un(H),Pt=hr=0,P.startX=P.x=H.clientX,P.startY=P.y=H.clientY,P._vx.reset(),P._vy.reset(),ut(V?a:Ce,Jt[1],Rr,Cr,!0),P.deltaX=P.deltaY=0,x&&x(P))},K=P.onRelease=function(H){if(!Me(H,1)){ct(V?a:Ce,Jt[1],Rr,!0);var $=!isNaN(P.y-P.startY),ne=P.isDragging,D=ne&&(Math.abs(P.x-P.startX)>3||Math.abs(P.y-P.startY)>3),Y=Un(H);!D&&$&&(P._vx.reset(),P._vy.reset(),u&&he&&Ge.delayedCall(.08,function(){if(ai()-mr>300&&!H.defaultPrevented){if(H.target.click)H.target.click();else if(Ce.createEvent){var L=Ce.createEvent("MouseEvents");L.initMouseEvent("click",!0,!0,It,1,Y.screenX,Y.screenY,Y.clientX,Y.clientY,!1,!1,!1,!1,0,null),H.target.dispatchEvent(L)}}})),P.isDragging=P.isGesturing=P.isPressed=!1,d&&ne&&!V&&lt.restart(!0),gt&&gr(),b&&ne&&b(P),w&&w(P,D)}},Hr=function($){return $.touches&&$.touches.length>1&&(P.isGesturing=!0)&&re($,P.isDragging)},Gt=function(){return(P.isGesturing=!1)||T(P)},Zt=function($){if(!Me($)){var ne=xe(),D=pr();mn((ne-Pr)*Te,(D-Wr)*Te,1),Pr=ne,Wr=D,d&&lt.restart(!0)}},Kt=function($){if(!Me($)){$=Un($,u),ce&&(ke=!0);var ne=($.deltaMode===1?l:$.deltaMode===2?It.innerHeight:1)*g;mn($.deltaX*ne,$.deltaY*ne,0),d&&!V&&lt.restart(!0)}},Ur=function($){if(!Me($)){var ne=$.clientX,D=$.clientY,Y=ne-P.x,L=D-P.y;P.x=ne,P.y=D,ee=!0,d&&lt.restart(!0),(Y||L)&&gn(Y,L)}},_n=function($){P.event=$,F(P)},_r=function($){P.event=$,W(P)},Xn=function($){return Me($)||Un($,u)&&me(P)};lt=P._dc=Ge.delayedCall(p||.25,Mi).pause(),P.deltaX=P.deltaY=0,P._vx=go(0,50,!0),P._vy=go(0,50,!0),P.scrollX=xe,P.scrollY=pr,P.isDragging=P.isGesturing=P.isPressed=!1,ac(this),P.enable=function(H){return P.isEnabled||(ut(Or?Ce:a,"scroll",mo),o.indexOf("scroll")>=0&&ut(Or?Ce:a,"scroll",Zt,Cr,je),o.indexOf("wheel")>=0&&ut(a,"wheel",Kt,Cr,je),(o.indexOf("touch")>=0&&sc||o.indexOf("pointer")>=0)&&(ut(a,Jt[0],Vr,Cr,je),ut(Ce,Jt[2],K),ut(Ce,Jt[3],K),he&&ut(a,"click",Yn,!0,!0),me&&ut(a,"click",Xn),re&&ut(Ce,"gesturestart",Hr),T&&ut(Ce,"gestureend",Gt),F&&ut(a,Qr+"enter",_n),W&&ut(a,Qr+"leave",_r),B&&ut(a,Qr+"move",Ur)),P.isEnabled=!0,P.isDragging=P.isGesturing=P.isPressed=ee=gt=!1,P._vx.reset(),P._vy.reset(),Pr=xe(),Wr=pr(),H&&H.type&&Vr(H),Ve&&Ve(P)),P},P.disable=function(){P.isEnabled&&(kn.filter(function(H){return H!==P&&li(H.target)}).length||ct(Or?Ce:a,"scroll",mo),P.isPressed&&(P._vx.reset(),P._vy.reset(),ct(V?a:Ce,Jt[1],Rr,!0)),ct(Or?Ce:a,"scroll",Zt,je),ct(a,"wheel",Kt,je),ct(a,Jt[0],Vr,je),ct(Ce,Jt[2],K),ct(Ce,Jt[3],K),ct(a,"click",Yn,!0),ct(a,"click",Xn),ct(Ce,"gesturestart",Hr),ct(Ce,"gestureend",Gt),ct(a,Qr+"enter",_n),ct(a,Qr+"leave",_r),ct(a,Qr+"move",Ur),P.isEnabled=P.isPressed=P.isDragging=!1,kt&&kt(P))},P.kill=P.revert=function(){P.disable();var H=kn.indexOf(P);H>=0&&kn.splice(H,1),xr===P&&(xr=0)},kn.push(P),V&&li(a)&&(xr=P),P.enable(f)},yf(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s}();Re.version="3.13.0";Re.create=function(s){return new Re(s)};Re.register=fc;Re.getAll=function(){return kn.slice()};Re.getById=function(s){return kn.filter(function(e){return e.vars.id===s})[0]};lc()&&Ge.registerPlugin(Re);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var j,xn,G,pe,Dt,le,Uo,ys,wi,ci,Qn,Ni,rt,Cs,_o,dt,Ca,Pa,wn,dc,Fs,hc,ft,yo,pc,mc,Er,vo,qo,Mn,Go,vs,bo,Bs,Li=1,nt=Date.now,Ys=nt(),Ut=0,Jn=0,Oa=function(e,r,t){var n=Mt(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return t["_"+r+"Clamp"]=n,n?e.substr(6,e.length-7):e},Ra=function(e,r){return r&&(!Mt(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},xf=function s(){return Jn&&requestAnimationFrame(s)},Ma=function(){return Cs=1},Ea=function(){return Cs=0},ir=function(e){return e},ei=function(e){return Math.round(e*1e5)/1e5||0},gc=function(){return typeof window<"u"},_c=function(){return j||gc()&&(j=window.gsap)&&j.registerPlugin&&j},fn=function(e){return!!~Uo.indexOf(e)},yc=function(e){return(e==="Height"?Go:G["inner"+e])||Dt["client"+e]||le["client"+e]},vc=function(e){return $r(e,"getBoundingClientRect")||(fn(e)?function(){return ss.width=G.innerWidth,ss.height=Go,ss}:function(){return br(e)})},wf=function(e,r,t){var n=t.d,i=t.d2,o=t.a;return(o=$r(e,"getBoundingClientRect"))?function(){return o()[n]}:function(){return(r?yc(i):e["client"+i])||0}},Sf=function(e,r){return!r||~ur.indexOf(e)?vc(e):function(){return ss}},cr=function(e,r){var t=r.s,n=r.d2,i=r.d,o=r.a;return Math.max(0,(t="scroll"+n)&&(o=$r(e,t))?o()-vc(e)()[i]:fn(e)?(Dt[t]||le[t])-yc(n):e[t]-e["offset"+n])},zi=function(e,r){for(var t=0;t<wn.length;t+=3)(!r||~r.indexOf(wn[t+1]))&&e(wn[t],wn[t+1],wn[t+2])},Mt=function(e){return typeof e=="string"},st=function(e){return typeof e=="function"},ti=function(e){return typeof e=="number"},Jr=function(e){return typeof e=="object"},qn=function(e,r,t){return e&&e.progress(r?0:1)&&t&&e.pause()},Xs=function(e,r){if(e.enabled){var t=e._ctx?e._ctx.add(function(){return r(e)}):r(e);t&&t.totalTime&&(e.callbackAnimation=t)}},vn=Math.abs,bc="left",xc="top",Zo="right",Ko="bottom",an="width",ln="height",ui="Right",fi="Left",di="Top",hi="Bottom",Ee="padding",Yt="margin",$n="Width",Qo="Height",Le="px",Xt=function(e){return G.getComputedStyle(e)},Tf=function(e){var r=Xt(e).position;e.style.position=r==="absolute"||r==="fixed"?r:"relative"},Da=function(e,r){for(var t in r)t in e||(e[t]=r[t]);return e},br=function(e,r){var t=r&&Xt(e)[_o]!=="matrix(1, 0, 0, 1, 0, 0)"&&j.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect();return t&&t.progress(0).kill(),n},bs=function(e,r){var t=r.d2;return e["offset"+t]||e["client"+t]||0},wc=function(e){var r=[],t=e.labels,n=e.duration(),i;for(i in t)r.push(t[i]/n);return r},kf=function(e){return function(r){return j.utils.snap(wc(e),r)}},Jo=function(e){var r=j.utils.snap(e),t=Array.isArray(e)&&e.slice(0).sort(function(n,i){return n-i});return t?function(n,i,o){o===void 0&&(o=.001);var a;if(!i)return r(n);if(i>0){for(n-=o,a=0;a<t.length;a++)if(t[a]>=n)return t[a];return t[a-1]}else for(a=t.length,n+=o;a--;)if(t[a]<=n)return t[a];return t[0]}:function(n,i,o){o===void 0&&(o=.001);var a=r(n);return!i||Math.abs(a-n)<o||a-n<0==i<0?a:r(i<0?n-e:n+e)}},Cf=function(e){return function(r,t){return Jo(wc(e))(r,t.direction)}},$i=function(e,r,t,n){return t.split(",").forEach(function(i){return e(r,i,n)})},Xe=function(e,r,t,n,i){return e.addEventListener(r,t,{passive:!n,capture:!!i})},Be=function(e,r,t,n){return e.removeEventListener(r,t,!!n)},Fi=function(e,r,t){t=t&&t.wheelHandler,t&&(e(r,"wheel",t),e(r,"touchmove",t))},Aa={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Bi={toggleActions:"play",anticipatePin:0},xs={top:0,left:0,center:.5,bottom:1,right:1},ts=function(e,r){if(Mt(e)){var t=e.indexOf("="),n=~t?+(e.charAt(t-1)+1)*parseFloat(e.substr(t+1)):0;~t&&(e.indexOf("%")>t&&(n*=r/100),e=e.substr(0,t-1)),e=n+(e in xs?xs[e]*r:~e.indexOf("%")?parseFloat(e)*r/100:parseFloat(e)||0)}return e},Yi=function(e,r,t,n,i,o,a,l){var c=i.startColor,u=i.endColor,d=i.fontSize,p=i.indent,h=i.fontWeight,g=pe.createElement("div"),f=fn(t)||$r(t,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,b=f?le:t,y=e.indexOf("start")!==-1,x=y?c:u,w="border-color:"+x+";font-size:"+d+";color:"+x+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return w+="position:"+((m||l)&&f?"fixed;":"absolute;"),(m||l||!f)&&(w+=(n===ze?Zo:Ko)+":"+(o+parseFloat(p))+"px;"),a&&(w+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=y,g.setAttribute("class","gsap-marker-"+e+(r?" marker-"+r:"")),g.style.cssText=w,g.innerText=r||r===0?e+"-"+r:e,b.children[0]?b.insertBefore(g,b.children[0]):b.appendChild(g),g._offset=g["offset"+n.op.d2],rs(g,0,n,y),g},rs=function(e,r,t,n){var i={display:"block"},o=t[n?"os2":"p2"],a=t[n?"p2":"os2"];e._isFlipped=n,i[t.a+"Percent"]=n?-100:0,i[t.a]=n?"1px":0,i["border"+o+$n]=1,i["border"+a+$n]=0,i[t.p]=r+"px",j.set(e,i)},q=[],xo={},Si,Ia=function(){return nt()-Ut>34&&(Si||(Si=requestAnimationFrame(wr)))},bn=function(){(!ft||!ft.isPressed||ft.startX>le.clientWidth)&&(Z.cache++,ft?Si||(Si=requestAnimationFrame(wr)):wr(),Ut||hn("scrollStart"),Ut=nt())},Ws=function(){mc=G.innerWidth,pc=G.innerHeight},ri=function(e){Z.cache++,(e===!0||!rt&&!hc&&!pe.fullscreenElement&&!pe.webkitFullscreenElement&&(!yo||mc!==G.innerWidth||Math.abs(G.innerHeight-pc)>G.innerHeight*.25))&&ys.restart(!0)},dn={},Pf=[],Sc=function s(){return Be(U,"scrollEnd",s)||tn(!0)},hn=function(e){return dn[e]&&dn[e].map(function(r){return r()})||Pf},Rt=[],Tc=function(e){for(var r=0;r<Rt.length;r+=5)(!e||Rt[r+4]&&Rt[r+4].query===e)&&(Rt[r].style.cssText=Rt[r+1],Rt[r].getBBox&&Rt[r].setAttribute("transform",Rt[r+2]||""),Rt[r+3].uncache=1)},ea=function(e,r){var t;for(dt=0;dt<q.length;dt++)t=q[dt],t&&(!r||t._ctx===r)&&(e?t.kill(1):t.revert(!0,!0));vs=!0,r&&Tc(r),r||hn("revert")},kc=function(e,r){Z.cache++,(r||!ht)&&Z.forEach(function(t){return st(t)&&t.cacheID++&&(t.rec=0)}),Mt(e)&&(G.history.scrollRestoration=qo=e)},ht,cn=0,ja,Of=function(){if(ja!==cn){var e=ja=cn;requestAnimationFrame(function(){return e===cn&&tn(!0)})}},Cc=function(){le.appendChild(Mn),Go=!ft&&Mn.offsetHeight||G.innerHeight,le.removeChild(Mn)},Na=function(e){return wi(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(r){return r.style.display=e?"none":"block"})},tn=function(e,r){if(Dt=pe.documentElement,le=pe.body,Uo=[G,pe,Dt,le],Ut&&!e&&!vs){Xe(U,"scrollEnd",Sc);return}Cc(),ht=U.isRefreshing=!0,Z.forEach(function(n){return st(n)&&++n.cacheID&&(n.rec=n())});var t=hn("refreshInit");dc&&U.sort(),r||ea(),Z.forEach(function(n){st(n)&&(n.smooth&&(n.target.style.scrollBehavior="auto"),n(0))}),q.slice(0).forEach(function(n){return n.refresh()}),vs=!1,q.forEach(function(n){if(n._subPinOffset&&n.pin){var i=n.vars.horizontal?"offsetWidth":"offsetHeight",o=n.pin[i];n.revert(!0,1),n.adjustPinSpacing(n.pin[i]-o),n.refresh()}}),bo=1,Na(!0),q.forEach(function(n){var i=cr(n.scroller,n._dir),o=n.vars.end==="max"||n._endClamp&&n.end>i,a=n._startClamp&&n.start>=i;(o||a)&&n.setPositions(a?i-1:n.start,o?Math.max(a?i:n.start+1,i):n.end,!0)}),Na(!1),bo=0,t.forEach(function(n){return n&&n.render&&n.render(-1)}),Z.forEach(function(n){st(n)&&(n.smooth&&requestAnimationFrame(function(){return n.target.style.scrollBehavior="smooth"}),n.rec&&n(n.rec))}),kc(qo,1),ys.pause(),cn++,ht=2,wr(2),q.forEach(function(n){return st(n.vars.onRefresh)&&n.vars.onRefresh(n)}),ht=U.isRefreshing=!1,hn("refresh")},wo=0,ns=1,pi,wr=function(e){if(e===2||!ht&&!vs){U.isUpdating=!0,pi&&pi.update(0);var r=q.length,t=nt(),n=t-Ys>=50,i=r&&q[0].scroll();if(ns=wo>i?-1:1,ht||(wo=i),n&&(Ut&&!Cs&&t-Ut>200&&(Ut=0,hn("scrollEnd")),Qn=Ys,Ys=t),ns<0){for(dt=r;dt-- >0;)q[dt]&&q[dt].update(0,n);ns=1}else for(dt=0;dt<r;dt++)q[dt]&&q[dt].update(0,n);U.isUpdating=!1}Si=0},So=[bc,xc,Ko,Zo,Yt+hi,Yt+ui,Yt+di,Yt+fi,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],is=So.concat([an,ln,"boxSizing","max"+$n,"max"+Qo,"position",Yt,Ee,Ee+di,Ee+ui,Ee+hi,Ee+fi]),Rf=function(e,r,t){En(t);var n=e._gsap;if(n.spacerIsNative)En(n.spacerState);else if(e._gsap.swappedIn){var i=r.parentNode;i&&(i.insertBefore(e,r),i.removeChild(r))}e._gsap.swappedIn=!1},Vs=function(e,r,t,n){if(!e._gsap.swappedIn){for(var i=So.length,o=r.style,a=e.style,l;i--;)l=So[i],o[l]=t[l];o.position=t.position==="absolute"?"absolute":"relative",t.display==="inline"&&(o.display="inline-block"),a[Ko]=a[Zo]="auto",o.flexBasis=t.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[an]=bs(e,mt)+Le,o[ln]=bs(e,ze)+Le,o[Ee]=a[Yt]=a[xc]=a[bc]="0",En(n),a[an]=a["max"+$n]=t[an],a[ln]=a["max"+Qo]=t[ln],a[Ee]=t[Ee],e.parentNode!==r&&(e.parentNode.insertBefore(r,e),r.appendChild(e)),e._gsap.swappedIn=!0}},Mf=/([A-Z])/g,En=function(e){if(e){var r=e.t.style,t=e.length,n=0,i,o;for((e.t._gsap||j.core.getCache(e.t)).uncache=1;n<t;n+=2)o=e[n+1],i=e[n],o?r[i]=o:r[i]&&r.removeProperty(i.replace(Mf,"-$1").toLowerCase())}},Xi=function(e){for(var r=is.length,t=e.style,n=[],i=0;i<r;i++)n.push(is[i],t[is[i]]);return n.t=e,n},Ef=function(e,r,t){for(var n=[],i=e.length,o=t?8:0,a;o<i;o+=2)a=e[o],n.push(a,a in r?r[a]:e[o+1]);return n.t=e.t,n},ss={left:0,top:0},La=function(e,r,t,n,i,o,a,l,c,u,d,p,h,g){st(e)&&(e=e(l)),Mt(e)&&e.substr(0,3)==="max"&&(e=p+(e.charAt(4)==="="?ts("0"+e.substr(3),t):0));var f=h?h.time():0,m,b,y;if(h&&h.seek(0),isNaN(e)||(e=+e),ti(e))h&&(e=j.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,p,e)),a&&rs(a,t,n,!0);else{st(r)&&(r=r(l));var x=(e||"0").split(" "),w,_,C,v;y=yt(r,l)||le,w=br(y)||{},(!w||!w.left&&!w.top)&&Xt(y).display==="none"&&(v=y.style.display,y.style.display="block",w=br(y),v?y.style.display=v:y.style.removeProperty("display")),_=ts(x[0],w[n.d]),C=ts(x[1]||"0",t),e=w[n.p]-c[n.p]-u+_+i-C,a&&rs(a,C,n,t-C<20||a._isStart&&C>20),t-=t-C}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var S=e+t,k=o._isStart;m="scroll"+n.d2,rs(o,S,n,k&&S>20||!k&&(d?Math.max(le[m],Dt[m]):o.parentNode[m])<=S+1),d&&(c=br(a),d&&(o.style[n.op.p]=c[n.op.p]-n.op.m-o._offset+Le))}return h&&y&&(m=br(y),h.seek(p),b=br(y),h._caScrollDist=m[n.p]-b[n.p],e=e/h._caScrollDist*p),h&&h.seek(f),h?e:Math.round(e)},Df=/(webkit|moz|length|cssText|inset)/i,za=function(e,r,t,n){if(e.parentNode!==r){var i=e.style,o,a;if(r===le){e._stOrig=i.cssText,a=Xt(e);for(o in a)!+o&&!Df.test(o)&&a[o]&&typeof i[o]=="string"&&o!=="0"&&(i[o]=a[o]);i.top=t,i.left=n}else i.cssText=e._stOrig;j.core.getCache(e).uncache=1,r.appendChild(e)}},Pc=function(e,r,t){var n=r,i=n;return function(o){var a=Math.round(e());return a!==n&&a!==i&&Math.abs(a-n)>3&&Math.abs(a-i)>3&&(o=a,t&&t()),i=n,n=Math.round(o),n}},Wi=function(e,r,t){var n={};n[r.p]="+="+t,j.set(e,n)},$a=function(e,r){var t=Yr(e,r),n="_scroll"+r.p2,i=function o(a,l,c,u,d){var p=o.tween,h=l.onComplete,g={};c=c||t();var f=Pc(t,c,function(){p.kill(),o.tween=0});return d=u&&d||0,u=u||a-c,p&&p.kill(),l[n]=a,l.inherit=!1,l.modifiers=g,g[n]=function(){return f(c+u*p.ratio+d*p.ratio*p.ratio)},l.onUpdate=function(){Z.cache++,o.tween&&wr()},l.onComplete=function(){o.tween=0,h&&h.call(p)},p=o.tween=j.to(e,l),p};return e[n]=t,t.wheelHandler=function(){return i.tween&&i.tween.kill()&&(i.tween=0)},Xe(e,"wheel",t.wheelHandler),U.isTouch&&Xe(e,"touchmove",t.wheelHandler),i},U=function(){function s(r,t){xn||s.register(j)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),vo(this),this.init(r,t)}var e=s.prototype;return e.init=function(t,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Jn){this.update=this.refresh=this.kill=ir;return}t=Da(Mt(t)||ti(t)||t.nodeType?{trigger:t}:t,Bi);var i=t,o=i.onUpdate,a=i.toggleClass,l=i.id,c=i.onToggle,u=i.onRefresh,d=i.scrub,p=i.trigger,h=i.pin,g=i.pinSpacing,f=i.invalidateOnRefresh,m=i.anticipatePin,b=i.onScrubComplete,y=i.onSnapComplete,x=i.once,w=i.snap,_=i.pinReparent,C=i.pinSpacer,v=i.containerAnimation,S=i.fastScrollEnd,k=i.preventOverlaps,O=t.horizontal||t.containerAnimation&&t.horizontal!==!1?mt:ze,I=!d&&d!==0,M=yt(t.scroller||G),N=j.core.getCache(M),F=fn(M),W=("pinType"in t?t.pinType:$r(M,"pinType")||F&&"fixed")==="fixed",B=[t.onEnter,t.onLeave,t.onEnterBack,t.onLeaveBack],z=I&&t.toggleActions.split(" "),V="markers"in t?t.markers:Bi.markers,re=F?0:parseFloat(Xt(M)["border"+O.p2+$n])||0,T=this,ce=t.onRefreshInit&&function(){return t.onRefreshInit(T)},Ve=wf(M,F,O),kt=Sf(M,F),me=0,Te=0,je=0,he=Yr(M,O),at,Ke,kr,lt,gt,ee,ke,_t,Ct,P,Pt,hr,Cr,xe,pr,Pr,Wr,$e,Or,Ce,qt,Ft,mr,Yn,Me,Mi,gr,mn,gn,Rr,Vr,K,Hr,Gt,Zt,Kt,Ur,_n,_r;if(T._startClamp=T._endClamp=!1,T._dir=O,m*=45,T.scroller=M,T.scroll=v?v.time.bind(v):he,lt=he(),T.vars=t,n=n||t.animation,"refreshPriority"in t&&(dc=1,t.refreshPriority===-9999&&(pi=T)),N.tweenScroll=N.tweenScroll||{top:$a(M,ze),left:$a(M,mt)},T.tweenTo=at=N.tweenScroll[O.p],T.scrubDuration=function(D){Hr=ti(D)&&D,Hr?K?K.duration(D):K=j.to(n,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Hr,paused:!0,onComplete:function(){return b&&b(T)}}):(K&&K.progress(1).kill(),K=0)},n&&(n.vars.lazy=!1,n._initted&&!T.isReverted||n.vars.immediateRender!==!1&&t.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),T.animation=n.pause(),n.scrollTrigger=T,T.scrubDuration(d),Rr=0,l||(l=n.vars.id)),w&&((!Jr(w)||w.push)&&(w={snapTo:w}),"scrollBehavior"in le.style&&j.set(F?[le,Dt]:M,{scrollBehavior:"auto"}),Z.forEach(function(D){return st(D)&&D.target===(F?pe.scrollingElement||Dt:M)&&(D.smooth=!1)}),kr=st(w.snapTo)?w.snapTo:w.snapTo==="labels"?kf(n):w.snapTo==="labelsDirectional"?Cf(n):w.directional!==!1?function(D,Y){return Jo(w.snapTo)(D,nt()-Te<500?0:Y.direction)}:j.utils.snap(w.snapTo),Gt=w.duration||{min:.1,max:2},Gt=Jr(Gt)?ci(Gt.min,Gt.max):ci(Gt,Gt),Zt=j.delayedCall(w.delay||Hr/2||.1,function(){var D=he(),Y=nt()-Te<500,L=at.tween;if((Y||Math.abs(T.getVelocity())<10)&&!L&&!Cs&&me!==D){var X=(D-ee)/xe,Fe=n&&!I?n.totalProgress():X,Q=Y?0:(Fe-Vr)/(nt()-Qn)*1e3||0,Pe=j.utils.clamp(-X,1-X,vn(Q/2)*Q/.185),Qe=X+(w.inertia===!1?0:Pe),we,ge,ue=w,Qt=ue.onStart,ye=ue.onInterrupt,Ot=ue.onComplete;if(we=kr(Qe,T),ti(we)||(we=Qe),ge=Math.max(0,Math.round(ee+we*xe)),D<=ke&&D>=ee&&ge!==D){if(L&&!L._initted&&L.data<=vn(ge-D))return;w.inertia===!1&&(Pe=we-X),at(ge,{duration:Gt(vn(Math.max(vn(Qe-Fe),vn(we-Fe))*.185/Q/.05||0)),ease:w.ease||"power3",data:vn(ge-D),onInterrupt:function(){return Zt.restart(!0)&&ye&&ye(T)},onComplete:function(){T.update(),me=he(),n&&!I&&(K?K.resetTo("totalProgress",we,n._tTime/n._tDur):n.progress(we)),Rr=Vr=n&&!I?n.totalProgress():T.progress,y&&y(T),Ot&&Ot(T)}},D,Pe*xe,ge-D-Pe*xe),Qt&&Qt(T,at.tween)}}else T.isActive&&me!==D&&Zt.restart(!0)}).pause()),l&&(xo[l]=T),p=T.trigger=yt(p||h!==!0&&h),_r=p&&p._gsap&&p._gsap.stRevert,_r&&(_r=_r(T)),h=h===!0?p:yt(h),Mt(a)&&(a={targets:p,className:a}),h&&(g===!1||g===Yt||(g=!g&&h.parentNode&&h.parentNode.style&&Xt(h.parentNode).display==="flex"?!1:Ee),T.pin=h,Ke=j.core.getCache(h),Ke.spacer?pr=Ke.pinState:(C&&(C=yt(C),C&&!C.nodeType&&(C=C.current||C.nativeElement),Ke.spacerIsNative=!!C,C&&(Ke.spacerState=Xi(C))),Ke.spacer=$e=C||pe.createElement("div"),$e.classList.add("pin-spacer"),l&&$e.classList.add("pin-spacer-"+l),Ke.pinState=pr=Xi(h)),t.force3D!==!1&&j.set(h,{force3D:!0}),T.spacer=$e=Ke.spacer,gn=Xt(h),Yn=gn[g+O.os2],Ce=j.getProperty(h),qt=j.quickSetter(h,O.a,Le),Vs(h,$e,gn),Wr=Xi(h)),V){hr=Jr(V)?Da(V,Aa):Aa,P=Yi("scroller-start",l,M,O,hr,0),Pt=Yi("scroller-end",l,M,O,hr,0,P),Or=P["offset"+O.op.d2];var Xn=yt($r(M,"content")||M);_t=this.markerStart=Yi("start",l,Xn,O,hr,Or,0,v),Ct=this.markerEnd=Yi("end",l,Xn,O,hr,Or,0,v),v&&(_n=j.quickSetter([_t,Ct],O.a,Le)),!W&&!(ur.length&&$r(M,"fixedMarkers")===!0)&&(Tf(F?le:M),j.set([P,Pt],{force3D:!0}),Mi=j.quickSetter(P,O.a,Le),mn=j.quickSetter(Pt,O.a,Le))}if(v){var H=v.vars.onUpdate,$=v.vars.onUpdateParams;v.eventCallback("onUpdate",function(){T.update(0,0,1),H&&H.apply(v,$||[])})}if(T.previous=function(){return q[q.indexOf(T)-1]},T.next=function(){return q[q.indexOf(T)+1]},T.revert=function(D,Y){if(!Y)return T.kill(!0);var L=D!==!1||!T.enabled,X=rt;L!==T.isReverted&&(L&&(Kt=Math.max(he(),T.scroll.rec||0),je=T.progress,Ur=n&&n.progress()),_t&&[_t,Ct,P,Pt].forEach(function(Fe){return Fe.style.display=L?"none":"block"}),L&&(rt=T,T.update(L)),h&&(!_||!T.isActive)&&(L?Rf(h,$e,pr):Vs(h,$e,Xt(h),Me)),L||T.update(L),rt=X,T.isReverted=L)},T.refresh=function(D,Y,L,X){if(!((rt||!T.enabled)&&!Y)){if(h&&D&&Ut){Xe(s,"scrollEnd",Sc);return}!ht&&ce&&ce(T),rt=T,at.tween&&!L&&(at.tween.kill(),at.tween=0),K&&K.pause(),f&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren&&n.getChildren(!0,!0,!1).forEach(function(Mr){return Mr.vars.immediateRender&&Mr.render(0,!0,!0)})),T.isReverted||T.revert(!0,!0),T._subPinOffset=!1;var Fe=Ve(),Q=kt(),Pe=v?v.duration():cr(M,O),Qe=xe<=.01||!xe,we=0,ge=X||0,ue=Jr(L)?L.end:t.end,Qt=t.endTrigger||p,ye=Jr(L)?L.start:t.start||(t.start===0||!p?0:h?"0 0":"0 100%"),Ot=T.pinnedContainer=t.pinnedContainer&&yt(t.pinnedContainer,T),er=p&&Math.max(0,q.indexOf(T))||0,He=er,Ue,Je,qr,Ei,et,Ne,tr,Es,oa,Wn,rr,Vn,Di;for(V&&Jr(L)&&(Vn=j.getProperty(P,O.p),Di=j.getProperty(Pt,O.p));He-- >0;)Ne=q[He],Ne.end||Ne.refresh(0,1)||(rt=T),tr=Ne.pin,tr&&(tr===p||tr===h||tr===Ot)&&!Ne.isReverted&&(Wn||(Wn=[]),Wn.unshift(Ne),Ne.revert(!0,!0)),Ne!==q[He]&&(er--,He--);for(st(ye)&&(ye=ye(T)),ye=Oa(ye,"start",T),ee=La(ye,p,Fe,O,he(),_t,P,T,Q,re,W,Pe,v,T._startClamp&&"_startClamp")||(h?-.001:0),st(ue)&&(ue=ue(T)),Mt(ue)&&!ue.indexOf("+=")&&(~ue.indexOf(" ")?ue=(Mt(ye)?ye.split(" ")[0]:"")+ue:(we=ts(ue.substr(2),Fe),ue=Mt(ye)?ye:(v?j.utils.mapRange(0,v.duration(),v.scrollTrigger.start,v.scrollTrigger.end,ee):ee)+we,Qt=p)),ue=Oa(ue,"end",T),ke=Math.max(ee,La(ue||(Qt?"100% 0":Pe),Qt,Fe,O,he()+we,Ct,Pt,T,Q,re,W,Pe,v,T._endClamp&&"_endClamp"))||-.001,we=0,He=er;He--;)Ne=q[He],tr=Ne.pin,tr&&Ne.start-Ne._pinPush<=ee&&!v&&Ne.end>0&&(Ue=Ne.end-(T._startClamp?Math.max(0,Ne.start):Ne.start),(tr===p&&Ne.start-Ne._pinPush<ee||tr===Ot)&&isNaN(ye)&&(we+=Ue*(1-Ne.progress)),tr===h&&(ge+=Ue));if(ee+=we,ke+=we,T._startClamp&&(T._startClamp+=we),T._endClamp&&!ht&&(T._endClamp=ke||-.001,ke=Math.min(ke,cr(M,O))),xe=ke-ee||(ee-=.01)&&.001,Qe&&(je=j.utils.clamp(0,1,j.utils.normalize(ee,ke,Kt))),T._pinPush=ge,_t&&we&&(Ue={},Ue[O.a]="+="+we,Ot&&(Ue[O.p]="-="+he()),j.set([_t,Ct],Ue)),h&&!(bo&&T.end>=cr(M,O)))Ue=Xt(h),Ei=O===ze,qr=he(),Ft=parseFloat(Ce(O.a))+ge,!Pe&&ke>1&&(rr=(F?pe.scrollingElement||Dt:M).style,rr={style:rr,value:rr["overflow"+O.a.toUpperCase()]},F&&Xt(le)["overflow"+O.a.toUpperCase()]!=="scroll"&&(rr.style["overflow"+O.a.toUpperCase()]="scroll")),Vs(h,$e,Ue),Wr=Xi(h),Je=br(h,!0),Es=W&&Yr(M,Ei?mt:ze)(),g?(Me=[g+O.os2,xe+ge+Le],Me.t=$e,He=g===Ee?bs(h,O)+xe+ge:0,He&&(Me.push(O.d,He+Le),$e.style.flexBasis!=="auto"&&($e.style.flexBasis=He+Le)),En(Me),Ot&&q.forEach(function(Mr){Mr.pin===Ot&&Mr.vars.pinSpacing!==!1&&(Mr._subPinOffset=!0)}),W&&he(Kt)):(He=bs(h,O),He&&$e.style.flexBasis!=="auto"&&($e.style.flexBasis=He+Le)),W&&(et={top:Je.top+(Ei?qr-ee:Es)+Le,left:Je.left+(Ei?Es:qr-ee)+Le,boxSizing:"border-box",position:"fixed"},et[an]=et["max"+$n]=Math.ceil(Je.width)+Le,et[ln]=et["max"+Qo]=Math.ceil(Je.height)+Le,et[Yt]=et[Yt+di]=et[Yt+ui]=et[Yt+hi]=et[Yt+fi]="0",et[Ee]=Ue[Ee],et[Ee+di]=Ue[Ee+di],et[Ee+ui]=Ue[Ee+ui],et[Ee+hi]=Ue[Ee+hi],et[Ee+fi]=Ue[Ee+fi],Pr=Ef(pr,et,_),ht&&he(0)),n?(oa=n._initted,Fs(1),n.render(n.duration(),!0,!0),mr=Ce(O.a)-Ft+xe+ge,gr=Math.abs(xe-mr)>1,W&&gr&&Pr.splice(Pr.length-2,2),n.render(0,!0,!0),oa||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),Fs(0)):mr=xe,rr&&(rr.value?rr.style["overflow"+O.a.toUpperCase()]=rr.value:rr.style.removeProperty("overflow-"+O.a));else if(p&&he()&&!v)for(Je=p.parentNode;Je&&Je!==le;)Je._pinOffset&&(ee-=Je._pinOffset,ke-=Je._pinOffset),Je=Je.parentNode;Wn&&Wn.forEach(function(Mr){return Mr.revert(!1,!0)}),T.start=ee,T.end=ke,lt=gt=ht?Kt:he(),!v&&!ht&&(lt<Kt&&he(Kt),T.scroll.rec=0),T.revert(!1,!0),Te=nt(),Zt&&(me=-1,Zt.restart(!0)),rt=0,n&&I&&(n._initted||Ur)&&n.progress()!==Ur&&n.progress(Ur||0,!0).render(n.time(),!0,!0),(Qe||je!==T.progress||v||f||n&&!n._initted)&&(n&&!I&&(n._initted||je||n.vars.immediateRender!==!1)&&n.totalProgress(v&&ee<-.001&&!je?j.utils.normalize(ee,ke,0):je,!0),T.progress=Qe||(lt-ee)/xe===je?0:je),h&&g&&($e._pinOffset=Math.round(T.progress*mr)),K&&K.invalidate(),isNaN(Vn)||(Vn-=j.getProperty(P,O.p),Di-=j.getProperty(Pt,O.p),Wi(P,O,Vn),Wi(_t,O,Vn-(X||0)),Wi(Pt,O,Di),Wi(Ct,O,Di-(X||0))),Qe&&!ht&&T.update(),u&&!ht&&!Cr&&(Cr=!0,u(T),Cr=!1)}},T.getVelocity=function(){return(he()-gt)/(nt()-Qn)*1e3||0},T.endAnimation=function(){qn(T.callbackAnimation),n&&(K?K.progress(1):n.paused()?I||qn(n,T.direction<0,1):qn(n,n.reversed()))},T.labelToScroll=function(D){return n&&n.labels&&(ee||T.refresh()||ee)+n.labels[D]/n.duration()*xe||0},T.getTrailing=function(D){var Y=q.indexOf(T),L=T.direction>0?q.slice(0,Y).reverse():q.slice(Y+1);return(Mt(D)?L.filter(function(X){return X.vars.preventOverlaps===D}):L).filter(function(X){return T.direction>0?X.end<=ee:X.start>=ke})},T.update=function(D,Y,L){if(!(v&&!L&&!D)){var X=ht===!0?Kt:T.scroll(),Fe=D?0:(X-ee)/xe,Q=Fe<0?0:Fe>1?1:Fe||0,Pe=T.progress,Qe,we,ge,ue,Qt,ye,Ot,er;if(Y&&(gt=lt,lt=v?he():X,w&&(Vr=Rr,Rr=n&&!I?n.totalProgress():Q)),m&&h&&!rt&&!Li&&Ut&&(!Q&&ee<X+(X-gt)/(nt()-Qn)*m?Q=1e-4:Q===1&&ke>X+(X-gt)/(nt()-Qn)*m&&(Q=.9999)),Q!==Pe&&T.enabled){if(Qe=T.isActive=!!Q&&Q<1,we=!!Pe&&Pe<1,ye=Qe!==we,Qt=ye||!!Q!=!!Pe,T.direction=Q>Pe?1:-1,T.progress=Q,Qt&&!rt&&(ge=Q&&!Pe?0:Q===1?1:Pe===1?2:3,I&&(ue=!ye&&z[ge+1]!=="none"&&z[ge+1]||z[ge],er=n&&(ue==="complete"||ue==="reset"||ue in n))),k&&(ye||er)&&(er||d||!n)&&(st(k)?k(T):T.getTrailing(k).forEach(function(qr){return qr.endAnimation()})),I||(K&&!rt&&!Li?(K._dp._time-K._start!==K._time&&K.render(K._dp._time-K._start),K.resetTo?K.resetTo("totalProgress",Q,n._tTime/n._tDur):(K.vars.totalProgress=Q,K.invalidate().restart())):n&&n.totalProgress(Q,!!(rt&&(Te||D)))),h){if(D&&g&&($e.style[g+O.os2]=Yn),!W)qt(ei(Ft+mr*Q));else if(Qt){if(Ot=!D&&Q>Pe&&ke+1>X&&X+1>=cr(M,O),_)if(!D&&(Qe||Ot)){var He=br(h,!0),Ue=X-ee;za(h,le,He.top+(O===ze?Ue:0)+Le,He.left+(O===ze?0:Ue)+Le)}else za(h,$e);En(Qe||Ot?Pr:Wr),gr&&Q<1&&Qe||qt(Ft+(Q===1&&!Ot?mr:0))}}w&&!at.tween&&!rt&&!Li&&Zt.restart(!0),a&&(ye||x&&Q&&(Q<1||!Bs))&&wi(a.targets).forEach(function(qr){return qr.classList[Qe||x?"add":"remove"](a.className)}),o&&!I&&!D&&o(T),Qt&&!rt?(I&&(er&&(ue==="complete"?n.pause().totalProgress(1):ue==="reset"?n.restart(!0).pause():ue==="restart"?n.restart(!0):n[ue]()),o&&o(T)),(ye||!Bs)&&(c&&ye&&Xs(T,c),B[ge]&&Xs(T,B[ge]),x&&(Q===1?T.kill(!1,1):B[ge]=0),ye||(ge=Q===1?1:3,B[ge]&&Xs(T,B[ge]))),S&&!Qe&&Math.abs(T.getVelocity())>(ti(S)?S:2500)&&(qn(T.callbackAnimation),K?K.progress(1):qn(n,ue==="reverse"?1:!Q,1))):I&&o&&!rt&&o(T)}if(mn){var Je=v?X/v.duration()*(v._caScrollDist||0):X;Mi(Je+(P._isFlipped?1:0)),mn(Je)}_n&&_n(-X/v.duration()*(v._caScrollDist||0))}},T.enable=function(D,Y){T.enabled||(T.enabled=!0,Xe(M,"resize",ri),F||Xe(M,"scroll",bn),ce&&Xe(s,"refreshInit",ce),D!==!1&&(T.progress=je=0,lt=gt=me=he()),Y!==!1&&T.refresh())},T.getTween=function(D){return D&&at?at.tween:K},T.setPositions=function(D,Y,L,X){if(v){var Fe=v.scrollTrigger,Q=v.duration(),Pe=Fe.end-Fe.start;D=Fe.start+Pe*D/Q,Y=Fe.start+Pe*Y/Q}T.refresh(!1,!1,{start:Ra(D,L&&!!T._startClamp),end:Ra(Y,L&&!!T._endClamp)},X),T.update()},T.adjustPinSpacing=function(D){if(Me&&D){var Y=Me.indexOf(O.d)+1;Me[Y]=parseFloat(Me[Y])+D+Le,Me[1]=parseFloat(Me[1])+D+Le,En(Me)}},T.disable=function(D,Y){if(T.enabled&&(D!==!1&&T.revert(!0,!0),T.enabled=T.isActive=!1,Y||K&&K.pause(),Kt=0,Ke&&(Ke.uncache=1),ce&&Be(s,"refreshInit",ce),Zt&&(Zt.pause(),at.tween&&at.tween.kill()&&(at.tween=0)),!F)){for(var L=q.length;L--;)if(q[L].scroller===M&&q[L]!==T)return;Be(M,"resize",ri),F||Be(M,"scroll",bn)}},T.kill=function(D,Y){T.disable(D,Y),K&&!Y&&K.kill(),l&&delete xo[l];var L=q.indexOf(T);L>=0&&q.splice(L,1),L===dt&&ns>0&&dt--,L=0,q.forEach(function(X){return X.scroller===T.scroller&&(L=1)}),L||ht||(T.scroll.rec=0),n&&(n.scrollTrigger=null,D&&n.revert({kill:!1}),Y||n.kill()),_t&&[_t,Ct,P,Pt].forEach(function(X){return X.parentNode&&X.parentNode.removeChild(X)}),pi===T&&(pi=0),h&&(Ke&&(Ke.uncache=1),L=0,q.forEach(function(X){return X.pin===h&&L++}),L||(Ke.spacer=0)),t.onKill&&t.onKill(T)},q.push(T),T.enable(!1,!1),_r&&_r(T),n&&n.add&&!xe){var ne=T.update;T.update=function(){T.update=ne,Z.cache++,ee||ke||T.refresh()},j.delayedCall(.01,T.update),xe=.01,ee=ke=0}else T.refresh();h&&Of()},s.register=function(t){return xn||(j=t||_c(),gc()&&window.document&&s.enable(),xn=Jn),xn},s.defaults=function(t){if(t)for(var n in t)Bi[n]=t[n];return Bi},s.disable=function(t,n){Jn=0,q.forEach(function(o){return o[n?"kill":"disable"](t)}),Be(G,"wheel",bn),Be(pe,"scroll",bn),clearInterval(Ni),Be(pe,"touchcancel",ir),Be(le,"touchstart",ir),$i(Be,pe,"pointerdown,touchstart,mousedown",Ma),$i(Be,pe,"pointerup,touchend,mouseup",Ea),ys.kill(),zi(Be);for(var i=0;i<Z.length;i+=3)Fi(Be,Z[i],Z[i+1]),Fi(Be,Z[i],Z[i+2])},s.enable=function(){if(G=window,pe=document,Dt=pe.documentElement,le=pe.body,j&&(wi=j.utils.toArray,ci=j.utils.clamp,vo=j.core.context||ir,Fs=j.core.suppressOverwrites||ir,qo=G.history.scrollRestoration||"auto",wo=G.pageYOffset||0,j.core.globals("ScrollTrigger",s),le)){Jn=1,Mn=document.createElement("div"),Mn.style.height="100vh",Mn.style.position="absolute",Cc(),xf(),Re.register(j),s.isTouch=Re.isTouch,Er=Re.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),yo=Re.isTouch===1,Xe(G,"wheel",bn),Uo=[G,pe,Dt,le],j.matchMedia?(s.matchMedia=function(c){var u=j.matchMedia(),d;for(d in c)u.add(d,c[d]);return u},j.addEventListener("matchMediaInit",function(){return ea()}),j.addEventListener("matchMediaRevert",function(){return Tc()}),j.addEventListener("matchMedia",function(){tn(0,1),hn("matchMedia")}),j.matchMedia().add("(orientation: portrait)",function(){return Ws(),Ws})):console.warn("Requires GSAP 3.11.0 or later"),Ws(),Xe(pe,"scroll",bn);var t=le.hasAttribute("style"),n=le.style,i=n.borderTopStyle,o=j.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=br(le),ze.m=Math.round(a.top+ze.sc())||0,mt.m=Math.round(a.left+mt.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),t||(le.setAttribute("style",""),le.removeAttribute("style")),Ni=setInterval(Ia,250),j.delayedCall(.5,function(){return Li=0}),Xe(pe,"touchcancel",ir),Xe(le,"touchstart",ir),$i(Xe,pe,"pointerdown,touchstart,mousedown",Ma),$i(Xe,pe,"pointerup,touchend,mouseup",Ea),_o=j.utils.checkPrefix("transform"),is.push(_o),xn=nt(),ys=j.delayedCall(.2,tn).pause(),wn=[pe,"visibilitychange",function(){var c=G.innerWidth,u=G.innerHeight;pe.hidden?(Ca=c,Pa=u):(Ca!==c||Pa!==u)&&ri()},pe,"DOMContentLoaded",tn,G,"load",tn,G,"resize",ri],zi(Xe),q.forEach(function(c){return c.enable(0,1)}),l=0;l<Z.length;l+=3)Fi(Be,Z[l],Z[l+1]),Fi(Be,Z[l],Z[l+2])}},s.config=function(t){"limitCallbacks"in t&&(Bs=!!t.limitCallbacks);var n=t.syncInterval;n&&clearInterval(Ni)||(Ni=n)&&setInterval(Ia,n),"ignoreMobileResize"in t&&(yo=s.isTouch===1&&t.ignoreMobileResize),"autoRefreshEvents"in t&&(zi(Be)||zi(Xe,t.autoRefreshEvents||"none"),hc=(t.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(t,n){var i=yt(t),o=Z.indexOf(i),a=fn(i);~o&&Z.splice(o,a?6:2),n&&(a?ur.unshift(G,n,le,n,Dt,n):ur.unshift(i,n))},s.clearMatchMedia=function(t){q.forEach(function(n){return n._ctx&&n._ctx.query===t&&n._ctx.kill(!0,!0)})},s.isInViewport=function(t,n,i){var o=(Mt(t)?yt(t):t).getBoundingClientRect(),a=o[i?an:ln]*n||0;return i?o.right-a>0&&o.left+a<G.innerWidth:o.bottom-a>0&&o.top+a<G.innerHeight},s.positionInViewport=function(t,n,i){Mt(t)&&(t=yt(t));var o=t.getBoundingClientRect(),a=o[i?an:ln],l=n==null?a/2:n in xs?xs[n]*a:~n.indexOf("%")?parseFloat(n)*a/100:parseFloat(n)||0;return i?(o.left+l)/G.innerWidth:(o.top+l)/G.innerHeight},s.killAll=function(t){if(q.slice(0).forEach(function(i){return i.vars.id!=="ScrollSmoother"&&i.kill()}),t!==!0){var n=dn.killAll||[];dn={},n.forEach(function(i){return i()})}},s}();U.version="3.13.0";U.saveStyles=function(s){return s?wi(s).forEach(function(e){if(e&&e.style){var r=Rt.indexOf(e);r>=0&&Rt.splice(r,5),Rt.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),j.core.getCache(e),vo())}}):Rt};U.revert=function(s,e){return ea(!s,e)};U.create=function(s,e){return new U(s,e)};U.refresh=function(s){return s?ri(!0):(xn||U.register())&&tn(!0)};U.update=function(s){return++Z.cache&&wr(s===!0?2:0)};U.clearScrollMemory=kc;U.maxScroll=function(s,e){return cr(s,e?mt:ze)};U.getScrollFunc=function(s,e){return Yr(yt(s),e?mt:ze)};U.getById=function(s){return xo[s]};U.getAll=function(){return q.filter(function(s){return s.vars.id!=="ScrollSmoother"})};U.isScrolling=function(){return!!Ut};U.snapDirectional=Jo;U.addEventListener=function(s,e){var r=dn[s]||(dn[s]=[]);~r.indexOf(e)||r.push(e)};U.removeEventListener=function(s,e){var r=dn[s],t=r&&r.indexOf(e);t>=0&&r.splice(t,1)};U.batch=function(s,e){var r=[],t={},n=e.interval||.016,i=e.batchMax||1e9,o=function(c,u){var d=[],p=[],h=j.delayedCall(n,function(){u(d,p),d=[],p=[]}).pause();return function(g){d.length||h.restart(!0),d.push(g.trigger),p.push(g),i<=d.length&&h.progress(1)}},a;for(a in e)t[a]=a.substr(0,2)==="on"&&st(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return st(i)&&(i=i(),Xe(U,"refresh",function(){return i=e.batchMax()})),wi(s).forEach(function(l){var c={};for(a in t)c[a]=t[a];c.trigger=l,r.push(U.create(c))}),r};var Fa=function(e,r,t,n){return r>n?e(n):r<0&&e(0),t>n?(n-r)/(t-r):t<0?r/(r-t):1},Hs=function s(e,r){r===!0?e.style.removeProperty("touch-action"):e.style.touchAction=r===!0?"auto":r?"pan-"+r+(Re.isTouch?" pinch-zoom":""):"none",e===Dt&&s(le,r)},Vi={auto:1,scroll:1},Af=function(e){var r=e.event,t=e.target,n=e.axis,i=(r.changedTouches?r.changedTouches[0]:r).target,o=i._gsap||j.core.getCache(i),a=nt(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;i&&i!==le&&(i.scrollHeight<=i.clientHeight&&i.scrollWidth<=i.clientWidth||!(Vi[(l=Xt(i)).overflowY]||Vi[l.overflowX]));)i=i.parentNode;o._isScroll=i&&i!==t&&!fn(i)&&(Vi[(l=Xt(i)).overflowY]||Vi[l.overflowX]),o._isScrollT=a}(o._isScroll||n==="x")&&(r.stopPropagation(),r._gsapAllow=!0)},Oc=function(e,r,t,n){return Re.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:r,onWheel:n=n&&Af,onPress:n,onDrag:n,onScroll:n,onEnable:function(){return t&&Xe(pe,Re.eventTypes[0],Ya,!1,!0)},onDisable:function(){return Be(pe,Re.eventTypes[0],Ya,!0)}})},If=/(input|label|select|textarea)/i,Ba,Ya=function(e){var r=If.test(e.target.tagName);(r||Ba)&&(e._gsapAllow=!0,Ba=r)},jf=function(e){Jr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var r=e,t=r.normalizeScrollX,n=r.momentum,i=r.allowNestedScroll,o=r.onRelease,a,l,c=yt(e.target)||Dt,u=j.core.globals().ScrollSmoother,d=u&&u.get(),p=Er&&(e.content&&yt(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),h=Yr(c,ze),g=Yr(c,mt),f=1,m=(Re.isTouch&&G.visualViewport?G.visualViewport.scale*G.visualViewport.width:G.outerWidth)/G.innerWidth,b=0,y=st(n)?function(){return n(a)}:function(){return n||2.8},x,w,_=Oc(c,e.type,!0,i),C=function(){return w=!1},v=ir,S=ir,k=function(){l=cr(c,ze),S=ci(Er?1:0,l),t&&(v=ci(0,cr(c,mt))),x=cn},O=function(){p._gsap.y=ei(parseFloat(p._gsap.y)+h.offset)+"px",p.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(p._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},I=function(){if(w){requestAnimationFrame(C);var V=ei(a.deltaY/2),re=S(h.v-V);if(p&&re!==h.v+h.offset){h.offset=re-h.v;var T=ei((parseFloat(p&&p._gsap.y)||0)-h.offset);p.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+T+", 0, 1)",p._gsap.y=T+"px",h.cacheID=Z.cache,wr()}return!0}h.offset&&O(),w=!0},M,N,F,W,B=function(){k(),M.isActive()&&M.vars.scrollY>l&&(h()>l?M.progress(1)&&h(l):M.resetTo("scrollY",l))};return p&&j.set(p,{y:"+=0"}),e.ignoreCheck=function(z){return Er&&z.type==="touchmove"&&I()||f>1.05&&z.type!=="touchstart"||a.isGesturing||z.touches&&z.touches.length>1},e.onPress=function(){w=!1;var z=f;f=ei((G.visualViewport&&G.visualViewport.scale||1)/m),M.pause(),z!==f&&Hs(c,f>1.01?!0:t?!1:"x"),N=g(),F=h(),k(),x=cn},e.onRelease=e.onGestureStart=function(z,V){if(h.offset&&O(),!V)W.restart(!0);else{Z.cache++;var re=y(),T,ce;t&&(T=g(),ce=T+re*.05*-z.velocityX/.227,re*=Fa(g,T,ce,cr(c,mt)),M.vars.scrollX=v(ce)),T=h(),ce=T+re*.05*-z.velocityY/.227,re*=Fa(h,T,ce,cr(c,ze)),M.vars.scrollY=S(ce),M.invalidate().duration(re).play(.01),(Er&&M.vars.scrollY>=l||T>=l-1)&&j.to({},{onUpdate:B,duration:re})}o&&o(z)},e.onWheel=function(){M._ts&&M.pause(),nt()-b>1e3&&(x=0,b=nt())},e.onChange=function(z,V,re,T,ce){if(cn!==x&&k(),V&&t&&g(v(T[2]===V?N+(z.startX-z.x):g()+V-T[1])),re){h.offset&&O();var Ve=ce[2]===re,kt=Ve?F+z.startY-z.y:h()+re-ce[1],me=S(kt);Ve&&kt!==me&&(F+=me-kt),h(me)}(re||V)&&wr()},e.onEnable=function(){Hs(c,t?!1:"x"),U.addEventListener("refresh",B),Xe(G,"resize",B),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=g.smooth=!1),_.enable()},e.onDisable=function(){Hs(c,!0),Be(G,"resize",B),U.removeEventListener("refresh",B),_.kill()},e.lockAxis=e.lockAxis!==!1,a=new Re(e),a.iOS=Er,Er&&!h()&&h(1),Er&&j.ticker.add(ir),W=a._dc,M=j.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:t?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Pc(h,h(),function(){return M.pause()})},onUpdate:wr,onComplete:W.vars.onComplete}),a};U.sort=function(s){if(st(s))return q.sort(s);var e=G.pageYOffset||0;return U.getAll().forEach(function(r){return r._sortY=r.trigger?e+r.trigger.getBoundingClientRect().top:r.start+G.innerHeight}),q.sort(s||function(r,t){return(r.vars.refreshPriority||0)*-1e6+(r.vars.containerAnimation?1e6:r._sortY)-((t.vars.containerAnimation?1e6:t._sortY)+(t.vars.refreshPriority||0)*-1e6)})};U.observe=function(s){return new Re(s)};U.normalizeScroll=function(s){if(typeof s>"u")return ft;if(s===!0&&ft)return ft.enable();if(s===!1){ft&&ft.kill(),ft=s;return}var e=s instanceof Re?s:jf(s);return ft&&ft.target===e.target&&ft.kill(),fn(e.target)&&(ft=e),e};U.core={_getVelocityProp:go,_inputObserver:Oc,_scrollers:Z,_proxies:ur,bridge:{ss:function(){Ut||hn("scrollStart"),Ut=nt()},ref:function(){return rt}}};_c()&&j.registerPlugin(U);const Nf=()=>2+Math.random()*.7;function Hi({word:s}){return s.split("").map((e,r)=>R.jsx("div",{className:"letter font-intersemibold text-[70px]/[60px] md:text-[155px]/[150px] lg:text-[215px]/[200px] xl:text-[265px]/[250px]","data-speed":Nf(),children:e},r))}te.registerPlugin(U);const Ui=["Benjamin","Lobos ","L.","antifragility by design"],Lf=()=>Math.random()*60-30,zf=()=>.8+Math.random()*.7,$f=s=>{const e=U.maxScroll(window);te.utils.toArray(".letter",s).forEach(r=>{const t=zf();r.dataset.speed=t,te.to(r,{y:(1-t)*e,rotation:Lf(),ease:"power2.out",duration:.8,scrollTrigger:{trigger:document.documentElement,start:0,end:window.innerHeight,scrub:.5,invalidateOnRefresh:!0}})})};function Ff(){const s=A.useRef(null),e=A.useRef(null),r=1500,t=A.useRef(!1);return A.useEffect(()=>{const n=s.current,i=e.current;if(!n||!i)return;$f(n),U.refresh();let o;te.set(i,{autoAlpha:0});const a=()=>{t.current||te.to(i,{autoAlpha:1,duration:.6,ease:"power2.out"})},l=()=>{te.to(i,{autoAlpha:0,duration:.25,ease:"power2.out"})},c=()=>{t.current||(t.current=!0,l())};o=setTimeout(a,r);const u={passive:!0,once:!0};return window.addEventListener("scroll",c,u),window.addEventListener("wheel",c,u),window.addEventListener("touchmove",c,u),()=>{clearTimeout(o),window.removeEventListener("scroll",c),window.removeEventListener("wheel",c),window.removeEventListener("touchmove",c),U.getAll().forEach(d=>d.kill())}},[]),R.jsxs("div",{ref:s,className:"bg-white relative w-full h-200 md:h-355 overflow-hidden",children:[R.jsxs("div",{className:"absolute bottom-0 left-0 pb-130 xl:pb-170 pl-2 md:pb-170 lg:170 md:pl-20 flex h-screen flex-col justify-end",children:[R.jsx("div",{className:"flex flex-wrap",children:R.jsx(Hi,{word:Ui[0]})}),R.jsxs("div",{className:"flex flex-wrap",children:[R.jsx(Hi,{word:Ui[1]}),R.jsx("div",{className:"w-4 sm:w-20"}),R.jsx(Hi,{word:Ui[2]})]})]}),R.jsx("div",{className:"hidden absolute bottom-0 left-0 md:flex flex-wrap",children:R.jsx(Hi,{word:Ui[3]})}),R.jsx("h2",{ref:e,className:"hidden lg:block absolute bottom-0 right-0 pb-170 pr-20 text-black text-[50px] pointer-events-none select-none",children:"Scroll"})]})}var os={exports:{}},Bf=os.exports,Xa;function Yf(){return Xa||(Xa=1,function(s,e){(function(t,n){s.exports=n(Jc())})(typeof self<"u"?self:Bf,function(r){return function(t){var n={};function i(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,i),a.l=!0,a.exports}return i.m=t,i.c=n,i.d=function(o,a,l){i.o(o,a)||Object.defineProperty(o,a,{enumerable:!0,get:l})},i.r=function(o){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},i.t=function(o,a){if(1&a&&(o=i(o)),8&a||4&a&&typeof o=="object"&&o&&o.__esModule)return o;var l=Object.create(null);if(i.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:o}),2&a&&typeof o!="string")for(var c in o)i.d(l,c,(function(u){return o[u]}).bind(null,c));return l},i.n=function(o){var a=o&&o.__esModule?function(){return o.default}:function(){return o};return i.d(a,"a",a),a},i.o=function(o,a){return Object.prototype.hasOwnProperty.call(o,a)},i.p="",i(i.s=3)}([function(t,n){t.exports=r},function(t,n,i){function o(b){return(o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(x){return typeof x}:function(x){return x&&typeof Symbol=="function"&&x.constructor===Symbol&&x!==Symbol.prototype?"symbol":typeof x})(b)}function a(b,y){if(!(b instanceof y))throw new TypeError("Cannot call a class as a function")}function l(b,y){if(typeof y!="function"&&y!==null)throw new TypeError("Super expression must either be null or a function");b.prototype=Object.create(y&&y.prototype,{constructor:{value:b,writable:!0,configurable:!0}}),y&&c(b,y)}function c(b,y){return(c=Object.setPrototypeOf||function(w,_){return w.__proto__=_,w})(b,y)}function u(b){var y=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var w,_=p(b);if(y){var C=p(this).constructor;w=Reflect.construct(_,arguments,C)}else w=_.apply(this,arguments);return d(this,w)}}function d(b,y){return!y||o(y)!=="object"&&typeof y!="function"?function(w){if(w===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return w}(b):y}function p(b){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(x){return x.__proto__||Object.getPrototypeOf(x)})(b)}var h=this&&this.__importDefault||function(b){return b&&b.__esModule?b:{default:b}};Object.defineProperty(n,"__esModule",{value:!0}),n.Background=n.Parallax=void 0;var g=h(i(0)),f=function(b){l(x,b);var y=u(x);function x(){return a(this,x),y.apply(this,arguments)}return x}(g.default.Component);n.Parallax=f;var m=function(b){l(x,b);var y=u(x);function x(){return a(this,x),y.apply(this,arguments)}return x}(g.default.Component);n.Background=m},function(t,n,i){Object.defineProperty(n,"__esModule",{value:!0}),n.canUseDOM=n.getNodeHeight=n.isScrolledIntoView=n.getWindowHeight=void 0,n.getWindowHeight=function(o){if(!o)return 0;var a=window,l=document,c=l.documentElement,u=l.getElementsByTagName("body")[0];return a.innerHeight||c.clientHeight||u.clientHeight},n.isScrolledIntoView=function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,l=arguments.length>2?arguments[2]:void 0;if(!l)return!1;var c=o.getBoundingClientRect().top-a,u=o.getBoundingClientRect().bottom+a;return c<=n.getWindowHeight(l)&&u>=0},n.getNodeHeight=function(o,a){return o?a&&"clientHeight"in a?a.clientHeight:n.getWindowHeight(o):0},n.canUseDOM=function(){return!(typeof window>"u"||!window.document||!window.document.createElement)}},function(t,n,i){var o=this&&this.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(n,"__esModule",{value:!0}),n.Background=n.Parallax=void 0;var a=o(i(4));n.Parallax=a.default;var l=o(i(7));n.Background=l.default},function(t,n,i){function o(w){return(o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C})(w)}function a(w,_){for(var C=0;C<_.length;C++){var v=_[C];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(w,v.key,v)}}function l(w,_){return(l=Object.setPrototypeOf||function(v,S){return v.__proto__=S,v})(w,_)}function c(w){var _=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var v,S=d(w);if(_){var k=d(this).constructor;v=Reflect.construct(S,arguments,k)}else v=S.apply(this,arguments);return u(this,v)}}function u(w,_){return!_||o(_)!=="object"&&typeof _!="function"?function(v){if(v===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return v}(w):_}function d(w){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(C){return C.__proto__||Object.getPrototypeOf(C)})(w)}var p=this&&this.__importDefault||function(w){return w&&w.__esModule?w:{default:w}};Object.defineProperty(n,"__esModule",{value:!0});var h=p(i(0)),g=i(1),f=i(5),m=i(2),b=p(i(6)),y={position:"absolute",left:"50%",WebkitTransform:"translate3d(-50%, 0, 0)",transform:"translate3d(-50%, 0, 0)",WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",MozBackfaceVisibility:"hidden",MsBackfaceVisibility:"hidden"},x=function(w){(function(S,k){if(typeof k!="function"&&k!==null)throw new TypeError("Super expression must either be null or a function");S.prototype=Object.create(k&&k.prototype,{constructor:{value:S,writable:!0,configurable:!0}}),k&&l(S,k)})(C,w);var _=c(C);function C(v){var S;return function(O,I){if(!(O instanceof I))throw new TypeError("Cannot call a class as a function")}(this,C),(S=_.call(this,v)).onWindowResize=function(){S.parentHeight=m.getNodeHeight(S.canUseDOM,S.parent),S.updatePosition()},S.onWindowLoad=function(){S.updatePosition()},S.onScroll=function(){if(S.canUseDOM){var k=Date.now();k-S.timestamp>=10&&m.isScrolledIntoView(S.node,100,S.canUseDOM)&&(window.requestAnimationFrame(S.updatePosition),S.timestamp=k)}},S.onContentMount=function(k){S.content=k},S.updatePosition=function(){if(S.content){var k=!1;S.contentHeight=S.content.getBoundingClientRect().height,S.contentWidth=S.node.getBoundingClientRect().width,S.img&&S.img.naturalWidth/S.img.naturalHeight<S.contentWidth/S.getImageHeight()&&(k=!0);var O=f.getRelativePosition(S.node,S.canUseDOM),I=!!S.img,M=S.bg&&S.state.splitChildren.bgChildren.length>0;I&&S.setImagePosition(O,k),M&&S.setBackgroundPosition(O),I||M||S.setState({percentage:O})}},S.state={bgImage:v.bgImage,bgImageSrcSet:v.bgImageSrcSet,bgImageSizes:v.bgImageSizes,imgStyle:y,bgStyle:Object.assign(Object.assign({},y),v.bgStyle),percentage:0,splitChildren:f.getSplitChildren(v)},S.canUseDOM=m.canUseDOM(),S.node=null,S.content=null,S.bgImageLoaded=!1,S.bgImageRef=void 0,S.parent=v.parent,S.parentHeight=m.getNodeHeight(S.canUseDOM,S.parent),S.timestamp=Date.now(),S.isDynamicBlur=f.getHasDynamicBlur(v.blur),S}return function(S,k,O){return k&&a(S.prototype,k),O&&a(S,O),S}(C,[{key:"componentDidMount",value:function(){var S=this.props.parent,k=this.state,O=k.bgImage,I=k.bgImageSrcSet,M=k.bgImageSizes;this.parent=S||document,this.addListeners(),O?this.loadImage(O,I,M):this.updatePosition()}},{key:"componentDidUpdate",value:function(S){var k=this.props,O=k.parent,I=k.bgImage,M=k.bgImageSrcSet,N=k.bgImageSizes,F=this.state.bgImage;S.parent!==O&&(this.removeListeners(this.parent),this.parent=O,O&&this.addListeners()),this.parentHeight=m.getNodeHeight(this.canUseDOM,this.parent),F!==I&&this.loadImage(I,M,N)}},{key:"componentWillUnmount",value:function(){this.removeListeners(this.parent),this.releaseImage()}},{key:"setBackgroundPosition",value:function(S){var k=this.props,O=k.disabled,I=k.strength,M=Object.assign({},this.state.bgStyle);if(!O){var N="translate3d(-50%, ".concat((I<0?I:0)-I*S,"px, 0)");M.WebkitTransform=N,M.transform=N}this.setState({bgStyle:M,percentage:S})}},{key:"setImagePosition",value:function(S){var k=arguments.length>1&&arguments[1]!==void 0&&arguments[1],O=this.props,I=O.disabled,M=O.strength,N=O.blur,F=k?"auto":"".concat(this.getImageHeight(),"px"),W=k?"".concat(this.contentWidth,"px"):"auto",B=Object.assign(Object.assign({},this.state.imgStyle),{height:F,width:W});if(!I){var z=M<0,V=(z?M:0)-M*S,re="translate3d(-50%, ".concat(V,"px, 0)"),T="none";N&&(T="blur(".concat(f.getBlurValue(this.isDynamicBlur,N,S),"px)")),B.WebkitTransform=re,B.transform=re,B.WebkitFilter=T,B.filter=T}this.setState({imgStyle:B,percentage:S})}},{key:"getImageHeight",value:function(){var S=this.props.strength,k=(S<0?2.5:1)*Math.abs(S);return Math.floor(this.contentHeight+k)}},{key:"loadImage",value:function(S,k,O){var I=this;this.releaseImage(),this.bgImageRef=new Image,this.bgImageRef.onload=function(M){I.setState({bgImage:S,bgImageSrcSet:k,bgImageSizes:O},function(){return I.updatePosition()}),I.props.onLoad&&I.props.onLoad(M)},this.bgImageRef.onerror=this.bgImageRef.onload,this.bgImageRef.src=S,this.bgImageRef.srcset=k||"",this.bgImageRef.sizes=O||""}},{key:"releaseImage",value:function(){this.bgImageRef&&(this.bgImageRef.onload=null,this.bgImageRef.onerror=null,delete this.bgImageRef)}},{key:"addListeners",value:function(){this.canUseDOM&&this.parent&&(this.parent.addEventListener("scroll",this.onScroll,!1),window.addEventListener("resize",this.onWindowResize,!1),window.addEventListener("load",this.onWindowLoad,!1))}},{key:"removeListeners",value:function(S){this.canUseDOM&&(S&&S.removeEventListener("scroll",this.onScroll,!1),window.removeEventListener("resize",this.onWindowResize,!1),window.removeEventListener("load",this.onWindowLoad,!1))}},{key:"render",value:function(){var S=this,k=this.props,O=k.className,I=k.style,M=k.bgClassName,N=k.contentClassName,F=k.bgImageAlt,W=k.renderLayer,B=k.bgImageStyle,z=k.lazy,V=this.state,re=V.bgImage,T=V.bgImageSrcSet,ce=V.bgImageSizes,Ve=V.percentage,kt=V.imgStyle,me=V.bgStyle,Te=V.splitChildren;return h.default.createElement("div",{className:"react-parallax ".concat(O),style:Object.assign({position:"relative",overflow:"hidden"},I),ref:function(he){S.node=he}},re?h.default.createElement("img",{className:M,src:re,srcSet:T,sizes:ce,ref:function(he){S.img=he},alt:F,style:Object.assign(Object.assign({},kt),B),loading:z?"lazy":"eager"}):null,W?W(-(Ve-1)):null,Te.bgChildren.length>0?h.default.createElement("div",{className:"react-parallax-background-children",ref:function(he){S.bg=he},style:me},Te.bgChildren):null,h.default.createElement(b.default,{onMount:this.onContentMount,className:N},Te.children))}}],[{key:"getDerivedStateFromProps",value:function(S){return{splitChildren:f.getSplitChildren(S)}}}]),C}(g.Parallax);x.defaultProps={bgClassName:"react-parallax-bgimage",bgImageAlt:"",className:"",contentClassName:"",disabled:!1,strength:100},n.default=x},function(t,n,i){function o(c){return(o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d})(c)}Object.defineProperty(n,"__esModule",{value:!0}),n.setBlur=n.getBlurValue=n.getHasDynamicBlur=n.getSplitChildren=n.getRelativePosition=n.getPercentage=void 0;var a=i(0),l=i(2);n.getPercentage=function(c,u,d){return(d-c)/(u-c)||0},n.getRelativePosition=function(c,u){if(!u)return 0;var d=c.getBoundingClientRect(),p=d.top,h=d.height,g=l.getNodeHeight(u),f=h>g?h:g,m=Math.round(p>f?f:p);return n.getPercentage(0,f,m)},n.getSplitChildren=function(c){var u=[],d=a.Children.toArray(c.children);return d.forEach(function(p,h){var g=p;g.type&&g.type.isParallaxBackground&&(u=u.concat(d.splice(h,1)))}),{bgChildren:u,children:d}},n.getHasDynamicBlur=function(c){return o(c)==="object"&&c.min!==void 0&&c.max!==void 0},n.getBlurValue=function(c,u,d){return c?u.min+(1-d)*u.max:u},n.setBlur=function(c,u){c.style.webkitFilter="blur(".concat(u,"px)"),c.style.filter="blur(".concat(u,"px)")}},function(t,n,i){var o=this&&this.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(n,"__esModule",{value:!0});var a=o(i(0));n.default=function(c){var u=c.children,d=c.onMount,p=c.className;return a.default.createElement("div",{ref:function(g){return d(g)},className:p||"react-parallax-content",style:{position:"relative"}},u)}},function(t,n,i){function o(m){return(o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y})(m)}function a(m,b){if(!(m instanceof b))throw new TypeError("Cannot call a class as a function")}function l(m,b){for(var y=0;y<b.length;y++){var x=b[y];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(m,x.key,x)}}function c(m,b){return(c=Object.setPrototypeOf||function(x,w){return x.__proto__=w,x})(m,b)}function u(m){var b=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var x,w=p(m);if(b){var _=p(this).constructor;x=Reflect.construct(w,arguments,_)}else x=w.apply(this,arguments);return d(this,x)}}function d(m,b){return!b||o(b)!=="object"&&typeof b!="function"?function(x){if(x===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return x}(m):b}function p(m){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(y){return y.__proto__||Object.getPrototypeOf(y)})(m)}var h=this&&this.__importDefault||function(m){return m&&m.__esModule?m:{default:m}};Object.defineProperty(n,"__esModule",{value:!0});var g=h(i(0)),f=function(m){(function(w,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function");w.prototype=Object.create(_&&_.prototype,{constructor:{value:w,writable:!0,configurable:!0}}),_&&c(w,_)})(y,m);var b=u(y);function y(){return a(this,y),b.apply(this,arguments)}return function(w,_,C){return _&&l(w.prototype,_),w}(y,[{key:"render",value:function(){var w=this.props,_=w.className,C=w.children;return g.default.createElement("div",{className:"react-parallax-background ".concat(_)},C)}}]),y}(i(1).Background);f.defaultProps={className:""},f.isParallaxBackground=!0,n.default=f}])})}(os)),os.exports}var Xf=Yf();const Wf="/assets/bg-C28rPa-6.webp";te.registerPlugin(U);function Vf(){const s=["Frontend","Backend","Low-level","Embedded","CLI Tooling","Linux/unix"],e=A.useRef([]);e.current=[];const r=A.useRef(null),t=n=>{n&&!e.current.includes(n)&&e.current.push(n)};return A.useEffect(()=>{const n=o=>window.innerWidth-o.getBoundingClientRect().left-o.offsetWidth-10,i=te.context(()=>{const o=te.timeline({scrollTrigger:{trigger:r.current,start:"top center",end:"+=500",scrub:1,invalidateOnRefresh:!0}});e.current.forEach((a,l)=>{o.to(a,{x:()=>n(a),ease:"power3.out"},l*.15)})},r);return()=>i.revert()},[]),R.jsxs("div",{className:"relative w-full h-[100vh] overflow-hidden",children:[R.jsx(Xf.Parallax,{bgImage:Wf,strength:300,bgImageStyle:{objectFit:"cover",objectPosition:"center",minWidth:"100%",minHeight:"100%",width:"auto",height:"auto"},children:R.jsx("div",{style:{height:"100vh"}})}),R.jsx("div",{ref:r,className:"hidden absolute top-0 left-0 pt-5 md:flex flex-col items-start pointer-events-none",children:s.map(n=>R.jsx("h2",{ref:t,className:`text-white ${n==="CS @ Purdue"?"uppercase font-intersemibold text-[80px]":"uppercase font-interregular text-[140px]"} leading-none`,children:n},n))}),R.jsx("div",{className:"md:hidden absolute top-0 left-0 pt-5 flex flex-col items-start pointer-events-none pt-50 sm:pt-20",children:s.map(n=>R.jsx("h2",{className:"text-white uppercase font-interregular text-[70px] sm:text-[115px] leading-none text-nowrap",children:n},n))})]})}function Hf(s){if(s.sheet)return s.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===s)return document.styleSheets[e]}function Uf(s){var e=document.createElement("style");return e.setAttribute("data-emotion",s.key),s.nonce!==void 0&&e.setAttribute("nonce",s.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var qf=function(){function s(r){var t=this;this._insertTag=function(n){var i;t.tags.length===0?t.insertionPoint?i=t.insertionPoint.nextSibling:t.prepend?i=t.container.firstChild:i=t.before:i=t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(n,i),t.tags.push(n)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var e=s.prototype;return e.hydrate=function(t){t.forEach(this._insertTag)},e.insert=function(t){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Uf(this));var n=this.tags[this.tags.length-1];if(this.isSpeedy){var i=Hf(n);try{i.insertRule(t,i.cssRules.length)}catch{}}else n.appendChild(document.createTextNode(t));this.ctr++},e.flush=function(){this.tags.forEach(function(t){var n;return(n=t.parentNode)==null?void 0:n.removeChild(t)}),this.tags=[],this.ctr=0},s}(),tt="-ms-",ws="-moz-",ie="-webkit-",Rc="comm",ta="rule",ra="decl",Gf="@import",Mc="@keyframes",Zf="@layer",Kf=Math.abs,Ps=String.fromCharCode,Qf=Object.assign;function Jf(s,e){return qe(s,0)^45?(((e<<2^qe(s,0))<<2^qe(s,1))<<2^qe(s,2))<<2^qe(s,3):0}function Ec(s){return s.trim()}function ed(s,e){return(s=e.exec(s))?s[0]:s}function se(s,e,r){return s.replace(e,r)}function To(s,e){return s.indexOf(e)}function qe(s,e){return s.charCodeAt(e)|0}function Ti(s,e,r){return s.slice(e,r)}function sr(s){return s.length}function na(s){return s.length}function qi(s,e){return e.push(s),s}function td(s,e){return s.map(e).join("")}var Os=1,Fn=1,Dc=0,Tt=0,Ie=0,Bn="";function Rs(s,e,r,t,n,i,o){return{value:s,root:e,parent:r,type:t,props:n,children:i,line:Os,column:Fn,length:o,return:""}}function Gn(s,e){return Qf(Rs("",null,null,"",null,null,0),s,{length:-s.length},e)}function rd(){return Ie}function nd(){return Ie=Tt>0?qe(Bn,--Tt):0,Fn--,Ie===10&&(Fn=1,Os--),Ie}function Lt(){return Ie=Tt<Dc?qe(Bn,Tt++):0,Fn++,Ie===10&&(Fn=1,Os++),Ie}function fr(){return qe(Bn,Tt)}function as(){return Tt}function Ri(s,e){return Ti(Bn,s,e)}function ki(s){switch(s){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ac(s){return Os=Fn=1,Dc=sr(Bn=s),Tt=0,[]}function Ic(s){return Bn="",s}function ls(s){return Ec(Ri(Tt-1,ko(s===91?s+2:s===40?s+1:s)))}function id(s){for(;(Ie=fr())&&Ie<33;)Lt();return ki(s)>2||ki(Ie)>3?"":" "}function sd(s,e){for(;--e&&Lt()&&!(Ie<48||Ie>102||Ie>57&&Ie<65||Ie>70&&Ie<97););return Ri(s,as()+(e<6&&fr()==32&&Lt()==32))}function ko(s){for(;Lt();)switch(Ie){case s:return Tt;case 34:case 39:s!==34&&s!==39&&ko(Ie);break;case 40:s===41&&ko(s);break;case 92:Lt();break}return Tt}function od(s,e){for(;Lt()&&s+Ie!==57;)if(s+Ie===84&&fr()===47)break;return"/*"+Ri(e,Tt-1)+"*"+Ps(s===47?s:Lt())}function ad(s){for(;!ki(fr());)Lt();return Ri(s,Tt)}function ld(s){return Ic(cs("",null,null,null,[""],s=Ac(s),0,[0],s))}function cs(s,e,r,t,n,i,o,a,l){for(var c=0,u=0,d=o,p=0,h=0,g=0,f=1,m=1,b=1,y=0,x="",w=n,_=i,C=t,v=x;m;)switch(g=y,y=Lt()){case 40:if(g!=108&&qe(v,d-1)==58){To(v+=se(ls(y),"&","&\f"),"&\f")!=-1&&(b=-1);break}case 34:case 39:case 91:v+=ls(y);break;case 9:case 10:case 13:case 32:v+=id(g);break;case 92:v+=sd(as()-1,7);continue;case 47:switch(fr()){case 42:case 47:qi(cd(od(Lt(),as()),e,r),l);break;default:v+="/"}break;case 123*f:a[c++]=sr(v)*b;case 125*f:case 59:case 0:switch(y){case 0:case 125:m=0;case 59+u:b==-1&&(v=se(v,/\f/g,"")),h>0&&sr(v)-d&&qi(h>32?Va(v+";",t,r,d-1):Va(se(v," ","")+";",t,r,d-2),l);break;case 59:v+=";";default:if(qi(C=Wa(v,e,r,c,u,n,a,x,w=[],_=[],d),i),y===123)if(u===0)cs(v,e,C,C,w,i,d,a,_);else switch(p===99&&qe(v,3)===110?100:p){case 100:case 108:case 109:case 115:cs(s,C,C,t&&qi(Wa(s,C,C,0,0,n,a,x,n,w=[],d),_),n,_,d,a,t?w:_);break;default:cs(v,C,C,C,[""],_,0,a,_)}}c=u=h=0,f=b=1,x=v="",d=o;break;case 58:d=1+sr(v),h=g;default:if(f<1){if(y==123)--f;else if(y==125&&f++==0&&nd()==125)continue}switch(v+=Ps(y),y*f){case 38:b=u>0?1:(v+="\f",-1);break;case 44:a[c++]=(sr(v)-1)*b,b=1;break;case 64:fr()===45&&(v+=ls(Lt())),p=fr(),u=d=sr(x=v+=ad(as())),y++;break;case 45:g===45&&sr(v)==2&&(f=0)}}return i}function Wa(s,e,r,t,n,i,o,a,l,c,u){for(var d=n-1,p=n===0?i:[""],h=na(p),g=0,f=0,m=0;g<t;++g)for(var b=0,y=Ti(s,d+1,d=Kf(f=o[g])),x=s;b<h;++b)(x=Ec(f>0?p[b]+" "+y:se(y,/&\f/g,p[b])))&&(l[m++]=x);return Rs(s,e,r,n===0?ta:a,l,c,u)}function cd(s,e,r){return Rs(s,e,r,Rc,Ps(rd()),Ti(s,2,-2),0)}function Va(s,e,r,t){return Rs(s,e,r,ra,Ti(s,0,t),Ti(s,t+1,-1),t)}function Dn(s,e){for(var r="",t=na(s),n=0;n<t;n++)r+=e(s[n],n,s,e)||"";return r}function ud(s,e,r,t){switch(s.type){case Zf:if(s.children.length)break;case Gf:case ra:return s.return=s.return||s.value;case Rc:return"";case Mc:return s.return=s.value+"{"+Dn(s.children,t)+"}";case ta:s.value=s.props.join(",")}return sr(r=Dn(s.children,t))?s.return=s.value+"{"+r+"}":""}function fd(s){var e=na(s);return function(r,t,n,i){for(var o="",a=0;a<e;a++)o+=s[a](r,t,n,i)||"";return o}}function dd(s){return function(e){e.root||(e=e.return)&&s(e)}}function hd(s){var e=Object.create(null);return function(r){return e[r]===void 0&&(e[r]=s(r)),e[r]}}var pd=function(e,r,t){for(var n=0,i=0;n=i,i=fr(),n===38&&i===12&&(r[t]=1),!ki(i);)Lt();return Ri(e,Tt)},md=function(e,r){var t=-1,n=44;do switch(ki(n)){case 0:n===38&&fr()===12&&(r[t]=1),e[t]+=pd(Tt-1,r,t);break;case 2:e[t]+=ls(n);break;case 4:if(n===44){e[++t]=fr()===58?"&\f":"",r[t]=e[t].length;break}default:e[t]+=Ps(n)}while(n=Lt());return e},gd=function(e,r){return Ic(md(Ac(e),r))},Ha=new WeakMap,_d=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var r=e.value,t=e.parent,n=e.column===t.column&&e.line===t.line;t.type!=="rule";)if(t=t.parent,!t)return;if(!(e.props.length===1&&r.charCodeAt(0)!==58&&!Ha.get(t))&&!n){Ha.set(e,!0);for(var i=[],o=gd(r,i),a=t.props,l=0,c=0;l<o.length;l++)for(var u=0;u<a.length;u++,c++)e.props[c]=i[l]?o[l].replace(/&\f/g,a[u]):a[u]+" "+o[l]}}},yd=function(e){if(e.type==="decl"){var r=e.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(e.return="",e.value="")}};function jc(s,e){switch(Jf(s,e)){case 5103:return ie+"print-"+s+s;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ie+s+s;case 5349:case 4246:case 4810:case 6968:case 2756:return ie+s+ws+s+tt+s+s;case 6828:case 4268:return ie+s+tt+s+s;case 6165:return ie+s+tt+"flex-"+s+s;case 5187:return ie+s+se(s,/(\w+).+(:[^]+)/,ie+"box-$1$2"+tt+"flex-$1$2")+s;case 5443:return ie+s+tt+"flex-item-"+se(s,/flex-|-self/,"")+s;case 4675:return ie+s+tt+"flex-line-pack"+se(s,/align-content|flex-|-self/,"")+s;case 5548:return ie+s+tt+se(s,"shrink","negative")+s;case 5292:return ie+s+tt+se(s,"basis","preferred-size")+s;case 6060:return ie+"box-"+se(s,"-grow","")+ie+s+tt+se(s,"grow","positive")+s;case 4554:return ie+se(s,/([^-])(transform)/g,"$1"+ie+"$2")+s;case 6187:return se(se(se(s,/(zoom-|grab)/,ie+"$1"),/(image-set)/,ie+"$1"),s,"")+s;case 5495:case 3959:return se(s,/(image-set\([^]*)/,ie+"$1$`$1");case 4968:return se(se(s,/(.+:)(flex-)?(.*)/,ie+"box-pack:$3"+tt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ie+s+s;case 4095:case 3583:case 4068:case 2532:return se(s,/(.+)-inline(.+)/,ie+"$1$2")+s;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(sr(s)-1-e>6)switch(qe(s,e+1)){case 109:if(qe(s,e+4)!==45)break;case 102:return se(s,/(.+:)(.+)-([^]+)/,"$1"+ie+"$2-$3$1"+ws+(qe(s,e+3)==108?"$3":"$2-$3"))+s;case 115:return~To(s,"stretch")?jc(se(s,"stretch","fill-available"),e)+s:s}break;case 4949:if(qe(s,e+1)!==115)break;case 6444:switch(qe(s,sr(s)-3-(~To(s,"!important")&&10))){case 107:return se(s,":",":"+ie)+s;case 101:return se(s,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ie+(qe(s,14)===45?"inline-":"")+"box$3$1"+ie+"$2$3$1"+tt+"$2box$3")+s}break;case 5936:switch(qe(s,e+11)){case 114:return ie+s+tt+se(s,/[svh]\w+-[tblr]{2}/,"tb")+s;case 108:return ie+s+tt+se(s,/[svh]\w+-[tblr]{2}/,"tb-rl")+s;case 45:return ie+s+tt+se(s,/[svh]\w+-[tblr]{2}/,"lr")+s}return ie+s+tt+s+s}return s}var vd=function(e,r,t,n){if(e.length>-1&&!e.return)switch(e.type){case ra:e.return=jc(e.value,e.length);break;case Mc:return Dn([Gn(e,{value:se(e.value,"@","@"+ie)})],n);case ta:if(e.length)return td(e.props,function(i){switch(ed(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Dn([Gn(e,{props:[se(i,/:(read-\w+)/,":"+ws+"$1")]})],n);case"::placeholder":return Dn([Gn(e,{props:[se(i,/:(plac\w+)/,":"+ie+"input-$1")]}),Gn(e,{props:[se(i,/:(plac\w+)/,":"+ws+"$1")]}),Gn(e,{props:[se(i,/:(plac\w+)/,tt+"input-$1")]})],n)}return""})}},bd=[vd],xd=function(e){var r=e.key;if(r==="css"){var t=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(t,function(f){var m=f.getAttribute("data-emotion");m.indexOf(" ")!==-1&&(document.head.appendChild(f),f.setAttribute("data-s",""))})}var n=e.stylisPlugins||bd,i={},o,a=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(f){for(var m=f.getAttribute("data-emotion").split(" "),b=1;b<m.length;b++)i[m[b]]=!0;a.push(f)});var l,c=[_d,yd];{var u,d=[ud,dd(function(f){u.insert(f)})],p=fd(c.concat(n,d)),h=function(m){return Dn(ld(m),p)};l=function(m,b,y,x){u=y,h(m?m+"{"+b.styles+"}":b.styles),x&&(g.inserted[b.name]=!0)}}var g={key:r,sheet:new qf({key:r,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:l};return g.sheet.hydrate(a),g},Us={exports:{}},oe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ua;function wd(){if(Ua)return oe;Ua=1;var s=typeof Symbol=="function"&&Symbol.for,e=s?Symbol.for("react.element"):60103,r=s?Symbol.for("react.portal"):60106,t=s?Symbol.for("react.fragment"):60107,n=s?Symbol.for("react.strict_mode"):60108,i=s?Symbol.for("react.profiler"):60114,o=s?Symbol.for("react.provider"):60109,a=s?Symbol.for("react.context"):60110,l=s?Symbol.for("react.async_mode"):60111,c=s?Symbol.for("react.concurrent_mode"):60111,u=s?Symbol.for("react.forward_ref"):60112,d=s?Symbol.for("react.suspense"):60113,p=s?Symbol.for("react.suspense_list"):60120,h=s?Symbol.for("react.memo"):60115,g=s?Symbol.for("react.lazy"):60116,f=s?Symbol.for("react.block"):60121,m=s?Symbol.for("react.fundamental"):60117,b=s?Symbol.for("react.responder"):60118,y=s?Symbol.for("react.scope"):60119;function x(_){if(typeof _=="object"&&_!==null){var C=_.$$typeof;switch(C){case e:switch(_=_.type,_){case l:case c:case t:case i:case n:case d:return _;default:switch(_=_&&_.$$typeof,_){case a:case u:case g:case h:case o:return _;default:return C}}case r:return C}}}function w(_){return x(_)===c}return oe.AsyncMode=l,oe.ConcurrentMode=c,oe.ContextConsumer=a,oe.ContextProvider=o,oe.Element=e,oe.ForwardRef=u,oe.Fragment=t,oe.Lazy=g,oe.Memo=h,oe.Portal=r,oe.Profiler=i,oe.StrictMode=n,oe.Suspense=d,oe.isAsyncMode=function(_){return w(_)||x(_)===l},oe.isConcurrentMode=w,oe.isContextConsumer=function(_){return x(_)===a},oe.isContextProvider=function(_){return x(_)===o},oe.isElement=function(_){return typeof _=="object"&&_!==null&&_.$$typeof===e},oe.isForwardRef=function(_){return x(_)===u},oe.isFragment=function(_){return x(_)===t},oe.isLazy=function(_){return x(_)===g},oe.isMemo=function(_){return x(_)===h},oe.isPortal=function(_){return x(_)===r},oe.isProfiler=function(_){return x(_)===i},oe.isStrictMode=function(_){return x(_)===n},oe.isSuspense=function(_){return x(_)===d},oe.isValidElementType=function(_){return typeof _=="string"||typeof _=="function"||_===t||_===c||_===i||_===n||_===d||_===p||typeof _=="object"&&_!==null&&(_.$$typeof===g||_.$$typeof===h||_.$$typeof===o||_.$$typeof===a||_.$$typeof===u||_.$$typeof===m||_.$$typeof===b||_.$$typeof===y||_.$$typeof===f)},oe.typeOf=x,oe}var qa;function Sd(){return qa||(qa=1,Us.exports=wd()),Us.exports}var qs,Ga;function Td(){if(Ga)return qs;Ga=1;var s=Sd(),e={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},t={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},n={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};i[s.ForwardRef]=t,i[s.Memo]=n;function o(g){return s.isMemo(g)?n:i[g.$$typeof]||e}var a=Object.defineProperty,l=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,p=Object.prototype;function h(g,f,m){if(typeof f!="string"){if(p){var b=d(f);b&&b!==p&&h(g,b,m)}var y=l(f);c&&(y=y.concat(c(f)));for(var x=o(g),w=o(f),_=0;_<y.length;++_){var C=y[_];if(!r[C]&&!(m&&m[C])&&!(w&&w[C])&&!(x&&x[C])){var v=u(f,C);try{a(g,C,v)}catch{}}}}return g}return qs=h,qs}Td();var kd=!0;function Nc(s,e,r){var t="";return r.split(" ").forEach(function(n){s[n]!==void 0?e.push(s[n]+";"):n&&(t+=n+" ")}),t}var ia=function(e,r,t){var n=e.key+"-"+r.name;(t===!1||kd===!1)&&e.registered[n]===void 0&&(e.registered[n]=r.styles)},Lc=function(e,r,t){ia(e,r,t);var n=e.key+"-"+r.name;if(e.inserted[r.name]===void 0){var i=r;do e.insert(r===i?"."+n:"",i,e.sheet,!0),i=i.next;while(i!==void 0)}};function Cd(s){for(var e=0,r,t=0,n=s.length;n>=4;++t,n-=4)r=s.charCodeAt(t)&255|(s.charCodeAt(++t)&255)<<8|(s.charCodeAt(++t)&255)<<16|(s.charCodeAt(++t)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,e=(r&65535)*1540483477+((r>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(n){case 3:e^=(s.charCodeAt(t+2)&255)<<16;case 2:e^=(s.charCodeAt(t+1)&255)<<8;case 1:e^=s.charCodeAt(t)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var Pd={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Od=/[A-Z]|^ms/g,Rd=/_EMO_([^_]+?)_([^]*?)_EMO_/g,zc=function(e){return e.charCodeAt(1)===45},Za=function(e){return e!=null&&typeof e!="boolean"},Gs=hd(function(s){return zc(s)?s:s.replace(Od,"-$&").toLowerCase()}),Ka=function(e,r){switch(e){case"animation":case"animationName":if(typeof r=="string")return r.replace(Rd,function(t,n,i){return or={name:n,styles:i,next:or},n})}return Pd[e]!==1&&!zc(e)&&typeof r=="number"&&r!==0?r+"px":r};function Ci(s,e,r){if(r==null)return"";var t=r;if(t.__emotion_styles!==void 0)return t;switch(typeof r){case"boolean":return"";case"object":{var n=r;if(n.anim===1)return or={name:n.name,styles:n.styles,next:or},n.name;var i=r;if(i.styles!==void 0){var o=i.next;if(o!==void 0)for(;o!==void 0;)or={name:o.name,styles:o.styles,next:or},o=o.next;var a=i.styles+";";return a}return Md(s,e,r)}case"function":{if(s!==void 0){var l=or,c=r(s);return or=l,Ci(s,e,c)}break}}var u=r;if(e==null)return u;var d=e[u];return d!==void 0?d:u}function Md(s,e,r){var t="";if(Array.isArray(r))for(var n=0;n<r.length;n++)t+=Ci(s,e,r[n])+";";else for(var i in r){var o=r[i];if(typeof o!="object"){var a=o;e!=null&&e[a]!==void 0?t+=i+"{"+e[a]+"}":Za(a)&&(t+=Gs(i)+":"+Ka(i,a)+";")}else if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var l=0;l<o.length;l++)Za(o[l])&&(t+=Gs(i)+":"+Ka(i,o[l])+";");else{var c=Ci(s,e,o);switch(i){case"animation":case"animationName":{t+=Gs(i)+":"+c+";";break}default:t+=i+"{"+c+"}"}}}return t}var Qa=/label:\s*([^\s;{]+)\s*(;|$)/g,or;function sa(s,e,r){if(s.length===1&&typeof s[0]=="object"&&s[0]!==null&&s[0].styles!==void 0)return s[0];var t=!0,n="";or=void 0;var i=s[0];if(i==null||i.raw===void 0)t=!1,n+=Ci(r,e,i);else{var o=i;n+=o[0]}for(var a=1;a<s.length;a++)if(n+=Ci(r,e,s[a]),t){var l=i;n+=l[a]}Qa.lastIndex=0;for(var c="",u;(u=Qa.exec(n))!==null;)c+="-"+u[1];var d=Cd(n)+c;return{name:d,styles:n,next:or}}var Ed=function(e){return e()},Dd=aa.useInsertionEffect?aa.useInsertionEffect:!1,$c=Dd||Ed,Fc=A.createContext(typeof HTMLElement<"u"?xd({key:"css"}):null);Fc.Provider;var Bc=function(e){return A.forwardRef(function(r,t){var n=A.useContext(Fc);return e(r,n,t)})},Yc=A.createContext({}),Ms={}.hasOwnProperty,Co="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Xc=function(e,r){var t={};for(var n in r)Ms.call(r,n)&&(t[n]=r[n]);return t[Co]=e,t},Ad=function(e){var r=e.cache,t=e.serialized,n=e.isStringTag;return ia(r,t,n),$c(function(){return Lc(r,t,n)}),null},Id=Bc(function(s,e,r){var t=s.css;typeof t=="string"&&e.registered[t]!==void 0&&(t=e.registered[t]);var n=s[Co],i=[t],o="";typeof s.className=="string"?o=Nc(e.registered,i,s.className):s.className!=null&&(o=s.className+" ");var a=sa(i,void 0,A.useContext(Yc));o+=e.key+"-"+a.name;var l={};for(var c in s)Ms.call(s,c)&&c!=="css"&&c!==Co&&(l[c]=s[c]);return l.className=o,r&&(l.ref=r),A.createElement(A.Fragment,null,A.createElement(Ad,{cache:e,serialized:a,isStringTag:typeof n=="string"}),A.createElement(n,l))}),Wc=Id,jd=R.Fragment,Ye=function(e,r,t){return Ms.call(r,"css")?R.jsx(Wc,Xc(e,r),t):R.jsx(e,r,t)},Ja=function(e,r){var t=arguments;if(r==null||!Ms.call(r,"css"))return A.createElement.apply(void 0,t);var n=t.length,i=new Array(n);i[0]=Wc,i[1]=Xc(e,r);for(var o=2;o<n;o++)i[o]=t[o];return A.createElement.apply(null,i)};(function(s){var e;e||(e=s.JSX||(s.JSX={}))})(Ja||(Ja={}));function Vc(){for(var s=arguments.length,e=new Array(s),r=0;r<s;r++)e[r]=arguments[r];return sa(e)}function E(){var s=Vc.apply(void 0,arguments),e="animation-"+s.name;return{name:e,styles:"@keyframes "+e+"{"+s.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var Nd=function s(e){for(var r=e.length,t=0,n="";t<r;t++){var i=e[t];if(i!=null){var o=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))o=s(i);else{o="";for(var a in i)i[a]&&a&&(o&&(o+=" "),o+=a)}break}default:o=i}o&&(n&&(n+=" "),n+=o)}}return n};function Ld(s,e,r){var t=[],n=Nc(s,t,r);return t.length<2?r:n+e(t)}var zd=function(e){var r=e.cache,t=e.serializedArr;return $c(function(){for(var n=0;n<t.length;n++)Lc(r,t[n],!1)}),null},Zs=Bc(function(s,e){var r=[],t=function(){for(var l=arguments.length,c=new Array(l),u=0;u<l;u++)c[u]=arguments[u];var d=sa(c,e.registered);return r.push(d),ia(e,d,!1),e.key+"-"+d.name},n=function(){for(var l=arguments.length,c=new Array(l),u=0;u<l;u++)c[u]=arguments[u];return Ld(e.registered,t,Nd(c))},i={css:t,cx:n,theme:A.useContext(Yc)},o=s.children(i);return A.createElement(A.Fragment,null,A.createElement(zd,{cache:e,serializedArr:r}),o)}),$d=Object.defineProperty,Fd=(s,e,r)=>e in s?$d(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r,Gi=(s,e,r)=>Fd(s,typeof e!="symbol"?e+"":e,r),Po=new Map,Zi=new WeakMap,el=0,Bd=void 0;function Yd(s){return s?(Zi.has(s)||(el+=1,Zi.set(s,el.toString())),Zi.get(s)):"0"}function Xd(s){return Object.keys(s).sort().filter(e=>s[e]!==void 0).map(e=>`${e}_${e==="root"?Yd(s.root):s[e]}`).toString()}function Wd(s){const e=Xd(s);let r=Po.get(e);if(!r){const t=new Map;let n;const i=new IntersectionObserver(o=>{o.forEach(a=>{var l;const c=a.isIntersecting&&n.some(u=>a.intersectionRatio>=u);s.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=c),(l=t.get(a.target))==null||l.forEach(u=>{u(c,a)})})},s);n=i.thresholds||(Array.isArray(s.threshold)?s.threshold:[s.threshold||0]),r={id:e,observer:i,elements:t},Po.set(e,r)}return r}function Hc(s,e,r={},t=Bd){if(typeof window.IntersectionObserver>"u"&&t!==void 0){const l=s.getBoundingClientRect();return e(t,{isIntersecting:t,target:s,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:n,observer:i,elements:o}=Wd(r),a=o.get(s)||[];return o.has(s)||o.set(s,a),a.push(e),i.observe(s),function(){a.splice(a.indexOf(e),1),a.length===0&&(o.delete(s),i.unobserve(s)),o.size===0&&(i.disconnect(),Po.delete(n))}}function Vd(s){return typeof s.children!="function"}var tl=class extends A.Component{constructor(s){super(s),Gi(this,"node",null),Gi(this,"_unobserveCb",null),Gi(this,"handleNode",e=>{this.node&&(this.unobserve(),!e&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()}),Gi(this,"handleChange",(e,r)=>{e&&this.props.triggerOnce&&this.unobserve(),Vd(this.props)||this.setState({inView:e,entry:r}),this.props.onChange&&this.props.onChange(e,r)}),this.state={inView:!!s.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(s){(s.rootMargin!==this.props.rootMargin||s.root!==this.props.root||s.threshold!==this.props.threshold||s.skip!==this.props.skip||s.trackVisibility!==this.props.trackVisibility||s.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:s,root:e,rootMargin:r,trackVisibility:t,delay:n,fallbackInView:i}=this.props;this._unobserveCb=Hc(this.node,this.handleChange,{threshold:s,root:e,rootMargin:r,trackVisibility:t,delay:n},i)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:s}=this.props;if(typeof s=="function"){const{inView:h,entry:g}=this.state;return s({inView:h,entry:g,ref:this.handleNode})}const{as:e,triggerOnce:r,threshold:t,root:n,rootMargin:i,onChange:o,skip:a,trackVisibility:l,delay:c,initialInView:u,fallbackInView:d,...p}=this.props;return A.createElement(e||"div",{ref:this.handleNode,...p},s)}};function Uc({threshold:s,delay:e,trackVisibility:r,rootMargin:t,root:n,triggerOnce:i,skip:o,initialInView:a,fallbackInView:l,onChange:c}={}){var u;const[d,p]=A.useState(null),h=A.useRef(c),[g,f]=A.useState({inView:!!a,entry:void 0});h.current=c,A.useEffect(()=>{if(o||!d)return;let x;return x=Hc(d,(w,_)=>{f({inView:w,entry:_}),h.current&&h.current(w,_),_.isIntersecting&&i&&x&&(x(),x=void 0)},{root:n,rootMargin:t,threshold:s,trackVisibility:r,delay:e},l),()=>{x&&x()}},[Array.isArray(s)?s.toString():s,d,n,t,i,o,r,l,e]);const m=(u=g.entry)==null?void 0:u.target,b=A.useRef(void 0);!d&&m&&!i&&!o&&b.current!==m&&(b.current=m,f({inView:!!a,entry:void 0}));const y=[p,g.inView,g.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}var Ks={exports:{}},ae={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rl;function Hd(){if(rl)return ae;rl=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),t=Symbol.for("react.strict_mode"),n=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),o=Symbol.for("react.context"),a=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),u=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.for("react.offscreen"),g;g=Symbol.for("react.module.reference");function f(m){if(typeof m=="object"&&m!==null){var b=m.$$typeof;switch(b){case s:switch(m=m.type,m){case r:case n:case t:case c:case u:return m;default:switch(m=m&&m.$$typeof,m){case a:case o:case l:case p:case d:case i:return m;default:return b}}case e:return b}}}return ae.ContextConsumer=o,ae.ContextProvider=i,ae.Element=s,ae.ForwardRef=l,ae.Fragment=r,ae.Lazy=p,ae.Memo=d,ae.Portal=e,ae.Profiler=n,ae.StrictMode=t,ae.Suspense=c,ae.SuspenseList=u,ae.isAsyncMode=function(){return!1},ae.isConcurrentMode=function(){return!1},ae.isContextConsumer=function(m){return f(m)===o},ae.isContextProvider=function(m){return f(m)===i},ae.isElement=function(m){return typeof m=="object"&&m!==null&&m.$$typeof===s},ae.isForwardRef=function(m){return f(m)===l},ae.isFragment=function(m){return f(m)===r},ae.isLazy=function(m){return f(m)===p},ae.isMemo=function(m){return f(m)===d},ae.isPortal=function(m){return f(m)===e},ae.isProfiler=function(m){return f(m)===n},ae.isStrictMode=function(m){return f(m)===t},ae.isSuspense=function(m){return f(m)===c},ae.isSuspenseList=function(m){return f(m)===u},ae.isValidElementType=function(m){return typeof m=="string"||typeof m=="function"||m===r||m===n||m===t||m===c||m===u||m===h||typeof m=="object"&&m!==null&&(m.$$typeof===p||m.$$typeof===d||m.$$typeof===i||m.$$typeof===o||m.$$typeof===l||m.$$typeof===g||m.getModuleId!==void 0)},ae.typeOf=f,ae}var nl;function Ud(){return nl||(nl=1,Ks.exports=Hd()),Ks.exports}var qd=Ud();const Gd=E`
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
`,Zd=E`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,Kd=E`
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
`,Qd=E`
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
`,Jd=E`
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
`,e0=E`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,t0=E`
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
`,r0=E`
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
`,n0=E`
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
`,i0=E`
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
`,s0=E`
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
`,o0=E`
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
`,a0=E`
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
`;function l0({duration:s=1e3,delay:e=0,timingFunction:r="ease",keyframes:t=qc,iterationCount:n=1}){return Vc`
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
  `}function c0(s){return s==null}function u0(s){return typeof s=="string"||typeof s=="number"||typeof s=="boolean"}function Gc(s,e){return r=>r?s():e()}function Pi(s){return Gc(s,()=>null)}function Oo(s){return Pi(()=>({opacity:0}))(s)}const Zc=s=>{const{cascade:e=!1,damping:r=.5,delay:t=0,duration:n=1e3,fraction:i=0,keyframes:o=qc,triggerOnce:a=!1,className:l,style:c,childClassName:u,childStyle:d,children:p,onVisibilityChange:h}=s,g=A.useMemo(()=>l0({keyframes:o,duration:n}),[n,o]);return c0(p)?null:u0(p)?Ye(d0,{...s,animationStyles:g,children:String(p)}):qd.isFragment(p)?Ye(Kc,{...s,animationStyles:g}):Ye(jd,{children:A.Children.map(p,(f,m)=>{if(!A.isValidElement(f))return null;const b=t+(e?m*n*r:0);switch(f.type){case"ol":case"ul":return Ye(Zs,{children:({cx:y})=>Ye(f.type,{...f.props,className:y(l,f.props.className),style:Object.assign({},c,f.props.style),children:Ye(Zc,{...s,children:f.props.children})})});case"li":return Ye(tl,{threshold:i,triggerOnce:a,onChange:h,children:({inView:y,ref:x})=>Ye(Zs,{children:({cx:w})=>Ye(f.type,{...f.props,ref:x,className:w(u,f.props.className),css:Pi(()=>g)(y),style:Object.assign({},d,f.props.style,Oo(!y),{animationDelay:b+"ms"})})})});default:return Ye(tl,{threshold:i,triggerOnce:a,onChange:h,children:({inView:y,ref:x})=>Ye("div",{ref:x,className:l,css:Pi(()=>g)(y),style:Object.assign({},c,Oo(!y),{animationDelay:b+"ms"}),children:Ye(Zs,{children:({cx:w})=>Ye(f.type,{...f.props,className:w(u,f.props.className),style:Object.assign({},d,f.props.style)})})})})}})})},f0={display:"inline-block",whiteSpace:"pre"},d0=s=>{const{animationStyles:e,cascade:r=!1,damping:t=.5,delay:n=0,duration:i=1e3,fraction:o=0,triggerOnce:a=!1,className:l,style:c,children:u,onVisibilityChange:d}=s,{ref:p,inView:h}=Uc({triggerOnce:a,threshold:o,onChange:d});return Gc(()=>Ye("div",{ref:p,className:l,style:Object.assign({},c,f0),children:u.split("").map((g,f)=>Ye("span",{css:Pi(()=>e)(h),style:{animationDelay:n+f*i*t+"ms"},children:g},f))}),()=>Ye(Kc,{...s,children:u}))(r)},Kc=s=>{const{animationStyles:e,fraction:r=0,triggerOnce:t=!1,className:n,style:i,children:o,onVisibilityChange:a}=s,{ref:l,inView:c}=Uc({triggerOnce:t,threshold:r,onChange:a});return Ye("div",{ref:l,className:n,css:Pi(()=>e)(c),style:Object.assign({},i,Oo(!c)),children:o})};function h0(s){switch(s){case"bounce":return[Gd,{transformOrigin:"center bottom"}];case"flash":return[Zd];case"headShake":return[Kd,{animationTimingFunction:"ease-in-out"}];case"heartBeat":return[Qd,{animationTimingFunction:"ease-in-out"}];case"jello":return[Jd,{transformOrigin:"center"}];case"pulse":return[e0,{animationTimingFunction:"ease-in-out"}];case"rubberBand":return[t0];case"shake":return[r0];case"shakeX":return[n0];case"shakeY":return[i0];case"swing":return[s0,{transformOrigin:"top center"}];case"tada":return[o0];case"wobble":return[a0]}}const p0=s=>{const{effect:e="bounce",style:r,...t}=s,[n,i]=A.useMemo(()=>h0(e),[e]);return Ye(Zc,{keyframes:n,style:Object.assign({},r,i),...t})};E`
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
`;function m0(){const s=A.useRef(null),e=A.useRef(null),r=A.useRef(null);return A.useEffect(()=>{te.registerPlugin(U);const t=te.context(()=>{te.from(e.current.querySelectorAll("img"),{opacity:0,y:20,stagger:.08,duration:.6,ease:"power3.out",scrollTrigger:{trigger:e.current,start:"top 80%",once:!0}}),te.from(r.current.querySelectorAll("img"),{opacity:0,y:20,stagger:.08,duration:.6,ease:"power3.out",delay:.3,scrollTrigger:{trigger:r.current,start:"top 80%",once:!0}})});return()=>t.revert()},[]),R.jsxs("div",{ref:s,id:"about",className:"relative bg-gradient-to-b from-gradexit to-white w-full min-h-screen pb-40",children:[R.jsx(p0,{effect:"tada",triggerOnce:!0,children:R.jsx("h1",{className:"pt-30 lg:pr-215 font-intersemibold text-[60px] text-center leading-none",children:"Hi!"})}),R.jsx("h1",{className:"font-intersemibold text-[70px] sm:text-[100px] md:text-[120px] lg:text-[160px] text-center leading-none",children:"I'm Benjamin"}),R.jsx("div",{ref:e,className:"pt-20 top-100 flex flex-wrap gap-3 justify-center w-full",children:["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/lua/lua-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/latex/latex-original.svg"].map(t=>R.jsx("img",{src:t,alt:"",className:"h-10 w-10 md:h-15 md:w-15"},t))}),R.jsx("div",{ref:r,className:"pt-14 md:pt-5 top-120 flex flex-wrap gap-4 justify-center w-full",children:["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hugo/hugo-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unix/unix-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/debian/debian-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gcc/gcc-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neovim/neovim-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vim/vim-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sdl/sdl-original.svg"].map(t=>R.jsx("img",{src:t,alt:"",className:"h-10 w-10 md:h-12 md:w-12"},t))}),R.jsxs("div",{className:"pt-20 flex flex-col items-center gap-10 px-4",children:[R.jsx("p",{className:"font-interregular text-[25px] text-left max-w-4xl",children:"Hi, I’m Benjamin Lobos Lertpunyaroj, a third‑year CS student at Purdue University. I enjoy exploring how low‑level systems work, and also front‑end web design."}),R.jsx("p",{className:"font-interlight text-[25px] text-left max-w-4xl",children:"While most of my current work is focused on low‑level languages/software/tooling, my experience is far broader, going into other areas as well. Lately, I’ve found computer architecture design quite interesting and enjoy actively learning about that field."}),R.jsx("p",{className:"font-interlight text-[25px] text-left max-w-4xl",children:"I currently work as a teaching assistant for Purdue’s CS 240 course, Programming in C. There, I design and write homework assignments, midterm practices, and contribute to exam development work in LaTeX."})]})]})}const g0="/icons/github.svg",_0="/icons/link.svg",y0="/icons/amazon.svg";function v0(s){return s>=20?"bg-blue-950 border-blue-950":s>=10?"bg-blue-900 border-blue-950":s>=5?"bg-blue-800/80 border-blue-900":s>=1?"bg-blue-700/50 border-blue-800/60":"bg-stone-100/90 border-stone-200"}function b0(s){return new Date(s).toLocaleDateString(void 0,{weekday:"long",month:"short",day:"numeric",year:"numeric",timeZone:"UTC"})}function il(s){return new Date(s).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric",timeZone:"UTC"})}function x0(s){if(!s||s.length===0)return[];const e=[...s].map(n=>({date:n.date,contributionCount:n.count??n.contributionCount??0,weekday:new Date(`${n.date}T00:00:00Z`).getUTCDay()})).sort((n,i)=>new Date(n.date)-new Date(i.date)),r=[];let t=new Array(7).fill(null);for(let n=0;n<e.length;n++){const i=e[n];t[i.weekday]=i;const o=i.weekday===6,a=n===e.length-1;(o||a)&&(r.push(t),t=new Array(7).fill(null))}return r}function w0({username:s="Blobosle",year:e="last",setDisableCursorTrail:r}){const[t,n]=A.useState(null),[i,o]=A.useState(!0),[a,l]=A.useState("");A.useEffect(()=>{let p=!1;async function h(){try{o(!0),l("");const g=await fetch(`https://github-contributions-api.jogruber.de/v4/${s}?y=${e}`);if(!g.ok)throw new Error(`Request failed: ${g.status}`);const f=await g.json();p||n(f)}catch(g){p||l(g.message||"Failed to load contributions")}finally{p||o(!1)}}return h(),()=>{p=!0}},[s,e]);const c=A.useMemo(()=>x0(t?.contributions||[]),[t]),u=t?.contributions?.[0],d=t?.contributions?.[t.contributions.length-1];return i?R.jsx("div",{className:"w-full py-4 text-sm text-stone-500"}):a?R.jsxs("div",{className:"w-full py-4 text-sm text-red-600",children:["Failed to load GitHub contributions: ",a]}):R.jsx("div",{className:"mt-7 block bg-transparent py-2",children:R.jsx("div",{className:"overflow-visible pt-10",children:R.jsx("div",{className:"w-full py-1",onMouseEnter:()=>r?.(!0),onMouseLeave:()=>r?.(!1),children:R.jsx("div",{className:"w-full overflow-x-auto py-4 [direction:rtl]",children:R.jsxs("div",{className:"flex w-max flex-row items-center gap-4 px-6 [direction:ltr]",children:[u&&R.jsx("div",{className:"[writing-mode:vertical-rl] rotate-180 text-center font-interregular text-lg text-stone-600",children:il(u.date)}),R.jsx("div",{className:"flex flex-row gap-1 overflow-visible",children:c.map((p,h)=>R.jsx("div",{className:"flex flex-col gap-1 overflow-visible",children:p.map((g,f)=>g?R.jsxs("div",{className:"group relative",children:[R.jsx("a",{href:`https://github.com/${s}`,target:"_blank",rel:"noreferrer","aria-label":`${g.contributionCount} commit${g.contributionCount===1?"":"s"} on ${b0(g.date)}`,className:`block h-6 w-6 rounded-md border shadow-sm transition-transform ease-out hover:scale-125 hover:border-2 ${v0(g.contributionCount)}`}),g.contributionCount>0&&R.jsxs("div",{className:`font-interlight pointer-events-none absolute left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-md border border-black bg-white px-2 py-1 text-xs text-black opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 ${f<1?"top-full mt-2":"bottom-full mb-2"}`,children:[g.contributionCount," commit",g.contributionCount===1?"":"s"]})]},`${g.date}-${f}`):R.jsx("div",{className:"h-6 w-6"},`empty-${h}-${f}`))},h))}),d&&R.jsx("div",{className:"[writing-mode:vertical-rl] text-center font-interregular text-lg text-stone-600",children:il(d.date)})]})})})})})}const S0="/images/elite-edge.webp",T0="/images/chip-8.webp",k0="/images/macos-neovim.webp",C0="/images/mintex.webp",P0="/images/unity-book.webp",O0="/images/planet-gravity.webp",R0="/images/interm.webp",M0="/images/blog.webp",Qc=[S0,T0,k0,C0,P0,O0,R0,M0];function E0({setDisableCursorTrail:s}){const e="(min-width: 768px)",[r,t]=A.useState(()=>window.matchMedia(e).matches?.8:.5);A.useEffect(()=>{const v=window.matchMedia(e),S=({matches:k})=>t(k?.8:.5);return v.addEventListener("change",S),()=>v.removeEventListener("change",S)},[]);const n={github:g0,link:_0,amazon:y0},i=[{label:"BoilerMate",img:"/images/boilermate.webp",desc:"typescript, postgreSQL, supabase, prisma, nestJS",red:"https://boilermate.dinhhuytuan.dev/",links:[{type:"link",url:"https://boilermate.dinhhuytuan.dev/"},{type:"github",url:"https://github.com/Blobosle/boilermate"}]},{label:"slayterHIL",img:"/images/slayterHIL.webp",desc:"embedded C, C++, raspberry pi, RTOS",red:"https://esap.dev/",links:[{type:"link",url:"https://esap.dev/"},{type:"github",url:"https://github.com/embedded-purdue/slayterHIL"}]},{label:"ScreenCopy",img:"/images/screen-copy.webp",desc:"swift, electron, typescript, esbuild",red:"https://github.com/Blobosle/screen-copy",links:[{type:"github",url:"https://github.com/Blobosle/screen-copy"}]},{label:"elite edge",img:"/images/elite-edge.webp",desc:"react, tailwindCSS, python, postgreSQL",red:"https://www.eliteedge.one/",links:[{type:"link",url:"https://www.eliteedge.one/"},{type:"link",url:"https://medium.com/@maixuankhoi05/a-decade-of-college-basketball-9a0eaeb3806e"},{}]},{label:"automated minecraft journal",img:"/images/minecraft.webp",desc:"web assembly, C++, react, JS, shell",red:"https://minecraft.blobosle.com/",links:[{type:"link",url:"https://minecraft.blobosle.com/"},{type:"github",url:"https://github.com/Blobosle/wasm-myworld"}]},{label:"chip-8 emulator/interpreter",img:"/images/chip-8.webp",desc:"C, C++ (SDL2 graphics)",red:"https://github.com/blobosle/chip-8",links:[{type:"github",url:"https://github.com/blobosle/chip-8"}]},{label:"macos neovim",img:"/images/macos-neovim.webp",desc:"bash, applescript",red:"https://github.com/Blobosle/macos-neovim",links:[{type:"github",url:"https://github.com/Blobosle/macos-neovim"}]},{label:"mintex",img:"/images/mintex.webp",desc:"latex, lua",red:"https://github.com/Blobosle/mintex.nvim",links:[{type:"github",url:"https://github.com/Blobosle/mintex.nvim"}]},{label:"unity 2d: front to back",img:"/images/unity-book.webp",desc:"technical game dev publishing",red:"https://www.amazon.com/Unity-2D-Front-Back-development-ebook/dp/B0BG1C3BZT",links:[{type:"amazon",url:"https://www.amazon.com/Unity-2D-Front-Back-development-ebook/dp/B0BG1C3BZT"}]},{label:"benji's digital camera",img:"/images/digital.webp",desc:"javascript, html/css",red:"https://blobosle.com/digital/",links:[{type:"link",url:"https://blobosle.com/digital/"}]},{label:"boilerbyte",img:"/images/boilerbyte.webp",desc:"react, tailwindCSS, vite, vercel",red:"https://boilerbyte.com/",links:[{type:"link",url:"https://boilerbyte.com/"},{type:"github",url:"https://github.com/Blobosle/boilerbyte"}]},{label:"planet gravity",img:"/images/planet-gravity.webp",desc:"C#, unity game engine",red:"https://github.com/WayraCodes/Planet-Gravity",links:[{type:"github",url:"https://github.com/WayraCodes/Planet-Gravity"}]},{label:"interm.nvim",img:"/images/interm.webp",desc:"lua, vimscript",red:"https://github.com/your-org/interm.nvim",links:[{type:"github",url:"https://github.com/Blobosle/interm.nvim"}]}],o="/images/github.webp",a=450*r,l=400*r,c=16,[u,d]=A.useState({src:null,visible:!1}),[p,h]=A.useState(null),g=A.useRef(null),f=A.useRef(null),m=A.useRef(null),b=A.useRef(null),y=A.useRef({x:0,y:0}),x=A.useRef(Qc);A.useEffect(()=>{const v=()=>{x.current?.forEach(k=>{const O=new Image;O.decoding="async",O.src=k,typeof O.decode=="function"&&O.decode().catch(()=>{})})};if(typeof window.requestIdleCallback=="function"){const k=window.requestIdleCallback(v);return()=>window.cancelIdleCallback(k)}const S=window.setTimeout(v,0);return()=>window.clearTimeout(S)},[]),A.useEffect(()=>{!u.visible||!u.src||!m.current||(te.set(m.current,{scaleY:0,transformOrigin:"bottom center"}),te.to(m.current,{scaleY:1,duration:.2,ease:"power2.out",onComplete:()=>h(null)}))},[u.src,u.visible]),A.useEffect(()=>{u.visible&&g.current&&(te.set(g.current,{scale:.6,transformOrigin:"center center"}),te.to(g.current,{scale:1,duration:.1,ease:"power2.out"}))},[u.visible]);const w=A.useCallback(v=>()=>{v&&(g.current&&(te.killTweensOf(g.current),te.set(g.current,{scale:1})),h(u.src),d(S=>({...S,src:v,visible:!0})))},[u.src]),_=A.useCallback(v=>{if(!u.visible||!f.current)return;const S=v.clientX+20,k=v.clientY+20,O=Math.min(Math.max(c,S),window.innerWidth-a-c),I=Math.min(Math.max(c,k),window.innerHeight-l-c);y.current={x:O,y:I},b.current===null&&(b.current=window.requestAnimationFrame(()=>{if(b.current=null,!f.current)return;const{x:M,y:N}=y.current;f.current.style.transform=`translate3d(${M}px, ${N}px, 0)`}))},[u.visible,l,a]),C=A.useCallback(()=>{u.visible&&(b.current!==null&&(window.cancelAnimationFrame(b.current),b.current=null),g.current?(te.killTweensOf(g.current),te.to(g.current,{scale:.6,duration:.25,ease:"power2.in",onComplete:()=>{d(v=>({...v,visible:!1,src:null})),h(null)}})):(d(v=>({...v,visible:!1,src:null})),h(null)))},[u.visible]);return R.jsxs("section",{id:"work",className:"relative bg-white w-full h-700",onMouseMove:_,children:[R.jsx("div",{className:"pt-7 inline-flex items-center gap-2 w-fit",onMouseEnter:w(o),onMouseLeave:C,children:R.jsxs("a",{href:"https://github.com/Blobosle",className:"inline-flex items-center group",target:"_blank",rel:"noopener noreferrer",children:[R.jsx("span",{className:"pl-13 font-intersemibold text-black text-[30px] leading-none",children:"Github"}),R.jsx("img",{src:ic,className:"w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"})]})}),R.jsx("h1",{className:"pointer-events-none pl-10 font-intersemibold text-black text-[90px] sm:text-[170px] leading-none",children:"My Work"}),R.jsx(w0,{setDisableCursorTrail:s}),R.jsx("ul",{className:"flex flex-col mt-8 select-none",children:i.map(({label:v,desc:S,red:k,img:O,links:I=[]})=>R.jsxs("li",{className:"relative group",children:[R.jsxs("div",{className:"grid grid-cols-2 items-center",children:[R.jsx("a",{href:k||void 0,target:k?"_blank":void 0,className:"pt-5 pb-5",onMouseEnter:w(O),onMouseLeave:C,children:R.jsx("h2",{className:"pl-10 font-interregular hover:text-gray-500 transition-colors duration-200 ease-in-out text-black text-[25px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px]",children:R.jsx("span",{className:"inline-block lg:hover:-translate-x-2 transition-transform duration-300 ease-in-out",children:v})})}),R.jsxs("div",{className:"pr-5",children:[R.jsx("p",{className:"font-interregular text-gray-400 text-[20px] text-right",children:S}),I.length>0&&R.jsx("div",{className:"flex gap-3 pt-2 justify-end",children:I.map(({type:M,url:N},F)=>{const W=n[M];return!W||!N?null:R.jsx("a",{href:N,target:"_blank",rel:"noopener noreferrer",children:R.jsx("img",{src:W,alt:`${M} icon`,className:"w-8 h-8 hover:scale-120 transition-transform"})},`${v}-${M}-${N}-${F}`)})})]})]}),R.jsx("div",{className:"h-px w-full bg-black"})]},v))}),u.visible&&R.jsx("div",{ref:f,className:"fixed z-50 pointer-events-none",style:{width:a,height:l,top:0,left:0,willChange:"transform",transform:"translate3d(0, 0, 0)"},children:R.jsxs("div",{ref:g,className:"w-full h-full overflow-hidden rounded-2xl shadow-xl bg-white relative",children:[p&&R.jsx("img",{src:p,alt:"",className:"absolute inset-0 w-full h-full object-cover"}),u.src&&R.jsx("img",{ref:m,src:u.src,alt:"Project preview",decoding:"async",className:"absolute inset-0 w-full h-full object-cover will-change-transform"},u.src)]})})]})}function D0(){const[s,e]=A.useState(null),r=A.useRef([]),t=[{href:"https://www.linkedin.com/in/benjamin-lobos-lertpunyaroj-91509b230/",label:"→ LinkedIn"},{href:"https://github.com/Blobosle",label:"→ Github"},{href:"mailto:contact@blobosle.com",label:"→ Email"}],n=o=>{const a=r.current[o]?.querySelectorAll(".char");a&&(te.killTweensOf(a),te.to(a,{x:()=>te.utils.random(-60,60),y:()=>te.utils.random(-50,50),rotation:()=>te.utils.random(-180,180),ease:"power3.out",duration:.6,stagger:.02}))},i=o=>{const a=r.current[o]?.querySelectorAll(".char");a&&(te.killTweensOf(a),te.to(a,{x:0,y:0,rotation:0,ease:"power3.inOut",duration:.6,stagger:.02}))};return R.jsx("div",{id:"contact",className:"flex flex-col items-center justify-center w-full bg-black h-230",children:t.map((o,a)=>{const l=s===a,c=s!==null&&!l;return R.jsx("a",{ref:u=>r.current[a]=u,href:o.href,target:"_blank",rel:"noopener noreferrer",onMouseEnter:()=>{e(a),n(a)},onMouseLeave:()=>{e(null),i(a)},className:`text-white text-center font-interregular text-[60px] md:text-[100px] transition-all duration-300
              ${l?"tracking-wider scale-105":""}
              ${c?"opacity-40":"opacity-100"}
                        `,children:o.label.split("").map((u,d)=>R.jsx("span",{className:"inline-block char whitespace-pre",children:u===" "?" ":u},d))},a)})})}function A0({size:s=32,ease:e=.15,color:r="bg-orange-500",hidden:t=!1}){if(typeof window<"u"&&window.matchMedia("(pointer: coarse)").matches)return null;const[i,o]=A.useState({x:-100,y:-100}),a=A.useRef({x:-100,y:-100}),l=A.useRef();return A.useEffect(()=>{const c=d=>{a.current={x:d.clientX-s/2,y:d.clientY-s/2}},u=()=>{o(d=>{const p=a.current.x-d.x,h=a.current.y-d.y;return{x:d.x+p*e,y:d.y+h*e}}),l.current=requestAnimationFrame(u)};return window.addEventListener("pointermove",c),u(),()=>{window.removeEventListener("pointermove",c),cancelAnimationFrame(l.current)}},[e,s]),R.jsx("div",{className:`pointer-events-none fixed top-0 left-0 z-50 rounded-full mix-blend-difference ${r} transition-opacity duration-150 ${t?"opacity-0":"opacity-90"}`,style:{width:s,height:s,transform:`translate3d(${i.x}px, ${i.y}px, 0)`}})}function I0(){const[s,e]=A.useState(!1),r=A.useRef(null),[t,n]=A.useState(!1),i=o=>new Promise((a,l)=>{const c=new Image;c.onload=()=>a(),c.onerror=()=>l(),c.src=o});return A.useEffect(()=>{const o=()=>{Promise.all(Qc.map(i)).finally(()=>{requestAnimationFrame(()=>e(!0))})};if(document.readyState==="complete")o();else return window.addEventListener("load",o),()=>window.removeEventListener("load",o)},[]),A.useEffect(()=>{if(!s||!r.current)return;const o=te.timeline({defaults:{ease:"power4.inOut"}});te.set(r.current,{clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)"}),o.to(r.current,{clipPath:"polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",duration:1.2,skewX:10,rotation:3,scale:1.05}).to(r.current,{opacity:0,duration:.25,pointerEvents:"none"},"-=0.15")},[s]),R.jsxs("div",{children:[R.jsx("div",{ref:r,className:"fixed inset-0 bg-black flex items-center justify-center text-white z-[9999] select-none"}),R.jsxs(R.Fragment,{children:[R.jsx(A0,{size:32,ease:.05,hidden:t}),R.jsx(gf,{}),R.jsx(Ff,{}),R.jsx(Vf,{}),R.jsx(m0,{}),R.jsx(E0,{setDisableCursorTrail:n}),R.jsx(D0,{})]})]})}function j0(){return R.jsx("main",{children:R.jsx(I0,{})})}eu.createRoot(document.getElementById("root")).render(R.jsx(A.StrictMode,{children:R.jsx(j0,{})}));
