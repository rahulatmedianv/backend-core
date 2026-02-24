import file from 'fs';
import path from 'path';
import crypto from 'crypto'
import { fileURLToPath } from "url";
import type {Blogs} from '../type/blogs.ts';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FILE_PATH = path.join(__dirname, '../data.json');
class BlogService {
    async readBlog() {
        const data = file.readFileSync(FILE_PATH, 'utf-8');
        return JSON.parse(data);
    }

    async createBlog(blogs: Blogs) {
        const id = crypto.randomUUID();
        const data = await this.readBlog();
        blogs.id = id;
        data.push(blogs);
        file.writeFileSync(FILE_PATH, JSON.stringify(data));
        return;
    }

    async updateBlog(blogs: Blogs, id: string) {
        const data = await this.readBlog();
        const updatedData = data.map((blog: Blogs) => {
            if(blog.id === id) {
                return blogs;
            }
            return blog;
        })

        file.writeFileSync(FILE_PATH, JSON.stringify(updatedData));
        return;
    }

    async deleteBlog(id: string) {
        const data = await this.readBlog();
        const updatedData = data.filter((blog: Blogs) => blog.id !== id);
        file.writeFileSync(FILE_PATH, JSON.stringify(updatedData));
        return;
    }
}


export default new BlogService();