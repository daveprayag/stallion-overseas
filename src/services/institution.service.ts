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

  public getInstitutions = async (countryName: string) => {
    const institutions = await this.db.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DB_ID as string,
      process.env.NEXT_PUBLIC_APPWRITE_INSTITUTIONS_ID as string
    );

    const institutionsWithImages = await Promise.all(
      institutions.documents.map(async (institution: any) => {
        // Check if the institution has the cityName in its 'cities' array
        if (institution.country.includes(countryName)) {
          if (institution.imageId) {
            const uploadedImage = await this.storage.getFileView(
              process.env
                .NEXT_PUBLIC_APPWRITE_INSTITUTIONS_STORAGE_ID as string,
              institution.imageId
            );
            return {
              name: institution.name,
              type: institution.type,
              campuses: institution.campuses,
              website: institution.website,
              province: institution.province,
              cities: institution.cities,
              country: institution.country,
              imageUrl: uploadedImage,
            };
          } else {
            return {
              name: institution.name,
              type: institution.type,
              campuses: institution.campuses,
              website: institution.website,
              province: institution.province,
              cities: institution.cities,
              country: institution.country,
              imageUrl: null,
            };
          }
        }
      })
    );

    // Filter out undefined values (institutions that don't match the city)
    return institutionsWithImages.filter((institution) => institution);
  };
}

export default InstitutionService;
