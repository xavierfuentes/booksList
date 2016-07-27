import Chance from 'chance';

class Book {
  constructor() {
    const chance = new Chance();

    this.title = chance.n(chance.word, chance.natural({min: 2, max: 4}))
      .map(a => a.charAt(0).toUpperCase() + a.substr(1))
      .join(' ');

    this.author = {
      name: chance.name(),
      gender: chance.gender(),
    }

    this.genre = chance.pickone(["Science fiction","Satire","Drama","Action and Adventure","Romance","Mystery","Horror",
      "Self help","Health","Guide","Travel","Children's","Religion, Spirituality & New Age","Science","History","Math",
      "Anthology","Poetry","Encyclopedias","Dictionaries","Comics","Art","Cookbooks","Diaries","Journals","Prayer books",
      "Series","Trilogy","Biographies","Autobiographies","Fantasy","Finance"])

    this.publishedAt = chance.date({string: true, year: chance.natural({min: 1970, max: 2015}), american: false});
  }
}

export default Book;
