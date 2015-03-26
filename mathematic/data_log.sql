-- phpMyAdmin SQL Dump
-- version 3.4.9
-- http://www.phpmyadmin.net
--
-- 主機: localhost
-- 產生日期: 2013 年 05 月 12 日 15:30
-- 伺服器版本: 5.5.20
-- PHP 版本: 5.3.9

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 資料庫: `data_log`
--

-- --------------------------------------------------------

--
-- 表的結構 `collect_change_times`
--

CREATE TABLE IF NOT EXISTS `collect_change_times` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `error_times` int(100) NOT NULL,
  `change_times` int(100) NOT NULL,
  `date` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的結構 `collect_personal_time`
--

CREATE TABLE IF NOT EXISTS `collect_personal_time` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `member` varchar(100) NOT NULL,
  `time` int(100) NOT NULL,
  `date` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的結構 `collect_Total_time`
--

CREATE TABLE IF NOT EXISTS `collect_Total_time` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `time` int(100) NOT NULL,
  `date` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
