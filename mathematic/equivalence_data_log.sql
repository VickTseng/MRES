-- phpMyAdmin SQL Dump
-- version 3.4.9
-- http://www.phpmyadmin.net
--
-- 主機: localhost
-- 產生日期: 2013 年 05 月 26 日 08:54
-- 伺服器版本: 5.5.20
-- PHP 版本: 5.3.9

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 資料庫: `equivalence_data_log`
--

-- --------------------------------------------------------

--
-- 表的結構 `A_member_card`
--

CREATE TABLE IF NOT EXISTS `A_member_card` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `ques_index` varchar(100) NOT NULL,
  `who` varchar(100) NOT NULL,
  `gra_first` varchar(100) NOT NULL,
  `gra_second` varchar(100) NOT NULL,
  `gra_third` varchar(100) NOT NULL,
  `date` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=68 ;

--
-- 轉存資料表中的資料 `A_member_card`
--

INSERT INTO `A_member_card` (`id`, `ques_index`, `who`, `gra_first`, `gra_second`, `gra_third`, `date`) VALUES
(17, 'first', 'member_A', '4_24', '3_15', '10_12', 'Sun May 26 2013 01:31:08 GMT+0800'),
(18, 'first', 'member_C', '5_30', '5_25', '20_24', 'Sun May 26 2013 01:31:08 GMT+0800'),
(19, 'first', 'member_B', '3_18', '2_10', '25_30', 'Sun May 26 2013 01:31:08 GMT+0800'),
(20, 'second', 'member_A', '3_18', '2_10', '25_30', 'Sun May 26 2013 01:31:08 GMT+0800'),
(21, 'second', 'member_B', '5_30', '5_25', '20_24', 'Sun May 26 2013 01:31:08 GMT+0800'),
(22, 'second', 'member_C', '4_24', '3_15', '10_12', 'Sun May 26 2013 01:31:08 GMT+0800'),
(23, 'third', 'member_A', '5_30', '5_25', '20_24', 'Sun May 26 2013 01:31:08 GMT+0800'),
(24, 'third', 'member_C', '3_18', '2_10', '25_30', 'Sun May 26 2013 01:31:08 GMT+0800'),
(25, 'third', 'member_B', '4_24', '3_15', '10_12', 'Sun May 26 2013 01:31:08 GMT+0800'),
(26, 'first', 'member_B', '16_24', '10_20', '12_18', 'Sun May 26 2013 13:19:56 GMT+0800'),
(27, 'first', 'member_A', '8_12', '6_12', '6_9', 'Sun May 26 2013 13:19:56 GMT+0800'),
(28, 'first', 'member_C', '4_6', '2_4', '10_15', 'Sun May 26 2013 13:19:56 GMT+0800'),
(29, 'second', 'member_B', '4_6', '2_4', '10_15', 'Sun May 26 2013 13:19:56 GMT+0800'),
(30, 'second', 'member_A', '16_24', '10_20', '12_18', 'Sun May 26 2013 13:19:56 GMT+0800'),
(31, 'second', 'member_C', '8_12', '6_12', '6_9', 'Sun May 26 2013 13:19:56 GMT+0800'),
(32, 'third', 'member_A', '4_6', '2_4', '10_15', 'Sun May 26 2013 13:19:56 GMT+0800'),
(33, 'third', 'member_B', '8_12', '6_12', '6_9', 'Sun May 26 2013 13:19:56 GMT+0800'),
(34, 'third', 'member_C', '16_24', '10_20', '12_18', 'Sun May 26 2013 13:19:56 GMT+0800'),
(35, 'first', 'member_A', '9_18', '2_10', '15_18', 'Sun May 26 2013 13:20:02 GMT+0800'),
(36, 'first', 'member_B', '15_30', '4_20', '25_30', 'Sun May 26 2013 13:20:02 GMT+0800'),
(37, 'first', 'member_C', '12_24', '3_15', '5_6', 'Sun May 26 2013 13:20:02 GMT+0800'),
(38, 'second', 'member_B', '12_24', '3_15', '5_6', 'Sun May 26 2013 13:20:02 GMT+0800'),
(39, 'second', 'member_A', '15_30', '4_20', '25_30', 'Sun May 26 2013 13:20:02 GMT+0800'),
(40, 'second', 'member_C', '9_18', '2_10', '15_18', 'Sun May 26 2013 13:20:02 GMT+0800'),
(41, 'first', 'member_A', '8_20', '20_30', '10_12', 'Sun May 26 2013 13:21:57 GMT+0800'),
(42, 'first', 'member_B', '10_25', '18_27', '25_30', 'Sun May 26 2013 13:21:57 GMT+0800'),
(43, 'first', 'member_C', '2_5', '10_15', '5_6', 'Sun May 26 2013 13:21:57 GMT+0800'),
(44, 'second', 'member_A', '10_25', '18_27', '25_30', 'Sun May 26 2013 13:21:57 GMT+0800'),
(45, 'second', 'member_B', '2_5', '10_15', '5_6', 'Sun May 26 2013 13:21:57 GMT+0800'),
(46, 'second', 'member_C', '8_20', '20_30', '10_12', 'Sun May 26 2013 13:21:57 GMT+0800'),
(47, 'first', 'member_A', '16_24', '3_18', '2_8', 'Sun May 26 2013 13:26:33 GMT+0800'),
(48, 'first', 'member_C', '8_12', '4_24', '5_20', 'Sun May 26 2013 13:26:33 GMT+0800'),
(49, 'first', 'member_B', '18_27', '5_30', '6_24', 'Sun May 26 2013 13:26:33 GMT+0800'),
(50, 'first', 'member_A', '5_25', '10_12', '14_21', 'Sun May 26 2013 13:27:38 GMT+0800'),
(51, 'first', 'member_B', '3_15', '20_24', '2_3', 'Sun May 26 2013 13:27:38 GMT+0800'),
(52, 'first', 'member_C', '6_30', '5_6', '16_24', 'Sun May 26 2013 13:27:38 GMT+0800'),
(53, 'first', 'member_B', '8_20', '4_12', '12_18', 'Sun May 26 2013 13:34:47 GMT+0800'),
(54, 'first', 'member_C', '4_10', '2_6', '20_30', 'Sun May 26 2013 13:34:47 GMT+0800'),
(55, 'first', 'member_A', '12_30', '10_30', '8_12', 'Sun May 26 2013 13:34:47 GMT+0800'),
(56, 'first', 'member_A', '2_10', '6_18', '6_10', 'Sun May 26 2013 13:35:03 GMT+0800'),
(57, 'first', 'member_B', '3_15', '8_24', '9_15', 'Sun May 26 2013 13:35:03 GMT+0800'),
(58, 'first', 'member_C', '4_20', '2_6', '3_5', 'Sun May 26 2013 13:35:03 GMT+0800'),
(59, 'first', 'member_A', '4_10', '6_9', '12_18', 'Sun May 26 2013 13:35:04 GMT+0800'),
(60, 'first', 'member_B', '6_15', '4_6', '16_24', 'Sun May 26 2013 13:35:04 GMT+0800'),
(61, 'first', 'member_C', '10_25', '10_15', '20_30', 'Sun May 26 2013 13:35:04 GMT+0800'),
(62, 'first', 'member_A', '5_20', '18_24', '12_15', 'Sun May 26 2013 13:36:31 GMT+0800'),
(63, 'first', 'member_B', '7_28', '9_12', '8_10', 'Sun May 26 2013 13:36:31 GMT+0800'),
(64, 'first', 'member_C', '1_4', '21_28', '20_25', 'Sun May 26 2013 13:36:31 GMT+0800'),
(65, 'first', 'member_A', '20_30', '7_21', '18_24', 'Sun May 26 2013 13:40:42 GMT+0800'),
(66, 'first', 'member_B', '12_18', '9_27', '6_8', 'Sun May 26 2013 13:40:42 GMT+0800'),
(67, 'first', 'member_C', '16_24', '5_15', '15_20', 'Sun May 26 2013 13:40:42 GMT+0800');

-- --------------------------------------------------------

--
-- 表的結構 `A_operate_times`
--

CREATE TABLE IF NOT EXISTS `A_operate_times` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `question` varchar(100) NOT NULL,
  `who` varchar(100) NOT NULL,
  `error_times` int(100) NOT NULL,
  `answer_times` int(100) NOT NULL,
  `date` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=60 ;

--
-- 轉存資料表中的資料 `A_operate_times`
--

