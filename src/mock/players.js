const name = localStorage.getItem("fighterName");

const user = {
  name: name,
  src: "src/images/marla1.jpg",
  wins: 0,
  loses: 0,
  healsMax: 100,
  damage: 8,
  chance: 0.8,
  crit: 2,
};

const users = [
  {
    src: "src/images/marla.jpg",
    wins: 0,
    loses: 0,
    healsMax: 100,
    damage: 8,
    chance: 0.8,
    crit: 2,
    log: [],
    dmgE: 0,
    dmgU: 0,
    enemy: {},
  },
  {
    src: "src/images/marla1.jpg",
    wins: 0,
    loses: 0,
    healsMax: 80,
    damage: 10,
    chance: 0.4,
    crit: 1.2,
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
    healsMax: 130,
    damage: 10,
    attack: 1,
    defense: 2,
    chance: 0.5,
    crit: 1.9,
  },
  {
    name: "Тайлер Дёрден",
    src: "src/images/avatar.jpg",
    healsMax: 80,
    damage: 10,
    attack: 2,
    defense: 2,
    chance: 0.2,
    crit: 2.5,
  },
  {
    name: "Боб",
    src: "src/images/avatar4.jpg",
    healsMax: 180,
    damage: 16,
    attack: 1,
    defense: 1,
    chance: 0.2,
    crit: 1.3,
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
  wins: "Кровавые победы",
  loses: "Горькие поражения",
  name: "Твое имя в клубе",
  healsMax: "Запас мяса",
  damage: "Сила удара",
  chance: "Шанс сорваться с цепи",
  crit: "Множитель ярости",
  src: "Лицо на афише",
};

const avatars = ["src/images/marla.jpg", "src/images/marla1.jpg"];

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
};
