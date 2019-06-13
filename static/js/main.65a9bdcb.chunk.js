(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n(23)},20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(11),c=n.n(l);n(20),n(21);var o=function(){return r.a.createElement("header",null,r.a.createElement("h1",null," Phone Catalog "))};var i=function(){return r.a.createElement("footer",null,r.a.createElement("h1",null," Phone Catalog "))},s=n(6),d=n(8),u=n(1),m=n(2),h=n(4),p=n(3),f=n(7),g=n(5),k=n(13),v=function(e){return r.a.createElement("div",{className:"cart"},r.a.createElement("p",null,"Shopping Cart"),r.a.createElement("ul",{className:"cart_ul"},Object.entries(e.name).map(function(t){var n=Object(k.a)(t,2),a=n[0],l=n[1];return r.a.createElement("li",{key:a+l,className:"cart_item"},a," - ",l,r.a.createElement("button",{className:"btn cart_btn",onClick:function(){e.onDeletePhone(a)}},"x"))})))},b=function(e){return r.a.createElement("div",{className:"filter"},r.a.createElement("p",null,"Search :",r.a.createElement("input",{"data-element":"query-field",onChange:e.queryChange})),r.a.createElement("p",null,"Sort by :",r.a.createElement("select",{"data-element":"order-field",onChange:e.orderChange},r.a.createElement("option",{value:"name"},"Alphabetical"),r.a.createElement("option",{value:"age"},"Newest"))))},E=n(9),C=n.n(E),y=n(12),j="https://mate-academy.github.io/phone-catalogue-static/api",w={getAll:function(){var e=Object(y.a)(C.a.mark(function e(){var t,n,a,r,l,c,o,i,s=arguments;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:{},n=t.query,a=void 0===n?"":n,r=t.order,l=void 0===r?"":r,e.prev=1,e.next=4,window.fetch(j+"/phones.json");case 4:return o=e.sent,e.next=7,o.json();case 7:c=e.sent,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),c=[];case 13:i=c.filter(function(e){return e.name.toLowerCase().includes(a.toLowerCase())}),e.t1=l,e.next="age"===e.t1?17:"name"===e.t1?19:20;break;case 17:return i.sort(function(e,t){return e.age-t.age}),e.abrupt("break",20);case 19:i.sort(function(e,t){return e.name.localeCompare(t.name)});case 20:return e.abrupt("return",i);case 21:case"end":return e.stop()}},e,null,[[1,10]])}));return function(){return e.apply(this,arguments)}}(),getById:function(e){return window.fetch(j+"/phones/"+e+".json").then(function(e){return e.json()})}},O=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={phone:{id:"",images:[],name:"",description:""},mainImage:""},n}return Object(g.a)(t,e),Object(m.a)(t,[{key:"selectImage",value:function(e){this.setState({mainImage:e})}},{key:"componentDidMount",value:function(){var e=this,t=this.props.id;t&&w.getById(t).then(function(t){e.setState({phone:t,mainImage:t.images[0]})})}},{key:"renderImgs",value:function(){var e=this;return this.state.phone.images.map(function(t,n){return r.a.createElement("li",{key:n},r.a.createElement("img",{src:t,alt:"main","data-element":"small-preview",key:"img"+e.state.phoneId,onClick:function(){e.selectImage(t)}}))})}},{key:"render",value:function(){var e=this.state.phone,t=e.id,n=e.name,a=e.description,l=this.props,c=l.onBackClicked,o=l.onAddClicked;return r.a.createElement("div",{className:"phoneViewer"},r.a.createElement("img",{alt:n,className:"phoneDetail mainImage",src:this.state.mainImage,"data-element":"big-preview"}),r.a.createElement("div",{className:"phoneViewer_info"},r.a.createElement("div",{"data-element":"phone-element","data-phone-id":t,className:"buttons"},r.a.createElement("a",{href:"#",className:"btn","data-element":"back-button",onClick:c},"Back"),r.a.createElement("a",{className:"btn","data-element":"add-to-cart",onClick:function(){o(n)}},"Add to basket")),r.a.createElement("h1",null,n),r.a.createElement("p",null,a),r.a.createElement("ul",{className:"phone-thumbs"},this.renderImgs())))}}]),t}(r.a.Component);var A=function(e){var t=e.id,n=e.name,a=e.image,l=e.snippet,c=e.onLinkClicked,o=e.onAddClick;return r.a.createElement("li",{className:"phone","data-element":"phone-element","data-phone-id":t},r.a.createElement("a",{onClick:c,href:"#!/phones/"+n,className:"thumb","data-element":"details-link"},r.a.createElement("img",{alt:n,src:a})),r.a.createElement("div",{className:"phones__btn-buy-wrapper"},r.a.createElement("a",{className:"btn btn-success","data-element":"add-to-cart",onClick:o},"Add")),r.a.createElement("a",{onClick:c,href:"#!/phones/"+n,"data-element":"details-link"},n),r.a.createElement("p",null,l))},I=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={phones:[]},n}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getAll()}},{key:"componentDidUpdate",value:function(){this.getAll()}},{key:"getAll",value:function(){var e=this;w.getAll(this.props.filter).then(function(t){e.setState({phones:t})})}},{key:"renderPhones",value:function(){var e=this.props,t=e.onPhoneClicked,n=e.onAddClicked;return this.state.phones.map(function(e){return r.a.createElement(A,{id:e.id,key:"phone-"+e.age,name:e.name,image:e.imageUrl,snippet:e.snippet,onLinkClicked:function(){t(e.id)},onAddClick:function(){n(e.name)}})})}},{key:"render",value:function(){return r.a.createElement("ul",{className:"catalog"},this.renderPhones())}}]),t}(r.a.Component),N=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(h.a)(this,Object(p.a)(t).call(this))).handleClick=function(t){e.setState({phoneSelected:t})},e.handleBackClick=function(){e.setState({phoneSelected:""})},e.state={filter:{order:"name",query:""},phoneSelected:null,phoneAdded:{}},e.addItem=function(t){var n=e.state.phoneAdded[t];e.state.phoneAdded.hasOwnProperty(t)||(n=0),++n,e.setState({phoneAdded:Object(d.a)({},e.state.phoneAdded,Object(s.a)({},t,n))})},e.queryChange=e.queryChange.bind(Object(f.a)(e)),e.orderChange=e.orderChange.bind(Object(f.a)(e)),e.removeItem=function(t){var n=e.state.phoneAdded[t];--n,e.state.phoneAdded.hasOwnProperty(t)&&e.setState({phoneAdded:Object(d.a)({},e.state.phoneAdded,Object(s.a)({},t,n))}),0===n&&(delete e.state.phoneAdded[t],e.setState(e.state))},e}return Object(g.a)(t,e),Object(m.a)(t,[{key:"queryChange",value:function(e){this.setState({filter:Object(d.a)({},this.state.filter,{query:e.target.value})})}},{key:"orderChange",value:function(e){this.setState({filter:Object(d.a)({},this.state.filter,{order:e.target.value})})}},{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement(v,{name:this.state.phoneAdded,onDeletePhone:this.removeItem}),this.state.phoneSelected?r.a.createElement(O,{id:this.state.phoneSelected,onBackClicked:this.handleBackClick,onAddClicked:this.addItem}):r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{queryChange:this.queryChange,orderChange:this.orderChange}),r.a.createElement(I,{onPhoneClicked:this.handleClick,onAddClicked:this.addItem,filter:this.state.filter})))}}]),t}(r.a.Component);var S=function(){return r.a.createElement("div",null,r.a.createElement(o,null),r.a.createElement(N,null),r.a.createElement(i,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,1,2]]]);
//# sourceMappingURL=main.65a9bdcb.chunk.js.map