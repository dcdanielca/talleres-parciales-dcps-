import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title() {
    return faker.lorem.sentence();
  },

  publishedAt() {
    return faker.date.recent();
  },

  content() {
    return faker.lorem.paragraphs((Math.random() * 5) + 3);
  },
});
