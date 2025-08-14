const name = localStorage.getItem("fighterName");

const user = {
  name: name,
  src: "src/images/avatar2.jpg",
  healsMax: 100,
  damage: 8,
};

const enemy = {
  name: "Мистер Ангел",
  src: "src/images/avatar3.jpg",
  healsMax: 130,
  damage: 10,
};

const enemies = [
  {
    name: "Мистер Ангел",
    src: "src/images/avatar3.jpg",
    healsMax: 130,
    damage: 10,
  },
  {
    name: "Мистер",
    src: "src/images/avatar.jpg",
    healsMax: 80,
    damage: 15,
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

const zonesList = ["Голова", "Шея", "Тело", "Живот", "Ноги"];

export { user, enemy, fightPhrases, zonesList, enemies };
