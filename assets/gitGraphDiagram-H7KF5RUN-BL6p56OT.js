import{s as Q}from"./chunk-VSLJSFIP-DHPzeBok.js";import{c as X}from"./chunk-4KE642ED-DgJVP6oT.js";import{p as Z}from"./gitGraph-YCYPL57B-MEVJTYR7-BquneCXp.js";import{ar as tt,m as h,as as et,at as rt,t as w,a as C,h as at,W as nt,r as it,I as st,au as ct,av as ot,T as dt,k as ht,v as lt,S as mt,w as $t,B as gt}from"./mermaid.esm.min-CKPcXVkZ.js";import"./chunk-5ZJXQJOJ-BXifcbW5.js";import"./app-DbYlmR8c.js";var f={NORMAL:0,REVERSE:1,HIGHLIGHT:2,MERGE:3,CHERRY_PICK:4},yt=tt.gitGraph,G=h(()=>et({...yt,...rt().gitGraph}),"getConfig"),o=new Q(()=>{let e=G(),t=e.mainBranchName,a=e.mainBranchOrder;return{mainBranchName:t,commits:new Map,head:null,branchConfig:new Map([[t,{name:t,order:a}]]),branches:new Map([[t,null]]),currBranch:t,direction:"LR",seq:0,options:{}}});function S(){return ot({length:7})}h(S,"getID");function K(e,t){let a=Object.create(null);return e.reduce((i,r)=>{let n=t(r);return a[n]||(a[n]=!0,i.push(r)),i},[])}h(K,"uniqBy");var ft=h(function(e){o.records.direction=e},"setDirection"),pt=h(function(e){w.debug("options str",e),e=e==null?void 0:e.trim(),e=e||"{}";try{o.records.options=JSON.parse(e)}catch(t){w.error("error while parsing gitGraph options",t.message)}},"setOptions"),xt=h(function(){return o.records.options},"getOptions"),ut=h(function(e){let t=e.msg,a=e.id,i=e.type,r=e.tags;w.info("commit",t,a,i,r),w.debug("Entering commit:",t,a,i,r);let n=G();a=C.sanitizeText(a,n),t=C.sanitizeText(t,n),r=r==null?void 0:r.map(s=>C.sanitizeText(s,n));let c={id:a||o.records.seq+"-"+S(),message:t,seq:o.records.seq++,type:i??f.NORMAL,tags:r??[],parents:o.records.head==null?[]:[o.records.head.id],branch:o.records.currBranch};o.records.head=c,w.info("main branch",n.mainBranchName),o.records.commits.set(c.id,c),o.records.branches.set(o.records.currBranch,c.id),w.debug("in pushCommit "+c.id)},"commit"),bt=h(function(e){let t=e.name,a=e.order;if(t=C.sanitizeText(t,G()),o.records.branches.has(t))throw new Error(`Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout ${t}")`);o.records.branches.set(t,o.records.head!=null?o.records.head.id:null),o.records.branchConfig.set(t,{name:t,order:a}),_(t),w.debug("in createBranch")},"branch"),wt=h(e=>{let t=e.branch,a=e.id,i=e.type,r=e.tags,n=G();t=C.sanitizeText(t,n),a&&(a=C.sanitizeText(a,n));let c=o.records.branches.get(o.records.currBranch),s=o.records.branches.get(t),l=c?o.records.commits.get(c):void 0,$=s?o.records.commits.get(s):void 0;if(l&&$&&l.branch===t)throw new Error(`Cannot merge branch '${t}' into itself.`);if(o.records.currBranch===t){let d=new Error('Incorrect usage of "merge". Cannot merge a branch to itself');throw d.hash={text:`merge ${t}`,token:`merge ${t}`,expected:["branch abc"]},d}if(l===void 0||!l){let d=new Error(`Incorrect usage of "merge". Current branch (${o.records.currBranch})has no commits`);throw d.hash={text:`merge ${t}`,token:`merge ${t}`,expected:["commit"]},d}if(!o.records.branches.has(t)){let d=new Error('Incorrect usage of "merge". Branch to be merged ('+t+") does not exist");throw d.hash={text:`merge ${t}`,token:`merge ${t}`,expected:[`branch ${t}`]},d}if($===void 0||!$){let d=new Error('Incorrect usage of "merge". Branch to be merged ('+t+") has no commits");throw d.hash={text:`merge ${t}`,token:`merge ${t}`,expected:['"commit"']},d}if(l===$){let d=new Error('Incorrect usage of "merge". Both branches have same head');throw d.hash={text:`merge ${t}`,token:`merge ${t}`,expected:["branch abc"]},d}if(a&&o.records.commits.has(a)){let d=new Error('Incorrect usage of "merge". Commit with id:'+a+" already exists, use different custom Id");throw d.hash={text:`merge ${t} ${a} ${i} ${r==null?void 0:r.join(" ")}`,token:`merge ${t} ${a} ${i} ${r==null?void 0:r.join(" ")}`,expected:[`merge ${t} ${a}_UNIQUE ${i} ${r==null?void 0:r.join(" ")}`]},d}let m=s||"",g={id:a||`${o.records.seq}-${S()}`,message:`merged branch ${t} into ${o.records.currBranch}`,seq:o.records.seq++,parents:o.records.head==null?[]:[o.records.head.id,m],branch:o.records.currBranch,type:f.MERGE,customType:i,customId:!!a,tags:r??[]};o.records.head=g,o.records.commits.set(g.id,g),o.records.branches.set(o.records.currBranch,g.id),w.debug(o.records.branches),w.debug("in mergeBranch")},"merge"),Bt=h(function(e){let t=e.id,a=e.targetId,i=e.tags,r=e.parent;w.debug("Entering cherryPick:",t,a,i);let n=G();if(t=C.sanitizeText(t,n),a=C.sanitizeText(a,n),i=i==null?void 0:i.map(l=>C.sanitizeText(l,n)),r=C.sanitizeText(r,n),!t||!o.records.commits.has(t)){let l=new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');throw l.hash={text:`cherryPick ${t} ${a}`,token:`cherryPick ${t} ${a}`,expected:["cherry-pick abc"]},l}let c=o.records.commits.get(t);if(c===void 0||!c)throw new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');if(r&&!(Array.isArray(c.parents)&&c.parents.includes(r)))throw new Error("Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit.");let s=c.branch;if(c.type===f.MERGE&&!r)throw new Error("Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified.");if(!a||!o.records.commits.has(a)){if(s===o.records.currBranch){let g=new Error('Incorrect usage of "cherryPick". Source commit is already on current branch');throw g.hash={text:`cherryPick ${t} ${a}`,token:`cherryPick ${t} ${a}`,expected:["cherry-pick abc"]},g}let l=o.records.branches.get(o.records.currBranch);if(l===void 0||!l){let g=new Error(`Incorrect usage of "cherry-pick". Current branch (${o.records.currBranch})has no commits`);throw g.hash={text:`cherryPick ${t} ${a}`,token:`cherryPick ${t} ${a}`,expected:["cherry-pick abc"]},g}let $=o.records.commits.get(l);if($===void 0||!$){let g=new Error(`Incorrect usage of "cherry-pick". Current branch (${o.records.currBranch})has no commits`);throw g.hash={text:`cherryPick ${t} ${a}`,token:`cherryPick ${t} ${a}`,expected:["cherry-pick abc"]},g}let m={id:o.records.seq+"-"+S(),message:`cherry-picked ${c==null?void 0:c.message} into ${o.records.currBranch}`,seq:o.records.seq++,parents:o.records.head==null?[]:[o.records.head.id,c.id],branch:o.records.currBranch,type:f.CHERRY_PICK,tags:i?i.filter(Boolean):[`cherry-pick:${c.id}${c.type===f.MERGE?`|parent:${r}`:""}`]};o.records.head=m,o.records.commits.set(m.id,m),o.records.branches.set(o.records.currBranch,m.id),w.debug(o.records.branches),w.debug("in cherryPick")}},"cherryPick"),_=h(function(e){if(e=C.sanitizeText(e,G()),o.records.branches.has(e)){o.records.currBranch=e;let t=o.records.branches.get(o.records.currBranch);t===void 0||!t?o.records.head=null:o.records.head=o.records.commits.get(t)??null}else{let t=new Error(`Trying to checkout branch which is not yet created. (Help try using "branch ${e}")`);throw t.hash={text:`checkout ${e}`,token:`checkout ${e}`,expected:[`branch ${e}`]},t}},"checkout");function W(e,t,a){let i=e.indexOf(t);i===-1?e.push(a):e.splice(i,1,a)}h(W,"upsert");function N(e){let t=e.reduce((r,n)=>r.seq>n.seq?r:n,e[0]),a="";e.forEach(function(r){r===t?a+="	*":a+="	|"});let i=[a,t.id,t.seq];for(let r in o.records.branches)o.records.branches.get(r)===t.id&&i.push(r);if(w.debug(i.join(" ")),t.parents&&t.parents.length==2&&t.parents[0]&&t.parents[1]){let r=o.records.commits.get(t.parents[0]);W(e,t,r),t.parents[1]&&e.push(o.records.commits.get(t.parents[1]))}else{if(t.parents.length==0)return;if(t.parents[0]){let r=o.records.commits.get(t.parents[0]);W(e,t,r)}}e=K(e,r=>r.id),N(e)}h(N,"prettyPrintCommitHistory");var Et=h(function(){w.debug(o.records.commits);let e=Y()[0];N([e])},"prettyPrint"),kt=h(function(){o.reset(),at()},"clear"),Ct=h(function(){return[...o.records.branchConfig.values()].map((e,t)=>e.order!==null&&e.order!==void 0?e:{...e,order:parseFloat(`0.${t}`)}).sort((e,t)=>(e.order??0)-(t.order??0)).map(({name:e})=>({name:e}))},"getBranchesAsObjArray"),Lt=h(function(){return o.records.branches},"getBranches"),Tt=h(function(){return o.records.commits},"getCommits"),Y=h(function(){let e=[...o.records.commits.values()];return e.forEach(function(t){w.debug(t.id)}),e.sort((t,a)=>t.seq-a.seq),e},"getCommitsArray"),Mt=h(function(){return o.records.currBranch},"getCurrentBranch"),Pt=h(function(){return o.records.direction},"getDirection"),Rt=h(function(){return o.records.head},"getHead"),U={commitType:f,getConfig:G,setDirection:ft,setOptions:pt,getOptions:xt,commit:ut,branch:bt,merge:wt,cherryPick:Bt,checkout:_,prettyPrint:Et,clear:kt,getBranchesAsObjArray:Ct,getBranches:Lt,getCommits:Tt,getCommitsArray:Y,getCurrentBranch:Mt,getDirection:Pt,getHead:Rt,setAccTitle:dt,getAccTitle:ht,getAccDescription:lt,setAccDescription:mt,setDiagramTitle:$t,getDiagramTitle:gt},It=h((e,t)=>{X(e,t),e.dir&&t.setDirection(e.dir);for(let a of e.statements)vt(a,t)},"populate"),vt=h((e,t)=>{let a={Commit:h(i=>t.commit(At(i)),"Commit"),Branch:h(i=>t.branch(Gt(i)),"Branch"),Merge:h(i=>t.merge(Ot(i)),"Merge"),Checkout:h(i=>t.checkout(qt(i)),"Checkout"),CherryPicking:h(i=>t.cherryPick(Ht(i)),"CherryPicking")}[e.$type];a?a(e):w.error(`Unknown statement type: ${e.$type}`)},"parseStatement"),At=h(e=>({id:e.id,msg:e.message??"",type:e.type!==void 0?f[e.type]:f.NORMAL,tags:e.tags??void 0}),"parseCommit"),Gt=h(e=>({name:e.name,order:e.order??0}),"parseBranch"),Ot=h(e=>({branch:e.branch,id:e.id??"",type:e.type!==void 0?f[e.type]:void 0,tags:e.tags??void 0}),"parseMerge"),qt=h(e=>e.branch,"parseCheckout"),Ht=h(e=>{var t;return{id:e.id,targetId:"",tags:((t=e.tags)==null?void 0:t.length)===0?void 0:e.tags,parent:e.parent}},"parseCherryPicking"),zt={parse:h(async e=>{let t=await Z("gitGraph",e);w.debug(t),It(t,U)},"parse")},D=nt(),x=D==null?void 0:D.gitGraph,R=10,I=40,L=4,T=2,A=8,E=new Map,k=new Map,H=30,O=new Map,z=[],P=0,y="LR",St=h(()=>{E.clear(),k.clear(),O.clear(),P=0,z=[],y="LR"},"clear"),V=h(e=>{let t=document.createElementNS("http://www.w3.org/2000/svg","text");return(typeof e=="string"?e.split(/\\n|\n|<br\s*\/?>/gi):e).forEach(a=>{let i=document.createElementNS("http://www.w3.org/2000/svg","tspan");i.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),i.setAttribute("dy","1em"),i.setAttribute("x","0"),i.setAttribute("class","row"),i.textContent=a.trim(),t.appendChild(i)}),t},"drawText"),J=h(e=>{let t,a,i;return y==="BT"?(a=h((r,n)=>r<=n,"comparisonFunc"),i=1/0):(a=h((r,n)=>r>=n,"comparisonFunc"),i=0),e.forEach(r=>{var c,s;let n=y==="TB"||y=="BT"?(c=k.get(r))==null?void 0:c.y:(s=k.get(r))==null?void 0:s.x;n!==void 0&&a(n,i)&&(t=r,i=n)}),t},"findClosestParent"),Dt=h(e=>{let t="",a=1/0;return e.forEach(i=>{let r=k.get(i).y;r<=a&&(t=i,a=r)}),t||void 0},"findClosestParentBT"),Wt=h((e,t,a)=>{let i=a,r=a,n=[];e.forEach(c=>{let s=t.get(c);if(!s)throw new Error(`Commit not found for key ${c}`);s.parents.length?(i=jt(s),r=Math.max(i,r)):n.push(s),Ft(s,i)}),i=r,n.forEach(c=>{Kt(c,i,a)}),e.forEach(c=>{let s=t.get(c);if(s!=null&&s.parents.length){let l=Dt(s.parents);i=k.get(l).y-I,i<=r&&(r=i);let $=E.get(s.branch).pos,m=i-R;k.set(s.id,{x:$,y:m})}})},"setParallelBTPos"),Nt=h(e=>{var i;let t=J(e.parents.filter(r=>r!==null));if(!t)throw new Error(`Closest parent not found for commit ${e.id}`);let a=(i=k.get(t))==null?void 0:i.y;if(a===void 0)throw new Error(`Closest parent position not found for commit ${e.id}`);return a},"findClosestParentPos"),jt=h(e=>Nt(e)+I,"calculateCommitPosition"),Ft=h((e,t)=>{let a=E.get(e.branch);if(!a)throw new Error(`Branch not found for commit ${e.id}`);let i=a.pos,r=t+R;return k.set(e.id,{x:i,y:r}),{x:i,y:r}},"setCommitPosition"),Kt=h((e,t,a)=>{let i=E.get(e.branch);if(!i)throw new Error(`Branch not found for commit ${e.id}`);let r=t+a,n=i.pos;k.set(e.id,{x:n,y:r})},"setRootPosition"),_t=h((e,t,a,i,r,n)=>{if(n===f.HIGHLIGHT)e.append("rect").attr("x",a.x-10).attr("y",a.y-10).attr("width",20).attr("height",20).attr("class",`commit ${t.id} commit-highlight${r%A} ${i}-outer`),e.append("rect").attr("x",a.x-6).attr("y",a.y-6).attr("width",12).attr("height",12).attr("class",`commit ${t.id} commit${r%A} ${i}-inner`);else if(n===f.CHERRY_PICK)e.append("circle").attr("cx",a.x).attr("cy",a.y).attr("r",10).attr("class",`commit ${t.id} ${i}`),e.append("circle").attr("cx",a.x-3).attr("cy",a.y+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${t.id} ${i}`),e.append("circle").attr("cx",a.x+3).attr("cy",a.y+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${t.id} ${i}`),e.append("line").attr("x1",a.x+3).attr("y1",a.y+1).attr("x2",a.x).attr("y2",a.y-5).attr("stroke","#fff").attr("class",`commit ${t.id} ${i}`),e.append("line").attr("x1",a.x-3).attr("y1",a.y+1).attr("x2",a.x).attr("y2",a.y-5).attr("stroke","#fff").attr("class",`commit ${t.id} ${i}`);else{let c=e.append("circle");if(c.attr("cx",a.x),c.attr("cy",a.y),c.attr("r",t.type===f.MERGE?9:10),c.attr("class",`commit ${t.id} commit${r%A}`),n===f.MERGE){let s=e.append("circle");s.attr("cx",a.x),s.attr("cy",a.y),s.attr("r",6),s.attr("class",`commit ${i} ${t.id} commit${r%A}`)}n===f.REVERSE&&e.append("path").attr("d",`M ${a.x-5},${a.y-5}L${a.x+5},${a.y+5}M${a.x-5},${a.y+5}L${a.x+5},${a.y-5}`).attr("class",`commit ${i} ${t.id} commit${r%A}`)}},"drawCommitBullet"),Yt=h((e,t,a,i)=>{var r;if(t.type!==f.CHERRY_PICK&&(t.customId&&t.type===f.MERGE||t.type!==f.MERGE)&&(x!=null&&x.showCommitLabel)){let n=e.append("g"),c=n.insert("rect").attr("class","commit-label-bkg"),s=n.append("text").attr("x",i).attr("y",a.y+25).attr("class","commit-label").text(t.id),l=(r=s.node())==null?void 0:r.getBBox();if(l&&(c.attr("x",a.posWithOffset-l.width/2-T).attr("y",a.y+13.5).attr("width",l.width+2*T).attr("height",l.height+2*T),y==="TB"||y==="BT"?(c.attr("x",a.x-(l.width+4*L+5)).attr("y",a.y-12),s.attr("x",a.x-(l.width+4*L)).attr("y",a.y+l.height-12)):s.attr("x",a.posWithOffset-l.width/2),x.rotateCommitLabel))if(y==="TB"||y==="BT")s.attr("transform","rotate(-45, "+a.x+", "+a.y+")"),c.attr("transform","rotate(-45, "+a.x+", "+a.y+")");else{let $=-7.5-(l.width+10)/25*9.5,m=10+l.width/25*8.5;n.attr("transform","translate("+$+", "+m+") rotate(-45, "+i+", "+a.y+")")}}},"drawCommitLabel"),Ut=h((e,t,a,i)=>{var r;if(t.tags.length>0){let n=0,c=0,s=0,l=[];for(let $ of t.tags.reverse()){let m=e.insert("polygon"),g=e.append("circle"),d=e.append("text").attr("y",a.y-16-n).attr("class","tag-label").text($),p=(r=d.node())==null?void 0:r.getBBox();if(!p)throw new Error("Tag bbox not found");c=Math.max(c,p.width),s=Math.max(s,p.height),d.attr("x",a.posWithOffset-p.width/2),l.push({tag:d,hole:g,rect:m,yOffset:n}),n+=20}for(let{tag:$,hole:m,rect:g,yOffset:d}of l){let p=s/2,u=a.y-19.2-d;if(g.attr("class","tag-label-bkg").attr("points",`
      ${i-c/2-L/2},${u+T}  
      ${i-c/2-L/2},${u-T}
      ${a.posWithOffset-c/2-L},${u-p-T}
      ${a.posWithOffset+c/2+L},${u-p-T}
      ${a.posWithOffset+c/2+L},${u+p+T}
      ${a.posWithOffset-c/2-L},${u+p+T}`),m.attr("cy",u).attr("cx",i-c/2+L/2).attr("r",1.5).attr("class","tag-hole"),y==="TB"||y==="BT"){let b=i+d;g.attr("class","tag-label-bkg").attr("points",`
        ${a.x},${b+2}
        ${a.x},${b-2}
        ${a.x+R},${b-p-2}
        ${a.x+R+c+4},${b-p-2}
        ${a.x+R+c+4},${b+p+2}
        ${a.x+R},${b+p+2}`).attr("transform","translate(12,12) rotate(45, "+a.x+","+i+")"),m.attr("cx",a.x+L/2).attr("cy",b).attr("transform","translate(12,12) rotate(45, "+a.x+","+i+")"),$.attr("x",a.x+5).attr("y",b+3).attr("transform","translate(14,14) rotate(45, "+a.x+","+i+")")}}}},"drawCommitTags"),Vt=h(e=>{switch(e.customType??e.type){case f.NORMAL:return"commit-normal";case f.REVERSE:return"commit-reverse";case f.HIGHLIGHT:return"commit-highlight";case f.MERGE:return"commit-merge";case f.CHERRY_PICK:return"commit-cherry-pick";default:return"commit-normal"}},"getCommitClassType"),Jt=h((e,t,a,i)=>{let r={x:0,y:0};if(e.parents.length>0){let n=J(e.parents);if(n){let c=i.get(n)??r;return t==="TB"?c.y+I:t==="BT"?(i.get(e.id)??r).y-I:c.x+I}}else return t==="TB"?H:t==="BT"?(i.get(e.id)??r).y-I:0;return 0},"calculatePosition"),Qt=h((e,t,a)=>{var c,s;let i=y==="BT"&&a?t:t+R,r=y==="TB"||y==="BT"?i:(c=E.get(e.branch))==null?void 0:c.pos,n=y==="TB"||y==="BT"?(s=E.get(e.branch))==null?void 0:s.pos:i;if(n===void 0||r===void 0)throw new Error(`Position were undefined for commit ${e.id}`);return{x:n,y:r,posWithOffset:i}},"getCommitPosition"),F=h((e,t,a)=>{if(!x)throw new Error("GitGraph config not found");let i=e.append("g").attr("class","commit-bullets"),r=e.append("g").attr("class","commit-labels"),n=y==="TB"||y==="BT"?H:0,c=[...t.keys()],s=(x==null?void 0:x.parallelCommits)??!1,l=h((m,g)=>{var u,b;let d=(u=t.get(m))==null?void 0:u.seq,p=(b=t.get(g))==null?void 0:b.seq;return d!==void 0&&p!==void 0?d-p:0},"sortKeys"),$=c.sort(l);y==="BT"&&(s&&Wt($,t,n),$=$.reverse()),$.forEach(m=>{var p;let g=t.get(m);if(!g)throw new Error(`Commit not found for key ${m}`);s&&(n=Jt(g,y,n,k));let d=Qt(g,n,s);if(a){let u=Vt(g),b=g.customType??g.type,v=((p=E.get(g.branch))==null?void 0:p.index)??0;_t(i,g,d,u,v,b),Yt(r,g,d,n),Ut(r,g,d,n)}y==="TB"||y==="BT"?k.set(g.id,{x:d.x,y:d.posWithOffset}):k.set(g.id,{x:d.posWithOffset,y:d.y}),n=y==="BT"&&s?n+I:n+I+R,n>P&&(P=n)})},"drawCommits"),Xt=h((e,t,a,i,r)=>{let n=(y==="TB"||y==="BT"?a.x<i.x:a.y<i.y)?t.branch:e.branch,c=h(l=>l.branch===n,"isOnBranchToGetCurve"),s=h(l=>l.seq>e.seq&&l.seq<t.seq,"isBetweenCommits");return[...r.values()].some(l=>s(l)&&c(l))},"shouldRerouteArrow"),q=h((e,t,a=0)=>{let i=e+Math.abs(e-t)/2;if(a>5)return i;if(z.every(n=>Math.abs(n-i)>=10))return z.push(i),i;let r=Math.abs(e-t);return q(e,t-r/5,a+1)},"findLane"),Zt=h((e,t,a,i)=>{var p,u,b,v,j;let r=k.get(t.id),n=k.get(a.id);if(r===void 0||n===void 0)throw new Error(`Commit positions not found for commits ${t.id} and ${a.id}`);let c=Xt(t,a,r,n,i),s="",l="",$=0,m=0,g=(p=E.get(a.branch))==null?void 0:p.index;a.type===f.MERGE&&t.id!==a.parents[0]&&(g=(u=E.get(t.branch))==null?void 0:u.index);let d;if(c){s="A 10 10, 0, 0, 0,",l="A 10 10, 0, 0, 1,",$=10,m=10;let M=r.y<n.y?q(r.y,n.y):q(n.y,r.y),B=r.x<n.x?q(r.x,n.x):q(n.x,r.x);y==="TB"?r.x<n.x?d=`M ${r.x} ${r.y} L ${B-$} ${r.y} ${l} ${B} ${r.y+m} L ${B} ${n.y-$} ${s} ${B+m} ${n.y} L ${n.x} ${n.y}`:(g=(b=E.get(t.branch))==null?void 0:b.index,d=`M ${r.x} ${r.y} L ${B+$} ${r.y} ${s} ${B} ${r.y+m} L ${B} ${n.y-$} ${l} ${B-m} ${n.y} L ${n.x} ${n.y}`):y==="BT"?r.x<n.x?d=`M ${r.x} ${r.y} L ${B-$} ${r.y} ${s} ${B} ${r.y-m} L ${B} ${n.y+$} ${l} ${B+m} ${n.y} L ${n.x} ${n.y}`:(g=(v=E.get(t.branch))==null?void 0:v.index,d=`M ${r.x} ${r.y} L ${B+$} ${r.y} ${l} ${B} ${r.y-m} L ${B} ${n.y+$} ${s} ${B-m} ${n.y} L ${n.x} ${n.y}`):r.y<n.y?d=`M ${r.x} ${r.y} L ${r.x} ${M-$} ${s} ${r.x+m} ${M} L ${n.x-$} ${M} ${l} ${n.x} ${M+m} L ${n.x} ${n.y}`:(g=(j=E.get(t.branch))==null?void 0:j.index,d=`M ${r.x} ${r.y} L ${r.x} ${M+$} ${l} ${r.x+m} ${M} L ${n.x-$} ${M} ${s} ${n.x} ${M-m} L ${n.x} ${n.y}`)}else s="A 20 20, 0, 0, 0,",l="A 20 20, 0, 0, 1,",$=20,m=20,y==="TB"?(r.x<n.x&&(a.type===f.MERGE&&t.id!==a.parents[0]?d=`M ${r.x} ${r.y} L ${r.x} ${n.y-$} ${s} ${r.x+m} ${n.y} L ${n.x} ${n.y}`:d=`M ${r.x} ${r.y} L ${n.x-$} ${r.y} ${l} ${n.x} ${r.y+m} L ${n.x} ${n.y}`),r.x>n.x&&(s="A 20 20, 0, 0, 0,",l="A 20 20, 0, 0, 1,",$=20,m=20,a.type===f.MERGE&&t.id!==a.parents[0]?d=`M ${r.x} ${r.y} L ${r.x} ${n.y-$} ${l} ${r.x-m} ${n.y} L ${n.x} ${n.y}`:d=`M ${r.x} ${r.y} L ${n.x+$} ${r.y} ${s} ${n.x} ${r.y+m} L ${n.x} ${n.y}`),r.x===n.x&&(d=`M ${r.x} ${r.y} L ${n.x} ${n.y}`)):y==="BT"?(r.x<n.x&&(a.type===f.MERGE&&t.id!==a.parents[0]?d=`M ${r.x} ${r.y} L ${r.x} ${n.y+$} ${l} ${r.x+m} ${n.y} L ${n.x} ${n.y}`:d=`M ${r.x} ${r.y} L ${n.x-$} ${r.y} ${s} ${n.x} ${r.y-m} L ${n.x} ${n.y}`),r.x>n.x&&(s="A 20 20, 0, 0, 0,",l="A 20 20, 0, 0, 1,",$=20,m=20,a.type===f.MERGE&&t.id!==a.parents[0]?d=`M ${r.x} ${r.y} L ${r.x} ${n.y+$} ${s} ${r.x-m} ${n.y} L ${n.x} ${n.y}`:d=`M ${r.x} ${r.y} L ${n.x-$} ${r.y} ${s} ${n.x} ${r.y-m} L ${n.x} ${n.y}`),r.x===n.x&&(d=`M ${r.x} ${r.y} L ${n.x} ${n.y}`)):(r.y<n.y&&(a.type===f.MERGE&&t.id!==a.parents[0]?d=`M ${r.x} ${r.y} L ${n.x-$} ${r.y} ${l} ${n.x} ${r.y+m} L ${n.x} ${n.y}`:d=`M ${r.x} ${r.y} L ${r.x} ${n.y-$} ${s} ${r.x+m} ${n.y} L ${n.x} ${n.y}`),r.y>n.y&&(a.type===f.MERGE&&t.id!==a.parents[0]?d=`M ${r.x} ${r.y} L ${n.x-$} ${r.y} ${s} ${n.x} ${r.y-m} L ${n.x} ${n.y}`:d=`M ${r.x} ${r.y} L ${r.x} ${n.y+$} ${l} ${r.x+m} ${n.y} L ${n.x} ${n.y}`),r.y===n.y&&(d=`M ${r.x} ${r.y} L ${n.x} ${n.y}`));if(d===void 0)throw new Error("Line definition not found");e.append("path").attr("d",d).attr("class","arrow arrow"+g%A)},"drawArrow"),te=h((e,t)=>{let a=e.append("g").attr("class","commit-arrows");[...t.keys()].forEach(i=>{let r=t.get(i);r.parents&&r.parents.length>0&&r.parents.forEach(n=>{Zt(a,t.get(n),r,t)})})},"drawArrows"),ee=h((e,t)=>{let a=e.append("g");t.forEach((i,r)=>{var p;let n=r%A,c=(p=E.get(i.name))==null?void 0:p.pos;if(c===void 0)throw new Error(`Position not found for branch ${i.name}`);let s=a.append("line");s.attr("x1",0),s.attr("y1",c),s.attr("x2",P),s.attr("y2",c),s.attr("class","branch branch"+n),y==="TB"?(s.attr("y1",H),s.attr("x1",c),s.attr("y2",P),s.attr("x2",c)):y==="BT"&&(s.attr("y1",P),s.attr("x1",c),s.attr("y2",H),s.attr("x2",c)),z.push(c);let l=i.name,$=V(l),m=a.insert("rect"),g=a.insert("g").attr("class","branchLabel").insert("g").attr("class","label branch-label"+n);g.node().appendChild($);let d=$.getBBox();m.attr("class","branchLabelBkg label"+n).attr("rx",4).attr("ry",4).attr("x",-d.width-4-((x==null?void 0:x.rotateCommitLabel)===!0?30:0)).attr("y",-d.height/2+8).attr("width",d.width+18).attr("height",d.height+4),g.attr("transform","translate("+(-d.width-14-((x==null?void 0:x.rotateCommitLabel)===!0?30:0))+", "+(c-d.height/2-1)+")"),y==="TB"?(m.attr("x",c-d.width/2-10).attr("y",0),g.attr("transform","translate("+(c-d.width/2-5)+", 0)")):y==="BT"?(m.attr("x",c-d.width/2-10).attr("y",P),g.attr("transform","translate("+(c-d.width/2-5)+", "+P+")")):m.attr("transform","translate(-19, "+(c-d.height/2)+")")})},"drawBranches"),re=h(function(e,t,a,i,r){return E.set(e,{pos:t,index:a}),t+=50+(r?40:0)+(y==="TB"||y==="BT"?i.width/2:0),t},"setBranchPosition"),ae=h(function(e,t,a,i){if(St(),w.debug("in gitgraph renderer",e+`
`,"id:",t,a),!x)throw new Error("GitGraph config not found");let r=x.rotateCommitLabel??!1,n=i.db;O=n.getCommits();let c=n.getBranchesAsObjArray();y=n.getDirection();let s=it(`[id="${t}"]`),l=0;c.forEach(($,m)=>{var v;let g=V($.name),d=s.append("g"),p=d.insert("g").attr("class","branchLabel"),u=p.insert("g").attr("class","label branch-label");(v=u.node())==null||v.appendChild(g);let b=g.getBBox();l=re($.name,l,m,b,r),u.remove(),p.remove(),d.remove()}),F(s,O,!1),x.showBranches&&ee(s,c),te(s,O),F(s,O,!0),st.insertTitle(s,"gitTitleText",x.titleTopMargin??0,n.getDiagramTitle()),ct(void 0,s,x.diagramPadding,x.useMaxWidth)},"draw"),ne={draw:ae},ie=h(e=>`
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  ${[0,1,2,3,4,5,6,7].map(t=>`
        .branch-label${t} { fill: ${e["gitBranchLabel"+t]}; }
        .commit${t} { stroke: ${e["git"+t]}; fill: ${e["git"+t]}; }
        .commit-highlight${t} { stroke: ${e["gitInv"+t]}; fill: ${e["gitInv"+t]}; }
        .label${t}  { fill: ${e["git"+t]}; }
        .arrow${t} { stroke: ${e["git"+t]}; }
        `).join(`
`)}

  .branch {
    stroke-width: 1;
    stroke: ${e.lineColor};
    stroke-dasharray: 2;
  }
  .commit-label { font-size: ${e.commitLabelFontSize}; fill: ${e.commitLabelColor};}
  .commit-label-bkg { font-size: ${e.commitLabelFontSize}; fill: ${e.commitLabelBackground}; opacity: 0.5; }
  .tag-label { font-size: ${e.tagLabelFontSize}; fill: ${e.tagLabelColor};}
  .tag-label-bkg { fill: ${e.tagLabelBackground}; stroke: ${e.tagLabelBorder}; }
  .tag-hole { fill: ${e.textColor}; }

  .commit-merge {
    stroke: ${e.primaryColor};
    fill: ${e.primaryColor};
  }
  .commit-reverse {
    stroke: ${e.primaryColor};
    fill: ${e.primaryColor};
    stroke-width: 3;
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ${e.primaryColor};
    fill: ${e.primaryColor};
  }

  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}
  .gitTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
`,"getStyles"),se=ie,$e={parser:zt,db:U,renderer:ne,styles:se};export{$e as diagram};