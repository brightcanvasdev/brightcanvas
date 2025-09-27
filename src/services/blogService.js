import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

// Fetch all published blogs for blog listing pages
export const fetchPublishedBlogs = async () => {
  try {
    const q = query(
      collection(db, "blogs"),
      where("status", "==", "published"),
      orderBy("createdAt", "desc")
    );
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        createdAt: data.createdAt?.toDate(),
        // Convert to your existing format for compatibility
        routeName: generateRouteName(data.blogTitle),
        ImageUrl: data.imgLink,
        title: data.blogTitle,
        date: data.datePosted,
      };
    });
  } catch (error) {
    console.error("Error fetching published blogs:", error);
    return [];
  }
};

// Fetch single blog by route name for BlogPage
export const fetchBlogByRouteName = async (routeName) => {
  try {
    const blogs = await fetchPublishedBlogs();
    return blogs.find((blog) => blog.routeName === routeName);
  } catch (error) {
    console.error("Error fetching blog by route name:", error);
    return null;
  }
};

// Generate route name from blog title (with underscores for readability)
const generateRouteName = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "") // Remove special characters
    .trim() // Remove leading/trailing spaces
    .replace(/\s+/g, "_") // Replace spaces with underscores
    .replace(/_{2,}/g, "_") // Replace multiple underscores with single underscore
    .replace(/^_+|_+$/g, ""); // Remove leading/trailing underscores
};

// Convert Firebase blog data to match your BlogContent format
export const convertToLegacyFormat = (blogs) => {
  const legacyFormat = {};

  blogs.forEach((blog) => {
    legacyFormat[blog.routeName] = {
      id: blog.id,
      blogTitle: blog.blogTitle,
      datePosted: blog.datePosted,
      imgLink: blog.imgLink,
      blogContent: blog.blogContent,
    };
  });

  return legacyFormat;
};
