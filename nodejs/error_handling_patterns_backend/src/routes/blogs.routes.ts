import express from 'express';
import * as  blogs from '../controllers/blogs.controller.ts';
const router = express.Router();


router.get('/', blogs.getAllBlogs);
router.get('/:id', blogs.getBlog);
router.post('/', blogs.createBlogs);
router.put('/:id', blogs.updateBlog);
router.delete("/:id", blogs.deleteBlog);


export default router;