(function() {

var b=sluchiz([1,2])[0];
var a=sluchch(b+1,9);
var c=sluchch(11,25);
var p='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';
p='data:image/png;base64,'+p;

var h=om.zhidkost.re.iz();
var d='<img style="float:right;" src="'+p+/*'../ris/1.png*/'"></img>В сосуде, имеющем форму конуса, уровень ';
var m=' достигает ';
var f=' высоты. Объём '+h+' равен ';
var g=' л. Сколько литров ';
var n=' нужно долить, чтобы полностью наполнить сосуд?';//<br/><br/><br/><br/>';
window.vopr.txt=d+h+m+'$'+b.frac(a)+'$'+f+c+g+h+n;
window.vopr.ver=[''+(c*(a*a*a/b/b/b-1))];

window.vopr.kat['log']=0;
window.vopr.kat['prz']=0;
window.vopr.kat['drs']=0;
window.vopr.kat['tri']=0;
})();
