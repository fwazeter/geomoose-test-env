function ZoomToAction(t,e){this.extent=e.extent?e.extent:null,this.run=function(){e.extent?t.zoomToExtent(e.extent):alert("An extent was not defined for this action")}}"undefined"!=typeof module&&(module.exports=ZoomToAction);