INSERT INTO `A_operate_times` (`id`, `question`, `who`, `error_times`, `answer_times`, `date`) VALUES
(15, 'first', 'member_A', 0, 0, 'Wed May 22 2013 22:23:54 GMT+0800'),
(16, 'first', 'member_B', 0, 0, 'Wed May 22 2013 22:23:54 GMT+0800'),
(17, 'first', 'member_C', 0, 0, 'Wed May 22 2013 22:23:54 GMT+0800'),
(18, 'second', 'member_A', 0, 1, 'Wed May 22 2013 22:23:54 GMT+0800'),
(19, 'second', 'member_C', 1, 2, 'Wed May 22 2013 22:23:54 GMT+0800'),
(20, 'second', 'member_B', 0, 1, 'Wed May 22 2013 22:23:54 GMT+0800'),
(21, 'third', 'member_A', 1, 2, 'Wed May 22 2013 22:23:54 GMT+0800'),
(22, 'third', 'member_B', 0, 1, 'Wed May 22 2013 22:23:54 GMT+0800'),
(23, 'third', 'member_C', 0, 1, 'Wed May 22 2013 22:23:54 GMT+0800'),
(24, 'first', 'member_A', 0, 0, 'Thu May 23 2013 12:48:00 GMT+0800'),
(25, 'first', 'member_B', 0, 0, 'Thu May 23 2013 12:48:00 GMT+0800'),
(26, 'first', 'member_C', 0, 0, 'Thu May 23 2013 12:48:00 GMT+0800'),
(27, 'second', 'member_A', 0, 0, 'Thu May 23 2013 12:48:00 GMT+0800'),
(28, 'second', 'member_B', 0, 0, 'Thu May 23 2013 12:48:00 GMT+0800'),
(29, 'second', 'member_C', 0, 0, 'Thu May 23 2013 12:48:00 GMT+0800'),
(30, 'first', 'member_A', 0, 0, 'Thu May 23 2013 15:02:37 GMT+0800'),
(31, 'first', 'member_B', 0, 0, 'Thu May 23 2013 15:02:37 GMT+0800'),
(32, 'first', 'member_C', 0, 0, 'Thu May 23 2013 15:02:37 GMT+0800'),
(33, 'first', 'member_C', 0, 1, 'Thu May 23 2013 22:47:16 GMT+0800'),
(34, 'first', 'member_B', 2, 4, 'Thu May 23 2013 22:47:16 GMT+0800'),
(35, 'first', 'member_A', 0, 1, 'Thu May 23 2013 22:47:16 GMT+0800'),
(36, 'first', 'member_B', 0, 0, 'Sun May 26 2013 01:13:50 GMT+0800'),
(37, 'first', 'member_C', 0, 0, 'Sun May 26 2013 01:13:50 GMT+0800'),
(38, 'first', 'member_A', 0, 0, 'Sun May 26 2013 01:13:50 GMT+0800'),
(39, 'first', 'member_B', 0, 0, 'Sun May 26 2013 01:28:36 GMT+0800'),
(40, 'first', 'member_A', 0, 0, 'Sun May 26 2013 01:28:36 GMT+0800'),
(41, 'first', 'member_C', 0, 0, 'Sun May 26 2013 01:28:36 GMT+0800'),
(42, 'first', 'member_A', 0, 0, 'Sun May 26 2013 01:31:08 GMT+0800'),
(43, 'first', 'member_B', 0, 0, 'Sun May 26 2013 01:31:08 GMT+0800'),
(44, 'first', 'member_C', 0, 0, 'Sun May 26 2013 01:31:08 GMT+0800'),
(45, 'second', 'member_A', 0, 0, 'Sun May 26 2013 01:31:08 GMT+0800'),
(46, 'second', 'member_B', 0, 0, 'Sun May 26 2013 01:31:08 GMT+0800'),
(47, 'second', 'member_C', 0, 0, 'Sun May 26 2013 01:31:08 GMT+0800'),
(48, 'first', 'member_A', 0, 0, 'Sun May 26 2013 13:19:56 GMT+0800'),
(49, 'first', 'member_B', 0, 0, 'Sun May 26 2013 13:19:56 GMT+0800'),
(50, 'first', 'member_C', 0, 0, 'Sun May 26 2013 13:19:56 GMT+0800'),
(51, 'second', 'member_C', 0, 0, 'Sun May 26 2013 13:19:56 GMT+0800'),
(52, 'second', 'member_B', 0, 0, 'Sun May 26 2013 13:19:56 GMT+0800'),
(53, 'second', 'member_A', 0, 0, 'Sun May 26 2013 13:19:56 GMT+0800'),
(54, 'first', 'member_A', 0, 0, 'Sun May 26 2013 13:20:02 GMT+0800'),
(55, 'first', 'member_B', 0, 0, 'Sun May 26 2013 13:20:02 GMT+0800'),
(56, 'first', 'member_C', 0, 0, 'Sun May 26 2013 13:20:02 GMT+0800'),
(57, 'first', 'member_C', 0, 0, 'Sun May 26 2013 13:21:57 GMT+0800'),
(58, 'first', 'member_A', 0, 0, 'Sun May 26 2013 13:21:57 GMT+0800'),
(59, 'first', 'member_B', 0, 0, 'Sun May 26 2013 13:21:57 GMT+0800');

-- --------------------------------------------------------

--
-- 表的結構 `A_question`
--

CREATE TABLE IF NOT EXISTS `A_question` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `ques_index` varchar(100) NOT NULL,
  `question` varchar(100) NOT NULL,
  `date` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=71 ;

--
-- 轉存資料表中的資料 `A_question`
--

INSERT INTO `A_question` (`id`, `ques_index`, `question`, `date`) VALUES
(8, 'first', '4_6', 'Thu May 23 2013 13:46:40 GMT+0800'),
(9, 'second', '4_10', 'Thu May 23 2013 13:46:40 GMT+0800'),
(10, 'third', '4_12', 'Thu May 23 2013 13:46:40 GMT+0800'),
(11, 'first', '4_20', 'Thu May 23 2013 15:02:37 GMT+0800'),
(12, 'second', '5_6', 'Thu May 23 2013 15:02:37 GMT+0800'),
(13, 'third', '1_4', 'Thu May 23 2013 15:02:37 GMT+0800'),
(14, 'first', '4_10', 'Thu May 23 2013 22:47:16 GMT+0800'),
(15, 'second', '6_10', 'Thu May 23 2013 22:47:16 GMT+0800'),
(16, 'third', '2_3', 'Thu May 23 2013 22:47:16 GMT+0800'),
(17, 'first', '6_12', 'Sun May 26 2013 01:13:49 GMT+0800'),
(18, 'second', '3_18', 'Sun May 26 2013 01:13:49 GMT+0800'),
(19, 'third', '20_24', 'Sun May 26 2013 01:13:49 GMT+0800'),
(20, 'first', '3_6', 'Sun May 26 2013 01:13:50 GMT+0800'),
(21, 'second', '1_5', 'Sun May 26 2013 01:13:50 GMT+0800'),
(22, 'third', '1_6', 'Sun May 26 2013 01:13:50 GMT+0800'),
(23, 'first', '4_6', 'Sun May 26 2013 01:19:21 GMT+0800'),
(24, 'second', '12_16', 'Sun May 26 2013 01:19:21 GMT+0800'),
(25, 'third', '8_12', 'Sun May 26 2013 01:19:21 GMT+0800'),
(26, 'first', '5_6', 'Sun May 26 2013 01:24:23 GMT+0800'),
(27, 'second', '6_10', 'Sun May 26 2013 01:24:23 GMT+0800'),
(28, 'third', '2_10', 'Sun May 26 2013 01:24:23 GMT+0800'),
(29, 'first', '6_10', 'Sun May 26 2013 01:25:15 GMT+0800'),
(30, 'second', '3_9', 'Sun May 26 2013 01:25:15 GMT+0800'),
(31, 'third', '2_10', 'Sun May 26 2013 01:25:15 GMT+0800'),
(32, 'first', '2_5', 'Sun May 26 2013 01:27:40 GMT+0800'),
(33, 'second', '1_2', 'Sun May 26 2013 01:27:40 GMT+0800'),
(34, 'third', '3_6', 'Sun May 26 2013 01:27:40 GMT+0800'),
(35, 'first', '3_15', 'Sun May 26 2013 01:28:36 GMT+0800'),
(36, 'second', '8_10', 'Sun May 26 2013 01:28:36 GMT+0800'),
(37, 'third', '3_4', 'Sun May 26 2013 01:28:36 GMT+0800'),
(38, 'first', '1_6', 'Sun May 26 2013 01:31:08 GMT+0800'),
(39, 'second', '1_5', 'Sun May 26 2013 01:31:08 GMT+0800'),
(40, 'third', '5_6', 'Sun May 26 2013 01:31:08 GMT+0800'),
(41, 'first', '12_18', 'Sun May 26 2013 13:19:56 GMT+0800'),
(42, 'second', '4_8', 'Sun May 26 2013 13:19:56 GMT+0800'),
(43, 'third', '2_3', 'Sun May 26 2013 13:19:56 GMT+0800'),
(44, 'first', '3_6', 'Sun May 26 2013 13:20:02 GMT+0800'),
(45, 'second', '1_5', 'Sun May 26 2013 13:20:02 GMT+0800'),
(46, 'third', '10_12', 'Sun May 26 2013 13:20:02 GMT+0800'),
(47, 'first', '4_10', 'Sun May 26 2013 13:21:57 GMT+0800'),
(48, 'second', '2_3', 'Sun May 26 2013 13:21:57 GMT+0800'),
(49, 'third', '15_18', 'Sun May 26 2013 13:21:57 GMT+0800'),
(50, 'first', '2_3', 'Sun May 26 2013 13:26:33 GMT+0800'),
(51, 'second', '1_6', 'Sun May 26 2013 13:26:33 GMT+0800'),
(52, 'third', '1_4', 'Sun May 26 2013 13:26:33 GMT+0800'),
(53, 'first', '1_5', 'Sun May 26 2013 13:27:38 GMT+0800'),
(54, 'second', '15_18', 'Sun May 26 2013 13:27:38 GMT+0800'),
(55, 'third', '4_6', 'Sun May 26 2013 13:27:38 GMT+0800'),
(56, 'first', '2_5', 'Sun May 26 2013 13:34:47 GMT+0800'),
(57, 'second', '6_18', 'Sun May 26 2013 13:34:47 GMT+0800'),
(58, 'third', '2_3', 'Sun May 26 2013 13:34:47 GMT+0800'),
(59, 'first', '1_5', 'Sun May 26 2013 13:35:03 GMT+0800'),
(60, 'second', '4_12', 'Sun May 26 2013 13:35:03 GMT+0800'),
(61, 'third', '12_20', 'Sun May 26 2013 13:35:03 GMT+0800'),
(62, 'first', '2_5', 'Sun May 26 2013 13:35:04 GMT+0800'),
(63, 'second', '2_3', 'Sun May 26 2013 13:35:04 GMT+0800'),
(64, 'third', '4_6', 'Sun May 26 2013 13:35:04 GMT+0800'),
(65, 'first', '2_8', 'Sun May 26 2013 13:36:31 GMT+0800'),
(66, 'second', '3_4', 'Sun May 26 2013 13:36:31 GMT+0800'),
(67, 'third', '4_5', 'Sun May 26 2013 13:36:31 GMT+0800'),
(68, 'first', '4_6', 'Sun May 26 2013 13:40:42 GMT+0800'),
(69, 'second', '1_3', 'Sun May 26 2013 13:40:42 GMT+0800'),
(70, 'third', '3_4', 'Sun May 26 2013 13:40:42 GMT+0800');

-- --------------------------------------------------------

--
-- 表的結構 `A_total_time`
--

CREATE TABLE IF NOT EXISTS `A_total_time` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `question` varchar(100) NOT NULL,
  `time` int(100) NOT NULL,
  `date` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=35 ;

--
-- 轉存資料表中的資料 `A_total_time`
--

