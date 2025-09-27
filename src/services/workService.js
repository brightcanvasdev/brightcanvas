import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import { WorkContent } from "../content/WorkContent";

// Fetch all published work projects for work listing pages
export const fetchPublishedWorks = async () => {
  try {
    const q = query(
      collection(db, "works"),
      where("status", "==", "published"),
      orderBy("createdAt", "desc")
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      // Fallback to local data if no Firebase data
      console.log("No Firebase data found, using local WorkContent");
      return convertLocalDataToWorkFormat();
    }

    return querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        createdAt: data.createdAt?.toDate(),
        // Convert to your existing format for compatibility
        routeName: generateRouteName(data.title),
        imgUrl: data.workImage,
        desc: extractDescriptionPreview(data.description),
      };
    });
  } catch (error) {
    console.error(
      "Error fetching published works from Firebase, using local data:",
      error
    );
    return convertLocalDataToWorkFormat();
  }
};

// Fetch single work project by route name for WorkPage
export const fetchWorkByRouteName = async (routeName) => {
  try {
    // First try Firebase
    const works = await fetchPublishedWorks();
    const firebaseWork = works.find((work) => work.routeName === routeName);

    if (firebaseWork) {
      return firebaseWork;
    }

    // Fallback to local data
    const localWork = WorkContent[routeName];
    if (localWork) {
      return {
        id: localWork.id,
        title: localWork.title,
        workImage: localWork.imgLink,
        description: localWork.workDesc,
        services: localWork.services || [],
        routeName: routeName,
      };
    }

    return null;
  } catch (error) {
    console.error("Error fetching work by route name:", error);

    // Try local data as final fallback
    const localWork = WorkContent[routeName];
    if (localWork) {
      return {
        id: localWork.id,
        title: localWork.title,
        workImage: localWork.imgLink,
        description: localWork.workDesc,
        services: localWork.services || [],
        routeName: routeName,
      };
    }

    return null;
  }
};

// Convert local WorkContent to match Firebase format
const convertLocalDataToWorkFormat = () => {
  return Object.keys(WorkContent).map((key) => {
    const work = WorkContent[key];
    return {
      id: work.id,
      title: work.title,
      workImage: work.imgLink,
      description: work.workDesc,
      services: work.services || [],
      routeName: key,
      imgUrl: work.imgLink, // For compatibility with WorkCard
      desc: extractDescriptionPreview(work.workDesc),
      createdAt: new Date(), // Placeholder date
    };
  });
};

// Generate route name from work title (matching your existing format)
const generateRouteName = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "") // Remove special characters
    .trim() // Remove leading/trailing spaces
    .replace(/\s+/g, "") // Remove all spaces (no underscores like blogs)
    .replace(/[^a-z0-9]/g, ""); // Ensure only alphanumeric characters
};

// Extract plain text preview from HTML description for card display
const extractDescriptionPreview = (htmlContent) => {
  if (!htmlContent) return "No description available";

  // Remove HTML tags and get first 150 characters
  const textContent = htmlContent.replace(/<[^>]*>/g, "").trim();
  return textContent.length > 150
    ? textContent.substring(0, 150) + "..."
    : textContent;
};

// Get limited works for homepage sections (first 4)
export const fetchFeaturedWorks = async (limit = 4) => {
  try {
    const works = await fetchPublishedWorks();
    return works.slice(0, limit);
  } catch (error) {
    console.error("Error fetching featured works:", error);
    return [];
  }
};
