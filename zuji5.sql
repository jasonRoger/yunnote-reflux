-- MySQL dump 10.13  Distrib 5.5.44, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: zuji5
-- ------------------------------------------------------
-- Server version	5.5.44-0+deb8u1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `files`
--

DROP TABLE IF EXISTS `files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `files` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `level` tinyint(3) unsigned NOT NULL DEFAULT '1',
  `pid` int(11) NOT NULL,
  `type` varchar(20) NOT NULL,
  `author` varchar(30) NOT NULL,
  `sort` tinyint(3) unsigned NOT NULL,
  `createTime` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `modifyTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `detail` text,
  `codeHtml` text,
  `codeCss` text,
  `codeJs` text,
  `size` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files`
--

LOCK TABLES `files` WRITE;
/*!40000 ALTER TABLE `files` DISABLE KEYS */;
INSERT INTO `files` VALUES (20,'系统使用说明',1,17,'markdown','jasonroger6',1,'2015-12-12 12:43:44','2015-12-12 12:43:44','***\n# 欢迎使用云笔记系统\n\n------\n为了便于大家管理自己的技术资料，项目资料以及生活中的琐事儿，我们为大家开发了一个云笔记系统，通过该系统你可以实现如下管理：\n\n> 私人定制管理目录\n> 创建markdown文档\n> 在线编辑web代码\n> 创建word文档\n> 可以无限的嵌套目录\n\n------\n\n## 系统整体介绍\n\n![](/images/whole.png)\n- 通过点击左上方的**+**号，你可以创建属于自己的管理主题\n- 通过在空白区域单击右键，将会出现右键菜单\n- 通过右上角的人头图标，你可以修改密码或者推出系统\n\n### 1. 新建markdown文档\n![](/images/markdown.png)\n\n如果不熟悉markdown文档的基本语法，建议百度了解一下，为了便于大家使用，我们特意添加了工具栏，通过工具栏，你可以很方便的创建属于自己的markdown文档，另外每次新建时，都会默认给出常用的markdown文档，供大家参考。\n\n### 2. 在线编辑代码（新建代码）\n![](/images/code.png)\n\n在线编辑器分做三个区域，左上方为html代码编辑区，左下方为javascript编辑器，中间部分为css代码编辑区，右方为效果预览区。如果你想预览html和js代码，只需按ctrl + s键便可在右方预览效果，对于css代码，则是实时预览，另外js默认引入jquery，所以你可以放心的使用jquery来进行编码。\n### 3. 新建word文档\n![](/images/word.png)\n\n作者 [@jasonroger]   \n2015 年 11月 06日    \n\n***\n\n\n',NULL,NULL,NULL,0),(21,'系统使用说明',1,18,'markdown','bbb',1,'2015-12-12 14:01:58','2015-12-12 14:01:58','***\n# 欢迎使用云笔记系统\n\n------\n为了便于大家管理自己的技术资料，项目资料以及生活中的琐事儿，我们为大家开发了一个云笔记系统，通过该系统你可以实现如下管理：\n\n> 私人定制管理目录\n> 创建markdown文档\n> 在线编辑web代码\n> 创建word文档\n> 可以无限的嵌套目录\n\n------\n\n## 系统整体介绍\n\n![](/images/whole.png)\n- 通过点击左上方的**+**号，你可以创建属于自己的管理主题\n- 通过在空白区域单击右键，将会出现右键菜单\n- 通过右上角的人头图标，你可以修改密码或者推出系统\n\n### 1. 新建markdown文档\n![](/images/markdown.png)\n\n如果不熟悉markdown文档的基本语法，建议百度了解一下，为了便于大家使用，我们特意添加了工具栏，通过工具栏，你可以很方便的创建属于自己的markdown文档，另外每次新建时，都会默认给出常用的markdown文档，供大家参考。\n\n### 2. 在线编辑代码（新建代码）\n![](/images/code.png)\n\n在线编辑器分做三个区域，左上方为html代码编辑区，左下方为javascript编辑器，中间部分为css代码编辑区，右方为效果预览区。如果你想预览html和js代码，只需按ctrl + s键便可在右方预览效果，对于css代码，则是实时预览，另外js默认引入jquery，所以你可以放心的使用jquery来进行编码。\n### 3. 新建word文档\n![](/images/word.png)\n\n作者 [@jasonroger]   \n2015 年 11月 06日    \n\n***\n\n\n',NULL,NULL,NULL,0),(22,'mice',1,20,'folder','chengmi.deng',1,'0000-00-00 00:00:00','2015-12-12 16:01:28','','','','',0),(23,'test',2,22,'markdown','chengmi.deng',1,'0000-00-00 00:00:00','2015-12-12 16:01:36','***\n# 欢迎使用 Markdown 编辑阅读器\n\n------\n\n我们理解您需要更便捷更高效的工具记录思想，整理笔记、知识，并将其中承载的价值传播给他人，** Markdown** 是我们给出的答案 —— 我们为记录思想和分享知识提供更专业的工具。 您可以使用 Markdown：\n\n> 整理知识，学习笔记\n> 发布日记，杂文，所见所想\n> 撰写发布技术文稿（代码支持）\n> 撰写发布学术论文（LaTeX 公式支持）\n[![](/images/markdown.jpg)](/images/markdown.jpg)\n除了您现在看到的这个 Markdown 在线版本，您还可以前往以下网址下载：\n\n------\n\n## 什么是 Markdown\n\nMarkdown 是一种方便记忆、书写的纯文本标记语言，用户可以使用这些标记符号以最小的输入代价生成极富表现力的文档：譬如您正在阅读的这份文档。它使用简单的符号标记不同的标题，分割不同的段落，**粗体** 或者 *斜体* 某些文字，更棒的是，它还可以\n\n### 1. 高亮一段代码[^code]\n##### JS代码　\n\n```javascript\nfunction test() {\n    console.log(\"Hello world!\");\n}\n(function(){\n    var box = function() {\n        return box.fn.init();\n    };\n})();\n\nvar testBox = box();\n```\n\n##### HTML 代码 HTML codes\n\n```html\n<!DOCTYPE html>\n<html>\n    <head>\n        <mate charest=\"utf-8\" />\n        <title>Hello world!</title>\n        <style type=\"text/css\">\n            ul{list-style: none;}\n            img{border:none;vertical-align: middle;}\n        </style>\n    </head>\n    <body>\n        <h1 class=\"text-xxl\">Hello world!</h1>\n    </body>\n</html>\n```\n\n### 2. 高效绘制 [流程图](https://www.baidu.com)\n\n```flow\nst=>start: Start\nop=>operation: Your Operation\ncond=>condition: Yes or No?\ne=>end\n\nst->op->cond\ncond(yes)->e\ncond(no)->op\n```\n\n### 3. 高效绘制 [序列图](https://www.baidu.com)\n\n```seq\nAlice->Bob: Hello Bob, how are you?\nNote right of Bob: Bob thinks\nBob-->Alice: I am good thanks!\n```\n\n### 4. 绘制表格\n\n| 项目        | 价格   |  数量  |\n| --------   | -----:  | :----:  |\n| 计算机     | \\$1600 |   5     |\n| 手机        |   \\$12   |   12   |\n| 管线        |    \\$1    |  234  |\n\n### 5. 更详细语法说明\n\n想要查看更详细的语法说明，可以参考我们准备的 [Markdown 简明语法手册][1]，进阶用户可以参考 [Markdown 高阶语法手册][2] 了解更多高级功能。\n\n总而言之，不同于其它 *所见即所得* 的编辑器：你只需使用键盘专注于书写文本内容，就可以生成印刷级的排版格式，省却在键盘和工具栏之间来回切换，调整内容和格式的麻烦。**Markdown 在流畅的书写和印刷级的阅读体验之间找到了平衡。** 目前它已经成为世界上最大的技术分享网站 GitHub 和 技术问答网站 StackOverFlow 的御用书写格式。\n\n---\n\n作者 [@jasonroger][3]     \n2015 年 11月 01日    \n\n\n','','','',0),(29,'test',1,20,'markdown','chengmi.deng',2,'0000-00-00 00:00:00','2015-12-12 16:11:19','***\n# 欢迎使用 Markdown 编辑阅读器\n\n------\n\n我们理解您需要更便捷更高效的工具记录思想，整理笔记、知识，并将其中承载的价值传播给他人，** Markdown** 是我们给出的答案 —— 我们为记录思想和分享知识提供更专业的工具。 您可以使用 Markdown：\n\n> 整理知识，学习笔记\n> 发布日记，杂文，所见所想\n> 撰写发布技术文稿（代码支持）\n> 撰写发布学术论文（LaTeX 公式支持）\n[![](/images/markdown.jpg)](/images/markdown.jpg)\n除了您现在看到的这个 Markdown 在线版本，您还可以前往以下网址下载：\n\n------\n\n## 什么是 Markdown\n\nMarkdown 是一种方便记忆、书写的纯文本标记语言，用户可以使用这些标记符号以最小的输入代价生成极富表现力的文档：譬如您正在阅读的这份文档。它使用简单的符号标记不同的标题，分割不同的段落，**粗体** 或者 *斜体* 某些文字，更棒的是，它还可以\n\n### 1. 高亮一段代码[^code]\n##### JS代码　\n\n```javascript\nfunction test() {\n    console.log(\"Hello world!\");\n}\n(function(){\n    var box = function() {\n        return box.fn.init();\n    };\n})();\n\nvar testBox = box();\n```\n\n##### HTML 代码 HTML codes\n\n```html\n<!DOCTYPE html>\n<html>\n    <head>\n        <mate charest=\"utf-8\" />\n        <title>Hello world!</title>\n        <style type=\"text/css\">\n            ul{list-style: none;}\n            img{border:none;vertical-align: middle;}\n        </style>\n    </head>\n    <body>\n        <h1 class=\"text-xxl\">Hello world!</h1>\n    </body>\n</html>\n```\n\n### 2. 高效绘制 [流程图](https://www.baidu.com)\n\n```flow\nst=>start: Start\nop=>operation: Your Operation\ncond=>condition: Yes or No?\ne=>end\n\nst->op->cond\ncond(yes)->e\ncond(no)->op\n```\n\n### 3. 高效绘制 [序列图](https://www.baidu.com)\n\n```seq\nAlice->Bob: Hello Bob, how are you?\nNote right of Bob: Bob thinks\nBob-->Alice: I am good thanks!\n```\n\n### 4. 绘制表格\n\n| 项目        | 价格   |  数量  |\n| --------   | -----:  | :----:  |\n| 计算机     | \\$1600 |   5     |\n| 手机        |   \\$12   |   12   |\n| 管线        |    \\$1    |  234  |\n\n### 5. 更详细语法说明\n\n想要查看更详细的语法说明，可以参考我们准备的 [Markdown 简明语法手册][1]，进阶用户可以参考 [Markdown 高阶语法手册][2] 了解更多高级功能。\n\n总而言之，不同于其它 *所见即所得* 的编辑器：你只需使用键盘专注于书写文本内容，就可以生成印刷级的排版格式，省却在键盘和工具栏之间来回切换，调整内容和格式的麻烦。**Markdown 在流畅的书写和印刷级的阅读体验之间找到了平衡。** 目前它已经成为世界上最大的技术分享网站 GitHub 和 技术问答网站 StackOverFlow 的御用书写格式。\n\n---\n\n作者 [@jasonroger][3]     \n2015 年 11月 01日    \n\n\n','','','',0),(30,'testdddsadfasdf',1,20,'word','chengmi.deng',3,'0000-00-00 00:00:00','2015-12-12 16:26:27','<p>aaaaaah &nbsp;dddddsafsadfsadfsadfsadfsdf;,k;l</p>','','','',0);
/*!40000 ALTER TABLE `files` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `navs`
--

DROP TABLE IF EXISTS `navs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `navs` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `author` varchar(30) NOT NULL,
  `sort` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `createTime` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `modifyTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `navs`
--

LOCK TABLES `navs` WRITE;
/*!40000 ALTER TABLE `navs` DISABLE KEYS */;
INSERT INTO `navs` VALUES (20,'项目管理','chengmi.deng',1,'2015-12-12 16:01:16','2015-12-12 16:01:16'),(21,'系统相关','chengmi.deng',2,'2015-12-12 16:06:19','2015-12-12 16:06:19');
/*!40000 ALTER TABLE `navs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `password` varchar(40) NOT NULL,
  `createTime` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `modifyTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (26,'admin','123456','2015-12-12 07:21:55','2015-12-12 07:21:55'),(27,'chengmi.deng','123456','2015-12-12 07:45:11','2015-12-12 12:23:31'),(28,'jasonroger','123456','2015-12-12 12:35:13','2015-12-12 12:35:13'),(29,'jasonroger1','123456','2015-12-12 12:38:09','2015-12-12 12:38:09'),(30,'jasonroger2','123456','2015-12-12 12:38:38','2015-12-12 12:38:38'),(31,'jasonroger3','123456','2015-12-12 12:39:44','2015-12-12 12:39:44'),(32,'jasonroger4','123456','2015-12-12 12:40:51','2015-12-12 12:40:51'),(33,'jasonroger5','123456','2015-12-12 12:42:31','2015-12-12 12:42:31'),(34,'jasonroger6','123456','2015-12-12 12:43:44','2015-12-12 12:43:44'),(35,'bbb','123456','2015-12-12 14:01:58','2015-12-12 14:01:58');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-12-13  0:39:14
