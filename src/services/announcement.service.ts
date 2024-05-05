import client from "@/config/config";
import { Databases } from "appwrite";

class AnnouncementService {
  private static instance: AnnouncementService;
  private db: Databases = new Databases(client);

  public static getInstance() {
    if (!AnnouncementService.instance) {
      AnnouncementService.instance = new AnnouncementService();
    }
    return AnnouncementService.instance;
  }

  public getAnnouncements = async () => {
    const announcement = await this.db.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DB_ID as string,
      process.env.NEXT_PUBLIC_APPWRITE_ANNOUNCEMENTS_ID as string
    );

    const allAnnouncements = await Promise.all(
      announcement.documents.map(async (announcement: any) => {
        if (announcement.$id) {
          return {
            id: announcement.$id,
            announcement: announcement.announcement,
          };
        } else {
          return {
            id: announcement.$id,
            announcement: announcement.announcement,
          };
        }
      })
    );

    console.log(allAnnouncements);
    return allAnnouncements;
  };
}
export default AnnouncementService;
