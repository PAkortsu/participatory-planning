(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/draw/support/GraphicMover":1474,"esri/views/draw/support/Reshape":1508,"esri/views/draw/support/drawUtils":1553,"esri/views/draw/support/input/GraphicMoverEvents":1640})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[73,79],{1474:function(t,e,i){var r,n;r=[i.dj.c(t.i),e,i(2),i(1),i(6),i(48),i(17),i(14),i(21),i(0),i(1553),i(1640)],void 0===(n=function(t,e,i,r,n,o,a,s,h,c,p,l){return function(t){function e(e){var i=t.call(this,e)||this;return i._activeGraphic=null,i._dragEvent=null,i._handles=new a,i._hoverGraphic=null,i._initialDragGeometry=null,i._pointerDownEvent=null,i._viewHandles=new a,i.type="graphic-mover",i.callbacks={onGraphicClick:function(t){},onGraphicDoubleClick:function(t){},onGraphicMoveStart:function(t){},onGraphicMove:function(t){},onGraphicMoveStop:function(t){},onGraphicPointerOver:function(t){},onGraphicPointerOut:function(t){},onGraphicPointerDown:function(t){},onGraphicPointerUp:function(t){}},i.enableMoveAllGraphics=!1,i.graphics=[],i.view=null,i}return i(e,t),e.prototype.initialize=function(){var t=this;this._handles.add([h.whenOnce(this,"view.ready",function(){t._viewHandles.add([t.view.on("click",function(e){return t._clickHandler(e)}),t.view.on("double-click",function(e){return t._doubleClickHandler(e)}),t.view.on("pointer-down",function(e){return t._pointerDownHandler(e)}),t.view.on("pointer-move",function(e){return t._pointerMoveHandler(e)}),t.view.on("pointer-up",function(e){return t._pointerUpHandler(e)}),t.view.on("drag",function(e){return t._dragHandler(e)}),t.view.on("key-down",function(e){return t._keyDownHandler(e)})])})])},e.prototype.destroy=function(){this.reset(),this._viewHandles.removeAll(),this._handles.removeAll()},Object.defineProperty(e.prototype,"state",{get:function(){var t=!!this.get("view.ready"),e=!!this.get("graphics.length"),i=this._activeGraphic;return t&&e?i?"moving":"active":t?"ready":"disabled"},enumerable:!0,configurable:!0}),e.prototype.reset=function(){this._activeGraphic=null,this._hoverGraphic=null,this._dragEvent=null},e.prototype.updateGeometry=function(t,e){var i=this.graphics[t];i&&i.set("geometry",e)},e.prototype._clickHandler=function(t){var e=this;this.view.hitTest(s.createScreenPointFromEvent(t)).then(function(i){var r=i.results;if(r.length&&r[0].graphic){var n=r[0].graphic;if(e.graphics.indexOf(n)>-1){var o=new l.GraphicClickEvent(n,e.graphics.indexOf(n),t.x,t.y,t);e.emit("graphic-click",o),e.callbacks.onGraphicClick&&e.callbacks.onGraphicClick(o)}}})},e.prototype._doubleClickHandler=function(t){var e=this;this.view.hitTest(s.createScreenPointFromEvent(t)).then(function(i){var r=i.results;if(r.length&&r[0].graphic){var n=r[0].graphic;if(e.graphics.indexOf(n)>-1){var o=new l.GraphicDoubleClickEvent(n,e.graphics.indexOf(n),t.x,t.y,t);e.emit("graphic-double-click",o),e.callbacks.onGraphicDoubleClick&&e.callbacks.onGraphicDoubleClick(o)}}})},e.prototype._pointerDownHandler=function(t){var e=this;this._pointerDownEvent=t,this.view.hitTest(s.createScreenPointFromEvent(t)).then(function(i){var r=i.results;if(r.length&&r[0].graphic){var n=r[0].graphic;if(e.graphics.indexOf(n)>-1){e._activeGraphic=n;var o=t.x,a=t.y,s=new l.GraphicPointerDownEvent(n,e.graphics.indexOf(n),o,a,t);e.emit("graphic-pointer-down",s),e.callbacks.onGraphicPointerDown&&e.callbacks.onGraphicPointerDown(s)}else n!==e._activeGraphic&&(e._pointerDownEvent=null,e._activeGraphic=null)}else e._pointerDownEvent=null,e._activeGraphic=null})},e.prototype._pointerUpHandler=function(t){if(this._pointerDownEvent=null,this._activeGraphic){var e=t.x,i=t.y,r=this.graphics.indexOf(this._activeGraphic),n=new l.GraphicPointerUpEvent(this._activeGraphic,r,e,i,t);this._activeGraphic=null,this.emit("graphic-pointer-up",n),this.callbacks.onGraphicPointerUp&&this.callbacks.onGraphicPointerUp(n)}},e.prototype._pointerMoveHandler=function(t){var e=this;this._dragEvent||this.view.hitTest(s.createScreenPointFromEvent(t)).then(function(i){var r=i.results;if(r.length&&r[0].graphic){var n=r[0].graphic;if(n===e._hoverGraphic)return;if(e.graphics.indexOf(n)>-1){var o=t.x,a=t.y;if(e._hoverGraphic){var s=e.graphics.indexOf(e._hoverGraphic),h=new l.GraphicPointerOutEvent(e.graphics[s],s,o,a,t);e._hoverGraphic=null,e.emit("graphic-pointer-out",h),e.callbacks.onGraphicPointerOut&&e.callbacks.onGraphicPointerOut(h)}var c=e.graphics.indexOf(n),p=new l.GraphicPointerOverEvent(n,c,o,a,t);return e._hoverGraphic=n,e.emit("graphic-pointer-over",p),void(e.callbacks.onGraphicPointerOver&&e.callbacks.onGraphicPointerOver(p))}}if(e._hoverGraphic){o=t.x,a=t.y,s=e.graphics.indexOf(e._hoverGraphic),p=new l.GraphicPointerOutEvent(e.graphics[s],s,o,a,t);e._hoverGraphic=null,e.emit("graphic-pointer-out",p),e.callbacks.onGraphicPointerOut&&e.callbacks.onGraphicPointerOut(p)}})},e.prototype._dragHandler=function(t){var e=this;if(this._pointerDownEvent){if("start"!==t.action&&!this._dragEvent||!this._activeGraphic||!this._activeGraphic.geometry)return;t.stopPropagation();var i=t.x,r=t.y,n=this.graphics.indexOf(this._activeGraphic),o=this._activeGraphic.geometry,a=this._dragEvent?i-this._dragEvent.x:0,s=this._dragEvent?r-this._dragEvent.y:0,h=i-t.origin.x,c=r-t.origin.y;if(this._activeGraphic.geometry=p.cloneMove(o,a,s,this.view),this.enableMoveAllGraphics&&this.graphics.forEach(function(t){t!==e._activeGraphic&&(t.geometry=p.cloneMove(t.geometry,a,s,e.view))}),this._dragEvent=t,"start"===t.action){this._initialDragGeometry=o.clone();var v=new l.GraphicMoveStartEvent(this._activeGraphic,this.graphics,n,i,r,a,s,h,c,t);this.emit("graphic-move-start",v),this.callbacks.onGraphicMoveStart&&this.callbacks.onGraphicMoveStart(v),v.defaultPrevented&&this._activeGraphic.set("geometry",o)}else if("update"===t.action){v=new l.GraphicMoveEvent(this._activeGraphic,this.graphics,n,i,r,a,s,h,c,t);this.emit("graphic-move",v),this.callbacks.onGraphicMove&&this.callbacks.onGraphicMove(v),v.defaultPrevented&&this._activeGraphic.set("geometry",o)}else{this._dragEvent=null;v=new l.GraphicMoveStopEvent(this._activeGraphic,this.graphics,n,i,r,a,s,h,c,t);this.emit("graphic-move-stop",v),this.callbacks.onGraphicMoveStop&&this.callbacks.onGraphicMoveStop(v),v.defaultPrevented&&this.graphics[n].set("geometry",this._initialDragGeometry),this._initialDragGeometry=null}}},e.prototype._keyDownHandler=function(t){"a"!==t.key&&"d"!==t.key&&"n"!==t.key||"moving"!==this.state||t.stopPropagation()},r([c.property()],e.prototype,"_activeGraphic",void 0),r([c.property({readOnly:!0})],e.prototype,"type",void 0),r([c.property()],e.prototype,"callbacks",void 0),r([c.property()],e.prototype,"enableMoveAllGraphics",void 0),r([c.property()],e.prototype,"graphics",void 0),r([c.property({dependsOn:["view.ready","graphics.length","_activeGraphic"],readOnly:!0})],e.prototype,"state",null),r([c.property()],e.prototype,"view",void 0),r([c.subclass("esri.views.draw.support.GraphicMover")],e)}(c.declared(n,o))}.apply(null,r))||(t.exports=n)},1508:function(t,e,i){var r,n;r=[i.dj.c(t.i),e,i(2),i(1),i(43),i(79),i(6),i(48),i(17),i(21),i(0),i(106),i(224),i(1553),i(1474)],void 0===(n=function(t,e,i,r,n,o,a,s,h,c,p,l,v,d,u){var y=function(){return function(t,e,i){this.graphic=t,this.mover=e,this.selected=i,this.type="reshape-start"}}(),f=function(){return function(t,e,i){this.graphic=t,this.mover=e,this.selected=i,this.type="reshape"}}(),m=function(){return function(t,e,i){this.graphic=t,this.mover=e,this.selected=i,this.type="reshape-stop"}}(),g=function(){return function(t,e,i){this.mover=t,this.dx=e,this.dy=i,this.type="move-start"}}(),_=function(){return function(t,e,i){this.mover=t,this.dx=e,this.dy=i,this.type="move"}}(),x=function(){return function(t,e,i){this.mover=t,this.dx=e,this.dy=i,this.type="move-stop"}}(),G=function(){return function(t){this.added=t,this.type="vertex-select"}}(),w=function(){return function(t){this.removed=t,this.type="vertex-deselect"}}(),b=function(){return function(t,e,i){this.added=t,this.graphic=e,this.oldGraphic=i,this.type="vertex-add"}}(),k=function(){return function(t,e,i){this.removed=t,this.graphic=e,this.oldGraphic=i,this.type="vertex-remove"}}(),S={removeVertex:["Backspace","Delete"]};return function(t){function e(e){var i=t.call(this,e)||this;return i._handles=new h,i._mover=null,i._viewHandles=new h,i._totalDx=0,i._totalDy=0,i.type="reshape",i.callbacks={onReshapeStart:function(t){},onReshape:function(t){},onReshapeStop:function(t){},onMoveStart:function(t){},onMove:function(t){},onMoveStop:function(t){}},i.graphic=null,i.handleGraphics=[],i.handleHoverSymbol=new v({style:"circle",size:8,color:[33,205,255],outline:{color:[0,12,255],width:1}}),i.handleSelectionSymbol=new v({style:"circle",size:8,color:[255,255,255],outline:{color:[0,12,255],width:1}}),i.handleSymbol=new v({style:"circle",size:6,color:[33,205,255],outline:{color:[0,12,255],width:1}}),i.layer=null,i.midpointGraphics=[],i.midpointSymbol=new v({style:"circle",size:6,color:[200,200,200],outline:{color:[100,100,100],width:1}}),i.enableMidpoints=!0,i.selectedHandles=[],i.view=null,i}return i(e,t),e.prototype.initialize=function(){var t=this;this._setup(),this._handles.add([c.whenOnce(this,"view.ready",function(){t.view&&t.view.map&&t.view.map.add(t.layer),t._viewHandles.add([t.view.on("key-down",function(e){return t._keyDownHandler(e)})])}),c.pausable(this,"graphic",function(){return t.refresh()}),c.pausable(this,"layer",function(e,i){i&&(t._clearSelection(),t._resetGraphics(i)),t.refresh()}),c.pausable(this,"enableMidpoints",function(){t.refresh()})])},e.prototype.destroy=function(){this._reset(),this._mover&&this._mover.destroy(),this._mover=null,this._handles.removeAll(),this._handles=null,this._viewHandles.removeAll(),this._viewHandles=null},Object.defineProperty(e.prototype,"state",{get:function(){var t=!!this.get("view.ready"),e=!(!this.get("graphic")||!this.get("layer"));return t&&e?"active":t?"ready":"disabled"},enumerable:!0,configurable:!0}),e.prototype.isUIGraphic=function(t){var e=[];return this.graphic&&e.push(this.graphic),e.concat(this.handleGraphics,this.midpointGraphics),e.length&&e.indexOf(t)>-1},e.prototype.refresh=function(){this._reset(),this._setup()},e.prototype.reset=function(){this.graphic=null},e.prototype.clearSelection=function(){this._clearSelection()},e.prototype.removeSelectedHandles=function(){this.selectedHandles.length&&this._removeVertex(this.selectedHandles)},e.prototype._setup=function(){this.graphic&&this.layer&&(this._setupGraphics(),this._setupMover())},e.prototype._reset=function(){this._clearSelection(),this._resetGraphicStateVars(),this._resetGraphics(),this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"},e.prototype._resetGraphicStateVars=function(){this._totalDx=0,this._totalDy=0},e.prototype._resetGraphics=function(t){var e=t||this.layer;e&&(e.removeMany(this.handleGraphics),e.removeMany(this.midpointGraphics)),this.handleGraphics.forEach(function(t){return t.destroy()}),this.midpointGraphics.forEach(function(t){return t.destroy()}),this._set("handleGraphics",[]),this._set("midpointGraphics",[]),this._set("selectedHandles",[])},e.prototype._setupGraphics=function(){var t=this.graphic.geometry,e=l.geometryToCoordinates(t.clone());if("polygon"===t.type)for(var i=0,r=e;i<r.length;i++){var n=r[i],o=n[n.length-1];n[0][0]===o[0]&&n[0][1]===o[1]&&n.length>2&&n.pop()}this._set("handleGraphics",this._createHandleGraphics(e)),this.enableMidpoints&&this._set("midpointGraphics",this._createMidpointGraphics(e)),this._saveRelatedIndices(this.handleGraphics),this.layer.addMany(this.midpointGraphics),this.layer.addMany(this.handleGraphics)},e.prototype._createHandleGraphics=function(t){for(var e=[],i=0,r=t;i<r.length;i++)for(var a=r[i],s=t.indexOf(a),h=0,c=a;h<c.length;h++){var p=c[h],l=a.indexOf(p),v=p[0],d=p[1];e.push(new o({geometry:new n.Point({x:v,y:d,spatialReference:this.view.spatialReference}),symbol:this.handleSymbol,attributes:{pathIndex:s,pointIndex:l}}))}return e},e.prototype._createMidpointGraphics=function(t){for(var e=[],i=0,r=t;i<r.length;i++)for(var a=r[i],s=t.indexOf(a),h=0,c=a;h<c.length;h++){var p=c[h],v=a.indexOf(p),d=p[0],u=p[1],y=a[v+1]?v+1:0;if("polyline"!==this.graphic.geometry.type||0!==y){var f=a[y],m=f[0],g=f[1],_=l.getMidpoint([d,u],[m,g]),x=_[0],G=_[1];e.push(new o({geometry:new n.Point({x:x,y:G,spatialReference:this.view.spatialReference}),symbol:this.midpointSymbol,attributes:{pathIndex:s,pointIndexStart:v,pointIndexEnd:y}}))}}return e},e.prototype._saveRelatedIndices=function(t){for(var e=0,i=t;e<i.length;e++){for(var r=i[e],n=t.indexOf(r),o=[],a=r.geometry,s=a.x,h=a.y,c=0,p=t;c<p.length;c++){var l=p[c],v=t.indexOf(l);if(n!==v){var d=l.geometry,u=d.x,y=d.y;s===u&&h===y&&o.push(v)}}r.attributes.relatedGraphicIndices=o}},e.prototype._setupMover=function(){var t=this;this._mover=new u({enableMoveAllGraphics:!1,graphics:[].concat(this.handleGraphics,this.graphic,this.midpointGraphics),view:this.view,callbacks:{onGraphicClick:function(e){return t._onGraphicClickCallback(e)},onGraphicMoveStart:function(e){return t._onGraphicMoveStartCallback(e)},onGraphicMove:function(e){return t._onGraphicMoveCallback(e)},onGraphicMoveStop:function(e){return t._onGraphicMoveStopCallback(e)},onGraphicPointerOver:function(e){return t._onGraphicPointerOverCallback(e)},onGraphicPointerOut:function(e){return t._onGraphicPointerOutCallback(e)}}})},e.prototype._onGraphicClickCallback=function(t){var e=t.graphic;if(e!==this.graphic){if(this.midpointGraphics.indexOf(e)>-1){if(t.viewEvent.stopPropagation(),2===t.viewEvent.button)return;var i=this.graphic.clone();this._createHandleFromMidpoint(e),this.refresh(),this._emitVertexAddEvent([e],i)}else if(this.handleGraphics.indexOf(e)>-1)if(t.viewEvent.stopPropagation(),2===t.viewEvent.button)this._removeVertex(e);else{var r=t.viewEvent.native;r.ctrlKey||r.metaKey||this._clearSelection(),-1===this.selectedHandles.indexOf(e)?this._addToSelection(e):this._removeFromSelection(e,!0)}}else this.clearSelection()},e.prototype._onGraphicMoveStartCallback=function(t){var e=t.graphic;if(this._resetGraphicStateVars(),e===this.graphic){var i=t.dx,r=t.dy;return this.handleGraphics.forEach(function(t){return t.visible=!1}),this.midpointGraphics.forEach(function(t){return t.visible=!1}),this._clearSelection(),void this._emitMoveStartEvent(i,r)}this.midpointGraphics.indexOf(e)>-1?(this._clearSelection(),this._createHandleFromMidpoint(e),this._addToSelection(e)):-1===this.selectedHandles.indexOf(e)&&(this._clearSelection(),this._addToSelection(e)),this._emitReshapeStartEvent(e)},e.prototype._onGraphicMoveCallback=function(t){var e=t.graphic,i=t.dx,r=t.dy;this._totalDx+=i,this._totalDy+=r,e===this.graphic?this._emitMoveEvent(i,r):(this._syncGeometryAfterHandleMove(e,i,r),this._emitReshapeEvent(e))},e.prototype._onGraphicMoveStopCallback=function(t){var e=t.graphic,i=t.dx,r=t.dy;if(this._totalDx+=i,this._totalDy+=r,e===this.graphic){for(var n=0,o=[].concat(this.handleGraphics,this.midpointGraphics);n<o.length;n++)o[n].visible=!0;this._syncGraphicsWithGeometry(),this._emitMoveStopEvent()}else this._syncGeometryAfterHandleMove(e,i,r),this.midpointGraphics.indexOf(e)>-1&&this.refresh(),this._emitReshapeStopEvent(e);this._resetGraphicStateVars()},e.prototype._syncGraphicsWithGeometry=function(){var t=this.graphic.geometry,e="polyline"===t.type?t.paths:t.rings;this._updateHandleGraphicLocations(e),this._updateMidpointGraphicLocations(e)},e.prototype._updateHandleGraphicLocations=function(t){for(var e=0,i=this.handleGraphics;e<i.length;e++){var r=i[e],o=r.attributes,a=o.pathIndex,s=o.pointIndex,h=t[a][s],c=h[0],p=h[1];r.set("geometry",new n.Point(c,p,this.view.spatialReference))}},e.prototype._updateMidpointGraphicLocations=function(t){for(var e=0,i=this.midpointGraphics;e<i.length;e++){var r=i[e],o=r.attributes,a=o.pathIndex,s=o.pointIndexStart,h=o.pointIndexEnd,c=t[a][s],p=c[0],v=c[1],d=t[a][h],u=d[0],y=d[1],f=l.getMidpoint([p,v],[u,y]),m=f[0],g=f[1];r.geometry=new n.Point({x:m,y:g,spatialReference:this.view.spatialReference})}},e.prototype._syncGeometryAfterHandleMove=function(t,e,i){var r=this.graphic.geometry.clone(),n="polyline"===r.type?r.paths:r.rings,o=t.attributes,a=o.pathIndex,s=o.pointIndex,h=t.geometry,c=h.x,p=h.y,l=n[a].length-1;if(n[a][s]=[c,p],"polygon"===r.type&&(0===s?n[a][l]=[c,p]:s===l&&(n[a][0]=[c,p])),this.handleGraphics.indexOf(t)>-1){for(var v=0,u=t.attributes.relatedGraphicIndices;v<u.length;v++){var y=u[v],f=(P=this.handleGraphics[y]).attributes,m=f.pathIndex,g=f.pointIndex;n[m][g]=[c,p],P.geometry=t.geometry}for(var _=0,x=this.selectedHandles;_<x.length;_++){var G=x[_];if(G!==t){var w=G.attributes,b=w.pathIndex,k=w.pointIndex,S=w.relatedGraphicIndices,M=d.cloneMove(G.geometry,e,i,this.view),E=n[b].length-1;n[b][k]=[M.x,M.y],G.geometry=M,"polygon"===r.type&&(0===k?n[b][E]=[M.x,M.y]:k===E&&(n[b][0]=[M.x,M.y]));for(var O=0,H=S;O<H.length;O++){y=H[O];var P,D=(P=this.handleGraphics[y]).attributes,R=D.pathIndex,C=D.pointIndex;n[R][C]=[M.x,M.y],P.geometry=M}}}this._updateMidpointGraphicLocations(n)}this.graphic.geometry=r},e.prototype._onGraphicPointerOverCallback=function(t){var e=t.graphic;this.handleGraphics.indexOf(e)>-1&&-1===this.selectedHandles.indexOf(e)&&(e.symbol=this.handleHoverSymbol),this.view.cursor="pointer"},e.prototype._onGraphicPointerOutCallback=function(t){var e=t.graphic;this.handleGraphics.indexOf(e)>-1&&-1===this.selectedHandles.indexOf(e)&&(e.symbol=this.handleSymbol),this.view.cursor="default"},e.prototype._createHandleFromMidpoint=function(t){var e=this.graphic.geometry.clone(),i=t.attributes,r=i.pathIndex,n=i.pointIndexStart,o=i.pointIndexEnd,a=t.geometry,s=a.x,h=a.y,c=0===o?n+1:o;("polyline"===e.type?e.paths:e.rings)[r].splice(c,0,[s,h]),t.attributes={pathIndex:r,pointIndex:c,relatedGraphicIndices:[]},this.graphic.geometry=e},e.prototype._removeHandles=function(t){var e=this.graphic.geometry.clone(),i="polygon"===e.type?e.rings:e.paths;t instanceof o&&(t=[t]);for(var r=0,n=t;r<n.length;r++){var a=n[r].geometry,s=a.x,h=a.y;for(var c in i){var p=i[c];for(var l in p){var v=p[l],d=v[0],u=v[1];s===d&&h===u&&i[c].splice(Number(l),1)}}}if("polygon"===e.type)for(var y=0,f=i;y<f.length;y++){var m=f[y],g=m[0],_=(s=g[0],h=g[1],m[m.length-1]),x=_[0],G=_[1];(1===m.length||m.length<3&&s===x&&h===G)&&i.splice(i.indexOf(m),1),m.length>2&&(s!==x||h!==G)&&m.push(m[0])}else for(var w=0,b=i;w<b.length;w++){var k=b[w];1===k.length&&i.splice(i.indexOf(k),1)}this.graphic.geometry=e},e.prototype._addToSelection=function(t){t instanceof o&&(t=[t]);for(var e=0,i=t;e<i.length;e++)i[e].symbol=this.handleSelectionSymbol;this._set("selectedHandles",this.selectedHandles.concat(t)),this._emitSelectEvent(t)},e.prototype._removeFromSelection=function(t,e){var i=e?this.handleHoverSymbol:this.handleSymbol;t instanceof o&&(t=[t]);for(var r=0,n=t;r<n.length;r++){var a=n[r];this.selectedHandles.splice(this.selectedHandles.indexOf(a),1),a.symbol=i}this._emitDeselectEvent(t)},e.prototype._clearSelection=function(){if(this.selectedHandles.length){for(var t=this.selectedHandles,e=0,i=this.selectedHandles;e<i.length;e++){var r=i[e];r&&(r.symbol=this.handleSymbol)}this._set("selectedHandles",[]),this._emitDeselectEvent(t)}},e.prototype._keyDownHandler=function(t){S.removeVertex.indexOf(t.key)>-1&&!t.repeat&&this.selectedHandles.length&&this._removeVertex(this.selectedHandles)},e.prototype._removeVertex=function(t){if(!("polygon"===this.graphic.geometry.type&&this.handleGraphics.length<4||this.handleGraphics.length<3)){var e=this.graphic.clone();t instanceof o&&(t=[t]),this._removeHandles(t),this.refresh(),this._emitVertexRemoveEvent(t,e)}},e.prototype._emitMoveStartEvent=function(t,e){var i=new g(this.graphic,t,e);this.emit("move-start",i),this.callbacks.onMoveStart&&this.callbacks.onMoveStart(i)},e.prototype._emitMoveEvent=function(t,e){var i=new _(this.graphic,t,e);this.emit("move",i),this.callbacks.onMove&&this.callbacks.onMove(i)},e.prototype._emitMoveStopEvent=function(){var t=new x(this.graphic,this._totalDx,this._totalDy);this.emit("move-stop",t),this.callbacks.onMoveStop&&this.callbacks.onMoveStop(t)},e.prototype._emitReshapeStartEvent=function(t){var e=new y(this.graphic,t,this.selectedHandles);this.emit("reshape-start",e),this.callbacks.onReshapeStart&&this.callbacks.onReshapeStart(e)},e.prototype._emitReshapeEvent=function(t){var e=new f(this.graphic,t,this.selectedHandles);this.emit("reshape",e),this.callbacks.onReshape&&this.callbacks.onReshape(e)},e.prototype._emitReshapeStopEvent=function(t){var e=new m(this.graphic,t,this.selectedHandles);this.emit("reshape-stop",e),this.callbacks.onReshapeStop&&this.callbacks.onReshapeStop(e)},e.prototype._emitSelectEvent=function(t){var e=new G(t);this.emit("select",e),this.callbacks.onVertexSelect&&this.callbacks.onVertexSelect(e)},e.prototype._emitDeselectEvent=function(t){var e=new w(t);this.emit("deselect",e),this.callbacks.onVertexDeselect&&this.callbacks.onVertexDeselect(e)},e.prototype._emitVertexAddEvent=function(t,e){var i=new b(t,this.graphic,e);this.emit("vertex-add",i),this.callbacks.onVertexAdd&&this.callbacks.onVertexAdd(i)},e.prototype._emitVertexRemoveEvent=function(t,e){var i=new k(t,this.graphic,e);this.emit("vertex-remove",i),this.callbacks.onVertexRemove&&this.callbacks.onVertexRemove(i)},r([p.property({readOnly:!0})],e.prototype,"type",void 0),r([p.property()],e.prototype,"callbacks",void 0),r([p.property()],e.prototype,"graphic",void 0),r([p.property({readOnly:!0})],e.prototype,"handleGraphics",void 0),r([p.property()],e.prototype,"handleHoverSymbol",void 0),r([p.property()],e.prototype,"handleSelectionSymbol",void 0),r([p.property()],e.prototype,"handleSymbol",void 0),r([p.property()],e.prototype,"layer",void 0),r([p.property({readOnly:!0})],e.prototype,"midpointGraphics",void 0),r([p.property()],e.prototype,"midpointSymbol",void 0),r([p.property()],e.prototype,"enableMidpoints",void 0),r([p.property({readOnly:!0})],e.prototype,"selectedHandles",void 0),r([p.property({dependsOn:["view.ready","graphic","layer"],readOnly:!0})],e.prototype,"state",null),r([p.property()],e.prototype,"view",void 0),r([p.subclass("esri.views.draw.support.Reshape")],e)}(p.declared(a,s))}.apply(null,r))||(t.exports=n)},1553:function(t,e,i){var r,n;r=[i.dj.c(t.i),e,i(37),i(550),i(106)],void 0===(n=function(t,e,i,r,n){function o(t,e,i){if("point"===t.type)return t.x=t.x+e,t.y=t.y+i,t;if("multipoint"===t.type){var r=t.points;for(var o in r){var a=r[o],s=a[0],h=a[1];r[o]=[s+e,h+i]}return t}if("extent"===t.type)return t.xmin=t.xmin+e,t.xmax=t.xmax+e,t.ymin=t.ymin+i,t.ymax=t.ymax+i,t;var c=n.geometryToCoordinates(t),p="polyline"===t.type?t.paths:t.rings;for(var l in c){var v=c[l];for(var o in v){var d=v[o];s=d[0],h=d[1];p[l][o]=[s+e,h+i]}}return"paths"in t?t.paths=p:t.rings=p,t}Object.defineProperty(e,"__esModule",{value:!0}),e.move=o,e.cloneMove=function(t,e,i,r,a){var s=t.clone(),h=r.resolution;if("point"===s.type){if(a)o(s,e*h,-i*h);else{var c=r.state.transform,p=r.state.inverseTransform,l=c[0]*s.x+c[2]*s.y+c[4],v=c[1]*s.x+c[3]*s.y+c[5];s.x=p[0]*(l+e)+p[2]*(v+i)+p[4],s.y=p[1]*(l+e)+p[3]*(v+i)+p[5]}return s}if("multipoint"===s.type){if(a)o(s,e*h,-i*h);else{var d=s.points;for(var u in c=r.state.transform,p=r.state.inverseTransform,d){var y=d[u],f=c[0]*y[0]+c[2]*y[1]+c[4],m=c[1]*y[0]+c[3]*y[1]+c[5];l=p[0]*(f+e)+p[2]*(m+i)+p[4],v=p[1]*(f+e)+p[3]*(m+i)+p[5],d[u]=[l,v]}}return s}if("extent"===s.type){if(a)o(s,e*h,-i*h);else{c=r.state.transform,p=r.state.inverseTransform;var g=c[0]*s.xmin+c[2]*s.ymin+c[4],_=c[1]*s.xmin+c[3]*s.ymin+c[5],x=c[0]*s.xmax+c[2]*s.ymax+c[4],G=c[1]*s.xmax+c[3]*s.ymax+c[5];s.xmin=p[0]*(g+e)+p[2]*(_+i)+p[4],s.ymin=p[1]*(g+e)+p[3]*(_+i)+p[5],s.xmax=p[0]*(x+e)+p[2]*(G+i)+p[4],s.ymax=p[1]*(x+e)+p[3]*(G+i)+p[5]}return s}if(a)o(s,e*h,-i*h);else{var w=n.geometryToCoordinates(s);for(var b in d="polyline"===s.type?s.paths:s.rings,c=r.state.transform,p=r.state.inverseTransform,w){var k=w[b];for(var u in k)y=k[u],f=c[0]*y[0]+c[2]*y[1]+c[4],m=c[1]*y[0]+c[3]*y[1]+c[5],l=p[0]*(f+e)+p[2]*(m+i)+p[4],v=p[1]*(f+e)+p[3]*(m+i)+p[5],d[b][u]=[l,v]}"paths"in s?s.paths=d:s.rings=d}return s},e.scale=function(t,e,o,a,s){if("point"===t.type){var h=t.x,c=t.y,p=s?s[0]:h,l=s?s[1]:c,v=t.clone(),d=(h-p)*e+p,u=(c-l)*o+l;return v.x=d,v.y=u,v}if("multipoint"===t.type){var y=n.geometryToCoordinates(t),f=i.create(),m=r.getRingsOrPathsBounds(f,[y]),g=m[0],_=m[1],x=m[2],G=m[3],w=s?s[0]:(g+x)/2,b=s?s[1]:(G+_)/2,k=t.clone(),S=k.points;for(var M in S){var E=S[M];d=((h=E[0])-w)*e+w,u=((c=E[1])-b)*o+b,S[M]=[d,u]}return k}if("extent"===t.type){var O=t.xmin,H=t.xmax,P=t.ymin,D=t.ymax,R=s?s[0]:(O+H)/2,C=s?s[1]:(D+P)/2,I=t.clone();if(I.xmin=(O-R)*e+R,I.ymax=(D-C)*o+C,I.xmax=(H-R)*e+R,I.ymin=(P-C)*o+C,I.xmin>I.xmax){var V=I.xmin,A=I.xmax;I.xmin=A,I.xmax=V}if(I.ymin>I.ymax){var T=I.ymin,F=I.ymax;I.ymin=F,I.ymax=T}return I}var U=n.geometryToCoordinates(t),j=i.create(),z=r.getRingsOrPathsBounds(j,U),L=z[0],B=z[1],J=z[2],q=z[3],K=s?s[0]:(L+J)/2,W=s?s[1]:(q+B)/2,N=t.clone(),Q="polyline"===N.type?N.paths:N.rings;for(var X in U){var Y=U[X];for(var M in Y){var Z=Y[M];d=((h=Z[0])-K)*e+K,u=((c=Z[1])-W)*o+W,Q[X][M]=[d,u]}}return"paths"in N?N.paths=Q:N.rings=Q,N},e.getScaleRatio=function(t,e,i,r,n,o){var a=Math.sqrt((i-t)*(i-t)+(r-e)*(r-e));return Math.sqrt((n-t)*(n-t)+(o-e)*(o-e))/a},e.getRotationAngle=function(t,e,i,r,n,o){var a=180*Math.atan2(e-r,t-i)/Math.PI;return 180*Math.atan2(e-o,t-n)/Math.PI-a}}.apply(null,r))||(t.exports=n)},1640:function(t,e,i){var r,n;r=[i.dj.c(t.i),e],void 0===(n=function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){return function(t,e,i,r,n){this.graphic=t,this.index=e,this.x=i,this.y=r,this.viewEvent=n,this.type="graphic-click"}}();e.GraphicClickEvent=i;var r=function(){return function(t,e,i,r,n){this.graphic=t,this.index=e,this.x=i,this.y=r,this.viewEvent=n,this.type="graphic-double-click"}}();e.GraphicDoubleClickEvent=r;var n=function(){function t(t,e,i,r,n,o,a,s,h,c){this.graphic=t,this.allGraphics=e,this.index=i,this.x=r,this.y=n,this.dx=o,this.dy=a,this.totalDx=s,this.totalDy=h,this.viewEvent=c,this.defaultPrevented=!1,this.type="graphic-move-start"}return t.prototype.preventDefault=function(){this.defaultPrevented=!0},t}();e.GraphicMoveStartEvent=n;var o=function(){function t(t,e,i,r,n,o,a,s,h,c){this.graphic=t,this.allGraphics=e,this.index=i,this.x=r,this.y=n,this.dx=o,this.dy=a,this.totalDx=s,this.totalDy=h,this.viewEvent=c,this.defaultPrevented=!1,this.type="graphic-move"}return t.prototype.preventDefault=function(){this.defaultPrevented=!0},t}();e.GraphicMoveEvent=o;var a=function(){function t(t,e,i,r,n,o,a,s,h,c){this.graphic=t,this.allGraphics=e,this.index=i,this.x=r,this.y=n,this.dx=o,this.dy=a,this.totalDx=s,this.totalDy=h,this.viewEvent=c,this.defaultPrevented=!1,this.type="graphic-move-stop"}return t.prototype.preventDefault=function(){this.defaultPrevented=!0},t}();e.GraphicMoveStopEvent=a;var s=function(){return function(t,e,i,r,n){this.graphic=t,this.index=e,this.x=i,this.y=r,this.viewEvent=n,this.type="graphic-pointer-over"}}();e.GraphicPointerOverEvent=s;var h=function(){return function(t,e,i,r,n){this.graphic=t,this.index=e,this.x=i,this.y=r,this.viewEvent=n,this.type="graphic-pointer-out"}}();e.GraphicPointerOutEvent=h;var c=function(){return function(t,e,i,r,n){this.graphic=t,this.index=e,this.x=i,this.y=r,this.viewEvent=n,this.type="graphic-pointer-down"}}();e.GraphicPointerDownEvent=c;var p=function(){return function(t,e,i,r,n){this.graphic=t,this.index=e,this.x=i,this.y=r,this.viewEvent=n,this.type="graphic-pointer-up"}}();e.GraphicPointerUpEvent=p}.apply(null,r))||(t.exports=n)}}]);