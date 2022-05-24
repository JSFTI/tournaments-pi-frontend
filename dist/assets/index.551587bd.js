import{d as N,o as h,l as z,m as k,f as u,t as F,s as B,q as j,y as X,z as ne,_ as ae,a as T,e as U,c as b,F as E,G as A,u as c,j as K,h as q,w as le,g as Y,I as Z,J as re,i as L,B as ie,C as se,r as oe,D as M,K as ue}from"./index.da93b4f5.js";import{l as te}from"./lodash.dd9bff61.js";const de=j(" Declare Winner "),ce={flex:"","gap-5":"","items-center":"","text-center":"","my-4":""},pe={class:"w-48%"},me={class:"text-xl"},he=u("div",{"i-carbon-trophy":""},null,-1),ve=u("div",{class:"w-4% text-3xl"}," VS ",-1),ye={class:"w-48%"},fe={class:"text-xl"},ge=u("div",{"i-carbon-trophy":""},null,-1),_e=N({props:{selected:null},emits:["close","declareWinner"],setup(a,{emit:s}){const t=a;function l(){s("close")}function r(e){e&&t.selected&&s("declareWinner",t.selected,e)}return(e,o)=>{const $=X,n=ne;return h(),z(n,{show:!!a.selected,onClose:l},{title:k(()=>[de]),default:k(()=>{var p,d,f,_,w,m;return[u("div",ce,[u("div",pe,[u("div",me,F((f=(d=(p=a.selected)==null?void 0:p.prev_match)==null?void 0:d.left.player)==null?void 0:f.name),1),B($,{class:"btn btn-theme-warning text-2xl mt-3",onClick:o[0]||(o[0]=P=>{var C,H,D;return r((D=(H=(C=a.selected)==null?void 0:C.prev_match)==null?void 0:H.left)!=null?D:null)})},{default:k(()=>[he]),_:1})]),ve,u("div",ye,[u("div",fe,F((m=(w=(_=a.selected)==null?void 0:_.prev_match)==null?void 0:w.right.player)==null?void 0:m.name),1),B($,{class:"btn btn-theme-warning text-2xl mt-3",onClick:o[1]||(o[1]=P=>{var C,H,D;return r((D=(H=(C=a.selected)==null?void 0:C.prev_match)==null?void 0:H.right)!=null?D:null)})},{default:k(()=>[ge]),_:1})])])]}),_:1},8,["show"])}}});const be=["id","name","value"],ke=["value"],$e=N({props:{modelValue:null,label:null,name:null,id:null,invalidFeedback:null,placeholder:null,style:null,options:null},emits:["update:modelValue"],setup(a){const s=a,t=T(!1),l=U(()=>s.placeholder?[{value:null,label:s.placeholder},...s.options]:s.options);return(r,e)=>(h(),b("div",{class:"input-group-wrapper",style:q(a.style)},[u("div",{class:K(["input-group",{[t.value?"focused":"blurred"]:!0}])},[u("select",{id:a.id,name:a.name,value:a.modelValue,"bg-transparent":"",onFocusin:e[0]||(e[0]=o=>t.value=!0),onFocusout:e[1]||(e[1]=o=>t.value=!1),onChange:e[2]||(e[2]=o=>r.$emit("update:modelValue",o.target.value))},[(h(!0),b(E,null,A(c(l),o=>{var $;return h(),b("option",{key:($=o.value)!=null?$:"placeholder","text-1rem":"",value:o.value},F(o.label),9,ke)}),128))],40,be)],2)],4))}});var xe=ae($e,[["__scopeId","data-v-3d9a6703"]]);const we={flex:"","flex-col":""},Pe=["id","value"],We=["for"],Be=["id","value"],Ce=["for"],Se=j(" Edit Bracket "),Fe=N({props:{selected:null,addedPlayers:null,remainingPlayers:null},emits:["close","fill","switch"],setup(a,{emit:s}){const t=a,l=T("switch-player"),r=T(null),e=T(null);function o(){r.value=e.value=null,s("close")}function $(){if(r.value){const p=t.remainingPlayers.find(d=>d.id===r.value);p&&(s("fill",p),r.value=e.value=null)}else if(e.value){const p=t.addedPlayers.find(d=>d.id===e.value);p&&(s("switch",p),r.value=e.value=null)}}const n=U(()=>t.addedPlayers.filter(p=>{var d,f;return p.id!==((f=(d=t.selected)==null?void 0:d.player)==null?void 0:f.id)}));return le(()=>l.value,()=>{r.value=e.value=null}),(p,d)=>{const f=xe,_=X,w=ne;return h(),z(w,{show:!!a.selected,"is-form":"",onClose:o,onSubmit:$},{title:k(()=>{var m;return[j(F((m=a.selected)!=null&&m.player?"Switch":"Fill")+" Bracket With \xA0",1),B(f,{id:"modal-type",modelValue:l.value,"onUpdate:modelValue":d[0]||(d[0]=P=>l.value=P),name:"modalType",style:{marginTop:0,marginBottom:0},options:[{label:"Switch Player",value:"switch-player"},{label:"Remaining Players",value:"remaining-player"}]},null,8,["modelValue"])]}),footer:k(()=>[B(_,{class:"btn btn-brand-primary",type:"submit"},{default:k(()=>[Se]),_:1})]),default:k(()=>[u("div",we,[l.value==="switch-player"?(h(!0),b(E,{key:0},A(c(n),m=>{var P;return h(),b("div",{key:(P=m.id)!=null?P:0,"py-2":"","pl-3":"",flex:"","gap-3":"",class:K({"dark:bg-dark-300 bg-light-800":e.value===m.id})},[Y(u("input",{id:`added-modal-${m.id}`,"onUpdate:modelValue":d[1]||(d[1]=C=>e.value=C),type:"radio",name:"addedPlayerModal",value:m.id},null,8,Pe),[[Z,e.value]]),u("label",{for:`added-modal-${m.id}`},F(m.name),9,We)],2)}),128)):(h(!0),b(E,{key:1},A(a.remainingPlayers,m=>{var P;return h(),b("div",{key:(P=m.id)!=null?P:0,"py-2":"","pl-3":"",flex:"","gap-3":"",class:K({"dark:bg-dark-300 bg-light-800":r.value===m.id})},[Y(u("input",{id:`remaining-modal-${m.id}`,"onUpdate:modelValue":d[2]||(d[2]=C=>r.value=C),type:"radio",name:"remainingPlayerModal",value:m.id},null,8,Be),[[Z,r.value]]),u("label",{for:`remaining-modal-${m.id}`},F(m.name),9,Ce)],2)}),128))])]),_:1},8,["show"])}}}),Ve=u("h2",null,"Remaining Players",-1),Re={flex:"","flex-col":""},Te=["id","value"],De=["for"],Me={flex:"","gap-3":""},ze=j(" Cancel "),Ne=j(" Randomize "),je=N({props:{players:null},emits:["changedSelection","randomizePlayers"],setup(a,{emit:s}){const t=a,l=T(null);return le(()=>l.value,()=>{var r;s("changedSelection",(r=t.players.find(e=>e.id===l.value))!=null?r:null)}),(r,e)=>{const o=X,$=re;return h(),z($,{"w-75":""},{title:k(()=>[Ve]),footer:k(()=>[u("div",Me,[B(o,{class:"btn btn-theme-danger",disabled:!l.value,onClick:e[1]||(e[1]=n=>l.value=null)},{default:k(()=>[ze]),_:1},8,["disabled"]),B(o,{class:"btn btn-theme-warning",onClick:e[2]||(e[2]=n=>r.$emit("randomizePlayers"))},{default:k(()=>[Ne]),_:1})])]),default:k(()=>[u("div",Re,[(h(!0),b(E,null,A(a.players,n=>{var p;return h(),b("div",{key:(p=n.id)!=null?p:0,"py-2":"","pl-3":"",flex:"","gap-3":"",class:K({"dark:bg-dark-300 bg-light-800":l.value===n.id})},[Y(u("input",{id:`remaining-${n.id}`,"onUpdate:modelValue":e[0]||(e[0]=d=>l.value=d),type:"radio",name:"remainingPlayer",value:n.id},null,8,Te),[[Z,l.value]]),u("label",{for:`remaining-${n.id}`},F(n.name),9,De)],2)}),128))])]),_:1})}}}),Ee=["height","viewBox"],He=["d"],Oe=["height","viewBox"],Ue=["transform","d"],Le=N({props:{height:null,direction:null},setup(a){const s=a,t=U(()=>s.height/2),l=U(()=>{const r={right:"-40px"};return r[s.direction==="down"?"top":"bottom"]=`${s.height-5}px`,r});return(r,e)=>(h(),b("div",{absolute:"",style:q(c(l))},[a.direction==="down"?(h(),b("svg",{key:0,width:"40",height:c(t)*2,viewBox:`0 0 40 ${c(t)*2}`,fill:"none",xmlns:"http://www.w3.org/2000/svg","dark:stroke-white":"","stroke-gray":""},[u("path",{d:`
          M 0 0
          c 20 0 20 ${c(t)} 20 ${c(t)}
          c 0 ${c(t)} 20 ${c(t)} 20 ${c(t)}`,"stroke-width":"2"},null,8,He)],8,Ee)):(h(),b("svg",{key:1,height:c(t)*2,viewBox:`0 0 40 ${c(t)*2}`,fill:"none",xmlns:"http://www.w3.org/2000/svg","dark:stroke-white":"","stroke-gray":"","stroke-width":"2"},[u("path",{transform:`scale(1, -1) translate(0, -${c(t)*2})`,d:`
          M 0 0
          c 20 0 20 ${c(t)} 20 ${c(t)}
          c 0 ${c(t)} 20 ${c(t)} 20 ${c(t)}`},null,8,Ue)],8,Oe))],4))}}),qe=N({props:{bracket:null,isLastRound:{type:Boolean},inputingPlayer:null,tournamentStarted:{type:Boolean}},emits:["placedPlayer","fillWithPlayer","declareWinner"],setup(a,{emit:s}){const t=a,l=T(!1);function r(){var p,d,f,_,w,m;if(t.inputingPlayer&&((p=t.bracket)==null?void 0:p.match)===null){l.value=!0,s("placedPlayer",t.inputingPlayer,t.bracket.id,()=>{l.value=!1});return}((d=t.bracket)==null?void 0:d.match)===null&&o(),((f=t.bracket)==null?void 0:f.match)&&((_=t.bracket)==null?void 0:_.match)>0&&!t.bracket.player_id&&t.tournamentStarted&&((w=t.bracket.prev_match)==null?void 0:w.left.player_id)&&((m=t.bracket.prev_match)==null?void 0:m.right.player_id)&&e()}function e(){s("declareWinner",t.bracket)}function o(){s("fillWithPlayer",t.bracket)}const $=U(()=>({visibility:t.bracket===null?"hidden":"visible",pointerEvents:t.bracket===null?"none":"auto"})),n=U(()=>{var _,w,m,P;const p="dark:bg-dark-400 bg-gray-500",d="hover:dark:bg-dark-200 hover:bg-gray-400 cursor-pointer",f="dark:bg-dark-300 bg-gray-300";return t.tournamentStarted?((_=t.bracket)==null?void 0:_.match)===null?p.split(" "):(w=t.bracket)!=null&&w.player_id?f.split(" "):`${f} ${d}`.split(" "):t.inputingPlayer&&((m=t.bracket)==null?void 0:m.match)===null?`${f} ${d}`.split(" "):((P=t.bracket)==null?void 0:P.match)===null?`${f} ${d}`.split(" "):p.split(" ")});return(p,d)=>{var f,_;return h(),b("div",{class:K(["color-black dark:color-white flex items-center px-3 transition",c(n)]),style:q(c($)),onClick:r},[u("span",null,F((_=(f=a.bracket)==null?void 0:f.player)==null?void 0:_.name),1)],6)}}}),Ae=N({props:{round:null,roundNum:null,inputingPlayer:null,tournamentStarted:{type:Boolean}},emits:["placedPlayer","fillWithPlayer","declareWinner"],setup(a){function r(e){return e<=0?40:r(e-1)*2+10}return(e,o)=>{const $=qe,n=Le;return h(),b("div",{flex:"","flex-col":"",style:q({gap:`${10}px`})},[(h(!0),b(E,null,A(a.round,(p,d)=>{var f;return h(),b("div",{key:(f=p==null?void 0:p.id)!=null?f:d,grid:"","place-items-center":"",style:q({height:`${r(a.roundNum)}px`}),relative:""},[B($,{"tournament-started":a.tournamentStarted,"inputing-player":a.inputingPlayer,style:q({height:`${40}px`,width:`${225}px`}),bracket:p,"is-last-round":a.round.length===1,onPlacedPlayer:o[0]||(o[0]=(_,w,m)=>e.$emit("placedPlayer",_,w,m)),onFillWithPlayer:_=>e.$emit("fillWithPlayer",_),onDeclareWinner:_=>e.$emit("declareWinner",_)},null,8,["tournament-started","inputing-player","style","bracket","is-last-round","onFillWithPlayer","onDeclareWinner"]),p!==null&&a.round.length>1?(h(),z(n,{key:0,height:r(a.roundNum)/2+10/2,direction:d%2===0?"down":"up"},null,8,["height","direction"])):L("",!0)],4)}),128))],4)}}}),Ge={flex:"","gap-40px":"","overflow-auto":""},Ie=N({props:{rounds:null,inputingPlayer:null,tournamentStarted:{type:Boolean}},emits:["placedPlayer","fillWithPlayer","declareWinner"],setup(a){return(s,t)=>{const l=Ae;return h(),b("div",Ge,[(h(!0),b(E,null,A(a.rounds,(r,e)=>(h(),z(l,{key:e,"inputing-player":a.inputingPlayer,round:r,"round-num":+e,"tournament-started":a.tournamentStarted,onPlacedPlayer:t[0]||(t[0]=(o,$,n)=>s.$emit("placedPlayer",o,$,n)),onFillWithPlayer:t[1]||(t[1]=o=>s.$emit("fillWithPlayer",o)),onDeclareWinner:t[2]||(t[2]=o=>s.$emit("declareWinner",o))},null,8,["inputing-player","round","round-num","tournament-started"]))),128))])}}});function J(a,s,t="id"){let l=[a],r=[];for(;l.length>0;){const e=l[0];if(e[t]===s)return e;e&&e.prev_match&&(e.prev_match.left&&r.push(e.prev_match.left),e.prev_match.right&&r.push(e.prev_match.right)),l.shift(),l.length===0&&r.length>0&&(l=[...r],r=[])}return null}const Je={container:"","mx-auto":"","px-4":""},Ke={class:"flex items-center text-2xl gap-2"},Qe=u("hr",{class:"my-4"},null,-1),Xe={class:"flex"},Ye=j(" Configure Players "),Ze=u("div",{"i-carbon-user-multiple":""},null,-1),et={class:"flex gap-5 ml-auto"},tt={flex:"","gap-3":"","mt-5":""},at=N({props:{tournament:null},setup(a){const s=a,t=ie(),l=T(null),r=T(null),e=T(null),o=T(null),$=se(),n=oe({brackets:null,added_players:[],remaining_players:[],total_players:0,total_rounds:0});M.get(`/tournaments/${s.tournament}`).then(i=>{l.value=i.data,M.get(`/tournaments/${s.tournament}/brackets`).then(y=>{if(y.status===204){n.brackets={};return}Object.assign(n,y.data)})});function p(){M.put(`/tournaments/${s.tournament}/brackets?empty=true`).then(i=>{Object.assign(n,i.data)})}function d(){M.put(`/tournaments/${s.tournament}/brackets`).then(i=>{Object.assign(n,i.data)})}function f(i,y,v){M.put(`/brackets/${y}/player`,{player_id:i.id}).then(()=>{var x,W;const g=J(n.brackets,y);g&&(g.player_id=i.id,g.player=i),n.remaining_players=(x=n.remaining_players)==null?void 0:x.filter(S=>S.id!==i.id),(W=n.added_players)==null||W.push(i),r.value=null,v()})}function _(i){e.value=i}function w(i){e.value&&M.put(`/brackets/${e.value.id}/player`,{player_id:i.id}).then(y=>{var g,x,W;const v=J((g=n.brackets)!=null?g:{},e.value.id);v&&(v.player=i,v.player_id=i.id,e.value=null,(x=n.added_players)==null||x.push(i),n.remaining_players=(W=n.remaining_players)==null?void 0:W.filter(S=>S.id!==i.id))})}function m(i){e.value&&M.put(`/brackets/${e.value.id}/player`,{player_id:i.id}).then(y=>{var x,W,S,O;const v=J((x=n.brackets)!=null?x:{},e.value.id),g=J((W=n.brackets)!=null?W:{},i.id,"player_id");v&&g&&(v.player_id=g.player_id,v.player=g.player,g.player_id=(S=e.value)==null?void 0:S.player_id,g.player=(O=e.value)==null?void 0:O.player,e.value=null)})}function P(){l.value&&M.put(`/tournaments/${l.value.id}/start`).then(()=>{l.value.started=!0}).catch(i=>{$.error(i.response.data.message,{timeout:6e3})})}function C(i){o.value=i}function H(i,y){M.put(`tournaments/${s.tournament}/matches/${i.match}/winner`,{player_id:y.player_id}).then(v=>{var x;const g=J((x=n.brackets)!=null?x:{},i.id);g&&(g.player_id=y.player_id,g.player=y.player,o.value=null)})}const D=U(()=>{var x,W,S,O,G,I,V,ee;if(!n.brackets||te.exports.isEmpty(n.brackets))return[];let i=[n.brackets],y=[];const v=[[]];let g=0;for(;i.length>0;){const R=te.exports.cloneDeep(i[0]);R?(y.push((W=(x=R.prev_match)==null?void 0:x.left)!=null?W:null,(O=(S=R.prev_match)==null?void 0:S.right)!=null?O:null),v[g].push(R)):v[g].push(null),i.shift(),i.length===0&&y.length>0&&(g++,v.push([]),i=[...y],y=[])}v.pop();for(let R=0;R<v.length;R++)for(let Q=0;Q<v[R].length;Q++)(I=(G=v[R][Q])==null?void 0:G.prev_match)==null||delete I.left.prev_match,(ee=(V=v[R][Q])==null?void 0:V.prev_match)==null||delete ee.right.prev_match;return v.reverse(),v});return(i,y)=>{var G,I;const v=X,g=ue("router-link"),x=Ie,W=je,S=Fe,O=_e;return h(),b(E,null,[u("div",Je,[l.value?(h(),b(E,{key:0},[u("div",Ke,[u("button",{"i-carbon-caret-left":"",onClick:y[0]||(y[0]=V=>c(t).back())}),u("h1",null,F(l.value.name),1)]),Qe,u("div",Xe,[l.value.started?L("",!0):(h(),z(g,{key:0,class:"mr-auto",to:`/tournaments/${l.value.id}/players`},{default:k(()=>[B(v,{class:"btn btn-brand-primary md:block hidden"},{default:k(()=>[Ye]),_:1}),B(v,{class:"btn btn-brand-primary md:hidden block h-3rem w-3rem"},{default:k(()=>[Ze]),_:1})]),_:1},8,["to"])),u("div",et,[c(n).brackets!==null?(h(),z(v,{key:0,class:"btn",onClick:p},{default:k(()=>[j(F(c(D).length>0?"Recreate":"Create")+" Brackets ",1)]),_:1})):L("",!0),B(v,{disabled:l.value.started,class:"btn btn-theme-warning",onClick:P},{default:k(()=>{var V;return[j(F(l.value.started?(V=c(n).brackets)!=null&&V.player_id?"Tournament Finished":"Tournament Started":"Start Tournament"),1)]}),_:1},8,["disabled"])])]),u("div",tt,[c(D).length>0?(h(),z(x,{key:0,"mt-10":"",rounds:c(D),"flex-grow":"","inputing-player":r.value,"tournament-started":!!l.value.started,onPlacedPlayer:f,onFillWithPlayer:_,onDeclareWinner:C},null,8,["rounds","inputing-player","tournament-started"])):L("",!0),!l.value.started&&c(n).remaining_players&&c(n).remaining_players.length>0?(h(),z(W,{key:1,players:c(n).remaining_players,onRandomizePlayers:d,onChangedSelection:y[1]||(y[1]=V=>r.value=V)},null,8,["players"])):L("",!0)])],64)):L("",!0)]),B(S,{selected:e.value,"added-players":(G=c(n).added_players)!=null?G:[],"remaining-players":(I=c(n).remaining_players)!=null?I:[],onClose:y[2]||(y[2]=V=>e.value=null),onFill:w,onSwitch:m},null,8,["selected","added-players","remaining-players"]),B(O,{selected:o.value,onClose:y[3]||(y[3]=V=>o.value=null),onDeclareWinner:H},null,8,["selected"])],64)}}});export{at as default};
