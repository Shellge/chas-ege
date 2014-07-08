(function() {

for(var b=0.5;!(b.isZ()&&b>0);){
	var x=sluchch(5,20);
	var a=sluchch(2,x-1);
	var s=sluchch(10,200);
	var t=sluchch(1,15);
	var b=s/(x-a)+s/(x+a)+t;
	
}

/*

Теплоход проходит по течению реки до пункта назначения 200 км и после стоянки возвращается в пункт отправления. 
* Найдите скорость течения, если скорость теплохода в неподвижной воде равна 15 км/ч, стоянка длится 10 часов, 
* а в пункт отправления теплоход возвращается через 40 часов после отплытия из него. Ответ дайте в км/ч.
*/
var f=svVel([
	{vel:'скорость течения',zna:a,rod:1,nah:1,nmn:'км/ч'},
	{vel:'скорость теплохода в неподвижной воде',zna:x,rod:1,nah:1,nmn:'км/ч'},
	{utv:'стоянка длится '+chislitlx(t,'час'),vpr:'сколько часов длится стоянка',zna:t,nah:1},
	{utv:'в пункт отправления теплоход возвращается через '+chislitlx(b,'час')+' после отплытия из него',
		vpr:'через сколько часов после отплытия теплоход возвращается в пункт отправления',zna:b,nah:1},
	{vel:'расстояние от пункта отправления до пункта назначения',zna:s,rod:2,nah:1,nmn:'км'},
]);

window.vopr.ver=[''+f.splice(0,1)];
window.vopr.txt='Теплоход проходит по течению реки до пункта назначения и после стоянки возвращается в пункт отправления. '+f.shuffle().soed();

window.vopr.kat['log']=0;
window.vopr.kat['prz']=0;
window.vopr.kat['drs']=0;
window.vopr.kat['tri']=0;
})();

//Обзад 26588 26589
//Николай Авдеев