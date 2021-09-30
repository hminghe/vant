import{c as t,t as a,g as e,j as l,a as r}from"./use-translate.91889477.js";import{w as s}from"./with-install.c9eedd0e.js";import{z as i,e as o,D as n,r as d,o as u,a as c,w as m,B as v,d as h,t as p,F as w}from"./vue-libs.71fdcafc.js";import{S as f}from"./index.954014f6.js";import"./index.6e9dbec3.js";import"./index.a16d08bc.js";const[g,S]=t("skeleton");const b=s(i({name:g,props:{title:Boolean,round:Boolean,avatar:Boolean,loading:a,animate:a,avatarSize:[Number,String],titleWidth:[Number,String],row:{type:[Number,String],default:0},avatarShape:{type:String,default:"round"},rowWidth:{type:[Number,String,Array],default:"100%"}},setup(t,{slots:a}){const r=()=>{if(t.avatar)return o("div",{class:S("avatar",t.avatarShape),style:l(t.avatarSize)},null)},s=()=>{if(t.title)return o("h3",{class:S("title"),style:{width:e(t.titleWidth)}},null)},i=a=>{const{rowWidth:e}=t;return"100%"===e&&a===+t.row-1?"60%":Array.isArray(e)?e[a]:e};return()=>{var l;return t.loading?o("div",{class:S({animate:t.animate,round:t.round})},[r(),o("div",{class:S("content")},[s(),Array(t.row).fill("").map(((t,a)=>o("div",{class:S("row"),style:{width:e(i(a))}},null)))])]):null==(l=a.default)?void 0:l.call(a)}}}));const y={class:"demo-preview"},A=h("img",{src:"https://img.yzcdn.cn/vant/logo.png"},null,-1),V={class:"demo-content"},j=i({setup(t){const a=r({"zh-CN":{showAvatar:"显示头像",showChildren:"显示子组件",title:"关于 Vant",desc:"Vant 是一套轻量、可靠的移动端 Vue 组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。"},"en-US":{showAvatar:"Show Avatar",showChildren:"Show Children",title:"About Vant",desc:"Vant is a set of Mobile UI Components built on Vue."}}),e=n(!1);return(t,l)=>{const r=d("demo-block");return u(),c(w,null,[o(r,{title:v(a)("basicUsage")},{default:m((()=>[o(v(b),{title:"",row:3})])),_:1},8,["title"]),o(r,{title:v(a)("showAvatar")},{default:m((()=>[o(v(b),{title:"",avatar:"",row:3})])),_:1},8,["title"]),o(r,{title:v(a)("showChildren")},{default:m((()=>[o(v(f),{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value=t),size:"24px"},null,8,["modelValue"]),o(v(b),{title:"",avatar:"",row:3,loading:!e.value},{default:m((()=>[h("div",y,[A,h("div",V,[h("h3",null,p(v(a)("title")),1),h("p",null,p(v(a)("desc")),1)])])])),_:1},8,["loading"])])),_:1},8,["title"])],64)}}});export{j as default};
