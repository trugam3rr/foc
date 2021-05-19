
/* from
https://github.com/cmho/belfnames/blob/master/nelves.rb
*/

setup.NAME_elf_surname = function () {
  const firstpart = [
    "Amber",
    "Auror",
    "Azure",
    "Arrow",
    "Bear",
    "Bee",
    "Bird",
    "Black",
    "Blade",
    "Blue",
    "Bow",
    "Branch",
    "Bramble",
    "Breeze",
    "Briar",
    "Bright",
    "Broad",
    "Claw",
    "Clouds",
    "Dark",
    "Dawn",
    "Dew",
    "Dream",
    "Dusk",
    "Eagle",
    "Earth",
    "Even",
    "Ever",
    "Fair",
    "Fall",
    "Fallow",
    "Far",
    "Feather",
    "Fern",
    "Fire",
    "Floral",
    "Flutter",
    "Forest",
    "Frost",
    "Glade",
    "Gray",
    "Green",
    "Grove",
    "Hide",
    "High",
    "Hush",
    "Ill",
    "Iron",
    "Ivy",
    "Jade",
    "Keen",
    "Kind",
    "Lake",
    "Leaf",
    "Light",
    "Long",
    "Lun",
    "Mane",
    "Maple",
    "Meadow",
    "Mist",
    "Moon",
    "Morning",
    "Moss",
    "Night",
    "North",
    "Oak",
    "Oaken",
    "Pale",
    "Pine",
    "Pure",
    "Rage",
    "Rain",
    "Rapid",
    "Raven",
    "Reed",
    "Ren",
    "River",
    "Root",
    "Sea",
    "Shade",
    "Shadow",
    "Shady",
    "Shimmer",
    "Silent",
    "Silver",
    "Sin",
    "Sky",
    "Snow",
    "Soft",
    "Song",
    "South",
    "Spell",
    "Spirit",
    "Spring",
    "Stag",
    "Star",
    "Still",
    "Storm",
    "Strong",
    "Summer",
    "Sun",
    "Sweet",
    "Swift",
    "Talon",
    "Thorn",
    "Toxic",
    "Tree",
    "True",
    "Way",
    "Whisper",
    "White",
    "Wild",
    "Willow",
    "Wind",
    "Winter",
    "Wish",
    "Wolf",
    "Wood", ,
  ]
  const secondpart = [
    "blaze",
    "bloom",
    "born",
    "bough",
    "bow",
    "branch",
    "break",
    "breeze",
    "brook",
    "caller",
    "catcher",
    "claw",
    "cloud",
    "crest",
    "dale",
    "dancer",
    "dawn",
    "deep",
    "dew",
    "dweller",
    "elm",
    "eye",
    "fall",
    "fang",
    "feather",
    "feral",
    "flight",
    "fly",
    "forest",
    "fury",
    "gale",
    "glade",
    "glaive",
    "gleam",
    "glen",
    "glenn",
    "glide",
    "grass",
    "grip",
    "grove",
    "guard",
    "hammer",
    "haven",
    "heart",
    "hollow",
    "horn",
    "hunter",
    "keeper",
    "lake",
    "lance",
    "leaf",
    "light",
    "line",
    "loam",
    "mane",
    "mantle",
    "meld",
    "mere",
    "might",
    "mist",
    "moon",
    "mother",
    "night",
    "oak",
    "path",
    "piercer",
    "pool",
    "quiver",
    "rage",
    "rain",
    "rest",
    "rise",
    "river",
    "run",
    "rune",
    "runner",
    "scar",
    "scribe",
    "seeker",
    "shade",
    "shadow",
    "shaper",
    "shard",
    "shine",
    "shot",
    "shrike",
    "sight",
    "singer",
    "sky",
    "sniper",
    "soar",
    "song",
    "speaker",
    "spear",
    "spring",
    "spyre",
    "stalker",
    "star",
    "steel",
    "step",
    "storm",
    "stride",
    "strider",
    "strike",
    "stryke",
    "talon",
    "tender",
    "thistle",
    "thorn",
    "tree",
    "vale",
    "walker",
    "warder",
    "watcher",
    "water",
    "weather",
    "weave",
    "weaver",
    "well",
    "whisper",
    "widow",
    "willow",
    "wind",
    "wing",
    "wisp",
    "wood",
  ]
  var firstrand = setup.rng.choice(firstpart)
  var secondrand = setup.rng.choice(secondpart)
  return `${firstrand}${secondrand}`
}