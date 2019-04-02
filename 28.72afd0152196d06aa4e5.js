(function(){(this||window).webpackJsonp.registerAbsMids({"esri/core/sql/WhereClause":561,"esri/core/sql/AggregateFunctions":1569,"esri/core/sql/StandardizedFunctions":1570})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1569:function(e,t,a){var r,n;r=[a.dj.c(e.i),t],void 0===(n=function(e,t){function a(e){for(var t=0,a=0;a<e.length;a++)t+=e[a];return t/e.length}function r(e){for(var t=a(e),r=e.length,n=0,u=0,l=e;u<l.length;u++){var s=l[u];n+=Math.pow(s-t,2)}return r>1?n/(r-1):0}Object.defineProperty(t,"__esModule",{value:!0}),t.aggregateFunction=function(e,t){var a=n[e.toLowerCase()];if(null==a)throw new Error("Function Not Recognised");if(t.length<a.minParams||t.length>a.maxParams)throw new Error("Invalid Parameter count for call to "+e.toUpperCase());return a.evaluate(t)},t.isAggregate=function(e,t){var a=n[e.toLowerCase()];return null!=a&&t>=a.minParams&&t<=a.maxParams};var n={min:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:Math.min.apply(Math,e[0])}},max:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:Math.max.apply(Math,e[0])}},avg:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:a(e[0])}},sum:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:function(e){for(var t=0,a=0;a<e.length;a++)t+=e[a];return t}(e[0])}},stddev:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:Math.sqrt(r(e[0]))}},count:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:e[0].length}},var:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:r(e[0])}}}}.apply(null,r))||(e.exports=n)},1570:function(e,t,a){var r,n;r=[a.dj.c(e.i),t,a(362)],void 0===(n=function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.evaluateFunction=function(e,t){var a=r[e.toLowerCase()];if(null==a)throw new Error("Function Not Recognised");if(t.length<a.minParams||t.length>a.maxParams)throw new Error("Invalid Parameter count for call to "+e.toUpperCase());return a.evaluate(t)},t.isStandardized=function(e,t){var a=r[e.toLowerCase()];return null!=a&&t>=a.minParams&&t<=a.maxParams};var r={extract:{minParams:2,maxParams:2,evaluate:function(e){var t=e[0],a=e[1];if(null==a)return null;if(a instanceof Date)switch(t.toUpperCase()){case"SECOND":return a.getSeconds();case"MINUTE":return a.getMinutes();case"HOUR":return a.getHours();case"DAY":return a.getDate();case"MONTH":return a.getMonth()+1;case"YEAR":return a.getFullYear()}throw new Error("Invalid Parameter for call to EXTRACT")}},substring:{minParams:2,maxParams:3,evaluate:function(e){if(2===e.length){var t=e[0],a=e[1];return null==t||null==a?null:t.toString().substring(a-1)}if(3===e.length){t=e[0],a=e[1];var r=e[2];return null==t||null==a||null==r?null:r<=0?"":t.toString().substring(a-1,a+r-1)}}},position:{minParams:2,maxParams:2,evaluate:function(e){var t=e[0],a=e[1];return null==t||null==a?null:a.indexOf(t)+1}},trim:{minParams:2,maxParams:3,evaluate:function(e){var t=3===e.length,r=t?e[1]:" ",n=t?e[2]:e[1];if(null==r||null==n)return null;var u="("+a.escapeString(r)+")";switch(e[0]){case"BOTH":return n.replace(new RegExp("^"+u+"*|"+u+"*$","g"),"");case"LEADING":return n.replace(new RegExp("^"+u+"*","g"),"");case"TRAILING":return n.replace(new RegExp(u+"*$","g"),"")}throw new Error("Invalid Parameter for call to TRIM")}},abs:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:Math.abs(e[0])}},ceiling:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:Math.ceil(e[0])}},floor:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:Math.floor(e[0])}},log:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:Math.log(e[0])}},log10:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:Math.log(e[0])*Math.LOG10E}},sin:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:Math.sin(e[0])}},cos:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:Math.cos(e[0])}},tan:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:Math.tan(e[0])}},asin:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:Math.asin(e[0])}},acos:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:Math.acos(e[0])}},atan:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:Math.atan(e[0])}},sign:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:e[0]>0?1:e[1]<0?-1:0}},power:{minParams:2,maxParams:2,evaluate:function(e){return null==e[0]||null==e[1]?null:Math.pow(e[0],e[1])}},mod:{minParams:2,maxParams:2,evaluate:function(e){return null==e[0]||null==e[1]?null:e[0]%e[1]}},round:{minParams:1,maxParams:2,evaluate:function(e){var t=e[0],a=2===e.length?Math.pow(10,e[1]):1;return null==t?null:Math.round(t*a)/a}},truncate:{minParams:1,maxParams:2,evaluate:function(e){return null==e[0]?null:1===e.length?parseInt(e[0].toFixed(0),10):parseFloat(e[0].toFixed(e[1]))}},char_length:{minParams:1,maxParams:1,evaluate:function(e){return"string"==typeof e[0]||e[0]instanceof String?e[0].length:0}},concat:{minParams:1,maxParams:1/0,evaluate:function(e){for(var t="",a=0;a<e.length;a++){if(null==e[a])return null;t+=e[a].toString()}return t}},lower:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:e[0].toString().toLowerCase()}},upper:{minParams:1,maxParams:1,evaluate:function(e){return null==e[0]?null:e[0].toString().toUpperCase()}}}}.apply(null,r))||(e.exports=n)},561:function(e,t,a){var r,n;r=[a.dj.c(e.i),t,a(154),a(547),a(372),a(1569),a(1570),a(1614)],void 0===(n=function(e,t,a,r,n,u,l,s){function i(e){return n(e,["YYYY-M-D H:m:s","YYYY-M-D H:mZ","YYYY-M-D H:m:sZ","YYYY-M-D H:m","YYYY-m-d"]).toDate()}function o(e){return n(e,["YYYY-M-D"]).toDate()}function c(e){return!0===e}function m(e){return Array.isArray(e)?e:[e]}function h(e){return null!==e?!0!==e:null}function f(e,t){if(null==e)return null;for(var a=!1,r=0,n=t;r<n.length;r++){var u=n[r];if(null==u)a=null;else if(e===u){a=!0;break}}return a}function v(e,t,a){if(null==e)return null;for(var r=t,n=a,u="",l="-[]/{}()*+?.\\^$|",s=0,i=0;i<r.length;i++){var o=r.charAt(i);switch(s){case 0:o===n?s=1:l.indexOf(o)>=0?u+="\\"+o:u+="%"===o?".*":"_"===o?".":o;break;case 1:l.indexOf(o)>=0?u+="\\"+o:u+=o,s=0}}return new RegExp("^"+u+"$").test(e)}function p(e){return e instanceof Date?e.valueOf():e}function g(e){for(var t=[],a={},r=0,n=e;r<n.length;r++){var u=n[r],l=u.toLowerCase();void 0===a[l]&&(t.push(u),a[l]=1)}return t}return function(){function e(){this.parseTree=null,this.parameters=null,this._hasStandardizedFunctions=null,this._hasAggregateFunctions=null}return e.create=function(t){var a=new e;a.parseTree=s.WhereGrammar.parse(t);var r=!0,n=!0;return a.visitAll(a.parseTree,function(e){if("function"===e.type){var t=e.name,a=e.args.value.length;r&&(r=l.isStandardized(t,a)),n&&(n=u.isAggregate(t,a))}}),a._hasStandardizedFunctions=r,a._hasAggregateFunctions=n,a},e.prototype.isStandardized=function(){return this._hasStandardizedFunctions},e.prototype.isAggregate=function(){return this._hasAggregateFunctions},e.prototype.setVariablesDictionary=function(e){this.parameters=e},e.prototype.testFeature=function(e){return!!this.evaluateNode(this.parseTree,e)},e.prototype.testSet=function(e){var t=this,a=new r.default;this.visitAll(this.parseTree,function(e){"column_ref"!==e.type||a.has(e.column)||a.set(e.column,e)});for(var n={},u=0,l=e;u<l.length;u++){!function(e){a.forEach(function(a,r){var u=t.featureValue(e,r,a);n[r]?n[r].push(u):n[r]=[u]})}(l[u])}return!!this.evaluateNode(this.parseTree,{attributes:n})},e.prototype.calculateValue=function(e){return this.evaluateNode(this.parseTree,e)},e.prototype.getFunctions=function(){var e=[];return this.visitAll(this.parseTree,function(t){"function"===t.type&&e.push(t.name.toLowerCase())}),g(e)},e.prototype.getExpressions=function(){var e=new r.default;return this.visitAll(this.parseTree,function(t){if("function"===t.type){var a=t.name.toLowerCase(),r=t.args.value[0];if("column_ref"===r.type){var n=r.column,u=a+"-"+n;e.has(u)||e.set(u,{aggregateType:a,field:n})}}}),a.from(e.values())},e.prototype.getFields=function(){var e=[];return this.visitAll(this.parseTree,function(t){"column_ref"===t.type&&e.push(t.column)}),g(e)},e.prototype.getVariables=function(){var e=[];return this.visitAll(this.parseTree,function(t){"param"===t.type&&e.push(t.value.toLowerCase())}),g(e)},e.prototype.featureValue=function(e,t,a){var r=function(e){return e&&"object"==typeof e.attributes}(e)?e.attributes:e,n=r[t];if(void 0!==n)return n;for(var u in r)if(t.toLowerCase()===u.toLowerCase())return a.column=u,r[u];return null},e.prototype.visitAll=function(e,t){if(null!=e)switch(t(e),e.type){case"when_clause":this.visitAll(e.operand,t),this.visitAll(e.value,t);break;case"case_expression":for(var a=0,r=e.clauses;a<r.length;a++){var n=r[a];this.visitAll(n,t)}"simple"===e.format&&this.visitAll(e.operand,t),null!==e.else&&this.visitAll(e.else,t);break;case"expr_list":for(var u=0,l=e.value;u<l.length;u++){n=l[u];this.visitAll(n,t)}break;case"unary_expr":this.visitAll(e.expr,t);break;case"binary_expr":this.visitAll(e.left,t),this.visitAll(e.right,t);break;case"function":this.visitAll(e.args,t)}},e.prototype.evaluateNode=function(e,t){switch(e.type){case"case_expression":if("simple"===e.format){for(var a=p(this.evaluateNode(e.operand,t)),r=0;r<e.clauses.length;r++)if(a===p(this.evaluateNode(e.clauses[r].operand,t)))return this.evaluateNode(e.clauses[r].value,t);if(null!==e.else)return this.evaluateNode(e.else,t)}else{for(r=0;r<e.clauses.length;r++)if(c(this.evaluateNode(e.clauses[r].operand,t)))return this.evaluateNode(e.clauses[r].value,t);if(null!==e.else)return this.evaluateNode(e.else,t)}return null;case"param":return this.parameters[e.value.toLowerCase()];case"expr_list":for(var n=[],s=0,g=e.value;s<g.length;s++){var d=g[s];n.push(this.evaluateNode(d,t))}return n;case"unary_expr":return h(this.evaluateNode(e.expr,t));case"binary_expr":switch(e.operator){case"AND":return function(e,t){return null!=e&&null!=t?!0===e&&!0===t:!1!==e&&!1!==t&&null}(this.evaluateNode(e.left,t),this.evaluateNode(e.right,t));case"OR":return function(e,t){return null!=e&&null!=t?!0===e||!0===t:!0===e||!0===t||null}(this.evaluateNode(e.left,t),this.evaluateNode(e.right,t));case"IS":if("null"!==e.right.type)throw new Error("Unsupported RHS for IS");return null===this.evaluateNode(e.left,t);case"ISNOT":if("null"!==e.right.type)throw new Error("Unsupported RHS for IS");return null!==this.evaluateNode(e.left,t);case"IN":var P=m(this.evaluateNode(e.right,t));return f(this.evaluateNode(e.left,t),P);case"NOT IN":P=m(this.evaluateNode(e.right,t));return h(f(this.evaluateNode(e.left,t),P));case"BETWEEN":var w=this.evaluateNode(e.left,t),x=this.evaluateNode(e.right,t);return null==w||null==x[0]||null==x[1]?null:w>=x[0]&&w<=x[1];case"NOTBETWEEN":w=this.evaluateNode(e.left,t),x=this.evaluateNode(e.right,t);return null==w||null==x[0]||null==x[1]?null:w<x[0]||w>x[1];case"LIKE":return v(this.evaluateNode(e.left,t),this.evaluateNode(e.right,t),e.escape);case"NOT LIKE":return h(v(this.evaluateNode(e.left,t),this.evaluateNode(e.right,t),e.escape));case"<>":case"<":case">":case">=":case"<=":case"=":return function(e,t,a){if(null==t||null==a)return null;var r=p(t),n=p(a);switch(e){case"<>":return r!==n;case"=":return r===n;case">":return r>n;case"<":return r<n;case">=":return r>=n;case"<=":return r<=n}}(e.operator,this.evaluateNode(e.left,t),this.evaluateNode(e.right,t));case"*":return this.evaluateNode(e.left,t)*this.evaluateNode(e.right,t);case"-":return this.evaluateNode(e.left,t)-this.evaluateNode(e.right,t);case"+":return this.evaluateNode(e.left,t)+this.evaluateNode(e.right,t);case"/":return this.evaluateNode(e.left,t)/this.evaluateNode(e.right,t)}throw new Error("Not Supported Operator "+e.operator);case"null":case"bool":case"string":case"number":return e.value;case"date":return o(e.value);case"timestamp":return i(e.value);case"column_ref":return"CURRENT_DATE"===e.column.toUpperCase()?((d=new Date).setHours(0,0,0,0),d):"CURRENT_TIMESTAMP"===e.column.toUpperCase()?new Date:this.featureValue(t,e.column,e);case"function":var N=this.evaluateNode(e.args,t);return this.isAggregate()?u.aggregateFunction(e.name,N):l.evaluateFunction(e.name,N)}throw new Error("Unsupported sql syntax "+e.type)},e}()}.apply(null,r))||(e.exports=n)}}]);