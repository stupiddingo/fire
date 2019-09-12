// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/CostAnalysis/setting/StatisticsSettings.html":'\x3cdiv class\x3d"esriCTTabNode"\x3e\r\n    \x3cdiv class\x3d"esriCTTabContainer row"\x3e\r\n        \x3cdiv\x3e\r\n            \x3c!--Add New Statistics button--\x3e\r\n            \x3cdiv class\x3d"esriCTStatisticsContainer" data-dojo-attach-point\x3d"btnAddStatisticsNodeWrapper"\x3e\r\n                \x3cdiv data-dojo-attach-point\x3d"btnAddStatisticsNode" class\x3d"esriCTBtnStatisticsAddSection"\x3e\r\n                    \x3cspan class\x3d"esriCTBtnAddStatisticsIcon"\x3e\x3c/span\x3e\r\n                    \x3cspan class\x3d"esriCTBtnStatisticsAddLabel"\x3e ${nls.statisticsSettings.addStatisticsLabel}\x3c/span\x3e\r\n                \x3c/div\x3e\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"esriCTAddLayerTableNode" data-dojo-attach-point\x3d"statisticsLayerTableNode"\x3e\x3c/div\x3e\r\n            \x3cdiv class\x3d"esriCTHidden esriCTNoEditableLayersAvailable" data-dojo-attach-point\x3d"noEditableLayersAvailable"\x3e\r\n                ${nls.costingInfo.noEditableLayersAvailable}\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"additionalProjectCostWrapper"\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3c!--Add/delete/reorder buttons--\x3e\r\n    \x3cdiv class\x3d"esriCTStatisticsButtonParentDiv"\x3e\r\n        \x3cdiv class\x3d"esriCTAddStatisticsIcon esriCTStatisticsButtons" data-dojo-attach-point\x3d"btnAddNode" title\x3d"${nls.statisticsSettings.addNewStatisticsText}"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTDeleteStatisticsIcon esriCTStatisticsButtons" data-dojo-attach-point\x3d"btnCrossNode"\r\n            title\x3d"${nls.statisticsSettings.deleteStatisticsText}"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTStatisticsUpIcon esriCTStatisticsButtons" data-dojo-attach-point\x3d"btnUpNode" title\x3d"${nls.statisticsSettings.moveStatisticsUpText}"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTStatisticsDownIcon esriCTStatisticsButtons" data-dojo-attach-point\x3d"btnDownNode" title\x3d"${nls.statisticsSettings.moveStatisticsDownText}"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare jimu/BaseWidget jimu/dijit/SimpleTable dojo/on dojo/_base/array dojo/query dojo/dom-construct dijit/form/Select dijit/form/ValidationTextBox dijit/_WidgetsInTemplateMixin dojo/text!./StatisticsSettings.html dojo/_base/lang dojo/store/Memory dojo/dom-class dijit/registry dojo/_base/html dojo/dom-style ./ProjectCost".split(" "),function(t,u,v,h,k,g,n,q,w,x,y,e,p,d,l,r,m,z){return t([u,x],{templateString:y,baseClass:"jimu-widget-cost-analysis-statistics-settings",_layerNameStore:null,
_commonStatisticsStoreOption:null,_polygonStatisticsStoreOption:null,_polylineStatisticsStoreOption:null,_pointLayerStatisticsStore:null,_polygonLayerStatisticsStore:null,_polylineLayerStatisticsStore:null,_layerFieldStore:{},_shapeFields:"shape_length shape_area shape__length shape__area shape.len shape.area".split(" "),constructor:function(a){e.mixin(this,a)},postMixInProperties:function(){this.nls.common={};e.mixin(this.nls.common,window.jimuNls.common)},postCreate:function(){this._polylineLayerStatisticsStore=
this._polygonLayerStatisticsStore=this._pointLayerStatisticsStore=this._polylineStatisticsStoreOption=this._polygonStatisticsStoreOption=this._commonStatisticsStoreOption=this._layerNameStore=null;this._layerFieldStore={};this.inherited(arguments);this._init();this._handleClickEvent();this.showActionButtonsInColumn&&this._createProjectCostTable()},_createProjectCostTable:function(){this.additionalProjectCostObj=new z({nls:this.nls,map:this.map,config:this.config},n.create("div",{},this.additionalProjectCostWrapper));
this.additionalProjectCostObj.startup()},_handleClickEvent:function(){this._addButtonClick();this._crossButtonClick();this._upButtonClick();this._downButtonClick()},_init:function(){this._createStatisticsStoreOptions();this._createStatisticsTable();this._layerNameStore||this._createLayerNameStore();this._attachNodeEvents();this._setConfig();this._displayAddStatisticsButtonOrLabel();this._handleActionButtonVisibility()},_displayAddStatisticsButtonOrLabel:function(){this.showActionButtonsInColumn?d.remove(this.btnAddStatisticsNodeWrapper,
"esriCTHidden"):d.add(this.btnAddStatisticsNodeWrapper,"esriCTHidden")},_setConfig:function(){this.config&&this.config.statisticsSettings&&0<this.config.statisticsSettings.length&&k.forEach(this.config.statisticsSettings,e.hitch(this,function(a){this._addLayerRow(a)}))},getConfig:function(){var a,b;a=this._statisticsLayerTable.getRows();b=[];k.forEach(a,e.hitch(this,function(a){b.push({id:a.layerNameDropDown.getValue(),type:a.statisticsTypeDropdown.getValue(),field:a.layerFieldDropdown.getValue(),
label:a.statisticsLabelTextBox.getValue()})}));this.additionalProjectCostObj&&this.additionalProjectCostObj.getConfig();return b},_createStatisticsStoreOptions:function(){this._commonStatisticsStoreOption=[{name:this.nls.statisticsType.averageLabel,value:"avg"},{name:this.nls.statisticsType.countLabel,value:"count"},{name:this.nls.statisticsType.maxLabel,value:"max"},{name:this.nls.statisticsType.minLabel,value:"min"},{name:this.nls.statisticsType.summationLabel,value:"sum"}];this._polygonStatisticsStoreOption=
[{name:this.nls.statisticsType.areaLabel,value:"area"}];this._polylineStatisticsStoreOption=[{name:this.nls.statisticsType.lengthLabel,value:"length"}]},_attachNodeEvents:function(){0===this._layerNameStore.data.length?(d.remove(this.noEditableLayersAvailable,"esriCTHidden"),d.add(this.btnAddStatisticsNodeWrapper,"esriCTHidden"),d.add(this.statisticsLayerTableNode,"esriCTHidden")):(d.add(this.noEditableLayersAvailable,"esriCTHidden"),d.remove(this.btnAddStatisticsNodeWrapper,"esriCTHidden"),d.remove(this.statisticsLayerTableNode,
"esriCTHidden"));this.own(h(this.btnAddStatisticsNode,"click",e.hitch(this,function(){this._layerNameStore.data.length&&(this._addStatisticsBtnClicked(),this.resetAddNewStatisticsDropdown())})))},_createStatisticsTable:function(){var a;this._statisticsLayerTable=new v({fields:[{name:"editable",title:this.nls.statisticsSettings.selectDeselectAllTitle,type:"checkbox",editable:!1,width:this.showActionButtonsInRow?"16px":"0%",hidden:!this.showActionButtonsInRow},{name:"field",title:this.nls.common.layer,
type:"empty",editable:!1,width:"30%"},{name:"field",title:this.nls.common.type,type:"empty",editable:!0,width:this.showActionButtonsInRow?"19%":"18%"},{name:"field",title:this.nls.statisticsSettings.fieldNameTitle,type:"empty",editable:!1,width:"22%"},{name:"field",title:this.nls.statisticsSettings.statisticsTitle,type:"empty",editable:!1,width:this.showActionButtonsInRow?"55px":"20%"},{name:"actions",title:this.nls.common.actions,width:"10%",type:"actions",actions:["up","down","delete"],hidden:!this.showActionButtonsInColumn}],
selectable:!1});this._statisticsLayerTable.placeAt(this.statisticsLayerTableNode);this._statisticsLayerTable.startup();(a=g(".esriCTAddLayerTableNode th .label")[0])&&d.add(a,"esriCTHidden")},_addButtonClick:function(){!0===this.showActionButtonsInRow?(d.remove(this.btnAddNode,"esriCTHidden"),this.own(h(this.btnAddNode,"click",e.hitch(this,function(){this._layerNameStore.data.length&&(this._addStatisticsBtnClicked(),this._handleActionButtonVisibility(),this.resetAddNewStatisticsDropdown())})))):d.add(this.btnAddNode,
"esriCTHidden")},_crossButtonClick:function(){d.remove(this.btnCrossNode,"esriCTHidden");this.own(h(this.btnCrossNode,"click",e.hitch(this,this._deleteLayerRow)))},_upButtonClick:function(){d.remove(this.btnUpNode,"esriCTHidden");this.own(h(this.btnUpNode,"click",e.hitch(this,function(){var a,b;if(!d.contains(this.btnUpNode,"esriCTStatisticsUpIconDisable")){b=this._statisticsLayerTable.getRows();var c=this._statisticsLayerTable.getData();k.forEach(c,e.hitch(this,function(c,d){c.editable&&(a=b[d])}));
this._statisticsLayerTable.onBeforeRowUp(a)&&(c=k.indexOf(b,a),0<c&&(c=b[c-1]))&&(r.place(a,c,"before"),this._statisticsLayerTable.updateUI(),this._statisticsLayerTable.emit("row-up",a))}})))},_downButtonClick:function(){d.remove(this.btnDownNode,"esriCTHidden");this.own(h(this.btnDownNode,"click",e.hitch(this,function(){var a,b;if(!d.contains(this.btnDownNode,"esriCTStatisticsDownIconDisable")){b=this._statisticsLayerTable.getRows();var c=this._statisticsLayerTable.getData();k.forEach(c,e.hitch(this,
function(c,d){c.editable&&(a=b[d])}));this._statisticsLayerTable.onBeforeRowDown(a)&&(c=k.indexOf(b,a),c<b.length-1&&(c=b[c+1]))&&(r.place(a,c,"after"),this._statisticsLayerTable.updateUI(),this._statisticsLayerTable.emit("row-down",a))}})))},_deleteLayerRow:function(){var a=this._statisticsLayerTable.getRows(),b=this._statisticsLayerTable.getData();k.forEach(b,e.hitch(this,function(b,f){b.editable&&this._statisticsLayerTable.deleteRow(a[f])}));0===this._statisticsLayerTable.getRows().length&&(b=
g("th .checkbox")[0],d.contains(b,"checked")&&d.remove(b,"checked"));this._handleActionButtonVisibility()},_checkEditCapabilities:function(a){var b;return(b=a&&a.capabilities?a.capabilities:null)&&-1!==b.indexOf("Delete")&&-1!==b.indexOf("Create")&&-1!==b.indexOf("Update")&&a.globalIdField?!0:!1},_addStatisticsBtnClicked:function(){var a;this._addLayerRow();a=g(".simple-table-title .jimu-checkbox",this.domNode)[0];h(l.byNode(a),"change",e.hitch(this,function(){setTimeout(e.hitch(this,function(){this._handleActionButtonVisibility()}),
0)}))},_handleActionButtonVisibility:function(){var a,b,c=0,f;a=this._statisticsLayerTable.getRows();f=g(".simple-table-title .jimu-checkbox",this.domNode)[0];f=l.byNode(f);k.some(this._statisticsLayerTable.getRows(),e.hitch(this,function(a){b=g(".jimu-checkbox",a)[0];l.byNode(b).checked&&c++}));0===c?d.replace(this.btnCrossNode,"esriCTDeleteStatisticsIconDisable","esriCTDeleteStatisticsIcon"):d.replace(this.btnCrossNode,"esriCTDeleteStatisticsIcon","esriCTDeleteStatisticsIconDisable");a&&1===c?(d.replace(this.btnUpNode,
"esriCTStatisticsUpIcon","esriCTStatisticsUpIconDisable"),d.replace(this.btnDownNode,"esriCTStatisticsDownIcon","esriCTStatisticsDownIconDisable")):(d.replace(this.btnUpNode,"esriCTStatisticsUpIconDisable","esriCTStatisticsUpIcon"),d.replace(this.btnDownNode,"esriCTStatisticsDownIconDisable","esriCTStatisticsDownIcon"));0===a.length?(f.set("status",!1),d.add(f.domNode,"jimu-state-disabled")):(f.set("status",!0),d.remove(f.domNode,"jimu-state-disabled"))},_addLayerRow:function(a){var b,c,f;b=this._statisticsLayerTable.addRow({});
c=g(".simple-table-cell",b.tr);f=g(".simple-table-cell .jimu-checkbox",b.tr)[0];c&&(f&&h(l.byNode(f),"change",e.hitch(this,function(){this._handleActionButtonVisibility()})),b=b.tr,this._addLayerNameDropdown(c[1],b,a),this._addStatisticsDropdown(c[2],b,a),this._addLayerFieldDropdown(c[3],b,a),this._addStatisticsLabelTextBox(c[4],b,a))},_onLayerNameChange:function(a,b,c){var f;this._layerNameStore.data.length&&(f=this._layerNameStore.data[this._layerNameStore.index[a]].geometryType,f=this._getStatisticsTypeStore(f),
b.statisticsTypeDropdown.setStore(f),c&&c.type&&b.statisticsTypeDropdown.set("value",c.type),c=b.statisticsTypeDropdown.getValue(),a=this._layerNameStore.data[this._layerNameStore.index[a]].value,this._layerFieldStore[a]||this._createFieldStore(a),b.layerFieldDropdown.setStore(this._layerFieldStore[a]),b.layerFieldDropdown.reset(),this._onStatisticsTypeChange(c,b))},_onStatisticsTypeChange:function(a,b,c){"count"===a||"length"===a||"area"===a?d.add(b.layerFieldDropdown.domNode,"esriCTHidden"):(d.remove(b.layerFieldDropdown.domNode,
"esriCTHidden"),c&&c.field&&b.layerFieldDropdown.set("value",c.field));this._resetStatisticsTypeWidth(b)},_addLayerNameDropdown:function(a,b,c){a=n.create("div",{"class":"esriCTDropDownContainer"},a);b.layerNameDropDown=new q({name:"layerSelect",store:this._layerNameStore,labelAttr:"name","class":"esriCTLayerNameDropdown"},a);c&&c.id&&b.layerNameDropDown.set("value",c.id);this.own(h(b.layerNameDropDown,"click",e.hitch(this,function(){this._resetLayerNameWidth(b)})));this.own(h(b.layerNameDropDown,
"change",e.hitch(this,function(a){this._resetLayerNameWidth(b);this._onLayerNameChange(a,b,c)})));b.layerNameDropDown.startup()},_createLayerNameStore:function(){var a,b,c=[];a=[];c=[this.config.projectSettings.costingGeometryLayer||"",this.config.projectSettings.projectLayer||"",this.config.projectSettings.pointLayerCentroid||""];this.config.layerSettings.length&&(b=this.config.layerSettings,k.forEach(b,e.hitch(this,function(b){c.push(b.id);var f=this._getFeatureLayerGeometryType(b.id);b.editable&&
f&&a.push({name:b.title,value:b.id,geometryType:f})})));b=this.map.webMapResponse.itemInfo.itemData.operationalLayers;k.forEach(b,e.hitch(this,function(b){"ArcGISFeatureLayer"===b.layerType&&this._checkEditCapabilities(b.layerObject)&&-1===c.indexOf(b.id)&&a.push({name:b.title,value:b.id,geometryType:b.resourceInfo.geometryType})}));this._layerNameStore=new p({idProperty:"value",data:a});this._updateLayerNameOptions()},_updateLayerNameOptions:function(){var a,b;a=g(".esriCTLayerNameDropdown",this.domNode);
k.forEach(a,e.hitch(this,function(a){b=l.byNode(a).get("value");l.byNode(a).set("store",this._layerNameStore);l.byNode(a).set("value",b)}));0===this._layerNameStore.data.length?(d.remove(this.noEditableLayersAvailable,"esriCTHidden"),d.add(this.btnAddStatisticsNodeWrapper,"esriCTHidden"),d.add(this.statisticsLayerTableNode,"esriCTHidden"),d.add(this.additionalProjectCostWrapper,"esriCTHidden")):(d.add(this.noEditableLayersAvailable,"esriCTHidden"),d.remove(this.btnAddStatisticsNodeWrapper,"esriCTHidden"),
d.remove(this.statisticsLayerTableNode,"esriCTHidden"),d.remove(this.additionalProjectCostWrapper,"esriCTHidden"))},_getFeatureLayerGeometryType:function(a){var b=k.filter(this.map.webMapResponse.itemInfo.itemData.operationalLayers,e.hitch(this,function(b){return a===b.id}));return b.length&&b[0].layerObject?b[0].layerObject.geometryType:null},_createStatisticsTypeStore:function(){this._pointLayerStatisticsStore||this._polygonLayerStatisticsStore||this._polylineLayerStatisticsStore||(this._createPointGeometryStatisticsStore(),
this._createPolygonGeometryStatisticsStore(),this._createPolylineGeometryStatisticsStore())},_getStatisticsTypeStore:function(a){switch(a){case "esriGeometryPolygon":return this._polygonLayerStatisticsStore;case "esriGeometryPolyline":return this._polylineLayerStatisticsStore;case "esriGeometryPoint":return this._pointLayerStatisticsStore}},_addStatisticsDropdown:function(a,b,c){var f;a=n.create("div",{"class":"esriCTDropDownContainer"},a);this._createStatisticsTypeStore();f=b.layerNameDropDown._getSelectedOptionsAttr().item.geometryType;
f=this._getStatisticsTypeStore(f);b.statisticsTypeDropdown=new q({name:"statisticsTypeSelect",store:f,labelAttr:"name","class":"esriCTStatisticsTypeDropdown"},a);this.own(h(b.statisticsTypeDropdown,"click",e.hitch(this,function(){this._resetStatisticsTypeWidth(b)})));this.own(h(b.statisticsTypeDropdown,"change",e.hitch(this,function(a){this._resetStatisticsTypeWidth(b);this._onStatisticsTypeChange(a,b,c)})));b.statisticsTypeDropdown.startup()},_createPointGeometryStatisticsStore:function(){this._pointLayerStatisticsStore=
new p({idProperty:"value",data:this._commonStatisticsStoreOption})},_createPolygonGeometryStatisticsStore:function(){this._polygonLayerStatisticsStore=new p({idProperty:"value",data:this._commonStatisticsStoreOption.concat(this._polygonStatisticsStoreOption)})},_createPolylineGeometryStatisticsStore:function(){this._polylineLayerStatisticsStore=new p({idProperty:"value",data:this._commonStatisticsStoreOption.concat(this._polylineStatisticsStoreOption)})},_createFieldStore:function(a){var b,c;b=[];
c=["esriFieldTypeDouble","esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSmallFloat"];this._layerFieldStore[a]||(k.forEach(this.map._layers[a].fields,e.hitch(this,function(a){-1<c.indexOf(a.type)&&-1===this._shapeFields.indexOf(a.name.toLowerCase())&&b.push({name:a.alias||a.name,value:a.name})})),0===b.length&&b.push({name:"\x26nbsp",value:null}),this._layerFieldStore[a]=new p({idProperty:"value",data:b}))},_addLayerFieldDropdown:function(a,b){var c;a=n.create("div",{"class":"esriCTDropDownContainer"},
a);c=b.layerNameDropDown._getSelectedOptionsAttr().value;this._createFieldStore(c);b.layerFieldDropdown=new q({name:"layerFieldDropdown",store:this._layerFieldStore[c],labelAttr:"name","class":"esriCTStatisticsFieldDropdown"},a);this.own(h(b.layerFieldDropdown,"click",e.hitch(this,function(){this._resetLayerFieldWidth(b)})));this.own(h(b.layerFieldDropdown,"change",e.hitch(this,function(){this._resetLayerFieldWidth(b)})));b.layerFieldDropdown.startup();a=b.statisticsTypeDropdown.getValue();this._onStatisticsTypeChange(a,
b)},_addStatisticsLabelTextBox:function(a,b,c){a=n.create("div",{"class":"esriCTTextBoxContainer"},a);b.statisticsLabelTextBox=new w({"class":"esriCTLayerLabelTextBox"},a);c&&c.label&&b.statisticsLabelTextBox.set("value",c.label);b.statisticsLabelTextBox.startup()},_updateStatisticsTable:function(a){var b,c,d;a.layerId?a.editable?c=a.layerId:d=a.layerId:(c=a.lastSelectedId,this.layerInfosObj&&(b=this.layerInfosObj.getLayerInfoById(c))&&b.layerObject&&(this._checkEditCapabilities(b.layerObject)||(c=
null)),d=a.currentSelectedLayerId);d&&(a=this._statisticsLayerTable.getRows(),k.forEach(a,e.hitch(this,function(a){a.layerNameDropDown&&a.layerNameDropDown.get("value")===d&&this._statisticsLayerTable.deleteRow(a)})),this._layerNameStore.remove(d));c&&""!==c&&(b=this.layerInfosObj.getLayerInfoById(c))&&b.layerObject&&(b=b.layerObject,this._layerNameStore.put({name:b.name,value:c,geometryType:b.geometryType}));this._updateLayerNameOptions()},resetAddNewStatisticsDropdown:function(){var a,b,c,d,h;if(a=
g(".simple-table-field.field",this._statisticsLayerTable.domNode))a[0]&&(b=m.getComputedStyle(a[0])),a[1]&&(c=m.getComputedStyle(a[1])),a[2]&&(d=m.getComputedStyle(a[2]));a=g(".esriCTLayerNameDropdown",this._statisticsLayerTable.domNode);k.forEach(a,e.hitch(this,function(a){(a=g(".dijitReset.dijitInline.dijitSelectLabel.dijitValidationTextBoxLabel",a))&&a[0]&&(h=this.showActionButtonsInColumn?59:30,a[0].style.width=parseInt(b.width,10)-h+"px")}));a=g(".esriCTStatisticsTypeDropdown",this._statisticsLayerTable.domNode);
k.forEach(a,e.hitch(this,function(a){(a=g(".dijitReset.dijitInline.dijitSelectLabel.dijitValidationTextBoxLabel",a))&&a[0]&&(h=this.showActionButtonsInColumn?59:30,a[0].style.width=parseInt(c.width,10)-h+"px")}));a=g(".esriCTStatisticsFieldDropdown",this._statisticsLayerTable.domNode);k.forEach(a,e.hitch(this,function(a){(a=g(".dijitReset.dijitInline.dijitSelectLabel.dijitValidationTextBoxLabel",a))&&a[0]&&(h=this.showActionButtonsInColumn?59:30,a[0].style.width=parseInt(d.width,10)-h+"px")}))},_resetLayerNameWidth:function(a){var b,
c;(b=g(".simple-table-field.field",this._statisticsLayerTable.domNode))&&b[0]&&(c=m.getComputedStyle(b[0]));a=g(".dijitReset.dijitInline.dijitSelectLabel.dijitValidationTextBoxLabel",a.layerNameDropDown.domNode);b=this.showActionButtonsInColumn?59:30;a&&a[0]&&(a[0].style.width=parseInt(c.width,10)-b+"px")},_resetStatisticsTypeWidth:function(a){var b,c;(c=g(".simple-table-field.field",this._statisticsLayerTable.domNode))&&c[1]&&(b=m.getComputedStyle(c[1]));a=g(".dijitReset.dijitInline.dijitSelectLabel.dijitValidationTextBoxLabel",
a.statisticsTypeDropdown.domNode);c=this.showActionButtonsInColumn?59:30;a&&a[0]&&(a[0].style.width=parseInt(b.width,10)-c+"px")},_resetLayerFieldWidth:function(a){var b,c;(b=g(".simple-table-field.field",this._statisticsLayerTable.domNode))&&b[2]&&(c=m.getComputedStyle(b[2]));a=g(".dijitReset.dijitInline.dijitSelectLabel.dijitValidationTextBoxLabel",a.layerFieldDropdown.domNode);b=this.showActionButtonsInColumn?59:30;a&&a[0]&&(a[0].style.width=parseInt(c.width,10)-b+"px")}})});