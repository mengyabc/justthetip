(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"11bae9097b9699fbe29a":function(e,t,o){"use strict";o.r(t);var a,r=o("8af190b70a6bc55c6f1b"),n=o.n(r),i=o("e95a63b25fb92ed15721"),s=o("6938d226fd372a75cbf9"),l=o("ef58856f4f875bd36582"),c=o.n(l),d=o("6b0cd370e854fbdb6989");function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t,o,r){a||(a="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&n)for(var s in n)void 0===t[s]&&(t[s]=n[s]);else t||(t=n||{});if(1===i)t.children=r;else if(i>1){for(var l=new Array(i),c=0;c<i;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:a,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function p(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var v=f("h2",{className:"text-center p-4 mb-4"},void 0,"JustTheTip"),g=f("div",{className:"position-absolute p-2"},void 0,f(c.a,{className:"position-relative text-lg"},void 0,"perm_identity")),y=f("div",{className:"position-absolute p-2"},void 0,f(c.a,{className:"position-relative text-lg "},void 0,"lock")),w=f("div",{className:"pt-1 mx-4 border-bottom "}),N=f(d.a,{name:"facebook",height:20,className:"pr-3"}),x=f(d.a,{name:"googleplus",height:28,className:"pr-3"}),k=f("div",{className:"px-4 text-center"},void 0,f("a",{variant:"contained",href:"/register",className:"text-light d-block mb-4"},void 0,"Not a member, sign up now"),f("a",{variant:"contained",href:"/register",className:"text-light d-block"},void 0,"Forget your password?")),C=function(e){function t(e){var o,a,r,n,i,s;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,r=b(t).call(this,e),o=!r||"object"!==u(r)&&"function"!==typeof r?h(a):r,n=h(h(o)),s=function(){var e=o.state,t=e.userName,a=e.password;o.props.authenticateUser({userName:t,password:a}),setTimeout(function(){o.setState({redirectToReferrer:!0})},100)},(i="login")in n?Object.defineProperty(n,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[i]=s,o.state={password:"",userName:"",redirectToReferrer:!1},o.handleUserNameChange=o.handleUserNameChange.bind(h(h(o))),o.handlePasswordChange=o.handlePasswordChange.bind(h(h(o))),o}var o,a,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,n.a.PureComponent),o=t,(a=[{key:"handleUserNameChange",value:function(e){this.setState({userName:e.target.value})}},{key:"handlePasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"render",value:function(){var e=this.props.classes,t=(this.props.location.state||{from:{pathname:"/"}}).from;return this.state.redirectToReferrer?f(i.Redirect,{to:t}):f("div",{className:"text-light p-3 vh-100"},void 0,v,f("form",{className:"".concat(e.container," d-flex flex-column"),noValidate:!0,autoComplete:"off"},void 0,f("div",{className:"w-100"},void 0,g,f("input",{type:"text",id:"user",placeholder:"User Name",value:this.state.userName,onChange:this.handleUserNameChange,className:"".concat(e.textField," border rounded mb-3 w-100")})),f("div",{className:"w-100"},void 0,y,f("input",{id:"password",placeholder:"Password",value:this.state.password,onChange:this.handlePasswordChange,type:"password",className:"".concat(e.textField," border rounded mb-3 w-100")}))),f("div",{className:"px-4"},void 0,f("button",{onClick:this.login,className:"".concat(e.login," btn btn-lg text-light w-100 mb-4")},void 0,"Login")),w,f("div",{className:"p-2 text-uppercase mt-n3 w-25 text-center mx-auto mb-2",style:{backgroundColor:"var(--theme-bg)"}},void 0,"or"),f("div",{className:"d-flex px-4 mb-5"},void 0,f("div",{className:"w-50 pr-2 text-primary"},void 0,f("button",{className:"".concat(e.button," btn btn-primary w-100 text-left"),style:{backgroundColor:"var(--facebook-blue)",borderColor:"var(--facebook-blue)"}},void 0,N,f("span",{className:"pl-3 border-left font-weight-bold d-inline-block",style:{lineHeight:"1.8"}},void 0,"Sign In"))),f("div",{className:"w-50 pl-2"},void 0,f("button",{onClick:this.login,className:"".concat(e.button," btn bg-light w-100 text-left"),style:{color:"var(--google-red)"}},void 0,x,f("span",{className:"pl-3 border-left border-danger font-weight-bold d-inline-block",style:{lineHeight:"1.8"}},void 0,"Sign In")))),k)}}])&&p(o.prototype,a),r&&p(o,r),t}();t.default=Object(s.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap",padding:"0 1.5rem"},textField:{height:"3rem",padding:"0.5rem 2.5rem"},button:{height:"3rem"},login:{"background-color":"#d24d57"}}})(C)}}]);