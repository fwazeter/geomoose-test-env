var app=new gm3.Application({mapserver_url:CONFIG.mapserver_url,mapfile_root:CONFIG.mapfile_root,map:{scaleLine:{enabled:!0,units:"imperial"}},mapbooks:{default:"mapbook.xml",editing:"mapbook-editing.xml",test:"mapbook-test-servers.xml"}});app.uiUpdate=function(e){"service-manager"!=e.hint&&"service-start"!=e.hint||(showTabByName("service-tab"),app.clearHint())},app.loadMapbook().then((function(){app.setView({center:app.lonLatToMeters(-93.16,44.55),zoom:12});var e=new gm3.trackers.LocalStorageTracker(app.store),a=new gm3.trackers.HashTracker(app.store);e.restore(),a.restore(),app.addProjection({ref:"EPSG:26915",def:"+proj=utm +zone=15 +ellps=GRS80 +datum=NAD83 +units=m +no_defs"}),app.registerService("identify",IdentifyService),app.registerService("search-runways",SearchService,{fields:[{type:"text",label:"Name",name:"Name"}],searchLayers:["ags-polygons-query/runways"],validateFieldValues:function(e){let a=0;const t={valid:!0,message:null};return void 0!==e.Name&&""!==e.Name&&a++,0===a&&(t.valid=!1,t.message="Please complete at least one field."),t}}),app.registerService("search",SearchService,{fields:[{type:"text",label:"Owner Name",name:"OWNER_NAME",helpText:"(i.e. Johnson)"},{type:"text",label:"Street/Address",name:"OWN_ADD_L1"},{type:"text",label:"City/State/ZIP",name:"OWN_ADD_L3",placeHolder:"Farmington"}],searchLayers:["vector-parcels/parcels"],validateFieldValues:function(e){let a=0;const t={valid:!0,message:null};return void 0!==e.OWNER_NAME&&""!==e.OWNER_NAME&&a++,void 0!==e.OWN_ADD_L1&&""!==e.OWN_ADD_L1&&a++,void 0!==e.OWN_ADD_L3&&""!==e.OWN_ADD_L3&&a++,0===a&&(t.valid=!1,t.message="Please complete at least one field."),t}}),app.registerService("single-search",SearchService,{fields:[{type:"text",label:"Search",name:"TERM"}],prepareFields:function(e){const a=e[0].value.split(" "),t=["OWNER_NAME","OWN_ADD_L1","OWN_ADD_L2"];for(var o=["or"],r=0,s=t.length;r<s;r++){const e=["and"];for(var n=0,i=a.length;n<i;n++){const o=a[n];e.push({comparitor:"ilike",name:t[r],value:"%"+o+"%"})}o.push(e)}return[o]},searchLayers:["vector-parcels/parcels"],validateFieldValues:function(e){const a={valid:!0,message:null};return void 0!==e.TERM&&""!==e.TERM||(a.valid=!1,a.message="Please complete at least one field."),a},zoomToResults:!0}),app.registerService("search-firestations",SearchService,{searchLayers:["firestations/fire_stations"],fields:[{type:"text",label:"Station city",name:"Dak_GIS__4"}]}),app.registerService("select",SelectService,{defaultLayer:"vector-parcels/parcels",keepAlive:!0,results:{showBufferAll:!0,showLayerCount:!1}}),app.registerService("buffer-select",SelectService,{drawToolsLabel:"",tools:{buffer:!0},alias:"select"}),app.registerService("geocode",OSMGeocoder,{}),app.registerAction("findme",FindMeAction),app.registerAction("fullextent",ZoomToAction,{extent:app.bboxToMeters(-97.5,43.5,-88.2,49.2)}),app.add(gm3.components.Catalog,"catalog"),app.add(gm3.components.Favorites,"favorites"),app.add(gm3.components.VisibleLayers,"visible-layers"),app.add(gm3.components.Toolbar,"toolbar"),app.add(gm3.components.Grid,"results-grid"),app.add(gm3.components.Version,"version");var t=[{label:"X,Y",ref:"xy"},{label:"USNG",ref:"usng"},{label:"Lat,Lon",ref:"latlon"}];app.add(gm3.components.CoordinateDisplay,"coordinate-display",{projections:t}),app.add(gm3.components.ServiceManager,"service-tab",{services:!0,measureToolOptions:{pointProjections:t,initialUnits:"mi"}}),app.add(gm3.components.JumpToExtent,"jump-to-extent",{locations:[{label:"Parcel Boundaries",extent:app.bboxToMeters(-93.3,44.47,-93,44.63)},{label:"Duluth harbor",extent:app.bboxToMeters(-92.12,46.74,-92.08,46.78)},{label:"Minneapolis",extent:app.bboxToMeters(-93.58,44.55,-93,45.2228)},{label:"Dakota County",extent:app.bboxToMeters(-93.4,44.5,-92.7,44.91)},{label:"Grant County",extent:app.bboxToMeters(-96.31,45.58,-95.74,46.23)},{label:"Minnesota",extent:[-10807e3,5440700,-9985100,6345700]}]}),app.add(gm3.components.Map,"map",{}),app.add(gm3.components.PrintModal,"print-preview",{}),app.registerAction("print",(function(){this.run=function(){app.showModal("print")}}),{}),app.add(gm3.components.BookmarkModal,"bookmark-modal",{}),app.registerAction("bookmark",(function(){this.run=function(){app.showModal("bookmark")}}),{}),app.registerAction("reload",(function(){this.run=function(){app.confirm("reload-okay","Are you sure you want to start over? All unsaved work will be lost.",(function(e){"confirm"===e&&(document.location.hash="",document.location.search.length>0?document.location.search="":document.location.reload())}))}})),e.startTracking(),a.startTracking(),showTab("catalog"),app.startServiceFromQuery()}));