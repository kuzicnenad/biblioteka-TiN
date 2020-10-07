-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 02, 2020 at 02:03 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `biblioteka2`
--

-- --------------------------------------------------------

--
-- Table structure for table `clan`
--

CREATE TABLE `clan` (
  `broj_clana` int(10) NOT NULL,
  `ime` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `prezime` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telefon` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `datum_registracije` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `clan`
--

INSERT INTO `clan` (`broj_clana`, `ime`, `prezime`, `telefon`, `datum_registracije`) VALUES
(1, 'Tina', 'Djokic', '062-555444', '2020-01-01'),
(2, 'Nenad', 'Kuzic', '062-555333', '2020-01-01'),
(3, 'Nemanja', 'Jovic', '062-123456', '2020-01-01'),
(4, 'Nemanja', 'Nemanjic', '064-1234567', '2020-01-15'),
(5, 'Jovana', 'Jovanovic', '069-1234567', '2020-01-29'),
(6, 'Milan', 'Milanovic', '063-123456', '2020-01-19'),
(7, 'Bojana', 'Bojanic', '065-1234567', '2020-01-31'),
(10, 'Ivan', 'Ivanovic', '064-5462435', '2020-02-01'),
(11, 'Pera', 'Peric', '061-4442351', '2020-02-02');

-- --------------------------------------------------------

--
-- Table structure for table `knjiga`
--

CREATE TABLE `knjiga` (
  `id` int(11) NOT NULL,
  `ISBN` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `naslov` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `autor` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `kategorija` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `godina_izdanja` int(4) DEFAULT NULL,
  `izdavacka_kuca` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tiraz` int(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `knjiga`
--

INSERT INTO `knjiga` (`id`, `ISBN`, `naslov`, `autor`, `kategorija`, `godina_izdanja`, `izdavacka_kuca`, `tiraz`) VALUES
(1, '86-7310-275-8', 'Naucite za 21 dan Cpp', 'Jesse Liberty', 'Programiranje', 2003, 'Kompjuter Biblioteka', 2000),
(22, '978-86-10-00181-5', 'Saptac', 'Donato Karizi', 'Detektivski Roman', 2017, 'Vulkan', 500),
(2, '978-86-10-02547-7', ' Deca Zla', 'Miodrag Majic', 'Horor, Roman', 2019, 'Vulkan', 1000),
(3, '978-86-521-1007-0', 'Simeonov Pecat', 'Vanja Bulic', 'Roman', 2012, 'Laguna', 4000),
(4, '978-86-521-1303-3', 'Jovanovo Zavestanje', 'Vanja Bulic', 'Roman', 2013, 'Laguna', 4000),
(5, '978-86-521-2522-7', 'Preko Praga', 'Vladika Grigorije Duric', 'Istorijski Roman', 2017, 'Laguna', 2000),
(6, '978-86-521-2641-5', 'Pobednik je Sam', 'Paulo Koeljo', 'Roman', 2008, 'Laguna', 2000),
(20, '978-86-521-2925-6', 'Svetlost koju smo izgubili', 'Dzil Santopolo', 'Ljubavni Roman', 2018, 'Laguna', 2000),
(21, '978-86-521-3025-2', 'Pescani Sat', 'Trejsi Ris', 'Roman', 2018, 'Laguna', 1500),
(7, '978-86-521-3300-0', ' Odjek Proslosti', 'Luka Miceta', 'Istorijski Roman', 2019, 'Laguna', 2000),
(8, '978-86-7478-116-6', 'Napredna Sportska Ishrana', 'Dan Benardot', 'Sportska Literatura, Ishrana', 2010, 'Data Status', 1000),
(9, '978-86-7478-130-2', 'Vrhunski Kondicioni Trening', 'Bil Foran', 'Sportska Literatura', 2010, 'Data Status', 1000),
(10, '978-86-7912-573-6', 'Baze Podataka', 'Mladen Veinovic', 'Programiranje, Baze podataka', 2015, 'Univerzitet Singidunum', 2000),
(11, '978-86-917411-0-5', 'Osnovi Sportske Fiziologije', 'Vasilis Klisuras', 'Sportska Literatura', 2013, 'Institut za Sport', 500);

-- --------------------------------------------------------

--
-- Table structure for table `zaduzenje`
--

CREATE TABLE `zaduzenje` (
  `zaduzenje_ID` int(10) NOT NULL,
  `broj_clana` int(11) DEFAULT NULL,
  `ISBN_knjige` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `knjiga_zaduzena` date DEFAULT NULL,
  `knjiga_razduzena` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `zaduzenje`
--

INSERT INTO `zaduzenje` (`zaduzenje_ID`, `broj_clana`, `ISBN_knjige`, `knjiga_zaduzena`, `knjiga_razduzena`) VALUES
(1, 1, '978-86-10-02547-7', '2020-01-22', '2020-02-01'),
(2, 1, '978-86-521-3300-0', '2020-01-31', '2020-02-05'),
(4, 2, '978-86-7478-130-2', '2020-01-31', '2020-02-01'),
(5, 2, '978-86-7912-573-6', '2020-01-31', NULL),
(6, 3, '978-86-521-3300-0', '2020-01-31', NULL),
(8, 3, '978-86-10-02547-7', '2020-01-31', NULL),
(9, 3, '978-86-10-02547-7', '2020-01-31', NULL),
(10, 3, '978-86-10-02547-7', '2020-01-31', NULL),
(11, 3, '978-86-10-02547-7', '2020-01-31', NULL),
(12, 4, '978-86-521-3300-0', '2020-01-31', NULL),
(13, 4, '978-86-521-3300-0', '2020-01-31', '2020-02-02'),
(14, 5, '978-86-10-02547-7', '2020-01-31', NULL),
(18, 7, '978-86-7478-116-6', '2020-01-31', '2020-02-01'),
(19, 5, '978-86-10-02547-7', '2020-01-31', '1970-01-01'),
(20, 4, '978-86-521-3300-0', '2020-01-31', '2020-02-01'),
(21, 3, '978-86-521-3300-0', '2020-01-31', '2020-02-01'),
(22, 2, '978-86-521-2641-5', '2020-02-08', '2020-02-12'),
(23, 4, '978-86-917411-0-5', '2020-02-01', '2020-02-03'),
(24, 2, '978-86-7478-130-2', '2020-02-01', '2020-02-06'),
(25, 3, '978-86-7478-116-6', '2020-01-24', NULL),
(26, 3, '978-86-7478-130-2', '2020-01-08', '2020-02-12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clan`
--
ALTER TABLE `clan`
  ADD PRIMARY KEY (`broj_clana`);

--
-- Indexes for table `knjiga`
--
ALTER TABLE `knjiga`
  ADD PRIMARY KEY (`ISBN`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `zaduzenje`
--
ALTER TABLE `zaduzenje`
  ADD PRIMARY KEY (`zaduzenje_ID`),
  ADD KEY `broj_clana` (`broj_clana`),
  ADD KEY `ISBN_knjige` (`ISBN_knjige`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clan`
--
ALTER TABLE `clan`
  MODIFY `broj_clana` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `knjiga`
--
ALTER TABLE `knjiga`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `zaduzenje`
--
ALTER TABLE `zaduzenje`
  MODIFY `zaduzenje_ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `zaduzenje`
--
ALTER TABLE `zaduzenje`
  ADD CONSTRAINT `zaduzenje_ibfk_1` FOREIGN KEY (`broj_clana`) REFERENCES `clan` (`broj_clana`),
  ADD CONSTRAINT `zaduzenje_ibfk_2` FOREIGN KEY (`ISBN_knjige`) REFERENCES `knjiga` (`ISBN`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
