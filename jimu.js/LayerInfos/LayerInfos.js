// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/Deferred dojo/on dojo/topic dojo/Evented dojo/promise/all ./LayerInfoFactory".split(" "),function(u,f,h,p,q,k,v,r,w){var g=u([v],{declaredClass:"jimu.LayerInfos",map:null,_operLayers:null,_layerInfos:null,_finalLayerInfos:null,_tableInfos:null,_basemapLayerInfos:null,_finalBasemapLayerInfos:null,_basemapLayers:null,_unreachableLayersTitleOfWebmap:null,_objectId:null,_layerInfoFactory:null,constructor:function(a,b){this._objectId=Math.random();
this._unreachableLayersTitleOfWebmap=[];this._basemapLayers=b.baseMap.baseMapLayers;this._operLayers=b.operationalLayers;this._tables=b.tables;this._layerInfoFactory=new w(a,this);this.map=a;this._initLayerInfos();this._initBasemapLayerInfos();this._initTablesInfos();this.update();this._bindEvents()},update:function(){this._extraSetLayerInfos();this._clearAddedFlag(this._finalLayerInfos);this._clearAddedFlag(this._finalBasemapLayerInfos);this._initFinalLayerInfos();this._initFinalBasemapLayerInfos();
this._markFirstOrLastNode()},getLayerInfoArrayOfWebmap:function(){var a=[];f.forEach(this.getLayerInfoArray(),function(b){for(var c=0;c<this._operLayers.length;c++)if(b.id===this._operLayers[c].id){a.push(b);break}c===this._operLayers.length&&0<=this._removedLayerInfoIdsFromFeatureCollection.indexOf(b.id)&&a.push(b)},this);return a},getTableInfoArrayOfWebmap:function(){var a=[];f.forEach(this.getTableInfoArray(),function(b){for(var c=0;c<this._tables.length;c++)if(b.id===this._tables[c].id){a.push(b);
break}},this);return a},getLayerInfoArray:function(){return f.filter(this._finalLayerInfos,function(a){h.getObject("_wabProperties.isTemporaryLayer",!1,a.layerObject)&&(a._flag._isTemporaryLayerInfo=!0);return!a._flag._isTemporaryLayerInfo})},getTableInfoArray:function(){return this._tableInfos},getBasemapLayerInfoArray:function(){return this._finalBasemapLayerInfos},addFeatureCollection:function(a,b){var c=this._getUniqueTopLayerInfoId(b),d={layers:[]};f.forEach(a,function(a,b){a.id=c+"_"+b;d.layers.push({id:a.id,
layerObject:a})},this);this.map.addLayers(a);var e;try{e=this._layerInfoFactory.create({featureCollection:d,title:b||c,id:c},this.map),e.init()}catch(x){console.warn(x.message),e=null}e&&(e._extraOfWebmapLayerInfo=!0,this._layerInfos.push(e),this.update(),this._onLayersUpdated(e,e.getRootLayerInfo()))},addTable:function(a){a=this._addTables([a],this._tableInfos);return a[0]?a[0]:null},removeTable:function(a){var b=-1;f.forEach(this._tableInfos,function(c,e){a.id===c.id&&(b=e)});if(0<=b){var c=this._tableInfos[b];
this._tableInfos.splice(b,1);c.destroy();this._onTableChange([a],g.REMOVED)}},_addTables:function(a,b){var c=[],d=[];f.forEach(a,function(a){var e;try{a.layerObject={url:a.url,featureCollectionData:a.featureCollectionData,empty:!0},a.id=this._getUniqueTableId(a.id),a.selfType="table",e=this._layerInfoFactory.create(a),e.init()}catch(n){console.warn(n.message),e=null}e&&(c.push(e),b.push(e),d.push(e.getLayerObject()))},this);r(d).then(h.hitch(this,function(a){var b=[];f.forEach(a,function(a,d){d=c[d];
a?b.push(d):(this.removeTable(d),d.destroy())},this);this._onTableChange(b,g.ADDED)}));return c},_getUniqueTableId:function(a){var b=this._tableInfos.concat(this._tableInfos||[]);return this._getUniqueLayerOrTableId(a,b)},_getUniqueTopLayerInfoId:function(a){return this._getUniqueLayerOrTableId(a,this._finalLayerInfos)},_getUniqueLayerOrTableId:function(a,b){var c=1,d;a||(a="table");for(d=a;;){for(var e=0;e<b.length&&b[e].id!==d;e++);if(e===b.length)return d;d=a+"_"+c.toString();c++}},_traversal:function(a,
b){for(var c=0;c<b.length;c++)if(b[c].traversal(a))return!0;return!1},traversal:function(a){var b=this.getLayerInfoArray();return this._traversal(a,b)},traversalLayerInfosOfWebmap:function(a){var b=this.getLayerInfoArrayOfWebmap();return this._traversal(a,b)},traversalAll:function(a){var b=this.getLayerInfoArray(),c=this.getBasemapLayerInfoArray(),d=this.getTableInfoArray(),b=b.concat(c.concat(d));return this._traversal(a,b)},_traversalAllWithSpecialLayerInfo:function(a){return this._traversal(a,
this._finalLayerInfos.concat(this._tableInfos))},getLayerInfoById:function(a){return this._findLayerInfoById(a)},getTableInfoById:function(a){var b=null;f.some(this.getTableInfoArray(),function(c){if(c.id===a)return b=c,!0});return b},getLayerOrTableInfoById:function(a){var b=null;this.traversalAll(function(c){if(c.id===a)return b=c,!0});return b},getLayerInfoByTopLayerId:function(a){return this._findTopLayerInfoById(a)},moveUpLayer:function(a,b){var c=null;b=b?b:1;a=this._getTopLayerInfoIndexById(a.id);
0<=a-b&&(c=this._finalLayerInfos[a-b].obtainLayerIndexesInMap().length,this._finalLayerInfos[a].moveRightOfIndex(this._finalLayerInfos[a-b].obtainLayerIndexesInMap()[c-1].index),c=this._finalLayerInfos[a-b],k.publish("layerInfos/layerReorder",a,b,"moveup"));return c},_reorderLayerInfosArray:function(a,b,c){"moveup"===c?(c=this._finalLayerInfos[a],this._finalLayerInfos.splice(a,1),this._finalLayerInfos.splice(a-b,0,c)):(c=this._finalLayerInfos[a],this._finalLayerInfos.splice(a+b+1,0,c),this._finalLayerInfos.splice(a,
1));this._markFirstOrLastNode();return c},moveDownLayer:function(a,b){var c=null;b=b?b:1;a=this._getTopLayerInfoIndexById(a.id);a+b<=this._finalLayerInfos.length-1&&(this._finalLayerInfos[a].moveLeftOfIndex(this._finalLayerInfos[a+b].obtainLayerIndexesInMap()[0].index),c=this._finalLayerInfos[a+b],k.publish("layerInfos/layerReorder",a,b,"movedown"));return c},getBasemapLayers:function(){var a=[];f.forEach(this.map.layerIds.concat(this.map.graphicsLayerIds||[]),function(b){b=this.map.getLayer(b);"basemap"!==
b._basemapGalleryLayerType&&"reference"!==b._basemapGalleryLayerType||a.push(b)},this);return a.reverse()},getMapNotesLayerInfoArray:function(){return f.filter(this.getLayerInfoArray(),function(a){return a.isMapNotesLayerInfo()},this)},restoreState:function(a){var b=a&&a.layerOptions?a.layerOptions:null;f.forEach(this._finalLayerInfos,function(a){a.resetLayerObjectVisibility(b)},this)},setSimplificationState:function(a){var b={layerOptions:{}};this.traversal(function(c){b.layerOptions[c.id]={};if(a&&
a.showLayers){var d=null;f.some(a.showLayers,function(a){if(c.id===a)return d=c.id,!0;if(c.title.trim&&a.trim&&c.title.trim()===a.trim())return d=c.id,!1});b.layerOptions[c.id].visible=null!==d?!0:!1}});this.restoreState(b)},getSimplificationState:function(){var a={showLayers:[]};this.traversal(function(b){b.isVisible()&&a.showLayers.push(b.id)});return a},getUnreachableLayersTitle:function(){return this._unreachableLayersTitleOfWebmap},getObjectId:function(){return this._objectId},_initLayerInfos:function(){this._layerInfos=
[];this._initSpecifiedLayerInfos(this._operLayers,this._layerInfos)},_initBasemapLayerInfos:function(){this._basemapLayerInfos=[];this._initSpecifiedLayerInfos(this._basemapLayers,this._basemapLayerInfos)},_initSpecifiedLayerInfos:function(a,b){var c;f.forEach(a,function(a){try{c=this._layerInfoFactory.create(a),c.init()}catch(e){console.warn(e.message),c=null,0<=e.message.indexOf("declaredClass")&&this._unreachableLayersTitleOfWebmap.push(a.title)}c&&b.push(c)},this)},_extraSetLayerInfos:function(){this._removedLayerInfoIdsFromFeatureCollection=
[];f.forEach(this._finalLayerInfos||this._layerInfos,function(a,b){var c;if(a._needToRenew()){try{c=this._layerInfoFactory.create(a.originOperLayer),c.init()}catch(e){console.warn(e.message),c=null}c&&(a.destroy(),this._finalLayerInfos[b]=c)}else if(a.originOperLayer.featureCollection){var d=[];f.forEach(a.getSubLayers(),function(a){d.push(a.id)});f.forEach(d,function(b){this.map.getLayer(b)||a.removeSubLayerById(b)},this);1===a.getSubLayers().length&&(b=a.getSubLayers()[0],this.map.getLayer(b.id).title=
a.title,a.removeSubLayerById(b.id),this._removedLayerInfoIdsFromFeatureCollection.push(b.id),a.id+="_logically_removed")}},this)},_refineFinalLayerInfos:function(){this._finalLayerInfos&&(this._finalLayerInfos=f.filter(this._finalLayerInfos,function(a){return!a._flag._invalid}))},_initFinalLayerInfos:function(){var a,b,c=this._finalLayerInfos||this._layerInfos;this._finalLayerInfos=[];for(a=this.map.graphicsLayerIds.length-1;0<=a;a--)b=this.map.graphicsLayerIds[a],this._isBasemap(b)||this._addToFinalLayerInfos(this._findLayerInfoByIdAndReturnTopLayer(b,
c),b,!0);for(a=this.map.layerIds.length-1;0<=a;a--)b=this.map.layerIds[a],this._isBasemap(b)||this._addToFinalLayerInfos(this._findLayerInfoByIdAndReturnTopLayer(b,c),b,!1);this._refineFinalLayerInfos()},_initTablesInfos:function(){this._tableInfos=[];var a=this._tables&&this._tables.reverse();a&&this._addTables(a,this._tableInfos)},_initFinalBasemapLayerInfos:function(){var a=this._finalBasemapLayerInfos||this._basemapLayerInfos;this._finalBasemapLayerInfos=[];f.forEach(this.getBasemapLayers(),function(b){var c;
f.some(a,function(a){if(a.id===b.id)return c=a,!0},this);this._addToFinalBasemapLayerInfos(c,b.id,!1)},this)},_isBasemap:function(a){for(var b=!1,c=this.getBasemapLayers(),d=0;d<c.length;d++)c[d].id===a&&(b=!0);return b},_addToFinalBasemapLayerInfos:function(a,b,c){this._addToSpecifiedLayerInfos(a,b,c,this._finalBasemapLayerInfos)},_addToFinalLayerInfos:function(a,b,c){this._addToSpecifiedLayerInfos(a,b,c,this._finalLayerInfos)},_addToSpecifiedLayerInfos:function(a,b,c,d){var e;if(a)a._addedFlag||
a.isGraphicLayer()!==c||(d.push(a),a._addedFlag=!0);else{a=this.map.getLayer(b);if("esri.layers.GraphicsLayer"!==a.declaredClass&&"esri.layers.LabelLayer"!==a.declaredClass){try{var g={layerObject:a,title:this._getLayerTitle(a),id:a.id||" "};h.mixin(g,h.getObject("_wabProperties.originOperLayer",!1,a));e=this._layerInfoFactory.create(g,this.map);e.init()}catch(n){console.warn(n.message),e=null}e&&(h.getObject("_wabProperties.isTemporaryLayer",!1,a)&&(e._flag._isTemporaryLayerInfo=!0),d.push(e))}("esri.layers.ArcGISDynamicMapServiceLayer"===
a.declaredClass||"esri.layers.ArcGISTiledMapServiceLayer"===a.declaredClass)&&e&&e._getServiceDefinition().then(h.hitch(this,function(a){var b=[];f.forEach(a.tables,function(a){a.url=e.getUrl()+"/"+a.id;a.id=e.id+"_"+a.id;a.title=this._getLayerTitle(a);b.push(a)},this);this._addTables(b,this._tableInfos)}))}},_getLayerTitle:function(a){if(a.title)return a.title;if(h.getObject("_wabProperties.originalLayerName",!1,a))return a.name||a.id;var b=a.label||a.name||"";if(a.url&&!h.getObject("_wabProperties.itemLayerInfo",
!1,a)){var c;c=a.url.indexOf("/FeatureServer");-1===c&&(c=a.url.indexOf("/MapServer"));-1===c&&(c=a.url.indexOf("/service"));-1<c&&(c=a.url.substring(0,c),c=c.substring(c.lastIndexOf("/")+1,c.length),b=b?c+" - "+b:c)}return b||a.id},_findLayerInfoByIdAndReturnTopLayer:function(a,b){var c,d=null;b||(b=this._finalLayerInfos);for(c=0;c<b.length;c++)if(d=b[c].findLayerInfoById(a)){d=b[c];break}return d},_findLayerInfoById:function(a,b){var c,d=null;b||(b=this._finalLayerInfos);for(c=0;c<b.length&&!(d=
b[c].findLayerInfoById(a));c++);return d},_findTopLayerInfoById:function(a){var b,c=null,d=[].concat(this._finalLayerInfos||[],this._tableInfos||[]);for(b=0;b<d.length;b++)if(d[b].id===a){c=d[b];break}return c},_getTopLayerInfoIndexById:function(a){var b,c=-1;for(b=0;b<this._finalLayerInfos.length;b++)if(this._finalLayerInfos[b].id===a){c=b;break}return c},_clearAddedFlag:function(a){f.forEach(a,function(a){a._addedFlag=!1})},_markFirstOrLastNode:function(){var a;if(this._finalLayerInfos.length){for(a=
0;a<this._finalLayerInfos.length;a++)this._finalLayerInfos[a].isFirst=!1,this._finalLayerInfos[a].isLast=!1;this._finalLayerInfos[0].isFirst=!0;this._finalLayerInfos[this._finalLayerInfos.length-1].isLast=!0;for(a=0;a<this._finalLayerInfos.length;a++)if(!this._finalLayerInfos[a].isGraphicLayer()){a&&(this._finalLayerInfos[a-1].isLast=!0);this._finalLayerInfos[a].isFirst=!0;break}}},_onReceiveBasemapGalleryeData:function(a,b,c){"BasemapGallery"===a&&(this._basemapLayers.length=0,f.forEach(c,h.hitch(this,
function(a){this._basemapLayers.push({layerObject:a,id:a.id})}),this),this.update(),this.emit("layerInfosChanged"))},_onBasemapChange:function(a){var b;for(b=this._basemapLayers.length=0;b<a.layers.length;b++)this._basemapLayers.push({layerObject:a.layer[b],id:a.layers[b].id})},_destroyLayerInfos:function(){f.forEach(this._finalLayerInfos,h.hitch(this,function(a){a.destroy()}))},_bindEvents:function(){var a,b,c,d,e,f,n,t,l,m,p;a=q(this.map,"layer-add-result",h.hitch(this,this._onLayersChange,g.ADDED));
b=q(this.map,"layer-remove",h.hitch(this,this._onLayersChange,g.REMOVED));n=k.subscribe("layerInfos/layerReorder",h.hitch(this,this._onLayerReorder));d=k.subscribe("layerInfos/layerInfo/isShowInMapChanged",h.hitch(this,this._onShowInMapChanged));e=k.subscribe("layerInfos/layerInfo/visibleChanged",h.hitch(this,this._onVisibleChanged));f=k.subscribe("layerInfos/layerInfo/filterChanged",h.hitch(this,this._onFilterChanged));t=k.subscribe("layerInfos/layerInfo/rendererChanged",h.hitch(this,this._onRendererChanged));
l=k.subscribe("layerInfos/layerInfo/opacityChanged",h.hitch(this,this._onOpacityChanged));p=k.subscribe("layerInfos/layerInfo/scaleRangeChanged",h.hitch(this,this._onScaleRangeChanged));m=k.subscribe("layerInfos/layerInfo/timeExtentChanged",h.hitch(this,this._onTimeExtentChanged));c=q(this.map,"before-unload",h.hitch(this,function(){a.remove();b.remove();n.remove();d.remove();e.remove();f.remove();t.remove();c.remove();l.remove();p.remove();m.remove();this._destroyLayerInfos()}))},_emitEvent:function(){try{this.emit.apply(this,
arguments)}catch(a){console.warn(a)}},_emitEventForEveryLayerInfo:function(a,b,c){try{f.forEach(b,function(b){b.emitEvent(a,c)},this)}catch(d){console.warn(d)}},_onLayersChange:function(a,b){var c=null,d;b.error||"esri.layers.GraphicsLayer"===b.layer.declaredClass||"esri.layers.LabelLayer"===b.layer.declaredClass||(a===g.ADDED?(this.update(),c=a=this._findLayerInfoById(b.layer.id,b.layer._basemapGalleryLayerType?this._finalBasemapLayerInfos:this._finalLayerInfos),d=g.ADDED,a&&!a.isRootLayer()&&(c=
a.getRootLayerInfo(),d=g.SUBLAYER_ADDED)):(c=a=this._findLayerInfoById(b.layer.id,b.layer._basemapGalleryLayerType?this._finalBasemapLayerInfos:this._finalLayerInfos),d=g.REMOVED,a&&!a.isRootLayer()&&(c=a.getRootLayerInfo(),d=g.SUBLAYER_REMOVED),a&&a.destroy(),this.update()),c&&(b.layer._basemapGalleryLayerType?(this._emitEvent("basemapLayersChanged"),this._emitEvent("basemapLayerInfosChanged",c,d,a)):this._emitEvent("layerInfosChanged",c,d,a)))},_onTableChange:function(a,b){this._emitEvent("tableInfosChanged",
a,b,a)},_onLayersUpdated:function(a,b){a.isTable?this._emitEvent("tableInfosChanged",[a],g.UPDATED,[b]):this._emitEvent("layerInfosChanged",a,g.UPDATED,b)},_onShowInMapChanged:function(a){this._emitEvent("layerInfosIsShowInMapChanged",a);this._emitEventForEveryLayerInfo("isShowInMapChanged",a)},_onVisibleChanged:function(a){this._emitEvent("layerInfosIsVisibleChanged",a);this._emitEventForEveryLayerInfo("isVisibleChanged",a)},_onFilterChanged:function(a,b){this._emitEvent("layerInfosFilterChanged",
a,b);this._emitEventForEveryLayerInfo("filterChanged",a,b)},_onLayerReorder:function(a,b,c){a=this._reorderLayerInfosArray(a,b,c);this._emitEvent("layerInfosReorder",a,g.REORDERED,a)},_onRendererChanged:function(a){this._emitEvent("layerInfosRendererChanged",a);this._emitEventForEveryLayerInfo("rendererChanged",a)},_onOpacityChanged:function(a){this._emitEvent("layerInfosOpacityChanged",a);this._emitEventForEveryLayerInfo("opacityChanged",a)},_onScaleRangeChanged:function(a){this._emitEvent("layerInfosScaleRangeChanged",
a);this._emitEventForEveryLayerInfo("scaleRangeChanged",a)},_onTimeExtentChanged:function(a){this._emitEvent("layerInfosTimeExtentChanged",a);this._emitEventForEveryLayerInfo("timeExtentChanged",a)}});g.getLayerInfoArrayByType=function(a,b){var c=new p,d=[],e=[];g.getInstance(a,a.iteminfo).then(function(a){a.traversal(function(a){var b=a.getLayerType();b.layerInfo=a;d.push(b)});r(d).then(function(a){f.forEach(a,function(a,c){b===a&&e.push(d[c].layerInfo)});c.resolve(e)})});return c};var m=null,l=
null;g.getInstance=function(a,b){var c=new p;c.resolve(g.getInstanceSyncForInit(a,b));return c};g.getInstanceSyncForInit=function(a,b){m&&m!==a&&(l=m=null);l||(l=new g(a,b.itemData),m=a);return l};g.getInstanceSync=function(){return l};g.setInstance=function(a,b){m=a;l=b};g.createInstance=function(a){var b=null;return b=new g(a,a.itemInfo.itemData)};h.mixin(g,{ADDED:"added",REMOVED:"removed",SUBLAYER_ADDED:"subLayerAdded",SUBLAYER_REMOVED:"subLayerRemoved",UPDATED:"updated",REORDERED:"reordered"});
return g});