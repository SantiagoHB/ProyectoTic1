(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{gBvE:function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"SoloPanelPage",(function(){return y}));var o=n("q1tI"),r=n.n(o),a=n("0cfB"),i=n("/MKj"),u=n("Yuww"),l=n("8M//");function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function f(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var y=function(t){function e(){var t,n;s(this,e);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=f(this,(t=d(e)).call.apply(t,[this].concat(r)))).state={panel:null,notFound:!1},n}var n,o,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(e,t),n=e,(o=[{key:"componentDidMount",value:function(){var t=this.props,e=t.$injector,n=t.$scope,o=t.urlUid,r=t.urlType,a=t.urlSlug,i=t.routeInfo;this.props.initDashboard({$injector:e,$scope:n,urlSlug:a,urlUid:o,urlType:r,routeInfo:i,fixUrl:!1})}},{key:"componentDidUpdate",value:function(t){var e=this.props,n=e.urlPanelId,o=e.dashboard;if(o&&(!t.dashboard||t.dashboard.uid!==o.uid)){var r=parseInt(n,10);o.expandParentRowFor(r);var a=o.getPanelById(r);if(!a)return void this.setState({notFound:!0});this.setState({panel:a})}}},{key:"render",value:function(){var t=this.props,e=t.urlPanelId,n=t.dashboard,o=this.state,a=o.notFound,i=o.panel;return a?r.a.createElement("div",{className:"alert alert-error"},"Panel with id ",e," not found"):i&&n?r.a.createElement("div",{className:"panel-solo"},r.a.createElement(u.a,{dashboard:n,panel:i,isEditing:!1,isViewing:!1,isInView:!0})):r.a.createElement("div",null,"Loading & initializing dashboard")}}])&&p(n.prototype,o),a&&p(n,a),e}(o.Component),h={initDashboard:l.a};e.default=Object(a.hot)(t)(Object(i.connect)((function(t){return{urlUid:t.location.routeParams.uid,urlSlug:t.location.routeParams.slug,urlType:t.location.routeParams.type,urlPanelId:t.location.query.panelId,dashboard:t.dashboard.getModel()}}),h)(y))}.call(this,n("3UD+")(t))}}]);
//# sourceMappingURL=SoloPanelPage.e45e7ed64ba6056a33a4.js.map