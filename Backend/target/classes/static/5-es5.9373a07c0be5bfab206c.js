(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{CICg:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),a=function(){},d=u("pMnS"),o=u("SVse"),s=u("DQLy"),i=u("zP0r"),t=function(){function l(l,n){this.routeService=l,this.store=n,this.context="CommandListComponent"}var n=l.prototype;return n.ngOnInit=function(){var l=this;this.routeService.notInHome(),this.store.pipe(Object(s.v)("actionReducer"),Object(i.a)(1)).subscribe(function(n){console.log("expandiendo una opcion: "+n),l.expandBody(parseInt(n))})},n.expandBody=function(l){this.currentBody=l===this.currentBody?null:l},l}(),c=u("9jJz"),r=e["\u0275crt"]({encapsulation:2,styles:[],data:{animation:[{type:7,name:"enterAnimation",definitions:[{type:1,expr:":enter",animation:[{type:6,styles:{opacity:"0",transformOrigin:"100% 0"},offset:null},{type:4,styles:{type:6,styles:{opacity:"1",transformOrigin:"100% 0"},offset:null},timings:"350ms cubic-bezier(0.39, 0.575, 0.565, 1)"}],options:null},{type:1,expr:":leave",animation:[{type:6,styles:{opacity:"1",transformOrigin:"100% 0"},offset:null},{type:4,styles:{type:6,styles:{height:"0px",opacity:"0",transformOrigin:"100% 0"},offset:null},timings:"350ms cubic-bezier(0.39, 0.575, 0.565, 1)"}],options:null}],options:{}}]}});function p(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"i",[["class","fas fa-angle-down"]],null,null,null,null,null))],null,null)}function f(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"i",[["class","fas fa-angle-up"]],null,null,null,null,null))],null,null)}function m(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,31,"div",[["class","col-12"]],[[24,"@enterAnimation",0]],null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,30,"div",[["class","row drop-row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,29,"div",[["class","col"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,28,"ul",[["class","pl-1"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,2,"li",[["class","mt-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,1,"span",[["class","drop-badge"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[' "Abrir" + nombre de la pantalla/secci\xf3n '])),(l()(),e["\u0275eld"](7,0,null,null,1,"span",[["class","c-gray"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Abre la pantalla/secci\xf3n especificada"])),(l()(),e["\u0275eld"](9,0,null,null,0,"hr",[["class","bg-blue"]],null,null,null,null,null)),(l()(),e["\u0275eld"](10,0,null,null,2,"li",[["class","mt-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](11,0,null,null,1,"span",[["class","drop-badge"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[' "Inicio" '])),(l()(),e["\u0275eld"](13,0,null,null,1,"span",[["class","c-gray"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Muestra la pantalla principal"])),(l()(),e["\u0275eld"](15,0,null,null,0,"hr",[["class","bg-blue"]],null,null,null,null,null)),(l()(),e["\u0275eld"](16,0,null,null,4,"li",[["class","mt-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](17,0,null,null,3,"span",[["class","drop-badge"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[' "Aceptar" (Modal/Formulario) '])),(l()(),e["\u0275eld"](19,0,null,null,1,"span",[["style","color: #f16950;"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["(No disponible)"])),(l()(),e["\u0275eld"](21,0,null,null,1,"span",[["class","c-gray"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Cierra el modal"])),(l()(),e["\u0275eld"](23,0,null,null,0,"hr",[["class","bg-blue"]],null,null,null,null,null)),(l()(),e["\u0275eld"](24,0,null,null,4,"li",[["class","mt-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](25,0,null,null,3,"span",[["class","drop-badge"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[' "Cancelar" (Modal/Formulario) '])),(l()(),e["\u0275eld"](27,0,null,null,1,"span",[["style","color: #f16950;"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["(No disponible)"])),(l()(),e["\u0275eld"](29,0,null,null,1,"span",[["class","c-gray"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Cancela la acci\xf3n y cierra el modal"])),(l()(),e["\u0275eld"](31,0,null,null,0,"hr",[["class","bg-blue"]],null,null,null,null,null))],null,function(l,n){l(n,0,0,void 0)})}function g(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"i",[["class","fas fa-angle-down"]],null,null,null,null,null))],null,null)}function v(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"i",[["class","fas fa-angle-up"]],null,null,null,null,null))],null,null)}function y(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,19,"div",[["class","col-12"]],[[24,"@enterAnimation",0]],null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,18,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,17,"div",[["class","col"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,16,"ul",[["class","pl-1"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,4,"li",[["class","mt-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,3,"span",[["class","drop-badge"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[' "Guardar" '])),(l()(),e["\u0275eld"](7,0,null,null,1,"span",[["style","color: #f16950;"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["(No disponible)"])),(l()(),e["\u0275eld"](9,0,null,null,1,"span",[["class","c-gray"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Guarda la configuraci\xf3n actual"])),(l()(),e["\u0275eld"](11,0,null,null,0,"hr",[["class","bg-blue"]],null,null,null,null,null)),(l()(),e["\u0275eld"](12,0,null,null,4,"li",[["class","mt-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](13,0,null,null,3,"span",[["class","drop-badge"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[' "Valores iniciales" '])),(l()(),e["\u0275eld"](15,0,null,null,1,"span",[["style","color: #f16950;"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["(No disponible)"])),(l()(),e["\u0275eld"](17,0,null,null,1,"span",[["class","c-gray"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Llena el formulario con valores por defecto"])),(l()(),e["\u0275eld"](19,0,null,null,0,"hr",[["class","bg-blue"]],null,null,null,null,null))],null,function(l,n){l(n,0,0,void 0)})}function b(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"i",[["class","fas fa-angle-down"]],null,null,null,null,null))],null,null)}function I(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"i",[["class","fas fa-angle-up"]],null,null,null,null,null))],null,null)}function w(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,12,"div",[["class","col-12"]],[[24,"@enterAnimation",0]],null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,11,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,10,"div",[["class","col"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,9,"ul",[["class","pl-1"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,5,"li",[["class","mt-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,4,"span",[["class","drop-badge"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[' "Terminar " + '])),(l()(),e["\u0275eld"](7,0,null,null,1,"span",[["style","color: #f16950;"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["C_Id"])),(l()(),e["\u0275ted"](-1,null,[" (o nombre) de la aplicaci\xf3n/proceso "])),(l()(),e["\u0275eld"](10,0,null,null,1,"span",[["class","c-gray"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Termina la aplicaci\xf3n/proceso especificado"])),(l()(),e["\u0275eld"](12,0,null,null,0,"hr",[["class","bg-blue"]],null,null,null,null,null))],null,function(l,n){l(n,0,0,void 0)})}function C(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,43,"div",[["class","command-list flip-in-ver-right"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,4,"div",[["class","row mb-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,3,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,2,"h5",[],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,0,"i",[["class","fas fa-list-ul"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Comandos disponibles para control por voz "])),(l()(),e["\u0275eld"](6,0,null,null,11,"div",[["class","row p-2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,10,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,7,"div",[["class","drop-option dropdown"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.expandBody(1)&&e),e},null,null)),(l()(),e["\u0275eld"](9,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["1. Comandos generales (se pueden usar en cualquier pantalla)"])),(l()(),e["\u0275eld"](11,0,null,null,0,"div",[["class","spacer"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,p)),e["\u0275did"](13,16384,null,0,o.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,f)),e["\u0275did"](15,16384,null,0,o.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,m)),e["\u0275did"](17,16384,null,0,o.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](18,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](19,0,null,null,11,"div",[["class","row p-2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](20,0,null,null,10,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](21,0,null,null,7,"div",[["class","drop-option dropdown"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.expandBody(2)&&e),e},null,null)),(l()(),e["\u0275eld"](22,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["2. Formularios/Inputs (Comandos Tipo 2)"])),(l()(),e["\u0275eld"](24,0,null,null,0,"div",[["class","spacer"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,g)),e["\u0275did"](26,16384,null,0,o.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,v)),e["\u0275did"](28,16384,null,0,o.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,y)),e["\u0275did"](30,16384,null,0,o.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](31,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](32,0,null,null,11,"div",[["class","row p-2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](33,0,null,null,10,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](34,0,null,null,7,"div",[["class","drop-option dropdown"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.expandBody(3)&&e),e},null,null)),(l()(),e["\u0275eld"](35,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["3. Pantalla: Aplicaciones en ejecuci\xf3n"])),(l()(),e["\u0275eld"](37,0,null,null,0,"div",[["class","spacer"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,b)),e["\u0275did"](39,16384,null,0,o.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,I)),e["\u0275did"](41,16384,null,0,o.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,w)),e["\u0275did"](43,16384,null,0,o.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,13,0,1!==u.currentBody),l(n,15,0,1===u.currentBody),l(n,17,0,1===u.currentBody),l(n,26,0,2!==u.currentBody),l(n,28,0,2===u.currentBody),l(n,30,0,2===u.currentBody),l(n,39,0,3!==u.currentBody),l(n,41,0,3===u.currentBody),l(n,43,0,3===u.currentBody)},null)}var h=e["\u0275ccf"]("app-command-list",t,function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-command-list",[],null,null,null,C,r)),e["\u0275did"](1,114688,null,0,t,[c.a,s.l],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),R=u("iInd"),N=function(){};u.d(n,"CommandListModuleNgFactory",function(){return B});var B=e["\u0275cmf"](a,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[d.a,h]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,o.NgLocalization,o.NgLocaleLocalization,[e.LOCALE_ID,[2,o["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](1073742336,o.CommonModule,o.CommonModule,[]),e["\u0275mpd"](1073742336,R.m,R.m,[[2,R.r],[2,R.k]]),e["\u0275mpd"](1073742336,N,N,[]),e["\u0275mpd"](1073742336,a,a,[]),e["\u0275mpd"](1024,R.i,function(){return[[{path:"",component:t}]]},[])])})}}]);