(function(e){function t(t){for(var r,s,a=t[0],l=t[1],c=t[2],d=0,h=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&h.push(o[s][0]),o[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(h.length)h.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={index:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-size-observer/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("e35a")},"91b1":function(e,t,n){},a7e2:function(e,t,n){"use strict";var r=n("b021"),o=n.n(r);o.a},b021:function(e,t,n){},e35a:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",{staticStyle:{"text-align":"center"}},[e._v("vue-size-observer")]),n("form",[n("div",[n("label",[e._v("Observe size enabled:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.enabled,expression:"enabled"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.enabled)?e._i(e.enabled,null)>-1:e.enabled},on:{change:function(t){var n=e.enabled,r=t.target,o=!!r.checked;if(Array.isArray(n)){var i=null,s=e._i(n,i);r.checked?s<0&&(e.enabled=n.concat([i])):s>-1&&(e.enabled=n.slice(0,s).concat(n.slice(s+1)))}else e.enabled=o}}})]),n("div",[n("label",[e._v("Toggle element:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.toggle,expression:"toggle"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.toggle)?e._i(e.toggle,null)>-1:e.toggle},on:{change:function(t){var n=e.toggle,r=t.target,o=!!r.checked;if(Array.isArray(n)){var i=null,s=e._i(n,i);r.checked?s<0&&(e.toggle=n.concat([i])):s>-1&&(e.toggle=n.slice(0,s).concat(n.slice(s+1)))}else e.toggle=o}}})]),n("div",[n("label",[e._v("Adjust width:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.width,expression:"width"}],attrs:{type:"range",value:"600",min:"300",max:"1300"},domProps:{value:e.width},on:{__r:function(t){e.width=t.target.value}}})])]),n("ResizeObserver",{attrs:{disabled:!e.enabled},on:{resize:e.handleResize}},[e.toggle?n("FunctionalProps",e._b({style:{width:e.computedWidth}},"FunctionalProps",e.test,!1),[e._v(e._s(e.text))]):n("div",{staticStyle:{border:"1px dashed pink"},style:{width:e.computedWidth}},[e._v(e._s(e.text))])],1)],1)},i=[],s=n("5530"),a={name:"FunctionalProps",functional:!0,props:{msg:String},created:function(){console.log(this)},render:function(e,t){var n=t.props,r=t.data,o=t.slots,i=o(),a=i&&i.default,l=Object(s["a"])(Object(s["a"])({},n),r),c=l.style,u=l.msg,d=l.attr,h=l.attrsMsg;return e("div",{class:"hello",style:Object(s["a"])(Object(s["a"])({},c),{},{backgroundColor:"pink"})},[e("h1",[u]),e("h3",[d]),e("h6",[h]),e("p",[a]),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},["babel"])]),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},["eslint"])])])])}},l=(n("b64b"),n("6dd8")),c={name:"ResizeObserver",props:{disabled:Boolean},data:function(){return{width:0,height:0}},mounted:function(){this.onUpdated()},updated:function(){this.onUpdated()},beforeDestroy:function(){this.destroyObserver()},methods:{onResize:function(e){var t=e[0].target,n=t.getBoundingClientRect(),r=n.width,o=n.height,i=t.offsetWidth,s=t.offsetHeight,a=Math.floor(r),l=Math.floor(o);if(this.width!==a||this.height!==l){this.width=a,this.height=l;var c=this.$listeners["resize"];c&&"function"===typeof c&&c({width:a,height:l,offsetWidth:i,offsetHeight:s})}},onUpdated:function(){var e=this.disabled;if(e)this.destroyObserver();else{var t=this.getDefaultSlotElement();if(!(t instanceof HTMLElement))throw new TypeError;var n=t!==this.currentElement;n&&(this.destroyObserver(),this.currentElement=t),!this.__ro__&&t&&(this.__ro__=new l["a"](this.onResize),this.__ro__.observe(t))}},getDefaultSlotElement:function(){var e=this.$slots.default[0],t=e.elm;return t},destroyObserver:function(){this.__ro__&&(this.__ro__.disconnect(),this.__ro__=null)}},render:function(){if(Object.keys(this.$slots).length>1)console.warn("Find more than one slot node with `$slots` in ResizeObserver. Will only observe and render the default slot.");else if(!this.$slots.default)return console.warn("`default` of `this.$slots` is empty. Nothing is in observe."),null;return this.$slots.default}},u={name:"App",data:function(){return{toggle:!0,text:"",enabled:!0,width:300,test:{msg:"Hello Guys, This is a props access testing in Vue functional component.",attr:"Test 4 attr",attrs:{attrsMsg:"Test 4 attrs.attr"}}}},components:{FunctionalProps:a,ResizeObserver:c},computed:{computedWidth:function(){return"number"===typeof+this.width?this.width+"px":this.width}},methods:{handleResize:function(e){console.log("resize",e.width),this.text="The width is ".concat(e.width," px.")}}},d=u,h=(n("a7e2"),n("f4a6"),n("2877")),f=Object(h["a"])(d,o,i,!1,null,"0c36772c",null),p=f.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(p)}}).$mount("#app")},f4a6:function(e,t,n){"use strict";var r=n("91b1"),o=n.n(r);o.a}});
//# sourceMappingURL=index.c63fc595.js.map