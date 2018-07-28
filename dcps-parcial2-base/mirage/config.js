export default function() {
  this.urlPrefix = 'http://localhost:8080';
  this.namespace = '/api';

  this.resource('authors');
  this.get('/authors/:id/posts', ({ authors }, { params: { id }}) => {
    return authors.find(id).posts;
  });

  this.resource('blog-posts');
}

