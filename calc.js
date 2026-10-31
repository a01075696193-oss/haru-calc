(function(g){
const C={};
C.countChars=s=>{const t=s.trim();return{withSpace:[...s].length,noSpace:[...s.replace(/\s/g,'')].length,
utf8:new TextEncoder().encode(s).length,euckr:[...s].reduce((k,ch)=>k+(ch.codePointAt(0)>127?2:1),0),
words:t?t.split(/\s+/).length:0,lines:s?s.split(/\r\n|\r|\n/).length:0}};
// y,m,d as numbers. 만 나이: 생일(같은 월·일)이 지나야 +1. 2/29생은 평년엔 3/1에 나이 증가(민법 160조 3항: 해당일 없으면 그 월 말일 만료).
C.manAge=(b,r)=>{let a=r.y-b.y;if(r.m<b.m||(r.m===b.m&&r.d<b.d))a--;return a};
C.yearAge=(b,r)=>r.y-b.y;
C.parse=s=>{const[y,m,d]=s.split('-').map(Number);return{y,m,d}};
const dn=o=>Date.UTC(o.y,o.m-1,o.d)/864e5;
C.daysBetween=(from,to)=>dn(to)-dn(from);
C.ddayLabel=n=>n>0?'D-'+n:n<0?'D+'+(-n):'D-Day';
C.R=400/121;C.pyToM2=p=>p*C.R;C.m2ToPy=m=>m/C.R;
if(typeof module!=='undefined')module.exports=C;else g.Calc=C;
})(this);
