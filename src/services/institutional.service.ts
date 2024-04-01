import client from "@/config/config";
import { Databases, Storage } from "appwrite";

class InstitutionService {
  private db: Databases = new Databases(client);
  public static instance: InstitutionService;
  public storage: Storage = new Storage(client);

  public static getInstance() {
    if (!InstitutionService.instance) {
      InstitutionService.instance = new InstitutionService();
    }
    return InstitutionService.instance;
  }

  public getInstitutions = async () => {
    const institutions = await this.db.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DB_ID as string,
      process.env.NEXT_PUBLIC_APPWRITE_INSTITUTIONS_ID as string
    );

    const institutionsWithImages = await Promise.all(
      institutions.documents.map(async (institution: any) => {
        if (institution.imageId) {
          const uploadedImage = await this.storage.getFileView(
            process.env.NEXT_PUBLIC_APPWRITE_INSTITUTIONS_STORAGE_ID as string,
            institution.imageId
          );
          return {
            title: institution.title,
            description: institution.description,
            country: institution.country,
            imageUrl: uploadedImage,
          };
        } else {
          return {
            title: institution.title,
            description: institution.description,
            country: institution.country,
            imageUrl: null,
          };
        }
      })
    );

    return institutionsWithImages;
  };
}

export default InstitutionService;
