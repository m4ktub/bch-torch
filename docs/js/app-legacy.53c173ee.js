(function(t){function e(e){for(var i,s,r=e[0],o=e[1],b=e[2],f=0,u=[];f<r.length;f++)s=r[f],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&u.push(c[s][0]),c[s]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);n&&n(e);while(u.length)u.shift()();return d.push.apply(d,b||[]),a()}function a(){for(var t,e=0;e<d.length;e++){for(var a=d[e],i=!0,r=1;r<a.length;r++){var o=a[r];0!==c[o]&&(i=!1)}i&&(d.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},c={app:0},d=[];function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/bch-torch/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var b=0;b<r.length;b++)e(r[b]);var n=o;d.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1:function(t,e){},2:function(t,e){},3:function(t,e){},4:function(t,e){},5:function(t,e){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var i=a("2b0e"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t._m(0),t._m(1),a("section",{attrs:{id:"page"}},[a("div",{attrs:{id:"page-offset"}},[t._m(2),a("ul",{attrs:{id:"trail"}},t._l(t.trail,(function(e,i){return a("li",{key:e.id,class:{genesis:i==t.trail.length-1,last:0==i}},[a("span"),a("div",{staticClass:"post-container"},[a("div",{staticClass:"tx"},[a("a",{attrs:{href:"https://explorer.bitcoin.com/bch/tx/"+e.id}},[t._v(t._s(t._f("tx")(e.id)))])]),a("who",{attrs:{legacy:e.to}})],1),a("div",{staticClass:"date-container"},[a("span",{attrs:{title:t._f("timelocale")(e.time)}},[t._v(t._s(t._f("timeago")(e.time+t.ticker/t.ticker)))])]),a("div",{staticClass:"time"},[a("span",{staticClass:"count"},[t._v(t._s(t.trail.length-i))])])])})),0)])])])},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("div",{staticClass:"tab"},[a("img",{attrs:{src:"/bch-torch/images/torch-color-565.png"}})]),a("div",{staticClass:"tab"},[a("a",{attrs:{href:"https://github.com/m4ktub"}},[t._v("by Cláudio Gil")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"header"}},[a("div",{staticClass:"header-image"}),a("div",{staticClass:"header-container"},[a("h1",[t._v("The Bitcoin Cash Torch")]),a("p",[t._v("Follow the trail of the first and only Bitcoin Cash torch")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"separator"},[a("div",{staticClass:"title"},[t._v("Trail")])])}],s=(a("20d6"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"who"},[t.isTwitter?a("span",{staticClass:"twitter"},[t.shouldDisplayTwitter?a("div",[a("Tweet",{attrs:{id:t._f("twitterid")(t.details.twitter),options:{cards:"hidden",conversation:"none",width:"550"}}})],1):a("div",[a("a",{attrs:{href:t.details.twitter}},[t._v(t._s(t._f("twitteruser")(t.details.twitter)))])])]):t._e(),t.isReddit?a("span",{staticClass:"reddit"},[a("a",{attrs:{href:t.details.reddit}},[t._v(t._s(t._f("reddituser")(t.details.reddit)))])]):t._e(),t.isLegacy?a("span",{staticClass:"address"},[a("a",{attrs:{href:t._f("linkaddress")(t.address)}},[t._v(t._s(t._f("toslpaddr")(t.address)))])]):t._e(),a("div",{staticClass:"images"},[t.hasCountry?a("span",{staticClass:"flag"},[a("img",{attrs:{src:"https://www.countryflags.io/"+t.details.country+"/flat/32.png"}})]):t._e(),t.hasBadge?a("span",{staticClass:"badges"},t._l(t.details.badges,(function(t){return a("img",{key:t,attrs:{src:"/bch-torch/images/"+t,height:"32"}})})),0):t._e()])])}),r=[],o=(a("a481"),a("28a5"),a("4917"),a("6762"),a("2fdb"),{"1GPGgwyDFpyWNNYG9b75rewiCULGNyzef8":{twitter:"https://twitter.com/LeeFlemingster/status/1103568864451932160",country:"gb",badges:["pick.png","torch-color-565.png"]},"1ENMVwarqYcBYoW8tSTxVsGpZLt2ZXb9o2":{twitter:"https://twitter.com/EmergentReasons/status/1103452941518700546",country:"jp"},"1KxRdCeSnLtmqsyepCc8Sm2rJcZY8vQtqV":{twitter:"https://twitter.com/zquestz/status/1103456473244418054",country:"us"},"1Py7rYoELQy41Td5Kzqse86gF5Tn4hYoM8":{twitter:"https://twitter.com/CollinEnstad/status/1103459641248411649",country:"us",badges:["spice.png"]},"1Ep6tzMUmme4xqRLLdwGasNN2YMn2kz96D":{twitter:"https://twitter.com/Don_wonton/status/1103523885381750784",country:"us",badges:["drawhand.png"]},"12FdefTCU3jAajGv9x1wYCaShLm5BefUNK":{twitter:"https://twitter.com/rob_mose/status/1103531856874496000",country:"au"},"1GjbtxLsgqzwrMGn6p9rPecMUQMMFkyLmb":{twitter:"https://twitter.com/im_uname/status/1103534771810951168",country:"us"},"12fyJGfTuA2D7mwKKdqRDeErxBq1jJqxc6":{twitter:"https://twitter.com/JettScythe/status/1103537308286898176"},"1LeVpWm9QotUVx3dkSycUXZsM7Y8nw1Bh8":{twitter:"https://twitter.com/Wecx_/status/1103547584952512512",country:"us"},"1HSjUBkTKrL2KykmEKGsQGL2Jd8wRdpAKo":{twitter:"https://twitter.com/paOolCoin/status/1103556037016092672"},"1XmQo8qmEpsy9LTy65Cr3zA3ySvZDXKjS":{twitter:"https://twitter.com/Anthony__Banks",country:"nl"},"1FQ29FuzTkDRcnCb4zaDL3PAzo3QLpZxho":{twitter:"https://twitter.com/Klakurka/status/1103680413266927621",country:"ca"},"1DUJJhZK6AWrsYNBp3GRvevMtebMZXgJRT":{twitter:"https://twitter.com/Klakurka",country:"ca"},"14t9yCfSZL7ajyXuRwri73uyStRUNe11TD":{twitter:"https://twitter.com/SouperNerd",country:"mx"},"1NKfAXtmMW3LXcsgnrY5AhSSpkPkg2wd9C":{twitter:"https://twitter.com/DavidShares/status/1103688119696703488",country:"us",badges:["redditmod.png"]},"15Q6b15NeRvVWmj2McpmMKWuNGr6Mj3B9u":{twitter:"https://twitter.com/maplesyrupsuckr/status/1103949693455749121",country:"jp"},"1DJN3FxJkCJSVX99FadxQ8pcD6epmnAyqJ":{twitter:"https://twitter.com/BionicHacker/status/1103612969361977344",country:"hk"},"1AAibNCh7kxVZNhUuRGJjEGH2jkpnR2sw7":{twitter:"https://twitter.com/rogerkver/status/1104514409735417857",country:"jp",badges:["bitcoinjesus.png"]},"1wXPLyDYiYZi5DQw7a3W13XjMjSbye9jE":{twitter:"https://twitter.com/PaulLambert816/status/1104631560370704384",country:"us"},"17WfF5ynAsvqnUR2X4dTSMsZduaotjJVKX":{twitter:"https://twitter.com/SpencerLambert/status/1104785806416273408",country:"us",badges:["hen.jpg"]},"1JBnXATU5Mx5GSc94bN21GFJTAXg1wNv5m":{twitter:"https://twitter.com/hifromlaura1/status/1104865141672292353",country:"us"},"1PL5yfc4mj78wmphRDYkKMDTFzPMCsyxGT":{twitter:"https://twitter.com/eatbch_ve/status/1104871880698269701",country:"ve",badges:["eatbch_ve.jpg"]},"1K9Mh1o8hYcWmgrq7Tx3nPZF1pdZiEmVBn":{twitter:"https://twitter.com/Egon_01",badges:["egon.png"]},"1HLJJwV6EMuvQ7hLbPvcCgF4tn8uq53H6q":{twitter:"https://twitter.com/CryptoWyvern",country:"ca"},"1NKNdfgPq1EApuNaf5mrNRUPbwVHQt3MeB":{twitter:"https://twitter.com/cgcardona/status/1105285836700966913",badges:["tophat.png","bitbox.png"]},"15idnmzhbFY3LE2aNqnbm9NjyLXcgXzSQj":{twitter:"https://twitter.com/SpendBCH_io/status/1105897591454162944",badges:["badger.png"]},"15zK8463ioDgURo55TDP4J75w5PKEw4di7":{twitter:"https://twitter.com/SimpleLedger/status/1105920538772426752",country:"us",badges:["simpleledger.jpg"]},"19W3dfyAMcsrRBtSv3DWujrGUuQFtN8ZbX":{twitter:"https://twitter.com/samilux",country:"my"},"18qJ9yKfCgSQNZvuGLyk7T5JGaAnF9oZu8":{twitter:"https://twitter.com/edwinolson/status/1108829325502107648",country:"us"},"1L6iYmivCmQ3wkxNRrx8cY1bFYbQqUKzqA":{twitter:"https://twitter.com/ewust/status/1113247022356750337",country:"us"},"1D8vm62xjzfMPcrzTcaFnMHTcq96i8cQkX":{twitter:"https://twitter.com/AndresS5930/status/1113938858582990849",country:"us"},"1BUZPDKcUgETshebue9n69gBz1ddh3hcLJ":{twitter:"https://twitter.com/BCHcain/status/1113980461590536195",country:"us"},"19USXDUDy3559h7MKB3T9GwV26x8DfQc69":{twitter:"https://twitter.com/CreativeName4/status/1113984978654830592",country:"ca",badges:["findbitcoincash.png"]},"1KUAiNZrn9mXAyJNyzDfCnjPRFswzyU72C":{twitter:"https://twitter.com/acidsploit/status/1114516265798909952",country:"be"},"1HUgFTqc1b8F4nA9W1SDoMppj1dLfNi1o1":{twitter:"https://twitter.com/m4ktub2/status/1114593919650680832",country:"pt"},"1Dah41EsF6mWbUqaAMFfMkzwsrkT72skYY":{twitter:"https://twitter.com/ampajaro/status/1115166293529976832",country:"es"},"1C2bKQffGWxk1eLRJBLReshmZBRvhfz5uU":{twitter:"https://twitter.com/1reizu/status/1115358668306960384",country:"es"},"16XaxtxQiCiNYa3LhDhErZ83NrxPhZbphS":{twitter:"https://twitter.com/fmarcosh/status/1115972374564868099",country:"es"},"1BkTq5a1mZpemU38QetxToHQkP4DbiH8HC":{twitter:"https://twitter.com/amritabithi",badges:["slpfaucet.png"]},"1FnYbQwmCZQ2XMDpv1iG4PVLrxhAHhQ3gt":{twitter:"https://twitter.com/cryptotux/status/1116261859185844224"},"1fBfaCWQx3Punyt8rHFD1ugFx4tqLZLKL":{twitter:"https://twitter.com/JlMoriart/status/1119707157715406849"},"1FC5Wi3r6pvWSafNjSsdPwPpwa6wuzGKoq":{twitter:"https://twitter.com/BitcoinPele",country:"br"},"13A8rr16C7nyHwaNqAG8qY4qdFpiyS4qr6":{twitter:"https://twitter.com/pokkst/status/1120119575876648963",badges:["crescent.png"]},"1EcF59JJoKwLFiVDi8YK4WYYHaotNAyTDs":{twitter:"https://twitter.com/brianxv15/status/1120140874950770690"},"1D2FPYXTqooSTnkwSWQN9P5wda1o453FQC":{twitter:"https://twitter.com/BitcoinCashFans/status/1120860170085646338"},"12UPimFdtr56tg4GHbJ16R1ho5FtCybeFA":{twitter:"https://twitter.com/BostonBCHMeetup/status/1120863977360252928",country:"us"},"1G2TX5npebedBYQNQRvMKLB6ch3QaSCTyN":{twitter:"https://twitter.com/derrickjme/status/1121124187353964544",country:"us"},"16QicaHX8q2akc2g26DcS4AtZ1smcmesST":{twitter:"https://twitter.com/stevenzeiler/status/1120869382740115459",country:"us",badges:["anypay.jpg"]},"1KQduQdkpKWuo9QxW7odH7TBsTYC6yytcT":{twitter:"https://twitter.com/FTL_Ian/status/1122954469916979200",country:"us",badges:["freetalklive.png"]},"1BSB5c543Ex7zGhemKfu7PFCigsz3cp2kd":{twitter:"https://twitter.com/KianFleming2/status/1123314048433643520"},"1GFF6X8PSCjG6JXjfLPrdebvBWZtdQG8nr":{twitter:"https://twitter.com/bitcoininfo/status/1123562795537240065"},"1Kjt3oVrAanVjSQEjsTeedBxeerMZWwaju":{twitter:"https://twitter.com/Latonerk/status/1125844080955678720"},"1DiHLvLwc9p3LrZUY2jPxt6c28jtRnCx1R":{twitter:"https://twitter.com/KaeptnKook/status/1126164624523649027",country:"de"},"1K8NRzH28oP6zbeNkexMyKGgAmQjJv54pC":{twitter:"https://twitter.com/sylvestre_blanc/status/1126480674645585920",country:"ch"},"1CqaUogJaquocBZG3SniJB3tcJJdihrEuM":{twitter:"https://twitter.com/usatie/status/1128505092884160512",country:"jp",badges:["yenom.png"]},"1A98w2fHTNA9eyikiXWMPDhNDGhErgtNP1":{twitter:"https://twitter.com/Bitcoin/status/1128747264028098563",badges:["twitter_bitcoin.jpg"]},"1AHVWNy3WaAbPf29jD7HaXLSSBQzdEYe5k":{twitter:"https://twitter.com/CryptoPanda15/status/1129175663548571649"},"1Cj2UDWeMPstg7rni4K4Vm8HV57tao22Xa":{twitter:"https://twitter.com/BitcoinCashIRL/status/1130795885980463107"},"1JuuJj3MnrA2uRh468fiaGnPnAm22W7vho":{twitter:"https://twitter.com/IssisMiss/status/1133481137576271876"},"1CLhk8Vp7cSEeu35M42kCDSSYGVyTRfHy6":{twitter:"https://twitter.com/APlantaSanta/status/1136202286043213824"},"1F5GrRezwGokQhxmF4fYaBbbNrPPaeBqMm":{twitter:"https://twitter.com/memobch/status/1136278427667795974",country:"us",badges:["memo.jpg"]},"18tyBMmRzfaZBDndq9rXmYvkJz1Tzqx3on":{twitter:"https://twitter.com/btcfork/status/1136440531653935104"},"1F2jWBbiLiVtNa4WQaY8ssxxBL28Pa3adV":{twitter:"https://twitter.com/christroutner"},"172vqBtc36pjrdEzGKTGBSKpLGQULYkjj4":{twitter:"https://twitter.com/christroutner/status/1136453354186350593",country:"us"},"16nAZSn7gZMsTwKiRgQDjt7goHy3XCyx38":{twitter:"https://twitter.com/SpicyyyPete/status/1136453721024372736",badges:["badger-mobile.png"]},"1PoJp9ERdkq9WPfh4JrS8eBwJxuv3axghP":{twitter:"https://twitter.com/SpicyyyPete",badges:["badger-mobile.png"]},"1B9R3GqvR2jqprjjNSk5irMf267SuAd6ZE":{twitter:"https://twitter.com/MarkLundeberg/status/1136780541846441985",country:"ca",badges:["graphene.png","schnorr.png"]},"1DqYiLPp4grSvxBPe5Tn6LsWrwPd6Lsqf9":{twitter:"https://twitter.com/uriklarman/status/1137074875712118784",badges:["bloxroute.png"],country:"us"},"1H6zVewNyDXsEQvYE7Sotu8dbPduGnJswQ":{twitter:"https://twitter.com/monsterbitar/status/1138330349333831683",badges:["cashaccount.png"],country:"se"},"1HjymJyD7GdAtLgsxwCbVPkgDBwCUvAwyX":{twitter:"https://twitter.com/nishantsharma87/status/1196835839579312128",country:"cn"},"17UXcxLgPhAShmzqExJKeUuvVJCptg2rqo":{twitter:"https://twitter.com/mkomaransky/status/1196873746650411008",badges:["gfruit.png"],country:"us"},"16WfW5fvagJAHY67NyhEQLAXSDqjBCijoS":{twitter:"https://twitter.com/PeterRizun/status/1222314249768226818",badges:["bitcoinscience.png"],country:"ca"},"116CsUgVNw3pvWRiLNAHj4qFuwwRTgSZbE":{twitter:"hhttps://twitter.com/mikeinspace/status/1222315534290690050",badges:["cartalk.png"],country:"us"},"13BbfwsChBtRZMRbvfovdHYB3MfzQu6Yz3":{twitter:"https://twitter.com/marcoJcosta/status/1222329353650032643"},"1KEaxws3JTEDrdqtMqekaW3FDC6eoJzfMY":{twitter:"https://twitter.com/Reset_Jett/status/1222945307031474177",country:"ru"},"1KDmPy4wnWzkr5iYo9A5Gqw8ZGLez75Du3":{twitter:"https://twitter.com/BitcoinCast/status/1222982004519645185",badges:["bitcoincast.png"]}}),b=a("ac3e"),n=a.n(b),f=a("7397"),u=(a("30dc"),{name:"who",components:{Tweet:f["Tweet"]},props:{legacy:String,cashaddr:String},data:function(){return{address:this.cashaddr||this.legacy,details:o[this.legacy]}},computed:{isTwitter:function(){return this.details&&!!this.details.twitter},shouldDisplayTwitter:function(){return this.details.twitter.includes("status")},isReddit:function(){return this.details&&!!this.details.reddit},isLegacy:function(){return null==this.details},hasCountry:function(){return this.details&&!!this.details.country},hasBadge:function(){return this.details&&!!this.details.badges}},filters:{twitteruser:function(t){var e=t.match(/twitter.com\/([^/]+)/);return"@"+e[1]},twitterid:function(t){return t.includes("status")?t.split("status")[1].split("/")[1]:t},reddituser:function(t){var e=t.match(/reddit.com\/([^/]+\/[^/]+)/);return e?"/"+e[1]:t},linkaddress:function(t){return"https://explorer.bitcoin.com/bch/address/"+n.a.toCashAddress(t)},toslpaddr:function(t){return n.a.toSlpAddress(t).replace("simpleledger:","")}}}),m=u,p=a("2877"),w=Object(p["a"])(m,s,r,!1,null,null,null),h=w.exports,v=[{id:"b6998808dc3017c74836c1b7b0133078e9d84c6bf77000239bc24463ccab6894",vout:1,time:1580415802,to:"1KDmPy4wnWzkr5iYo9A5Gqw8ZGLez75Du3"},{id:"a6f498c154571725b65a2966b3c0b808e0b91fc0d46e2029c5db88fa5bb855af",vout:1,time:1580407264,to:"1KEaxws3JTEDrdqtMqekaW3FDC6eoJzfMY"},{id:"c57df53ae0bd2ee71f2ae8c3545913b62acc88632066bcf997bca9d1bd048550",vout:1,time:1580262146,to:"13BbfwsChBtRZMRbvfovdHYB3MfzQu6Yz3"},{id:"d8d4d255640e870146834d4ae2bfba84ab7da70fa75de8eaa3ebbbe14c1c1209",vout:1,time:1580260206,to:"116CsUgVNw3pvWRiLNAHj4qFuwwRTgSZbE"},{id:"7c46603ca31c21538a8c76d364b7dd2926a5c0b86e82744f5cef3a39bd2d05f1",vout:1,time:1576524825,to:"16WfW5fvagJAHY67NyhEQLAXSDqjBCijoS"},{id:"d7b6d8546c8cba690f1bd30cb0b2ff05fe64c59ba573933622b6239847f0db78",vout:1,time:1574183146,to:"17UXcxLgPhAShmzqExJKeUuvVJCptg2rqo"},{id:"bbbe9207d2a71745f34a65b0a0289e2a76b852f79fba200d68a0c8519f1108e5",vout:1,time:1560444334,to:"1HjymJyD7GdAtLgsxwCbVPkgDBwCUvAwyX"},{id:"f5f2e86d23c5907cdabfe9957b682d9f72044d5fbfd06ca68248a222ede60a2b",vout:1,time:1559934740,to:"1H6zVewNyDXsEQvYE7Sotu8dbPduGnJswQ"},{id:"d1febfe5295a5c6df4827ff46da4a5791d7b35a82297622786ac8b453906a5e8",vout:1,time:1559864800,to:"1DqYiLPp4grSvxBPe5Tn6LsWrwPd6Lsqf9"},{id:"a95373871288490b2f71b184e2d70a193fa8bb406fb18c9808a760fecd92c3f0",vout:1,time:1559859468,to:"1B9R3GqvR2jqprjjNSk5irMf267SuAd6ZE"},{id:"299dd9d68fd68072553ea4216fee3c6f7ddd2af4160255ae42f0561f240f0f02",vout:1,time:1559847535,to:"1PoJp9ERdkq9WPfh4JrS8eBwJxuv3axghP"},{id:"d309ebcba3989b40c7ca787b4c38683361ebe6f437cad6149ed184513594bdba",vout:1,time:1559787044,to:"16nAZSn7gZMsTwKiRgQDjt7goHy3XCyx38"},{id:"25eed00d33cef9093793a0d54c2133c21fdb064feb7d41ea7e571dbbe0f1ca12",vout:1,time:1559787044,to:"172vqBtc36pjrdEzGKTGBSKpLGQULYkjj4"},{id:"39639d88cdeb9986ca64ac9f67387ea96a9e8f1096a4ddeac151f54a3b3e661d",vout:1,time:1559782989,to:"1F2jWBbiLiVtNa4WQaY8ssxxBL28Pa3adV"},{id:"9d9dda655b24772b018978e45625778e9f2ec766da4287c1994cd9f53fc1c045",vout:1,time:1559746615,to:"18tyBMmRzfaZBDndq9rXmYvkJz1Tzqx3on"},{id:"993f40a30e690dd8d21ec23e6c5837866ae17258f24d1d07404e2921a902b008",vout:1,time:1559727414,to:"1F5GrRezwGokQhxmF4fYaBbbNrPPaeBqMm"},{id:"86d252440cf69f1c3156acde12e0733a2b682488540774384e4f31a7faacc43b",vout:1,time:1559079137,to:"1CLhk8Vp7cSEeu35M42kCDSSYGVyTRfHy6"},{id:"46e4baf24a69c42b25563538b82fea50bf4b18318732bfd54b0239d68aed322d",vout:1,time:1558438387,to:"1JuuJj3MnrA2uRh468fiaGnPnAm22W7vho"},{id:"96b77bbf2df3dba6b6d80a731ff92b366d78842e880e869af21490ffe127439f",vout:1,time:1558051361,to:"1Cj2UDWeMPstg7rni4K4Vm8HV57tao22Xa"},{id:"24b0ca0fd99d70125ec409842ffe23dc08cbb15184e5aba2e46e39e7a3bf8a9a",vout:1,time:1557950817,to:"1AHVWNy3WaAbPf29jD7HaXLSSBQzdEYe5k"},{id:"170614918e45f443ac7d61fb8a82f8c3f123b43218928a0055d984b435ea1be9",vout:1,time:1557891966,to:"1A98w2fHTNA9eyikiXWMPDhNDGhErgtNP1"},{id:"f7852d679ed8b1b537bbb912b791fba835886553e365dce71b4dcfe1498d4508",vout:1,time:1557409087,to:"1CqaUogJaquocBZG3SniJB3tcJJdihrEuM"},{id:"91f9c10c28be73470c6757ec7810dcfc581f0b7bc918cbeb58e96654fc6cc53e",vout:1,time:1557332476,to:"1K8NRzH28oP6zbeNkexMyKGgAmQjJv54pC"},{id:"c5abe6cf0baa60bd49bf7e130cc5284271a1d605256cb4d8beccf950e1ea110c",vout:1,time:1557257170,to:"1DiHLvLwc9p3LrZUY2jPxt6c28jtRnCx1R"},{id:"23c3c4c21d2f03996327072a71ea309d0bbf9db57a28c1714209df530ab51848",vout:1,time:1556713044,to:"1Kjt3oVrAanVjSQEjsTeedBxeerMZWwaju"},{id:"4f29ae7bde72c1140df2df5c70ddc4709c2cbbf243a9963413cd58925f63d773",vout:1,time:1556653637,to:"1GFF6X8PSCjG6JXjfLPrdebvBWZtdQG8nr"},{id:"20298fca0abd15b926d3106189da13a30eea98bbf9f65530cd595507d7657db6",vout:1,time:1556560294,to:"1BSB5c543Ex7zGhemKfu7PFCigsz3cp2kd"},{id:"705bf6cd253974cb23b1c690664176c54137133400139c4d5aa3317a426f744a",vout:1,time:1556071653,to:"1KQduQdkpKWuo9QxW7odH7TBsTYC6yytcT"},{id:"7fc3ac8b3d48504e904d610dcdd17948b98a8237a997c1abbbc138f3b92c1294",vout:1,time:1556071653,to:"16QicaHX8q2akc2g26DcS4AtZ1smcmesST"},{id:"38a1b99bc4f5d8e97964b53379c9734ea853c04e39f61d064e8ba6d7498b62f5",vout:1,time:1556071653,to:"1G2TX5npebedBYQNQRvMKLB6ch3QaSCTyN"},{id:"41f77a0a5b448e7ef32cd6adcadd773a61a7135bccaf0853b3682aa4250bcff9",vout:1,time:1556068927,to:"12UPimFdtr56tg4GHbJ16R1ho5FtCybeFA"},{id:"6f77b60d1a04b57c686c7bbbe29184b749658a5a949c608a6dcbb59d71695169",vout:1,time:1555898085,to:"1D2FPYXTqooSTnkwSWQN9P5wda1o453FQC"},{id:"67c2777c630b952767d28be7fdbb9f97ea2003073220e826c8113522d44dd222",vout:1,time:1555892539,to:"1EcF59JJoKwLFiVDi8YK4WYYHaotNAyTDs"},{id:"6ec8169a80cef239a081531fb80d90838083355d24825eab97a8769d49fddd31",vout:1,time:1555885281,to:"13A8rr16C7nyHwaNqAG8qY4qdFpiyS4qr6"},{id:"731dca64f4d0a536752b003cda8372591e36caedef53e58cd81467fcc2f25c67",vout:1,time:1555871849,to:"1FC5Wi3r6pvWSafNjSsdPwPpwa6wuzGKoq"},{id:"a5cab948fbc25a936bc7b03ae017a02544431aca228774131b5175b035f4828d",vout:1,time:1555795912,to:"1fBfaCWQx3Punyt8rHFD1ugFx4tqLZLKL"},{id:"0080fc0c01662e332bd54d255a3166f51629450444f9091281170a191ee5b4c2",vout:1,time:1554974271,to:"1FnYbQwmCZQ2XMDpv1iG4PVLrxhAHhQ3gt"},{id:"9802e46d895c3745c9e85d97cf0aeab5423a5e23d5df4a7e0a1717e052528b27",vout:1,time:1554903693,to:"1BkTq5a1mZpemU38QetxToHQkP4DbiH8HC"},{id:"5c6b3be2735fd9ccb6ab7b8afad203ab9b03e38237ca588586be55beb3097c9b",vout:1,time:1554757281,to:"16XaxtxQiCiNYa3LhDhErZ83NrxPhZbphS"},{id:"9cb97a27fc32f0c8e9dbb33fdf27228f41fea3864442283fe4b4f3faec0060f5",vout:1,time:1554712616,to:"1C2bKQffGWxk1eLRJBLReshmZBRvhfz5uU"},{id:"16d08bc7d02e5630df4a0ed43445597fee5f6d68ec7c8692f5a496c04f8019fe",vout:1,time:1554577076,to:"1Dah41EsF6mWbUqaAMFfMkzwsrkT72skYY"},{id:"f137eca5115b6e6e739377960315b2f1f9a5e4e9d0cfc430b82412c520d963f5",vout:1,time:1554556170,to:"1HUgFTqc1b8F4nA9W1SDoMppj1dLfNi1o1"},{id:"23831164da2c5751713f22c480c8ce06ed0f432f5f4d1e96a50109e9cbdb5c06",vout:1,time:1554470410,to:"1KUAiNZrn9mXAyJNyzDfCnjPRFswzyU72C"},{id:"a85fd9420a244158a19f85cbd0729a8d225e9b3ee373b9cf685d537dbf00c21c",vout:1,time:1554429479,to:"19USXDUDy3559h7MKB3T9GwV26x8DfQc69"},{id:"2e750d631041015e86de7b3f5387f37c7e64a1ac0883dd8de9c5dd4b0205d52a",vout:1,time:1554418663,to:"1BUZPDKcUgETshebue9n69gBz1ddh3hcLJ"},{id:"ec7b1b4e3cd187aa67fd7a1b4f7a7d3ea6ff58d986df239797d4494d81f2ce49",vout:1,time:1554253672,to:"1D8vm62xjzfMPcrzTcaFnMHTcq96i8cQkX"},{id:"948108bc8130be5ebfe2a56a4e2ef889c243c8ea50e65e32132808d39472fad9",vout:1,time:1553198313,to:"1L6iYmivCmQ3wkxNRrx8cY1bFYbQqUKzqA"},{id:"f1075ae55cdeb54b340f8b59a57ae543647bceefab33e92f42d252a44994618c",vout:1,time:1552843877,to:"18qJ9yKfCgSQNZvuGLyk7T5JGaAnF9oZu8"},{id:"552b71152085235180320f1e6c60b9c31bbbe32c3bd30b8f1c2236c1bf5a2d3f",vout:1,time:1552505633,to:"19W3dfyAMcsrRBtSv3DWujrGUuQFtN8ZbX"},{id:"922409189e25d1a79f5d2b68dc4a2650fea230af42ef8ab56b1d3c5807c91096",vout:1,time:1552412520,to:"15zK8463ioDgURo55TDP4J75w5PKEw4di7"},{id:"a96ee530c9a7a344d78608a9cb8a5cb245c09eea7e25628668e6e8fc18d9c126",vout:1,time:1552358247,to:"15idnmzhbFY3LE2aNqnbm9NjyLXcgXzSQj"},{id:"1a53cb8553b8e49b671cf5cb695a9b5b807f567daa6d774ede0a57b1a4056c8c",vout:1,time:1552358247,to:"1NKNdfgPq1EApuNaf5mrNRUPbwVHQt3MeB"},{id:"e94347db73dab83b959f853bba9d817b3b3f4f1fd3a0892df04a6a61542154bd",vout:1,time:1552343143,to:"1HLJJwV6EMuvQ7hLbPvcCgF4tn8uq53H6q"},{id:"cecd02197ac0a5586e6ffc13d874681d10e65059c2ebeed9bc27876b7d4c73fe",vout:2,time:1552338851,to:"1K9Mh1o8hYcWmgrq7Tx3nPZF1pdZiEmVBn"},{id:"cdda87be5b51b80c677e0792f67d03eb42d03c36866394fe8f39115ae8f415ce",vout:2,time:1552266386,to:"1PL5yfc4mj78wmphRDYkKMDTFzPMCsyxGT"},{id:"8cd2f934b6a80fdf1c273b1e16f258f3bec65605e2a6074efcec2606bbea01a3",vout:1,time:1552236493,to:"1JBnXATU5Mx5GSc94bN21GFJTAXg1wNv5m"},{id:"0e00054e20eab0492c5e77ffc668dee61c1a44eafe56b6ccc9968a4a9c2b21b1",vout:1,time:1552199642,to:"17WfF5ynAsvqnUR2X4dTSMsZduaotjJVKX"},{id:"f22d93504f8ac01d3cf000d1f363e279e26f8b8ed7c7b9d1f9bd7af0161f6b55",vout:1,time:1552171840,to:"1wXPLyDYiYZi5DQw7a3W13XjMjSbye9jE"},{id:"735db5684e1a17eeeb6bcc706b1183ead1f39bc9e3e350e27606eb64d4667d59",vout:1,time:1552037042,to:"1AAibNCh7kxVZNhUuRGJjEGH2jkpnR2sw7"},{id:"8bcb285d6ac7e53f8842219f9f8e0d32271ac8385ba73bbed81d95e00f46bc8c",vout:1,time:1551975340,to:"15Q6b15NeRvVWmj2McpmMKWuNGr6Mj3B9u"},{id:"d3fe0d314c454a8280987cbfb984830a6d8f061a4e3cf347798c9938042d080e",vout:1,time:1551972883,to:"1NKfAXtmMW3LXcsgnrY5AhSSpkPkg2wd9C"},{id:"8bdefa85e6b9e1f1d8b46404ce311bd4c0c464cfa1c1b6d5b75813faccb90390",vout:1,time:1551959271,to:"1FQ29FuzTkDRcnCb4zaDL3PAzo3QLpZxho"},{id:"f5cef9b8bfeb83fd3debe4955b0eeaf170d8cb272a83831a855556f5266309d1",vout:1,time:1551956754,to:"1DUJJhZK6AWrsYNBp3GRvevMtebMZXgJRT"},{id:"cddc0c3a87d511299e3bcc457dbb9076df7d73c2daffba90b3160acdce007889",vout:1,time:1551951950,to:"1DJN3FxJkCJSVX99FadxQ8pcD6epmnAyqJ"},{id:"8c688cae1a8a975c4d0fe1eae55508ddc30ea2ffdb09929c811fe247c16437d9",vout:1,time:1551950332,to:"14t9yCfSZL7ajyXuRwri73uyStRUNe11TD"},{id:"a5bb8e4540364caeaa961f91babbefa65975c6fce01d6f174e6313eb89623528",vout:1,time:1551950332,to:"1XmQo8qmEpsy9LTy65Cr3zA3ySvZDXKjS"},{id:"c094e8527f2e87ec726637debf096d4d96db21ec3abe725ee1751252495356ff",vout:1,time:1551941264,to:"1HSjUBkTKrL2KykmEKGsQGL2Jd8wRdpAKo"},{id:"4e53d9dd370b39f9937d07a524fbe7f95b7cfd8c56407269c331fcadafed5512",vout:2,time:1551940456,to:"1LeVpWm9QotUVx3dkSycUXZsM7Y8nw1Bh8"},{id:"d0a8fe68ca5b42d30bfba96d8f37a6e1d5fbd2e1f21c33264985ea7ad9728301",vout:1,time:1551940456,to:"12fyJGfTuA2D7mwKKdqRDeErxBq1jJqxc6"},{id:"e45265c4c2b7eac4060ec1b9d5233eaae69cdd82a6e25a6ab9cb2f89f96481ee",vout:1,time:1551937487,to:"1GjbtxLsgqzwrMGn6p9rPecMUQMMFkyLmb"},{id:"aaa0a898a0608768ab617d6732315b212811fdb62b7c9bdf0dc8c22ac3a82747",vout:1,time:1551935998,to:"12FdefTCU3jAajGv9x1wYCaShLm5BefUNK"},{id:"e14f7d842ac7af1de2053c943432b3ed1799e58239658354f3dc80ec681b476c",vout:2,time:1551934483,to:"1Ep6tzMUmme4xqRLLdwGasNN2YMn2kz96D"},{id:"5630e76beaca881b24b2e10fc87144e6615a2946b50ffaab286c658ec31a0b15",vout:1,time:1551920200,to:"1Py7rYoELQy41Td5Kzqse86gF5Tn4hYoM8"},{id:"2cf6ad0ab81859d77a4486b9fec1f0deff8ded5db3bbf678b72d4b05b8c6c118",vout:1,time:1551918586,to:"1KxRdCeSnLtmqsyepCc8Sm2rJcZY8vQtqV"},{id:"bf60bf117f45266bf8c67d9a5ec11fe0727b12c2447bb968f0885129d942ada7",vout:1,time:1551899820,to:"1ENMVwarqYcBYoW8tSTxVsGpZLt2ZXb9o2"},{id:"49be89bbbe018bcfaebcb41cac8340bc555f022b47b922599e510b143603f4b6",vout:1,time:1551898616,to:"1GPGgwyDFpyWNNYG9b75rewiCULGNyzef8"}],y=a("0fec"),l=a("7d1a"),g=a.n(l),S=a("567f"),C=a("bc3a"),L=a.n(C);a("d225"),a("b0b4"),a("8055");y["a"].addLocale(g.a);var j=new y["a"]("en-US");function x(t){return t.reduceRight((function(t,e){var a=t[0];return a&&a.to==e.to?(t[0]=e,t):(t.unshift(e),t)}),[])}var k={name:"app",data:function(){return{ticker:1,trail:x(v)}},components:{who:h},mounted:function(){this.start()},methods:{last:function(){return this.trail[0]},start:function(){function t(){this.ticker++}function e(){this.trail&&this.trail.length&&(window._trail=JSON.parse(JSON.stringify(this.trail)))}this.load(this.last().id),setInterval(t.bind(this),1e3),setInterval(e.bind(this),6e4)},monitor:function(t){var e=this.last(),a=e.id,i=e.vout;function c(t){return t.txid==a&&t.n==i}var d=t.inputs.some(c);d&&this.load(t.format.txid)},load:function(t){var e=this;L.a.get("https://rest.bitcoin.com/v2/slp/txDetails/"+t).then((function(t){return t.data})).then((function(t){return e.addStep(t)}))},addStep:function(t){var e=t.retData.txid,a=t.tokenInfo,i=a.sendOutputs.findIndex((function(t){return"0"!=t})),c=t.retData.vout[i],d=c.scriptPubKey.addresses[0],s=this.last().id,r=this.last().to;if(s!=e){var o={id:e,vout:i,time:t.retData.time,to:d};r==d?this.trail[0]=o:this.trail.unshift(o)}var b=c.spentTxId;b&&this.load(b)}},filters:{timelocale:function(t){var e=new Date(1e3*t);return e.toLocaleDateString()+" "+e.toLocaleTimeString()},timeago:function(t){return j.format(new Date(1e3*t),{gradation:S["a"]})},tx:function(t){return t}}},D=k,P=Object(p["a"])(D,c,d,!1,null,null,null),N=P.exports;new i["a"]({render:function(t){return t(N)}}).$mount("#app")},6:function(t,e){}});
//# sourceMappingURL=app-legacy.53c173ee.js.map