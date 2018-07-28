import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  username() {
    return faker.internet.userName(this.firstName, this.lastName);
  },

  email() {
    return faker.internet.email(this.firstName, this.lastName);
  },

  firstName() {
    return faker.name.firstName();
  },

  lastName() {
    return faker.name.lastName();
  },

  profilePicture() {
    return faker.internet.avatar()
  },

  afterCreate(author, server) {
    const MAX_POSTS = 7;
    const MIN_POSTS = 0
    server.createList('blog-post', Math.floor((Math.random() * MAX_POSTS - MIN_POSTS) + MIN_POSTS), { author });
  }
});
