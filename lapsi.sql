-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 15, 2021 at 12:48 PM
-- Server version: 8.0.21
-- PHP Version: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lapsi`
--

-- --------------------------------------------------------

--
-- Table structure for table `action_log`
--

DROP TABLE IF EXISTS `action_log`;
CREATE TABLE IF NOT EXISTS `action_log` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `action` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `action_details` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `action_by` int UNSIGNED NOT NULL,
  `action_on` int UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `agency`
--

DROP TABLE IF EXISTS `agency`;
CREATE TABLE IF NOT EXISTS `agency` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `agency_type` bigint NOT NULL,
  `parent_id` bigint UNSIGNED DEFAULT '0',
  `position` int DEFAULT NULL,
  `children` int DEFAULT NULL,
  `phone` bigint NOT NULL,
  `email` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `agency`
--

INSERT INTO `agency` (`id`, `name`, `slug`, `agency_type`, `parent_id`, `position`, `children`, `phone`, `email`, `created_at`, `updated_at`) VALUES
(2, 'Ministry Of Finance', 'ministry-of-finance', 1, 0, NULL, NULL, 9089878998, 'finance@lapsi.com', '2021-03-17 23:53:24', '2021-06-12 07:58:34'),
(3, 'Ministry of Transport', 'ministry-of-transport', 1, 0, NULL, NULL, 9034898767, 'transport@lapsi.com', '2021-03-19 07:45:13', '2021-06-12 08:00:07'),
(4, 'Lastma', 'lastma', 2, 3, NULL, NULL, 0, '', '2021-03-19 07:47:02', '2021-03-19 08:56:54');

-- --------------------------------------------------------

--
-- Table structure for table `agency_type`
--

DROP TABLE IF EXISTS `agency_type`;
CREATE TABLE IF NOT EXISTS `agency_type` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `agency_type`
--

INSERT INTO `agency_type` (`id`, `name`, `slug`, `created_at`, `updated_at`) VALUES
(1, 'ministry', 'ministry', '2021-03-17 23:30:02', '2021-03-17 23:30:02'),
(2, 'MDA', 'mda', '2021-03-17 23:39:57', '2021-03-17 23:39:57'),
(3, 'department', 'department', '2021-03-30 16:47:24', '2021-03-30 16:47:24');

-- --------------------------------------------------------

--
-- Table structure for table `allocations`
--

DROP TABLE IF EXISTS `allocations`;
CREATE TABLE IF NOT EXISTS `allocations` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `agency` int UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `assets`
--

DROP TABLE IF EXISTS `assets`;
CREATE TABLE IF NOT EXISTS `assets` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `agency_id` bigint NOT NULL,
  `asset_type_id` bigint NOT NULL,
  `asset_details` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `assets`
--

INSERT INTO `assets` (`id`, `agency_id`, `asset_type_id`, `asset_details`, `created_at`, `updated_at`) VALUES
(1, 2, 1, '{\"serial_no\":263789192,\"vehincle_name\":\"honda\",\"capacity\":5,\"yeah_of_purchase\":2020}', '2021-06-12 18:04:13', '2021-06-12 18:04:13'),
(2, 2, 1, '{\"serial_no\":902,\"vehincle_name\":\"benz\",\"capacity\":5,\"yeah_of_purchase\":2021}', '2021-06-12 18:04:13', '2021-06-12 18:04:13');

-- --------------------------------------------------------

--
-- Table structure for table `asset_insurances`
--

DROP TABLE IF EXISTS `asset_insurances`;
CREATE TABLE IF NOT EXISTS `asset_insurances` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `policy_id` bigint DEFAULT NULL,
  `business_id` bigint DEFAULT NULL,
  `insurance_class_id` bigint NOT NULL,
  `asset_id` bigint NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `asset_insurances`
--

INSERT INTO `asset_insurances` (`id`, `policy_id`, `business_id`, `insurance_class_id`, `asset_id`, `created_at`, `updated_at`) VALUES
(1, NULL, 2, 1, 1, '2021-06-14 12:48:27', '2021-06-14 12:48:27'),
(2, NULL, 2, 1, 2, '2021-06-14 12:48:27', '2021-06-14 12:48:27');

-- --------------------------------------------------------

--
-- Table structure for table `asset_types`
--

DROP TABLE IF EXISTS `asset_types`;
CREATE TABLE IF NOT EXISTS `asset_types` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `insurance_classes` text COLLATE utf8mb4_unicode_ci,
  `allocations` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `asset_types`
--

INSERT INTO `asset_types` (`id`, `name`, `insurance_classes`, `allocations`, `created_at`, `updated_at`) VALUES
(1, 'Motor Vehincles', '[1]', NULL, '2021-06-10 20:48:10', '2021-06-10 20:48:10'),
(2, 'Buildings', '[1]', NULL, '2021-06-10 21:03:10', '2021-06-10 21:03:10'),
(3, 'Generators', '[1,2]', NULL, '2021-06-10 21:08:57', '2021-06-10 21:08:57');

-- --------------------------------------------------------

--
-- Table structure for table `brokers`
--

DROP TABLE IF EXISTS `brokers`;
CREATE TABLE IF NOT EXISTS `brokers` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `year` int NOT NULL,
  `registered_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rc_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `zip` int DEFAULT NULL,
  `ceo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` bigint UNSIGNED NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint NOT NULL DEFAULT '0',
  `rank_id` bigint DEFAULT '0',
  `parent_id` bigint DEFAULT NULL,
  `rel` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '[]',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `verified_at` date DEFAULT NULL,
  `verified_by` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `brokers`
--

