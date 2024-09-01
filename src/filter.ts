const words: string[] = [
  'Gwapo',
  'si',
  'Adrian',
  'Benlot',
  'Manalili',
  'times',
  'ten',
];

const longWords: string[] = words.filter((word: string) => word.length > 5);

console.log(longWords);