INSERT INTO `A_total_time` (`id`, `question`, `time`, `date`) VALUES
(7, 'first', 2, 'Wed May 22 2013 20:57:36 GMT+0800'),
(8, 'second', 4, 'Wed May 22 2013 20:57:36 GMT+0800'),
(9, 'third', 7, 'Wed May 22 2013 20:57:36 GMT+0800'),
(10, 'first', 8, 'Wed May 22 2013 20:59:38 GMT+0800'),
(11, 'second', 3, 'Wed May 22 2013 20:59:38 GMT+0800'),
(12, 'third', 3, 'Wed May 22 2013 20:59:38 GMT+0800'),
(13, 'first', 2, 'Wed May 22 2013 22:02:31 GMT+0800'),
(14, 'first', 2, 'Wed May 22 2013 22:06:52 GMT+0800'),
(15, 'first', 1, 'Wed May 22 2013 22:08:35 GMT+0800'),
(16, 'first', 47, 'Wed May 22 2013 22:11:22 GMT+0800'),
(17, 'first', 27, 'Wed May 22 2013 22:13:32 GMT+0800'),
(18, 'first', 25, 'Wed May 22 2013 22:14:38 GMT+0800'),
(19, 'first', 1, 'Wed May 22 2013 22:23:18 GMT+0800'),
(20, 'first', 1, 'Wed May 22 2013 22:23:54 GMT+0800'),
(21, 'second', 33, 'Wed May 22 2013 22:23:54 GMT+0800'),
(22, 'third', 38, 'Wed May 22 2013 22:23:54 GMT+0800'),
(23, 'first', 1941, 'Thu May 23 2013 12:48:00 GMT+0800'),
(24, 'second', 4, 'Thu May 23 2013 12:48:00 GMT+0800'),
(25, 'first', 5, 'Thu May 23 2013 15:02:37 GMT+0800'),
(26, 'first', 103, 'Thu May 23 2013 22:47:16 GMT+0800'),
(27, 'first', 8, 'Sun May 26 2013 01:13:50 GMT+0800'),
(28, 'first', 35, 'Sun May 26 2013 01:28:36 GMT+0800'),
(29, 'first', 4, 'Sun May 26 2013 01:31:08 GMT+0800'),
(30, 'second', 6, 'Sun May 26 2013 01:31:08 GMT+0800'),
(31, 'first', 1, 'Sun May 26 2013 13:19:56 GMT+0800'),
(32, 'second', 3, 'Sun May 26 2013 13:19:56 GMT+0800'),
(33, 'first', 0, 'Sun May 26 2013 13:20:02 GMT+0800'),
(34, 'first', 0, 'Sun May 26 2013 13:21:57 GMT+0800');

-- --------------------------------------------------------

--
-- 表的結構 `B_card_trans_time`
--

CREATE TABLE IF NOT EXISTS `B_card_trans_time` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `ques_index` varchar(100) NOT NULL,
  `card` varchar(100) NOT NULL,
  `before_trans` varchar(100) NOT NULL,
  `after_trans` varchar(100) NOT NULL,
  `time` int(100) NOT NULL,
  `condition` varchar(100) NOT NULL,
  `date` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=48 ;

--
-- 轉存資料表中的資料 `B_card_trans_time`
--

INSERT INTO `B_card_trans_time` (`id`, `ques_index`, `card`, `before_trans`, `after_trans`, `time`, `condition`, `date`) VALUES
(34, 'first', 'member_A_fraction_graphic_first', '2_12', '4_24', 10, 'extend', 'Sat May 25 2013 20:51:10 GMT+0800'),
(35, 'first', 'member_B_fraction_graphic_first', '1_6', '4_24', 8, 'extend', 'Sat May 25 2013 20:51:10 GMT+0800'),
(36, 'first', 'member_C_fraction_graphic_first', '3_18', '1_6', 15, 'reduce', 'Sat May 25 2013 20:51:10 GMT+0800'),
(37, 'first', 'member_C_fraction_graphic_first', '1_6', '4_24', 8, 'extend', 'Sat May 25 2013 20:51:10 GMT+0800'),
(38, 'second', 'member_A_fraction_graphic_second', '3_12', '1_4', 12, 'reduce', 'Sat May 25 2013 20:51:10 GMT+0800'),
(39, 'second', 'member_A_fraction_graphic_second', '1_4', '4_16', 9, 'extend', 'Sat May 25 2013 20:51:10 GMT+0800'),
(40, 'second', 'member_B_fraction_graphic_second', '1_4', '4_16', 11, 'extend', 'Sat May 25 2013 20:51:10 GMT+0800'),
(41, 'second', 'member_C_fraction_graphic_second', '2_8', '4_16', 16, 'extend', 'Sat May 25 2013 20:51:10 GMT+0800'),
(42, 'third', 'member_A_fraction_graphic_third', '3_4', '12_16', 17, 'extend', 'Sat May 25 2013 20:51:10 GMT+0800'),
(43, 'third', 'member_B_fraction_graphic_third', '6_8', '3_4', 12, 'reduce', 'Sat May 25 2013 20:51:10 GMT+0800'),
(44, 'third', 'member_B_fraction_graphic_third', '3_4', '12_16', 20, 'extend', 'Sat May 25 2013 20:51:10 GMT+0800'),
(45, 'third', 'member_C_fraction_graphic_third', '9_12', '3_4', 34, 'reduce', 'Sat May 25 2013 20:51:10 GMT+0800'),
(46, 'third', 'member_C_fraction_graphic_third', '3_4', '12_16', 14, 'extend', 'Sat May 25 2013 20:51:10 GMT+0800'),
(47, 'first', 'member_B_fraction_graphic_third', '2_6', '4_12', 9, 'extend', 'Sun May 26 2013 00:12:09 GMT+0800');

-- --------------------------------------------------------

--
-- 表的結構 `B_card_trans_times`
--

CREATE TABLE IF NOT EXISTS `B_card_trans_times` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `ques_index` varchar(100) NOT NULL,
  `card` varchar(100) NOT NULL,
  `trans_times` int(100) NOT NULL,
  `date` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=289 ;

--
-- 轉存資料表中的資料 `B_card_trans_times`
--

