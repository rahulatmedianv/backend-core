import express from 'express';
import * as  blogs from '../controllers/blogs.controller.ts';
const router = express.Router();


router.get('/', blogs.getBlogs);
router.post('/', blogs.createBlogs);
router.put('/:id', blogs.updateBlog);


export default router;