(function(t){function e(e){for(var s,c,d=e[0],o=e[1],n=e[2],u=0,l=[];u<d.length;u++)c=d[u],i[c]&&l.push(i[c][0]),i[c]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);f&&f(e);while(l.length)l.shift()();return r.push.apply(r,n||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,d=1;d<a.length;d++){var o=a[d];0!==i[o]&&(s=!1)}s&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},i={app:0},r=[];function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],o=d.push.bind(d);d.push=e,d=d.slice();for(var n=0;n<d.length;n++)e(d[n]);var f=o;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("64a9"),i=a.n(s);i.a},1:function(t,e){},2:function(t,e){},3:function(t,e){},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t._m(0),a("section",{attrs:{id:"trail"}},t._l(t.trail,function(e,s){return a("div",{key:e.id,class:{genesis:s==t.trail.length-1,last:0==s}},[a("div",{staticClass:"count"},[t._v(t._s(t.trail.length-s))]),a("div",{staticClass:"time"},[a("span",{attrs:{title:t._f("timelocale")(e.time)}},[t._v(t._s(t._f("timeago")(e.time)))])]),a("div",{staticClass:"tx"},[a("a",{attrs:{href:"https://explorer.bitcoin.com/bch/tx/"+e.id}},[t._v(t._s(t._f("tx")(e.id)))])]),a("who",{attrs:{legacy:e.to}})],1)}))])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"header"}},[a("h1",[t._v("The Bitcoin Cash Torch")]),a("p",[t._v("Follow the trail of the first (and only) Bitcoin Cash torch.")])])}],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"who"},[t.isTwitter?a("span",{staticClass:"twitter"},[a("a",{attrs:{href:t.details.twitter}},[t._v(t._s(t._f("twitteruser")(t.details.twitter)))])]):t._e(),t.isReddit?a("span",{staticClass:"reddit"},[a("a",{attrs:{href:t.details.reddit}},[t._v(t._s(t._f("reddituser")(t.details.reddit)))])]):t._e(),t.isLegacy?a("span",{staticClass:"address"},[a("a",{attrs:{href:t._f("linkaddress")(t.address)}},[t._v(t._s(t._f("toslpaddr")(t.address)))])]):t._e()])},d=[],o=(a("a481"),a("4917"),{"1GPGgwyDFpyWNNYG9b75rewiCULGNyzef8":{twitter:"https://twitter.com/LeeFlemingster/status/1103568864451932160"},"1ENMVwarqYcBYoW8tSTxVsGpZLt2ZXb9o2":{twitter:"https://twitter.com/EmergentReasons/status/1103452941518700546"},"1KxRdCeSnLtmqsyepCc8Sm2rJcZY8vQtqV":{twitter:"https://twitter.com/zquestz/status/1103456473244418054"},"1Py7rYoELQy41Td5Kzqse86gF5Tn4hYoM8":{twitter:"https://twitter.com/CollinEnstad/status/1103459641248411649"},"1Ep6tzMUmme4xqRLLdwGasNN2YMn2kz96D":{twitter:"https://twitter.com/Don_wonton/status/1103523885381750784"},"12FdefTCU3jAajGv9x1wYCaShLm5BefUNK":{twitter:"https://twitter.com/rob_mose/status/1103531856874496000"},"1GjbtxLsgqzwrMGn6p9rPecMUQMMFkyLmb":{twitter:"https://twitter.com/im_uname/status/1103534771810951168"},"12fyJGfTuA2D7mwKKdqRDeErxBq1jJqxc6":{twitter:"https://twitter.com/JettScythe/status/1103537308286898176"},"1LeVpWm9QotUVx3dkSycUXZsM7Y8nw1Bh8":{twitter:"https://twitter.com/Wecx_/status/1103547584952512512"},"1HSjUBkTKrL2KykmEKGsQGL2Jd8wRdpAKo":{twitter:"https://twitter.com/paOolCoin/status/1103556037016092672"},"1XmQo8qmEpsy9LTy65Cr3zA3ySvZDXKjS":{twitter:"https://twitter.com/Anthony05064687"},"1FQ29FuzTkDRcnCb4zaDL3PAzo3QLpZxho":{twitter:"https://twitter.com/Klakurka/status/1103680413266927621"},"1NKfAXtmMW3LXcsgnrY5AhSSpkPkg2wd9C":{twitter:"https://twitter.com/DavidShares/status/1103688119696703488"},"15Q6b15NeRvVWmj2McpmMKWuNGr6Mj3B9u":{twitter:"https://twitter.com/maplesyrupsuckr"},"1DJN3FxJkCJSVX99FadxQ8pcD6epmnAyqJ":{twitter:"https://twitter.com/BionicHacker/status/1103612969361977344"}}),n=a("ac3e"),f=a.n(n),u={name:"who",props:{legacy:String,cashaddr:String},data(){return{address:this.cashaddr||this.legacy,details:o[this.legacy]}},computed:{isTwitter(){return this.details&&!!this.details.twitter},isReddit(){return this.details&&!!this.details.reddit},isLegacy(){return null==this.details}},filters:{twitteruser(t){let e=t.match(/twitter.com\/([^\/]+)/);return e?"@"+e[1]:t},reddituser(t){let e=t.match(/reddit.com\/([^\/]+\/[^\/]+)/);return e?"/"+e[1]:t},linkaddress(t){return"https://explorer.bitcoin.com/bch/address/"+f.a.toCashAddress(t)},toslpaddr(t){return f.a.toSlpAddress(t).replace("simpleledger:","")}}},l=u,b=a("2877"),p=Object(b["a"])(l,c,d,!1,null,null,null),h=p.exports,m=[{id:"8bcb285d6ac7e53f8842219f9f8e0d32271ac8385ba73bbed81d95e00f46bc8c",vout:1,time:1551975340,to:"15Q6b15NeRvVWmj2McpmMKWuNGr6Mj3B9u"},{id:"d3fe0d314c454a8280987cbfb984830a6d8f061a4e3cf347798c9938042d080e",vout:1,time:1551972883,to:"1NKfAXtmMW3LXcsgnrY5AhSSpkPkg2wd9C"},{id:"8bdefa85e6b9e1f1d8b46404ce311bd4c0c464cfa1c1b6d5b75813faccb90390",vout:1,time:1551959271,to:"1FQ29FuzTkDRcnCb4zaDL3PAzo3QLpZxho"},{id:"f5cef9b8bfeb83fd3debe4955b0eeaf170d8cb272a83831a855556f5266309d1",vout:1,time:1551956754,to:"1DUJJhZK6AWrsYNBp3GRvevMtebMZXgJRT"},{id:"cddc0c3a87d511299e3bcc457dbb9076df7d73c2daffba90b3160acdce007889",vout:1,time:1551951950,to:"1DJN3FxJkCJSVX99FadxQ8pcD6epmnAyqJ"},{id:"8c688cae1a8a975c4d0fe1eae55508ddc30ea2ffdb09929c811fe247c16437d9",vout:1,time:1551950332,to:"14t9yCfSZL7ajyXuRwri73uyStRUNe11TD"},{id:"a5bb8e4540364caeaa961f91babbefa65975c6fce01d6f174e6313eb89623528",vout:1,time:1551950332,to:"1XmQo8qmEpsy9LTy65Cr3zA3ySvZDXKjS"},{id:"c094e8527f2e87ec726637debf096d4d96db21ec3abe725ee1751252495356ff",vout:1,time:1551941264,to:"1HSjUBkTKrL2KykmEKGsQGL2Jd8wRdpAKo"},{id:"4e53d9dd370b39f9937d07a524fbe7f95b7cfd8c56407269c331fcadafed5512",vout:2,time:1551940456,to:"1LeVpWm9QotUVx3dkSycUXZsM7Y8nw1Bh8"},{id:"b91e30e68f8a046841e6052d43b2240df67a2e2890d1000fbcb1e7e01dcc0d92",vout:1,time:1551940456,to:"1LeVpWm9QotUVx3dkSycUXZsM7Y8nw1Bh8"},{id:"d0a8fe68ca5b42d30bfba96d8f37a6e1d5fbd2e1f21c33264985ea7ad9728301",vout:1,time:1551940456,to:"12fyJGfTuA2D7mwKKdqRDeErxBq1jJqxc6"},{id:"e45265c4c2b7eac4060ec1b9d5233eaae69cdd82a6e25a6ab9cb2f89f96481ee",vout:1,time:1551937487,to:"1GjbtxLsgqzwrMGn6p9rPecMUQMMFkyLmb"},{id:"aaa0a898a0608768ab617d6732315b212811fdb62b7c9bdf0dc8c22ac3a82747",vout:1,time:1551935998,to:"12FdefTCU3jAajGv9x1wYCaShLm5BefUNK"},{id:"e14f7d842ac7af1de2053c943432b3ed1799e58239658354f3dc80ec681b476c",vout:2,time:1551934483,to:"1Ep6tzMUmme4xqRLLdwGasNN2YMn2kz96D"},{id:"ca0963cb32dee18f2bd36c0ce1769a089801e23bd7877967099b798f3609e986",vout:1,time:1551933056,to:"1Ep6tzMUmme4xqRLLdwGasNN2YMn2kz96D"},{id:"5630e76beaca881b24b2e10fc87144e6615a2946b50ffaab286c658ec31a0b15",vout:1,time:1551920200,to:"1Py7rYoELQy41Td5Kzqse86gF5Tn4hYoM8"},{id:"2cf6ad0ab81859d77a4486b9fec1f0deff8ded5db3bbf678b72d4b05b8c6c118",vout:1,time:1551918586,to:"1KxRdCeSnLtmqsyepCc8Sm2rJcZY8vQtqV"},{id:"bf60bf117f45266bf8c67d9a5ec11fe0727b12c2447bb968f0885129d942ada7",vout:1,time:1551899820,to:"1ENMVwarqYcBYoW8tSTxVsGpZLt2ZXb9o2"},{id:"49be89bbbe018bcfaebcb41cac8340bc555f022b47b922599e510b143603f4b6",vout:1,time:1551898616,to:"1GPGgwyDFpyWNNYG9b75rewiCULGNyzef8"}],w=a("0fec"),v=a("7d1a"),y=a.n(v),_=a("bc3a"),x=a.n(_),L=a("8055"),S=a.n(L);const g={baseURL:"https://rest.bitcoin.com"};class k{constructor(){this._socket=S()(g.baseURL),this._socket.on("disconnect",t=>this.disconnected(t))}onTransaction(t){this._socket.on("transactions",e=>{t(JSON.parse(e))})}onBlock(t){this._socket.on("blocks",e=>{t(JSON.parse(e))})}disconnected(t){"io server disconnect"===t&&this._socket.connect()}}w["a"].addLocale(y.a);const M=new w["a"]("en-US");var C={name:"app",data(){return{trail:m}},components:{who:h},mounted(){this.start()},methods:{last(){return this.trail[0]},start(){function t(){this.trail&&this.trail.length&&(window._trail=JSON.parse(JSON.stringify(this.trail)))}this.socket=new k,this.socket.onTransaction(this.monitor.bind(this)),setInterval(t.bind(this),6e4),this.load(this.last().id)},monitor(t){let e=this.last(),a=e.id,s=e.vout;function i(t){return t.txid==a&&t.n==s}let r=t.inputs.some(i);r&&this.load(t.format.txid)},load(t){x.a.get("https://rest.bitcoin.com/v2/slp/txDetails/"+t).then(t=>t.data).then(t=>this.addStep(t))},addStep(t){let e=t.txid,a=t.tokenInfo,s=a.sendOutputs.indexOf("1"),i=t.vout[s],r=i.scriptPubKey.addresses[0],c=this.last().id;c!=e&&this.trail.unshift({id:e,vout:s,time:t.time,to:r});let d=i.spentTxId;d&&this.load(d)}},filters:{timelocale(t){let e=new Date(1e3*t);return e.toLocaleDateString()+" "+e.toLocaleTimeString()},timeago(t){return M.format(new Date(1e3*t))},tx(t){return t}}},N=C,G=(a("034f"),Object(b["a"])(N,i,r,!1,null,null,null)),T=G.exports;new s["a"]({render:t=>t(T)}).$mount("#app")},"64a9":function(t,e,a){}});
//# sourceMappingURL=app.073158bf.js.map