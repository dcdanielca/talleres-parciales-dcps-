import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  links(author) {
    return {
      'posts': {
        related: `/api/authors/${author.id}/posts`,
      },
    };
  },
});
