"use strict";(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[77545,85886],{29217:(t,e,o)=>{o.d(e,{Z:()=>s});var n=o(949179),i=o(66575),r=o(173381);const s=function(t){function e(e,o,n,i){t.call(this),this.extent=e,this.pixelRatio_=n,this.resolution=o,this.state=i}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.changed=function(){this.dispatchEvent(r.Z.CHANGE)},e.prototype.getExtent=function(){return this.extent},e.prototype.getImage=function(){return(0,n.O3)()},e.prototype.getPixelRatio=function(){return this.pixelRatio_},e.prototype.getResolution=function(){return this.resolution},e.prototype.getState=function(){return this.state},e.prototype.load=function(){(0,n.O3)()},e}(i.Z)},540188:(t,e,o)=>{o.d(e,{Z:()=>n});const n={POSTRENDER:"postrender",MOVESTART:"movestart",MOVEEND:"moveend"}},286320:(t,e,o)=>{function n(t){return Math.pow(t,3)}function i(t){return 1-n(1-t)}function r(t){return 3*t*t-2*t*t*t}function s(t){return t}o.d(e,{GE:()=>s,Vv:()=>i,YQ:()=>n,rd:()=>r})},878181:(t,e,o)=>{o.d(e,{Z:()=>n});const n={IMAGE:"image",HYBRID:"hybrid",VECTOR:"vector"}},315565:(t,e,o)=>{o.r(e),o.d(e,{default:()=>s});var n=o(898185),i=o(378288),r=function(t){var e=t||{};this.font_=e.font,this.rotation_=e.rotation,this.rotateWithView_=e.rotateWithView,this.scale_=e.scale,this.text_=e.text,this.textAlign_=e.textAlign,this.textBaseline_=e.textBaseline,this.fill_=void 0!==e.fill?e.fill:new n.default({color:"#333"}),this.maxAngle_=void 0!==e.maxAngle?e.maxAngle:Math.PI/4,this.placement_=void 0!==e.placement?e.placement:i.Z.POINT,this.overflow_=!!e.overflow,this.stroke_=void 0!==e.stroke?e.stroke:null,this.offsetX_=void 0!==e.offsetX?e.offsetX:0,this.offsetY_=void 0!==e.offsetY?e.offsetY:0,this.backgroundFill_=e.backgroundFill?e.backgroundFill:null,this.backgroundStroke_=e.backgroundStroke?e.backgroundStroke:null,this.padding_=void 0===e.padding?null:e.padding};r.prototype.clone=function(){return new r({font:this.getFont(),placement:this.getPlacement(),maxAngle:this.getMaxAngle(),overflow:this.getOverflow(),rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),scale:this.getScale(),text:this.getText(),textAlign:this.getTextAlign(),textBaseline:this.getTextBaseline(),fill:this.getFill()?this.getFill().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,offsetX:this.getOffsetX(),offsetY:this.getOffsetY(),backgroundFill:this.getBackgroundFill()?this.getBackgroundFill().clone():void 0,backgroundStroke:this.getBackgroundStroke()?this.getBackgroundStroke().clone():void 0})},r.prototype.getOverflow=function(){return this.overflow_},r.prototype.getFont=function(){return this.font_},r.prototype.getMaxAngle=function(){return this.maxAngle_},r.prototype.getPlacement=function(){return this.placement_},r.prototype.getOffsetX=function(){return this.offsetX_},r.prototype.getOffsetY=function(){return this.offsetY_},r.prototype.getFill=function(){return this.fill_},r.prototype.getRotateWithView=function(){return this.rotateWithView_},r.prototype.getRotation=function(){return this.rotation_},r.prototype.getScale=function(){return this.scale_},r.prototype.getStroke=function(){return this.stroke_},r.prototype.getText=function(){return this.text_},r.prototype.getTextAlign=function(){return this.textAlign_},r.prototype.getTextBaseline=function(){return this.textBaseline_},r.prototype.getBackgroundFill=function(){return this.backgroundFill_},r.prototype.getBackgroundStroke=function(){return this.backgroundStroke_},r.prototype.getPadding=function(){return this.padding_},r.prototype.setOverflow=function(t){this.overflow_=t},r.prototype.setFont=function(t){this.font_=t},r.prototype.setMaxAngle=function(t){this.maxAngle_=t},r.prototype.setOffsetX=function(t){this.offsetX_=t},r.prototype.setOffsetY=function(t){this.offsetY_=t},r.prototype.setPlacement=function(t){this.placement_=t},r.prototype.setFill=function(t){this.fill_=t},r.prototype.setRotation=function(t){this.rotation_=t},r.prototype.setScale=function(t){this.scale_=t},r.prototype.setStroke=function(t){this.stroke_=t},r.prototype.setText=function(t){this.text_=t},r.prototype.setTextAlign=function(t){this.textAlign_=t},r.prototype.setTextBaseline=function(t){this.textBaseline_=t},r.prototype.setBackgroundFill=function(t){this.backgroundFill_=t},r.prototype.setBackgroundStroke=function(t){this.backgroundStroke_=t},r.prototype.setPadding=function(t){this.padding_=t};const s=r},378288:(t,e,o)=>{o.d(e,{Z:()=>n});const n={POINT:"point",LINE:"line"}}}]);