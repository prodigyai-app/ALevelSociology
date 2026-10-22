(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.SociologyTools=api;})(typeof window==='undefined'?globalThis:window,()=>{
 'use strict';const groups={1:['culture','families','health','work'],2:['beliefs','development','media','stratification']};
 function paper2(bank,selection){if(![1,2].every(n=>groups[n].includes(selection[n])&&bank.options[selection[n]]))return null;const selected=[selection[1],selection[2]];return{id:'aqa-soc-set1-p2-'+selected.join('-'),paper:2,title:'Set 1 · Topics in Sociology · '+selected.map(k=>bank.options[k].title).join(' / '),minutes:120,marks:80,subject:'Sociology',tier:'A Level',selection:{1:selected[0],2:selected[1]},coverage:selected.map(k=>bank.options[k].title+' · 40 marks'),questions:selected.map(k=>bank.options[k])};}
 function rates(a,n,b,m){if(![a,n,b,m].every(Number.isFinite)||n<=0||m<=0||a<0||b<0||a>n||b>m)return null;const A=100*a/n,B=100*b/m;return{A,B,points:B-A,relative:A===0?null:100*(B-A)/A};}
 function allocation(a,b){if(![a,b].every(Number.isFinite)||a<0||b<0||a+b<=0)return null;return{population:66,sample:100*(.9*a+.3*b)/(a+b),aWeight:100*a/(a+b)};}
 return{groups,paper2,rates,allocation};
});
