import{p as r}from"./gitGraph-YCYPL57B-MEVJTYR7-tYGgXJ_c.js";import{m as a,t as e,aT as t,C as s,aU as i}from"./mermaid.esm.min-Ct74EFMu.js";import"./chunk-5ZJXQJOJ-CsLKTq-N.js";import"./app-TI-A_RvW.js";var n={parse:a((async a=>{let t=await r("info",a);e.debug(t)}),"parse")},o={version:i},p={parser:n,db:{getVersion:a((()=>o.version),"getVersion")},renderer:{draw:a(((r,a,i)=>{e.debug("rendering info diagram\n"+r);let n=t(a);s(n,100,400,!0),n.append("g").append("text").attr("x",100).attr("y",40).attr("class","version").attr("font-size",32).style("text-anchor","middle").text(`v${i}`)}),"draw")}};export{p as diagram};