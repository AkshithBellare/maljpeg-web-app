(function(e){function t(t){for(var r,a,i=t[0],u=t[1],p=t[2],s=0,f=[];s<i.length;s++)a=i[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return c.push.apply(c,p||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},c=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var p=0;p<i.length;p++)t(i[p]);var l=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("1d50")},"1d50":function(e,t,n){"use strict";n.r(t);n("e76c"),n("5605"),n("89f1"),n("cad3");var r=n("7180"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("MALJPEG")]),n("br"),n("br"),n("picture-input",{ref:"pictureInput",attrs:{width:"300",height:"300",margin:"16",accept:"image/jpeg,image/jpg",size:"10",removable:!0,customStrings:{upload:"<h1>Bummer!</h1>",drag:"Drag a JPEG image"}},on:{change:e.onChange}}),n("button",{class:{disabled:!this.image},on:{click:e.attemptUpload}},[e._v(" Upload ")])],1)},c=[],a=(n("7ca9"),n("bc3a")),i=n.n(a),u=n("e597"),p={name:"App",components:{PictureInput:u["a"]},data:function(){return{checkimage:null}},methods:{onChange:function(){console.log("New picture selected"),this.$refs.pictureInput.image?(console.log("Picture loaded."),this.checkimage=this.$refs.pictureInput.image.slice(23)):console.log("FileReader API not supported")},attemptUpload:function(){var e="http://localhost:5000/predict";i.a.post(e,{image:this.checkimage})}}},l=p,s=(n("e5cd"),n("3b10")),f=Object(s["a"])(l,o,c,!1,null,null,null),d=f.exports;Object(r["createApp"])(d).mount("#app")},"84fc":function(e,t,n){},e5cd:function(e,t,n){"use strict";n("84fc")}});
//# sourceMappingURL=app.6c69a706.js.map