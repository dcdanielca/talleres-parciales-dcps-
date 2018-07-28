import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  links(blogPost) {
    return {
      'author': {
        related: `/api/authors/${blogPost.author.id}`,
      }
    }
  },
});
