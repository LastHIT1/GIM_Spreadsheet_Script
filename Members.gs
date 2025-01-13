//Creating a member object to be used for later programs.
//If you are to use this program, please change the name of the user, and their in game name.
//These are also referencing the "High Scores" That were generated from "Updating Highscores"

var members = {
  ANDRES: {
    name: 'Andres', //reference to member
    characterName: 'NotLuckyGIM', //name of their ingame name
    column: 'E', //reference to which row has been updated by "Updating High Score"
    range: "10:39",
    goals: {
      attack: {
        specificRow: [11],
        skill: ["attack"],
        defaultTarget: [99]
      },
      strength: {
        specificRow: [12],
        skill: ["strength"],
        defaultTarget: [99]
      },
      defence: {
        specificRow: [13],
        skill: ["defence"],
        defaultTarget: [99]        
      },
      constitution: {
        specificRow: [14],
        skill: ["constitution"],
        defaultTarget: [99]
      },
      range: {
        specificRow: [15],
        skill: ["range"],
        defaultTarget: [99]        
      },
      prayer: {
        specificRow: [16],
        skill: ["prayer"],
        defaultTarget: [99]        
      },
      magic: {
        specificRow: [17],
        skill: ["magic"],
        defaultTarget: [99]        
      },
      cooking: {
        specificRow: [18],
        skill: ["cooking"],
        defaultTarget: [99]        
      },
      woodcutting: {
        specificRow: [19],
        totalGoal: 100,
        skills: ["woodcutting"],
        defaultTarget: [99]
      },
      fletching: {
        specificRow: [20],
        skill: ["fletching"],
        defaultTarget: [99]        
      },
      fishing: {
        specificRow: [21],
        skill: ["fishing"],
        defaultTarget: [99]        
      },
      firemaking: {
        specificRow: [22],
        skill: ["firemaking"],
        defaultTarget: [99]        
      },
      crafting: {
        specificRow: [23],
        skill: ["crafting"],
        defaultTarget: [99]        
      },
      smithing: {
        specificRow: [24],
        skill: ["smithing"],
        defaultTarget: [110]        
      },
      mining: {
        specificRow: [25],
        skill: ["mining"],
        defaultTarget: [110]        
      },
      herblore: {
        specificRow: [26],
        skill: ["herblore"],
        defaultTarget: [120]        
      },
      agility: {
        specificRow: [27],
        skill: ["agility"],
        defaultTarget: [99]        
      },
      thieving: {
        specificRow: [28],
        skill: ["thieving"],
        defaultTarget: [99]        
      },
      slayer: {
        specificRow: [29],
        skill: ["slayer"],
        defaultTarget: [120]        
      },
      farming: {
        specificRow: [30],
        skill: ["farming"],
        defaultTarget: [120]        
      },
      runecrafting: {
        specificRow: [31],
        skill: ["runecrafting"],
        defaultTarget: [99]        
      },
      hunter: {
        specificRow: [32],
        skill: ["hunter"],
        defaultTarget: [99]        
      },
      construction: {
        specificRow: [33],
        skill: ["construction"],
        defaultTarget: [99]        
      },
      summoning: {
        specificRow: [34],
        skill: ["summoning"],
        defaultTarget: [99]        
      },
      dungeoneering: {
        specificRow: [35],
        skill: ["dungeoneering"],
        defaultTarget: [120]        
      },
      divination: {
        specificRow: [36],
        skill: ["divination"],
        defaultTarget: [99]        
      },
      invention: {
        specificRows: [37],
        skills: ["invention"],
        defaultTarget: [120]
      },
      archaeology: {
        specificRow: [38],
        skill: ["archaeology"],
        defaultTarget: [120]        
      },
      necormancy: {
        specificRow: [39],
        skill: ["necromancy"],
        defaultTarget: [120]        
      }

    },
  },
  MIKE: {
    name: 'Mike',
    characterName: 'NotSlimGIM',
    column: 'K',
    goals: {
      attack: {
        specificRow: [11],
        skill: ["attack"],
        defaultTarget: [99]
      },
      strength: {
        specificRow: [12],
        skill: ["strength"],
        defaultTarget: [99]
      },
      defence: {
        specificRow: [13],
        skill: ["defence"],
        defaultTarget: [99]        
      },
      constitution: {
        specificRow: [14],
        skill: ["constitution"],
        defaultTarget: [99]
      },
      range: {
        specificRow: [15],
        skill: ["range"],
        defaultTarget: [99]        
      },
      prayer: {
        specificRow: [16],
        skill: ["prayer"],
        defaultTarget: [99]        
      },
      magic: {
        specificRow: [17],
        skill: ["magic"],
        defaultTarget: [99]        
      },
      cooking: {
        specificRow: [18],
        skill: ["cooking"],
        defaultTarget: [99]        
      },
      woodcutting: {
        specificRow: [19],
        totalGoal: 100,
        skills: ["woodcutting"],
        defaultTarget: [99]
      },
      fletching: {
        specificRow: [20],
        skill: ["fletching"],
        defaultTarget: [99]        
      },
      fishing: {
        specificRow: [21],
        skill: ["fishing"],
        defaultTarget: [99]        
      },
      firemaking: {
        specificRow: [22],
        skill: ["firemaking"],
        defaultTarget: [99]        
      },
      crafting: {
        specificRow: [23],
        skill: ["crafting"],
        defaultTarget: [99]        
      },
      smithing: {
        specificRow: [24],
        skill: ["smithing"],
        defaultTarget: [110]        
      },
      mining: {
        specificRow: [25],
        skill: ["mining"],
        defaultTarget: [110]        
      },
      herblore: {
        specificRow: [26],
        skill: ["herblore"],
        defaultTarget: [120]        
      },
      agility: {
        specificRow: [27],
        skill: ["agility"],
        defaultTarget: [99]        
      },
      thieving: {
        specificRow: [28],
        skill: ["thieving"],
        defaultTarget: [99]        
      },
      slayer: {
        specificRow: [29],
        skill: ["slayer"],
        defaultTarget: [120]        
      },
      farming: {
        specificRow: [30],
        skill: ["farming"],
        defaultTarget: [120]        
      },
      runecrafting: {
        specificRow: [31],
        skill: ["runecrafting"],
        defaultTarget: [99]        
      },
      hunter: {
        specificRow: [32],
        skill: ["hunter"],
        defaultTarget: [99]        
      },
      construction: {
        specificRow: [33],
        skill: ["construction"],
        defaultTarget: [99]        
      },
      summoning: {
        specificRow: [34],
        skill: ["summoning"],
        defaultTarget: [99]        
      },
      dungeoneering: {
        specificRow: [35],
        skill: ["dungeoneering"],
        defaultTarget: [120]        
      },
      divination: {
        specificRow: [36],
        skill: ["divination"],
        defaultTarget: [99]        
      },
      invention: {
        specificRows: [37],
        skills: ["invention"],
        defaultTarget: [120]
      },
      archaeology: {
        specificRow: [38],
        skill: ["archaeology"],
        defaultTarget: [120]        
      },
      necormancy: {
        specificRow: [39],
        skill: ["necromancy"],
        defaultTarget: [120]        
      }

    },
  },
  DANIEL: {
    name: 'Daniel',
    characterName: 'NotPlayinGIM',
    column: 'Q',
    goals: {
      attack: {
        specificRow: [11],
        skill: ["attack"],
        defaultTarget: [99]
      },
      strength: {
        specificRow: [12],
        skill: ["strength"],
        defaultTarget: [99]
      },
      defence: {
        specificRow: [13],
        skill: ["defence"],
        defaultTarget: [99]        
      },
      constitution: {
        specificRow: [14],
        skill: ["constitution"],
        defaultTarget: [99]
      },
      range: {
        specificRow: [15],
        skill: ["range"],
        defaultTarget: [99]        
      },
      prayer: {
        specificRow: [16],
        skill: ["prayer"],
        defaultTarget: [99]        
      },
      magic: {
        specificRow: [17],
        skill: ["magic"],
        defaultTarget: [99]        
      },
      cooking: {
        specificRow: [18],
        skill: ["cooking"],
        defaultTarget: [99]        
      },
      woodcutting: {
        specificRow: [19],
        totalGoal: 100,
        skills: ["woodcutting"],
        defaultTarget: [99]
      },
      fletching: {
        specificRow: [20],
        skill: ["fletching"],
        defaultTarget: [99]        
      },
      fishing: {
        specificRow: [21],
        skill: ["fishing"],
        defaultTarget: [99]        
      },
      firemaking: {
        specificRow: [22],
        skill: ["firemaking"],
        defaultTarget: [99]        
      },
      crafting: {
        specificRow: [23],
        skill: ["crafting"],
        defaultTarget: [99]        
      },
      smithing: {
        specificRow: [24],
        skill: ["smithing"],
        defaultTarget: [110]        
      },
      mining: {
        specificRow: [25],
        skill: ["mining"],
        defaultTarget: [110]        
      },
      herblore: {
        specificRow: [26],
        skill: ["herblore"],
        defaultTarget: [120]        
      },
      agility: {
        specificRow: [27],
        skill: ["agility"],
        defaultTarget: [99]        
      },
      thieving: {
        specificRow: [28],
        skill: ["thieving"],
        defaultTarget: [99]        
      },
      slayer: {
        specificRow: [29],
        skill: ["slayer"],
        defaultTarget: [120]        
      },
      farming: {
        specificRow: [30],
        skill: ["farming"],
        defaultTarget: [120]        
      },
      runecrafting: {
        specificRow: [31],
        skill: ["runecrafting"],
        defaultTarget: [99]        
      },
      hunter: {
        specificRow: [32],
        skill: ["hunter"],
        defaultTarget: [99]        
      },
      construction: {
        specificRow: [33],
        skill: ["construction"],
        defaultTarget: [99]        
      },
      summoning: {
        specificRow: [34],
        skill: ["summoning"],
        defaultTarget: [99]        
      },
      dungeoneering: {
        specificRow: [35],
        skill: ["dungeoneering"],
        defaultTarget: [120]        
      },
      divination: {
        specificRow: [36],
        skill: ["divination"],
        defaultTarget: [99]        
      },
      invention: {
        specificRows: [37],
        skills: ["invention"],
        defaultTarget: [120]
      },
      archaeology: {
        specificRow: [38],
        skill: ["archaeology"],
        defaultTarget: [120]        
      },
      necormancy: {
        specificRow: [39],
        skill: ["necromancy"],
        defaultTarget: [120]        
      }

    },
  },
  OSCAR: {
    name:'Oscar',
    characterName: 'NotMaxedGIM',
    column: 'W',
    goals: {
      attack: {
        specificRow: [11],
        skill: ["attack"],
        defaultTarget: [99]
      },
      strength: {
        specificRow: [12],
        skill: ["strength"],
        defaultTarget: [99]
      },
      defence: {
        specificRow: [13],
        skill: ["defence"],
        defaultTarget: [99]        
      },
      constitution: {
        specificRow: [14],
        skill: ["constitution"],
        defaultTarget: [99]
      },
      range: {
        specificRow: [15],
        skill: ["range"],
        defaultTarget: [99]        
      },
      prayer: {
        specificRow: [16],
        skill: ["prayer"],
        defaultTarget: [99]        
      },
      magic: {
        specificRow: [17],
        skill: ["magic"],
        defaultTarget: [99]        
      },
      cooking: {
        specificRow: [18],
        skill: ["cooking"],
        defaultTarget: [99]        
      },
      woodcutting: {
        specificRow: [19],
        totalGoal: 100,
        skills: ["woodcutting"],
        defaultTarget: [99]
      },
      fletching: {
        specificRow: [20],
        skill: ["fletching"],
        defaultTarget: [99]        
      },
      fishing: {
        specificRow: [21],
        skill: ["fishing"],
        defaultTarget: [99]        
      },
      firemaking: {
        specificRow: [22],
        skill: ["firemaking"],
        defaultTarget: [99]        
      },
      crafting: {
        specificRow: [23],
        skill: ["crafting"],
        defaultTarget: [99]        
      },
      smithing: {
        specificRow: [24],
        skill: ["smithing"],
        defaultTarget: [110]        
      },
      mining: {
        specificRow: [25],
        skill: ["mining"],
        defaultTarget: [110]        
      },
      herblore: {
        specificRow: [26],
        skill: ["herblore"],
        defaultTarget: [120]        
      },
      agility: {
        specificRow: [27],
        skill: ["agility"],
        defaultTarget: [99]        
      },
      thieving: {
        specificRow: [28],
        skill: ["thieving"],
        defaultTarget: [99]        
      },
      slayer: {
        specificRow: [29],
        skill: ["slayer"],
        defaultTarget: [120]        
      },
      farming: {
        specificRow: [30],
        skill: ["farming"],
        defaultTarget: [120]        
      },
      runecrafting: {
        specificRow: [31],
        skill: ["runecrafting"],
        defaultTarget: [99]        
      },
      hunter: {
        specificRow: [32],
        skill: ["hunter"],
        defaultTarget: [99]        
      },
      construction: {
        specificRow: [33],
        skill: ["construction"],
        defaultTarget: [99]        
      },
      summoning: {
        specificRow: [34],
        skill: ["summoning"],
        defaultTarget: [99]        
      },
      dungeoneering: {
        specificRow: [35],
        skill: ["dungeoneering"],
        defaultTarget: [120]        
      },
      divination: {
        specificRow: [36],
        skill: ["divination"],
        defaultTarget: [99]        
      },
      invention: {
        specificRows: [37],
        skills: ["invention"],
        defaultTarget: [120]
      },
      archaeology: {
        specificRow: [38],
        skill: ["archaeology"],
        defaultTarget: [120]        
      },
      necormancy: {
        specificRow: [39],
        skill: ["necromancy"],
        defaultTarget: [120]        
      }

    },
  }
};
