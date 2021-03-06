'use strict';

var loadState = function ()
{
var self = this;
var loadingText;

var loadingBar;

var decoded = false;
var loaded = false;

self.create = function ()
	{
	game.load.onLoadComplete.add(function () { loaded = true; }, this);
	loadingBar = new LoadingBar(game);
	load();
	};

self.update = function ()
	{
	if (loadingBar != undefined && ! loaded)
		{
		loadingBar.update(game.load.progress);
		}

	if (loaded && !decoded) loadingText.text = 'Decoding...';
	if (loaded && decoded) game.state.start('waiting');
	};

var load = function ()
	{

	// Load waiting state demo video
	
	game.load.video('demo', 'assets/video/placeholder_demo.mp4');

	// Load level backgrounds

	//Round1
	game.load.image('Demo1Map1.png', 'assets/maps/backgrounds/Demo1Map1.png');
	game.load.image('Demo1Map2.png', 'assets/maps/backgrounds/Demo1Map2.png');
	game.load.image('Demo1Map3.png', 'assets/maps/backgrounds/Demo1Map3.png');
	game.load.image('Demo1Map4.png', 'assets/maps/backgrounds/Demo1Map4.png');
	game.load.image('Demo1Map5.png', 'assets/maps/backgrounds/Demo1Map5.png');

	//Round2
	game.load.image('Demo2Map1.png', 'assets/maps/backgrounds/Demo2Map1.png');
	game.load.image('Demo2Map2.png', 'assets/maps/backgrounds/Demo2Map2.png');
	game.load.image('Demo2Map3.png', 'assets/maps/backgrounds/Demo2Map3.png');
	game.load.image('Demo2Map4.png', 'assets/maps/backgrounds/Demo2Map4.png');
	game.load.image('Demo2Map5.png', 'assets/maps/backgrounds/Demo2Map5.png');

	//Round3
	game.load.image('Demo3Map1.png', 'assets/maps/backgrounds/Demo3Map1.png');
	game.load.image('Demo3Map2.png', 'assets/maps/backgrounds/Demo3Map2.png');
	game.load.image('Demo3Map3.png', 'assets/maps/backgrounds/Demo3Map3.png');
	game.load.image('Demo3Map4.png', 'assets/maps/backgrounds/Demo3Map4.png');
	game.load.image('Demo3Map5.png', 'assets/maps/backgrounds/Demo3Map5.png');

	//Round4
	game.load.image('Demo4Map1.png', 'assets/maps/backgrounds/Demo4Map1.png');
	game.load.image('Demo4Map2.png', 'assets/maps/backgrounds/Demo4Map2.png');
	game.load.image('Demo4Map3.png', 'assets/maps/backgrounds/Demo4Map3.png');
	game.load.image('Demo4Map4.png', 'assets/maps/backgrounds/Demo4Map4.png');

	//Round5
	game.load.image('Demo5Map1.png', 'assets/maps/backgrounds/Demo5Map1.png');
	game.load.image('Demo5Map2.png', 'assets/maps/backgrounds/Demo5Map2.png');
	game.load.image('Demo5Map3.png', 'assets/maps/backgrounds/Demo5Map3.png');
	game.load.image('Demo5Map4.png', 'assets/maps/backgrounds/Demo5Map4.png');

	//Collidable objects found in rooms
	//small items
	game.load.image('grave1', 'assets/maps/fieldObjects/smallCollidables/Grave1.png');
	game.load.image('grave2', 'assets/maps/fieldObjects/smallCollidables/Grave2.png');
	game.load.image('grave3', 'assets/maps/fieldObjects/smallCollidables/Grave3.png');
	game.load.image('grave4', 'assets/maps/fieldObjects/smallCollidables/Grave4.png');
	game.load.image('grave5', 'assets/maps/fieldObjects/smallCollidables/Grave5.png');
	game.load.image('candelabrum', 'assets/maps/fieldObjects/smallCollidables/candelabrum.png');
	game.load.image('pillar', 'assets/maps/fieldObjects/smallCollidables/pillar.png');
	game.load.image('pillarGone', 'assets/maps/fieldObjects/smallCollidables/pillar_Gone.png');
	game.load.image('statueHero', 'assets/maps/fieldObjects/smallCollidables/Statue_Hero.png');
	game.load.image('statueHeroBroken', 'assets/maps/fieldObjects/smallCollidables/Statue_Hero_Broken.png');
	game.load.image('statueHeroWorn', 'assets/maps/fieldObjects/smallCollidables/Statue_HeroWorn.png');
	//large items
	game.load.image('kingStatue', 'assets/maps/fieldObjects/largeCollidables/KingStatue.png');

	//Generics
	game.load.image('generic_map_FloorOnly', 'assets/maps/backgrounds/Generics/map_FloorOnly.png');

	//Deadends aka bossrooms
	game.load.image('generic_DeadEnd_FromEast1', 'assets/maps/backgrounds/Generics/DeadEnd_FromEast1.png');
	game.load.image('generic_DeadEnd_FromEast2', 'assets/maps/backgrounds/Generics/DeadEnd_FromEast2.png');	
	game.load.image('generic_DeadEnd_FromWest1', 'assets/maps/backgrounds/Generics/DeadEnd_FromWest1.png');

	//Entrances
	game.load.image('generic_Entrance_FromEast1', 'assets/maps/backgrounds/Generics/Entrance_FromEast1.png');
	game.load.image('generic_Entrance_FromEast2', 'assets/maps/backgrounds/Generics/Entrance_FromEast2.png');
	game.load.image('generic_Entrance_FromEast3', 'assets/maps/backgrounds/Generics/Entrance_FromEast3.png');	
	game.load.image('generic_Entrance_FromWest1', 'assets/maps/backgrounds/Generics/Entrance_FromWest1.png');

	//straight leftright
	game.load.image('generic_Straight_Vert1', 'assets/maps/backgrounds/Generics/Straight_Vert1.png');
	game.load.image('generic_Straight_Vert2', 'assets/maps/backgrounds/Generics/Straight_Vert2.png');
	game.load.image('generic_Straight_Vert3', 'assets/maps/backgrounds/Generics/Straight_Vert3.png');
	game.load.image('generic_Straight_Vert4', 'assets/maps/backgrounds/Generics/Straight_Vert4.png');
	game.load.image('generic_Straight_Vert5', 'assets/maps/backgrounds/Generics/Straight_Vert5.png');
	game.load.image('generic_Straight_Vert6', 'assets/maps/backgrounds/Generics/Straight_Vert6.png');
	game.load.image('generic_Straight_Vert7', 'assets/maps/backgrounds/Generics/Straight_Vert7.png');

	//Straight updown
	game.load.image('generic_Straight_Hori_short_stairs1', 'assets/maps/backgrounds/Generics/Straight_Hori_short_stairs1.png');
	game.load.image('generic_Straight_Hori_short1', 'assets/maps/backgrounds/Generics/Straight_Hori_short1.png');
	game.load.image('generic_Straight_Hori_short2', 'assets/maps/backgrounds/Generics/Straight_Hori_short2.png');
	game.load.image('generic_Straight_Hori_short3', 'assets/maps/backgrounds/Generics/Straight_Hori_short3.png');
	game.load.image('generic_Straight_Hori_short_Enlarged1', 'assets/maps/backgrounds/Generics/Straight_Hori_short_Enlarged1.png');
	game.load.image('generic_Straight_Hori_short_Enlarged2', 'assets/maps/backgrounds/Generics/Straight_Hori_short_Enlarged2.png');



	//Turns
	game.load.image('generic_Turn_EtN1', 'assets/maps/backgrounds/Generics/Turn_EtN1.png');
	game.load.image('generic_Turn_EtN2', 'assets/maps/backgrounds/Generics/Turn_EtN2.png');
	game.load.image('generic_Turn_EtN3', 'assets/maps/backgrounds/Generics/Turn_EtN3.png');
	game.load.image('generic_Turn_EtS1', 'assets/maps/backgrounds/Generics/Turn_EtS1.png');
	game.load.image('generic_Turn_EtS2', 'assets/maps/backgrounds/Generics/Turn_EtS2.png');
	game.load.image('generic_Turn_WtN1', 'assets/maps/backgrounds/Generics/Turn_WtN1.png');
	game.load.image('generic_Turn_WtN2', 'assets/maps/backgrounds/Generics/Turn_WtN2.png');
	game.load.image('generic_Turn_WtS1', 'assets/maps/backgrounds/Generics/Turn_WtS1.png');
	game.load.image('generic_Turn_WtS2', 'assets/maps/backgrounds/Generics/Turn_WtS2.png');
	
	game.load.image('generic_Turn_WtS2_fix', 'assets/maps/backgrounds/Generics/Turn_WtS2_Quickfix.png');
	

	// Load player sprites

	game.load.image('player1', 'assets/player_classes/knight.png');
	game.load.image('player2', 'assets/player_classes/elf.png');
	game.load.image('player3', 'assets/player_classes/mage.png');
	game.load.image('player4', 'assets/player_classes/viking.png');
	game.load.image('player5', 'assets/player_classes/ninja.png');
	game.load.image('player6', 'assets/player_classes/warlock.png');
	
	game.load.image('empty', 'assets/other/empty.png');
	game.load.image('test', 'assets/other/testpixel.png');

	// Load bullet sprites

	game.load.image('magic', 'assets/projectiles/bullet.png');
	game.load.image('bullet1', 'assets/projectiles/bullet1.png');
	game.load.image('bullet2', 'assets/projectiles/bullet2.png');
	game.load.image('bullet3', 'assets/projectiles/bullet3.png');
	game.load.image('bullet4', 'assets/projectiles/bullet4.png');
	game.load.image('bullet5', 'assets/projectiles/bullet5.png');
	game.load.image('bullet6', 'assets/projectiles/bullet6.png');

	game.load.image('enemyBullet1', 'assets/projectiles/enemyBullet.png');
	game.load.image('enemyBullet2', 'assets/projectiles/enemyBullet_spike.png');
	game.load.image('enemyBullet3', 'assets/projectiles/enemyBullet_bone.png');
	game.load.image('enemyBullet4', 'assets/projectiles/enemyBullet_YellowStar.png');
	game.load.image('enemyBullet5', 'assets/projectiles/enemyBullet_RED.png');
	game.load.image('enemyBullet6', 'assets/projectiles/Fireball.png');
	game.load.image('enemyBullet7', 'assets/projectiles/EnemyBullet_Sword_rt.png');
	game.load.image('enemyBullet8', 'assets/projectiles/enemyBullet_boss2.png');
	game.load.image('enemyBullet9', 'assets/projectiles/enemyBullet_boss2_Line.png');
	game.load.image('enemyBullet10', 'assets/projectiles/enemyBullet_fork.png');
	game.load.image('enemyBullet11', 'assets/projectiles/enemyBullet_Wave.png');
	game.load.image('enemyBullet12', 'assets/projectiles/enemyBullet_Slash.png');
	game.load.image('enemyBullet13', 'assets/projectiles/enemyBullet_Reaper.png');
	

	//load weapon sprites

	game.load.image('player1Weapon', 'assets/player_classes/weapons/knight1.png');
	game.load.image('player2Weapon', 'assets/player_classes/weapons/elfi1.png');
	game.load.image('player3Weapon', 'assets/player_classes/weapons/mage1.png');
	game.load.image('player4Weapon', 'assets/player_classes/weapons/viking1.png');
	game.load.image('player5Weapon', 'assets/player_classes/weapons/ninja1.png');
	game.load.image('player6Weapon', 'assets/player_classes/weapons/warlock1.png');


	// Load enemy assets

	game.load.image('enemy_hellbug', 'assets/enemies/enemy_05b.png');
	game.load.image('enemy_skeleton', 'assets/enemies/enemy_01b.png');
	game.load.image('enemy_slasher', 'assets/enemies/enemy_08b.png');
	game.load.image('enemy_ghost', 'assets/enemies/enemy_04b.png');
	game.load.image('boss_tentaclemonster1', 'assets/enemies/enemy_06b.png');
	game.load.image('boss_tentaclemonster2', 'assets/enemies/enemy_06b_2.png');
	game.load.image('boss_tentaclemonster3', 'assets/enemies/enemy_06b_3.png');
	game.load.image('boss_king1', 'assets/enemies/enemy_10.png');
	game.load.image('boss_king2', 'assets/enemies/enemy_10_2.png');
	game.load.image('boss_king3', 'assets/enemies/enemy_10_3.png');

	// Load effects

	game.load.spritesheet('death_cloud', 'assets/effects/death_cloud.png', 100, 100, 6);
	game.load.spritesheet('spawn', 'assets/effects/SpawnCloud.png', 100, 100, 6);

	//Load powerup sprites
	game.load.image('item_book', 'assets/decorations/Book.png');
	game.load.image('item_ATK_Bonus', 'assets/decorations/PickUp_AttackBonus.png');
	game.load.image('item_SPD_Bonus', 'assets/decorations/PickUp_SpeedBonus.png');
	game.load.image('item_Heal', 'assets/decorations/PickUp_HealthBonus.png');
	game.load.image('item_Chest', 'assets/decorations/Chest_Gold.png');

	//Load particles
	game.load.image('particle_blue','assets/particles/SmallBlingBlue.png');
	game.load.image('particle_red','assets/particles/SmallBlingRed.png');
	game.load.image('particle_green','assets/particles/SmallBlingGreen.png');
	game.load.image('particle_orange','assets/particles/SmallBlingOrange.png'); // not used currently?

	// Set loadingtext

	loadingText = game.add.text(80, 150, 'Loading ...', {font: '30px Courier', fill: '#ffffff'});

	// Load QR
	game.load.image('qr_niko_wlan_markus', 'assets/QR/nikoMarkuksenWlan.jpg');
	game.load.image('qr_niko_wlan_niko', 'assets/QR/nikoNikonWlan.png');
	game.load.image('qr_janika', 'assets/QR/janika.jpg');

  // Load score background

  game.load.image('scoreBackground', 'assets/other/placeholder_scoreBackground.jpg');

	//Load sounds
	
	if (!game.mute)
		{
		game.load.audio('bgm01', 'assets/sounds/bgm/bgm01.ogg');
		game.load.audio('bgm02', 'assets/sounds/bgm/bgm02.ogg');
		game.load.audio('bgm03', 'assets/sounds/bgm/bgm03.ogg');
		game.load.audio('bgm04', 'assets/sounds/bgm/bgm04.ogg');
		game.load.audio('bgm05', 'assets/sounds/bgm/bgm05.ogg');
		game.load.audio('explosion', 'assets/sounds/effects/explosion.ogg');

		var audioList = [];
    
		for (var i = 1; i < 6; i++)
			{
			audioList.push(game.add.audio('bgm0' + i));
			}
		audioList.push(game.add.audio('explosion'));

		game.sound.setDecodedCallback(audioList, function () { decoded = true }, this);

		} else 
		{
		decoded = true;
		};

	game.load.start();
	
	};

}

