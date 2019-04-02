(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/draw/support/GraphicMover":1474,"esri/views/draw/support/drawUtils":1553,"esri/views/draw/support/input/GraphicMoverEvents":1640})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{1474:function(t,i,e){var r,n;r=[e.dj.c(t.i),i,e(2),e(1),e(6),e(48),e(17),e(14),e(21),e(0),e(1553),e(1640)],void 0===(n=function(t,i,e,r,n,a,o,c,h,p,s,v){return function(t){function i(i){var e=t.call(this,i)||this;return e._activeGraphic=null,e._dragEvent=null,e._handles=new o,e._hoverGraphic=null,e._initialDragGeometry=null,e._pointerDownEvent=null,e._viewHandles=new o,e.type="graphic-mover",e.callbacks={onGraphicClick:function(t){},onGraphicDoubleClick:function(t){},onGraphicMoveStart:function(t){},onGraphicMove:function(t){},onGraphicMoveStop:function(t){},onGraphicPointerOver:function(t){},onGraphicPointerOut:function(t){},onGraphicPointerDown:function(t){},onGraphicPointerUp:function(t){}},e.enableMoveAllGraphics=!1,e.graphics=[],e.view=null,e}return e(i,t),i.prototype.initialize=function(){var t=this;this._handles.add([h.whenOnce(this,"view.ready",function(){t._viewHandles.add([t.view.on("click",function(i){return t._clickHandler(i)}),t.view.on("double-click",function(i){return t._doubleClickHandler(i)}),t.view.on("pointer-down",function(i){return t._pointerDownHandler(i)}),t.view.on("pointer-move",function(i){return t._pointerMoveHandler(i)}),t.view.on("pointer-up",function(i){return t._pointerUpHandler(i)}),t.view.on("drag",function(i){return t._dragHandler(i)}),t.view.on("key-down",function(i){return t._keyDownHandler(i)})])})])},i.prototype.destroy=function(){this.reset(),this._viewHandles.removeAll(),this._handles.removeAll()},Object.defineProperty(i.prototype,"state",{get:function(){var t=!!this.get("view.ready"),i=!!this.get("graphics.length"),e=this._activeGraphic;return t&&i?e?"moving":"active":t?"ready":"disabled"},enumerable:!0,configurable:!0}),i.prototype.reset=function(){this._activeGraphic=null,this._hoverGraphic=null,this._dragEvent=null},i.prototype.updateGeometry=function(t,i){var e=this.graphics[t];e&&e.set("geometry",i)},i.prototype._clickHandler=function(t){var i=this;this.view.hitTest(c.createScreenPointFromEvent(t)).then(function(e){var r=e.results;if(r.length&&r[0].graphic){var n=r[0].graphic;if(i.graphics.indexOf(n)>-1){var a=new v.GraphicClickEvent(n,i.graphics.indexOf(n),t.x,t.y,t);i.emit("graphic-click",a),i.callbacks.onGraphicClick&&i.callbacks.onGraphicClick(a)}}})},i.prototype._doubleClickHandler=function(t){var i=this;this.view.hitTest(c.createScreenPointFromEvent(t)).then(function(e){var r=e.results;if(r.length&&r[0].graphic){var n=r[0].graphic;if(i.graphics.indexOf(n)>-1){var a=new v.GraphicDoubleClickEvent(n,i.graphics.indexOf(n),t.x,t.y,t);i.emit("graphic-double-click",a),i.callbacks.onGraphicDoubleClick&&i.callbacks.onGraphicDoubleClick(a)}}})},i.prototype._pointerDownHandler=function(t){var i=this;this._pointerDownEvent=t,this.view.hitTest(c.createScreenPointFromEvent(t)).then(function(e){var r=e.results;if(r.length&&r[0].graphic){var n=r[0].graphic;if(i.graphics.indexOf(n)>-1){i._activeGraphic=n;var a=t.x,o=t.y,c=new v.GraphicPointerDownEvent(n,i.graphics.indexOf(n),a,o,t);i.emit("graphic-pointer-down",c),i.callbacks.onGraphicPointerDown&&i.callbacks.onGraphicPointerDown(c)}else n!==i._activeGraphic&&(i._pointerDownEvent=null,i._activeGraphic=null)}else i._pointerDownEvent=null,i._activeGraphic=null})},i.prototype._pointerUpHandler=function(t){if(this._pointerDownEvent=null,this._activeGraphic){var i=t.x,e=t.y,r=this.graphics.indexOf(this._activeGraphic),n=new v.GraphicPointerUpEvent(this._activeGraphic,r,i,e,t);this._activeGraphic=null,this.emit("graphic-pointer-up",n),this.callbacks.onGraphicPointerUp&&this.callbacks.onGraphicPointerUp(n)}},i.prototype._pointerMoveHandler=function(t){var i=this;this._dragEvent||this.view.hitTest(c.createScreenPointFromEvent(t)).then(function(e){var r=e.results;if(r.length&&r[0].graphic){var n=r[0].graphic;if(n===i._hoverGraphic)return;if(i.graphics.indexOf(n)>-1){var a=t.x,o=t.y;if(i._hoverGraphic){var c=i.graphics.indexOf(i._hoverGraphic),h=new v.GraphicPointerOutEvent(i.graphics[c],c,a,o,t);i._hoverGraphic=null,i.emit("graphic-pointer-out",h),i.callbacks.onGraphicPointerOut&&i.callbacks.onGraphicPointerOut(h)}var p=i.graphics.indexOf(n),s=new v.GraphicPointerOverEvent(n,p,a,o,t);return i._hoverGraphic=n,i.emit("graphic-pointer-over",s),void(i.callbacks.onGraphicPointerOver&&i.callbacks.onGraphicPointerOver(s))}}if(i._hoverGraphic){a=t.x,o=t.y,c=i.graphics.indexOf(i._hoverGraphic),s=new v.GraphicPointerOutEvent(i.graphics[c],c,a,o,t);i._hoverGraphic=null,i.emit("graphic-pointer-out",s),i.callbacks.onGraphicPointerOut&&i.callbacks.onGraphicPointerOut(s)}})},i.prototype._dragHandler=function(t){var i=this;if(this._pointerDownEvent){if("start"!==t.action&&!this._dragEvent||!this._activeGraphic||!this._activeGraphic.geometry)return;t.stopPropagation();var e=t.x,r=t.y,n=this.graphics.indexOf(this._activeGraphic),a=this._activeGraphic.geometry,o=this._dragEvent?e-this._dragEvent.x:0,c=this._dragEvent?r-this._dragEvent.y:0,h=e-t.origin.x,p=r-t.origin.y;if(this._activeGraphic.geometry=s.cloneMove(a,o,c,this.view),this.enableMoveAllGraphics&&this.graphics.forEach(function(t){t!==i._activeGraphic&&(t.geometry=s.cloneMove(t.geometry,o,c,i.view))}),this._dragEvent=t,"start"===t.action){this._initialDragGeometry=a.clone();var l=new v.GraphicMoveStartEvent(this._activeGraphic,this.graphics,n,e,r,o,c,h,p,t);this.emit("graphic-move-start",l),this.callbacks.onGraphicMoveStart&&this.callbacks.onGraphicMoveStart(l),l.defaultPrevented&&this._activeGraphic.set("geometry",a)}else if("update"===t.action){l=new v.GraphicMoveEvent(this._activeGraphic,this.graphics,n,e,r,o,c,h,p,t);this.emit("graphic-move",l),this.callbacks.onGraphicMove&&this.callbacks.onGraphicMove(l),l.defaultPrevented&&this._activeGraphic.set("geometry",a)}else{this._dragEvent=null;l=new v.GraphicMoveStopEvent(this._activeGraphic,this.graphics,n,e,r,o,c,h,p,t);this.emit("graphic-move-stop",l),this.callbacks.onGraphicMoveStop&&this.callbacks.onGraphicMoveStop(l),l.defaultPrevented&&this.graphics[n].set("geometry",this._initialDragGeometry),this._initialDragGeometry=null}}},i.prototype._keyDownHandler=function(t){"a"!==t.key&&"d"!==t.key&&"n"!==t.key||"moving"!==this.state||t.stopPropagation()},r([p.property()],i.prototype,"_activeGraphic",void 0),r([p.property({readOnly:!0})],i.prototype,"type",void 0),r([p.property()],i.prototype,"callbacks",void 0),r([p.property()],i.prototype,"enableMoveAllGraphics",void 0),r([p.property()],i.prototype,"graphics",void 0),r([p.property({dependsOn:["view.ready","graphics.length","_activeGraphic"],readOnly:!0})],i.prototype,"state",null),r([p.property()],i.prototype,"view",void 0),r([p.subclass("esri.views.draw.support.GraphicMover")],i)}(p.declared(n,a))}.apply(null,r))||(t.exports=n)},1553:function(t,i,e){var r,n;r=[e.dj.c(t.i),i,e(37),e(550),e(106)],void 0===(n=function(t,i,e,r,n){function a(t,i,e){if("point"===t.type)return t.x=t.x+i,t.y=t.y+e,t;if("multipoint"===t.type){var r=t.points;for(var a in r){var o=r[a],c=o[0],h=o[1];r[a]=[c+i,h+e]}return t}if("extent"===t.type)return t.xmin=t.xmin+i,t.xmax=t.xmax+i,t.ymin=t.ymin+e,t.ymax=t.ymax+e,t;var p=n.geometryToCoordinates(t),s="polyline"===t.type?t.paths:t.rings;for(var v in p){var l=p[v];for(var a in l){var u=l[a];c=u[0],h=u[1];s[v][a]=[c+i,h+e]}}return"paths"in t?t.paths=s:t.rings=s,t}Object.defineProperty(i,"__esModule",{value:!0}),i.move=a,i.cloneMove=function(t,i,e,r,o){var c=t.clone(),h=r.resolution;if("point"===c.type){if(o)a(c,i*h,-e*h);else{var p=r.state.transform,s=r.state.inverseTransform,v=p[0]*c.x+p[2]*c.y+p[4],l=p[1]*c.x+p[3]*c.y+p[5];c.x=s[0]*(v+i)+s[2]*(l+e)+s[4],c.y=s[1]*(v+i)+s[3]*(l+e)+s[5]}return c}if("multipoint"===c.type){if(o)a(c,i*h,-e*h);else{var u=c.points;for(var f in p=r.state.transform,s=r.state.inverseTransform,u){var y=u[f],d=p[0]*y[0]+p[2]*y[1]+p[4],g=p[1]*y[0]+p[3]*y[1]+p[5];v=s[0]*(d+i)+s[2]*(g+e)+s[4],l=s[1]*(d+i)+s[3]*(g+e)+s[5],u[f]=[v,l]}}return c}if("extent"===c.type){if(o)a(c,i*h,-e*h);else{p=r.state.transform,s=r.state.inverseTransform;var x=p[0]*c.xmin+p[2]*c.ymin+p[4],m=p[1]*c.xmin+p[3]*c.ymin+p[5],G=p[0]*c.xmax+p[2]*c.ymax+p[4],w=p[1]*c.xmax+p[3]*c.ymax+p[5];c.xmin=s[0]*(x+i)+s[2]*(m+e)+s[4],c.ymin=s[1]*(x+i)+s[3]*(m+e)+s[5],c.xmax=s[0]*(G+i)+s[2]*(w+e)+s[4],c.ymax=s[1]*(G+i)+s[3]*(w+e)+s[5]}return c}if(o)a(c,i*h,-e*h);else{var _=n.geometryToCoordinates(c);for(var k in u="polyline"===c.type?c.paths:c.rings,p=r.state.transform,s=r.state.inverseTransform,_){var E=_[k];for(var f in E)y=E[f],d=p[0]*y[0]+p[2]*y[1]+p[4],g=p[1]*y[0]+p[3]*y[1]+p[5],v=s[0]*(d+i)+s[2]*(g+e)+s[4],l=s[1]*(d+i)+s[3]*(g+e)+s[5],u[k][f]=[v,l]}"paths"in c?c.paths=u:c.rings=u}return c},i.scale=function(t,i,a,o,c){if("point"===t.type){var h=t.x,p=t.y,s=c?c[0]:h,v=c?c[1]:p,l=t.clone(),u=(h-s)*i+s,f=(p-v)*a+v;return l.x=u,l.y=f,l}if("multipoint"===t.type){var y=n.geometryToCoordinates(t),d=e.create(),g=r.getRingsOrPathsBounds(d,[y]),x=g[0],m=g[1],G=g[2],w=g[3],_=c?c[0]:(x+G)/2,k=c?c[1]:(w+m)/2,E=t.clone(),b=E.points;for(var P in b){var M=b[P];u=((h=M[0])-_)*i+_,f=((p=M[1])-k)*a+k,b[P]=[u,f]}return E}if("extent"===t.type){var O=t.xmin,D=t.xmax,H=t.ymin,C=t.ymax,S=c?c[0]:(O+D)/2,T=c?c[1]:(C+H)/2,U=t.clone();if(U.xmin=(O-S)*i+S,U.ymax=(C-T)*a+T,U.xmax=(D-S)*i+S,U.ymin=(H-T)*a+T,U.xmin>U.xmax){var A=U.xmin,j=U.xmax;U.xmin=j,U.xmax=A}if(U.ymin>U.ymax){var F=U.ymin,R=U.ymax;U.ymin=R,U.ymax=F}return U}var J=n.geometryToCoordinates(t),q=e.create(),B=r.getRingsOrPathsBounds(q,J),I=B[0],z=B[1],K=B[2],L=B[3],N=c?c[0]:(I+K)/2,Q=c?c[1]:(L+z)/2,V=t.clone(),W="polyline"===V.type?V.paths:V.rings;for(var X in J){var Y=J[X];for(var P in Y){var Z=Y[P];u=((h=Z[0])-N)*i+N,f=((p=Z[1])-Q)*a+Q,W[X][P]=[u,f]}}return"paths"in V?V.paths=W:V.rings=W,V},i.getScaleRatio=function(t,i,e,r,n,a){var o=Math.sqrt((e-t)*(e-t)+(r-i)*(r-i));return Math.sqrt((n-t)*(n-t)+(a-i)*(a-i))/o},i.getRotationAngle=function(t,i,e,r,n,a){var o=180*Math.atan2(i-r,t-e)/Math.PI;return 180*Math.atan2(i-a,t-n)/Math.PI-o}}.apply(null,r))||(t.exports=n)},1640:function(t,i,e){var r,n;r=[e.dj.c(t.i),i],void 0===(n=function(t,i){Object.defineProperty(i,"__esModule",{value:!0});var e=function(){return function(t,i,e,r,n){this.graphic=t,this.index=i,this.x=e,this.y=r,this.viewEvent=n,this.type="graphic-click"}}();i.GraphicClickEvent=e;var r=function(){return function(t,i,e,r,n){this.graphic=t,this.index=i,this.x=e,this.y=r,this.viewEvent=n,this.type="graphic-double-click"}}();i.GraphicDoubleClickEvent=r;var n=function(){function t(t,i,e,r,n,a,o,c,h,p){this.graphic=t,this.allGraphics=i,this.index=e,this.x=r,this.y=n,this.dx=a,this.dy=o,this.totalDx=c,this.totalDy=h,this.viewEvent=p,this.defaultPrevented=!1,this.type="graphic-move-start"}return t.prototype.preventDefault=function(){this.defaultPrevented=!0},t}();i.GraphicMoveStartEvent=n;var a=function(){function t(t,i,e,r,n,a,o,c,h,p){this.graphic=t,this.allGraphics=i,this.index=e,this.x=r,this.y=n,this.dx=a,this.dy=o,this.totalDx=c,this.totalDy=h,this.viewEvent=p,this.defaultPrevented=!1,this.type="graphic-move"}return t.prototype.preventDefault=function(){this.defaultPrevented=!0},t}();i.GraphicMoveEvent=a;var o=function(){function t(t,i,e,r,n,a,o,c,h,p){this.graphic=t,this.allGraphics=i,this.index=e,this.x=r,this.y=n,this.dx=a,this.dy=o,this.totalDx=c,this.totalDy=h,this.viewEvent=p,this.defaultPrevented=!1,this.type="graphic-move-stop"}return t.prototype.preventDefault=function(){this.defaultPrevented=!0},t}();i.GraphicMoveStopEvent=o;var c=function(){return function(t,i,e,r,n){this.graphic=t,this.index=i,this.x=e,this.y=r,this.viewEvent=n,this.type="graphic-pointer-over"}}();i.GraphicPointerOverEvent=c;var h=function(){return function(t,i,e,r,n){this.graphic=t,this.index=i,this.x=e,this.y=r,this.viewEvent=n,this.type="graphic-pointer-out"}}();i.GraphicPointerOutEvent=h;var p=function(){return function(t,i,e,r,n){this.graphic=t,this.index=i,this.x=e,this.y=r,this.viewEvent=n,this.type="graphic-pointer-down"}}();i.GraphicPointerDownEvent=p;var s=function(){return function(t,i,e,r,n){this.graphic=t,this.index=i,this.x=e,this.y=r,this.viewEvent=n,this.type="graphic-pointer-up"}}();i.GraphicPointerUpEvent=s}.apply(null,r))||(t.exports=n)}}]);