'use strict';

var playerPatterns = {};

//knigth
playerPatterns["0"] =
	{
	baseMovementSpeed: 250,
	baseFireRate: 300,
	bulletDamage: 3,
	bulletSpeed: 1000,
	bulletLifespan: 300,
	maxHealth: 270
	};

//elf
playerPatterns["1"] =
	{
	baseMovementSpeed: 240,
	baseFireRate: 400,
	bulletDamage: 5,
	bulletSpeed: 1500,
	bulletLifespan: 750,
	maxHealth: 220
	};

//mage
playerPatterns["2"] =
	{
	baseMovementSpeed: 240,
	baseFireRate: 500,
	bulletDamage: 8,
	bulletSpeed: 2000,
	bulletLifespan: 500,
	maxHealth: 120
	};

//viking
playerPatterns["3"] =
	{
	baseMovementSpeed: 220,
	baseFireRate: 350,
	bulletDamage: 4,
	bulletSpeed: 800,
	bulletLifespan: 400,
	maxHealth: 250
	};

//ninja
playerPatterns["4"] =
	{
	baseMovementSpeed: 290,
	baseFireRate: 150,
	bulletDamage: 3,
	bulletSpeed: 1600,
	bulletLifespan: 150,
	maxHealth: 200
	};

//warlock
playerPatterns["5"] =
	{
	baseMovementSpeed: 260,
	baseFireRate: 250,
	bulletDamage: 4,
	bulletSpeed: 900,
	bulletLifespan: 700,
	maxHealth: 160
	};

