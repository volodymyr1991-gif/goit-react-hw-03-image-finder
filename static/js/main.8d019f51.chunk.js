(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),c=a.n(r),i=a(18),o=a.n(i),l=(a(26),a(9)),s=a(4),u=a(5),h=a(7),d=a(6);a(27);function m(e){var t=e.children;return Object(n.jsx)("ul",{className:"ImageGallery",children:t})}a(28);var g=function(e){var t=e.id,a=e.img,r=e.alt,c=e.large,i=e.onHandleModalUrl;return Object(n.jsx)("li",{className:"ImageGalleryItem",onClick:i,children:Object(n.jsx)("img",{src:a,alt:r,"data-url":c,className:"ImageGalleryItem-image"})},t)},j=(a(29),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:""},e.handleChange=function(t){e.setState({inputValue:t.target.value})},e.handleSabmit=function(t){t.preventDefault(),console.log(e.state.inputValue),e.props.onSubmit(e.state.inputValue),e.setState({inputValue:""})},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsx)("header",{className:"Searchbar",children:Object(n.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSabmit,children:[Object(n.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(n.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(n.jsx)("input",{className:"SearchForm-input",type:"text",value:this.state.inputValue,autocomplete:"off",autofocus:!0,placeholder:"Search images and photos",onChange:this.handleChange})]})})}}]),a}(r.Component)),b=(a(30),function(e){var t=e.fechArticles;return Object(n.jsx)("button",{className:"Button",type:"button",onClick:t,children:"Load More"})}),f=(a(31),function(e){var t=e.children;return Object(n.jsx)("div",{className:"App",children:t})}),p=(a(32),a(19)),O=a.n(p),v=(a(54),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"Loader",children:Object(n.jsx)(O.a,{type:"Oval",color:"#00BFFF",height:100,width:100})})}}]),a}(r.Component)),y=a(20),S=a.n(y),x=function(e,t){return S.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat("18753901-48fe4160ef12c9ad3fe1a3bef","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))};a(73);var w=function(e){var t=e.image,a=e.onHandleClick;return Object(n.jsx)("div",{className:"Overlay",onClick:a,children:Object(n.jsx)("div",{className:"Modal",children:Object(n.jsx)("img",{src:t,alt:""})})})},k=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[],loading:!1,error:null,serchQuery:"",page:1,largeImageURL:null},e.fechArticles=function(){var t=e.state,a=t.serchQuery,n=t.page;e.setState({loading:!0}),x(a,n).then((function(t){e.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(t)),page:e.page+1}})),e.state.page>2&&e.handleScrol()})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loading:!1})}))},e.handleSearchFormSubmit=function(t){e.setState({serchQuery:t,page:1,images:[]})},e.handleScrol=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.handleModalUrl=function(t){e.setState({largeImageURL:t.target.dataset.url})},e.handleClick=function(t){"IMG"!==t.target.nodeName&&e.setState({largeImageURL:null})},e.onPressEscape=function(t){"Escape"===t.code&&e.setState({largeImageURL:null})},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=t.serchQuery,n=this.state.serchQuery,r=this.state.largeImageURL;a!==n&&this.fechArticles(),r&&window.addEventListener("keydown",this.onPressEscape),r||window.removeEventListener("keydown",this.onPressEscape)}},{key:"render",value:function(){var e=this,t=this.state,a=t.loading,r=t.images,c=t.error,i=t.largeImageURL;return Object(n.jsxs)(f,{children:[Object(n.jsx)(j,{onSubmit:this.handleSearchFormSubmit}),c&&Object(n.jsxs)("p",{children:["Whoops, something went wrong: ",c.message]}),r.length>0&&Object(n.jsx)(m,{children:r.map((function(t){return Object(n.jsx)(g,{img:t.webformatURL,alt:t.tag,large:t.largeImageURL,onHandleModalUrl:e.handleModalUrl},t.id)}))}),a&&Object(n.jsx)(v,{}),r.length>0&&!a&&Object(n.jsx)(b,{fechArticles:this.fechArticles}),i&&Object(n.jsx)(w,{image:i,onHandleClick:this.handleClick})]})}}]),a}(r.Component);o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(k,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.8d019f51.chunk.js.map