const name = localStorage.getItem("fighterName");

const user = {
  name: name,
  src: "src/images/women.jpg",
  wins: 0,
  loses: 0,
  healsMax: 110,
  damage: 7,
  chance: 0.75,
  crit: 1.8,
};

const users = [
  {
    src: "src/images/women.jpg",
    wins: 0,
    loses: 0,
    healsMax: 110,
    damage: 7,
    chance: 0.75,
    crit: 1.8,
    log: [],
    dmgE: 0,
    dmgU: 0,
    enemy: {},
  },
  {
    src: "src/images/men.jpg",
    wins: 0,
    loses: 0,
    healsMax: 90,
    damage: 11,
    chance: 0.65,
    crit: 2.2,
    log: [],
    dmgE: 0,
    dmgU: 0,
    enemy: {},
  },
];

const enemies = [
  {
    name: "Мистер Ангел",
    src: "src/images/avatar3.jpg",
    healsMax: 90,
    damage: 7,
    attack: 1,
    defense: 1,
    chance: 0.55,
    crit: 1.5,
  },
  {
    name: "Боб",
    src: "src/images/avatar4.jpg",
    healsMax: 120,
    damage: 10,
    attack: 2,
    defense: 2,
    chance: 0.45,
    crit: 2.0,
  },
  {
    name: "Тайлер Дёрден",
    src: "src/images/avatar.jpg",
    healsMax: 160,
    damage: 13,
    attack: 2,
    defense: 3,
    chance: 0.35,
    crit: 2.2,
  },
];

const fightPhrases = [
  "Бьёшь один раз, защищаешься два. Таковы правила.",
  "Один удар — две защиты. Живи по этим законам.",
  "Бей раз, защищайся дважды. Всё остальное забудь.",
  "Один точный удар. Две стены защиты.",
  "Первый шаг — удар. Два следующих — защита.",
  "Один шанс атаковать. Две возможности выстоять.",
  "Раз бей — два защищай. Это твой ритм боя.",
  "Один кулак в атаку. Две руки на защиту.",
  "Один удар в сердце врага. Две защиты, чтобы выжить.",
  "Бей один раз. Защищайся дважды. Всё просто.",
];

const winPhrases = [
  "Ты выстоял. Соперник рухнул. Это твоя победа.",
  "Его кулаки стихли, твои — живы. Победа за тобой.",
  "Ты остался на ногах. Он — в пыли. Конец.",
  "Твои удары стали последними. Бой окончен.",
  "Ты доказал, чьи кулаки крепче. Победа твоя.",
  "Противник сломлен. Ты хозяин этого ринга.",
];

const losePhrases = [
  "Ты упал. Его кулаки сказали последнее слово.",
  "Схватка окончена. Он стоит — ты нет.",
  "Твоя защита треснула, бой проигран.",
  "Ты остался в темноте, он вышел к свету. Проигрыш.",
  "Его удар был решающим. Ты пал.",
  "Ты не выдержал. Победа ушла к нему.",
];

const zonesList = ["Голова", "Шея", "Тело", "Живот", "Ноги"];

const keyMap = {
  wins: "Кровавые победы:",
  loses: "Горькие поражения:",
  name: "Твое имя в клубе:",
  healsMax: "Запас мяса:",
  damage: "Сила удара:",
  chance: "Шанс сорваться с цепи:",
  crit: "Множитель ярости:",
  src: "Лицо на афише:",
};

const avatars = [
  { face: "men", src: "src/images/men.jpg" },
  { face: "women", src: "src/images/women.jpg" },
];

const avatarsMap = {
  men: "Мужское",
  women: "Женское",
};

export {
  user,
  fightPhrases,
  zonesList,
  enemies,
  winPhrases,
  losePhrases,
  keyMap,
  avatars,
  users,
  avatarsMap,
};