INSERT INTO `B_card_trans_times` (`id`, `ques_index`, `card`, `trans_times`, `date`) VALUES
(181, 'first', 'A_gra_first', 1, 'Sat May 25 2013 20:51:10 GMT+0800'),
(182, 'first', 'A_gra_second', 0, 'Sat May 25 2013 20:51:10 GMT+0800'),
(183, 'first', 'A_gra_third', 0, 'Sat May 25 2013 20:51:10 GMT+0800'),
(184, 'first', 'B_gra_first', 1, 'Sat May 25 2013 20:51:10 GMT+0800'),
(185, 'first', 'B_gra_second', 0, 'Sat May 25 2013 20:51:10 GMT+0800'),
(186, 'first', 'B_gra_third', 0, 'Sat May 25 2013 20:51:10 GMT+0800'),
(187, 'first', 'C_gra_first', 2, 'Sat May 25 2013 20:51:10 GMT+0800'),
(188, 'first', 'C_gra_second', 0, 'Sat May 25 2013 20:51:10 GMT+0800'),
(189, 'first', 'C_gra_third', 0, 'Sat May 25 2013 20:51:10 GMT+0800'),
(190, 'second', 'A_gra_first', 0, 'Sat May 25 2013 20:51:10 GMT+0800'),
(191, 'second', 'A_gra_second', 2, 'Sat May 25 2013 20:51:10 GMT+0800'),
(192, 'second', 'A_gra_third', 0, 'Sat May 25 2013 20:51:10 GMT+0800'),
(193, 'second', 'B_gra_first', 0, 'Sat May 25 2013 20:51:10 GMT+0800'),
(194, 'second', 'B_gra_second', 1, 'Sat May 25 2013 20:51:10 GMT+0800'),
(195, 'second', 'B_gra_third', 0, 'Sat May 25 2013 20:51:10 GMT+0800'),
(196, 'second', 'C_gra_first', 0, 'Sat May 25 2013 20:51:10 GMT+0800'),
(197, 'second', 'C_gra_second', 1, 'Sat May 25 2013 20:51:10 GMT+0800'),
(198, 'second', 'C_gra_third', 0, 'Sat May 25 2013 20:51:10 GMT+0800'),
(199, 'third', 'A_gra_first', 0, 'Sat May 25 2013 20:51:10 GMT+0800'),
(200, 'third', 'A_gra_second', 0, 'Sat May 25 2013 20:51:10 GMT+0800'),
(201, 'third', 'A_gra_third', 1, 'Sat May 25 2013 20:51:10 GMT+0800'),
(202, 'third', 'B_gra_first', 0, 'Sat May 25 2013 20:51:10 GMT+0800'),
(203, 'third', 'B_gra_second', 0, 'Sat May 25 2013 20:51:10 GMT+0800'),
(204, 'third', 'B_gra_third', 2, 'Sat May 25 2013 20:51:10 GMT+0800'),
(205, 'third', 'C_gra_first', 0, 'Sat May 25 2013 20:51:10 GMT+0800'),
(206, 'third', 'C_gra_second', 0, 'Sat May 25 2013 20:51:10 GMT+0800'),
(207, 'third', 'C_gra_third', 2, 'Sat May 25 2013 20:51:10 GMT+0800'),
(208, 'first', 'A_gra_first', 0, 'Sat May 25 2013 21:03:51 GMT+0800'),
(209, 'first', 'A_gra_second', 0, 'Sat May 25 2013 21:03:51 GMT+0800'),
(210, 'first', 'A_gra_third', 0, 'Sat May 25 2013 21:03:51 GMT+0800'),
(211, 'first', 'B_gra_first', 0, 'Sat May 25 2013 21:03:51 GMT+0800'),
(212, 'first', 'B_gra_second', 0, 'Sat May 25 2013 21:03:51 GMT+0800'),
(213, 'first', 'B_gra_third', 0, 'Sat May 25 2013 21:03:51 GMT+0800'),
(214, 'first', 'C_gra_first', 0, 'Sat May 25 2013 21:03:51 GMT+0800'),
(215, 'first', 'C_gra_second', 0, 'Sat May 25 2013 21:03:51 GMT+0800'),
(216, 'first', 'C_gra_third', 0, 'Sat May 25 2013 21:03:51 GMT+0800'),
(217, 'second', 'A_gra_first', 0, 'Sat May 25 2013 21:03:51 GMT+0800'),
(218, 'second', 'A_gra_second', 0, 'Sat May 25 2013 21:03:51 GMT+0800'),
(219, 'second', 'A_gra_third', 0, 'Sat May 25 2013 21:03:51 GMT+0800'),
(220, 'second', 'B_gra_first', 0, 'Sat May 25 2013 21:03:51 GMT+0800'),
(221, 'second', 'B_gra_second', 0, 'Sat May 25 2013 21:03:51 GMT+0800'),
(222, 'second', 'B_gra_third', 0, 'Sat May 25 2013 21:03:51 GMT+0800'),
(223, 'second', 'C_gra_first', 0, 'Sat May 25 2013 21:03:51 GMT+0800'),
(224, 'second', 'C_gra_second', 0, 'Sat May 25 2013 21:03:51 GMT+0800'),
(225, 'second', 'C_gra_third', 0, 'Sat May 25 2013 21:03:51 GMT+0800'),
(226, 'third', 'A_gra_first', 0, 'Sat May 25 2013 21:03:51 GMT+0800'),
(227, 'third', 'A_gra_second', 0, 'Sat May 25 2013 21:03:51 GMT+0800'),
(228, 'third', 'A_gra_third', 0, 'Sat May 25 2013 21:03:51 GMT+0800'),
(229, 'third', 'B_gra_first', 0, 'Sat May 25 2013 21:03:51 GMT+0800'),
(230, 'third', 'B_gra_second', 0, 'Sat May 25 2013 21:03:51 GMT+0800'),
(231, 'third', 'B_gra_third', 0, 'Sat May 25 2013 21:03:51 GMT+0800'),
(232, 'third', 'C_gra_first', 0, 'Sat May 25 2013 21:03:51 GMT+0800'),
(233, 'third', 'C_gra_second', 0, 'Sat May 25 2013 21:03:51 GMT+0800'),
(234, 'third', 'C_gra_third', 0, 'Sat May 25 2013 21:03:51 GMT+0800'),
(235, 'first', 'A_gra_first', 0, 'Sun May 26 2013 01:38:52 GMT+0800'),
(236, 'first', 'A_gra_second', 0, 'Sun May 26 2013 01:38:52 GMT+0800'),
(237, 'first', 'A_gra_third', 0, 'Sun May 26 2013 01:38:52 GMT+0800'),
(238, 'first', 'B_gra_first', 0, 'Sun May 26 2013 01:38:52 GMT+0800'),
(239, 'first', 'B_gra_second', 0, 'Sun May 26 2013 01:38:52 GMT+0800'),
(240, 'first', 'B_gra_third', 0, 'Sun May 26 2013 01:38:52 GMT+0800'),
(241, 'first', 'C_gra_first', 0, 'Sun May 26 2013 01:38:52 GMT+0800'),
(242, 'first', 'C_gra_second', 0, 'Sun May 26 2013 01:38:52 GMT+0800'),
(243, 'first', 'C_gra_third', 0, 'Sun May 26 2013 01:38:52 GMT+0800'),
(244, 'first', 'A_gra_first', 0, 'Sun May 26 2013 01:39:21 GMT+0800'),
(245, 'first', 'A_gra_second', 0, 'Sun May 26 2013 01:39:21 GMT+0800'),
(246, 'first', 'A_gra_third', 0, 'Sun May 26 2013 01:39:21 GMT+0800'),
(247, 'first', 'B_gra_first', 0, 'Sun May 26 2013 01:39:21 GMT+0800'),
(248, 'first', 'B_gra_second', 0, 'Sun May 26 2013 01:39:21 GMT+0800'),
(249, 'first', 'B_gra_third', 0, 'Sun May 26 2013 01:39:21 GMT+0800'),
(250, 'first', 'C_gra_first', 0, 'Sun May 26 2013 01:39:21 GMT+0800'),
(251, 'first', 'C_gra_second', 0, 'Sun May 26 2013 01:39:21 GMT+0800'),
(252, 'first', 'C_gra_third', 0, 'Sun May 26 2013 01:39:21 GMT+0800'),
(253, 'second', 'A_gra_first', 0, 'Sun May 26 2013 01:39:21 GMT+0800'),
(254, 'second', 'A_gra_second', 0, 'Sun May 26 2013 01:39:21 GMT+0800'),
(255, 'second', 'A_gra_third', 0, 'Sun May 26 2013 01:39:21 GMT+0800'),
(256, 'second', 'B_gra_first', 0, 'Sun May 26 2013 01:39:21 GMT+0800'),
(257, 'second', 'B_gra_second', 0, 'Sun May 26 2013 01:39:21 GMT+0800'),
(258, 'second', 'B_gra_third', 0, 'Sun May 26 2013 01:39:21 GMT+0800'),
(259, 'second', 'C_gra_first', 0, 'Sun May 26 2013 01:39:21 GMT+0800'),
(260, 'second', 'C_gra_second', 0, 'Sun May 26 2013 01:39:21 GMT+0800'),
(261, 'second', 'C_gra_third', 0, 'Sun May 26 2013 01:39:21 GMT+0800'),
(262, 'first', 'A_gra_first', 0, 'Sun May 26 2013 13:20:10 GMT+0800'),
(263, 'first', 'A_gra_second', 0, 'Sun May 26 2013 13:20:10 GMT+0800'),
(264, 'first', 'A_gra_third', 0, 'Sun May 26 2013 13:20:10 GMT+0800'),
(265, 'first', 'B_gra_first', 0, 'Sun May 26 2013 13:20:10 GMT+0800'),
(266, 'first', 'B_gra_second', 0, 'Sun May 26 2013 13:20:10 GMT+0800'),
(267, 'first', 'B_gra_third', 0, 'Sun May 26 2013 13:20:10 GMT+0800'),
(268, 'first', 'C_gra_first', 0, 'Sun May 26 2013 13:20:10 GMT+0800'),
(269, 'first', 'C_gra_second', 0, 'Sun May 26 2013 13:20:10 GMT+0800'),
(270, 'first', 'C_gra_third', 0, 'Sun May 26 2013 13:20:10 GMT+0800'),
(271, 'first', 'A_gra_first', 0, 'Sun May 26 2013 13:20:31 GMT+0800'),
(272, 'first', 'A_gra_second', 0, 'Sun May 26 2013 13:20:31 GMT+0800'),
(273, 'first', 'A_gra_third', 0, 'Sun May 26 2013 13:20:31 GMT+0800'),
(274, 'first', 'B_gra_first', 0, 'Sun May 26 2013 13:20:31 GMT+0800'),
(275, 'first', 'B_gra_second', 0, 'Sun May 26 2013 13:20:31 GMT+0800'),
(276, 'first', 'B_gra_third', 0, 'Sun May 26 2013 13:20:31 GMT+0800'),
(277, 'first', 'C_gra_first', 0, 'Sun May 26 2013 13:20:31 GMT+0800'),
(278, 'first', 'C_gra_second', 0, 'Sun May 26 2013 13:20:31 GMT+0800'),
(279, 'first', 'C_gra_third', 0, 'Sun May 26 2013 13:20:31 GMT+0800'),
(280, 'second', 'A_gra_first', 0, 'Sun May 26 2013 13:20:31 GMT+0800'),
(281, 'second', 'A_gra_second', 0, 'Sun May 26 2013 13:20:31 GMT+0800'),
(282, 'second', 'A_gra_third', 0, 'Sun May 26 2013 13:20:31 GMT+0800'),
(283, 'second', 'B_gra_first', 0, 'Sun May 26 2013 13:20:31 GMT+0800'),
(284, 'second', 'B_gra_second', 0, 'Sun May 26 2013 13:20:31 GMT+0800'),
(285, 'second', 'B_gra_third', 0, 'Sun May 26 2013 13:20:31 GMT+0800'),
(286, 'second', 'C_gra_first', 0, 'Sun May 26 2013 13:20:31 GMT+0800'),
(287, 'second', 'C_gra_second', 0, 'Sun May 26 2013 13:20:31 GMT+0800'),
(288, 'second', 'C_gra_third', 0, 'Sun May 26 2013 13:20:31 GMT+0800');

-- --------------------------------------------------------

--
-- 表的結構 `B_member_card`
--

CREATE TABLE IF NOT EXISTS `B_member_card` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `ques_index` varchar(100) NOT NULL,
  `who` varchar(100) NOT NULL,
  `gra_first` varchar(100) NOT NULL,
  `gra_second` varchar(100) NOT NULL,
  `gra_third` varchar(100) NOT NULL,
  `date` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=40 ;

--
-- 轉存資料表中的資料 `B_member_card`
--

INSERT INTO `B_member_card` (`id`, `ques_index`, `who`, `gra_first`, `gra_second`, `gra_third`, `date`) VALUES
(10, 'first', 'member_C', '8_12', '3_5', '3_6', 'Sun May 26 2013 01:39:21 GMT+0800'),
(11, 'first', 'member_A', '12_18', '9_15', '2_4', 'Sun May 26 2013 01:39:21 GMT+0800'),
(12, 'first', 'member_B', '4_6', '6_10', '1_2', 'Sun May 26 2013 01:39:21 GMT+0800'),
(13, 'second', 'member_A', '4_6', '6_10', '1_2', 'Sun May 26 2013 01:39:21 GMT+0800'),
(14, 'second', 'member_B', '8_12', '3_5', '3_6', 'Sun May 26 2013 01:39:21 GMT+0800'),
(15, 'second', 'member_C', '12_18', '9_15', '2_4', 'Sun May 26 2013 01:39:21 GMT+0800'),
(16, 'third', 'member_A', '8_12', '3_5', '3_6', 'Sun May 26 2013 01:39:21 GMT+0800'),
(17, 'third', 'member_B', '12_18', '9_15', '2_4', 'Sun May 26 2013 01:39:21 GMT+0800'),
(18, 'third', 'member_C', '4_6', '6_10', '1_2', 'Sun May 26 2013 01:39:21 GMT+0800'),
(19, 'first', 'member_A', '9_15', '8_10', '4_10', 'Sun May 26 2013 13:20:10 GMT+0800'),
(20, 'first', 'member_B', '3_5', '4_5', '2_5', 'Sun May 26 2013 13:20:10 GMT+0800'),
(21, 'first', 'member_C', '6_10', '12_15', '6_15', 'Sun May 26 2013 13:20:10 GMT+0800'),
(22, 'second', 'member_A', '3_5', '4_5', '2_5', 'Sun May 26 2013 13:20:10 GMT+0800'),
(23, 'second', 'member_B', '6_10', '12_15', '6_15', 'Sun May 26 2013 13:20:10 GMT+0800'),
(24, 'second', 'member_C', '9_15', '8_10', '4_10', 'Sun May 26 2013 13:20:10 GMT+0800'),
(25, 'first', 'member_A', '4_10', '3_6', '8_12', 'Sun May 26 2013 13:20:31 GMT+0800'),
(26, 'first', 'member_B', '6_15', '2_4', '4_6', 'Sun May 26 2013 13:20:31 GMT+0800'),
(27, 'first', 'member_C', '2_5', '1_2', '12_18', 'Sun May 26 2013 13:20:31 GMT+0800'),
(28, 'second', 'member_A', '6_15', '2_4', '4_6', 'Sun May 26 2013 13:20:31 GMT+0800'),
(29, 'second', 'member_B', '2_5', '1_2', '12_18', 'Sun May 26 2013 13:20:31 GMT+0800'),
(30, 'second', 'member_C', '4_10', '3_6', '8_12', 'Sun May 26 2013 13:20:31 GMT+0800'),
(31, 'third', 'member_A', '2_5', '1_2', '12_18', 'Sun May 26 2013 13:20:31 GMT+0800'),
(32, 'third', 'member_B', '4_10', '3_6', '8_12', 'Sun May 26 2013 13:20:31 GMT+0800'),
(33, 'third', 'member_C', '6_15', '2_4', '4_6', 'Sun May 26 2013 13:20:31 GMT+0800'),
(34, 'first', 'member_A', '6_15', '2_12', '6_18', 'Sun May 26 2013 13:44:20 GMT+0800'),
(35, 'first', 'member_C', '2_5', '3_18', '4_12', 'Sun May 26 2013 13:44:20 GMT+0800'),
(36, 'first', 'member_B', '4_10', '1_6', '2_6', 'Sun May 26 2013 13:44:20 GMT+0800'),
(37, 'first', 'member_B', '3_6', '1_4', '2_4', 'Sun May 26 2013 13:44:21 GMT+0800'),
(38, 'first', 'member_A', '9_18', '2_8', '6_12', 'Sun May 26 2013 13:44:21 GMT+0800'),
(39, 'first', 'member_C', '6_12', '3_12', '4_8', 'Sun May 26 2013 13:44:21 GMT+0800');

