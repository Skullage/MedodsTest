(function(){"use strict";var e={4725:function(e,t,s){var r=s(6369),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("BaseInput",{staticStyle:{"grid-area":"lastname"},attrs:{label:"Фамилия",errors:e.v$.attributes.lastname.$errors,required:""},model:{value:e.v$.attributes.lastname.$model,callback:function(t){e.$set(e.v$.attributes.lastname,"$model",t)},expression:"v$.attributes.lastname.$model"}}),t("BaseInput",{staticStyle:{"grid-area":"firstname"},attrs:{label:"Имя",errors:e.v$.attributes.firstname.$errors,required:""},model:{value:e.v$.attributes.firstname.$model,callback:function(t){e.$set(e.v$.attributes.firstname,"$model",t)},expression:"v$.attributes.firstname.$model"}}),t("BaseInput",{staticStyle:{"grid-area":"surname"},attrs:{label:"Отчество",errors:e.v$.attributes.surname.$errors},model:{value:e.v$.attributes.surname.$model,callback:function(t){e.$set(e.v$.attributes.surname,"$model",t)},expression:"v$.attributes.surname.$model"}}),t("BaseInput",{staticStyle:{"grid-area":"phone"},attrs:{label:"Номер телефона","max-length":10,type:"tel",errors:e.v$.attributes.phoneNumber.$errors,required:""},model:{value:e.v$.attributes.phoneNumber.$model,callback:function(t){e.$set(e.v$.attributes.phoneNumber,"$model",t)},expression:"v$.attributes.phoneNumber.$model"}}),t("BaseInput",{staticStyle:{"grid-area":"birthday"},attrs:{label:"Дата рождения",type:"date",errors:e.v$.attributes.birthday.$errors,required:""},model:{value:e.v$.attributes.birthday.$model,callback:function(t){e.$set(e.v$.attributes.birthday,"$model",t)},expression:"v$.attributes.birthday.$model"}}),t("BaseRadioButtonGroup",{staticStyle:{"grid-area":"gender"},attrs:{label:"Пол",options:e.genderList,name:"gender"},model:{value:e.attributes.selectedGender,callback:function(t){e.$set(e.attributes,"selectedGender",t)},expression:"attributes.selectedGender"}}),t("base-select",{staticStyle:{"grid-area":"doctor"},attrs:{options:e.doctorList,label:"Лечащий врач"},model:{value:e.attributes.selectedDoctor,callback:function(t){e.$set(e.attributes,"selectedDoctor",t)},expression:"attributes.selectedDoctor"}}),t("base-select",{staticStyle:{"grid-area":"group"},attrs:{options:e.groupList,label:"Группа клиентов",errors:e.v$.attributes.selectedGroup.$errors,multiple:"",required:""},model:{value:e.v$.attributes.selectedGroup.$model,callback:function(t){e.$set(e.v$.attributes.selectedGroup,"$model",t)},expression:"v$.attributes.selectedGroup.$model"}}),t("div",{staticStyle:{"grid-area":"dismsg"}},[t("base-checkbox",{attrs:{option:"Не отправлять СМС",name:"disallow"},model:{value:e.attributes.allowMsg,callback:function(t){e.$set(e.attributes,"allowMsg",t)},expression:"attributes.allowMsg"}})],1),t("BaseInput",{staticStyle:{"grid-area":"index"},attrs:{label:"Индекс",type:"number",errors:e.v$.address.index.$errors},model:{value:e.v$.address.index.$model,callback:function(t){e.$set(e.v$.address.index,"$model",t)},expression:"v$.address.index.$model"}}),t("BaseInput",{staticStyle:{"grid-area":"country"},attrs:{label:"Страна",errors:e.v$.address.country.$errors},model:{value:e.v$.address.country.$model,callback:function(t){e.$set(e.v$.address.country,"$model",t)},expression:"v$.address.country.$model"}}),t("BaseInput",{staticStyle:{"grid-area":"region"},attrs:{label:"Область",errors:e.v$.address.region.$errors},model:{value:e.v$.address.region.$model,callback:function(t){e.$set(e.v$.address.region,"$model",t)},expression:"v$.address.region.$model"}}),t("BaseInput",{staticStyle:{"grid-area":"city"},attrs:{label:"Город",errors:e.v$.address.city.$errors,required:""},model:{value:e.v$.address.city.$model,callback:function(t){e.$set(e.v$.address.city,"$model",t)},expression:"v$.address.city.$model"}}),t("BaseInput",{staticStyle:{"grid-area":"street"},attrs:{label:"Улица",errors:e.v$.address.street.$errors},model:{value:e.v$.address.street.$model,callback:function(t){e.$set(e.v$.address.street,"$model",t)},expression:"v$.address.street.$model"}}),t("BaseInput",{staticStyle:{"grid-area":"house"},attrs:{label:"Дом",type:"number",errors:e.v$.address.house.$errors},model:{value:e.v$.address.house.$model,callback:function(t){e.$set(e.v$.address.house,"$model",t)},expression:"v$.address.house.$model"}}),t("base-select",{staticStyle:{"grid-area":"documentType"},attrs:{options:e.documentTypes,label:"Тип документа",errors:e.v$.passport.selectedType.$errors,required:""},model:{value:e.v$.passport.selectedType.$model,callback:function(t){e.$set(e.v$.passport.selectedType,"$model",t)},expression:"v$.passport.selectedType.$model"}}),t("BaseInput",{staticStyle:{"grid-area":"series"},attrs:{label:"Серия",type:"number",errors:e.v$.passport.series.$errors},model:{value:e.v$.passport.series.$model,callback:function(t){e.$set(e.v$.passport.series,"$model",t)},expression:"v$.passport.series.$model"}}),t("BaseInput",{staticStyle:{"grid-area":"documentNumber"},attrs:{label:"Номер",type:"number",errors:e.v$.passport.number.$errors},model:{value:e.v$.passport.number.$model,callback:function(t){e.$set(e.v$.passport.number,"$model",t)},expression:"v$.passport.number.$model"}}),t("BaseInput",{staticStyle:{"grid-area":"issuedBy"},attrs:{label:"Кем выдан"},model:{value:e.passport.issuedBy,callback:function(t){e.$set(e.passport,"issuedBy",t)},expression:"passport.issuedBy"}}),t("BaseInput",{staticStyle:{"grid-area":"issueDate"},attrs:{label:"Дата выдачи",type:"date",errors:e.v$.passport.issueDate.$errors,required:""},model:{value:e.v$.passport.issueDate.$model,callback:function(t){e.$set(e.v$.passport.issueDate,"$model",t)},expression:"v$.passport.issueDate.$model"}}),t("base-button",{staticStyle:{"grid-area":"submit"}},[e._v("Создать")])],1),t("base-popup",{ref:"popup"},[e._v("Пользователь успешно создан!")])],1)},o=[],i=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[t("div",{staticClass:"input-group",class:{"red-border":e.errors.length>0}},["tel"===e.type?t("span",{staticClass:"span"},[e._v("+7")]):e._e(),t("input",{staticClass:"input",class:{tel:"tel"===e.type},attrs:{type:e.type,required:e.required,placeholder:"",maxlength:e.maxLength},domProps:{value:e.$attrs.value},on:{input:e.updateValue}}),t("label",{staticClass:"label",class:[{exception:e.typeExceptions.includes(e.type)},{required:e.required}]},[e._v(e._s(e.label))])]),t("field-error",{attrs:{errors:e.errors}})],1)},l=[],n=function(){var e=this,t=e._self._c;e._self._setupProxy;return e.errors.length>0?t("div",{staticClass:"error"},[t("ul",{staticClass:"error-list"},e._l(e.errors,(function(s){return t("li",{key:s.$uid},[e._v(e._s(s.$message))])})),0)]):e._e()},u=[],d=(0,r.aZ)({name:"FieldError",props:{errors:{type:Array,required:!0}}}),p=d,c=s(1001),m=(0,c.Z)(p,n,u,!1,null,"d5e0e824",null),$=m.exports,v=(0,r.aZ)({name:"BaseInput",components:{FieldError:$},data(){return{typeExceptions:["date","tel"]}},props:{label:String,required:{type:Boolean,default:!1},type:{type:String,default:"text"},maxLength:Number,errors:{type:Array,default:()=>[]}},methods:{updateValue(e){this.$emit("input",e.target.value)}}}),b=v,g=(0,c.Z)(b,i,l,!1,null,"628b3dac",null),h=g.exports,f=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("fieldset",[t("legend",{staticClass:"legend",class:{required:e.required}},[e._v(e._s(e.label))]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.values,expression:"values"}],staticClass:"select",class:{multiple:e.multiple},attrs:{required:e.required,multiple:e.multiple},on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.values=t.target.multiple?s:s[0]},function(t){return e.$emit("input",e.values)}]}},e._l(e.options,(function(s,r){return t("option",{key:r,staticClass:"option",domProps:{value:s,selected:e.values===s}},[e._v(e._s(s)+" ")])})),0),t("field-error",{attrs:{errors:e.errors}})],1)},y=[],B=(0,r.aZ)({name:"BaseSelect",components:{FieldError:$},props:{label:String,required:Boolean,options:{type:Array,required:!0},multiple:Boolean,errors:{type:Array,default:()=>[]}},data(){return{values:this.$attrs.value}}}),x=B,_=(0,c.Z)(x,f,y,!1,null,"4f0c7851",null),M=_.exports,w=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("label",{staticClass:"toggle",attrs:{for:e.option}},[t("input",{staticClass:"toggle__input",attrs:{type:"checkbox",id:e.option},domProps:{checked:e.$attrs.value},on:{change:function(t){return e.$emit("input",t.target.checked)}}}),t("span",{staticClass:"toggle-track"},[t("span",{staticClass:"toggle-indicator"},[t("span",{staticClass:"checkMark"},[t("svg",{attrs:{viewBox:"0 0 24 24",id:"ghq-svg-check",role:"presentation","aria-hidden":"true"}},[t("path",{attrs:{d:"M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"}})])])])]),e._v(" "+e._s(e.option)+" ")])},q=[],k=(0,r.aZ)({name:"BaseCheckbox",props:{option:{type:String,required:!0}}}),S=k,C=(0,c.Z)(S,w,q,!1,null,"98708620",null),P=C.exports,Z=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("button",{staticClass:"button"},[e._t("default")],2)},L=[],I=(0,r.aZ)({name:"BaseButton"}),G=I,T=(0,c.Z)(G,Z,L,!1,null,"7485c89f",null),D=T.exports,O=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"popup",class:{show:e.show}},[e._t("default")],2)},E=[],N=(0,r.aZ)({name:"BaseModal",data(){return{show:!1}},methods:{showPopup(){this.show=!0,setTimeout((()=>{this.show=!1}),5e3)}}}),A=N,j=(0,c.Z)(A,O,E,!1,null,"a967dd5c",null),R=j.exports,F=s(4219),V=s(5420),z=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("fieldset",[t("legend",{staticClass:"legend",class:{required:e.required}},[e._v(e._s(e.label))]),t("div",{staticClass:"options-list"},e._l(e.options,(function(s,r){return t("base-radio-button",{key:r,attrs:{name:e.name,option:s,checked:s===e.$attrs.value,required:e.required}})})),1)])},X=[],H=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("label",{staticClass:"label",attrs:{for:e.option}},[t("input",{staticClass:"input",attrs:{type:"radio",id:e.option,name:e.name,required:e.required},domProps:{value:e.option,checked:e.$attrs.checked},on:{change:function(t){return e.$parent.$emit("input",e.option)}}}),e._v(" "+e._s(e.option)+" ")])},J=[],K=(0,r.aZ)({name:"BaseRadioButton",props:{option:{type:String,required:!0},name:{type:String,required:!0},required:Boolean}}),Q=K,U=(0,c.Z)(Q,H,J,!1,null,"5dea5650",null),W=U.exports,Y=(0,r.aZ)({name:"BaseRadioButtonGroup",components:{BaseRadioButton:W},props:{label:String,name:{type:String,required:!0},required:Boolean,options:{type:Array,required:!0}},methods:{updateValue(e){this.$emit("input",e.target.value)}}}),ee=Y,te=(0,c.Z)(ee,z,X,!1,null,"d0ab9276",null),se=te.exports;const re=V.BM.regex(/[A-zА-яЁё]/);var ae={name:"App",components:{BaseButton:D,BaseCheckbox:P,BaseSelect:M,BaseRadioButtonGroup:se,BaseInput:h,BasePopup:R},setup:()=>({v$:(0,F.Xw)()}),validations(){return{attributes:{firstname:{required:V.BM.withMessage("Заполните поле",V.C1),alpha:V.BM.withMessage("Можно использовать только буквы",re)},lastname:{required:V.BM.withMessage("Заполните поле",V.C1),alpha:V.BM.withMessage("Можно использовать только буквы",re)},surname:{alpha:V.BM.withMessage("Можно использовать только буквы",re)},birthday:{required:V.BM.withMessage("Заполните поле",V.C1)},phoneNumber:{required:V.BM.withMessage("Заполните поле",V.C1),integer:V.BM.withMessage("Можно использовать только цифры",V._L),minLength:V.BM.withMessage((({$params:e})=>`Минимальное количество символов - ${e.min}`),(0,V.Ei)(10)),maxLength:V.BM.withMessage((({$params:e})=>`Максимальное количество символов - ${e.max}`),(0,V.BS)(10))},selectedGroup:{required:V.BM.withMessage("Заполните поле",V.C1)}},address:{index:{integer:V.BM.withMessage("Можно использовать только цифры",V._L)},country:{alpha:V.BM.withMessage("Можно использовать только буквы",re)},region:{alpha:V.BM.withMessage("Можно использовать только буквы",re)},city:{required:V.BM.withMessage("Заполните поле",V.C1),alpha:V.BM.withMessage("Можно использовать только буквы",re)},street:{alpha:V.BM.withMessage("Можно использовать только буквы",re)},house:{integer:V.BM.withMessage("Можно использовать только цифры",V._L)}},passport:{selectedType:{required:V.BM.withMessage("Заполните поле",V.C1)},series:{integer:V.BM.withMessage("Можно использовать только цифры",V._L),minLength:V.BM.withMessage((({$params:e})=>`Минимальное количество символов - ${e.min}`),(0,V.Ei)(4)),maxLength:V.BM.withMessage((({$params:e})=>`Максимальное количество символов - ${e.max}`),(0,V.BS)(4))},number:{integer:V.BM.withMessage("Можно использовать только цифры",V._L),minLength:V.BM.withMessage((({$params:e})=>`Минимальное количество символов - ${e.min}`),(0,V.Ei)(6)),maxLength:V.BM.withMessage((({$params:e})=>`Максимальное количество символов - ${e.max}`),(0,V.BS)(6))},issueDate:{required:V.BM.withMessage("Заполните поле",V.C1)}}}},data(){return{genderList:["Мужской","Женский"],groupList:["VIP","Проблемные","ОМС"],doctorList:["Иванов","Захаров","Чернышева"],documentTypes:["Паспорт","Свидетельство о рождении","Вод. удостоверение"],attributes:{firstname:"",lastname:"",surname:"",birthday:"",phoneNumber:"",selectedGender:"",selectedGroup:[],selectedDoctor:"Иванов",allowMsg:!1},address:{index:null,country:"",region:"",city:"",street:"",house:null},passport:{selectedType:"Паспорт",series:null,number:null,issuedBy:"",issueDate:""}}},methods:{async submit(){const e=await this.v$.$validate();e&&this.$refs.popup.showPopup()}}},oe=ae,ie=(0,c.Z)(oe,a,o,!1,null,null,null),le=ie.exports;r.ZP.config.productionTip=!1,r.ZP.config.devtools=!0,new r.ZP({render:e=>e(le)}).$mount("#app")}},t={};function s(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,s),o.exports}s.m=e,function(){var e=[];s.O=function(t,r,a,o){if(!r){var i=1/0;for(d=0;d<e.length;d++){r=e[d][0],a=e[d][1],o=e[d][2];for(var l=!0,n=0;n<r.length;n++)(!1&o||i>=o)&&Object.keys(s.O).every((function(e){return s.O[e](r[n])}))?r.splice(n--,1):(l=!1,o<i&&(i=o));if(l){e.splice(d--,1);var u=a();void 0!==u&&(t=u)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,a,o]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,i=r[0],l=r[1],n=r[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(a in l)s.o(l,a)&&(s.m[a]=l[a]);if(n)var d=n(s)}for(t&&t(r);u<i.length;u++)o=i[u],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(d)},r=self["webpackChunkMedods"]=self["webpackChunkMedods"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=s.O(void 0,[998],(function(){return s(4725)}));r=s.O(r)})();
//# sourceMappingURL=app.e02bc077.js.map