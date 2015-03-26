/**
 * @author wei
 */
var proper = {
	nume: [],
	denom: [],	
	path: []
}

for(var i=1, j=2; i<=1; i++){
	proper.nume.push(i);
	proper.denom.push(j);
}
for(var i=1, j=3; i<=2; i++){
	proper.nume.push(i);
	proper.denom.push(j);
}
for(var i=1, j=4; i<=3; i++){
	proper.nume.push(i);
	proper.denom.push(j);
}
for(var i=1, j=5; i<=4; i++){
	proper.nume.push(i);
	proper.denom.push(j);
}
for(var i=1, j=6; i<=5; i++){
	proper.nume.push(i);
	proper.denom.push(j);
}
for(var i=1, j=7; i<=6; i++){
	proper.nume.push(i);
	proper.denom.push(j);
}
for(var i=1, j=8; i<=7; i++){
	proper.nume.push(i);
	proper.denom.push(j);
}
for(var i=1, j=9; i<=8; i++){
	proper.nume.push(i);
	proper.denom.push(j);
}
for(var i=1, j=10; i<=9; i++){
	proper.nume.push(i);
	proper.denom.push(j);
}
/*for(var i=1, j=12; i<=11; i++){
	proper.nume.push(i);
	proper.denom.push(j);
}
for(var i=1, j=14; i<=13; i++){
	proper.nume.push(i);
	proper.denom.push(j);
}
for(var i=1, j=15; i<=14; i++){
	proper.nume.push(i);
	proper.denom.push(j);
}
for(var i=1, j=16; i<=15; i++){
	proper.nume.push(i);
	proper.denom.push(j);
}
for(var i=1, j=18; i<=17; i++){
	proper.nume.push(i);
	proper.denom.push(j);
}
for(var i=1, j=20; i<=19; i++){
	proper.nume.push(i);
	proper.denom.push(j);
}*/

for(var i=0; i<proper.nume.length; i++){	//儲存圖卡路徑
	proper.path.push(proper.denom[i]+"_"+proper.nume[i]);
}