-- --------------------------------------------------------

--
-- 表的結構 `B_operate_times`
--

CREATE TABLE IF NOT EXISTS `B_operate_times` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `question` varchar(100) NOT NULL,
  `who` varchar(100) NOT NULL,
  `error_times` int(100) NOT NULL,
  `answer_times` int(100) NOT NULL,
  `date` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=103 ;

--
-- 轉存資料表中的資料 `B_operate_times`
--

INSERT INTO `B_operate_times` (`id`, `question`, `who`, `error_times`, `answer_times`, `date`) VALUES
(67, 'first', 'member_A', 0, 4, 'Sat May 25 2013 20:51:10 GMT+0800'),
(68, 'first', 'member_C', 0, 1, 'Sat May 25 2013 20:51:10 GMT+0800'),
(69, 'first', 'member_B', 0, 3, 'Sat May 25 2013 20:51:10 GMT+0800'),
(70, 'second', 'member_A', 0, 1, 'Sat May 25 2013 20:51:10 GMT+0800'),
(71, 'second', 'member_B', 0, 0, 'Sat May 25 2013 20:51:10 GMT+0800'),
(72, 'second', 'member_C', 0, 1, 'Sat May 25 2013 20:51:10 GMT+0800'),
(73, 'third', 'member_A', 0, 1, 'Sat May 25 2013 20:51:10 GMT+0800'),
(74, 'third', 'member_B', 0, 1, 'Sat May 25 2013 20:51:10 GMT+0800'),
(75, 'third', 'member_C', 0, 1, 'Sat May 25 2013 20:51:10 GMT+0800'),
(76, 'first', 'member_A', 0, 0, 'Sat May 25 2013 21:03:51 GMT+0800'),
(77, 'first', 'member_C', 0, 0, 'Sat May 25 2013 21:03:51 GMT+0800'),
(78, 'first', 'member_B', 0, 0, 'Sat May 25 2013 21:03:51 GMT+0800'),
(79, 'second', 'member_A', 0, 0, 'Sat May 25 2013 21:03:51 GMT+0800'),
(80, 'second', 'member_C', 0, 0, 'Sat May 25 2013 21:03:51 GMT+0800'),
(81, 'second', 'member_B', 0, 0, 'Sat May 25 2013 21:03:51 GMT+0800'),
(82, 'third', 'member_A', 0, 0, 'Sat May 25 2013 21:03:51 GMT+0800'),
(83, 'third', 'member_B', 0, 0, 'Sat May 25 2013 21:03:51 GMT+0800'),
(84, 'third', 'member_C', 0, 0, 'Sat May 25 2013 21:03:51 GMT+0800'),
(85, 'first', 'member_B', 0, 0, 'Sun May 26 2013 01:38:52 GMT+0800'),
(86, 'first', 'member_A', 0, 0, 'Sun May 26 2013 01:38:52 GMT+0800'),
(87, 'first', 'member_C', 0, 0, 'Sun May 26 2013 01:38:52 GMT+0800'),
(88, 'first', 'member_B', 0, 0, 'Sun May 26 2013 01:39:21 GMT+0800'),
(89, 'first', 'member_A', 0, 0, 'Sun May 26 2013 01:39:21 GMT+0800'),
(90, 'first', 'member_C', 0, 0, 'Sun May 26 2013 01:39:21 GMT+0800'),
(91, 'second', 'member_A', 0, 0, 'Sun May 26 2013 01:39:21 GMT+0800'),
(92, 'second', 'member_B', 0, 0, 'Sun May 26 2013 01:39:21 GMT+0800'),
(93, 'second', 'member_C', 0, 0, 'Sun May 26 2013 01:39:21 GMT+0800'),
(94, 'first', 'member_B', 0, 0, 'Sun May 26 2013 13:20:10 GMT+0800'),
(95, 'first', 'member_A', 0, 0, 'Sun May 26 2013 13:20:10 GMT+0800'),
(96, 'first', 'member_C', 0, 0, 'Sun May 26 2013 13:20:10 GMT+0800'),
(97, 'first', 'member_B', 0, 0, 'Sun May 26 2013 13:20:31 GMT+0800'),
(98, 'first', 'member_C', 0, 0, 'Sun May 26 2013 13:20:31 GMT+0800'),
(99, 'first', 'member_A', 0, 0, 'Sun May 26 2013 13:20:31 GMT+0800'),
(100, 'second', 'member_A', 0, 0, 'Sun May 26 2013 13:20:31 GMT+0800'),
(101, 'second', 'member_C', 0, 0, 'Sun May 26 2013 13:20:31 GMT+0800'),
(102, 'second', 'member_B', 0, 0, 'Sun May 26 2013 13:20:31 GMT+0800');

-- --------------------------------------------------------

--
-- 表的結構 `B_question`
--

CREATE TABLE IF NOT EXISTS `B_question` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `ques_index` varchar(100) NOT NULL,
  `question` varchar(100) NOT NULL,
  `date` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=268 ;

--
-- 轉存資料表中的資料 `B_question`
--

INSERT INTO `B_question` (`id`, `ques_index`, `question`, `date`) VALUES
(232, 'first', '4_24', 'Sat May 25 2013 20:51:10 GMT+0800'),
(233, 'second', '4_16', 'Sat May 25 2013 20:51:10 GMT+0800'),
(234, 'third', '12_16', 'Sat May 25 2013 20:51:10 GMT+0800'),
(235, 'first', '4_20', 'Sat May 25 2013 21:03:51 GMT+0800'),
(236, 'second', '4_16', 'Sat May 25 2013 21:03:51 GMT+0800'),
(237, 'third', '4_24', 'Sat May 25 2013 21:03:51 GMT+0800'),
(238, 'first', '8_12', 'Sat May 25 2013 22:47:21 GMT+0800'),
(239, 'second', '16_20', 'Sat May 25 2013 22:47:21 GMT+0800'),
(240, 'third', '4_20', 'Sat May 25 2013 22:47:21 GMT+0800'),
(241, 'first', '8_24', 'Sun May 26 2013 00:09:43 GMT+0800'),
(242, 'second', '12_16', 'Sun May 26 2013 00:09:43 GMT+0800'),
(243, 'third', '4_24', 'Sun May 26 2013 00:09:43 GMT+0800'),
(244, 'first', '4_24', 'Sun May 26 2013 00:12:09 GMT+0800'),
(245, 'second', '4_8', 'Sun May 26 2013 00:12:09 GMT+0800'),
(246, 'third', '4_12', 'Sun May 26 2013 00:12:09 GMT+0800'),
(247, 'first', '8_12', 'Sun May 26 2013 01:38:49 GMT+0800'),
(248, 'second', '12_20', 'Sun May 26 2013 01:38:49 GMT+0800'),
(249, 'third', '12_16', 'Sun May 26 2013 01:38:49 GMT+0800'),
(250, 'first', '4_12', 'Sun May 26 2013 01:38:52 GMT+0800'),
(251, 'second', '16_20', 'Sun May 26 2013 01:38:52 GMT+0800'),
(252, 'third', '12_16', 'Sun May 26 2013 01:38:52 GMT+0800'),
(253, 'first', '16_24', 'Sun May 26 2013 01:39:21 GMT+0800'),
(254, 'second', '12_20', 'Sun May 26 2013 01:39:21 GMT+0800'),
(255, 'third', '4_8', 'Sun May 26 2013 01:39:21 GMT+0800'),
(256, 'first', '12_20', 'Sun May 26 2013 13:20:10 GMT+0800'),
(257, 'second', '16_20', 'Sun May 26 2013 13:20:10 GMT+0800'),
(258, 'third', '8_20', 'Sun May 26 2013 13:20:10 GMT+0800'),
(259, 'first', '8_20', 'Sun May 26 2013 13:20:31 GMT+0800'),
(260, 'second', '4_8', 'Sun May 26 2013 13:20:31 GMT+0800'),
(261, 'third', '16_24', 'Sun May 26 2013 13:20:31 GMT+0800'),
(262, 'first', '8_20', 'Sun May 26 2013 13:44:20 GMT+0800'),
(263, 'second', '4_24', 'Sun May 26 2013 13:44:20 GMT+0800'),
(264, 'third', '8_24', 'Sun May 26 2013 13:44:20 GMT+0800'),
(265, 'first', '12_24', 'Sun May 26 2013 13:44:21 GMT+0800'),
(266, 'second', '4_16', 'Sun May 26 2013 13:44:21 GMT+0800'),
(267, 'third', '8_16', 'Sun May 26 2013 13:44:21 GMT+0800');

-- --------------------------------------------------------

--
-- 表的結構 `B_total_time`
--

