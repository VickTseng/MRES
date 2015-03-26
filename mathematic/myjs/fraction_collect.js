/**
 * @author wei
 */

var proper = {	//真分數
	nume:[],
	denom:[],	
	path:[],
	property:"proper"
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

for(var i=0; i<proper.nume.length; i++){	//儲存圖卡路徑
	proper.path.push(proper.denom[i]+"_"+proper.nume[i]);
}

/******/
var improper = {	//假分數
	nume:[],
	denom:[],
	path:[],
	property:"improper"
}

for(var i=3, j=2; i<=4; i++){
	improper.nume.push(i);
	improper.denom.push(j);
}
for(var i=4, j=3; i<=6; i++){
	improper.nume.push(i);
	improper.denom.push(j);
}
for(var i=5, j=4; i<=8; i++){
	improper.nume.push(i);
	improper.denom.push(j);
}
for(var i=6, j=5; i<=10; i++){
	improper.nume.push(i);
	improper.denom.push(j);
}
for(var i=7, j=6; i<=12; i++){
	improper.nume.push(i);
	improper.denom.push(j);
}
for(var i=8, j=7; i<=14; i++){
	improper.nume.push(i);
	improper.denom.push(j);
}
for(var i=9, j=8; i<=16; i++){
	improper.nume.push(i);
	improper.denom.push(j);
}
for(var i=10, j=9; i<=18; i++){
	improper.nume.push(i);
	improper.denom.push(j);
}
for(var i=11, j=10; i<=20; i++){
	improper.nume.push(i);
	improper.denom.push(j);
}

for(var i=0; i<improper.nume.length; i++){	//儲存圖卡路徑
	improper.path.push(improper.denom[i]+"_"+improper.nume[i]);
}

/****/
var mixed = {	//帶分數
	whole:[],
	nume:[],
	denom:[],
	path:[],
	property:"mixed"
}

for(var i=1, j=2; i<=1; i++){
	mixed.nume.push(i);
	mixed.denom.push(j);
}
for(var i=1, j=3; i<=2; i++){
	mixed.nume.push(i);
	mixed.denom.push(j);
}
for(var i=1, j=4; i<=3; i++){
	mixed.nume.push(i);
	mixed.denom.push(j);
}
for(var i=1, j=5; i<=4; i++){
	mixed.nume.push(i);
	mixed.denom.push(j);
}
for(var i=1, j=6; i<=5; i++){
	mixed.nume.push(i);
	mixed.denom.push(j);
}
for(var i=1, j=7; i<=6; i++){
	mixed.nume.push(i);
	mixed.denom.push(j);
}
for(var i=1, j=8; i<=7; i++){
	mixed.nume.push(i);
	mixed.denom.push(j);
}
for(var i=1, j=9; i<=8; i++){
	mixed.nume.push(i);
	mixed.denom.push(j);
}
for(var i=1, j=10; i<=9; i++){
	mixed.nume.push(i);
	mixed.denom.push(j);
}

for(var i=0; i<mixed.nume.length; i++){
	mixed.whole.push(1);
}

for(var i=0; i<mixed.nume.length; i++){	//儲存圖卡路徑
	mixed.path.push(mixed.whole[i]+"_"+mixed.denom[i]+"_"+mixed.nume[i]);
}

