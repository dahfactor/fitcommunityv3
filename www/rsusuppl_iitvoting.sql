-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 30, 2018 at 09:47 AM
-- Server version: 5.6.38
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rsusuppl_iitvoting`
--

-- --------------------------------------------------------

--
-- Table structure for table `candidates`
--

CREATE TABLE `candidates` (
  `CandidateID` int(11) NOT NULL,
  `PositionID` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Year` varchar(255) NOT NULL,
  `Block` varchar(255) NOT NULL,
  `Photo` varchar(255) NOT NULL,
  `Votes` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `candidates`
--

INSERT INTO `candidates` (`CandidateID`, `PositionID`, `Name`, `Year`, `Block`, `Photo`, `Votes`) VALUES
(1, 1, 'Manilyn Gubaton', '4th year', '3', '', 1),
(2, 1, 'Reymark Calay', '4th year', '3', '', 0),
(3, 2, 'Shairah Mae Dinaga', '4th year', '3', '', 1),
(4, 2, 'Mary Claire Visca', '4th year', '3', '', 0),
(5, 3, 'Livy May Abao', '2nd year', '2', '', 1),
(6, 4, 'Diane Dulay', '2nd year', '2', '', 1),
(7, 5, 'Juan dela Cruz', '2nd year', '3', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `position`
--

CREATE TABLE `position` (
  `PositionID` int(11) NOT NULL,
  `Position` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `position`
--

INSERT INTO `position` (`PositionID`, `Position`) VALUES
(1, 'President'),
(2, 'Vice President'),
(3, 'Secretary'),
(4, 'Auditor'),
(5, 'PIO'),
(6, 'Treasurer'),
(7, 'Sentinels');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `UserID` int(11) NOT NULL,
  `Username` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`UserID`, `Username`, `Password`) VALUES
(1, 'admin', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `voters`
--

CREATE TABLE `voters` (
  `VoterID` int(11) NOT NULL,
  `Username` varchar(255) NOT NULL,
  `Password` varchar(255) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Year` varchar(2555) NOT NULL,
  `Block` varchar(255) NOT NULL,
  `Voted` int(11) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `voters`
--

INSERT INTO `voters` (`VoterID`, `Username`, `Password`, `Name`, `Year`, `Block`, `Voted`) VALUES
(1, 'S7-14-01334', 'Calay', 'Reymark Calay', '4th year', '3', 1),
(2, 'S7-14-01335', 'Gubaton', 'Manilyn Gubaton', '4th year', '4', 0),
(3, 'S7-14-01336', 'Dinaga', 'Shairah Mae Dinaga', '4th year', '3', 0),
(4, 'S7-14-01337', 'Visca', 'Mary Claire Visca', '4th year', '3', 0),
(5, 'S7-14-01338', 'Abao', 'Livy May', '4th year', '3', 0);

-- --------------------------------------------------------

--
-- Table structure for table `votingflag`
--

CREATE TABLE `votingflag` (
  `flag` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `votingflag`
--

INSERT INTO `votingflag` (`flag`) VALUES
(0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `candidates`
--
ALTER TABLE `candidates`
  ADD PRIMARY KEY (`CandidateID`);

--
-- Indexes for table `position`
--
ALTER TABLE `position`
  ADD PRIMARY KEY (`PositionID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UserID`);

--
-- Indexes for table `voters`
--
ALTER TABLE `voters`
  ADD PRIMARY KEY (`VoterID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `candidates`
--
ALTER TABLE `candidates`
  MODIFY `CandidateID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `position`
--
ALTER TABLE `position`
  MODIFY `PositionID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `UserID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `voters`
--
ALTER TABLE `voters`
  MODIFY `VoterID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