CREATE TABLE IF NOT EXISTS `B_total_time` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `question` varchar(100) NOT NULL,
  `time` int(100) NOT NULL,
  `date` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=35 ;

--
-- 轉存資料表中的資料 `B_total_time`
--

INSERT INTO `B_total_time` (`id`, `question`, `time`, `date`) VALUES
(23, 'first', 89, 'Sat May 25 2013 20:51:10 GMT+0800'),
(24, 'second', 79, 'Sat May 25 2013 20:51:10 GMT+0800'),
(25, 'third', 140, 'Sat May 25 2013 20:51:10 GMT+0800'),
(26, 'first', 6, 'Sat May 25 2013 21:03:51 GMT+0800'),
(27, 'second', 8, 'Sat May 25 2013 21:03:51 GMT+0800'),
(28, 'third', 4, 'Sat May 25 2013 21:03:51 GMT+0800'),
(29, 'first', 14, 'Sun May 26 2013 01:38:52 GMT+0800'),
(30, 'first', 46, 'Sun May 26 2013 01:39:21 GMT+0800'),
(31, 'second', 23, 'Sun May 26 2013 01:39:21 GMT+0800'),
(32, 'first', 0, 'Sun May 26 2013 13:20:10 GMT+0800'),
(33, 'first', 0, 'Sun May 26 2013 13:20:31 GMT+0800'),
(34, 'second', 33, 'Sun May 26 2013 13:20:31 GMT+0800');

-- --------------------------------------------------------

--
-- 表的結構 `B_trans_cancel_times`
--

CREATE TABLE IF NOT EXISTS `B_trans_cancel_times` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `ques_index` varchar(100) NOT NULL,
  `card` varchar(100) NOT NULL,
  `cancel_times` int(100) NOT NULL,
  `date` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=36 ;

--
-- 轉存資料表中的資料 `B_trans_cancel_times`
--

INSERT INTO `B_trans_cancel_times` (`id`, `ques_index`, `card`, `cancel_times`, `date`) VALUES
(30, 'third', 'member_B_fraction_graphic_second', 1, 'Sat May 25 2013 20:51:10 GMT+0800'),
(31, 'third', 'member_A_fraction_graphic_second', 1, 'Sat May 25 2013 20:51:10 GMT+0800'),
(32, 'first', 'member_C_fraction_graphic_second', 1, 'Sat May 25 2013 22:47:21 GMT+0800'),
(33, 'first', 'member_C_fraction_graphic_third', 1, 'Sat May 25 2013 22:47:21 GMT+0800'),
(34, 'first', 'member_A_fraction_graphic_third', 1, 'Sat May 25 2013 22:47:21 GMT+0800'),
(35, 'first', 'member_B_fraction_graphic_third', 1, 'Sun May 26 2013 00:09:43 GMT+0800');

-- --------------------------------------------------------

--
-- 表的結構 `B_trans_error_times`
--

CREATE TABLE IF NOT EXISTS `B_trans_error_times` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `ques_index` varchar(100) NOT NULL,
  `card` varchar(100) NOT NULL,
  `before_trans` varchar(100) NOT NULL,
  `after_trans` varchar(100) NOT NULL,
  `error_times` int(100) NOT NULL,
  `condition` varchar(100) NOT NULL,
  `date` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=27 ;

--
-- 轉存資料表中的資料 `B_trans_error_times`
--

INSERT INTO `B_trans_error_times` (`id`, `ques_index`, `card`, `before_trans`, `after_trans`, `error_times`, `condition`, `date`) VALUES
(13, 'first', 'member_A_fraction_graphic_first', '2_12', '4_24', 0, 'extend', 'Sat May 25 2013 20:51:10 GMT+0800'),
(14, 'first', 'member_B_fraction_graphic_first', '1_6', '4_24', 0, 'extend', 'Sat May 25 2013 20:51:10 GMT+0800'),
(15, 'first', 'member_C_fraction_graphic_first', '3_18', '1_6', 1, 'reduce', 'Sat May 25 2013 20:51:10 GMT+0800'),
(16, 'first', 'member_C_fraction_graphic_first', '1_6', '4_24', 0, 'extend', 'Sat May 25 2013 20:51:10 GMT+0800'),
(17, 'second', 'member_A_fraction_graphic_second', '3_12', '1_4', 0, 'reduce', 'Sat May 25 2013 20:51:10 GMT+0800'),
(18, 'second', 'member_A_fraction_graphic_second', '1_4', '4_16', 0, 'extend', 'Sat May 25 2013 20:51:10 GMT+0800'),
(19, 'second', 'member_B_fraction_graphic_second', '1_4', '4_16', 0, 'extend', 'Sat May 25 2013 20:51:10 GMT+0800'),
(20, 'second', 'member_C_fraction_graphic_second', '2_8', '4_16', 1, 'extend', 'Sat May 25 2013 20:51:10 GMT+0800'),
(21, 'third', 'member_A_fraction_graphic_third', '3_4', '12_16', 0, 'extend', 'Sat May 25 2013 20:51:10 GMT+0800'),
(22, 'third', 'member_B_fraction_graphic_third', '6_8', '3_4', 0, 'reduce', 'Sat May 25 2013 20:51:10 GMT+0800'),
(23, 'third', 'member_B_fraction_graphic_third', '3_4', '12_16', 0, 'extend', 'Sat May 25 2013 20:51:10 GMT+0800'),
(24, 'third', 'member_C_fraction_graphic_third', '9_12', '3_4', 0, 'reduce', 'Sat May 25 2013 20:51:10 GMT+0800'),
(25, 'third', 'member_C_fraction_graphic_third', '3_4', '12_16', 0, 'extend', 'Sat May 25 2013 20:51:10 GMT+0800'),
(26, 'first', 'member_B_fraction_graphic_third', '2_6', '4_12', 0, 'extend', 'Sun May 26 2013 00:12:09 GMT+0800');

-- --------------------------------------------------------

--
-- 表的結構 `B_trans_previous_times`
--

CREATE TABLE IF NOT EXISTS `B_trans_previous_times` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `ques_index` varchar(100) NOT NULL,
  `card` varchar(100) NOT NULL,
  `previous_times` int(100) NOT NULL,
  `condition` varchar(100) NOT NULL,
  `date` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=20 ;

--
-- 轉存資料表中的資料 `B_trans_previous_times`
--

INSERT INTO `B_trans_previous_times` (`id`, `ques_index`, `card`, `previous_times`, `condition`, `date`) VALUES
(6, 'first', 'member_A_fraction_graphic_first', 0, 'extend', 'Sat May 25 2013 20:51:10 GMT+0800'),
(7, 'first', 'member_B_fraction_graphic_first', 0, 'extend', 'Sat May 25 2013 20:51:10 GMT+0800'),
(8, 'first', 'member_C_fraction_graphic_first', 0, 'reduce', 'Sat May 25 2013 20:51:10 GMT+0800'),
(9, 'first', 'member_C_fraction_graphic_first', 0, 'extend', 'Sat May 25 2013 20:51:10 GMT+0800'),
(10, 'second', 'member_A_fraction_graphic_second', 0, 'reduce', 'Sat May 25 2013 20:51:10 GMT+0800'),
(11, 'second', 'member_A_fraction_graphic_second', 0, 'extend', 'Sat May 25 2013 20:51:10 GMT+0800'),
(12, 'second', 'member_B_fraction_graphic_second', 0, 'extend', 'Sat May 25 2013 20:51:10 GMT+0800'),
(13, 'second', 'member_C_fraction_graphic_second', 0, 'extend', 'Sat May 25 2013 20:51:10 GMT+0800'),
(14, 'third', 'member_A_fraction_graphic_third', 0, 'extend', 'Sat May 25 2013 20:51:10 GMT+0800'),
(15, 'third', 'member_B_fraction_graphic_third', 0, 'reduce', 'Sat May 25 2013 20:51:10 GMT+0800'),
(16, 'third', 'member_B_fraction_graphic_third', 0, 'extend', 'Sat May 25 2013 20:51:10 GMT+0800'),
(17, 'third', 'member_C_fraction_graphic_third', 0, 'reduce', 'Sat May 25 2013 20:51:10 GMT+0800'),
(18, 'third', 'member_C_fraction_graphic_third', 0, 'extend', 'Sat May 25 2013 20:51:10 GMT+0800'),
(19, 'first', 'member_B_fraction_graphic_third', 0, 'extend', 'Sun May 26 2013 00:12:09 GMT+0800');

-- --------------------------------------------------------

--
-- 表的結構 `C_card_trans_time`
--

CREATE TABLE IF NOT EXISTS `C_card_trans_time` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `ques_index` varchar(100) NOT NULL,
  `card` varchar(100) NOT NULL,
  `before_trans` varchar(100) NOT NULL,
  `after_trans` varchar(100) NOT NULL,
  `time` int(100) NOT NULL,
  `condition` varchar(100) NOT NULL,
  `date` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- 轉存資料表中的資料 `C_card_trans_time`
--

INSERT INTO `C_card_trans_time` (`id`, `ques_index`, `card`, `before_trans`, `after_trans`, `time`, `condition`, `date`) VALUES
(1, 'first', 'member_B_fraction_graphic_third', '5_25', '1_5', 0, 'reduce', 'Sat May 25 2013 23:49:50 GMT+0800'),
(2, 'first', 'member_B_fraction_graphic_second', '4_24', '1_6', 9, 'reduce', 'Sun May 26 2013 00:00:29 GMT+0800'),
(3, 'first', 'member_B_fraction_graphic_second', '16_24', '4_6', 8, 'reduce', 'Sun May 26 2013 00:05:19 GMT+0800'),
(4, 'first', 'member_A_fraction_graphic_second', '5_20', '1_4', 11, 'reduce', 'Sun May 26 2013 00:11:04 GMT+0800'),
(5, 'first', 'member_B_fraction_graphic_second', '6_24', '2_8', 8, 'reduce', 'Sun May 26 2013 00:11:04 GMT+0800'),
(6, 'first', 'member_B_fraction_graphic_third', '5_25', '1_5', 9, 'reduce', 'Sun May 26 2013 00:17:37 GMT+0800');

-- --------------------------------------------------------

--
-- 表的結構 `C_card_trans_times`
--

CREATE TABLE IF NOT EXISTS `C_card_trans_times` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `ques_index` varchar(100) NOT NULL,
  `card` varchar(100) NOT NULL,
  `trans_times` int(100) NOT NULL,
  `date` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=46 ;

