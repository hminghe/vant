import{c as t,p as e,D as s}from"./use-translate.91889477.js";import{w as a}from"./with-install.c9eedd0e.js";import{u as n}from"./use-touch.30351383.js";import{L as i}from"./index.6e9dbec3.js";import{z as o,D as u,E as r,x as l,e as c,A as d,q as m}from"./vue-libs.71fdcafc.js";import{u as p}from"./index.9e2e36ca.js";const[g,h,f]=t("pull-refresh"),v=["pulling","loosing","success"];const x=a(o({name:g,props:{disabled:Boolean,successText:String,pullingText:String,loosingText:String,loadingText:String,pullDistance:[Number,String],modelValue:{type:Boolean,default:!1},successDuration:{type:[Number,String],default:500},animationDuration:{type:[Number,String],default:300},headHeight:{type:[Number,String],default:50}},emits:["refresh","update:modelValue"],setup(t,{emit:a,slots:o}){let g;const x=u(),b=p(x),D=r({status:"normal",distance:0,duration:0}),T=n(),j=()=>{if(50!==t.headHeight)return{height:`${t.headHeight}px`}},S=()=>"loading"!==D.status&&"success"!==D.status&&!t.disabled,y=(e,s)=>{const a=+(t.pullDistance||t.headHeight);D.distance=e,D.status=s?"loading":0===e?"normal":e<a?"pulling":"loosing"},H=()=>{const{status:e}=D;return"normal"===e?"":t[`${e}Text`]||f(e)},V=()=>{const{status:t,distance:e}=D;if(o[t])return o[t]({distance:e});const s=[];if(v.includes(t)&&s.push(c("div",{class:h("text")},[H()])),"loading"===t){let t;s.push(c(i,{class:h("loading")},"function"==typeof(a=t=H())||"[object Object]"===Object.prototype.toString.call(a)&&!d(a)?t:{default:()=>[t]}))}var a;return s},N=t=>{g=0===s(b.value),g&&(D.duration=0,T.start(t))},$=t=>{S()&&N(t)},w=s=>{if(S()){g||N(s);const{deltaY:a}=T;T.move(s),g&&a.value>=0&&T.isVertical()&&(e(s),y((e=>{const s=+(t.pullDistance||t.headHeight);return e>s&&(e=e<2*s?s+(e-s)/2:1.5*s+(e-2*s)/4),Math.round(e)})(a.value)))}},B=()=>{g&&T.deltaY.value&&S()&&(D.duration=+t.animationDuration,"loosing"===D.status?(y(+t.headHeight,!0),a("update:modelValue",!0),m((()=>a("refresh")))):y(0))};return l((()=>t.modelValue),(e=>{D.duration=+t.animationDuration,e?y(+t.headHeight,!0):o.success||t.successText?(D.status="success",setTimeout((()=>{y(0)}),+t.successDuration)):y(0,!1)})),()=>{var t;const e={transitionDuration:`${D.duration}ms`,transform:D.distance?`translate3d(0,${D.distance}px, 0)`:""};return c("div",{ref:x,class:h()},[c("div",{class:h("track"),style:e,onTouchstart:$,onTouchmove:w,onTouchend:B,onTouchcancel:B},[c("div",{class:h("head"),style:j()},[V()]),null==(t=o.default)?void 0:t.call(o)])])}}}));export{x as P};
