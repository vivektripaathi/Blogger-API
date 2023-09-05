const Blog = require('../models/blog')

module.exports = {
    create : async (req, res) => {
        try{
            const { title, content } = req.body;
            let blog = new Blog({
                title,
                content
            })
            blog = await blog.save()
            if(!blog)  return res.status(400).send('the blog cannot be created!')
            res.send(blog);
        }
        catch (err) {
            res.status(500).json({ error: 'Error creating a post' });
        }
    },

    readAll : async (req, res) => {
        try{
            const blogs = await Blog.find()
            if(!blogs){
                res.status(500).json({success: false, message : 'No blogs found'})
            }
            res.send(blogs)
        }
        catch (err) {
            res.status(500).json({ error: 'Error fetching posts' });
        }
    },

    readById : async (req, res) => {
        try{
            const blog = await Blog.findById(req.params.id);
            if(!blog){
                res.status(500).json({success: false, message : `No blogs found for id   ${req.params.id}`})
            }
            res.send(blog)
        }
        catch (err) {
            res.status(500).json({ error: 'Error fetching posts' });
        }
    },

    update : async (req, res) => {
        try{
            const {title, content} = req.body
            const blog = await Blog.findByIdAndUpdate(
                req.params.id,
                {
                    title,
                    content
                },
                {new : true}
                );
            if(!blog) return res.status(404).json({ error: 'Post not found' });
            res.json(blog);
        }
        catch (err) {
            res.status(500).json({ error: 'Error updating post' });
        }
    },

    delete: async (req, res) => {
        try{
            const blog = await Blog.findByIdAndRemove(req.params.id)
            if (!blog) return res.status(404).json({ error: 'Post not found' });
            res.json({ message: 'Post deleted successfully' });
        }
        catch (err) {
            res.status(500).json({ error: 'Error deleting post' });
        }
    }
}