import{c as e,e as t,j as l,g as r}from"./use-translate.91889477.js";import{w as s}from"./with-install.c9eedd0e.js";import{e as a,z as i,C as o}from"./vue-libs.71fdcafc.js";const[n,c]=e("loading"),u=Array(12).fill(null).map(((e,t)=>a("i",{class:c("line",String(t+1))},null))),p=a("svg",{class:c("circular"),viewBox:"25 25 50 50"},[a("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]);const f=s(i({name:n,props:{size:[Number,String],color:String,vertical:Boolean,textSize:[Number,String],textColor:String,type:{type:String,default:"circular"}},setup(e,{slots:s}){const i=o((()=>t({color:e.color},l(e.size)))),n=()=>{var t;if(s.default)return a("span",{class:c("text"),style:{fontSize:r(e.textSize),color:null!=(t=e.textColor)?t:e.color}},[s.default()])};return()=>{const{type:t,vertical:l}=e;return a("div",{class:c([t,{vertical:l}])},[a("span",{class:c("spinner",t),style:i.value},["spinner"===t?u:p]),n()])}}}));export{f as L};