--
-- 轉存資料表中的資料 `C_card_trans_times`
--

INSERT INTO `C_card_trans_times` (`id`, `ques_index`, `card`, `trans_times`, `date`) VALUES
(1, 'first', 'A_gra_first', 0, 'Sun May 26 2013 00:05:19 GMT+0800'),
(2, 'first', 'A_gra_second', 0, 'Sun May 26 2013 00:05:19 GMT+0800'),
(3, 'first', 'A_gra_third', 0, 'Sun May 26 2013 00:05:19 GMT+0800'),
(4, 'first', 'B_gra_first', 0, 'Sun May 26 2013 00:05:19 GMT+0800'),
(5, 'first', 'B_gra_second', 1, 'Sun May 26 2013 00:05:19 GMT+0800'),
(6, 'first', 'B_gra_third', 0, 'Sun May 26 2013 00:05:19 GMT+0800'),
(7, 'first', 'C_gra_first', 0, 'Sun May 26 2013 00:05:19 GMT+0800'),
(8, 'first', 'C_gra_second', 0, 'Sun May 26 2013 00:05:19 GMT+0800'),
(9, 'first', 'C_gra_third', 0, 'Sun May 26 2013 00:05:19 GMT+0800'),
(10, 'first', 'A_gra_first', 0, 'Sun May 26 2013 01:13:32 GMT+0800'),
(11, 'first', 'A_gra_second', 0, 'Sun May 26 2013 01:13:32 GMT+0800'),
(12, 'first', 'A_gra_third', 0, 'Sun May 26 2013 01:13:32 GMT+0800'),
(13, 'first', 'B_gra_first', 0, 'Sun May 26 2013 01:13:32 GMT+0800'),
(14, 'first', 'B_gra_second', 0, 'Sun May 26 2013 01:13:32 GMT+0800'),
(15, 'first', 'B_gra_third', 0, 'Sun May 26 2013 01:13:32 GMT+0800'),
(16, 'first', 'C_gra_first', 0, 'Sun May 26 2013 01:13:32 GMT+0800'),
(17, 'first', 'C_gra_second', 0, 'Sun May 26 2013 01:13:32 GMT+0800'),
(18, 'first', 'C_gra_third', 0, 'Sun May 26 2013 01:13:32 GMT+0800'),
(19, 'first', 'A_gra_first', 0, 'Sun May 26 2013 01:35:58 GMT+0800'),
(20, 'first', 'A_gra_second', 0, 'Sun May 26 2013 01:35:58 GMT+0800'),
(21, 'first', 'A_gra_third', 0, 'Sun May 26 2013 01:35:58 GMT+0800'),
(22, 'first', 'B_gra_first', 0, 'Sun May 26 2013 01:35:58 GMT+0800'),
(23, 'first', 'B_gra_second', 0, 'Sun May 26 2013 01:35:58 GMT+0800'),
(24, 'first', 'B_gra_third', 0, 'Sun May 26 2013 01:35:58 GMT+0800'),
(25, 'first', 'C_gra_first', 0, 'Sun May 26 2013 01:35:58 GMT+0800'),
(26, 'first', 'C_gra_second', 0, 'Sun May 26 2013 01:35:58 GMT+0800'),
(27, 'first', 'C_gra_third', 0, 'Sun May 26 2013 01:35:58 GMT+0800'),
(28, 'first', 'A_gra_first', 0, 'Sun May 26 2013 01:41:31 GMT+0800'),
(29, 'first', 'A_gra_second', 0, 'Sun May 26 2013 01:41:31 GMT+0800'),
(30, 'first', 'A_gra_third', 0, 'Sun May 26 2013 01:41:31 GMT+0800'),
(31, 'first', 'B_gra_first', 0, 'Sun May 26 2013 01:41:31 GMT+0800'),
(32, 'first', 'B_gra_second', 0, 'Sun May 26 2013 01:41:31 GMT+0800'),
(33, 'first', 'B_gra_third', 0, 'Sun May 26 2013 01:41:31 GMT+0800'),
(34, 'first', 'C_gra_first', 0, 'Sun May 26 2013 01:41:31 GMT+0800'),
(35, 'first', 'C_gra_second', 0, 'Sun May 26 2013 01:41:31 GMT+0800'),
(36, 'first', 'C_gra_third', 0, 'Sun May 26 2013 01:41:31 GMT+0800'),
(37, 'second', 'A_gra_first', 0, 'Sun May 26 2013 01:41:31 GMT+0800'),
(38, 'second', 'A_gra_second', 0, 'Sun May 26 2013 01:41:31 GMT+0800'),
(39, 'second', 'A_gra_third', 0, 'Sun May 26 2013 01:41:31 GMT+0800'),
(40, 'second', 'B_gra_first', 0, 'Sun May 26 2013 01:41:31 GMT+0800'),
(41, 'second', 'B_gra_second', 0, 'Sun May 26 2013 01:41:31 GMT+0800'),
(42, 'second', 'B_gra_third', 0, 'Sun May 26 2013 01:41:31 GMT+0800'),
(43, 'second', 'C_gra_first', 0, 'Sun May 26 2013 01:41:31 GMT+0800'),
(44, 'second', 'C_gra_second', 0, 'Sun May 26 2013 01:41:31 GMT+0800'),
(45, 'second', 'C_gra_third', 0, 'Sun May 26 2013 01:41:31 GMT+0800');

-- --------------------------------------------------------

--
-- 表的結構 `C_member_card`
--

CREATE TABLE IF NOT EXISTS `C_member_card` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `ques_index` varchar(100) NOT NULL,
  `who` varchar(100) NOT NULL,
  `gra_first` varchar(100) NOT NULL,
  `gra_second` varchar(100) NOT NULL,
  `gra_third` varchar(100) NOT NULL,
  `date` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=16 ;

--
-- 轉存資料表中的資料 `C_member_card`
--

INSERT INTO `C_member_card` (`id`, `ques_index`, `who`, `gra_first`, `gra_second`, `gra_third`, `date`) VALUES
(1, 'first', 'member_C', '18_27', '6_30', '12_30', 'Sun May 26 2013 01:41:31 GMT+0800'),
(2, 'first', 'member_B', '16_24', '5_25', '10_25', 'Sun May 26 2013 01:41:31 GMT+0800'),
(3, 'first', 'member_A', '14_21', '4_20', '8_20', 'Sun May 26 2013 01:41:31 GMT+0800'),
(4, 'second', 'member_A', '16_24', '5_25', '10_25', 'Sun May 26 2013 01:41:31 GMT+0800'),
(5, 'second', 'member_B', '18_27', '6_30', '12_30', 'Sun May 26 2013 01:41:31 GMT+0800'),
(6, 'second', 'member_C', '14_21', '4_20', '8_20', 'Sun May 26 2013 01:41:31 GMT+0800'),
(7, 'third', 'member_A', '18_27', '6_30', '12_30', 'Sun May 26 2013 01:41:31 GMT+0800'),
(8, 'third', 'member_B', '14_21', '4_20', '8_20', 'Sun May 26 2013 01:41:31 GMT+0800'),
(9, 'third', 'member_C', '16_24', '5_25', '10_25', 'Sun May 26 2013 01:41:31 GMT+0800'),
(10, 'first', 'member_C', '12_30', '10_30', '9_27', 'Sun May 26 2013 13:45:03 GMT+0800'),
(11, 'first', 'member_A', '8_20', '6_18', '7_21', 'Sun May 26 2013 13:45:03 GMT+0800'),
(12, 'first', 'member_B', '10_25', '8_24', '8_24', 'Sun May 26 2013 13:45:03 GMT+0800'),
(13, 'first', 'member_B', '6_24', '5_25', '12_24', 'Sun May 26 2013 13:45:04 GMT+0800'),
(14, 'first', 'member_A', '5_20', '4_20', '10_20', 'Sun May 26 2013 13:45:04 GMT+0800'),
(15, 'first', 'member_C', '7_28', '6_30', '14_28', 'Sun May 26 2013 13:45:04 GMT+0800');

-- --------------------------------------------------------

--
-- 表的結構 `C_operate_times`
--

CREATE TABLE IF NOT EXISTS `C_operate_times` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `question` varchar(100) NOT NULL,
  `who` varchar(100) NOT NULL,
  `error_times` int(100) NOT NULL,
  `answer_times` int(100) NOT NULL,
  `date` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=28 ;

--
-- 轉存資料表中的資料 `C_operate_times`
--

INSERT INTO `C_operate_times` (`id`, `question`, `who`, `error_times`, `answer_times`, `date`) VALUES
(4, 'first', 'member_A', 0, 0, 'Thu May 23 2013 16:51:35 GMT+0800'),
(5, 'first', 'member_B', 0, 1, 'Thu May 23 2013 16:51:35 GMT+0800'),
(6, 'first', 'member_C', 0, 0, 'Thu May 23 2013 16:51:35 GMT+0800'),
(7, 'first', 'member_A', 0, 0, 'Thu May 23 2013 16:51:35 GMT+0800'),
(8, 'first', 'member_B', 0, 0, 'Thu May 23 2013 16:51:35 GMT+0800'),
(9, 'first', 'member_C', 0, 0, 'Thu May 23 2013 16:51:35 GMT+0800'),
(10, 'first', 'member_A', 0, 0, 'Thu May 23 2013 16:51:35 GMT+0800'),
(11, 'first', 'member_B', 0, 0, 'Thu May 23 2013 16:51:35 GMT+0800'),
(12, 'first', 'member_C', 0, 0, 'Thu May 23 2013 16:51:35 GMT+0800'),
(13, 'first', 'member_A', 0, 0, 'Sun May 26 2013 00:05:19 GMT+0800'),
(14, 'first', 'member_C', 0, 0, 'Sun May 26 2013 00:05:19 GMT+0800'),
(15, 'first', 'member_B', 0, 0, 'Sun May 26 2013 00:05:19 GMT+0800'),
(16, 'first', 'member_B', 0, 0, 'Sun May 26 2013 01:13:32 GMT+0800'),
(17, 'first', 'member_A', 0, 0, 'Sun May 26 2013 01:13:32 GMT+0800'),
(18, 'first', 'member_C', 0, 0, 'Sun May 26 2013 01:13:32 GMT+0800'),
(19, 'first', 'member_A', 0, 0, 'Sun May 26 2013 01:35:58 GMT+0800'),
(20, 'first', 'member_C', 0, 0, 'Sun May 26 2013 01:35:58 GMT+0800'),
(21, 'first', 'member_B', 0, 0, 'Sun May 26 2013 01:35:58 GMT+0800'),
(22, 'first', 'member_A', 0, 0, 'Sun May 26 2013 01:41:31 GMT+0800'),
(23, 'first', 'member_B', 0, 0, 'Sun May 26 2013 01:41:31 GMT+0800'),
(24, 'first', 'member_C', 0, 0, 'Sun May 26 2013 01:41:31 GMT+0800'),
(25, 'second', 'member_B', 0, 0, 'Sun May 26 2013 01:41:31 GMT+0800'),
(26, 'second', 'member_A', 0, 0, 'Sun May 26 2013 01:41:31 GMT+0800'),
(27, 'second', 'member_C', 0, 0, 'Sun May 26 2013 01:41:31 GMT+0800');

