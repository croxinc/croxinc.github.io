import{d as C,r as p,o as w,c as a,a as e,b as u,w as _,T as k,h as y,i as E,f as c,j as S,e as t,F as x,k as I,n as L,l as V,t as F,p as T,g as G,_ as N}from"./index-CB5k_c_P.js";const D="/images/%E8%A8%82%E5%96%AE%E7%B3%BB%E7%B5%B1.png",z=o=>(T("data-v-a03c4645"),o=o(),G(),o),P={class:"container"},R={class:"text-section"},Q={key:0},W={key:0},j={key:0,class:"contact-methods"},M=["href"],U=["src","alt"],X={key:0,class:"form-overlay"},$=z(()=>e("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLSfBnVEk5mT0sDzCtWDQEgspt3VGG7IRSSGcUXdE761mGyIEtA/viewform?embedded=true",width:"100%",height:"1150",frameborder:"0",marginheight:"0",marginwidth:"0"}," 載入中… ",-1)),q=C({__name:"ContactPage",emits:["AnimationCompleted","AnimationStart"],setup(o,{emit:b}){let n=null;const s=p(!0);let l=!1;const f=b,A=p([{name:"電子郵件",link:"mailto:Croxinc.studio@gmail.com",icon:"/images/email_b.png"},{name:"Line@",link:"https://line.me/R/ti/p/@134sbzgh?ts=04241459&oat_content=url",icon:"/images/line_b.png"},{name:"Facebook",link:"https://www.facebook.com/croxinc.studio/",icon:"/images/fb_b.png"}]),r=p(!1);function m(){r.value=!r.value}const g=()=>{f("AnimationCompleted"),n&&(n(),n=null),l=!1},B=()=>new Promise(d=>{l?d():(s.value=!1,l=!0,n=d)}),h=()=>{f("AnimationStart")};return w(B),(d,H)=>(t(),a("div",P,[e("div",R,[u(k,{name:"slide-up-title",onAfterAppear:g,onAfterLeave:g,onBeforeLeave:h,onBeforeEnter:h,appear:""},{default:_(()=>[s.value?(t(),a("h2",Q,"如何聯絡我們？")):c("",!0)]),_:1}),u(k,{name:"slide-up-title",appear:""},{default:_(()=>[s.value?(t(),a("p",W," 如果您有想要客製的網站系統、Windows用的系統或工具，可以透過以下幾種方式聯絡我們： ")):c("",!0)]),_:1}),u(y,{name:"slide-up-title",appear:""},{default:_(()=>[s.value?(t(),a("ul",j,[(t(!0),a(x,null,I(A.value,(i,v)=>(t(),a("li",{key:v,style:L({animationDelay:`${v*.2}s`}),class:"fade-in"},[e("a",{href:i.link,target:"_blank"},[e("img",{src:i.icon,alt:i.name,class:"contact-icon"},null,8,U),V(F(i.name),1)],8,M)],4))),128)),e("li",null,[e("img",{src:D,alt:"表單",class:"contact-icon",onClick:m}),e("span",{onClick:m},"填寫表單")])])):c("",!0)]),_:1})]),(t(),E(S,{to:"body"},[r.value?(t(),a("div",X,[e("div",{class:"form-container"},[e("button",{onClick:m,class:"close-button"},"關閉表單"),$])])):c("",!0)]))]))}}),K=N(q,[["__scopeId","data-v-a03c4645"]]);export{K as default};
