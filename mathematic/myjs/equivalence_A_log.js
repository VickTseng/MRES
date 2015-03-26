/**
 * @author vick
 */
var now = new Date();	//取得今日的時間
var data_log = {	//儲存行為資料
	time: 0,
	member_A_error_times:0,  //錯誤的次數
	member_B_error_times:0,
	member_C_error_times:0,
	
	member_A_answer_times:0,  //每個人的填答次數
	member_B_answer_times:0,
	member_C_answer_times:0,
	
	member_A_trans_times: {gra_first:0, gra_second:0, gra_third:0},	//圖卡轉換的次數
	member_B_trans_times: {gra_first:0, gra_second:0, gra_third:0},
	member_C_trans_times: {gra_first:0, gra_second:0, gra_third:0},
	
	member_A_trans_error_times:0,	//圖卡的錯誤轉換次數
	member_B_trans_error_times:0,
	member_C_trans_error_times:0,
	
	member_A_trans_cancel_times: {gra_first:0, gra_second:0, gra_third:0},	//圖卡轉換時，取消轉換的次數
	member_B_trans_cancel_times: {gra_first:0, gra_second:0, gra_third:0},
	member_C_trans_cancel_times: {gra_first:0, gra_second:0, gra_third:0},
	
	member_A_trans_previous_times:0,	//轉換圖卡時，點選上一步的次數
	member_B_trans_previous_times:0,
	member_C_trans_previous_times:0,
	
	member_A_trans_time:0,	//圖卡的轉換時間
	member_B_trans_time:0,
	member_C_trans_time:0,	
}