-- --------------------------------------------------------

--
-- 表的結構 `C_question`
--

CREATE TABLE IF NOT EXISTS `C_question` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `ques_index` varchar(100) NOT NULL,
  `question` varchar(100) NOT NULL,
  `date` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=61 ;

--
-- 轉存資料表中的資料 `C_question`
--

INSERT INTO `C_question` (`id`, `ques_index`, `question`, `date`) VALUES
(13, 'first', '4_10', 'Thu May 23 2013 16:51:35 GMT+0800'),
(14, 'second', '4_12', 'Thu May 23 2013 16:51:35 GMT+0800'),
(15, 'third', '8_12', 'Thu May 23 2013 16:51:35 GMT+0800'),
(16, 'first', '4_8', 'Sat May 25 2013 22:47:11 GMT+0800'),
(17, 'second', '2_6', 'Sat May 25 2013 22:47:11 GMT+0800'),
(18, 'third', '6_8', 'Sat May 25 2013 22:47:11 GMT+0800'),
(19, 'first', '2_8', 'Sat May 25 2013 23:49:49 GMT+0800'),
(20, 'second', '2_4', 'Sat May 25 2013 23:49:49 GMT+0800'),
(21, 'third', '4_10', 'Sat May 25 2013 23:49:49 GMT+0800'),
(22, 'first', '6_8', 'Sat May 25 2013 23:49:50 GMT+0800'),
(23, 'second', '4_10', 'Sat May 25 2013 23:49:50 GMT+0800'),
(24, 'third', '2_10', 'Sat May 25 2013 23:49:50 GMT+0800'),
(25, 'first', '6_10', 'Sun May 26 2013 00:00:29 GMT+0800'),
(26, 'second', '2_12', 'Sun May 26 2013 00:00:29 GMT+0800'),
(27, 'third', '2_10', 'Sun May 26 2013 00:00:29 GMT+0800'),
(28, 'first', '6_8', 'Sun May 26 2013 00:05:19 GMT+0800'),
(29, 'second', '2_6', 'Sun May 26 2013 00:05:19 GMT+0800'),
(30, 'third', '2_4', 'Sun May 26 2013 00:05:19 GMT+0800'),
(31, 'first', '10_12', 'Sun May 26 2013 00:05:19 GMT+0800'),
(32, 'second', '8_12', 'Sun May 26 2013 00:05:19 GMT+0800'),
(33, 'third', '6_10', 'Sun May 26 2013 00:05:19 GMT+0800'),
(34, 'first', '2_12', 'Sun May 26 2013 00:11:04 GMT+0800'),
(35, 'second', '2_8', 'Sun May 26 2013 00:11:04 GMT+0800'),
(36, 'third', '6_8', 'Sun May 26 2013 00:11:04 GMT+0800'),
(37, 'first', '2_6', 'Sun May 26 2013 00:17:37 GMT+0800'),
(38, 'second', '6_8', 'Sun May 26 2013 00:17:37 GMT+0800'),
(39, 'third', '2_10', 'Sun May 26 2013 00:17:37 GMT+0800'),
(40, 'first', '6_8', 'Sun May 26 2013 01:13:32 GMT+0800'),
(41, 'second', '2_8', 'Sun May 26 2013 01:13:32 GMT+0800'),
(42, 'third', '4_8', 'Sun May 26 2013 01:13:32 GMT+0800'),
(43, 'first', '2_6', 'Sun May 26 2013 01:35:58 GMT+0800'),
(44, 'second', '6_12', 'Sun May 26 2013 01:35:58 GMT+0800'),
(45, 'third', '10_12', 'Sun May 26 2013 01:35:58 GMT+0800'),
(46, 'first', '8_10', 'Sun May 26 2013 01:40:41 GMT+0800'),
(47, 'second', '6_8', 'Sun May 26 2013 01:40:41 GMT+0800'),
(48, 'third', '2_12', 'Sun May 26 2013 01:40:41 GMT+0800'),
(49, 'first', '2_10', 'Sun May 26 2013 01:40:48 GMT+0800'),
(50, 'second', '6_12', 'Sun May 26 2013 01:40:48 GMT+0800'),
(51, 'third', '2_12', 'Sun May 26 2013 01:40:48 GMT+0800'),
(52, 'first', '4_6', 'Sun May 26 2013 01:41:31 GMT+0800'),
(53, 'second', '2_10', 'Sun May 26 2013 01:41:31 GMT+0800'),
(54, 'third', '4_10', 'Sun May 26 2013 01:41:31 GMT+0800'),
(55, 'first', '4_10', 'Sun May 26 2013 13:45:03 GMT+0800'),
(56, 'second', '4_12', 'Sun May 26 2013 13:45:03 GMT+0800'),
(57, 'third', '2_6', 'Sun May 26 2013 13:45:03 GMT+0800'),
(58, 'first', '2_8', 'Sun May 26 2013 13:45:04 GMT+0800'),
(59, 'second', '2_10', 'Sun May 26 2013 13:45:04 GMT+0800'),
(60, 'third', '4_8', 'Sun May 26 2013 13:45:04 GMT+0800');

-- --------------------------------------------------------

--
-- 表的結構 `C_total_time`
--

CREATE TABLE IF NOT EXISTS `C_total_time` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `question` varchar(100) NOT NULL,
  `time` int(100) NOT NULL,
  `date` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- 轉存資料表中的資料 `C_total_time`
--

INSERT INTO `C_total_time` (`id`, `question`, `time`, `date`) VALUES
(2, 'first', 10, 'Thu May 23 2013 16:51:35 GMT+0800'),
(3, 'first', 2, 'Thu May 23 2013 16:51:35 GMT+0800'),
(4, 'first', 2, 'Thu May 23 2013 16:51:35 GMT+0800'),
(5, 'first', 191, 'Sun May 26 2013 00:05:19 GMT+0800'),
(6, 'first', 3, 'Sun May 26 2013 01:13:32 GMT+0800'),
(7, 'first', 14, 'Sun May 26 2013 01:35:58 GMT+0800'),
(8, 'first', 46, 'Sun May 26 2013 01:41:31 GMT+0800'),
(9, 'second', 16, 'Sun May 26 2013 01:41:31 GMT+0800');

-- --------------------------------------------------------

--
-- 表的結構 `C_trans_cancel_times`
--

CREATE TABLE IF NOT EXISTS `C_trans_cancel_times` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `ques_index` varchar(100) NOT NULL,
  `card` varchar(100) NOT NULL,
  `cancel_times` int(100) NOT NULL,
  `date` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- 轉存資料表中的資料 `C_trans_cancel_times`
--

INSERT INTO `C_trans_cancel_times` (`id`, `ques_index`, `card`, `cancel_times`, `date`) VALUES
(1, 'first', 'member_B_fraction_graphic_third', 1, 'Sat May 25 2013 23:49:50 GMT+0800'),
(2, 'first', 'member_B_fraction_graphic_second', 2, 'Sun May 26 2013 00:05:19 GMT+0800'),
(3, 'first', 'member_A_fraction_graphic_second', 1, 'Sun May 26 2013 00:11:04 GMT+0800'),
(4, 'first', 'member_B_fraction_graphic_first', 1, 'Sun May 26 2013 00:11:04 GMT+0800');

-- --------------------------------------------------------

--
-- 表的結構 `C_trans_error_times`
--

CREATE TABLE IF NOT EXISTS `C_trans_error_times` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `ques_index` varchar(100) NOT NULL,
  `card` varchar(100) NOT NULL,
  `before_trans` varchar(100) NOT NULL,
  `after_trans` varchar(100) NOT NULL,
  `error_times` int(100) NOT NULL,
  `condition` varchar(100) NOT NULL,
  `date` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- 轉存資料表中的資料 `C_trans_error_times`
--

INSERT INTO `C_trans_error_times` (`id`, `ques_index`, `card`, `before_trans`, `after_trans`, `error_times`, `condition`, `date`) VALUES
(1, 'first', 'member_B_fraction_graphic_third', '5_25', '1_5', 1, 'reduce', 'Sat May 25 2013 23:49:50 GMT+0800'),
(2, 'first', 'member_B_fraction_graphic_second', '4_24', '1_6', 0, 'reduce', 'Sun May 26 2013 00:00:29 GMT+0800'),
(3, 'first', 'member_B_fraction_graphic_second', '16_24', '4_6', 0, 'reduce', 'Sun May 26 2013 00:05:19 GMT+0800'),
(4, 'first', 'member_A_fraction_graphic_second', '5_20', '1_4', 0, 'reduce', 'Sun May 26 2013 00:11:04 GMT+0800'),
(5, 'first', 'member_B_fraction_graphic_second', '6_24', '2_8', 0, 'reduce', 'Sun May 26 2013 00:11:04 GMT+0800'),
(6, 'first', 'member_B_fraction_graphic_third', '5_25', '1_5', 0, 'reduce', 'Sun May 26 2013 00:17:37 GMT+0800');

-- --------------------------------------------------------

--
-- 表的結構 `C_trans_previous_times`
--

CREATE TABLE IF NOT EXISTS `C_trans_previous_times` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `ques_index` varchar(100) NOT NULL,
  `card` varchar(100) NOT NULL,
  `previous_times` int(100) NOT NULL,
  `condition` varchar(100) NOT NULL,
  `date` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- 轉存資料表中的資料 `C_trans_previous_times`
--

INSERT INTO `C_trans_previous_times` (`id`, `ques_index`, `card`, `previous_times`, `condition`, `date`) VALUES
(1, 'first', 'member_B_fraction_graphic_third', 0, 'reduce', 'Sun May 26 2013 00:17:37 GMT+0800');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
