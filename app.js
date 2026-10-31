const $=id=>document.getElementById(id);
const now=new Date(),T={y:now.getFullYear(),m:now.getMonth()+1,d:now.getDate()};
const iso=o=>`${o.y}-${String(o.m).padStart(2,'0')}-${String(o.d).padStart(2,'0')}`;
$('t').addEventListener('input',()=>{const c=Calc.countChars($('t').value);
[['c1','withSpace'],['c2','noSpace'],['c3','utf8'],['c4','euckr'],['c5','words'],['c6','lines']].forEach(([i,k])=>$(i).textContent=c[k].toLocaleString())});
$('ref').value=iso(T);
function age(){if(!$('bd').value)return;const b=Calc.parse($('bd').value),r=Calc.parse($('ref').value||iso(T));const a=Calc.manAge(b,r);
$('ageOut').textContent=a<0?'기준일이 생년월일보다 빠릅니다':`만 ${a}세 (연 나이 ${Calc.yearAge(b,r)}세)`}
$('bd').oninput=age;$('ref').oninput=age;
$('target').oninput=()=>{if(!$('target').value)return;const n=Calc.daysBetween(T,Calc.parse($('target').value));
$('ddOut').textContent=Calc.ddayLabel(n)+(n===0?' (오늘)':'')+` · 오늘 포함 시 ${n>=0?n+1:-n+1}일째`};
$('py').oninput=()=>{$('m2').value=$('py').value?Calc.pyToM2(+$('py').value).toFixed(2):''};
$('m2').oninput=()=>{$('py').value=$('m2').value?Calc.m2ToPy(+$('m2').value).toFixed(2):''};
