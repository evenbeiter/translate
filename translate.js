

let tags=['h1','h2','h3','h4','h5','h6','p','span','strong','a'];
for (k=0;k<tags.length;k++){
let all=document.body.querySelectorAll(tags[k]);console.log(all.length);
for (var i=0;i<all.length;i++){
    var a=all[i].innerText;
        if(a!==''){
            var t=await translate(a);
            all[i].innerHTML=all[i].innerHTML+'<br>'+t;
        }
    }
}

async function translate(a){
var url = 'https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&sl=auto&tl=zh-TW&q='+escape(a);
var res=await fetch(url);
var raw=await res.json();
var ts='';
for (var j=0;j<raw[0].length;j++){
    ts=ts+raw[0][j][0];
} 
    return ts
}






//////////////////////////////////////



let tags=['h1','h2','h3','h4','h5','h6','p','span','strong'];
for (k=0;k<tags.length;k++){
let all=document.body.querySelectorAll(tags[k]);console.log(all.length);
for (var i=0;i<all.length;i++){
    if(all[i].tagName!=='div'){
    if(all[i].className!=='elmo'){
        var a=all[i].innerText;
    if(a!==''){
    var tn=all[i].tagName.toLowerCase();console.log(tn);
    var t=await translate(a);
    var tTag=document.createElement(tn);
        tTag.className='elmo';
        tTag.style.color='grey';
    tTag.textContent=t;console.log(tTag);console.log(all[i].nextSibling);
    all[i].parentNode.insertBefore(tTag,all[i].nextSibling);
    }
}
}}}
async function translate(a){
var url = 'https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&sl=auto&tl=zh-TW&q='+escape(a);
var res=await fetch(url);
var raw=await res.json();
var ts='';
for (var j=0;j<raw[0].length;j++){
    ts=ts+raw[0][j][0];
} 
    return ts
}
