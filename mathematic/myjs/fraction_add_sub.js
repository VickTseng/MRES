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

for(var i=0; i<proper.nume.length; i++){	//儲存圖卡路徑
	proper.path.push(proper.denom[i]+"_"+proper.nume[i]);
}