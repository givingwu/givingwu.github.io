(function(t){function e(e){for(var r,o,s=e[0],d=e[1],l=e[2],h=0,p=[];h<s.length;h++)o=s[h],n[o]&&p.push(n[o][0]),n[o]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(t[r]=d[r]);c&&c(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,s=1;s<a.length;s++){var d=a[s];0!==n[d]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={index:0},i=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue-virtual-list/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var c=d;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("e35a")},"0acd":function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},"755d":function(t,e,a){"use strict";var r=a("c584"),n=a.n(r);n.a},9594:function(t,e,a){},a7e2:function(t,e,a){"use strict";var r=a("9594"),n=a.n(r);n.a},c584:function(t,e,a){},e35a:function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var r,n,i=a("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Vue logo",src:a("0acd")}}),r("h1",[t._v("Vue-Virtual-List")]),r("VirtualList",{attrs:{"data-source":t.list,height:240,"item-height":50},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.data;return[r("div",{staticClass:"virtual-list-item__cell"},[t._v(t._s(a&&a.content)+" ,")])]}}])}),r("table-tree",{staticClass:"tree-table-view",attrs:{"row-key":t.rowKey,"show-header":!0,"data-source":t.data,columns:t.columns1,"indent-size":20,expand:!0,depth:0,"expand-depth":1,"expand-row-map":t.expandRowMap},on:{"update:expandRowMap":function(e){t.expandRowMap=e}}})],1)},s=[],d=(a("7f7f"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"virtual-list-container"},[t._t("header",[t._m(0)]),a("div",{ref:"wrapper",staticClass:"virtual-list-wrapper",style:t.wrapperStyle,on:{"&scroll":function(e){return t.handleScroll(e)}}},[a("div",{ref:"scroller",staticClass:"virtual-list-scroller",style:t.scrollerStyle},[t._t("content",t._l(t.pool,function(e,r){var n=e.data,i=e.$top;return a("VirtualListItem",{key:r+1,staticClass:"virtual-list-item",style:{transform:"translateY("+i+"px)"},attrs:{tag:t.itemTag,item:n}},[t._t("default",null,{data:n})],2)}),{items:t.pool})],2)]),t._t("footer",[t._m(1)])],2)}),l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("i am list header")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",[t._v("i am list footer")])])}],c=(a("ac6a"),a("6762"),a("2fdb"),a("6c7b"),a("9aeb")),h={name:"VirtualListItem",props:{item:c["a"].object.isRequired,tag:c["a"].string.def("div")},render:function(t){return t(this.tag,"function"===typeof this.$slots.default?this.$slots.default(this.item):this.$slots.default)}},p=h,u=a("2877"),m=Object(u["a"])(p,r,n,!1,null,null,null);m.options.__file="ListItem.vue";var g=m.exports,f="VirtualList",S={name:f,components:{VirtualListItem:g},props:{dataSource:c["a"].array.isRequired,itemHeight:c["a"].integer.def(40),prerender:c["a"].integer.def(1),store:c["a"].object,itemTag:c["a"].string.def("div"),expandable:c["a"].bool.def(!1),height:c["a"].oneOfType([c["a"].number,c["a"].string]).def("100%")},computed:{totalSize:function(){return this.dataSource.length},totalHeight:function(){return this.totalSize*this.itemHeight},maxIndex:function(){return this.totalSize-this.poolSize},poolSize:function(){return this.prerender+Math.ceil(this.wrapperHeight/this.itemHeight)},wrapper:function(){return this.$refs.wrapper},wrapperHeight:function(){return this.height||this.wrapper.clientHeight}},watch:{dataSource:{handler:function(t){var e=this;this.$_isSameDataRef=t===this.dataSource,this.$nextTick(function(){e.updatePool()})}}},data:function(){return{pool:[],startIndex:-1}},beforeCreate:function(){console.time("time-for-created")},created:function(){console.timeEnd("time-for-created");var t=this.height,e=this.itemHeight,a=this.totalHeight;this.itemStyle={width:"100%",height:e+"px"},this.height&&(this.wrapperStyle={height:t+("number"===typeof t?"px":"")}),this.scrollerStyle={position:"relative",width:"auto",height:a+"px",maxHeight:a+"px",overflow:"hidden"}},beforeMount:function(){console.time("time-for-mounted")},mounted:function(){console.timeEnd("time-for-mounted"),this.$_ready=!0,this.$nextTick(this.updatePool)},beforeUpdate:function(){console.time("time-for-updated")},updated:function(){console.timeEnd("time-for-updated")},destroyed:function(){this.$_requestId&&cancelAnimationFrame(this.$_requestId)},methods:{handleScroll:function(){var t=this;this.$_digesting=!0,this.$_requestId=requestAnimationFrame(function(){t.$_digesting=!1,t.updatePool()})},updatePool:function(){if(!this.$_digesting&&this.$_ready){this.$_digesting=!0;var t=this.wrapper,e=this.itemHeight,a=this.maxIndex,r=this.poolSize,n=Math.floor(t.scrollTop/e),i=Math.min(a,n);this.startIndex=i;var o=this.$_prevStartIndex!==i;if(o){var s=i-this.$_prevStartIndex||0,d=i+r;this.genePoolModel(i,d,s),this.$_prevStartIndex=i,this.$_digesting=!1,this.$_requestId&&cancelAnimationFrame(this.$_requestId)}}},genePoolModel:function(t,e,a){var r=this.dataSource,n=this.itemHeight,i=this.pool,o=this.$_isSameDataRef;if(!i.length||!o)return this.$_isSameDataRef=!0,this.pool=r.slice(t,e).map(function(e){return{data:e,$top:t*n,$pos:t++}});var s=new Array(e-t).fill(t).map(function(t,e){return t+e}),d=i.reduce(function(t,e,a){return s.includes(e.$pos)||(t[t.length]=a),t},[]),l=a>0?e-d.length:t;return d.forEach(function(t){var e=i[t];e.data=r[l],e.$top=l*n,e.$pos=l++}),r}}},y=S,v=y,M=(a("755d"),Object(u["a"])(v,d,l,!1,null,null,null));M.options.__file="List.vue";var w=M.exports;w.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{name:"VirtualList"};window.Vue&&t.component(e.name,w)};var b=w,x=a("bd86"),_=(a("c5f6"),a("5d73")),I=a.n(_),$=a("d225"),R=a("b0b4"),O=(a("28a5"),function(t,e,a){var r=!1,n=t.expandRows;if("undefined"!==typeof a){var i=n.indexOf(e);a?-1===i&&(n.push(e),r=!0):-1!==i&&(n.splice(i,1),r=!0)}else{var o=n.indexOf(e);-1===o?(n.push(e),r=!0):(n.splice(o,1),r=!0)}return r}),k=function(t,e,a){var r=!1,n=t.selectRows;if("undefined"!==typeof a){var i=n.indexOf(e);a?-1===i&&(n.push(e),r=!0):-1!==i&&(n.splice(i,1),r=!0)}else{var o=n.indexOf(e);-1===o?(n.push(e),r=!0):(n.splice(o,1),r=!0)}return r},E=function(t,e){var a={};return(t||[]).forEach(function(t,r){a[j(t,e)]={row:t,index:r}}),a},j=function(t,e){if(!t)throw new Error("row is required when get row identity");if("string"===typeof e){if(e.indexOf(".")<0)return t[e];for(var a=e.split("."),r=t,n=0;n<a.length;n++)r=r[a[n]];return r}if("function"===typeof e)return e.call(null,t)},H=function t(e,a){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=0,o=null,s=e.length;if(r>=a)return(r=0)||[];for(;i<s;i++)o=e[i],n[n.length]=o,o&&o.children&&o.children.length&&t(o.children,a,r+1,n);return n},C=function(){function t(e,a){Object($["a"])(this,t),this.table=e,this.states={data:null,columns:"",rowKey:"",selectRows:[],expandRows:[],expandDepth:0,defaultExpandAll:!1},this.setState(a)}return Object(R["a"])(t,[{key:"isRowExpanded",value:function(t){var e=this.states,a=e.expandRows,r=void 0===a?[]:a,n=e.rowKey;if(n){var i=E(r,n);return!!i[j(t,n)]}return-1!==r.indexOf(t)}},{key:"toggleRowExpansion",value:function(t,e){var a=O(this.states,t,e);a&&this.table.$emit("expand-change",t,this.states.expandRows)}},{key:"isRowSelected",value:function(t){var e=this.states,a=e.selectRows,r=void 0===a?[]:a,n=e.rowKey;if(n){var i=E(r,n);return!!i[j(t,n)]}return-1!==r.indexOf(t)}},{key:"toggleRowSelection",value:function(t,e){var a=k(this.states,t,e);a&&this.table.$emit("select-change",t,this.states.selectRows)}},{key:"setState",value:function(t){for(var e in t)t.hasOwnProperty(e)&&this.states.hasOwnProperty(e)&&("data"===e?this._setData(this.states,t[e]):this.states[e]=t[e])}},{key:"_setData",value:function(t,e){t._data;t._data=e,t.data=e;var a=t.rowKey,r=t.expandDepth,n=t.defaultExpandAll;if(n)this.states.expandRows=(t.data||[]).slice(0);else if(r)this.states.expandRows=H(t.data||[],r).slice(0);else if(a){var i=E(this.states.expandRows,a),o=[],s=!0,d=!1,l=void 0;try{for(var c,h=I()(t.data);!(s=(c=h.next()).done);s=!0){var p=c.value,u=j(p,a);i[u]&&o.push(p)}}catch(m){d=!0,l=m}finally{try{s||null==h.return||h.return()}finally{if(d)throw l}}this.states.expandRows=o}else this.states.expandRows=[]}}]),t}(),T={name:"VCTableTree",componentName:"VCTableTree",props:{className:[String,Object],styleStr:{type:String,default:"width: 100%"},rowClassName:{type:[String,Object,Function],default:""},fit:{type:Boolean,default:!0},border:{type:Boolean,default:!1},isHidden:Boolean,enableHover:{type:Boolean,default:!0},size:String,width:[String,Number],height:[String,Number],maxHeight:Number,header:[String,Object],footer:[String,Object],showHeader:{type:Boolean,default:!0},rowKey:{type:String,required:!0},dataSource:Array,columns:Array,expandDepth:{type:Number,default:1},expandRows:{type:Array,default:function(){return[]}},selectRows:{type:Array,default:function(){return[]}}},data:function(){var t=new C(this,{data:this.dataSource,columns:this.columns,rowKey:this.rowKey,expandDepth:this.expandDepth,expandRows:this.expandRows,selectRows:this.selectRows});return{store:t}},watch:{dataSource:{immediate:!0,handler:function(t){this.store.setState({data:t})}}},computed:{tableSize:function(){return this.size||(this.$ELEMENT||{}).size},tableData:function(){return this.store.states.data},tableColumns:function(){return this.store.states.columns}},render:function(){var t=arguments[0],e=this.fit,a=this.border,r=this.showHeader,n=this.isHidden,i=this.maxHeight,o=this.enableHover,s=this.tableSize,d=this.header,l=this.footer;return t("div",{class:["table-tree",this.className],style:this.styleStr},[d,t("table",{attrs:{width:this.width,height:this.height},class:["el-table",{"el-table--fit":e,"el-table--border":a,"el-table--hidden":n,"el-table--fluid-height":i,"el-table--enable-row-hover":o},s?"el-table--".concat(s):""]},[this.renderColgroup(),r&&this.renderHeader(),t("tbody",[this.renderTableRows(this.tableData)])]),l])},methods:{renderColgroup:function(){var t=this.$createElement,e=this.tableColumns,a=void 0===e?[]:e;return t("colgroup",[a.map(function(e,a){var r=e.label,n=e.prop,i=e.key,o=void 0===i?"":i,s=e.width,d=e.minWidth;return t("col",{attrs:{name:[r,n,o,a].join("_"),width:d||s}})})])},renderHeader:function(){var t=this.$createElement,e=this.tableColumns,a=void 0===e?[]:e;return t("thead",{class:"el-table__header",attrs:{cellspacing:"0",cellpadding:"0",border:"0"}},[t("tr",{class:"el-table__row"},[a.map(function(e){var a=e.prop,r=e.label,n=void 0===r?"":r,i=e.key,o=void 0===i?"":i;return t("th",{key:[n,a,o].join(":"),attrs:{colspan:"1",rowspan:"1"},class:"is-leaf"},[n&&t("div",{class:"cell"},[n])])})])])},renderTableRows:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=this.$createElement,n=this.rowKey,i=void 0===n?"":n,o=this.rowClassName;return t&&t.length&&t.map(function(t,n){var s,d=o;"function"===typeof o&&(d=o(t,n));var l=(s={},Object(x["a"])(s,d,!0),Object(x["a"])(s,"el-table__row",!0),Object(x["a"])(s,"expanded",a),Object(x["a"])(s,"expanded__depth-".concat(a),a),s);return[r("tr",{key:t[i]||n,class:l},[e.renderDataCells(t,n,a)]),e.store.isRowExpanded(t)&&e.renderTableRows(t.children,a+1)]})},renderDataCells:function(t,e){var a=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=this.$createElement,i=this.tableColumns,o=void 0===i?[]:i;this.rowKey;return o.map(function(i,o){var s=i.prop,d=i.render,l="function"===typeof d&&d(a.$createElement,{depth:r,expandDepth:a.expandDepth,row:t,rowIndex:e,column:i,columnIndex:o,store:a.store});return n("td",{attrs:{rowspan:"1",colspan:"1"}},[n("div",{class:"cell"},[l||t[s]||""])])})}}},D=T,P=(a("6b54"),[{id:Math.random().toString(36).slice(2),name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:Math.random().toString(36).slice(2),children:[{id:Math.random().toString(36).slice(2),name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:Math.random().toString(36).slice(2),children:[{id:Math.random().toString(36).slice(2),name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:Math.random().toString(36).slice(2)},{id:Math.random().toString(36).slice(2),name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:Math.random().toString(36).slice(2)},{id:Math.random().toString(36).slice(2),name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:Math.random().toString(36).slice(2)},{id:Math.random().toString(36).slice(2),name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:Math.random().toString(36).slice(2)}]},{id:Math.random().toString(36).slice(2),name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:Math.random().toString(36).slice(2)},{id:Math.random().toString(36).slice(2),name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:Math.random().toString(36).slice(2)},{id:Math.random().toString(36).slice(2),name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:Math.random().toString(36).slice(2)}]},{id:Math.random().toString(36).slice(2),name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:Math.random().toString(36).slice(2)},{id:Math.random().toString(36).slice(2),name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:Math.random().toString(36).slice(2),children:[{id:Math.random().toString(36).slice(2),name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:Math.random().toString(36).slice(2)},{id:Math.random().toString(36).slice(2),name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:Math.random().toString(36).slice(2)},{id:Math.random().toString(36).slice(2),name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:Math.random().toString(36).slice(2)},{id:Math.random().toString(36).slice(2),name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:Math.random().toString(36).slice(2)}]},{id:Math.random().toString(36).slice(2),name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:Math.random().toString(36).slice(2),children:[{id:Math.random().toString(36).slice(2),name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:Math.random().toString(36).slice(2),children:[{id:Math.random().toString(36).slice(2),name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:Math.random().toString(36).slice(2)},{id:Math.random().toString(36).slice(2),name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:Math.random().toString(36).slice(2)},{id:Math.random().toString(36).slice(2),name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:Math.random().toString(36).slice(2)},{id:Math.random().toString(36).slice(2),name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:Math.random().toString(36).slice(2)}]},{id:Math.random().toString(36).slice(2),name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:Math.random().toString(36).slice(2)},{id:Math.random().toString(36).slice(2),name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:Math.random().toString(36).slice(2)},{id:Math.random().toString(36).slice(2),name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:Math.random().toString(36).slice(2)}]},{id:Math.random().toString(36).slice(2),name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:Math.random().toString(36).slice(2)},{id:Math.random().toString(36).slice(2),name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:Math.random().toString(36).slice(2),children:[{id:Math.random().toString(36).slice(2),name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:Math.random().toString(36).slice(2)},{id:Math.random().toString(36).slice(2),name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:Math.random().toString(36).slice(2)},{id:Math.random().toString(36).slice(2),name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:Math.random().toString(36).slice(2)},{id:Math.random().toString(36).slice(2),name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:Math.random().toString(36).slice(2)}]},{id:Math.random().toString(36).slice(2),name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:Math.random().toString(36).slice(2),children:[{id:Math.random().toString(36).slice(2),name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:Math.random().toString(36).slice(2),children:[{id:Math.random().toString(36).slice(2),name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:Math.random().toString(36).slice(2)},{id:Math.random().toString(36).slice(2),name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:Math.random().toString(36).slice(2)},{id:Math.random().toString(36).slice(2),name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:Math.random().toString(36).slice(2)},{id:Math.random().toString(36).slice(2),name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:Math.random().toString(36).slice(2)}]},{id:Math.random().toString(36).slice(2),name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:Math.random().toString(36).slice(2)},{id:Math.random().toString(36).slice(2),name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:Math.random().toString(36).slice(2)},{id:Math.random().toString(36).slice(2),name:"好滋好味鸡蛋仔",category:"江浙小吃、小吃零食",desc:"荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店",shopId:Math.random().toString(36).slice(2)}]}]),V=(Math.random().toString(36).slice(2),Math.random().toString(36).slice(2),Math.random().toString(36).slice(2),Math.random().toString(36).slice(2),Math.random().toString(36).slice(2),Math.random().toString(36).slice(2),Math.random().toString(36).slice(2),Math.random().toString(36).slice(2),Math.random().toString(36).slice(2),Math.random().toString(36).slice(2),Math.random().toString(36).slice(2),Math.random().toString(36).slice(2),Math.random().toString(36).slice(2),Math.random().toString(36).slice(2),Math.random().toString(36).slice(2),Math.random().toString(36).slice(2),Math.random().toString(36).slice(2),Math.random().toString(36).slice(2),{name:"app",components:{VirtualList:b,TableTree:D},data:function(){this.$createElement;for(var t=[],e=0;e<1e4;e++)t.push({key:e+1,index:0,content:"Yes, i am ".concat(e+1,"th element")});return{list:t,data:P,columns1:[{prop:"index",key:0,minWidth:20,render:function(t,e){var a=e.rowIndex;return++a}},{prop:"_expand",key:0,width:20,minWidth:40,render:function(t,e){var a=e.store,r=e.row,n=e.depth;if(r.children&&r.children.length){var i=a.isRowExpanded(r),o=i?"el-icon-minus":"el-icon-plus";return t("i",{style:"padding-left: ".concat(20*n,"px"),class:o,on:{click:function(){return a.toggleRowExpansion(r)}}},[i?"-":"+"])}return t("input",{attrs:{type:"checkbox"},style:"padding-left: ".concat(20*n,"px")})}},{label:"商品 ID",prop:"id",key:1},{label:"商品名称",prop:"name",key:2},{label:"描述",prop:"desc",key:3}]}}}),z=V,A=(a("a7e2"),Object(u["a"])(z,o,s,!1,null,null,null));A.options.__file="App.vue";var L=A.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(L)}}).$mount("#app")}});
//# sourceMappingURL=index.c4bf9ff9.js.map