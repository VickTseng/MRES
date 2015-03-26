/**
 * @author wei
 */
var counter_easy = 0;

var easy_digits = {		//問題的數字
	first: [10,4,7,12,8,13],
	second: [5,7,2,9,5,6],
	third: [6,8,6,5,4,9],
	forth: [9,3,3,16,9,10],
	operator: ["+","-","*","/"]
}

var easy_ques = {	//題庫
	q1: [easy_digits.first[0], easy_digits.operator[0], easy_digits.second[0], easy_digits.operator[1], easy_digits.third[0], easy_digits.forth[0]],	//10+5-6 = 9
	q2: [easy_digits.first[1], easy_digits.operator[0], easy_digits.second[1], easy_digits.operator[1], easy_digits.third[1], easy_digits.forth[1]],	//4+7-8	= 3
	q3: [easy_digits.first[2], easy_digits.operator[0], easy_digits.second[2], easy_digits.operator[1], easy_digits.third[2], easy_digits.forth[2]],	//7+2-6	= 3
	q4: [easy_digits.first[3], easy_digits.operator[0], easy_digits.second[3], easy_digits.operator[1], easy_digits.third[3], easy_digits.forth[3]], //12+9-5 =16
	q5: [easy_digits.first[4], easy_digits.operator[0], easy_digits.second[4], easy_digits.operator[1], easy_digits.third[4], easy_digits.forth[4]],	//8+5-4=9
	q6: [easy_digits.first[5], easy_digits.operator[0], easy_digits.second[5], easy_digits.operator[1], easy_digits.third[5], easy_digits.forth[5]]		//13+6-9=10
}

for(var i in easy_ques){ //計算題數
	if(easy_ques.hasOwnProperty(i)){
		counter_easy++;
	}	
}

/* ****************************************** */


