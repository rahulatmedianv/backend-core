import {
  response,
  type NextFunction,
  type Request,
  type Response,
} from "express";
import { catchAsync } from "../utils/catchAsync.ts";
import blogServices from "../services/blog.services.ts";
import { ApiResponse } from "../utils/resposneHandler.ts";
import type { Blogs } from "../type/blogs.ts";

type IdParams = {
  id: string;
};

const getAllBlogs = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const blogs = await blogServices.getBlogs();
    const response = ApiResponse.success("Blogs Retrieved Successfully", blogs);
    return res.status(200).send(response);
  },
);

const getBlog = catchAsync(async (req: Request<IdParams>, res: Response, next: NextFunction) => {
    const {id} = req.params;
    const blog = await blogServices.getBlog(id);
    const response = ApiResponse.success('Blog Retrieved Successfully', blog);
    return res.status(200).send(response);
})

const createBlogs = catchAsync(
  async (req: Request<{}, {}, Blogs>, res: Response, next: NextFunction) => {
    await blogServices.createBlog(req.body);
    const blogs = await blogServices.getBlogs();
    const response = ApiResponse.success("Blogs Saved Successfully", blogs);
    return res.status(200).send(response);
  },
);

const updateBlog = catchAsync(
  async (
    req: Request<IdParams, {}, Blogs>,
    res: Response,
    next: NextFunction,
  ) => {
    const { id } = req.params;
    await blogServices.updateBlog(req.body, id);
    const blogs = await blogServices.getBlogs();
    const response = ApiResponse.success("Blogs Updated Successfully", blogs);
    return res.status(200).send(response);
  },
);

const deleteBlog = catchAsync(
  async (req: Request<IdParams>, res: Response, next: NextFunction) => {
    const { id } = req.params;
    await blogServices.deleteBlog(id);
    const response = ApiResponse.success("Blog deleted successfully", null);
    return res.status(200).send(response);
  },
);

export { getAllBlogs, createBlogs, updateBlog, deleteBlog, getBlog };
