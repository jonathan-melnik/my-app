(this.webpackJsonpmyfirstreactapp=this.webpackJsonpmyfirstreactapp||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var s=n(2),i=n.n(s),a=n(8),c=n.n(a),l=(n(13),n(14),n(3)),u=n(4),r=n(1),h=n(6),d=n(5),o=n(0),b=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).handleClick=s.handleClick.bind(Object(r.a)(s)),s}return Object(u.a)(n,[{key:"handleClick",value:function(e){this.props.onClick()}},{key:"render",value:function(){return Object(o.jsx)("input",{className:"DeleteButton"+(this.props.visible?"":" Invisible"),type:"image",src:"deleteButton.png",onClick:this.handleClick})}}]),n}(i.a.Component),j=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={isMouseOver:!1},s.handleDeleteButtonClick=s.handleDeleteButtonClick.bind(Object(r.a)(s)),s.handleMouseOver=s.handleMouseOver.bind(Object(r.a)(s)),s.handleMouseOut=s.handleMouseOut.bind(Object(r.a)(s)),s}return Object(u.a)(n,[{key:"handleDeleteButtonClick",value:function(){this.props.deleteListItem(this.props.index)}},{key:"handleMouseOver",value:function(e){this.setState({isMouseOver:!0})}},{key:"handleMouseOut",value:function(e){this.setState({isMouseOver:!1})}},{key:"render",value:function(){return Object(o.jsx)("div",{onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut,children:Object(o.jsxs)("li",{className:"ListItem",children:[this.props.txt," \xa0",Object(o.jsx)(b,{onClick:this.handleDeleteButtonClick,visible:this.state.isMouseOver})]})})}}]),n}(i.a.Component),O=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={txt:""},s.handleSubmit=s.handleSubmit.bind(Object(r.a)(s)),s.handleTextChanged=s.handleTextChanged.bind(Object(r.a)(s)),s}return Object(u.a)(n,[{key:"handleSubmit",value:function(e){this.props.addItem(this.state.txt),this.setState({txt:""})}},{key:"handleTextChanged",value:function(e){this.setState({txt:e.target.value})}},{key:"render",value:function(){return Object(o.jsxs)("form",{children:[Object(o.jsx)("input",{type:"text",value:this.state.txt,className:"ListItemInput",onChange:this.handleTextChanged}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"button",value:"Add Item",className:"SubmitButton",onClick:this.handleSubmit})]})}}]),n}(i.a.Component),m=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).deleteListItem=s.deleteListItem.bind(Object(r.a)(s)),s.addItem=s.addItem.bind(Object(r.a)(s)),s.state={items:[]},s}return Object(u.a)(n,[{key:"deleteListItem",value:function(e){var t=this.state.items;t.splice(e,1),this.setState({items:t})}},{key:"addItem",value:function(e){if(e){var t=this.state.items;t.push(e),this.setState({items:t})}}},{key:"render",value:function(){for(var e=[],t=0;t<this.state.items.length;t++)e.push(Object(o.jsx)(j,{index:t,deleteListItem:this.deleteListItem,txt:this.state.items[t]}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("ul",{className:"no-bullets",children:e}),Object(o.jsx)(O,{addItem:this.addItem})]})}}]),n}(i.a.Component);var v=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsx)("h1",{children:"To-Do list"}),Object(o.jsx)(m,{})]})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),i(e),a(e),c(e)}))};c.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.fa69ad34.chunk.js.map