import client from "@/config/config";
import { Databases, Storage } from "appwrite";

class TestimonialService {
  private db: Databases = new Databases(client);
  private static instance: TestimonialService;
  private storage: Storage = new Storage(client);

  public static getInstance() {
    if (!TestimonialService.instance) {
      TestimonialService.instance = new TestimonialService();
    }
    return TestimonialService.instance;
  }

  public getTestimonials = async () => {
    const testimonials = await this.db.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DB_ID as string,
      process.env.NEXT_PUBLIC_APPWRITE_TESTIMONIALS_ID as string
    );

    const testimonialsWithImages = await Promise.all(
      testimonials.documents.map(async (testimonial: any) => {
        if (testimonial.imageId) {
          const uploadedImage = await this.storage.getFileView(
            process.env.NEXT_PUBLIC_APPWRITE_TESTIMONIALS_STORAGE_ID as string,
            testimonial.imageId
          );
          return {
            name: testimonial.name,
            university: testimonial.university,
            content: testimonial.content,
            country: testimonial.country,
            youtubeLink: testimonial.youtubeLink,
            imageUrl: uploadedImage,
          };
        } else {
          return {
            name: testimonial.name,
            university: testimonial.university,
            content: testimonial.content,
            country: testimonial.country,
            youtubeLink: testimonial.youtubeLink,
            imageUrl: null,
          };
        }
      })
    );

    return testimonialsWithImages;
  };
}

export default TestimonialService;
