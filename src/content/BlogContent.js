import {
  fetchPublishedBlogs,
  fetchBlogByRouteName,
} from "../services/blogService";

let cachedBlogs = null;
let lastFetchTime = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export const getBlogContent = async () => {
  const now = Date.now();

  // Use cached data if it's still fresh
  if (cachedBlogs && now - lastFetchTime < CACHE_DURATION) {
    return cachedBlogs;
  }

  try {
    const blogs = await fetchPublishedBlogs();
    cachedBlogs = convertToLegacyFormat(blogs);
    lastFetchTime = now;
    return cachedBlogs;
  } catch (error) {
    console.error("Error fetching blog content:", error);

    if (cachedBlogs) {
      return cachedBlogs;
    }

    return {
      fallback: {
        id: "fallback",
        blogTitle: "Blog content temporarily unavailable",
        datePosted: "Please check back later",
        imgLink: "https://via.placeholder.com/400x200?text=No+Image",
        blogContent:
          "<p>Blog content is temporarily unavailable. Please try again later.</p>",
      },
    };
  }
};

// Legacy export for backward compatibility (will be empty initially)
export const BlogContent = {};
