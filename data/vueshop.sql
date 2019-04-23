/*
Navicat MySQL Data Transfer

Source Server         : 1812
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : vueshop

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-04-22 11:16:29
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cartlist
-- ----------------------------
DROP TABLE IF EXISTS `cartlist`;
CREATE TABLE `cartlist` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `_id` int(11) DEFAULT NULL,
  `goods` varchar(255) DEFAULT NULL,
  `num` int(11) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=61 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cartlist
-- ----------------------------
INSERT INTO `cartlist` VALUES ('4', '4', '原膳丹麦皇冠天然谷饲猪蹄700g', '4', '20.00', 'https://img10.yiguoimg.com/d/items/2017/171130/9288715890664318_500.jpg', '456');
INSERT INTO `cartlist` VALUES ('60', '2', '原膳丹麦皇冠天然谷饲猪蹄700g', '1', '25.90', 'https://img10.yiguoimg.com/d/items/2017/171130/9288715890664318_500.jpg', '123');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `psw` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', '13682313460', '123');
SET FOREIGN_KEY_CHECKS=1;
