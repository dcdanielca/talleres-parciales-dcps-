import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        delete(id){
            var post = this.store.findRecord('blog-post', id).then((post)=>{
                post.destroyRecord()
            })
        }
    }
});
