import{x as t,y as e,h as n,g as i}from"./chunk-44WTIFVW-DPi4BNtE.js";import{m as a,h as s,W as r,w as o,B as l,T as c,k as h,S as u,v as p,r as y,C as d,aX as f}from"./mermaid.esm.min-Ct74EFMu.js";import"./app-TI-A_RvW.js";var g=function(){var t=a((function(t,e,n,i){for(n=n||{},i=t.length;i--;n[t[i]]=e);return n}),"o"),e=[6,8,10,11,12,14,16,17,18],n=[1,9],i=[1,10],s=[1,11],r=[1,12],o=[1,13],l=[1,14],c={trace:a((function(){}),"trace"),yy:{},symbols_:{error:2,start:3,journey:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,title:11,acc_title:12,acc_title_value:13,acc_descr:14,acc_descr_value:15,acc_descr_multiline_value:16,section:17,taskName:18,taskData:19,$accept:0,$end:1},terminals_:{2:"error",4:"journey",6:"EOF",8:"SPACE",10:"NEWLINE",11:"title",12:"acc_title",13:"acc_title_value",14:"acc_descr",15:"acc_descr_value",16:"acc_descr_multiline_value",17:"section",18:"taskName",19:"taskData"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,2]],performAction:a((function(t,e,n,i,a,s,r){var o=s.length-1;switch(a){case 1:return s[o-1];case 2:case 6:case 7:this.$=[];break;case 3:s[o-1].push(s[o]),this.$=s[o-1];break;case 4:case 5:this.$=s[o];break;case 8:i.setDiagramTitle(s[o].substr(6)),this.$=s[o].substr(6);break;case 9:this.$=s[o].trim(),i.setAccTitle(this.$);break;case 10:case 11:this.$=s[o].trim(),i.setAccDescription(this.$);break;case 12:i.addSection(s[o].substr(8)),this.$=s[o].substr(8);break;case 13:i.addTask(s[o-1],s[o]),this.$="task"}}),"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:n,12:i,14:s,16:r,17:o,18:l},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:15,11:n,12:i,14:s,16:r,17:o,18:l},t(e,[2,5]),t(e,[2,6]),t(e,[2,8]),{13:[1,16]},{15:[1,17]},t(e,[2,11]),t(e,[2,12]),{19:[1,18]},t(e,[2,4]),t(e,[2,9]),t(e,[2,10]),t(e,[2,13])],defaultActions:{},parseError:a((function(t,e){if(!e.recoverable){var n=new Error(t);throw n.hash=e,n}this.trace(t)}),"parseError"),parse:a((function(t){var e=this,n=[0],i=[],s=[null],r=[],o=this.table,l="",c=0,h=0,u=r.slice.call(arguments,1),p=Object.create(this.lexer),y={yy:{}};for(var d in this.yy)Object.prototype.hasOwnProperty.call(this.yy,d)&&(y.yy[d]=this.yy[d]);p.setInput(t,y.yy),y.yy.lexer=p,y.yy.parser=this,typeof p.yylloc>"u"&&(p.yylloc={});var f=p.yylloc;r.push(f);var g=p.options&&p.options.ranges;function m(){var t;return"number"!=typeof(t=i.pop()||p.lex()||1)&&(t instanceof Array&&(t=(i=t).pop()),t=e.symbols_[t]||t),t}"function"==typeof y.yy.parseError?this.parseError=y.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,a((function(t){n.length=n.length-2*t,s.length=s.length-t,r.length=r.length-t}),"popStack"),a(m,"lex");for(var x,k,_,b,w,v,$,T,M,S={};;){if(_=n[n.length-1],this.defaultActions[_]?b=this.defaultActions[_]:((null===x||typeof x>"u")&&(x=m()),b=o[_]&&o[_][x]),typeof b>"u"||!b.length||!b[0]){var E;for(v in M=[],o[_])this.terminals_[v]&&v>2&&M.push("'"+this.terminals_[v]+"'");E=p.showPosition?"Parse error on line "+(c+1)+":\n"+p.showPosition()+"\nExpecting "+M.join(", ")+", got '"+(this.terminals_[x]||x)+"'":"Parse error on line "+(c+1)+": Unexpected "+(1==x?"end of input":"'"+(this.terminals_[x]||x)+"'"),this.parseError(E,{text:p.match,token:this.terminals_[x]||x,line:p.yylineno,loc:f,expected:M})}if(b[0]instanceof Array&&b.length>1)throw new Error("Parse Error: multiple actions possible at state: "+_+", token: "+x);switch(b[0]){case 1:n.push(x),s.push(p.yytext),r.push(p.yylloc),n.push(b[1]),x=null,k?(x=k,k=null):(h=p.yyleng,l=p.yytext,c=p.yylineno,f=p.yylloc);break;case 2:if($=this.productions_[b[1]][1],S.$=s[s.length-$],S._$={first_line:r[r.length-($||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-($||1)].first_column,last_column:r[r.length-1].last_column},g&&(S._$.range=[r[r.length-($||1)].range[0],r[r.length-1].range[1]]),typeof(w=this.performAction.apply(S,[l,h,c,y.yy,b[1],s,r].concat(u)))<"u")return w;$&&(n=n.slice(0,-1*$*2),s=s.slice(0,-1*$),r=r.slice(0,-1*$)),n.push(this.productions_[b[1]][0]),s.push(S.$),r.push(S._$),T=o[n[n.length-2]][n[n.length-1]],n.push(T);break;case 3:return!0}}return!0}),"parse")},h={EOF:1,parseError:a((function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)}),"parseError"),setInput:a((function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this}),"setInput"),input:a((function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t}),"input"),unput:a((function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var a=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===i.length?this.yylloc.first_column:0)+i[i.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[a[0],a[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this}),"unput"),more:a((function(){return this._more=!0,this}),"more"),reject:a((function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"reject"),less:a((function(t){this.unput(this.match.slice(t))}),"less"),pastInput:a((function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")}),"pastInput"),upcomingInput:a((function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")}),"upcomingInput"),showPosition:a((function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"}),"showPosition"),test_match:a((function(t,e){var n,i,a;if(this.options.backtrack_lexer&&(a={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(a.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var s in a)this[s]=a[s];return!1}return!1}),"test_match"),next:a((function(){if(this.done)return this.EOF;var t,e,n,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var a=this._currentRules(),s=0;s<a.length;s++)if((n=this._input.match(this.rules[a[s]]))&&(!e||n[0].length>e[0].length)){if(e=n,i=s,this.options.backtrack_lexer){if(!1!==(t=this.test_match(n,a[s])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,a[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"next"),lex:a((function(){return this.next()||this.lex()}),"lex"),begin:a((function(t){this.conditionStack.push(t)}),"begin"),popState:a((function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]}),"popState"),_currentRules:a((function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules}),"_currentRules"),topState:a((function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"}),"topState"),pushState:a((function(t){this.begin(t)}),"pushState"),stateStackSize:a((function(){return this.conditionStack.length}),"stateStackSize"),options:{"case-insensitive":!0},performAction:a((function(t,e,n,i){switch(n){case 0:case 1:case 3:case 4:break;case 2:return 10;case 5:return 4;case 6:return 11;case 7:return this.begin("acc_title"),12;case 8:return this.popState(),"acc_title_value";case 9:return this.begin("acc_descr"),14;case 10:return this.popState(),"acc_descr_value";case 11:this.begin("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 17;case 15:return 18;case 16:return 19;case 17:return":";case 18:return 6;case 19:return"INVALID"}}),"anonymous"),rules:[/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:journey\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,9,11,14,15,16,17,18,19],inclusive:!0}}};function u(){this.yy={}}return c.lexer=h,a(u,"Parser"),u.prototype=c,c.Parser=u,new u}();g.parser=g;var m=g,x="",k=[],_=[],b=[],w=a((function(){k.length=0,_.length=0,x="",b.length=0,s()}),"clear"),v=a((function(t){x=t,k.push(t)}),"addSection"),$=a((function(){return k}),"getSections"),T=a((function(){let t=I(),e=0;for(;!t&&e<100;)t=I(),e++;return _.push(...b),_}),"getTasks"),M=a((function(){let t=[];return _.forEach((e=>{e.people&&t.push(...e.people)})),[...new Set(t)].sort()}),"updateActors"),S=a((function(t,e){let n=e.substr(1).split(":"),i=0,a=[];1===n.length?(i=Number(n[0]),a=[]):(i=Number(n[0]),a=n[1].split(","));let s=a.map((t=>t.trim())),r={section:x,type:x,people:s,task:t,score:i};b.push(r)}),"addTask"),E=a((function(t){let e={section:x,type:x,description:t,task:t,classes:[]};_.push(e)}),"addTaskOrg"),I=a((function(){let t=a((function(t){return b[t].processed}),"compileTask"),e=!0;for(let[n,i]of b.entries())t(n),e=e&&i.processed;return e}),"compileTasks"),A=a((function(){return M()}),"getActors"),P={getConfig:a((()=>r().journey),"getConfig"),clear:w,setDiagramTitle:o,getDiagramTitle:l,setAccTitle:c,getAccTitle:h,setAccDescription:u,getAccDescription:p,addSection:v,getSections:$,getTasks:T,addTask:S,addTaskOrg:E,getActors:A},C=a((t=>`.label {\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n    color: ${t.textColor};\n  }\n  .mouth {\n    stroke: #666;\n  }\n\n  line {\n    stroke: ${t.textColor}\n  }\n\n  .legend {\n    fill: ${t.textColor};\n  }\n\n  .label text {\n    fill: #333;\n  }\n  .label {\n    color: ${t.textColor}\n  }\n\n  .face {\n    ${t.faceColor?`fill: ${t.faceColor}`:"fill: #FFF8DC"};\n    stroke: #999;\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${t.mainBkg};\n    stroke: ${t.nodeBorder};\n    stroke-width: 1px;\n  }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ${t.arrowheadColor};\n  }\n\n  .edgePath .path {\n    stroke: ${t.lineColor};\n    stroke-width: 1.5px;\n  }\n\n  .flowchart-link {\n    stroke: ${t.lineColor};\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ${t.edgeLabelBackground};\n    rect {\n      opacity: 0.5;\n    }\n    text-align: center;\n  }\n\n  .cluster rect {\n  }\n\n  .cluster text {\n    fill: ${t.titleColor};\n  }\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n    font-size: 12px;\n    background: ${t.tertiaryColor};\n    border: 1px solid ${t.border2};\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .task-type-0, .section-type-0  {\n    ${t.fillType0?`fill: ${t.fillType0}`:""};\n  }\n  .task-type-1, .section-type-1  {\n    ${t.fillType0?`fill: ${t.fillType1}`:""};\n  }\n  .task-type-2, .section-type-2  {\n    ${t.fillType0?`fill: ${t.fillType2}`:""};\n  }\n  .task-type-3, .section-type-3  {\n    ${t.fillType0?`fill: ${t.fillType3}`:""};\n  }\n  .task-type-4, .section-type-4  {\n    ${t.fillType0?`fill: ${t.fillType4}`:""};\n  }\n  .task-type-5, .section-type-5  {\n    ${t.fillType0?`fill: ${t.fillType5}`:""};\n  }\n  .task-type-6, .section-type-6  {\n    ${t.fillType0?`fill: ${t.fillType6}`:""};\n  }\n  .task-type-7, .section-type-7  {\n    ${t.fillType0?`fill: ${t.fillType7}`:""};\n  }\n\n  .actor-0 {\n    ${t.actor0?`fill: ${t.actor0}`:""};\n  }\n  .actor-1 {\n    ${t.actor1?`fill: ${t.actor1}`:""};\n  }\n  .actor-2 {\n    ${t.actor2?`fill: ${t.actor2}`:""};\n  }\n  .actor-3 {\n    ${t.actor3?`fill: ${t.actor3}`:""};\n  }\n  .actor-4 {\n    ${t.actor4?`fill: ${t.actor4}`:""};\n  }\n  .actor-5 {\n    ${t.actor5?`fill: ${t.actor5}`:""};\n  }\n`),"getStyles"),j=a((function(e,n){return t(e,n)}),"drawRect"),V=a((function(t,e){let n=t.append("circle").attr("cx",e.cx).attr("cy",e.cy).attr("class","face").attr("r",15).attr("stroke-width",2).attr("overflow","visible"),i=t.append("g");function s(t){let n=f().startAngle(Math.PI/2).endAngle(Math.PI/2*3).innerRadius(7.5).outerRadius(6.8181818181818175);t.append("path").attr("class","mouth").attr("d",n).attr("transform","translate("+e.cx+","+(e.cy+2)+")")}function r(t){let n=f().startAngle(3*Math.PI/2).endAngle(Math.PI/2*5).innerRadius(7.5).outerRadius(6.8181818181818175);t.append("path").attr("class","mouth").attr("d",n).attr("transform","translate("+e.cx+","+(e.cy+7)+")")}function o(t){t.append("line").attr("class","mouth").attr("stroke",2).attr("x1",e.cx-5).attr("y1",e.cy+7).attr("x2",e.cx+5).attr("y2",e.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}return i.append("circle").attr("cx",e.cx-5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),i.append("circle").attr("cx",e.cx+5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),a(s,"smile"),a(r,"sad"),a(o,"ambivalent"),e.score>3?s(i):e.score<3?r(i):o(i),n}),"drawFace"),F=a((function(t,e){let n=t.append("circle");return n.attr("cx",e.cx),n.attr("cy",e.cy),n.attr("class","actor-"+e.pos),n.attr("fill",e.fill),n.attr("stroke",e.stroke),n.attr("r",e.r),void 0!==n.class&&n.attr("class",n.class),void 0!==e.title&&n.append("title").text(e.title),n}),"drawCircle"),L=a((function(t,n){return e(t,n)}),"drawText"),O=a((function(t,e){function n(t,e,n,i,a){return t+","+e+" "+(t+n)+","+e+" "+(t+n)+","+(e+i-a)+" "+(t+n-1.2*a)+","+(e+i)+" "+t+","+(e+i)}a(n,"genPoints");let i=t.append("polygon");i.attr("points",n(e.x,e.y,50,20,7)),i.attr("class","labelBox"),e.y=e.y+e.labelMargin,e.x=e.x+.5*e.labelMargin,L(t,e)}),"drawLabel"),B=a((function(t,e,i){let a=t.append("g"),s=n();s.x=e.x,s.y=e.y,s.fill=e.fill,s.width=i.width*e.taskCount+i.diagramMarginX*(e.taskCount-1),s.height=i.height,s.class="journey-section section-type-"+e.num,s.rx=3,s.ry=3,j(a,s),z(i)(e.text,a,s.x,s.y,s.width,s.height,{class:"journey-section section-type-"+e.num},i,e.colour)}),"drawSection"),D=-1,N=a((function(t,e,i){let a=e.x+i.width/2,s=t.append("g");D++,s.append("line").attr("id","task"+D).attr("x1",a).attr("y1",e.y).attr("x2",a).attr("y2",450).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),V(s,{cx:a,cy:300+30*(5-e.score),score:e.score});let r=n();r.x=e.x,r.y=e.y,r.fill=e.fill,r.width=i.width,r.height=i.height,r.class="task task-type-"+e.num,r.rx=3,r.ry=3,j(s,r);let o=e.x+14;e.people.forEach((t=>{let n=e.actors[t].color,i={cx:o,cy:e.y,r:7,fill:n,stroke:"#000",title:t,pos:e.actors[t].position};F(s,i),o+=10})),z(i)(e.task,s,r.x,r.y,r.width,r.height,{class:"task"},i,e.colour)}),"drawTask"),R=a((function(t,e){i(t,e)}),"drawBackgroundRect"),z=function(){function t(t,e,n,a,s,r,o,l){i(e.append("text").attr("x",n+s/2).attr("y",a+r/2+5).style("font-color",l).style("text-anchor","middle").text(t),o)}function e(t,e,n,a,s,r,o,l,c){let{taskFontSize:h,taskFontFamily:u}=l,p=t.split(/<br\s*\/?>/gi);for(let y=0;y<p.length;y++){let t=y*h-h*(p.length-1)/2,l=e.append("text").attr("x",n+s/2).attr("y",a).attr("fill",c).style("text-anchor","middle").style("font-size",h).style("font-family",u);l.append("tspan").attr("x",n+s/2).attr("dy",t).text(p[y]),l.attr("y",a+r/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),i(l,o)}}function n(t,n,a,s,r,o,l,c){let h=n.append("switch"),u=h.append("foreignObject").attr("x",a).attr("y",s).attr("width",r).attr("height",o).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");u.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(t),e(t,h,a,s,r,o,l,c),i(u,l)}function i(t,e){for(let n in e)n in e&&t.attr(n,e[n])}return a(t,"byText"),a(e,"byTspan"),a(n,"byFo"),a(i,"_setTextAttrs"),function(i){return"fo"===i.textPlacement?n:"old"===i.textPlacement?t:e}}(),W=a((function(t){t.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")}),"initGraphics"),Y={drawRect:j,drawCircle:F,drawSection:B,drawText:L,drawLabel:O,drawTask:N,drawBackgroundRect:R,initGraphics:W},X=a((function(t){Object.keys(t).forEach((function(e){U[e]=t[e]}))}),"setConf"),q={};function G(t){let e=r().journey,n=60;Object.keys(q).forEach((i=>{let a=q[i].color,s={cx:20,cy:n,r:7,fill:a,stroke:"#000",pos:q[i].position};Y.drawCircle(t,s);let r={x:40,y:n+7,fill:"#666",text:i,textMargin:5|e.boxTextMargin};Y.drawText(t,r),n+=20}))}a(G,"drawActorLegend");var U=r().journey,H=U.leftMargin,Z=a((function(t,e,n,i){let a,s=r().journey,o=r().securityLevel;"sandbox"===o&&(a=y("#i"+e));let l=y("sandbox"===o?a.nodes()[0].contentDocument.body:"body");J.init();let c=l.select("#"+e);Y.initGraphics(c);let h=i.db.getTasks(),u=i.db.getDiagramTitle(),p=i.db.getActors();for(let r in q)delete q[r];let f=0;p.forEach((t=>{q[t]={color:s.actorColours[f%s.actorColours.length],position:f},f++})),G(c),J.insert(0,0,H,50*Object.keys(q).length),tt(c,h,0);let g=J.getBounds();u&&c.append("text").text(u).attr("x",H).attr("font-size","4ex").attr("font-weight","bold").attr("y",25);let m=g.stopy-g.starty+2*s.diagramMarginY,x=H+g.stopx+2*s.diagramMarginX;d(c,m,x,s.useMaxWidth),c.append("line").attr("x1",H).attr("y1",4*s.height).attr("x2",x-H-4).attr("y2",4*s.height).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)");let k=u?70:0;c.attr("viewBox",`${g.startx} -25 ${x} ${m+k}`),c.attr("preserveAspectRatio","xMinYMin meet"),c.attr("height",m+k+25)}),"draw"),J={data:{startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},verticalPos:0,sequenceItems:[],init:a((function(){this.sequenceItems=[],this.data={startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},this.verticalPos=0}),"init"),updateVal:a((function(t,e,n,i){void 0===t[e]?t[e]=n:t[e]=i(n,t[e])}),"updateVal"),updateBounds:a((function(t,e,n,i){let s=r().journey,o=this,l=0;function c(r){return a((function(a){l++;let c=o.sequenceItems.length-l+1;o.updateVal(a,"starty",e-c*s.boxMargin,Math.min),o.updateVal(a,"stopy",i+c*s.boxMargin,Math.max),o.updateVal(J.data,"startx",t-c*s.boxMargin,Math.min),o.updateVal(J.data,"stopx",n+c*s.boxMargin,Math.max),"activation"!==r&&(o.updateVal(a,"startx",t-c*s.boxMargin,Math.min),o.updateVal(a,"stopx",n+c*s.boxMargin,Math.max),o.updateVal(J.data,"starty",e-c*s.boxMargin,Math.min),o.updateVal(J.data,"stopy",i+c*s.boxMargin,Math.max))}),"updateItemBounds")}a(c,"updateFn"),this.sequenceItems.forEach(c())}),"updateBounds"),insert:a((function(t,e,n,i){let a=Math.min(t,n),s=Math.max(t,n),r=Math.min(e,i),o=Math.max(e,i);this.updateVal(J.data,"startx",a,Math.min),this.updateVal(J.data,"starty",r,Math.min),this.updateVal(J.data,"stopx",s,Math.max),this.updateVal(J.data,"stopy",o,Math.max),this.updateBounds(a,r,s,o)}),"insert"),bumpVerticalPos:a((function(t){this.verticalPos=this.verticalPos+t,this.data.stopy=this.verticalPos}),"bumpVerticalPos"),getVerticalPos:a((function(){return this.verticalPos}),"getVerticalPos"),getBounds:a((function(){return this.data}),"getBounds")},K=U.sectionFills,Q=U.sectionColours,tt=a((function(t,e,n){let i=r().journey,a="",s=n+(2*i.height+i.diagramMarginY),o=0,l="#CCC",c="black",h=0;for(let[r,u]of e.entries()){if(a!==u.section){l=K[o%K.length],h=o%K.length,c=Q[o%Q.length];let n=0,s=u.section;for(let t=r;t<e.length&&e[t].section==s;t++)n+=1;let p={x:r*i.taskMargin+r*i.width+H,y:50,text:u.section,fill:l,num:h,colour:c,taskCount:n};Y.drawSection(t,p,i),a=u.section,o++}let n=u.people.reduce(((t,e)=>(q[e]&&(t[e]=q[e]),t)),{});u.x=r*i.taskMargin+r*i.width+H,u.y=s,u.width=i.diagramMarginX,u.height=i.diagramMarginY,u.colour=c,u.fill=l,u.num=h,u.actors=n,Y.drawTask(t,u,i),J.insert(u.x,u.y,u.x+u.width+i.taskMargin,450)}}),"drawTasks"),et={setConf:X,draw:Z},nt={parser:m,db:P,renderer:et,styles:C,init:a((t=>{et.setConf(t.journey),P.clear()}),"init")};export{nt as diagram};