-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2018-01-19 05:55:22
-- 服务器版本： 10.1.29-MariaDB
-- PHP Version: 7.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidunews2`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `id` int(100) NOT NULL,
  `newstype` varchar(100) NOT NULL,
  `newstitle` varchar(100) NOT NULL,
  `newsimg` varchar(100) NOT NULL,
  `newstime` datetime NOT NULL,
  `newssrc` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `newstype`, `newstitle`, `newsimg`, `newstime`, `newssrc`) VALUES
(1, '精选', '新的标题2', '新闻的图片', '2018-01-10 00:00:00', '新闻的地址00'),
(149, '精选', 'ad', 'img/4.jpg', '2016-05-06 00:00:00', '6540'),
(150, '精选', 'ad123', 'img/2.jpg', '0000-00-00 00:00:00', '9870'),
(151, '图片', 'ad123321', 'img/21.jpg', '0000-00-00 00:00:00', '9870'),
(152, '精选', '321', 'img/7.png', '0000-00-00 00:00:00', '215'),
(153, '精选', '7788', 'img/2.jpg', '0000-00-00 00:00:00', '7700'),
(154, '图片', '2233', 'img/7.png', '0000-00-00 00:00:00', '5522'),
(155, '精选', '33', 'img/2.jpg', '0000-00-00 00:00:00', '99'),
(156, '精选', '001', 'img/4.jpg', '0000-00-00 00:00:00', '003');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=157;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
