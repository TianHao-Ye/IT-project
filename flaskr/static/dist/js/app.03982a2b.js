(function(e){function t(t){for(var s,n,i=t[0],c=t[1],l=t[2],u=0,m=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&m.push(o[n][0]),o[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);d&&d(t);while(m.length)m.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,i=1;i<a.length;i++){var c=a[i];0!==o[c]&&(s=!1)}s&&(r.splice(t--,1),e=n(n.s=a[0]))}return e}var s={},o={app:0},r=[];function n(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=s,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0264":function(e,t,a){"use strict";a("64ab")},"034f":function(e,t,a){"use strict";a("85ec")},"05fb":function(e,t,a){},"13c2":function(e,t,a){},"17c0":function(e,t,a){},"1d1f":function(e,t,a){},"1dd1":function(e,t,a){},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(e){var t=r(e);return a(t)}function r(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}o.keys=function(){return Object.keys(s)},o.resolve=r,e.exports=o,o.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("ba4c"),o=a.n(s),r=a("8c4f"),n=a("f23d"),i=a("bc3a"),c=a.n(i),l=a("130e"),d=(a("202f"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("router-view")}),u=[],m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"top"},[e._m(0),a("div",{staticClass:"t_contain"},[a("div",{staticClass:"contain_center"},[a("a",{staticClass:"title_tag",on:{click:e.homeClick}},[e._v("Home")]),a("a",{staticClass:"title_tag",on:{click:e.loginClick}},[e._v("Login")]),a("a",{staticClass:"title_tag",on:{click:e.registerClick}},[e._v("Register")])])])])])},p=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"t_logo"},[s("img",{staticStyle:{width:"110px",height:"110px"},attrs:{src:a("cf05"),alt:""}})])}],f={data:function(){return{current:["mail"]}},methods:{homeClick:function(){this.$router.push("/")},loginClick:function(){console.log("login"),this.$router.push("/app/login")},registerClick:function(){this.$router.push("/app/register/")}}},h=f,b=(a("b2e6"),a("2877")),g=Object(b["a"])(h,m,p,!1,null,"47e9108a",null),v=g.exports,y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a-carousel",{attrs:{autoplay:""}},[s("video",{staticClass:"carousel-image",attrs:{src:a("e3ed"),autoplay:"",loop:"",muted:""},domProps:{muted:!0}}),s("video",{staticClass:"carousel-image",attrs:{src:a("c2f6"),autoplay:"",loop:"",muted:""},domProps:{muted:!0}}),s("video",{staticClass:"carousel-image",attrs:{src:a("8379"),autoplay:"",loop:"",muted:""},domProps:{muted:!0}}),s("video",{staticClass:"carousel-image",attrs:{src:a("7205"),autoplay:"",loop:"",muted:""},domProps:{muted:!0}})])},w=[],k={},j=k,C=(a("7ba4"),Object(b["a"])(j,y,w,!1,null,"8dfe1cd2",null)),_=C.exports,x={name:"App",components:{Nav:v,Carousel:_}},S=x,E=(a("034f"),Object(b["a"])(S,d,u,!1,null,null,null)),P=E.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("body",[a("Nav"),a("main",{staticClass:"login-form"},[a("h2",[e._v("Sign in to")]),a("h2",[e._v("Wabby Wabbo CRM")]),a("a-alert",{attrs:{id:"emailWrong",type:"error",message:"The email does not exist."}}),a("a-alert",{attrs:{id:"passwordWrong",type:"error",message:"The password is wrong."}}),a("a-form",{attrs:{layout:"formLayout",form:e.form},on:{submit:e.handleSubmit}},[a("a-form-item",{staticClass:"input",attrs:{"validate-status":e.emailError()?"error":"",help:e.emailError()||""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{required:!0,message:"Please input your email!"}]}],expression:"[\n            'email',\n            {\n              rules: [\n                { required: true, message: 'Please input your email!' },\n              ],\n            },\n          ]"}],attrs:{placeholder:"Email"}},[a("a-icon",{staticStyle:{color:"rgba(0, 0, 0, 0.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),a("a-form-item",{attrs:{"validate-status":e.passwordError()?"error":"",help:e.passwordError()||""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"Please input your Password!"},{validator:e.checkPasswordLegality,message:"Password invalid."}]}],expression:"[\n            'password',\n            {\n              rules: [\n                { required: true, message: 'Please input your Password!' },\n                {\n                  validator: checkPasswordLegality,\n                  message: 'Password invalid.',\n                },\n              ],\n            },\n          ]"}],attrs:{type:"password",placeholder:"Password"},on:{change:e.recordPassword}},[a("a-icon",{staticStyle:{color:"rgba(0, 0, 0, 0.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1),a("a-row",{attrs:{type:"flex",justify:"center",align:"middle",span:12}},[a("h3",{staticStyle:{"padding-right":"20px"}},[e._v("Remember me:")]),a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["rememberMe",{valuePropName:"checked"}],expression:"['rememberMe', { valuePropName: 'checked' }]"}],attrs:{"default-checked":""},on:{change:e.getRememberMe}})],1),a("a-row",{attrs:{type:"flex",justify:"center",align:"middle",span:12}},[a("a-form-item",[a("a-button",{attrs:{type:"primary","html-type":"submit",disabled:e.hasErrors(e.form.getFieldsError())}},[e._v(" Log in ")])],1)],1)],1)],1)],1)},I=[];a("b64b"),a("4d63"),a("ac1f"),a("25f0");function z(e){return Object.keys(e).some((function(t){return e[t]}))}var D={name:"Login",components:{Nav:v},data:function(){return{hasErrors:z,form:this.$form.createForm(this,{name:"horizontal_login"}),pwd:""}},mounted:function(){var e=this,t=document.getElementById("emailWrong");t.style.display="none";var a=document.getElementById("passwordWrong");a.style.display="none",this.$nextTick((function(){e.form.validateFields()})),"rememberMeToken"in localStorage&&(window.location.href="/app/dashboard")},computed:{formItemLayout:function(){var e=this.formLayout;return"horizontal"===e?{labelCol:{span:4},wrapperCol:{span:14}}:{}},buttonItemLayout:function(){var e=this.formLayout;return"horizontal"===e?{wrapperCol:{span:14,offset:4}}:{}}},methods:{emailError:function(){var e=this.form,t=e.getFieldError,a=e.isFieldTouched;return a("email")&&t("email")},passwordError:function(){var e=this.form,t=e.getFieldError,a=e.isFieldTouched;return a("password")&&t("password")},getRememberMe:function(e){console.log("Remember me switch to ".concat(e))},recordPassword:function(e){this.pwd=e.target.value},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,a){e||console.log("Received values of form: ",a),console.log("hello"),a.rememberMe=!1,t.axios.post("https://wabby-wabbo-crm.herokuapp.com/auth/login",{email:a.email,password:a.password,rememberMe:a.rememberMe}).then((function(e){O(e.data)}))}))},checkPasswordLegality:function(){var e=new RegExp("^[a-zA-Z0-9]+$");return e.test(this.pwd)}}};function O(e){var t=document.getElementById("emailWrong");t.style.display="none";var a=document.getElementById("passwordWrong");a.style.display="none","Success"==e["status"]?(localStorage.setItem("rememberMeToken",e.jwt),window.location.href="/app/dashboard"):"Incorrect email."==e["status"]?t.style.display="block":a.style.display="block"}var T=D,$=(a("6d3e"),Object(b["a"])(T,M,I,!1,null,"ed3799bc",null)),L=$.exports,q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("body",[a("Nav"),a("main",{staticClass:"register-form"},[a("h2",[e._v("Sign up for")]),a("h2",[e._v("Wabby Wabbo CRM")]),a("a-alert",{attrs:{id:"emailNotAvailable",type:"error",message:"The email is not available."}}),a("a-form",{attrs:{layout:"formLayout",form:e.form},on:{submit:e.handleSubmit}},[a("a-form-item",{staticClass:"input",attrs:{"validate-status":e.emailError()?"error":"",help:e.emailError()||""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your Email!"}]}],expression:"[\n            'email',\n            {\n              rules: [\n                { type: 'email', message: 'The input is not valid E-mail!' },\n                { required: true, message: 'Please input your Email!' },\n              ],\n            },\n          ]"}],attrs:{placeholder:"Email"}},[a("a-icon",{staticStyle:{color:"rgba(0, 0, 0, 0.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),a("a-form-item",{attrs:{"validate-status":e.passwordError()?"error":"",help:e.passwordError()||""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"Please input your Password!\n"},{validator:e.checkPasswordStrength,message:"Password too short."},{validator:e.checkPasswordLegality,message:"Password can only be letters and numbers."},{validator:e.checkConfirmWhenChanged}]}],expression:"[\n            'password',\n            {\n              rules: [\n                { required: true, message: 'Please input your Password!\\n' },\n                {\n                  validator: checkPasswordStrength,\n                  message: 'Password too short.',\n                },\n                {\n                  validator: checkPasswordLegality,\n                  message: 'Password can only be letters and numbers.',\n                },\n                { validator: checkConfirmWhenChanged },\n              ],\n            },\n          ]"}],attrs:{id:"password",type:"password",placeholder:"Password"},on:{change:e.recordPassword}},[a("a-icon",{staticStyle:{color:"rgba(0, 0, 0, 0.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1),a("a-form-item",{attrs:{"validate-status":e.confirmpasswordError()?"error":"",help:e.confirmpasswordError()||""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["confirmpassword",{rules:[{required:!0,message:"Please confirm your Password!"},{validator:e.checkConfirmPassword}]}],expression:"[\n            'confirmpassword',\n            {\n              rules: [\n                { required: true, message: 'Please confirm your Password!' },\n                { validator: checkConfirmPassword },\n              ],\n            },\n          ]"}],attrs:{id:"confirmpassword",type:"password",placeholder:"Confirm password"},on:{change:e.recordConfirmPassword}},[a("a-icon",{staticStyle:{color:"rgba(0, 0, 0, 0.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1),a("a-row",{attrs:{type:"flex",justify:"center",align:"middle",span:12}},[a("a-form-item",[a("a-button",{attrs:{id:"btnSubmit",type:"primary","html-type":"submit",disabled:e.hasErrors(e.form.getFieldsError())}},[e._v(" Register ")])],1)],1)],1)],1)],1)},F=[];function N(e){return Object.keys(e).some((function(t){return e[t]}))}var R={name:"Register",components:{Nav:v},data:function(){return{hasErrors:N,form:this.$form.createForm(this,{name:"horizontal_register"}),pwd:"",cpwd:""}},mounted:function(){var e=this,t=document.getElementById("emailNotAvailable");t.style.display="none",this.$nextTick((function(){e.form.validateFields()})),"rememberMeToken"in localStorage&&localStorage.removeItem("rememberMeToken")},computed:{formItemLayout:function(){var e=this.formLayout;return"horizontal"===e?{labelCol:{span:4},wrapperCol:{span:14}}:{}},buttonItemLayout:function(){var e=this.formLayout;return"horizontal"===e?{wrapperCol:{span:14,offset:4}}:{}}},methods:{emailError:function(){var e=this.form,t=e.getFieldError,a=e.isFieldTouched;return a("email")&&t("email")},passwordError:function(){var e=this.form,t=e.getFieldError,a=e.isFieldTouched;return a("password")&&t("password")},confirmpasswordError:function(){var e=this.form,t=e.getFieldError,a=e.isFieldTouched;return a("confirmpassword")&&t("confirmpassword")},getRememberMe:function(e){console.log("Remember me switch to ".concat(e))},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,a){e||console.log("Received values of form: ",a),console.log("hello"),a.rememberMe=!1,t.axios.post("https://wabby-wabbo-crm.herokuapp.com/auth/register",{email:a.email,password:a.password,rememberMe:a.rememberMe}).then((function(e){A(e.data)}))}))},recordPassword:function(e){this.pwd=e.target.value},recordConfirmPassword:function(e){this.cpwd=e.target.value},checkPasswordStrength:function(){var e=new RegExp("(?=.{6,})");return""!=this.pwd&&e.test(this.pwd)},checkPasswordLegality:function(){var e=new RegExp("(?=.{6,})"),t=new RegExp("^[a-zA-Z0-9]+$");return!e.test(this.pwd)||t.test(this.pwd)},checkConfirmWhenChanged:function(e,t,a){var s=this.form;t&&s.validateFields(["confirmpassword"],{force:!0}),a()},checkConfirmPassword:function(e,t,a){var s=this.form;t&&t!==s.getFieldValue("password")?a("Two passwords that you enter is inconsistent!"):a()}}};function A(e){var t=document.getElementById("emailNotAvailable");t.style.display="none",console.log(e["status"]),"Success"==e["status"]?(localStorage.setItem("rememberMeToken",e.jwt),window.location.href="/app/dashboard"):"Email already registered."==e["status"]?t.style.display="block":console.log("something went wrong")}var B=R,W=(a("671d"),Object(b["a"])(B,q,F,!1,null,"2f8e65f7",null)),K=W.exports,V=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a-layout",{attrs:{id:"dashBoard"}},[s("a-layout-sider",{staticStyle:{background:"#6495f2"}},[s("div",{staticClass:"logo"},[s("img",{staticStyle:{width:"150px",height:"150px",margin:"15px","margin-left":"23px"},attrs:{src:a("cf05"),alt:""}})]),s("Menu")],1),s("a-layout-content",[s("List",{staticClass:"list-content"})],1)],1)},U=[],Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-menu",{attrs:{"default-selected-keys":["1"],"open-keys":e.openKeys,mode:"inline"},on:{"update:openKeys":function(t){e.openKeys=t},"update:open-keys":function(t){e.openKeys=t},click:e.handleClick}},[a("a-menu-item",{key:"0"},[a("a-icon",{attrs:{type:"home"}}),a("span",{on:{click:e.dashboardClick}},[e._v("Dashboard")])],1),a("a-sub-menu",{key:"sub2",on:{titleClick:e.titleClick}},[a("span",{attrs:{slot:"title"},slot:"title"},[a("a-icon",{attrs:{type:"crown"}}),a("span",[e._v("Profile")])],1),a("a-menu-item",{key:"1"},[e._v(" General ")]),a("a-menu-item",{key:"2"},[e._v(" Security ")])],1),a("a-sub-menu",{key:"sub3",on:{titleClick:e.titleClick}},[a("span",{attrs:{slot:"title"},slot:"title"},[a("a-icon",{attrs:{type:"cluster"}}),a("span",[e._v("Database")])],1),a("a-menu-item",{key:"4"},[e._v(" View Database ")]),a("a-menu-item",{key:"5",on:{click:e.createFormClick}},[e._v(" Create Form ")]),a("a-menu-item",{key:"6"},[e._v(" View Forms ")])],1),a("a-menu-item",{key:"8"},[a("a-icon",{attrs:{type:"build"}}),a("span",{on:{click:e.clientsClick}},[e._v("Clients")])],1),a("a-menu-item",{key:"7",on:{click:function(t){return e.logOut()}}},[a("a-icon",{attrs:{type:"import"}}),a("span",[e._v("Log out")])],1)],1)],1)},H=[],J={data:function(){return{current:[],openKeys:[]}},watch:{openKeys:function(e){console.log("openKeys",e)}},methods:{handleClick:function(e){console.log("click",e)},titleClick:function(e){console.log("titleClick",e)},logOut:function(){"rememberMeToken"in localStorage&&localStorage.removeItem("rememberMeToken"),this.$router.push("/")},dashboardClick:function(){this.current=["0"],this.$router.push("/app/dashboard")},clientsClick:function(){this.current=["8"],window.location.href="/app/clients"},createFormClick:function(){window.location.href="/app/form_create"}}},Z=J,G=Object(b["a"])(Z,Q,H,!1,null,null,null),X=G.exports,Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-list",{attrs:{grid:{gutter:16,column:4},"data-source":e.data},scopedSlots:e._u([{key:"renderItem",fn:function(t){return a("a-list-item",{},[a("a-card",{attrs:{id:t.id}},[a("a-card-meta",{attrs:{id:t.id}},[a("div",{attrs:{slot:"title",id:t.id},on:{click:e.cardClick},slot:"title"},[e._v(" "+e._s(t.title)+" ")]),a("div",{attrs:{slot:"description",id:t.id},on:{click:e.cardClick},slot:"description"},[e._v(" "+e._s(t.content)+" ")])])],1)],1)}}])})},ee=[],te=(a("159b"),a("b0c0"),a("a4d3"),a("e01a"),[]),ae={data:function(){return{data:te}},mounted:function(){var e=this;localStorage.getItem("rememberMeToken")&&(console.log("exists"),this.axios.post("https://wabby-wabbo-crm.herokuapp.com/dashboard/",{jwt:localStorage.getItem("rememberMeToken")}).then((function(t){console.log(t.data),e.data=[],"Success"==t.data.status?t.data.forms.forEach((function(t){e.data.push({title:t.name,content:t.description,id:t.form_id})})):(localStorage.removeItem("rememberMeToken"),window.location.href="/app/login"),console.log(e.data)})))},methods:{cardClick:function(e){console.log(e.target.id),localStorage.setItem("record_id",e.target.id),window.location.href="/app/record"}}},se=ae,oe=Object(b["a"])(se,Y,ee,!1,null,null,null),re=oe.exports,ne={name:"App",components:{Menu:X,List:re}},ie=ne,ce=(a("98ea"),Object(b["a"])(ie,V,U,!1,null,"139b0d40",null)),le=ce.exports,de=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a-layout",{attrs:{id:"Record"}},[s("a-layout-sider",{staticStyle:{background:"#6495f2"}},[s("div",{staticClass:"logo"},[s("img",{staticStyle:{width:"150px",height:"150px",margin:"15px","margin-left":"23px"},attrs:{src:a("cf05"),alt:""}})]),s("Menu")],1),s("a-layout-content",{staticClass:"list-content"},[s("DashboardBar"),s("div",{staticClass:"place-holder"}),s("a-table",{attrs:{columns:e.columns,"data-source":e.data},scopedSlots:e._u([{key:"action",fn:function(t,a){return s("span",{},[s("a",{attrs:{id:a.id},on:{click:e.viewClick}},[e._v("View All")])])}}])})],1)],1)},ue=[],me=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},pe=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"top"},[a("div",{staticClass:"t_contain"},[a("div",{staticClass:"contain_center"},[a("a",{staticClass:"title_tag",attrs:{href:"/"}},[e._v("Home")]),a("a",{staticClass:"title_tag"},[e._v("Log out")])])])])])}],fe={data:function(){return{current:["mail"]}}},he=fe,be=(a("0264"),Object(b["a"])(he,me,pe,!1,null,"81aa30d4",null)),ge=be.exports,ve=[],ye=[],we={components:{Menu:X,DashboardBar:ge},data:function(){return{data:ye,columns:ve}},mounted:function(){var e=this,t={form_id:localStorage.getItem("record_id"),jwt:localStorage.getItem("rememberMeToken")};this.axios.post("http://wabby-wabbo-crm.herokuapp.com/form/showresponse",t).then((function(t){if("Success"==t.data.status){var a=[];t.data.field_list.forEach((function(t){e.columns.push({title:t,dataIndex:t.toLowerCase(),key:t.toLowerCase()}),a.push(t.toLowerCase())})),e.columns.push({title:"Action",key:"action",scopedSlots:{customRender:"action"}}),e.data=[],t.data.responses.forEach((function(t){for(var s={key:t.response_id},o=0;o<a.length;o++)s[a[o]]=t.response[o];s["id"]=t.customer_id,e.data.push(s)}))}else localStorage.removeItem("rememberMeToken"),window.location.href="/app/login"}))},methods:{viewClick:function(e){var t=e.target.id;localStorage.setItem("customer_id",t),window.location.href="/app/customer"}}},ke=we,je=(a("80d1"),Object(b["a"])(ke,de,ue,!1,null,"ff2b8dac",null)),Ce=je.exports,_e=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a-layout",{attrs:{id:"Record"}},[s("a-layout-sider",{staticStyle:{background:"#6495f2"}},[s("div",{staticClass:"logo"},[s("img",{staticStyle:{width:"150px",height:"150px",margin:"15px","margin-left":"23px"},attrs:{src:a("cf05"),alt:""}})]),s("Menu")],1),s("a-layout-content",{staticClass:"list-content"},[s("DashboardBar"),s("div",{staticClass:"place-holder"}),e._l(e.lists,(function(e){return s("li",{key:e.id},[s("a-table",{attrs:{columns:e.columns,"data-source":e.data}})],1)}))],2)],1)},xe=[],Se={components:{Menu:X,DashboardBar:ge},data:function(){return{lists:[]}},mounted:function(){var e=this,t={customer_id:localStorage.getItem("customer_id"),jwt:localStorage.getItem("rememberMeToken")};this.axios.post("https://wabby-wabbo-crm.herokuapp.com/form/checkcustomer",t).then((function(t){"Success"==t.data.status?(t.data.responses.forEach((function(t){var a={id:t.response_id,columns:[],data:[]},s=[];t.field_list.forEach((function(e){a.columns.push({title:e,dataIndex:e.toLowerCase(),key:e.toLowerCase()}),s.push(e.toLowerCase())}));for(var o={key:t.response_id},r=0;r<s.length;r++)o[s[r]]=t.response[r];a.data.push(o),e.lists.push(a)})),console.log(e.lists)):(localStorage.removeItem("rememberMeToken"),window.location.href="/app/login")}))}},Ee=Se,Pe=(a("bfd8"),Object(b["a"])(Ee,_e,xe,!1,null,"7e218064",null)),Me=Pe.exports,Ie=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a-layout",{attrs:{id:"clients"}},[s("a-layout-sider",{staticStyle:{background:"#6495f2"}},[s("div",{staticClass:"logo"},[s("img",{staticStyle:{width:"150px",height:"150px",margin:"15px","margin-left":"23px"},attrs:{src:a("cf05"),alt:""}})]),s("Menu")],1),s("a-layout-content",{staticClass:"list-content"},[s("DashboardBar"),s("div",{staticClass:"place-holder"}),s("a-table",{attrs:{columns:e.columns,"data-source":e.data},scopedSlots:e._u([{key:"action",fn:function(t,a){return s("span",{},[s("a",{attrs:{id:a.id},on:{click:e.viewClick}},[e._v("View All")])])}}])})],1)],1)},ze=[],De={components:{Menu:X,DashboardBar:ge},data:function(){return{columns:[{title:"Name",dataIndex:"name",key:"name"},{title:"Action",key:"action",scopedSlots:{customRender:"action"}}],data:[]}},mounted:function(){var e=this,t={customer_id:localStorage.getItem("customer_id"),jwt:localStorage.getItem("rememberMeToken")};this.axios.post("/form/getcustomer",t).then((function(t){console.log(t.data.responses),"Success"==t.data.status?t.data.responses.forEach((function(t){var a={key:t.customer_id,name:t.name};e.data.push(a)})):(localStorage.removeItem("rememberMeToken"),window.location.href="/app/login")}))},methods:{viewClick:function(e){var t=e.target.id;localStorage.setItem("customer_id",t),window.location.href="/app/customer"}}},Oe=De,Te=(a("d2cd"),Object(b["a"])(Oe,Ie,ze,!1,null,"59abb724",null)),$e=Te.exports,Le=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a-layout",{attrs:{id:"form"}},[s("a-layout-sider",{staticStyle:{background:"#6495f2"}},[s("div",{staticClass:"logo"},[s("img",{staticStyle:{width:"150px",height:"150px",margin:"15px","margin-left":"23px"},attrs:{src:a("cf05"),alt:""}})]),s("Menu")],1),s("a-layout-content",{staticClass:"list-content"},[s("DashboardBar"),s("div",{staticClass:"place-holder"}),s("div",{staticClass:"form-content"},[s("div",{staticClass:"form-title"},[s("a-row",[s("a-input",{staticStyle:{"margin-left":"-1%"},attrs:{id:"title",size:"large"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1),s("a-row",[s("a-textarea",{staticStyle:{"margin-left":"-1%"},attrs:{placeholder:"Please write your description","auto-size":""},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1),s("br"),s("a-row",[s("a-row",[s("a-col",{attrs:{span:2}},[s("div",[e._v("Anonymous")])]),s("a-col",{attrs:{span:2}},[s("a-switch",{model:{value:e.anonymous,callback:function(t){e.anonymous=t},expression:"anonymous"}})],1)],1)],1)],1)]),s("br",{directives:[{name:"show",rawName:"v-show",value:0==e.anonymous,expression:"anonymous == false"}]}),s("a-card",{directives:[{name:"show",rawName:"v-show",value:0==e.anonymous,expression:"anonymous == false"}],staticStyle:{width:"90%","margin-left":"5%"}},[s("a-card-meta",[s("div",{attrs:{slot:"title"},slot:"title"},[s("a-row",[s("a-col",{attrs:{span:12}},[s("a-input",{attrs:{value:"Name",size:"large",disabled:""}})],1),s("a-col",{attrs:{span:12}},[s("a-row",[s("a-col",{attrs:{span:15}},[s("a-select",{staticStyle:{"margin-top":"3px","margin-left":"2%"},attrs:{"default-value":2,disabled:""},on:{change:e.typeChange}},[s("a-select-option",{attrs:{value:1}},[e._v(" Multiple Choice ")]),s("a-select-option",{attrs:{value:2}},[e._v(" Short Answer ")])],1),s("a-button",{staticStyle:{"margin-left":"2%"},attrs:{icon:"delete",disabled:""},on:{click:e.deleteQuestionClick}})],1),s("a-col",{staticStyle:{"margin-top":"5px"},attrs:{span:4}},[s("div",[e._v("Required")])]),s("a-col",{staticStyle:{"margin-top":"5px"},attrs:{span:2}},[s("a-switch",{attrs:{"default-checked":"",disabled:""},on:{click:e.requiredClick}})],1)],1)],1)],1)],1)])],1),e._l(e.listData,(function(t){return s("li",{key:t.key},[s("a-card",{staticStyle:{width:"90%","margin-left":"5%"}},[s("a-card-meta",[s("div",{attrs:{slot:"title"},slot:"title"},[s("a-row",[s("a-col",{attrs:{span:12}},[s("a-input",{attrs:{size:"large"},model:{value:t.title,callback:function(a){e.$set(t,"title",a)},expression:"listItem.title"}})],1),s("a-col",{attrs:{span:12}},[s("a-row",[s("a-col",{attrs:{span:15}},[s("a-select",{staticStyle:{"margin-left":"2%","margin-top":"3px"},attrs:{"default-value":t.key+";1"},on:{change:e.typeChange}},[s("a-select-option",{attrs:{value:t.key+";1"}},[e._v(" Multiple Choice ")]),s("a-select-option",{attrs:{value:t.key+";2"}},[e._v(" Short Answer ")])],1),s("a-button",{staticStyle:{"margin-left":"2%"},attrs:{icon:"delete",id:t.key},on:{click:e.deleteQuestionClick}})],1),s("a-col",{staticStyle:{"margin-top":"5px"},attrs:{span:4}},[s("div",[e._v("Required")])]),s("a-col",{staticStyle:{"margin-top":"5px"},attrs:{span:2}},[s("a-switch",{on:{click:e.requiredClick},model:{value:t.required,callback:function(a){e.$set(t,"required",a)},expression:"listItem.required"}})],1)],1)],1)],1),s("a-row",["multipleChoice"==t.type?s("div",[e._l(t.choice,(function(a){return s("li",{key:a.key},[s("a-row",[s("a-col",{attrs:{span:22}},[s("a-input",{model:{value:a.value,callback:function(t){e.$set(a,"value",t)},expression:"choice.value"}})],1),s("a-col",{attrs:{span:1}},[s("a-button",{attrs:{icon:"delete",id:t.key+";"+a.key},on:{click:e.deleteChoiceClick}})],1)],1)],1)})),s("a-button",{attrs:{icon:"plus-circle",id:t.key},on:{click:e.addChoiceClick}})],2):s("div")])],1)])],1)],1)})),s("div",{staticClass:"control-buttons"},[s("a-button",{staticStyle:{"margin-right":"2%"},attrs:{icon:"plus-circle"},on:{click:e.addClick}}),s("a-button",{on:{click:e.submitClick}},[e._v(" Submit ")])],1)],2)],1)},qe=[],Fe=(a("a434"),a("1276"),{components:{Menu:X,DashboardBar:ge},data:function(){return{title:"Untitled Form",listData:[],key:0,anonymous:!1,description:""}},mounted:function(){},methods:{addClick:function(){this.listData.push({key:this.key++,type:"multipleChoice",title:"Untitled question",required:!1,choice:[{value:"option0",key:0}],choiceKey:0})},deleteQuestionClick:function(e){for(var t=-1,a=0;a<this.listData.lenth;a++)this.listData[a].key==e.target.id&&(t=key);this.listData.splice(t,1)},requiredClick:function(){console.log(this.listData)},typeChange:function(e){console.log(e);var t=e.split(";");"1"==t[1]?(this.listData[parseInt(t[0])].type="multipleChoice",this.listData[parseInt(t[0])].choiceKey=0,this.listData[parseInt(t[0])].choice=[{value:"option0",key:0}]):this.listData[parseInt(t[0])].type="shortAnswer"},addChoiceClick:function(e){this.listData[e.target.id].choiceKey+=1,this.listData[e.target.id].choice.push({value:"option"+this.listData[e.target.id].choiceKey,key:this.listData[e.target.id].choiceKey}),console.log(e.target.id)},deleteChoiceClick:function(e){for(var t=e.target.id.split(";"),a=-1,s=0;s<this.listData[t[0]].choice.length;s++)this.listData[t[0]].choice[s].key==t[1]&&(a=s);this.listData[t[0]].choice.splice(a,1),console.log(this.listData[t[0]].choice)},submitClick:function(e){var t={jwt:localStorage.getItem("rememberMeToken"),name:this.title,description:this.description,anonymous:this.anonymous,field_list:[]};this.listData.forEach((function(e){var a={question_name:e.title,type:e.type,required:e.required};"multipleChoice"==e.type&&(a["choice"]=e.choice),t.field_list.push(a)})),0==this.anonymous&&t.field_list.unshift({question_name:"Name",type:"shortAnswer",required:!0}),this.axios.post("https://wabby-wabbo-crm.herokuapp.com/dashboard/createform",t).then((function(e){console.log(e.data),"Success"==e.data.status&&(window.location.href="/app/dashboard")}))}}}),Ne=Fe,Re=(a("a41b"),Object(b["a"])(Ne,Le,qe,!1,null,"1d89ea21",null)),Ae=Re.exports,Be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div")},We=[],Ke={data:function(){return{formId:formId}},mounted:function(){console.log(this.$route.params),this.formId=this.$route.params.formId}},Ve=Ke,Ue=Object(b["a"])(Ve,Be,We,!1,null,null,null),Qe=Ue.exports,He=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("Nav"),s("div",{staticClass:"place-holder"}),s("Carousel"),s("img",{staticStyle:{width:"300px",height:"300px"},attrs:{alt:"Vue logo",src:a("cf05")}})],1)},Je=[],Ze={name:"App",components:{Nav:v,Carousel:_}},Ge=Ze,Xe=(a("ee92"),Object(b["a"])(Ge,He,Je,!1,null,"ae9dee9c",null)),Ye=Xe.exports;o.a.use(r["a"]),o.a.use(n["a"]),o.a.use(l["a"],c.a),o.a.config.productionTip=!1;var et=new r["a"]({mode:"history",routes:[{path:"/",component:Ye},{path:"/app/login",component:L},{path:"/app/register",component:K},{path:"/app/dashboard",component:le},{path:"/app/record",component:Ce},{path:"/app/customer",component:Me},{path:"/app/clients",component:$e},{path:"/app/form_create",component:Ae},{path:"/app/form/:id",component:Qe}]});new o.a({router:et,render:function(e){return e(P)}}).$mount("#app")},"64ab":function(e,t,a){},"671d":function(e,t,a){"use strict";a("bf50")},"6d3e":function(e,t,a){"use strict";a("1dd1")},"6e61":function(e,t,a){},7205:function(e,t,a){e.exports=a.p+"media/v4.6372c4ab.mp4"},"7ba4":function(e,t,a){"use strict";a("17c0")},"80d1":function(e,t,a){"use strict";a("f0a0")},8379:function(e,t,a){e.exports=a.p+"media/v3.8dbf408d.mp4"},"85ec":function(e,t,a){},9248:function(e,t,a){},"98ea":function(e,t,a){"use strict";a("6e61")},a41b:function(e,t,a){"use strict";a("05fb")},b2e6:function(e,t,a){"use strict";a("bab8")},bab8:function(e,t,a){},bf50:function(e,t,a){},bfd8:function(e,t,a){"use strict";a("1d1f")},c2f6:function(e,t,a){e.exports=a.p+"media/v2.6eedeba6.mp4"},cf05:function(e,t,a){e.exports=a.p+"img/logo.7af16c9f.png"},d2cd:function(e,t,a){"use strict";a("9248")},e3ed:function(e,t,a){e.exports=a.p+"media/v1.49482546.mp4"},ee92:function(e,t,a){"use strict";a("13c2")},f0a0:function(e,t,a){}});
//# sourceMappingURL=app.03982a2b.js.map