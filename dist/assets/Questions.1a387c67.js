import{_ as A,h as K,a as P,b as R,c as N,i as _,M as k,g as w,d as X,j as Y,k as z,l as W,n as Z,f as ee,u as ae,v as le,m as te}from"./Navbar.vue_vue_type_script_setup_true_lang.ee11c150.js";import{a as v}from"./axios.f2a602b3.js";import{d as se,u as oe,r as u,i as ne,o as ue,c as p,a as t,w as s,b as a,F as C,e as c,g as h,I,E as U,f as x,j as T}from"./index.d010bbe1.js";const de={key:0,class:"fas fa-graduation-cap"},re={key:1,class:"fas fa-robot"},ie=["innerHTML"],ce={class:"my-4"},me={class:"my-4"},he=se({__name:"Questions",setup(fe){oe();const Q=u("collapseOne"),g=u([]),m=u(!1),d=u(""),r=u(""),f=u({edited:!1,value:-1}),i=u(""),$=u(""),y=u([]),V=u(""),B=()=>{const o=V.value;v.get(`${i.value}questions`,{params:{search:o}}).then(l=>g.value=l.data)},M=ne(()=>!(d.value.trim()===""||r.value.trim()==="")),L=()=>{d.value="",r.value="",f.value={edited:!1,value:-1}},E=async()=>{!M.value||(f.value.edited?F(f.value.value,d.value,r.value):j(d.value,r.value),L(),m.value=!1)},D=o=>{d.value=o.chapterNumber,r.value=o.text,f.value={edited:!0,value:o._id},m.value=!0},b=()=>{v.get(`${i.value}questions`).then(o=>g.value=o.data)},j=(o,l)=>{const e={chapterNumber:o,text:l};v.post(`${i.value}questions`,e).then(()=>{b()})},q=o=>{v.delete(`${i.value}questions/${o}`).then(()=>{b()})},F=(o,l,e)=>{const n={chapterNumber:l,text:e};v.put(`${i.value}questions/${o}`,n).then(()=>{b()})},H=(o,l,e,n)=>{const O={question_id:o,chapter_number:l,question_text:e,answer_input:n},G={human_or_ai:"human",answer_text:n};y.value.push(G),v.post(`${i.value}openai/generateAnswer`,O).then(S=>{console.log(o),console.log(l),console.log(e),console.log(n),console.log("after openai call"),console.log(S);const J={human_or_ai:"ai",answer_text:S.data};y.value.push(J),$.value=""})};return ue(()=>{i.value="https://textbookai-backend-2ffe066fb0f8.herokuapp.com/",b()}),(o,l)=>(c(),p(C,null,[t(a(A),{class:"mt-5"},{default:s(()=>[t(P),t(a(R),{class:"pt-5 pb-4"},{default:s(()=>[t(a(N),{class:"text-start"},{default:s(()=>[t(a(_),{color:"secondary",onClick:l[0]||(l[0]=e=>m.value=!0)},{default:s(()=>[h("Add Question")]),_:1})]),_:1}),t(a(N),{md:"4"},{default:s(()=>[t(a(k),{inputGroup:"",formOutline:!1,wrapperClass:"mb-3",modelValue:V.value,"onUpdate:modelValue":l[1]||(l[1]=e=>V.value=e),placeholder:"Search questions, e.g. 'chapter 1', 'labor systems', ...","aria-label":"Search"},{default:s(()=>[t(a(_),{color:"primary",onClick:B},{default:s(()=>[t(a(w),{icon:"search"})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(a(X),{modelValue:Q.value,"onUpdate:modelValue":l[3]||(l[3]=e=>Q.value=e),borderless:"",flush:""},{default:s(()=>[(c(!0),p(C,null,I(g.value,e=>(c(),T(a(ee),{icon:"fas fa-question-circle fa-sm me-2 opacity-70",headerTitle:e.text,collapseId:e.text},{default:s(()=>[(c(!0),p(C,null,I(y.value,n=>(c(),T(a(ae),{class:"light"},{default:s(()=>[t(a(le),null,{default:s(()=>[n.human_or_ai==="human"?(c(),p("i",de)):(c(),p("i",re)),x("div",{innerHTML:n.answer_text},null,8,ie)]),_:2},1024)]),_:2},1024))),256)),t(a(A),{fluid:"",class:"mt-3"},{default:s(()=>[t(a(te),{label:"Your answer to above question:",type:"text",modelValue:$.value,"onUpdate:modelValue":l[2]||(l[2]=n=>$.value=n)},null,8,["modelValue"]),t(a(_),{color:"secondary",class:"mt-3",onClick:n=>H(e._id,e.chapterNumber,e.text,$.value)},{default:s(()=>[h(" Submit Answer ")]),_:2},1032,["onClick"]),t(a(w),{class:"text-primary me-3",title:"edit",icon:"pen",style:{cursor:"pointer"},onClick:()=>D(e)},null,8,["onClick"]),t(a(w),{class:"text-danger",title:"delete",icon:"trash",style:{cursor:"pointer"},onClick:()=>q(e._id)},null,8,["onClick"])]),_:2},1024)]),_:2},1032,["headerTitle","collapseId"]))),256))]),_:1},8,["modelValue"])]),_:1}),t(a(K),{id:"addNewQuestionrModal",tabindex:"-1",labelledby:"addNewQuestionModalLabel",modelValue:m.value,"onUpdate:modelValue":l[7]||(l[7]=e=>m.value=e)},{default:s(()=>[t(a(Y),null,{default:s(()=>[t(a(z),{id:"exampleModalLabel"},{default:s(()=>[h(U(f.value.edited?"Edit question":"Add question"),1)]),_:1})]),_:1}),t(a(W),null,{default:s(()=>[x("form",null,[x("div",ce,[t(a(k),{label:"chapter_number",type:"text",modelValue:d.value,"onUpdate:modelValue":l[4]||(l[4]=e=>d.value=e),counter:"",maxlength:2},null,8,["modelValue"])]),x("div",me,[t(a(k),{label:"text",type:"text",modelValue:r.value,"onUpdate:modelValue":l[5]||(l[5]=e=>r.value=e)},null,8,["modelValue"])])])]),_:1}),t(a(Z),null,{default:s(()=>[t(a(_),{color:"secondary",onClick:l[6]||(l[6]=e=>{L(),m.value=!1})},{default:s(()=>[h("Close")]),_:1}),t(a(_),{color:"primary",onClick:E,disabled:!M.value},{default:s(()=>[h(U(f.value.edited?"Save changes":"Add Question"),1)]),_:1},8,["disabled"])]),_:1})]),_:1},8,["modelValue"])],64))}});export{he as default};