INSERT INTO `brokers` (`id`, `year`, `registered_name`, `rc_number`, `address`, `city`, `state`, `zip`, `ceo`, `phone`, `email`, `status`, `rank_id`, `parent_id`, `rel`, `created_at`, `updated_at`, `verified_at`, `verified_by`) VALUES
(1, 2021, 'adunni insurance limited', 'ec67679831', 'the address', 'ibadan', 'oyo', 121211, 'adunni adeagbo', 9089878765, 'adunni@adunniinsurance.com', 1, 1, NULL, '[]', '2021-06-08 13:49:20', '2021-06-08 13:49:20', '2021-06-09', 'owolabi emmanuel '),
(2, 2021, 'olaide insurance limited', 'ec3424232', 'the address', 'lagos', 'lagos', 121211, 'adunni adeagbo', 9089878765, 'olaide@adunniinsurance.com', 0, 2, 1, '[1]', '2021-06-08 13:51:06', '2021-06-08 13:51:06', NULL, NULL),
(3, 2021, 'glory insurance broker limited', 'rc565623', 'no 4 journalist estate arepo', 'arepo', 'ogun', 1231, 'owolabi emmanuel', 9098789878, 'aremuopomulero@gmail.com', 0, 0, NULL, '[]', '2021-06-09 05:14:53', '2021-06-09 05:14:53', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `brokers_allocations`
--

DROP TABLE IF EXISTS `brokers_allocations`;
CREATE TABLE IF NOT EXISTS `brokers_allocations` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `agency_id` int UNSIGNED NOT NULL,
  `broker_id` int UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `brokers_allocations`
--

INSERT INTO `brokers_allocations` (`id`, `agency_id`, `broker_id`, `created_at`, `updated_at`) VALUES
(1, 2, 1, '2021-06-09 10:23:49', '2021-06-09 10:29:07'),
(2, 3, 1, '2021-06-09 10:29:07', '2021-06-09 10:29:07');

-- --------------------------------------------------------

--
-- Table structure for table `broker_ranks`
--

DROP TABLE IF EXISTS `broker_ranks`;
CREATE TABLE IF NOT EXISTS `broker_ranks` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rank` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `broker_ranks`
--

INSERT INTO `broker_ranks` (`id`, `name`, `rank`, `created_at`, `updated_at`) VALUES
(1, 'Super Lead', 1, '2021-06-08 14:14:25', '2021-06-08 14:44:02'),
(2, 'Lead Broker', 2, '2021-06-08 22:57:58', '2021-06-08 22:57:58'),
(3, 'Co Brokers', 3, '2021-06-08 23:01:44', '2021-06-08 23:01:44');

-- --------------------------------------------------------

--
-- Table structure for table `businesses`
--

DROP TABLE IF EXISTS `businesses`;
CREATE TABLE IF NOT EXISTS `businesses` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `agency` bigint UNSIGNED NOT NULL,
  `insured_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `insured_phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `insured_email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `business_type` bigint NOT NULL,
  `business_class` bigint NOT NULL,
  `business_description` text COLLATE utf8mb4_unicode_ci,
  `business_value` bigint DEFAULT NULL,
  `business_location` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact_phone` bigint DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `policy_id` bigint DEFAULT NULL,
  `assets` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `businesses`
--

INSERT INTO `businesses` (`id`, `agency`, `insured_name`, `insured_phone`, `insured_email`, `business_type`, `business_class`, `business_description`, `business_value`, `business_location`, `contact_name`, `contact_phone`, `email`, `policy_id`, `assets`, `created_at`, `updated_at`) VALUES
(1, 2, 'lagos state gorvernment', '09089890989', 'lagos@lagos.com', 1, 1, 'car asset under ministry of lagos', 500000, 'lagos', 'lagos', 9010298909, NULL, NULL, '[{\"id\":1,\"agency_id\":2,\"asset_type_id\":1,\"asset_details\":\"{\\\"serial_no\\\":263789192,\\\"vehincle_name\\\":\\\"honda\\\",\\\"capacity\\\":5,\\\"yeah_of_purchase\\\":2020}\",\"created_at\":\"2021-06-12 19:04:13\",\"updated_at\":\"2021-06-12 19:04:13\",\"agency\":\"Ministry Of Finance\",\"assetstype\":\"Motor Vehincles\",\"COUNT(`AI`.`id`)\":0,\"insurances\":\"[{\\\"id\\\": 1}]\",\"asset_insurances\":\"[{\\\"id\\\": null}]\"},{\"id\":2,\"agency_id\":2,\"asset_type_id\":1,\"asset_details\":\"{\\\"serial_no\\\":902,\\\"vehincle_name\\\":\\\"benz\\\",\\\"capacity\\\":5,\\\"yeah_of_purchase\\\":2021}\",\"created_at\":\"2021-06-12 19:04:13\",\"updated_at\":\"2021-06-12 19:04:13\",\"agency\":\"Ministry Of Finance\",\"assetstype\":\"Motor Vehincles\",\"COUNT(`AI`.`id`)\":0,\"insurances\":\"[{\\\"id\\\": 1}]\",\"asset_insurances\":\"[{\\\"id\\\": null}]\"}]', '2021-06-14 12:46:07', '2021-06-14 12:46:07'),
(2, 2, 'lagos state gorvernment', '09089890989', 'lagos@lagos.com', 1, 1, 'car asset under ministry of lagos', 500000, 'lagos', 'lagos', 9010298909, NULL, NULL, '[{\"id\":1,\"agency_id\":2,\"asset_type_id\":1,\"asset_details\":\"{\\\"serial_no\\\":263789192,\\\"vehincle_name\\\":\\\"honda\\\",\\\"capacity\\\":5,\\\"yeah_of_purchase\\\":2020}\",\"created_at\":\"2021-06-12 19:04:13\",\"updated_at\":\"2021-06-12 19:04:13\",\"agency\":\"Ministry Of Finance\",\"assetstype\":\"Motor Vehincles\",\"COUNT(`AI`.`id`)\":0,\"insurances\":\"[{\\\"id\\\": 1}]\",\"asset_insurances\":\"[{\\\"id\\\": null}]\"},{\"id\":2,\"agency_id\":2,\"asset_type_id\":1,\"asset_details\":\"{\\\"serial_no\\\":902,\\\"vehincle_name\\\":\\\"benz\\\",\\\"capacity\\\":5,\\\"yeah_of_purchase\\\":2021}\",\"created_at\":\"2021-06-12 19:04:13\",\"updated_at\":\"2021-06-12 19:04:13\",\"agency\":\"Ministry Of Finance\",\"assetstype\":\"Motor Vehincles\",\"COUNT(`AI`.`id`)\":0,\"insurances\":\"[{\\\"id\\\": 1}]\",\"asset_insurances\":\"[{\\\"id\\\": null}]\"}]', '2021-06-14 12:48:27', '2021-06-14 12:48:27');

-- --------------------------------------------------------

--
-- Table structure for table `edit_requests`
--

DROP TABLE IF EXISTS `edit_requests`;
CREATE TABLE IF NOT EXISTS `edit_requests` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` int UNSIGNED NOT NULL,
  `reason` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `files`
--

DROP TABLE IF EXISTS `files`;
CREATE TABLE IF NOT EXISTS `files` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `file_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `filename` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `files`
--

INSERT INTO `files` (`id`, `user_id`, `file_type`, `url`, `filename`, `created_at`, `updated_at`) VALUES
(1, 14, 'image', 'http://localhost/lapsi/public/userfiles/1622137196bg2.jpg', 'bg2.jpg', '2021-05-27 16:39:56', '2021-05-27 16:39:56'),
(2, 14, 'image', 'http://localhost/lapsi/public/userfiles/1622137318bg2.jpg', 'bg2.jpg', '2021-05-27 16:41:58', '2021-05-27 16:41:58'),
(3, 14, 'image', 'http://localhost/lapsi/public/userfiles/1622533202audio.png', 'audio.png', '2021-06-01 06:40:02', '2021-06-01 06:40:02'),
(4, 14, 'image', 'http://localhost/lapsi/public/userfiles/1622533763arrow_circle_green_up.png', 'arrow_circle_green_up.png', '2021-06-01 06:49:23', '2021-06-01 06:49:23'),
(5, 14, 'image', 'http://localhost/lapsi/public/userfiles/1622534284banner.jpg', 'banner.jpg', '2021-06-01 06:58:04', '2021-06-01 06:58:04'),
(6, 14, 'image', 'http://localhost/lapsi/public/userfiles/1622534582lady2.png', 'lady2.png', '2021-06-01 07:03:02', '2021-06-01 07:03:02'),
(7, 14, 'image', 'http://localhost/lapsi/public/userfiles/1622534869pexels-photo-91227 (1).jpeg', 'pexels-photo-91227 (1).jpeg', '2021-06-01 07:07:49', '2021-06-01 07:07:49'),
(8, 14, 'image', 'http://localhost/lapsi/public/userfiles/1622534950arrow_circle_green_up.png', 'arrow_circle_green_up.png', '2021-06-01 07:09:10', '2021-06-01 07:09:10'),
(9, 14, 'image', 'http://localhost/lapsi/public/userfiles/1622535657pexels-photo-716411.jpeg', 'pexels-photo-716411.jpeg', '2021-06-01 07:20:57', '2021-06-01 07:20:57'),
(10, 14, 'image', 'http://localhost/lapsi/public/userfiles/1622535720antenna.png', 'antenna.png', '2021-06-01 07:22:00', '2021-06-01 07:22:00'),
(11, 3, 'image', 'http://localhost/lapsi/public/userfiles/1622572542arrow_circle_green_up.png', 'arrow_circle_green_up.png', '2021-06-01 17:35:42', '2021-06-01 17:35:42'),
(12, 3, 'image', 'http://localhost/lapsi/public/userfiles/1622572542audio.png', 'audio.png', '2021-06-01 17:35:42', '2021-06-01 17:35:42'),
(13, 3, 'image', 'http://localhost/lapsi/public/userfiles/1622572542google.jpg', 'google.jpg', '2021-06-01 17:35:42', '2021-06-01 17:35:42');

-- --------------------------------------------------------

--
-- Table structure for table `insurance_classes`
--

DROP TABLE IF EXISTS `insurance_classes`;
CREATE TABLE IF NOT EXISTS `insurance_classes` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` bigint NOT NULL,
  `status` tinyint NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `insurance_classes`
--

INSERT INTO `insurance_classes` (`id`, `name`, `code`, `type`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Fire and Burglary', 'FB', 1, 1, '2021-06-09 16:15:38', '2021-06-09 16:15:38'),
(2, 'public liability', 'PL', 2, 1, '2021-06-10 21:08:08', '2021-06-10 21:08:08');

-- --------------------------------------------------------

--
-- Table structure for table `insurance_types`
--

DROP TABLE IF EXISTS `insurance_types`;
CREATE TABLE IF NOT EXISTS `insurance_types` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `insurance_types`
--

INSERT INTO `insurance_types` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'life', '2021-06-09 15:45:41', '2021-06-09 15:45:41'),
(2, 'non-life', '2021-06-09 16:06:22', '2021-06-09 16:06:22');

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

DROP TABLE IF EXISTS `message`;
CREATE TABLE IF NOT EXISTS `message` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `from` int UNSIGNED NOT NULL,
  `to` int UNSIGNED NOT NULL,
  `message` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2019_08_19_000000_create_failed_jobs_table', 1),
(3, '2021_03_09_152926_create_roles_table', 1),
(4, '2021_03_09_153316_create_permissions_table', 1),
(5, '2021_03_09_162435_create_agency_table', 1),
(6, '2021_03_09_162530_create_agency_type_table', 1),
(7, '2016_06_01_000001_create_oauth_auth_codes_table', 2),
(8, '2016_06_01_000002_create_oauth_access_tokens_table', 2),
(9, '2016_06_01_000003_create_oauth_refresh_tokens_table', 2),
(10, '2016_06_01_000004_create_oauth_clients_table', 2),
(11, '2016_06_01_000005_create_oauth_personal_access_clients_table', 2),
(12, '2021_03_14_002807_create_action_log_table', 3),
(13, '2021_05_27_142224_create_files_table', 4),
(14, '2021_06_04_091732_create_message_table', 5),
(15, '2021_06_04_095953_create_edit_requests_table', 5),
(16, '2021_06_07_221636_create_brokers_table', 6),
(17, '2021_06_07_222451_create_underwriters_table', 6),
(18, '2021_06_07_222604_create_insurance_classes_table', 6),
(19, '2021_06_08_082755_create_allocations_table', 6),
(20, '2021_06_08_110326_create_user_details_table', 6),
(21, '2021_06_08_110621_create_brokers_allocations_table', 6),
(22, '2021_06_08_110758_create_underwriters_allocations_table', 6),
(23, '2021_06_08_132803_create_underwriters_ranks_table', 6),
(24, '2021_06_08_132842_create_broker_ranks_table', 6),
(25, '2021_06_09_155534_create_insurance_types_table', 7),
(26, '2021_06_10_202428_create_assets_table', 8),
(27, '2021_06_10_202633_create_asset_types_table', 8),
(28, '2021_06_10_204902_create_policies_table', 8),
(29, '2021_06_10_205004_create_businesses_table', 8),
(30, '2021_06_11_123836_create_asset_insurances_table', 9);

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

DROP TABLE IF EXISTS `oauth_access_tokens`;
CREATE TABLE IF NOT EXISTS `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `client_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_access_tokens_user_id_index` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('9bc97d9b54b70deb6e5ca873324ebb2e0808f229f2582b94a2681ec29dfd0e9fe2b469a6a6c90bad', 1, 3, 'Access Token', '[]', 0, '2021-03-13 18:27:57', '2021-03-13 18:27:57', '2022-03-13 19:27:57'),
('0bf641d31cf3e7c731471d5b48d2aafe6775babc5670d7e6e4e7abe78d93812c64150f8526cab87f', 1, 3, 'Access Token', '[]', 0, '2021-03-13 21:00:16', '2021-03-13 21:00:16', '2022-03-13 22:00:16'),
('11016badacaa49af7bdbf3baa6ecf5a3a5220f67b148031219f61ff0da104fb4e7a08831a7d57def', 1, 3, 'Access Token', '[]', 0, '2021-03-13 21:03:23', '2021-03-13 21:03:23', '2022-03-13 22:03:23'),
('5e704f11a9b8cd223672637943e03194a1011574e96fbf714ae56df664bca349428a5d93892daaef', 1, 3, 'Access Token', '[]', 0, '2021-03-13 21:04:14', '2021-03-13 21:04:14', '2022-03-13 22:04:14'),
('306191b6776ea6cbaa2c757fb4226fdc3b3af12d5b0e72482a1754b5e5e615ca47b45325b6cc0447', 1, 3, 'Access Token', '[]', 0, '2021-03-13 21:04:47', '2021-03-13 21:04:47', '2022-03-13 22:04:47'),
('90f288ac2435749a7a5440ddfff0ac0916fbb8a662715deae9b50b057a0f5012a3fc9bb9985a11c4', 1, 3, 'Access Token', '[]', 0, '2021-03-13 21:05:15', '2021-03-13 21:05:15', '2022-03-13 22:05:15'),
('c5b089a88eb7303ca2280446d0c848a125d574430dafc1f0ef66e454259a126c2d1c778fea11f2a8', 1, 3, 'Access Token', '[]', 0, '2021-03-13 21:06:49', '2021-03-13 21:06:49', '2022-03-13 22:06:49'),
('31cc33e7010a9b64647905529fe351f3785116aafa26ac790743bf56d19e1d8441cbab5df3edebd3', 1, 3, 'Access Token', '[]', 0, '2021-03-13 21:07:29', '2021-03-13 21:07:29', '2022-03-13 22:07:29'),
('baf9761152d5d6f7d0e0298e95fad1137677b3816729291c48058fbae1d7e61420a38e427db5fcfa', 3, 3, 'Access Token', '[]', 0, '2021-03-13 21:08:06', '2021-03-13 21:08:06', '2022-03-13 22:08:06'),
('b1f161dd3ca99a030ffa540c6687fe8ec94fa55f9952e0740969cc818caf5b8c910d41c64561e6c3', 3, 3, 'Access Token', '[]', 0, '2021-03-13 21:11:35', '2021-03-13 21:11:35', '2022-03-13 22:11:35'),
('ab7d15e0fafd8a23ef496cbac7a11ad4d48092baec918ddf06a55b5edde8cbcd3ff4f19be21b4d44', 3, 3, 'Access Token', '[]', 0, '2021-03-13 21:13:11', '2021-03-13 21:13:11', '2022-03-13 22:13:11'),
('2999f691ef23d38f5482886f818c1fc6813a4b7535aeedad90db87814da10b2f621ad1ae0f49c110', 11, 3, 'Access Token', '[]', 0, '2021-03-22 23:48:10', '2021-03-22 23:48:10', '2022-03-23 00:48:10'),
('b4b5e31f50173e21325855940713a7f156ebb73a0f012169893664afc19dc974b4eeb932a3cfff69', 11, 3, 'Access Token', '[]', 0, '2021-03-22 23:48:34', '2021-03-22 23:48:34', '2022-03-23 00:48:34'),
('e5472086e3747d5a7a719b1b0703cf7f158ccc70253112977ae588d321d47fd1f65f5a034d0b49bb', 11, 3, 'Access Token', '[]', 0, '2021-03-22 23:48:44', '2021-03-22 23:48:44', '2022-03-23 00:48:44'),
('c73ddb9bb719058f227235f09088eee4f4710b15e487d0cb75741d1a809635e824281ae7b66af142', 11, 3, 'Access Token', '[]', 0, '2021-03-22 23:55:59', '2021-03-22 23:55:59', '2022-03-23 00:55:59'),
('df0bf39ecf8889e298121d5a4ddacc4bf1a6951400bf0a400eeb4c1a77316415b12aba2247fdc340', 3, 3, 'Access Token', '[]', 0, '2021-03-23 21:15:24', '2021-03-23 21:15:24', '2022-03-23 22:15:24'),
('a4fcf625904387aef0aec867ada99c8304ba3f97c914b99483bedcbdd77465841f5d5dd2987669d8', 3, 3, 'Access Token', '[]', 0, '2021-03-24 23:11:27', '2021-03-24 23:11:27', '2022-03-25 00:11:27'),
('88ed686233822e0065f23b52860372b96b11ab8c732e7137343ef1d20789c9f99f3e3153d9824eb9', 3, 3, 'Access Token', '[]', 0, '2021-03-25 01:12:16', '2021-03-25 01:12:16', '2022-03-25 02:12:16'),
('3b892e7cf0596cd5b74cea136e8201e27a41adeca79a978b91b9de0a63314b413b052a0cfe92dd21', 11, 3, 'Access Token', '[]', 0, '2021-03-25 22:21:50', '2021-03-25 22:21:50', '2022-03-25 23:21:50'),
('f54813c1615f0cf2db2fb77c93267e82773f62e8e7040e0a00283f80e4094f5c462f299d501fb622', 3, 3, 'Access Token', '[]', 0, '2021-03-25 22:26:58', '2021-03-25 22:26:58', '2022-03-25 23:26:58'),
('7305c5bc242b13243b4ab09f995893730954b769a5feac1afabec4082133adaf13f69b45206ac3f4', 11, 3, 'Access Token', '[]', 0, '2021-03-25 22:27:49', '2021-03-25 22:27:49', '2022-03-25 23:27:49'),
('bcb2196a8049f501cb239265b753411ae0cfbfdf46aade9943b76a12e790a752877eed00df408b2d', 3, 3, 'Access Token', '[]', 0, '2021-03-26 01:43:00', '2021-03-26 01:43:00', '2022-03-26 02:43:00'),
('892d6d561ea63731cfc25f612310e0341d1b59eff9899142cdd03cb5067eed55cb1a8bc68123fcc2', 3, 3, 'Access Token', '[]', 0, '2021-03-26 08:24:12', '2021-03-26 08:24:12', '2022-03-26 09:24:12'),
('59aa261c5d9cae9ad67f3818570f41baf64858319473d9e935a88850774bf33f13b5f1d55a42c250', 3, 3, 'Access Token', '[]', 0, '2021-03-26 08:54:45', '2021-03-26 08:54:45', '2022-03-26 09:54:45'),
('2e764f1e318f7164bb9cafffd3692296ea4298346601f9bbf1512d52796c1408b06adeb0c45ba58d', 11, 3, 'Access Token', '[]', 0, '2021-03-26 09:07:36', '2021-03-26 09:07:36', '2022-03-26 10:07:36'),
('7de0b849f13f607c94f222aa102072d7251634380bade66dd704c477396085fc415dcd8551ad0f57', 3, 3, 'Access Token', '[]', 0, '2021-03-30 07:47:33', '2021-03-30 07:47:33', '2022-03-30 08:47:33'),
('467444979e0154ccad07d54a2740de03b05f4183c4bf11c81f65c46b3a3923a6bf71db6c81e6a646', 11, 3, 'Access Token', '[]', 0, '2021-03-30 07:50:18', '2021-03-30 07:50:18', '2022-03-30 08:50:18'),
('3c1204a57b7714344a256522700c9b59fa7965e907e477c7bbbcd32f42e3255c4d06b480f046d91a', 3, 3, 'Access Token', '[]', 0, '2021-03-30 13:07:08', '2021-03-30 13:07:08', '2022-03-30 14:07:08'),
('7a563145fd1fbc4537cbf4108aa1cccffac95c26edaaf002d2d8b66cbf5f04514022cfb3a53c6aa0', 15, 3, 'Access Token', '[]', 0, '2021-03-30 14:02:50', '2021-03-30 14:02:50', '2022-03-30 15:02:50'),
('d17940c44848a9680f489b884d19011d80433ec3bd62bf1d09bf0c52158848f4f9af2fa8d1e449bc', 9, 3, 'Access Token', '[]', 0, '2021-03-30 16:11:18', '2021-03-30 16:11:18', '2022-03-30 17:11:18'),
('57ac7cde91077e37b7178c40b8ee4e6b48dc209a7cceef2cc38e61bffa25ad79576f633ff2a67fd7', 11, 3, 'Access Token', '[]', 0, '2021-03-30 16:35:21', '2021-03-30 16:35:21', '2022-03-30 17:35:21'),
('019215b8d5133fefb0ddbbba52f7d3c65f0fe2937792f9e94c28b1f0e5b81d74f23e796285b6b788', 3, 3, 'Access Token', '[]', 0, '2021-05-25 07:05:24', '2021-05-25 07:05:24', '2022-05-25 08:05:24'),
('67e79cd22023be5e6fae8b18d6838812cd09042f6240de098c290d11cc1f9fd67aef775446d3bd24', 3, 3, 'Access Token', '[]', 0, '2021-06-01 17:32:34', '2021-06-01 17:32:34', '2022-06-01 18:32:34'),
('fb35a817a7b746ebba13ec5f03bd86e1d59a28cf2feb68c6a3233a787980b1245339070fb54fc4bc', 3, 3, 'Access Token', '[]', 0, '2021-06-01 17:32:34', '2021-06-01 17:32:34', '2022-06-01 18:32:34'),
('13cd47427fa9b11ff8160c719524e06dfc1bfc517a8675d7dd407558fdc43091d15c600ed862be9d', 3, 3, 'Access Token', '[]', 0, '2021-06-07 13:12:55', '2021-06-07 13:12:55', '2022-06-07 14:12:55'),
('006904be6a292f1527f71f2567f522dcec6ffffb3e30adc5d0bbcef16428a5bec3216f2923d3ba5d', 11, 3, 'Access Token', '[]', 0, '2021-06-07 14:37:51', '2021-06-07 14:37:51', '2022-06-07 15:37:51');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_auth_codes`
--

DROP TABLE IF EXISTS `oauth_auth_codes`;
CREATE TABLE IF NOT EXISTS `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `client_id` bigint UNSIGNED NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_auth_codes_user_id_index` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

DROP TABLE IF EXISTS `oauth_clients`;
CREATE TABLE IF NOT EXISTS `oauth_clients` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_clients_user_id_index` (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `provider`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Laravel Personal Access Client', 'vfgW31pRrtF7tqDqL3F0Tiqjwj1aWKqXeEkVx7pw', NULL, 'http://localhost', 1, 0, 0, '2021-03-13 16:47:42', '2021-03-13 16:47:42'),
(2, NULL, 'Laravel Password Grant Client', 'SyxNnENO3tNCl4gcAHnL2xW7yXlZ5sjn52ajvWiV', 'users', 'http://localhost', 0, 1, 0, '2021-03-13 16:47:42', '2021-03-13 16:47:42'),
(3, NULL, 'Laravel Personal Access Client', 'aMdGewIj7qSqYCkIIz3v6NvvrpGUflPzLlc3wxHl', NULL, 'http://localhost', 1, 0, 0, '2021-03-13 17:18:29', '2021-03-13 17:18:29'),
(4, NULL, 'Laravel Password Grant Client', 'OYXWHGBJj1btvcL60PI1Q5ZjvdQjCAw4R0mEsTxx', 'users', 'http://localhost', 0, 1, 0, '2021-03-13 17:18:29', '2021-03-13 17:18:29');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

DROP TABLE IF EXISTS `oauth_personal_access_clients`;
CREATE TABLE IF NOT EXISTS `oauth_personal_access_clients` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `client_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2021-03-13 16:47:42', '2021-03-13 16:47:42'),
(2, 3, '2021-03-13 17:18:29', '2021-03-13 17:18:29');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

DROP TABLE IF EXISTS `oauth_refresh_tokens`;
CREATE TABLE IF NOT EXISTS `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

DROP TABLE IF EXISTS `permissions`;
CREATE TABLE IF NOT EXISTS `permissions` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `permission` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `permission`, `slug`, `created_at`, `updated_at`) VALUES
(1, 'user', 'user', NULL, NULL),
(2, 'agency', 'agency', NULL, NULL),
(3, 'admin', 'admin', NULL, NULL),
(4, 'agency_type', 'agency_type', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `policies`
--

DROP TABLE IF EXISTS `policies`;
CREATE TABLE IF NOT EXISTS `policies` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `insurance_class` bigint NOT NULL,
  `business_id` bigint DEFAULT NULL,
  `policy_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sum_insured` float NOT NULL,
  `premium` float NOT NULL,
  `start_date` date NOT NULL,
  `expiry_date` date NOT NULL,
  `underwriters` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `policies`
--

INSERT INTO `policies` (`id`, `insurance_class`, `business_id`, `policy_number`, `sum_insured`, `premium`, `start_date`, `expiry_date`, `underwriters`, `created_at`, `updated_at`) VALUES
(1, 1, NULL, 'FB/LA/01/2021', 300000, 4000000, '2021-06-11', '2022-06-11', '[{\"id\":1,\"name\":\"Glorious Insurance Company\",\"rank\":\"Lead Underwriter\",\"perc\":\"50\"},{\"id\":2,\"name\":\"lasaco Insurance\",\"rank\":\"Co Underwriter\",\"perc\":\"30\"},{\"id\":3,\"name\":\"aiico insurance company\",\"rank\":\"Co Underwriter\",\"perc\":\"20\"}]', '2021-06-11 11:00:57', '2021-06-11 11:00:57');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `permissions` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `slug`, `permissions`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin', NULL, NULL, NULL),
(2, 'administrator', 'administrator', '{\"user\":{\"read\":true,\"create\":true,\"update\":false,\"delete\":false},\"agency\":{\"read\":true,\"create\":true,\"update\":false,\"delete\":false},\"admin\":{\"read\":true,\"create\":true,\"update\":false,\"delete\":false},\"agency_type\":{\"read\":true,\"create\":true,\"update\":false,\"delete\":false}}', '2021-03-12 10:33:56', '2021-03-12 10:33:56'),
(3, 'director', 'director', '{\"user\":{\"read\":true,\"create\":false,\"update\":true,\"delete\":false}}', '2021-03-23 14:53:31', '2021-03-23 14:53:31');

-- --------------------------------------------------------

--
-- Table structure for table `underwriters`
--

DROP TABLE IF EXISTS `underwriters`;
CREATE TABLE IF NOT EXISTS `underwriters` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `year` int NOT NULL,
  `registered_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rc_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `zip` int DEFAULT NULL,
  `ceo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` bigint NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint NOT NULL DEFAULT '0',
  `rank_id` bigint NOT NULL DEFAULT '0',
  `parent_id` bigint DEFAULT NULL,
  `rel` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '[]',
  `verified_at` date DEFAULT NULL,
  `verified_by` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `underwriters`
--

INSERT INTO `underwriters` (`id`, `year`, `registered_name`, `rc_number`, `address`, `city`, `state`, `zip`, `ceo`, `phone`, `email`, `status`, `rank_id`, `parent_id`, `rel`, `verified_at`, `verified_by`, `created_at`, `updated_at`) VALUES
(1, 2021, 'Glorious Insurance Company', 'Rc5232342', 'this is the address of the insurance company I want to start', 'Lagos', 'Lagos', 123113, 'Glory Owolabi', 9089890989, 'glory@gloriousinsurance.com', 0, 1, NULL, '[]', NULL, NULL, '2021-06-09 07:05:07', '2021-06-09 07:05:07'),
(2, 2021, 'lasaco Insurance', 'rc126712837', 'my home address', 'lagos', 'lagos', 125711, 'glory emmanuel', 9089878787, 'aremuopomulero@gmail.com', 0, 2, 1, '[1]', NULL, NULL, '2021-06-09 20:22:21', '2021-06-09 20:22:21'),
(3, 2021, 'aiico insurance company', 'rc1231213', 'my address\nmy address', 'lagos', 'lagos', 1231212, 'femi adebayo', 8098987898, 'aremuopomulero@gmail.com', 0, 2, 1, '[1]', NULL, NULL, '2021-06-09 20:25:20', '2021-06-09 20:25:20');

-- --------------------------------------------------------

--
-- Table structure for table `underwriters_allocations`
--

DROP TABLE IF EXISTS `underwriters_allocations`;
CREATE TABLE IF NOT EXISTS `underwriters_allocations` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `insurance_class_id` int NOT NULL,
  `underwriters_allocations` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `underwriters` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `underwriters_allocations`
--

INSERT INTO `underwriters_allocations` (`id`, `insurance_class_id`, `underwriters_allocations`, `underwriters`, `created_at`, `updated_at`) VALUES
(1, 1, '[{\"id\":1,\"perc\":\"50\"},{\"id\":2,\"perc\":\"30\"},{\"id\":3,\"perc\":\"20\"}]', '[1,2,3]', '2021-06-10 00:27:56', '2021-06-10 00:27:56');

-- --------------------------------------------------------

--
-- Table structure for table `underwriters_ranks`
--

DROP TABLE IF EXISTS `underwriters_ranks`;
CREATE TABLE IF NOT EXISTS `underwriters_ranks` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rank` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `underwriters_ranks`
--

INSERT INTO `underwriters_ranks` (`id`, `name`, `rank`, `created_at`, `updated_at`) VALUES
(1, 'Lead Underwriter', 1, '2021-06-09 06:07:49', '2021-06-09 06:07:49'),
(2, 'Co Underwriter', 2, '2021-06-09 20:13:50', '2021-06-09 20:13:50');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `oracle` varchar(100) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `agency_id` text,
  `role_id` bigint DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `surname` varchar(100) DEFAULT NULL,
  `firstname` varchar(100) DEFAULT NULL,
  `middlename` varchar(100) DEFAULT NULL,
  `sex` varchar(100) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `designation` varchar(100) DEFAULT NULL,
  `grade` varchar(100) DEFAULT NULL,
  `dateofbirth` varchar(100) DEFAULT NULL,
  `dateof1stapp` varchar(100) DEFAULT NULL,
  `dateofpreapp` varchar(100) DEFAULT NULL,
  `dateoflastdep` varchar(100) DEFAULT NULL,
  `dateofdeath` varchar(200) DEFAULT NULL,
  `retirementdate` varchar(200) DEFAULT NULL,
  `phone` double DEFAULT NULL,
  `office` varchar(100) DEFAULT NULL,
  `beneficiaries` text,
  `signature` varchar(5) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT 'false',
  `status` int NOT NULL DEFAULT '0',
  `edit_status` tinyint(1) NOT NULL DEFAULT '1',
  `password` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `verified_at` timestamp NULL DEFAULT NULL,
  `verified_by` text,
  `created_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `oracle`, `username`, `agency_id`, `role_id`, `title`, `surname`, `firstname`, `middlename`, `sex`, `state`, `designation`, `grade`, `dateofbirth`, `dateof1stapp`, `dateofpreapp`, `dateoflastdep`, `dateofdeath`, `retirementdate`, `phone`, `office`, `beneficiaries`, `signature`, `status`, `edit_status`, `password`, `remember_token`, `verified_at`, `verified_by`, `created_at`, `deleted_at`, `updated_at`) VALUES
