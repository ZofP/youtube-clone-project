(this["webpackJsonpyoutube-clone"]=this["webpackJsonpyoutube-clone"]||[]).push([[0],{127:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){},141:function(e,t,n){},142:function(e,t,n){},143:function(e,t,n){},144:function(e,t,n){},163:function(e,t,n){},165:function(e,t,n){},166:function(e,t,n){},174:function(e,t,n){},177:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(15),o=n.n(s),i=(n(127),n(128),n(33)),r=(n(129),n(200)),l=n(202),d=n(209),u=n(88),j=n.n(u),b=n(89),p=n.n(b),O=n(91),h=n.n(O),m=n(92),v=n.n(m),x=n(93),f=n.n(x),g=n(90),y=n.n(g),_=n(10),I=n(8),S=n(14),N=n.n(S),w=n(22),k="LOGIN_SUCCESS",C="LOGIN_FAIL",E="LOGIN_REQUEST",T="LOG_OUT",P="LOAD_PROFILE",A="HOME_VIDEOS_SUCCESS",D="HOME_VIDEOS_FAIL",R="HOME_VIDEOS_REQUEST",L="SEARCHED_VIDEOS_SUCCESS",M="SEARCHED_VIDEOS_FAIL",V="SEARCHED_VIDEOS_REQUEST",U="SET_CURRENTVIDEO",z="SIDEBAR_TOGGLE",H="SIDEBAR_CHANGE_TYPE",G="SIDEBAR_SETMENUITEM",F=function(e){return function(){var t=Object(w.a)(N.a.mark((function t(n,c){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{n({type:G,payload:e}),sessionStorage.setItem("youtube-clone-selectedMenuItem",e)}catch(c){console.log(c.message),n({type:G,payload:"Home"})}case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},Y=n(1),B=Object(r.a)({root:{"&:hover":{backgroundColor:"transparent"},color:function(e){return"white"===e.color?"rgba(0, 0, 0, 0.54)":"white"}}}),J=function(e){var t=e.componentStyle,n=B({color:t}),a=Object(c.useState)(""),s=Object(i.a)(a,2),o=s[0],r=s[1],u=Object(_.g)().push,b=Object(I.b)(),O=Object(I.c)((function(e){return e.auth})).user,m=O&&(O.photoURL||"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"),x=function(){b(function(){var e=Object(w.a)(N.a.mark((function e(t,n){var c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{c=n().sidebar.sidebarOpen,t({type:z,payload:!c}),sessionStorage.setItem("youtube-clone-sidebarOpen",!c)}catch(a){console.log(a.message),t({type:z,payload:!0})}case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())};return Object(Y.jsxs)("div",{className:"header header--".concat(t),children:[Object(Y.jsxs)("div",{className:"header__left",children:[Object(Y.jsx)(l.a,{className:n.root,onClick:function(e){return x()},children:Object(Y.jsx)(j.a,{fontSize:"small"})}),Object(Y.jsx)("img",{onClick:function(){u("/"),b(F("Home"))},className:"header__logo ".concat("white"===t?"header__logo--white":"header__logo--black"),src:"white"===t?"https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-logo-png-transparent-image-5.png":"https://jeydoll.com/wp-content/uploads/2019/11/youtube-logo-png-transparent-background-17.png",alt:""})]}),Object(Y.jsxs)("div",{className:"header__center",children:[Object(Y.jsxs)("form",{type:"form",className:"header__form",children:[Object(Y.jsx)("input",{placeholder:"Search",type:"text",value:o,onChange:function(e){return r(e.target.value)},className:"header__input"}),Object(Y.jsx)("button",{className:"header__searchButton",onClick:function(e){return function(e){e.preventDefault(),u("/search/".concat(o)),b(F("Search"))}(e)},type:"submit",children:Object(Y.jsx)(p.a,{fontSize:"small"})})]}),Object(Y.jsx)(l.a,{className:n.root,children:Object(Y.jsx)(y.a,{fontSize:"small"})})]}),Object(Y.jsxs)("div",{className:"header__right",children:[Object(Y.jsx)(l.a,{className:n.root,children:Object(Y.jsx)(h.a,{fontSize:"small"})}),Object(Y.jsx)(l.a,{className:n.root,children:Object(Y.jsx)(v.a,{fontSize:"small"})}),Object(Y.jsx)(l.a,{className:n.root,children:Object(Y.jsx)(f.a,{fontSize:"small"})}),Object(Y.jsx)(d.a,{src:m})]})]})},q=(n(141),n(207)),W=n(206),Q=(n(142),n(204)),Z=function(e){var t=e.title,n=e.Icon,a=Object(c.useState)("/"),s=Object(i.a)(a,2),o=s[0],r=s[1],l=Object(_.g)().push,d=Object(_.h)().pathname,u=Object(I.b)(),j=Object(I.c)((function(e){return e.sidebar})),b=j.sidebarOpen,p=j.selectedMenuItem,O=function(){l("Home"===t?"/":"/feed/".concat(t.toLowerCase())),u(F(t))};return Object(c.useEffect)((function(){r("Home"===t?"/":d)}),[d,t]),Object(Y.jsx)(Y.Fragment,{children:b?Object(Y.jsx)("div",{className:"sidebarRow--open",children:Object(Y.jsxs)(Q.a,{className:"sidebarRow__button\n             ".concat(t===p?"selected":"","\n            ").concat("YouTube Premium"===t?"capitalized":"","\n              "),disableRipple:!0,onClick:O,children:[Object(Y.jsx)(n,{}),Object(Y.jsx)("p",{children:t})]})}):Object(Y.jsx)("div",{className:"sidebarRow",children:Object(Y.jsxs)(Q.a,{className:"sidebarRow__button\n                 ".concat((p===t||o==="/feed/".concat(t.toLowerCase()))&&"selected","\n                "),disableRipple:!0,onClick:O,children:[Object(Y.jsx)(n,{}),Object(Y.jsx)("p",{children:t})]})})})},X=n(94),K=n.n(X),$=n(95),ee=n.n($),te=n(96),ne=n.n(te),ce=n(97),ae=n.n(ce),se=n(98),oe=n.n(se),ie=n(99),re=n.n(ie),le=n(64),de=n.n(le),ue=n(100),je=n.n(ue),be=n(101),pe=n.n(be),Oe=n(102),he=n.n(Oe),me=n(103),ve=n.n(me),xe=n(104),fe=n.n(xe),ge=function(){var e=Object(I.c)((function(e){return e.sidebar})).sidebarOpen,t=[{title:"Home",Icon:K.a},{title:"Explore",Icon:ee.a},{title:"Subscriptions",Icon:ne.a},{title:"Library",Icon:ae.a},{title:"History",Icon:oe.a},{title:"Your videos",Icon:re.a},{title:"Watch later",Icon:de.a},{title:"Show more",Icon:je.a},{title:"YouTube Premium",Icon:pe.a},{title:"Movies",Icon:he.a},{title:"Gaming",Icon:ve.a},{title:"Sports",Icon:fe.a}];return Object(Y.jsx)(Y.Fragment,{children:e?Object(Y.jsx)("div",{className:"sidebar--open",children:Object(Y.jsxs)(q.a,{className:"sidebar--permanent",anchor:"left",variant:"permanent",open:Boolean(e),children:[t.slice(0,3).map((function(e,t){var n=e.title,c=e.Icon;return Object(Y.jsx)(Z,{title:n,Icon:c},t)})),Object(Y.jsx)(W.a,{}),t.slice(3,8).map((function(e,t){var n=e.title,c=e.Icon;return Object(Y.jsx)(Z,{title:n,Icon:c},t)})),Object(Y.jsx)(W.a,{}),Object(Y.jsx)("p",{children:"MORE FROM YOUTUBE"}),t.slice(8,12).map((function(e,t){var n=e.title,c=e.Icon;return Object(Y.jsx)(Z,{title:n,Icon:c},t)}))]})}):Object(Y.jsx)("div",{className:"sidebar",children:Object(Y.jsx)(q.a,{className:"sidebar--permanent",anchor:"left",variant:"permanent",open:!0,children:t.slice(0,4).map((function(e,t){var n=e.title,c=e.Icon;return Object(Y.jsx)(Z,{title:n,Icon:c},t)}))})})})},ye=(n(143),n(144),n(105)),_e=n.n(ye).a.create({baseURL:"https://youtube.googleapis.com/youtube/v3/",params:{key:"AIzaSyA-X473butnngOdkzpZNvGEdF3DMxAnlhE"}}),Ie=function(){return function(){var e=Object(w.a)(N.a.mark((function e(t,n){var c,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:R}),e.next=4,_e("/videos",{params:{part:"snippet,contentDetails,statistics",chart:"mostPopular",regionCode:"CZ",maxResults:20,pageToken:n().homeVideos.nextPageToken}});case 4:c=e.sent,a=c.data,t({type:A,payload:{videos:a.items,nextPageToken:a.nextPageToken,category:"All"}}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message),t({type:D,payload:{error:e.t0.message,category:"All"}});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}()},Se=function(e){return function(){var t=Object(w.a)(N.a.mark((function t(n,c){var a,s;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:R}),t.next=4,_e("/search",{params:{part:"snippet",maxResults:20,pageToken:c().homeVideos.nextPageToken,q:e,type:"video"}});case 4:a=t.sent,s=a.data,n({type:A,payload:{videos:s.items,nextPageToken:s.nextPageToken,category:e}}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0.message),n({type:D,payload:{error:t.t0.message,category:e}});case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}()},Ne=["All","Music","Mixes","Live"],we=function(){var e=Object(I.c)((function(e){return e.homeVideos})).activeCategory,t=Object(I.b)();return Object(Y.jsx)("div",{className:"filters",children:Ne.map((function(n,c){return Object(Y.jsx)(Q.a,{className:"filters__button ".concat(e===n&&"active"),onClick:function(){return function(e){t("All"===e?Ie():Se(e))}(n)},children:n},c)}))})},ke=n(5),Ce=(n(163),n(208)),Ee=n(106),Te=n.n(Ee),Pe=n(40),Ae=n.n(Pe),De=n(41),Re=n.n(De),Le=function(e){var t,n,a=e.video,s=Object(c.useState)(null),o=Object(i.a)(s,2),r=o[0],l=o[1],u=Object(c.useState)(null),j=Object(i.a)(u,2),b=j[0],p=j[1],O=Object(c.useState)(null),h=Object(i.a)(O,2),m=h[0],v=h[1],x=Object(c.useState)(null),f=Object(i.a)(x,2),g=f[0],y=f[1],S=Object(c.useState)(null),k=Object(i.a)(S,2),C=k[0],E=k[1],T=Object(c.useState)({}),P=Object(i.a)(T,2),A=P[0],D=P[1];Object(c.useEffect)((function(){var e,t,n,c;return D({videoTitle:a.snippet.title,videoThumbnail:a.snippet.thumbnails.medium.url,description:"".concat(a.snippet.description.slice(0,120),"..."),descriptionFull:a.snippet.description,channelTitle:a.snippet.channelTitle,channelId:a.snippet.channelId,id:(null===(e=a.id)||void 0===e?void 0:e.videoId)||(null===(t=a.contentDetails)||void 0===t?void 0:t.videoId)||a.id,link:"https://www.youtube.com/watch?v=".concat((null===(n=a.id)||void 0===n?void 0:n.videoId)||(null===(c=a.contentDetails)||void 0===c?void 0:c.videoId)||a.id),contentDetails:a.contentDetails,timestamp:a.snippet.publishedAt})}),[a]);var R=A.videoTitle,L=A.videoThumbnail,M=A.channelTitle,V=A.channelId,z=A.timestamp,H=A.id,G=A.description,B=(null===(t=a.id)||void 0===t?void 0:t.videoId)||(null===(n=a.contentDetails)||void 0===n?void 0:n.videoId)||a.id;Object(c.useEffect)((function(){(function(){var e=Object(w.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_e("/videos",{params:{part:"contentDetails,statistics",id:B}});case 2:t=e.sent,n=t.data.items,E(n[0].contentDetails.duration),p(n[0].statistics.viewCount),v(n[0].statistics.likeCount),y(n[0].statistics.dislikeCount);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[B]),Object(c.useEffect)((function(){(function(){var e=Object(w.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_e("/channels",{params:{part:"snippet",id:V}});case 2:t=e.sent,n=t.data.items,l(n[0].snippet.thumbnails.default.url);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[V]);var J=Object(_.g)().push,q=Object(I.c)((function(e){return e.sidebar})).selectedMenuItem,W=Object(I.b)();return Object(Y.jsxs)("div",{className:"Watch"===q?"videoCard--home":"videoCard--".concat(q.toLowerCase()),onClick:function(){J("/watch/".concat(H)),W(function(e){return function(){var t=Object(w.a)(N.a.mark((function t(n){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:U,payload:e}),sessionStorage.setItem("youtube-clone-currentVideo",JSON.stringify(e));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(Object(ke.a)(Object(ke.a)({},A),{},{likes:m,dislikes:g,views:b,duration:C}))),W(F("Watch"))},children:[Object(Y.jsxs)("div",{className:"videoCard__thumbnail__container",children:[Object(Y.jsx)("img",{src:L,className:"videoCard__thumbnail",alt:""}),Object(Y.jsx)("div",{className:"videoCard__control videoCard__duration",children:Ae.a.utc(1e3*Ae.a.duration(C).asSeconds()).format("mm:ss")}),Object(Y.jsx)("div",{className:"videoCard__control videoCard__watchLater",children:Object(Y.jsx)(de.a,{})}),Object(Y.jsx)("div",{className:"videoCard__control videoCard__addToQueue",children:Object(Y.jsx)(Te.a,{})})]}),"Home"===q?Object(Y.jsxs)("div",{className:"videoCard__info",children:[Object(Y.jsx)(Ce.a,{title:M,placement:"bottom-end",children:Object(Y.jsx)(d.a,{className:"videoCard__avatar",alt:M,src:r})}),Object(Y.jsxs)("div",{className:"videoCard__text",children:[Object(Y.jsx)(Ce.a,{title:R,placement:"bottom-end",children:Object(Y.jsx)("h3",{children:R})}),Object(Y.jsx)(Ce.a,{title:M,placement:"top",children:Object(Y.jsx)("p",{children:M})}),Object(Y.jsxs)("p",{children:[Re()(b).format("0.a").toUpperCase()," views \u2022"," ",Ae()(z).fromNow()]})]})]}):"Search"===q?Object(Y.jsx)("div",{className:"videoCard__info",children:Object(Y.jsxs)("div",{className:"videoCard__text",children:[Object(Y.jsx)(Ce.a,{title:R,placement:"bottom-start",children:Object(Y.jsx)("h3",{children:R})}),Object(Y.jsxs)("p",{children:[Re()(b).format("0.a").toUpperCase()," views \u2022"," ",Ae()(z).fromNow()]}),Object(Y.jsxs)("div",{className:"videoCard__channelInfo",children:[Object(Y.jsx)(Ce.a,{title:M,placement:"bottom-end",children:Object(Y.jsx)(d.a,{className:"videoCard__avatar",alt:M,src:r})}),Object(Y.jsx)(Ce.a,{title:M,placement:"top",children:Object(Y.jsx)("p",{children:M})})]}),Object(Y.jsx)("p",{children:G})]})}):""]})},Me=n(108),Ve=function(){var e=Object(I.b)();Object(c.useEffect)((function(){e(Ie())}),[e]);var t=Object(I.c)((function(e){return e.homeVideos})),n=t.videos,a=t.activeCategory;return Object(Y.jsxs)("div",{className:"home",children:[Object(Y.jsx)(we,{}),Object(Y.jsx)("div",{className:"home__videoList",children:Object(Y.jsx)(Me.a,{dataLength:n.length,next:function(){e("All"===a?Ie():Se(a))},hasMore:!0,loader:Object(Y.jsx)("div",{}),children:n.map((function(e,t){return Object(Y.jsx)(Le,{video:e},t)}))})})]})},Ue=(n(165),n(109)),ze=n.n(Ue),He=function(){var e=Object(_.i)().query,t=Object(I.c)((function(e){return e.searchedVideos})),n=t.videos,a=(t.loading,Object(I.b)());return Object(c.useEffect)((function(){var t;a((t=e,function(){var e=Object(w.a)(N.a.mark((function e(n){var c,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:V}),e.next=4,_e("/search",{params:{part:"snippet",maxResults:20,q:t,type:"video"}});case 4:c=e.sent,a=c.data,n({type:L,payload:a.items}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message),n({type:M,payload:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()))}),[e,a]),Object(Y.jsx)("div",{className:"search",children:Object(Y.jsxs)("div",{className:"search__content",children:[Object(Y.jsxs)("div",{className:"search__filter",children:[Object(Y.jsx)(ze.a,{}),Object(Y.jsx)("p",{children:"FILTERS"})]}),Object(Y.jsx)("div",{className:"search__videoList",children:n.map((function(e,t){return Object(Y.jsx)(Le,{video:e},t)}))})]})})},Ge=(n(166),n(110)),Fe=n.n(Ge),Ye=n(111),Be=n.n(Ye),Je=n(112),qe=n.n(Je),We=n(113),Qe=n.n(We),Ze=n(114),Xe=n.n(Ze),Ke=n(115),$e=n.n(Ke),et=function(){var e=Object(I.c)((function(e){return e.currentVideo})),t=e.videoTitle,n=(e.videoThumbnail,e.channelTitle,e.channelAvatar,e.views),c=e.timestamp,a=(e.id,e.description,e.duration,e.link),s=e.likes,o=e.dislikes,i=Object(I.c)((function(e){return e.homeVideos})).videos;return Object(Y.jsxs)("div",{className:"videoPlayer",children:[Object(Y.jsx)(Fe.a,{url:a,className:"videoPlayer__player",playing:!0,width:"100%",height:"calc(100vh - 169px)",controls:!0}),Object(Y.jsxs)("div",{className:"videoPlayer__content",children:[Object(Y.jsxs)("div",{className:"videoPlayer__info",children:[Object(Y.jsx)("p",{className:"videoPlayer__title",children:t}),Object(Y.jsxs)("div",{className:"videoPlayer__details",children:[Object(Y.jsxs)("div",{className:"videoPlayer__subtitle",children:[Re()(n).format("0,0,0")," views \u2022"," ",Ae()(c).format("MMM DD, YYYY")]}),Object(Y.jsxs)("div",{className:"videoPlayer__buttons",children:[Object(Y.jsx)(Ce.a,{title:"I like this",placement:"bottom-end",children:Object(Y.jsxs)("div",{className:"videoPlayer__button",children:[Object(Y.jsx)(l.a,{children:Object(Y.jsx)(Be.a,{fontSize:"medium"})}),Object(Y.jsx)("p",{children:Re()(s).format("0.a").toUpperCase()})]})}),Object(Y.jsx)(Ce.a,{title:"I dislike this",placement:"bottom-end",children:Object(Y.jsxs)("div",{className:"videoPlayer__button",children:[Object(Y.jsx)(l.a,{children:Object(Y.jsx)(qe.a,{fontSize:"medium"})}),Object(Y.jsx)("p",{children:Re()(o).format("0.a").toUpperCase()})]})}),Object(Y.jsxs)("div",{className:"videoPlayer__button",children:[Object(Y.jsx)(l.a,{className:"flip",children:Object(Y.jsx)(Qe.a,{fontSize:"medium"})}),Object(Y.jsx)("p",{children:"SHARE"})]}),Object(Y.jsxs)("div",{className:"videoPlayer__button",children:[Object(Y.jsx)(l.a,{children:Object(Y.jsx)(Xe.a,{fontSize:"medium"})}),Object(Y.jsx)("p",{children:"SAVE"})]}),Object(Y.jsx)("div",{className:"videoPlayer__button",children:Object(Y.jsx)(l.a,{children:Object(Y.jsx)($e.a,{fontSize:"medium"})})})]})]})]}),Object(Y.jsxs)("div",{className:"videoPlayer__suggestions",children:[Object(Y.jsx)(we,{}),Object(Y.jsx)("div",{className:"videoPlayer__videoList",children:i.map((function(e,t){return Object(Y.jsx)(Le,{video:e},t)}))})]})]})]})},tt=(n(174),n(53));n(175);tt.a.initializeApp({apiKey:"AIzaSyA-X473butnngOdkzpZNvGEdF3DMxAnlhE",authDomain:"react--clone-166a0.firebaseapp.com",projectId:"react--clone-166a0",storageBucket:"react--clone-166a0.appspot.com",messagingSenderId:"187638226952",appId:"1:187638226952:web:7044a273d4db30ca5ff1bd"});var nt=tt.a.auth(),ct=function(){var e=Object(I.b)(),t=Object(I.c)((function(e){return e.auth.accessToken})),n=Object(_.g)();return Object(c.useEffect)((function(){t&&n.push("/")}),[t,n]),Object(Y.jsx)("div",{className:"login",children:Object(Y.jsxs)("div",{className:"login__container",children:[Object(Y.jsx)("img",{src:"https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-logo-png-transparent-image-5.png",alt:""}),Object(Y.jsx)("button",{onClick:function(){e(function(){var e=Object(w.a)(N.a.mark((function e(t){var n,c,a,s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:E}),(n=new tt.a.auth.GoogleAuthProvider).addScope("https://www.googleapis.com/auth/youtube.force-ssl"),e.next=6,nt.signInWithPopup(n);case 6:c=e.sent,a=c.credential.accessToken,s={name:c.additionalUserInfo.profile.name,photoURL:c.additionalUserInfo.profile.picture},sessionStorage.setItem("youtube-clone-accessToken",a),sessionStorage.setItem("youtube-clone-user",JSON.stringify(s)),t({type:k,payload:a}),t({type:P,payload:s}),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0.message),t({type:C,payload:e.t0.message});case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}())},children:"Login with Google"}),Object(Y.jsx)("p",{children:"This project utilizes Youtube Data API"})]})})},at=function(){var e=Object(_.g)(),t=Object(I.c)((function(e){return e.auth})),n=t.accessToken,a=t.loading;return Object(c.useEffect)((function(){a||n||e.push("/login")}),[n,a,e]),Object(Y.jsxs)("div",{className:"app",children:[Object(Y.jsxs)(_.d,{children:[Object(Y.jsx)(_.b,{exact:!0,path:"/",children:Object(Y.jsx)(J,{componentStyle:"white"})}),Object(Y.jsx)(_.b,{path:"/search/:query",children:Object(Y.jsx)(J,{componentStyle:"white"})}),Object(Y.jsx)(_.b,{path:"/watch/:videoId",children:Object(Y.jsx)(J,{componentStyle:"black"})}),Object(Y.jsx)(_.b,{path:"/feed/:menuItem",children:Object(Y.jsx)(J,{componentStyle:"white"})}),Object(Y.jsx)(_.b,{path:"/login",children:Object(Y.jsx)(ct,{})})]}),Object(Y.jsx)("div",{className:"app__body",children:Object(Y.jsxs)(_.d,{children:[Object(Y.jsx)(_.a,{exact:!0,from:"/home",to:"/"}),Object(Y.jsxs)(_.b,{exact:!0,path:"/",children:[Object(Y.jsx)(ge,{}),Object(Y.jsx)(Ve,{})]}),Object(Y.jsxs)(_.b,{path:"/search/:query",children:[Object(Y.jsx)(ge,{}),Object(Y.jsx)(He,{})]}),Object(Y.jsx)(_.b,{path:"/watch/:videoId",children:Object(Y.jsx)(et,{})}),Object(Y.jsx)(_.b,{path:"/feed/:menuItem",children:Object(Y.jsx)(ge,{})})]})})]})},st=n(48),ot=n(54),it=n(116),rt=n(117),lt={accessToken:sessionStorage.getItem("youtube-clone-accessToken")?sessionStorage.getItem("youtube-clone-accessToken"):null,user:sessionStorage.getItem("youtube-clone-user")?JSON.parse(sessionStorage.getItem("youtube-clone-user")):null,loading:!1},dt={sidebarType:sessionStorage.getItem("youtube-clone-sidebarType")?sessionStorage.getItem("youtube-clone-sidebarType"):"permanent",sidebarOpen:!sessionStorage.getItem("youtube-clone-sidebarOpen")||sessionStorage.getItem("youtube-clone-sidebarOpen"),selectedMenuItem:sessionStorage.getItem("youtube-clone-selectedMenuItem")?sessionStorage.getItem("youtube-clone-selectedMenuItem"):"Home"},ut=n(71),jt=Object(ot.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case E:return Object(ke.a)(Object(ke.a)({},e),{},{loading:!0});case k:return Object(ke.a)(Object(ke.a)({},e),{},{accessToken:c,loading:!1});case C:return Object(ke.a)(Object(ke.a)({},e),{},{accessToken:null,loading:!1,error:c});case P:return Object(ke.a)(Object(ke.a)({},e),{},{user:c});case T:return Object(ke.a)(Object(ke.a)({},e),{},{accessToken:null,user:null});default:return e}},homeVideos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{videos:[],loading:!1,nextPageToken:null,activeCategory:"All"},t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case R:return Object(ke.a)(Object(ke.a)({},e),{},{loading:!0});case A:return Object(ke.a)(Object(ke.a)({},e),{},{videos:e.activeCategory===c.category?[].concat(Object(ut.a)(e.videos),Object(ut.a)(c.videos)):c.videos,loading:!1,nextPageToken:c.nextPageToken,activeCategory:c.category});case D:return Object(ke.a)(Object(ke.a)({},e),{},{loading:!1,error:c.error,activeCategory:c.category});default:return e}},searchedVideos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{videos:[],loading:!0},t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case V:return Object(ke.a)(Object(ke.a)({},e),{},{loading:!0});case L:return Object(ke.a)(Object(ke.a)({},e),{},{videos:c,loading:!1});case M:return Object(ke.a)(Object(ke.a)({},e),{},{loading:!1,error:c});default:return e}},sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dt,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case z:return Object(ke.a)(Object(ke.a)({},e),{},{sidebarOpen:c});case H:return Object(ke.a)(Object(ke.a)({},e),{},{sidebarType:c});case G:return Object(ke.a)(Object(ke.a)({},e),{},{selectedMenuItem:c});default:return e}},currentVideo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:sessionStorage.getItem("youtube-clone-currentVideo")?JSON.parse(sessionStorage.getItem("youtube-clone-currentVideo")):null,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case U:return c;default:return e}}}),bt=Object(ot.createStore)(jt,{},Object(it.composeWithDevTools)(Object(ot.applyMiddleware)(rt.a)));o.a.render(Object(Y.jsx)(a.a.StrictMode,{children:Object(Y.jsx)(st.a,{children:Object(Y.jsx)(I.a,{store:bt,children:Object(Y.jsx)(at,{})})})}),document.getElementById("root"))}},[[177,1,2]]]);
//# sourceMappingURL=main.363edd9e.chunk.js.map