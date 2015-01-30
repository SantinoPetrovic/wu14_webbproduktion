-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Värd: 127.0.0.1
-- Tid vid skapande: 30 jan 2015 kl 13:44
-- Serverversion: 5.6.20
-- PHP-version: 5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Databas: `cms_example`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `images`
--

CREATE TABLE IF NOT EXISTS `images` (
`image_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `url_path` varchar(255) NOT NULL,
  `description` text,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Tabellstruktur `menus`
--

CREATE TABLE IF NOT EXISTS `menus` (
  `machine_name` varchar(255) NOT NULL,
  `menu_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabellstruktur `menu_links`
--

CREATE TABLE IF NOT EXISTS `menu_links` (
`menu_link_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `url_path` varchar(255) NOT NULL,
  `menu` varchar(255) NOT NULL,
  `parent_link_id` int(11) DEFAULT NULL,
  `weight` int(11) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Tabellstruktur `pages`
--

CREATE TABLE IF NOT EXISTS `pages` (
`page_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `user_id` int(11) NOT NULL,
  `image_id` int(11) DEFAULT NULL,
  `video_id` int(11) DEFAULT NULL,
  `category` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Tabellstruktur `url_alias`
--

CREATE TABLE IF NOT EXISTS `url_alias` (
`alias_id` int(11) NOT NULL,
  `url_path` varchar(255) NOT NULL,
  `page_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Tabellstruktur `users`
--

CREATE TABLE IF NOT EXISTS `users` (
`user_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `information` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Tabellstruktur `videos`
--

CREATE TABLE IF NOT EXISTS `videos` (
`video_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `url_path` varchar(255) NOT NULL,
  `description` text,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Index för dumpade tabeller
--

--
-- Index för tabell `images`
--
ALTER TABLE `images`
 ADD PRIMARY KEY (`image_id`), ADD KEY `user_id` (`user_id`);

--
-- Index för tabell `menus`
--
ALTER TABLE `menus`
 ADD PRIMARY KEY (`machine_name`);

--
-- Index för tabell `menu_links`
--
ALTER TABLE `menu_links`
 ADD PRIMARY KEY (`menu_link_id`), ADD KEY `menu` (`menu`), ADD KEY `parent_link_id` (`parent_link_id`);

--
-- Index för tabell `pages`
--
ALTER TABLE `pages`
 ADD PRIMARY KEY (`page_id`), ADD KEY `user_id` (`user_id`), ADD KEY `image_id` (`image_id`), ADD KEY `video_id` (`video_id`);

--
-- Index för tabell `url_alias`
--
ALTER TABLE `url_alias`
 ADD PRIMARY KEY (`alias_id`), ADD KEY `page_id` (`page_id`);

--
-- Index för tabell `users`
--
ALTER TABLE `users`
 ADD PRIMARY KEY (`user_id`), ADD UNIQUE KEY `email` (`email`);

--
-- Index för tabell `videos`
--
ALTER TABLE `videos`
 ADD PRIMARY KEY (`video_id`), ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT för dumpade tabeller
--

--
-- AUTO_INCREMENT för tabell `images`
--
ALTER TABLE `images`
MODIFY `image_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT för tabell `menu_links`
--
ALTER TABLE `menu_links`
MODIFY `menu_link_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT för tabell `pages`
--
ALTER TABLE `pages`
MODIFY `page_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT för tabell `url_alias`
--
ALTER TABLE `url_alias`
MODIFY `alias_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT för tabell `users`
--
ALTER TABLE `users`
MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT för tabell `videos`
--
ALTER TABLE `videos`
MODIFY `video_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- Restriktioner för dumpade tabeller
--

--
-- Restriktioner för tabell `images`
--
ALTER TABLE `images`
ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Restriktioner för tabell `menu_links`
--
ALTER TABLE `menu_links`
ADD CONSTRAINT `menu_links_ibfk_1` FOREIGN KEY (`menu`) REFERENCES `menus` (`machine_name`),
ADD CONSTRAINT `menu_links_ibfk_2` FOREIGN KEY (`parent_link_id`) REFERENCES `menu_links` (`menu_link_id`);

--
-- Restriktioner för tabell `pages`
--
ALTER TABLE `pages`
ADD CONSTRAINT `pages_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
ADD CONSTRAINT `pages_ibfk_2` FOREIGN KEY (`image_id`) REFERENCES `images` (`image_id`),
ADD CONSTRAINT `pages_ibfk_3` FOREIGN KEY (`video_id`) REFERENCES `videos` (`video_id`);

--
-- Restriktioner för tabell `url_alias`
--
ALTER TABLE `url_alias`
ADD CONSTRAINT `url_alias_ibfk_1` FOREIGN KEY (`page_id`) REFERENCES `pages` (`page_id`);

--
-- Restriktioner för tabell `videos`
--
ALTER TABLE `videos`
ADD CONSTRAINT `videos_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