(1, '1', NULL, '[]', NULL, 'HON', 'OLOWO', 'RABIU', 'ONAOLAPO', 'M', 'LAGOS', 'HONOURABLE COMMISSIONER', 'CON', '14-Jun-85', '20-Aug-19', '20-Aug-19', '20-Aug-19', NULL, NULL, 8062946965, 'Honourable Commisioner\'s Office', '[]', 'false', 0, 1, '', NULL, '0000-00-00 00:00:00', NULL, '0000-00-00 00:00:00', NULL, NULL),
(2, '17299', NULL, '[2]', NULL, 'MRS', 'ADEBAYO', 'OMOWUNMI', 'ADERIBIGBE', 'F', 'LAGOS', 'ASSISTANT CHIEF SECRETARIAL OFFICER', '13', '24-Aug-63', '4-Jan-91', '9-Dec-19', '3-Jan-20', NULL, NULL, 8023762256, 'Honourable Commisioner\'s Office', '[]', 'false', 1, 1, '', NULL, '2021-03-30 16:37:51', 'owolabi emmanuel ', '0000-00-00 00:00:00', NULL, '2021-03-22 13:15:28'),
(3, '192747', 'null', '[2]', NULL, 'MR.', 'KASALI', 'ABDULAZEEZ', 'ATANDA', 'M', 'LAGOS', 'PRINCIPAL  INTERNAL AUDITOR', '12', '26-Nov-83', '25-Dec-13', '1-Jan-19', '1-Jan-19', NULL, NULL, 8085214385, 'Honourable Commisioner\'s Office', '[{\"name\":\"owolabi bode\",\"phone\":\"09089890998\",\"perc\":\"20\",\"rel\":\"brother\",\"addr\":\"no 4 adebayo street orile lagos, nigeria\",\"files\":[{\"id\":13,\"user_id\":3,\"file_type\":\"image\",\"url\":\"http://localhost/lapsi/public/userfiles/1622572542google.jpg\",\"filename\":\"google.jpg\",\"created_at\":\"2021-06-01T18:35:42.000000Z\",\"updated_at\":\"2021-06-01T18:35:42.000000Z\",\"selected\":true}],\"identification\":\"id card\",\"id_num\":\"12321241\",\"dob\":\"1994-06-02\",\"acc_number\":\"1231432343\",\"acc_name\":\"owolabi bode\",\"b_name\":\"ecobank\"},{\"name\":\"owolabi sarah\",\"phone\":\"07086295741\",\"perc\":\"30\",\"rel\":\"mother\",\"addr\":\"my address\\nmy address\",\"files\":[{\"user_id\":\"3\",\"file_type\":\"image\",\"url\":\"http://localhost/lapsi/public/userfiles/1622572542audio.png\",\"filename\":\"audio.png\",\"updated_at\":\"2021-06-01T18:35:42.000000Z\",\"created_at\":\"2021-06-01T18:35:42.000000Z\",\"id\":12,\"selected\":true}]},{\"name\":\"aramide owolabi\",\"phone\":\"08098789878\",\"perc\":\"40\",\"rel\":\"wife\",\"addr\":\"my house\",\"files\":[{\"id\":12,\"user_id\":3,\"file_type\":\"image\",\"url\":\"http://localhost/lapsi/public/userfiles/1622572542audio.png\",\"filename\":\"audio.png\",\"created_at\":\"2021-06-01T18:35:42.000000Z\",\"updated_at\":\"2021-06-01T18:35:42.000000Z\",\"selected\":true}]},{\"name\":\"owolabi david\",\"phone\":\"07086295741\",\"perc\":\"10\",\"rel\":\"brother\",\"addr\":\"my address\\nmy address\",\"files\":[{\"id\":11,\"user_id\":3,\"file_type\":\"image\",\"url\":\"http://localhost/lapsi/public/userfiles/1622572542arrow_circle_green_up.png\",\"filename\":\"arrow_circle_green_up.png\",\"created_at\":\"2021-06-01T18:35:42.000000Z\",\"updated_at\":\"2021-06-01T18:35:42.000000Z\",\"selected\":true},{\"id\":12,\"user_id\":3,\"file_type\":\"image\",\"url\":\"http://localhost/lapsi/public/userfiles/1622572542audio.png\",\"filename\":\"audio.png\",\"created_at\":\"2021-06-01T18:35:42.000000Z\",\"updated_at\":\"2021-06-01T18:35:42.000000Z\",\"selected\":true},{\"id\":13,\"user_id\":3,\"file_type\":\"image\",\"url\":\"http://localhost/lapsi/public/userfiles/1622572542google.jpg\",\"filename\":\"google.jpg\",\"created_at\":\"2021-06-01T18:35:42.000000Z\",\"updated_at\":\"2021-06-01T18:35:42.000000Z\",\"selected\":true}]}]', '1', 0, 1, '', NULL, '2021-03-30 07:43:35', 'owolabi emmanuel ', '0000-00-00 00:00:00', NULL, '2021-06-07 13:12:55'),
(4, '207131', NULL, '[2]', NULL, 'MISS', 'SAID', 'MARIAM', 'OLUWADAMILOLA', 'F', 'KWARA', 'INSURANCE INSPECTOR II', '08', '18-Apr-93', '22-Mar-18', '22-Mar-18', '22-Mar-18', NULL, NULL, 8070865203, 'Honourable Commisioner\'s Office', '[]', 'false', 0, 1, '', NULL, '2021-03-30 07:43:24', 'owolabi emmanuel ', '0000-00-00 00:00:00', NULL, '2021-03-22 13:15:28'),
(5, '210473', NULL, '[2]', NULL, 'MR.', 'YUSUFF', 'LATEEF', 'ATANDA', 'M', 'KWARA', 'ADMIN. & HR OFFICER II', '08', '9-Nov-87', '30-Oct-18', '30-Oct-18', '10-Jun-20', NULL, NULL, 8020802334, 'Honourable Commisioner\'s Office', '[]', 'true', 1, 1, '', NULL, '2021-03-25 02:29:08', 'KASALI ABDULAZEEZ ATANDA', '0000-00-00 00:00:00', NULL, '2021-03-22 13:15:28'),
(6, '47167', NULL, '[2]', NULL, 'MR.', 'LAMIDI', 'ISKILU', 'OLALEKAN', 'M', 'LAGOS', 'SNR. EXECUTIVE OFFICER (GD)', '09', '11-Sep-65', '13-Feb-03', '1-Jul-19', '17-May-12', NULL, NULL, 8025222838, 'Honourable Commisioner\'s Office', '[]', 'false', 0, 1, '', NULL, '0000-00-00 00:00:00', NULL, '0000-00-00 00:00:00', NULL, '2021-03-22 13:15:28'),
(7, '153465', NULL, '[2]', NULL, 'MRS.', 'AYOOLA', 'IYABO', 'OYEYEMI', 'F', 'LAGOS', 'PERMANENT SECRETARY', 'CON', '25-Jan-63', '30-Oct-86', '28-Jan-21', '5-Feb-21', NULL, NULL, 8020538352, 'Permanent Secretary\'s Office', '[]', 'false', 1, 1, '', NULL, '2021-03-26 09:01:00', 'KASALI ABDULAZEEZ ATANDA', '0000-00-00 00:00:00', NULL, '2021-03-22 13:15:28'),
(8, '13035', NULL, '[2]', NULL, 'MR.', 'SOBOWALE', 'OLADAMOYE', 'AKANBI', 'M', 'OGUN', 'CHIEF CLERICAL OFFICER', '07', '11-Jul-74', '20-Jan-94', '1-Jan-03', '20-Aug-19', NULL, NULL, 8060137333, 'Permanent Secretary\'s Office', '[]', 'true', 0, 1, '', NULL, '0000-00-00 00:00:00', NULL, '0000-00-00 00:00:00', NULL, '2021-03-22 13:15:28'),
(9, '44263', 'null', '[2]', NULL, 'MR', 'OJERINDE', 'ROTIMI', 'null', 'M', 'OGUN', 'CHIEF CLERICAL OFFICER', '07', '1974-06-04', '2001-09-25', '2012-06-30', '2017-11-01', NULL, NULL, 8027805356, 'Permanent Secretary\'s Office', '[{\"name\":\"olowoniwa gabriela\",\"phone\":\"080890998789\",\"perc\":\"70\",\"rel\":\"son\",\"addr\":\"his house\"},{\"name\":\"akintola oluwafemi\",\"phone\":\"07086295741\",\"perc\":\"15\",\"rel\":\"cousin\",\"addr\":\"my house\\nwhere i stay\"},{\"name\":\"akintola rachel\",\"phone\":\"09089878987\",\"perc\":\"15\",\"rel\":\"neice\",\"addr\":\"her house\"}]', '1', 1, 1, '', NULL, '2021-03-25 02:29:08', 'KASALI ABDULAZEEZ ATANDA', '0000-00-00 00:00:00', NULL, '2021-03-30 16:13:49'),
(11, NULL, 'glory@gmail.com', '[]', 1, NULL, 'owolabi', 'emmanuel', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'false', 0, 1, '$2y$10$B9z9Rfwhw75qyj6YsFSy3OCbbOOzwzckm1EiD8gdXjzDXJkniBdQy', NULL, NULL, NULL, '2021-03-20 15:03:52', NULL, '2021-03-22 23:27:29'),
(14, '123123', NULL, '[3,4]', NULL, 'MR', 'AYOKUNLE', 'OLATOKUNBO', 'OLUWAFEMI', 'M', 'LAGOS', 'DIRECTOR', '13', '14-Jun-85', '20-Aug-19', '20-Aug-19', '20-Aug-19', NULL, NULL, 8062946965, NULL, '[]', 'false', 1, 1, NULL, NULL, '2021-03-30 16:38:14', 'owolabi emmanuel ', '2021-03-30 12:45:19', NULL, '2021-03-30 12:45:19'),
(15, '212312', 'null', '[3,4]', NULL, 'MRS', 'owolabi', 'SARAH', 'ABIDODUN', 'F', 'LAGOS', 'ASSISTANT CHIEF SECRETARIAL OFFICER', '13', '1963-08-23', '1991-01-03', '2019-12-08', '2020-01-02', NULL, NULL, 7086295741, 'ministry of transport', '[]', '1', 0, 1, '', NULL, NULL, NULL, '2021-03-30 12:45:19', NULL, '2021-03-30 14:02:50');

-- --------------------------------------------------------

--
-- Table structure for table `user_details`
--

DROP TABLE IF EXISTS `user_details`;
CREATE TABLE IF NOT EXISTS `user_details` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` int UNSIGNED NOT NULL,
  `details` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
