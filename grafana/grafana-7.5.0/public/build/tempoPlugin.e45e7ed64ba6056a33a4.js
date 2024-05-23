(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{Dljr:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r("Obii"),o=r("kDLi"),a=r("kDDq"),i=r("q1tI"),u=r.n(i),c=r("Wkk1");function s(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    padding-bottom: ",";\n    color: ",";\n  "]);return s=function(){return e},e}function l(e){var t,r,a=e.options,i=e.onOptionsChange,s=Object(o.useStyles)(f);return u.a.createElement(u.a.Fragment,null,u.a.createElement("h3",{className:"page-heading"},"Trace to logs"),u.a.createElement("div",{className:s.infoText},"Trace to logs let's you navigate from a trace span to the selected data source's log."),u.a.createElement("div",{className:"gf-form"},u.a.createElement(o.InlineFormLabel,{tooltip:"The data source the trace is going to navigate to"},"Data source"),u.a.createElement(c.a,{pluginId:"loki",current:null===(t=a.jsonData.tracesToLogs)||void 0===t?void 0:t.datasourceUid,noDefault:!0,onChange:function(e){var t;return Object(n.updateDatasourcePluginJsonDataOption)({onOptionsChange:i,options:a},"tracesToLogs",{datasourceUid:e.uid,tags:null===(t=a.jsonData.tracesToLogs)||void 0===t?void 0:t.tags})}})),u.a.createElement("div",{className:"gf-form"},u.a.createElement(o.InlineFormLabel,{tooltip:"Tags that will be used in the Loki query. Default tags: 'cluster', 'hostname', 'namespace', 'pod'"},"Tags"),u.a.createElement(o.TagsInput,{tags:null===(r=a.jsonData.tracesToLogs)||void 0===r?void 0:r.tags,onChange:function(e){var t;return Object(n.updateDatasourcePluginJsonDataOption)({onOptionsChange:i,options:a},"tracesToLogs",{datasourceUid:null===(t=a.jsonData.tracesToLogs)||void 0===t?void 0:t.datasourceUid,tags:e})}})))}var f=function(e){return{infoText:Object(a.css)(s(),e.spacing.md,e.colors.textSemiWeak)}}},SjO4:function(e,t,r){"use strict";r.r(t);var n=r("Obii"),o=r("t8hP"),a=r("67Y/");function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,r,n,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,o)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e,t,r){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,f(t).call(this,e))}var r,o,i,y,b;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),r=t,(o=[{key:"query",value:function(e){return l(f(t.prototype),"query",this).call(this,e).pipe(Object(a.a)((function(e){return e.error?e:{data:[new n.MutableDataFrame({fields:[{name:"trace",type:n.FieldType.trace,values:[JSON.parse(e.data[0].fields[0].values.get(0))]}],meta:{preferredVisualisationType:"trace"}})]}})))}},{key:"testDatasource",value:(y=regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(f(t.prototype),"query",this).call(this,{targets:[{query:"",refId:"A"}]}).toPromise();case 2:if(o=e.sent,null===(r=o.error)||void 0===r||null===(n=r.message)||void 0===n?void 0:n.startsWith("failed to get trace")){e.next=5;break}return e.abrupt("return",{status:"error",message:"Data source is not working"});case 5:return e.abrupt("return",{status:"success",message:"Data source is working"});case 6:case"end":return e.stop()}}),e,this)})),b=function(){var e=this,t=arguments;return new Promise((function(r,n){var o=y.apply(e,t);function a(e){u(o,r,n,a,i,"next",e)}function i(e){u(o,r,n,a,i,"throw",e)}a(void 0)}))},function(){return b.apply(this,arguments)})},{key:"getQueryDisplayText",value:function(e){return e.query}}])&&c(r.prototype,o),i&&c(r,i),t}(o.DataSourceWithBackend),b=r("Csm0"),g=r("kDLi"),d=r("q1tI"),m=r.n(d);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function D(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var S=function(e){function t(){return w(this,t),D(this,P(t).apply(this,arguments))}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.query,r=e.onChange;return m.a.createElement(g.LegacyForms.FormField,{label:"Trace ID",labelWidth:4,inputEl:m.a.createElement("div",{className:"slate-query-field__wrapper"},m.a.createElement("div",{className:"slate-query-field","aria-label":b.selectors.components.QueryField.container},m.a.createElement("input",{style:{width:"100%"},value:t.query||"",onChange:function(e){return r(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t,{query:e.currentTarget.value}))}})))})}}])&&j(r.prototype,n),o&&j(r,o),t}(m.a.PureComponent),T=r("Dljr");r.d(t,"plugin",(function(){return k}));var k=new n.DataSourcePlugin(y).setConfigEditor((function(e){var t=e.options,r=e.onOptionsChange;return m.a.createElement(m.a.Fragment,null,m.a.createElement(g.DataSourceHttpSettings,{defaultUrl:"http://tempo",dataSourceConfig:t,showAccessOptions:!1,onChange:r}),m.a.createElement(T.a,{options:t,onOptionsChange:r}))})).setExploreQueryField(S)}}]);
//# sourceMappingURL=tempoPlugin.e45e7ed64ba6056a33a4.js.map