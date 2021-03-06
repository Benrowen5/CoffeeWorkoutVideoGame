const { Game } = require('../models');
const connection = require('../config/connection');
const { db } = require('../models/Game');

db.dropCollection('games');
console.log('games collection dropped.');

const gamesData = [
    {
        title: "Monster Hunter Rise",
        description: "Rise to the challenge and join the hunt! In Monster Hunter Rise, the latest installment in the award-winning and top-selling Monster Hunter series, you’ll become a hunter, explore brand new maps and use a variety of weapons to take down fearsome monsters as part of an all-new storyline.",
        genre: "Action, Hunting, Co-op, PvE",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1446780/header.jpg?t=1642465111"
    },
    {
        title: "God of War",
        description: "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.",
        genre: "Action, Adventure, Mythology, Story-Rich",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg?t=1642526157"
    },
    {
        title: "FINAL FANTASY XIV Online",
        description: "Take part in an epic and ever-changing FINAL FANTASY as you adventure and explore with friends from around the world.",
        genre: "MMORPG, RPG, Fantasy",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/39210/header.jpg?t=1639672153"
    },
    {
        title: "The Elder Scrolls® Online",
        description: "Join over 18 million players in the award-winning online multiplayer RPG and experience limitless adventure in a persistent Elder Scrolls world. Battle, craft, steal, or explore, and combine different types of equipment and abilities to create your own style of play. No game subscription required.",
        genre: "MMORPG, RPG, Fantasy",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/306130/header.jpg?t=1642716719"
    },
    {
        title: "Counter-Strike: Global Offensive",
        description: "Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.).",
        genre: "FPS, Squad-Based, Competitive",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg?t=1641233427"
    },
    {
        title: "PUBG: BATTLEGROUNDS",
        description: "LAND, LOOT, SURVIVE! Play PUBG: BATTLEGROUNDS for free. Land on strategic locations, loot weapons and supplies, and survive to become the last team standing across various, diverse Battlegrounds. Squad up and join the Battlegrounds for the original Battle Royale experience that only PUBG: BATTLEGROUNDS can offer.",
        genre: "FPS, Survival, Battle Royale",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/578080/header.jpg?t=1642587532"
    },
    {
        title: "Red Dead Redemption 2",
        description: "Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, RDR2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang, on the run across America at the dawn of the modern age. Also includes access to the shared living world of Red Dead Online.",
        genre: "Open World, Adventure, Story-Rich, Western",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg?t=1618851907"
    },
    {
        title: "War Thunder",
        description: "War Thunder is the most comprehensive free-to-play, cross-platform, MMO military game dedicated to aviation, armoured vehicles, and naval craft, from the early 20th century to the most advanced modern combat units. Join now and take part in major battles on land, in the air, and at sea.",
        genre: "Simulator, MMO, Free to Play",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/236390/header.jpg?t=1642493085"
    },
    {
        title: "Euro Truck Simulator 2",
        description: "Travel across Europe as king of the road, a trucker who delivers important cargo across impressive distances! With dozens of cities to explore, your endurance, skill and speed will all be pushed to their limits.",
        genre: "Simulator, Driving, Transportation",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/227300/header.jpg?t=1642790154"
    },
    {
        title: "The Elder Scrolls V: Skyrim",
        description: "Winner of more than 200 Game of the Year Awards, Skyrim Special Edition brings the epic fantasy to life in stunning detail. The Special Edition includes the critically acclaimed game and add-ons with all-new features like remastered art and effects, volumetric god rays, dynamic depth of field, screen-space reflections, and more. Skyrim Special Edition also brings the full power of mods to the PC and consoles. New quests, environments, characters, dialogue, armor, weapons and more with Mods, there are no limits to what you can experience.",
        genre: "RPG, Open World, Singleplayer",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/489830/header.jpg?t=1636654357"
    },
    {
        title: "Animal Crossing: New Horizons",
        description: "Make friends with adorable animal villagers and have fun creating a world of your own in the Animal Corssing series. Explore your island. Create your getaway. Share your paradise.",
        genre: "RPG, Simulator, Singleplayer",
        image: "https://www.animal-crossing.com/new-horizons/assets/img/global/logos/logo-acnh-en.png"
    }
];

async function seedGames() {
    await Game.create(gamesData);
    console.log('Games seeded.');
}

seedGames();
