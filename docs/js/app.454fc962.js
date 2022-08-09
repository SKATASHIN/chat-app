(function(){"use strict";var t={5569:function(t,e,o){var a=o(144),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("SidebarNew"),o("nav"),o("router-view")],1)},r=[],i={},n=i,l=o(1001),c=(0,l.Z)(n,s,r,!1,null,null,null),u=c.exports,d=o(6482);a.Z.use(d.Z);var m=new d.Z({icons:{iconfont:"mdi"}}),v=o(8345),h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{id:"inspire"}},[o("sidebar"),o("v-app-bar",{attrs:{app:"","shrink-on-scroll":""}},[o("h1"),o("v-toolbar-title",[t._v("チャットルーム")]),o("CreateRoom"),o("v-spacer"),o("v-btn",{attrs:{icon:""}},[o("v-icon",[t._v("mdi-dots-vertical")])],1)],1),o("v-main",[o("v-container",[o("v-row",t._l(t.rooms,(function(e){return o("v-col",{key:e.id,attrs:{cols:"4"}},[o("router-link",{attrs:{to:{path:"/chat",query:{room_id:e.id}}}},[o("v-avatar",{attrs:{color:"grey lighten-2",size:"128"}},[e.thumbnailUrl?t._e():o("img",{attrs:{src:"https://cdn.vuetifyjs.com/images/john.jpg",alt:"John"}}),e.thumbnailUrl?o("img",{attrs:{src:e.thumbnailUrl,alt:"John"}}):t._e()])],1),o("div",{staticClass:"roomName"},[t._v(t._s(e?e.name:""))])],1)})),1)],1)],1)],1)},p=[],f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-sheet",{staticClass:"pa-4",attrs:{color:"grey lighten-4"}},[o("v-avatar",{attrs:{color:"indigo"}},[o("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/jpeg, image/jpg, image/png"},on:{change:t.updateIcon}}),t.photoUrl?t._e():o("v-icon",{attrs:{dark:""},on:{click:t.changeIcon}},[t._v(" mdi-account-circle ")]),t.photoUrl?o("img",{attrs:{src:t.photoUrl,alt:""},on:{click:t.changeIcon}}):t._e()],1),o("div",{staticClass:"username"},[t._v(t._s(t.auth&&t.auth.displayName))])],1),o("v-divider"),o("v-list",[t._l(t.links,(function(e){var a=e[0],s=e[1],r=e[2];return o("v-list-item",{key:a,attrs:{to:r,link:""}},[o("v-list-item-icon",[o("v-icon",[t._v(t._s(a))])],1),o("v-list-item-content",[o("v-list-item-title",[t._v(t._s(s))])],1)],1)})),o("v-list-item",{on:{click:t.logout}},[o("v-list-item-icon",[o("v-icon",{attrs:{color:"blue"}},[t._v(" mdi-logout ")])],1),o("v-list-item-content",[o("v-list-item-title",[t._v("Logout")])],1)],1)],2)],1)},g=[],b=o(8844);const y={apiKey:"AIzaSyBpn7B-OsP1ZiwFkVm2xbP4SHupBtgoNT8",authDomain:"vue-chat-afa73.firebaseapp.com",projectId:"vue-chat-afa73",storageBucket:"vue-chat-afa73.appspot.com",messagingSenderId:"675767549506",appId:"1:675767549506:web:e18c1264abeb35711bb7db"};b.Z.initializeApp(y);var _=b.Z,V={mounted(){this.auth=JSON.parse(sessionStorage.getItem("user")),this.photoUrl=this.auth.photoURL},data:()=>({drawer:null,links:[["mdi-inbox-arrow-down","Inbox","/"],["mdi-send","Send","/about"],["mdi-delete","Trash","/about"],["mdi-alert-octagon","Spam","/about"]],auth:null,photoUrl:""}),methods:{logout(){console.log("logout call"),_.auth().signOut().then((()=>{localStorage.message="ログアウトに成功しました",this.$router.push("/login")})).catch((t=>{console.log(t)}))},changeIcon(){this.$refs.fileInput.click()},updateIcon(){console.log("updateIcon call");const t=this.getAuth();t||(sessionStorage.removeItem("user"),this.$router.push("/login"));const e=this.$refs.fileInput.files[0],o=`/user/${e.name}`;console.log(e),_.storage().ref().child(o).put(e).then((async t=>{const e=await t.ref.getDownloadURL();console.log("photoUrl",e),_.auth().onAuthStateChanged((t=>{t&&(t.updateProfile({photoURL:e}),this.auth.photoURL=e,sessionStorage.setItem("user",JSON.stringify(this.auth)),this.photoUrl=e)}))}))},getAuth(){return _.auth().onAuthStateChanged((t=>t))}}},w=V,Z=o(3453),x=o.n(Z),C=o(3811),k=o(5596),S=o(4456),I=o(893),A=o(907),E=o(6461),L=o(3560),R=o(4269),U=o(801),T=(0,l.Z)(w,f,g,!1,null,null,null),N=T.exports;x()(T,{VAvatar:C.Z,VDivider:k.Z,VIcon:S.Z,VList:I.Z,VListItem:A.Z,VListItemContent:E.km,VListItemIcon:L.Z,VListItemTitle:E.V9,VNavigationDrawer:R.Z,VSheet:U.Z});var O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-row",{attrs:{justify:"center"}},[o("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,s=e.attrs;return[o("v-btn",t._g(t._b({staticClass:"btn",attrs:{color:"primary",dark:""}},"v-btn",s,!1),a),[t._v(" 新規ルーム作成 ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-card-title",[o("span",{staticClass:"text-h5"},[t._v("New Room")])]),o("v-card-text",[o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("v-text-field",{attrs:{label:"Room Name*",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),o("v-col",{attrs:{cols:"12"}},[o("v-file-input",{attrs:{"truncate-length":"15",accept:"image/*"},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}})],1)],1)],1),o("small",[t._v("*indicates required field")])],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Close ")]),o("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.onSubmit}},[t._v(" Save ")])],1)],1)],1)],1)},$=[],j={data:()=>({dialog:!1,name:"",file:null}),methods:{async onSubmit(){console.log("onSubmit call",this.name,this.file);let t="";if(this.file){const e=`/room/${this.file.name}`;await _.storage().ref().child(e).put(this.file).then((async e=>{t=await e.ref.getDownloadURL(),console.log("thumbnailUrl",t)}))}const e=_.firestore().collection("rooms");await e.add({name:this.name,thumbnailUrl:t,createdAt:_.firestore.Timestamp.now()}).then((t=>{console.log("sucees to create room",t),this.dialog=!1}))}}},P=j,B=o(6847),q=o(2026),M=o(5255),F=o(7024),D=o(1819),J=o(9541),z=o(7581),W=o(7894),G=o(2515),Q=o(2832),H=(0,l.Z)(P,O,$,!1,null,null,null),K=H.exports;x()(H,{VBtn:B.Z,VCard:q.Z,VCardActions:M.h7,VCardText:M.ZB,VCardTitle:M.EB,VCol:F.Z,VContainer:D.Z,VDialog:J.Z,VFileInput:z.Z,VRow:W.Z,VSpacer:G.Z,VTextField:Q.Z});var X={components:{Sidebar:N,CreateRoom:K},data:()=>({rooms:[]}),mounted(){this.getRooms()},methods:{async getRooms(){this.rooms=[];const t=_.firestore().collection("rooms"),e=await t.get();console.log("snapshot",e),e.docs.map((t=>{const e={...t.data()};e.id=t.id,console.log(e),this.rooms.push(e)})),console.log(this.rooms)}}},Y=X,tt=o(303),et=o(1466),ot=o(4021),at=o(3845),st=(0,l.Z)(Y,h,p,!1,null,null,null),rt=st.exports;x()(st,{VApp:tt.Z,VAppBar:et.Z,VAvatar:C.Z,VBtn:B.Z,VCol:F.Z,VContainer:D.Z,VIcon:S.Z,VMain:ot.Z,VRow:W.Z,VSpacer:G.Z,VToolbarTitle:at.qW});var it=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{id:"inspire"}},[o("sidebar"),o("v-main",[o("h1",[t._v(t._s(t.room?t.room.name:""))]),o("v-container",{staticClass:"py-8 px-6",attrs:{fluid:""}},[o("v-row",t._l(t.cards,(function(e){return o("v-col",{key:e,attrs:{cols:"12"}},[o("v-card",[o("v-subheader",[t._v(t._s(e))]),o("v-list",{attrs:{"two-line":""}},[t._l(t.messages,(function(e,a){return[o("v-list-item",{key:a},[o("v-list-item-avatar",{attrs:{color:"grey darken-1"}},[o("v-img",{attrs:{src:e.photoURL}})],1),o("v-list-item-content",[o("v-list-item-subtitle",{staticClass:"message"},[t._v(" "+t._s(e.message)+" ")])],1)],1),6!==a?o("v-divider",{key:"divider-"+a,attrs:{inset:""}}):t._e()]}))],2)],1)],1)})),1)],1),o("v-textarea",{staticClass:"mx-2",attrs:{"append-icon":"mdi-comment",label:"メッセージを送信する",rows:"3","auto-grow":""},model:{value:t.body,callback:function(e){t.body=e},expression:"body"}}),o("v-btn",{staticClass:"mr-4",attrs:{type:"submit",disabled:t.invalid,color:"#AFEEEE"},on:{click:t.submit}},[t._v(" submit ")]),o("v-btn",{on:{click:t.clear}},[t._v(" clear ")])],1)],1)},nt=[],lt={components:{Sidebar:N},async created(){this.roomId=this.$route.query.room_id,console.log("roomId",this.roomId);const t=_.firestore().collection("rooms").doc(this.roomId),e=await t.get();e.exists||await this.$router.push("/"),this.room=e.data(),console.log("room",this.room)},mounted(){this.auth=JSON.parse(sessionStorage.getItem("user")),console.log("auth",this.auth);const t=_.firestore().collection("rooms").doc(this.roomId);t.collection("messages").orderBy("createdAt","asc").onSnapshot((t=>{t.docChanges().forEach((t=>{console.log("new message",t.doc.data()),this.messages.push(t.doc.data())}))}))},data:()=>({messages:[],body:"",roomId:"",room:null,cards:["Today"],drawer:null,links:[["mdi-inbox-arrow-down","Inbox"],["mdi-send","Send"],["mdi-delete","Trash"],["mdi-alert-octagon","Spam"]],auth:null}),computed:{invalid(){return console.log("invalid call",this.body),!this.body}},methods:{clear(){console.log("clear call."),this.body=""},submit(){console.log("submit call.",this.body);const t=_.firestore().collection("rooms").doc(this.roomId);t.collection("messages").add({message:this.body,name:this.auth.displayName,photoURL:this.auth.photoURL,createdAt:_.firestore.Timestamp.now()}).then((t=>{console.log("success",t),this.body=""})).catch((t=>{console.log("fail",t),alert("メッセージの送信に失敗しました")}))}}},ct=lt,ut=o(5288),dt=o(8208),mt=o(6975),vt=o(7033),ht=(0,l.Z)(ct,it,nt,!1,null,"3a59dd55",null),pt=ht.exports;x()(ht,{VApp:tt.Z,VBtn:B.Z,VCard:q.Z,VCol:F.Z,VContainer:D.Z,VDivider:k.Z,VImg:ut.Z,VList:I.Z,VListItem:A.Z,VListItemAvatar:dt.Z,VListItemContent:E.km,VListItemSubtitle:E.oZ,VMain:ot.Z,VRow:W.Z,VSubheader:mt.Z,VTextarea:vt.Z});var ft=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("div",{staticClass:"login-box"},[o("v-card",{staticClass:"login-form"},[o("v-card-title",{staticClass:"login-title"},[t._v("Login")]),o("v-card-subtitle",[t._v("ユーザー情報をご入力ください")]),o("v-btn",{attrs:{text:"",color:"light-blue",to:"signup"}},[t._v("新規登録はこちら")]),o("v-form",{ref:"form",staticClass:"email",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[o("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),o("v-text-field",{staticClass:"Password",attrs:{type:"password",label:"Password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),o("v-btn",{staticClass:"login-btn",attrs:{color:"success",disabled:t.isValid},on:{click:t.submit}},[t._v(" LOGIN ")]),o("v-btn",{staticClass:"clear-btn"},[t._v(" CLEAR ")]),t.message?o("v-alert",{staticClass:"success-message",attrs:{dense:"",text:"",type:"success"}},[t._v(" "+t._s(t.message)+" ")]):t._e(),t.errorMessage?o("v-alert",{staticClass:"error-message",attrs:{dense:"",outlined:"",type:"error"}},[t._v(" "+t._s(t.errorMessage)+" ")]):t._e()],1)],1)],1)])},gt=[],bt={data:()=>({valid:!0,name:"",nameRules:[t=>!!t||"Name is required",t=>t&&t.length<=10||"Name must be less than 10 characters"],email:"",emailRules:[t=>!!t||"メールアドレスを入力してください",t=>/.+@.+\..+/.test(t)||"メールアドレスが不正です"],password:"",message:"",errorMessage:""}),mounted(){localStorage.message&&(this.message=localStorage.message,localStorage.message="")},computed:{isValid(){return console.log("isValid",this.valid),!this.valid}},methods:{validate(){this.$refs.form.validate()},reset(){this.$refs.form.reset()},resetValidation(){this.$refs.form.resetValidation()},submit(){console.log("submit call"),_.auth().signInWithEmailAndPassword(this.email,this.password).then((t=>{console.log("success"),console.log("user",t.user);const e={displayName:t.user.displayName,email:t.user.email,uid:t.user.uid,refreshToken:t.user.refreshToken,photoURL:t.user.photoURL};sessionStorage.setItem("user",JSON.stringify(e)),this.$router.push("/")})).catch((t=>{console.log("fail",t),this.errorMessage="ログインに失敗しました"}))}}},yt=bt,_t=o(9602),Vt=o(3240),wt=(0,l.Z)(yt,ft,gt,!1,null,"76243db0",null),Zt=wt.exports;x()(wt,{VAlert:_t.Z,VApp:tt.Z,VBtn:B.Z,VCard:q.Z,VCardSubtitle:M.Qq,VCardTitle:M.EB,VForm:Vt.Z,VTextField:Q.Z});var xt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("div",{staticClass:"login-box"},[o("v-card",{staticClass:"login-form"},[o("v-card-title",{staticClass:"login-title"},[t._v("SignUp")]),o("v-card-subtitle",[t._v("ユーザー情報をご入力ください")]),o("v-btn",{attrs:{text:"",color:"light-blue",to:"login"}},[t._v("ログイン画面はこちら")]),o("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[o("v-text-field",{attrs:{rules:t.nameRules,label:"UserName",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),o("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),o("v-text-field",{staticClass:"Password",attrs:{type:"password",label:"Password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),o("v-btn",{staticClass:"login-btn",attrs:{color:"success",disabled:t.isValid},on:{click:t.submit}},[t._v(" SING UP ")]),o("v-btn",[t._v(" CLEAR ")]),t.errorMessage?o("v-alert",{staticClass:"error-message",attrs:{dense:"",outlined:"",type:"error"}},[t._v(" "+t._s(t.errorMessage)+" ")]):t._e()],1)],1)],1)])},Ct=[],kt={data:()=>({valid:!0,name:"",nameRules:[t=>!!t||"名前を入力してください",t=>t&&t.length<=10||"名前は１０文字以内で入力してください"],email:"",emailRules:[t=>!!t||"メールアドレスを入力してください",t=>/.+@.+\..+/.test(t)||"メールアドレスが不正です"],password:"",errorMessage:""}),computed:{isValid(){return console.log("isValid",this.valid),!this.valid}},methods:{validate(){this.$refs.form.validate()},reset(){this.$refs.form.reset()},resetValidation(){this.$refs.form.resetValidation()},submit(){console.log("submit call"),_.auth().createUserWithEmailAndPassword(this.email,this.password).then((async t=>{console.log("success",t),await t.user.updateProfile({displayName:this.name}),console.log("update user",t.user),localStorage.message="新規作成に成功しました",this.$router.push("/login")})).catch((t=>{console.log("fail",t),this.errorMessage=" ユーザーの新規作成に失敗しました。"}))}}},St=kt,It=(0,l.Z)(St,xt,Ct,!1,null,"555bf7ae",null),At=It.exports;x()(It,{VAlert:_t.Z,VApp:tt.Z,VBtn:B.Z,VCard:q.Z,VCardSubtitle:M.Qq,VCardTitle:M.EB,VForm:Vt.Z,VTextField:Q.Z}),a.Z.use(v.Z);const Et=[{path:"/",name:"RoomList",component:rt,meta:{requiresAuth:!0}},{path:"/about",name:"about",component:()=>o.e(443).then(o.bind(o,9030))},{path:"/chat",name:"ChatBoard",component:pt},{path:"/login",name:"Login",component:Zt},{path:"/signup",name:"signUp",component:At}],Lt=new v.Z({mode:"history",base:"",routes:Et});Lt.beforeEach(((t,e,o)=>{const a=t.matched.some((t=>t.meta.requiresAuth));if(a){const e=sessionStorage.getItem("user");console.log(JSON.parse(e)),e?o():o({path:"/login",query:{redirect:t.fullPath}})}else o()}));var Rt=Lt;a.Z.config.productionTip=!1,new a.Z({vuetify:m,router:Rt,render:t=>t(u)}).$mount("#app")}},e={};function o(a){var s=e[a];if(void 0!==s)return s.exports;var r=e[a]={id:a,loaded:!1,exports:{}};return t[a].call(r.exports,r,r.exports,o),r.loaded=!0,r.exports}o.m=t,function(){var t=[];o.O=function(e,a,s,r){if(!a){var i=1/0;for(u=0;u<t.length;u++){a=t[u][0],s=t[u][1],r=t[u][2];for(var n=!0,l=0;l<a.length;l++)(!1&r||i>=r)&&Object.keys(o.O).every((function(t){return o.O[t](a[l])}))?a.splice(l--,1):(n=!1,r<i&&(i=r));if(n){t.splice(u--,1);var c=s();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[a,s,r]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var a in e)o.o(e,a)&&!o.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){o.f={},o.e=function(t){return Promise.all(Object.keys(o.f).reduce((function(e,a){return o.f[a](t,e),e}),[]))}}(),function(){o.u=function(t){return"js/about.d094429c.js"}}(),function(){o.miniCssF=function(t){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.hmd=function(t){return t=Object.create(t),t.children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t}}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="vue-chat:";o.l=function(a,s,r,i){if(t[a])t[a].push(s);else{var n,l;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==e+r){n=d;break}}n||(l=!0,n=document.createElement("script"),n.charset="utf-8",n.timeout=120,o.nc&&n.setAttribute("nonce",o.nc),n.setAttribute("data-webpack",e+r),n.src=a),t[a]=[s];var m=function(e,o){n.onerror=n.onload=null,clearTimeout(v);var s=t[a];if(delete t[a],n.parentNode&&n.parentNode.removeChild(n),s&&s.forEach((function(t){return t(o)})),e)return e(o)},v=setTimeout(m.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=m.bind(null,n.onerror),n.onload=m.bind(null,n.onload),l&&document.head.appendChild(n)}}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){o.p=""}(),function(){var t={143:0};o.f.j=function(e,a){var s=o.o(t,e)?t[e]:void 0;if(0!==s)if(s)a.push(s[2]);else{var r=new Promise((function(o,a){s=t[e]=[o,a]}));a.push(s[2]=r);var i=o.p+o.u(e),n=new Error,l=function(a){if(o.o(t,e)&&(s=t[e],0!==s&&(t[e]=void 0),s)){var r=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;n.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",n.name="ChunkLoadError",n.type=r,n.request=i,s[1](n)}};o.l(i,l,"chunk-"+e,e)}},o.O.j=function(e){return 0===t[e]};var e=function(e,a){var s,r,i=a[0],n=a[1],l=a[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(s in n)o.o(n,s)&&(o.m[s]=n[s]);if(l)var u=l(o)}for(e&&e(a);c<i.length;c++)r=i[c],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(u)},a=self["webpackChunkvue_chat"]=self["webpackChunkvue_chat"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=o.O(void 0,[998],(function(){return o(5569)}));a=o.O(a)})();
//# sourceMappingURL=app.454fc962.js.map