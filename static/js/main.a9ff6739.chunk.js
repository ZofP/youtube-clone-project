(this["webpackJsonpyoutube-clone"]=this["webpackJsonpyoutube-clone"]||[]).push([[0],{128:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},142:function(e,t,n){},143:function(e,t,n){},146:function(e,t,n){},147:function(e,t,n){},166:function(e,t,n){},168:function(e,t,n){},169:function(e,t,n){},177:function(e,t,n){},178:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(15),o=n.n(s),r=(n(128),n(129),n(33)),i=(n(130),n(202)),l=n(204),d=n(211),u=n(88),j=n.n(u),b=n(89),p=n.n(b),O=n(91),h=n.n(O),m=n(92),v=n.n(m),f=n(93),x=n.n(f),g=n(90),y=n.n(g),_=n(10),I=n(8),S=n(14),N=n.n(S),w=n(22),k="LOGIN_SUCCESS",C="LOGIN_FAIL",E="LOGIN_REQUEST",T="LOG_OUT",A="LOAD_PROFILE",P="ANONYMOUS_LOG_OUT",R="HOME_VIDEOS_SUCCESS",D="HOME_VIDEOS_FAIL",L="HOME_VIDEOS_REQUEST",M="SEARCHED_VIDEOS_SUCCESS",U="SEARCHED_VIDEOS_FAIL",V="SEARCHED_VIDEOS_REQUEST",z="SET_CURRENTVIDEO",H="SIDEBAR_TOGGLE",G="SIDEBAR_CHANGE_TYPE",F="SIDEBAR_SETMENUITEM",Y=function(e){return function(){var t=Object(w.a)(N.a.mark((function t(n,c){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{n({type:F,payload:e}),sessionStorage.setItem("youtube-clone-selectedMenuItem",e)}catch(c){console.log(c.message),n({type:F,payload:"Home"})}case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},B=n(1),J=Object(i.a)({root:{"&:hover":{backgroundColor:"transparent"},color:function(e){return"white"===e.color?"rgba(0, 0, 0, 0.54)":"white"}}}),q=function(e){var t=e.componentStyle,n=J({color:t}),a=Object(c.useState)(""),s=Object(r.a)(a,2),o=s[0],i=s[1],u=Object(_.g)().push,b=Object(I.b)(),O=Object(I.c)((function(e){return e.auth})).user,m=O&&(O.photoURL||"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"),f=function(){b(function(){var e=Object(w.a)(N.a.mark((function e(t,n){var c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{c=n().sidebar.sidebarOpen,t({type:H,payload:!c}),sessionStorage.setItem("youtube-clone-sidebarOpen",!c)}catch(a){console.log(a.message),t({type:H,payload:!0})}case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())};return Object(B.jsxs)("div",{className:"header header--".concat(t),children:[Object(B.jsxs)("div",{className:"header__left",children:[Object(B.jsx)(l.a,{className:n.root,onClick:function(e){return f()},children:Object(B.jsx)(j.a,{fontSize:"small"})}),Object(B.jsx)("img",{onClick:function(){u("/"),b(Y("Home"))},className:"header__logo ".concat("white"===t?"header__logo--white":"header__logo--black"),src:"white"===t?"https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-logo-png-transparent-image-5.png":"https://jeydoll.com/wp-content/uploads/2019/11/youtube-logo-png-transparent-background-17.png",alt:""})]}),Object(B.jsxs)("div",{className:"header__center",children:[Object(B.jsxs)("form",{type:"form",className:"header__form",children:[Object(B.jsx)("input",{placeholder:"Search",type:"text",value:o,onChange:function(e){return i(e.target.value)},className:"header__input"}),Object(B.jsx)("button",{className:"header__searchButton",onClick:function(e){return function(e){e.preventDefault(),u("/search/".concat(o)),b(Y("Search"))}(e)},type:"submit",children:Object(B.jsx)(p.a,{fontSize:"small"})})]}),Object(B.jsx)(l.a,{className:n.root,children:Object(B.jsx)(y.a,{fontSize:"small"})})]}),Object(B.jsxs)("div",{className:"header__right",children:[Object(B.jsx)(l.a,{className:n.root,children:Object(B.jsx)(h.a,{fontSize:"small"})}),Object(B.jsx)(l.a,{className:n.root,children:Object(B.jsx)(v.a,{fontSize:"small"})}),Object(B.jsx)(l.a,{className:n.root,children:Object(B.jsx)(x.a,{fontSize:"small"})}),Object(B.jsx)(d.a,{src:m})]})]})},W=(n(142),n(209)),Q=n(208),Z=(n(143),n(206)),X=n(53);n(144);X.a.initializeApp({apiKey:"AIzaSyA-X473butnngOdkzpZNvGEdF3DMxAnlhE",authDomain:"react--clone-166a0.firebaseapp.com",projectId:"react--clone-166a0",storageBucket:"react--clone-166a0.appspot.com",messagingSenderId:"187638226952",appId:"1:187638226952:web:7044a273d4db30ca5ff1bd"});var K=X.a.auth(),$=function(e){var t=e.title,n=e.Icon,a=Object(c.useState)("/"),s=Object(r.a)(a,2),o=s[0],i=s[1],l=Object(_.g)().push,d=Object(_.h)().pathname,u=Object(I.b)(),j=Object(I.c)((function(e){return e.sidebar})),b=j.sidebarOpen,p=j.selectedMenuItem,O=(Object(I.c)((function(e){return e.auth})).user,function(){l("Home"===t?"/":"/feed/".concat(t.toLowerCase())),u(Y(t))});Object(c.useEffect)((function(){i("Home"===t?"/":d)}),[d,t]);return Object(B.jsx)(B.Fragment,{children:b?Object(B.jsx)("div",{className:"sidebarRow--open",children:Object(B.jsxs)(Z.a,{className:"sidebarRow__button\n             ".concat(t===p?"selected":"","\n            ").concat("YouTube Premium"===t?"capitalized":"","\n            ").concat("Sign Out"===t?"capitalized red":"","\n              "),disableRipple:!0,onClick:"Sign Out"===t?function(e){e.email?u(function(){var e=Object(w.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.signOut();case 2:t({type:T}),sessionStorage.removeItem("youtube-clone-accessToken"),sessionStorage.removeItem("youtube-clone-user");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()):u(function(){var e=Object(w.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:P}),sessionStorage.removeItem("youtube-clone-accessToken"),sessionStorage.removeItem("youtube-clone-user");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}:O,children:[Object(B.jsx)(n,{}),Object(B.jsx)("p",{children:t})]})}):Object(B.jsx)("div",{className:"sidebarRow",children:Object(B.jsxs)(Z.a,{className:"sidebarRow__button\n                 ".concat((p===t||o==="/feed/".concat(t.toLowerCase()))&&"selected","\n                "),disableRipple:!0,onClick:O,children:[Object(B.jsx)(n,{}),Object(B.jsx)("p",{children:t})]})})})},ee=n(94),te=n.n(ee),ne=n(95),ce=n.n(ne),ae=n(96),se=n.n(ae),oe=n(97),re=n.n(oe),ie=n(98),le=n.n(ie),de=n(99),ue=n.n(de),je=n(64),be=n.n(je),pe=n(100),Oe=n.n(pe),he=n(101),me=n.n(he),ve=n(102),fe=n.n(ve),xe=n(103),ge=n.n(xe),ye=n(104),_e=n.n(ye),Ie=n(105),Se=n.n(Ie),Ne=function(){var e=Object(I.c)((function(e){return e.sidebar})).sidebarOpen,t=[{title:"Home",Icon:te.a},{title:"Explore",Icon:ce.a},{title:"Subscriptions",Icon:se.a},{title:"Library",Icon:re.a},{title:"History",Icon:le.a},{title:"Your videos",Icon:ue.a},{title:"Watch later",Icon:be.a},{title:"Show more",Icon:Oe.a},{title:"YouTube Premium",Icon:me.a},{title:"Movies",Icon:fe.a},{title:"Gaming",Icon:ge.a},{title:"Sports",Icon:_e.a},{title:"Sign Out",Icon:Se.a}];return Object(B.jsx)(B.Fragment,{children:e?Object(B.jsx)("div",{className:"sidebar--open",children:Object(B.jsxs)(W.a,{className:"sidebar--permanent",anchor:"left",variant:"permanent",open:Boolean(e),children:[t.slice(0,3).map((function(e,t){var n=e.title,c=e.Icon;return Object(B.jsx)($,{title:n,Icon:c},t)})),Object(B.jsx)(Q.a,{}),t.slice(3,8).map((function(e,t){var n=e.title,c=e.Icon;return Object(B.jsx)($,{title:n,Icon:c},t)})),Object(B.jsx)(Q.a,{}),Object(B.jsx)("p",{children:"MORE FROM YOUTUBE"}),t.slice(8,13).map((function(e,t){var n=e.title,c=e.Icon;return Object(B.jsx)($,{title:n,Icon:c},t)}))]})}):Object(B.jsx)("div",{className:"sidebar",children:Object(B.jsx)(W.a,{className:"sidebar--permanent",anchor:"left",variant:"permanent",open:!0,children:t.slice(0,4).map((function(e,t){var n=e.title,c=e.Icon;return Object(B.jsx)($,{title:n,Icon:c},t)}))})})})},we=(n(146),n(147),n(106)),ke=n.n(we).a.create({baseURL:"https://youtube.googleapis.com/youtube/v3/",params:{key:"AIzaSyA-X473butnngOdkzpZNvGEdF3DMxAnlhE"}}),Ce=function(){return function(){var e=Object(w.a)(N.a.mark((function e(t,n){var c,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:L}),e.next=4,ke("/videos",{params:{part:"snippet,contentDetails,statistics",chart:"mostPopular",regionCode:"CZ",maxResults:20,pageToken:n().homeVideos.nextPageToken}});case 4:c=e.sent,a=c.data,t({type:R,payload:{videos:a.items,nextPageToken:a.nextPageToken,category:"All"}}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message),t({type:D,payload:{error:e.t0.message,category:"All"}});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}()},Ee=function(e){return function(){var t=Object(w.a)(N.a.mark((function t(n,c){var a,s;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:L}),t.next=4,ke("/search",{params:{part:"snippet",maxResults:20,pageToken:c().homeVideos.nextPageToken,q:e,type:"video"}});case 4:a=t.sent,s=a.data,n({type:R,payload:{videos:s.items,nextPageToken:s.nextPageToken,category:e}}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0.message),n({type:D,payload:{error:t.t0.message,category:e}});case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}()},Te=["All","Music","Mixes","Live"],Ae=function(){var e=Object(I.c)((function(e){return e.homeVideos})).activeCategory,t=Object(I.b)();return Object(B.jsx)("div",{className:"filters",children:Te.map((function(n,c){return Object(B.jsx)(Z.a,{className:"filters__button ".concat(e===n&&"active"),onClick:function(){return function(e){t("All"===e?Ce():Ee(e))}(n)},children:n},c)}))})},Pe=n(5),Re=(n(166),n(210)),De=n(107),Le=n.n(De),Me=n(40),Ue=n.n(Me),Ve=n(41),ze=n.n(Ve),He=function(e){var t,n,a=e.video,s=Object(c.useState)(null),o=Object(r.a)(s,2),i=o[0],l=o[1],u=Object(c.useState)(null),j=Object(r.a)(u,2),b=j[0],p=j[1],O=Object(c.useState)(null),h=Object(r.a)(O,2),m=h[0],v=h[1],f=Object(c.useState)(null),x=Object(r.a)(f,2),g=x[0],y=x[1],S=Object(c.useState)(null),k=Object(r.a)(S,2),C=k[0],E=k[1],T=Object(c.useState)({}),A=Object(r.a)(T,2),P=A[0],R=A[1];Object(c.useEffect)((function(){var e,t,n,c;return R({videoTitle:a.snippet.title,videoThumbnail:a.snippet.thumbnails.medium.url,description:"".concat(a.snippet.description.slice(0,120),"..."),descriptionFull:a.snippet.description,channelTitle:a.snippet.channelTitle,channelId:a.snippet.channelId,id:(null===(e=a.id)||void 0===e?void 0:e.videoId)||(null===(t=a.contentDetails)||void 0===t?void 0:t.videoId)||a.id,link:"https://www.youtube.com/watch?v=".concat((null===(n=a.id)||void 0===n?void 0:n.videoId)||(null===(c=a.contentDetails)||void 0===c?void 0:c.videoId)||a.id),contentDetails:a.contentDetails,timestamp:a.snippet.publishedAt})}),[a]);var D=P.videoTitle,L=P.videoThumbnail,M=P.channelTitle,U=P.channelId,V=P.timestamp,H=P.id,G=P.description,F=(null===(t=a.id)||void 0===t?void 0:t.videoId)||(null===(n=a.contentDetails)||void 0===n?void 0:n.videoId)||a.id;Object(c.useEffect)((function(){(function(){var e=Object(w.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ke("/videos",{params:{part:"contentDetails,statistics",id:F}});case 2:t=e.sent,n=t.data.items,E(n[0].contentDetails.duration),p(n[0].statistics.viewCount),v(n[0].statistics.likeCount),y(n[0].statistics.dislikeCount);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[F]),Object(c.useEffect)((function(){(function(){var e=Object(w.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ke("/channels",{params:{part:"snippet",id:U}});case 2:t=e.sent,n=t.data.items,l(n[0].snippet.thumbnails.default.url);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[U]);var J=Object(_.g)().push,q=Object(I.c)((function(e){return e.sidebar})).selectedMenuItem,W=Object(I.b)();return Object(B.jsxs)("div",{className:"Watch"===q?"videoCard--home":"videoCard--".concat(q.toLowerCase()),onClick:function(){J("/watch/".concat(H)),W(function(e){return function(){var t=Object(w.a)(N.a.mark((function t(n){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:z,payload:e}),sessionStorage.setItem("youtube-clone-currentVideo",JSON.stringify(e));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(Object(Pe.a)(Object(Pe.a)({},P),{},{likes:m,dislikes:g,views:b,duration:C}))),W(Y("Watch"))},children:[Object(B.jsxs)("div",{className:"videoCard__thumbnail__container",children:[Object(B.jsx)("img",{src:L,className:"videoCard__thumbnail",alt:""}),Object(B.jsx)("div",{className:"videoCard__control videoCard__duration",children:Ue.a.utc(1e3*Ue.a.duration(C).asSeconds()).format("mm:ss")}),Object(B.jsx)("div",{className:"videoCard__control videoCard__watchLater",children:Object(B.jsx)(be.a,{})}),Object(B.jsx)("div",{className:"videoCard__control videoCard__addToQueue",children:Object(B.jsx)(Le.a,{})})]}),"Home"===q?Object(B.jsxs)("div",{className:"videoCard__info",children:[Object(B.jsx)(Re.a,{title:M,placement:"bottom-end",children:Object(B.jsx)(d.a,{className:"videoCard__avatar",alt:M,src:i})}),Object(B.jsxs)("div",{className:"videoCard__text",children:[Object(B.jsx)(Re.a,{title:D,placement:"bottom-end",children:Object(B.jsx)("h3",{children:D})}),Object(B.jsx)(Re.a,{title:M,placement:"top",children:Object(B.jsx)("p",{children:M})}),Object(B.jsxs)("p",{children:[ze()(b).format("0.a").toUpperCase()," views \u2022"," ",Ue()(V).fromNow()]})]})]}):"Search"===q?Object(B.jsx)("div",{className:"videoCard__info",children:Object(B.jsxs)("div",{className:"videoCard__text",children:[Object(B.jsx)(Re.a,{title:D,placement:"bottom-start",children:Object(B.jsx)("h3",{children:D})}),Object(B.jsxs)("p",{children:[ze()(b).format("0.a").toUpperCase()," views \u2022"," ",Ue()(V).fromNow()]}),Object(B.jsxs)("div",{className:"videoCard__channelInfo",children:[Object(B.jsx)(Re.a,{title:M,placement:"bottom-end",children:Object(B.jsx)(d.a,{className:"videoCard__avatar",alt:M,src:i})}),Object(B.jsx)(Re.a,{title:M,placement:"top",children:Object(B.jsx)("p",{children:M})})]}),Object(B.jsx)("p",{children:G})]})}):""]})},Ge=n(109),Fe=function(){var e=Object(I.b)();Object(c.useEffect)((function(){e(Ce())}),[e]);var t=Object(I.c)((function(e){return e.homeVideos})),n=t.videos,a=t.activeCategory;return Object(B.jsxs)("div",{className:"home",children:[Object(B.jsx)(Ae,{}),Object(B.jsx)("div",{className:"home__videoList",children:Object(B.jsx)(Ge.a,{dataLength:n.length,next:function(){e("All"===a?Ce():Ee(a))},hasMore:!0,loader:Object(B.jsx)("div",{}),children:n.map((function(e,t){return Object(B.jsx)(He,{video:e},t)}))})})]})},Ye=(n(168),n(110)),Be=n.n(Ye),Je=function(){var e=Object(_.i)().query,t=Object(I.c)((function(e){return e.searchedVideos})).videos,n=Object(I.b)();return Object(c.useEffect)((function(){var t;n((t=e,function(){var e=Object(w.a)(N.a.mark((function e(n){var c,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:V}),e.next=4,ke("/search",{params:{part:"snippet",maxResults:20,q:t,type:"video"}});case 4:c=e.sent,a=c.data,n({type:M,payload:a.items}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message),n({type:U,payload:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()))}),[e,n]),Object(B.jsx)("div",{className:"search",children:Object(B.jsxs)("div",{className:"search__content",children:[Object(B.jsxs)("div",{className:"search__filter",children:[Object(B.jsx)(Be.a,{}),Object(B.jsx)("p",{children:"FILTERS"})]}),Object(B.jsx)("div",{className:"search__videoList",children:t.map((function(e,t){return Object(B.jsx)(He,{video:e},t)}))})]})})},qe=(n(169),n(111)),We=n.n(qe),Qe=n(112),Ze=n.n(Qe),Xe=n(113),Ke=n.n(Xe),$e=n(114),et=n.n($e),tt=n(115),nt=n.n(tt),ct=n(116),at=n.n(ct),st=function(){var e=Object(I.c)((function(e){return e.currentVideo})),t=e.videoTitle,n=(e.videoThumbnail,e.channelTitle,e.channelAvatar,e.views),c=e.timestamp,a=(e.id,e.description,e.duration,e.link),s=e.likes,o=e.dislikes,r=Object(I.c)((function(e){return e.homeVideos})).videos;return Object(B.jsxs)("div",{className:"videoPlayer",children:[Object(B.jsx)(We.a,{url:a,className:"videoPlayer__player",playing:!0,width:"100%",height:"calc(100vh - 169px)",controls:!0}),Object(B.jsxs)("div",{className:"videoPlayer__content",children:[Object(B.jsxs)("div",{className:"videoPlayer__info",children:[Object(B.jsx)("p",{className:"videoPlayer__title",children:t}),Object(B.jsxs)("div",{className:"videoPlayer__details",children:[Object(B.jsxs)("div",{className:"videoPlayer__subtitle",children:[ze()(n).format("0,0,0")," views \u2022"," ",Ue()(c).format("MMM DD, YYYY")]}),Object(B.jsxs)("div",{className:"videoPlayer__buttons",children:[Object(B.jsx)(Re.a,{title:"I like this",placement:"bottom-end",children:Object(B.jsxs)("div",{className:"videoPlayer__button",children:[Object(B.jsx)(l.a,{children:Object(B.jsx)(Ze.a,{fontSize:"medium"})}),Object(B.jsx)("p",{children:ze()(s).format("0.a").toUpperCase()})]})}),Object(B.jsx)(Re.a,{title:"I dislike this",placement:"bottom-end",children:Object(B.jsxs)("div",{className:"videoPlayer__button",children:[Object(B.jsx)(l.a,{children:Object(B.jsx)(Ke.a,{fontSize:"medium"})}),Object(B.jsx)("p",{children:ze()(o).format("0.a").toUpperCase()})]})}),Object(B.jsxs)("div",{className:"videoPlayer__button",children:[Object(B.jsx)(l.a,{className:"flip",children:Object(B.jsx)(et.a,{fontSize:"medium"})}),Object(B.jsx)("p",{children:"SHARE"})]}),Object(B.jsxs)("div",{className:"videoPlayer__button",children:[Object(B.jsx)(l.a,{children:Object(B.jsx)(nt.a,{fontSize:"medium"})}),Object(B.jsx)("p",{children:"SAVE"})]}),Object(B.jsx)("div",{className:"videoPlayer__button",children:Object(B.jsx)(l.a,{children:Object(B.jsx)(at.a,{fontSize:"medium"})})})]})]})]}),Object(B.jsxs)("div",{className:"videoPlayer__suggestions",children:[Object(B.jsx)(Ae,{}),Object(B.jsx)("div",{className:"videoPlayer__videoList",children:r.map((function(e,t){return Object(B.jsx)(He,{video:e},t)}))})]})]})]})},ot=(n(177),function(){var e=Object(I.b)(),t=Object(I.c)((function(e){return e.auth})).user,n=Object(_.g)();return Object(c.useEffect)((function(){t&&n.push("/")}),[t,n]),Object(B.jsxs)("div",{className:"login",children:[Object(B.jsx)("div",{className:"login__logo",children:Object(B.jsx)("img",{src:"https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-logo-png-transparent-image-5.png",alt:""})}),Object(B.jsx)("h2",{children:"YouTube Clone (Portfolio Project)"}),Object(B.jsxs)("div",{children:[Object(B.jsx)(Z.a,{className:"login__signIn",type:"submit",onClick:function(){e(function(){var e=Object(w.a)(N.a.mark((function e(t){var n,c,a,s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:E}),(n=new X.a.auth.GoogleAuthProvider).addScope("https://www.googleapis.com/auth/youtube.force-ssl"),e.next=6,K.signInWithPopup(n);case 6:c=e.sent,a=c.credential.accessToken,s={name:c.additionalUserInfo.profile.name,photoURL:c.additionalUserInfo.profile.picture},sessionStorage.setItem("youtube-clone-accessToken",a),sessionStorage.setItem("youtube-clone-user",JSON.stringify(s)),t({type:k,payload:a}),t({type:A,payload:s}),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0.message),t({type:C,payload:e.t0.message});case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}())},children:"Sign In with Google"}),Object(B.jsx)(Z.a,{type:"submit",onClick:function(){e((function(e){var t={profilePic:"",username:"Anonymous User",email:"",displayName:"Anonymous User",photoURL:""};sessionStorage.setItem("youtube-clone-user",JSON.stringify(t)),e({type:A,payload:t})}))},children:"Enter as Anonymous User"})]}),Object(B.jsx)("h3",{children:Object(B.jsx)("i",{children:"This project was created with Firebase API. All trademarks rights belong to Google."})})]})}),rt=function(){var e=Object(_.g)(),t=Object(I.c)((function(e){return e.auth})),n=t.user,a=t.loading;return Object(c.useEffect)((function(){a||n||e.push("/login")}),[n,a,e]),Object(B.jsxs)("div",{className:"app",children:[Object(B.jsxs)(_.d,{children:[Object(B.jsx)(_.b,{exact:!0,path:"/",children:Object(B.jsx)(q,{componentStyle:"white"})}),Object(B.jsx)(_.b,{path:"/search/:query",children:Object(B.jsx)(q,{componentStyle:"white"})}),Object(B.jsx)(_.b,{path:"/watch/:videoId",children:Object(B.jsx)(q,{componentStyle:"black"})}),Object(B.jsx)(_.b,{path:"/feed/:menuItem",children:Object(B.jsx)(q,{componentStyle:"white"})}),Object(B.jsx)(_.b,{path:"/login",children:Object(B.jsx)(ot,{})})]}),Object(B.jsx)("div",{className:"app__body",children:Object(B.jsxs)(_.d,{children:[Object(B.jsx)(_.a,{exact:!0,from:"/home",to:"/"}),Object(B.jsxs)(_.b,{exact:!0,path:"/",children:[Object(B.jsx)(Ne,{}),Object(B.jsx)(Fe,{})]}),Object(B.jsxs)(_.b,{path:"/search/:query",children:[Object(B.jsx)(Ne,{}),Object(B.jsx)(Je,{})]}),Object(B.jsx)(_.b,{path:"/watch/:videoId",children:Object(B.jsx)(st,{})}),Object(B.jsx)(_.b,{path:"/feed/:menuItem",children:Object(B.jsx)(Ne,{})})]})})]})},it=n(48),lt=n(54),dt=n(117),ut=n(118),jt={accessToken:sessionStorage.getItem("youtube-clone-accessToken")?sessionStorage.getItem("youtube-clone-accessToken"):null,user:sessionStorage.getItem("youtube-clone-user")?JSON.parse(sessionStorage.getItem("youtube-clone-user")):null,loading:!1},bt={sidebarType:sessionStorage.getItem("youtube-clone-sidebarType")?sessionStorage.getItem("youtube-clone-sidebarType"):"permanent",sidebarOpen:!sessionStorage.getItem("youtube-clone-sidebarOpen")||sessionStorage.getItem("youtube-clone-sidebarOpen"),selectedMenuItem:sessionStorage.getItem("youtube-clone-selectedMenuItem")?sessionStorage.getItem("youtube-clone-selectedMenuItem"):"Home"},pt=n(71),Ot=Object(lt.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case E:return Object(Pe.a)(Object(Pe.a)({},e),{},{loading:!0});case k:return Object(Pe.a)(Object(Pe.a)({},e),{},{accessToken:c,loading:!1});case C:return Object(Pe.a)(Object(Pe.a)({},e),{},{accessToken:null,loading:!1,error:c});case A:return Object(Pe.a)(Object(Pe.a)({},e),{},{user:c});case T:case P:return Object(Pe.a)(Object(Pe.a)({},e),{},{accessToken:null,user:null});default:return e}},homeVideos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{videos:[],loading:!1,nextPageToken:null,activeCategory:"All"},t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case L:return Object(Pe.a)(Object(Pe.a)({},e),{},{loading:!0});case R:return Object(Pe.a)(Object(Pe.a)({},e),{},{videos:e.activeCategory===c.category?[].concat(Object(pt.a)(e.videos),Object(pt.a)(c.videos)):c.videos,loading:!1,nextPageToken:c.nextPageToken,activeCategory:c.category});case D:return Object(Pe.a)(Object(Pe.a)({},e),{},{loading:!1,error:c.error,activeCategory:c.category});default:return e}},searchedVideos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{videos:[],loading:!0},t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case V:return Object(Pe.a)(Object(Pe.a)({},e),{},{loading:!0});case M:return Object(Pe.a)(Object(Pe.a)({},e),{},{videos:c,loading:!1});case U:return Object(Pe.a)(Object(Pe.a)({},e),{},{loading:!1,error:c});default:return e}},sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case H:return Object(Pe.a)(Object(Pe.a)({},e),{},{sidebarOpen:c});case G:return Object(Pe.a)(Object(Pe.a)({},e),{},{sidebarType:c});case F:return Object(Pe.a)(Object(Pe.a)({},e),{},{selectedMenuItem:c});default:return e}},currentVideo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:sessionStorage.getItem("youtube-clone-currentVideo")?JSON.parse(sessionStorage.getItem("youtube-clone-currentVideo")):null,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case z:return c;default:return e}}}),ht=Object(lt.createStore)(Ot,{},Object(dt.composeWithDevTools)(Object(lt.applyMiddleware)(ut.a)));o.a.render(Object(B.jsx)(a.a.StrictMode,{children:Object(B.jsx)(it.a,{basename:"/youtube-clone-project",children:Object(B.jsx)(I.a,{store:ht,children:Object(B.jsx)(rt,{})})})}),document.getElementById("root"))}},[[178,1,2]]]);
//# sourceMappingURL=main.a9ff6739.chunk.js.map