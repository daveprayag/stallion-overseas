import client from "@/config/config";
import { Databases, Storage } from "appwrite";

class BlogService {
  private db: Databases = new Databases(client);
  private static instance: BlogService;
  private storage: Storage = new Storage(client);

  public static getInstance() {
    if (!BlogService.instance) {
      BlogService.instance = new BlogService();
    }
    return BlogService.instance;
  }

  public getBlogs = async () => {
    const blogs = await this.db.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DB_ID as string,
      process.env.NEXT_PUBLIC_APPWRITE_BLOGS_ID as string
    );

    const blogsWithImages = await Promise.all(
      blogs.documents.map(async (blog: any) => {
        if (blog.imageId) {
          const uploadedImage = await this.storage.getFileView(
            process.env.NEXT_PUBLIC_APPWRITE_BLOGS_STORAGE_ID as string,
            blog.imageId
          );
          return {
            title: blog.title,
            description: blog.description,
            country: blog.country,
            imageUrl: uploadedImage,
          };
        } else {
          return {
            title: blog.title,
            description: blog.description,
            country: blog.country,
            imageUrl: null,
          };
        }
      })
    );

    return blogsWithImages;
  };
}

export default BlogService;
