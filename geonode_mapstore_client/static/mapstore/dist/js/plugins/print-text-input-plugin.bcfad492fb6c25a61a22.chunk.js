"use strict";(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[77236],{747812:(e,n,t)=>{t.r(n),t.d(n,{TextInput:()=>f,default:()=>g});var r=t(124852),a=t.n(r),o=t(675263),l=t.n(o),c=t(171703),s=t(322843),i=t(86638),p=t(986069),u=t(757588),d=t(227361),m=t.n(d);function v(){return v=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},v.apply(this,arguments)}var f=function(e,n){var t=e.spec,o=e.property,l=e.label,c=e.placeholder,s=e.actions,p=e.onChangeParameter,d=e.path,f=void 0===d?"params.":d,g=e.type,h=void 0===g?"text":g,b=e.additionalProperty,y=void 0===b||b,C=f+o;return(0,r.useEffect)((function(){var e;y&&s.addParameter(o,null!==(e=m()(t,C))&&void 0!==e?e:"")}),[]),a().createElement(u.FormGroup,null,l&&a().createElement(u.ControlLabel,null,(0,i.S$)(n.messages,l))||null,a().createElement(u.FormControl,v({},function(e){return"textarea"!==e?{type:e}:{componentClass:e}}(h),{value:m()(t,C),placeholder:c&&(0,i.S$)(n.messages,c),onChange:function(e){return p(C,e.target.value)}})))};f.contextTypes={messages:l().object};const g=(0,s.rx)("PrintTextInput",{component:(0,c.connect)((function(e){var n;return{spec:(null==e||null===(n=e.print)||void 0===n?void 0:n.spec)||{}}}),{onChangeParameter:p.d$})(f),containers:{Print:{priority:1}}})}}]);