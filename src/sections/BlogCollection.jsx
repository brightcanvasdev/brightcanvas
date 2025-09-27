import React, { useState, useEffect } from "react";
import HomeBlogCard from "../components/HomeBlogCard";
import { fetchPublishedBlogs } from "../services/blogService";

// const BlogData = [
//   {
//     id: 1,
//     ImageUrl:
//       "https://raw.githubusercontent.com/brightcanvasdev/imagehosting/refs/heads/main/BlogsImages/1.webp",
//     title: "How Branding Can Help You Enhance Your Visual Presence",
//     date: "March 5, 2025 - 5 min read",
//     routeName: "howBrandingCanHelpYou",
//   },
//   {
//     id: 2,
//     ImageUrl:
//       "https://raw.githubusercontent.com/brightcanvasdev/imagehosting/refs/heads/main/BlogsImages/2.webp",
//     title:
//       "Creating a Strong Visual Presence for Your Restaurant: The Power of Branding",
//     date: "March 12, 2025 - 5 min read",
//     routeName: "creatingAStrongVisualPresenceforRestaurant",
//   },
//   {
//     id: 3,
//     ImageUrl:
//       "https://raw.githubusercontent.com/brightcanvasdev/imagehosting/refs/heads/main/BlogsImages/3.webp",
//     title: "Why a Good Logo is Important for Your Brand",
//     date: "March 17, 2025 - 5 min read",
//     routeName: "whyAgoodLogoIsImportant",
//   },
// ];

const BlogCollection = () => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const blogs = await fetchPublishedBlogs();
        // Limit to latest 3 blogs
        setBlogData(blogs.slice(0, 3));
      } catch (error) {
        console.error("Error loading blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center p-10">
        <div className="text-white">Loading blogs...</div>
      </div>
    );
  }

  if (blogData.length === 0) {
    return (
      <div className="flex justify-center items-center p-10">
        <div className="text-white">No blogs available</div>
      </div>
    );
  }

  return (
    <div className=" flex justify-center items-center gap-6 lg:gap-10 flex-col lg:flex-row ">
      {blogData.map((blog, index) => (
        <HomeBlogCard
          key={blog.id}
          ImageUrl={blog.ImageUrl}
          title={blog.title}
          date={blog.date}
          routeName={blog.routeName}
        />
      ))}
    </div>
  );
};

export default BlogCollection;
