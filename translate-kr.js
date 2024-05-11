javascript: (async()=>{
let all=document.body.querySelectorAll('.tl');
for (var i=0;i<all.length;i++){
if (all[i].innerText!==''){
var t=await translate(all[i].innerText);
var e=await translateEN(all[i].innerText);
all[i].innerHTML=all[i].innerHTML+'<br>'+t+'<br>'+e;
}}

async function translate(a){
var url = 'https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&sl=auto&tl=zh-TW&q='+encodeURIComponent(a);
var res=await fetch(url);
var raw=await res.json();
var ts='';
for (var j=0;j<raw[0].length;j++){
    ts=ts+raw[0][j][0];
}
    return ts
}

async function translateEN(a){
var url = 'https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&sl=auto&tl=en&q='+encodeURIComponent(a);
var res=await fetch(url);
var raw=await res.json();
var ts='';
for (var j=0;j<raw[0].length;j++){
    ts=ts+raw[0][j][0];
}
    return ts
}
})();