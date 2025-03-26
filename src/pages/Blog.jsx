import React from "react";
import { motion } from "motion/react";
import TitleHead from "../components/TitleHead";
import Footer from "../components/Footer";
import HomeBlogCard from "../components/HomeBlogCard";

const BlogData = [
  {
    id: 1,
    ImageUrl:
      "https://raw.githubusercontent.com/brightcanvasdev/imagehosting/refs/heads/main/BlogsImages/1.webp",
    title: "How Branding Can Help You Enhance Your Visual Presence",
    date: "March 5, 2025 - 5 min read",
    routeName: "howBrandingCanHelpYou",
  },
  {
    id: 2,
    ImageUrl:
      "https://raw.githubusercontent.com/brightcanvasdev/imagehosting/refs/heads/main/BlogsImages/2.webp",
    title:
      "Creating a Strong Visual Presence for Your Restaurant: The Power of Branding",
    date: "March 12, 2025 - 5 min read",
    routeName: "creatingAStrongVisualPresenceforRestaurant",
  },
  {
    id: 3,
    ImageUrl:
      "https://raw.githubusercontent.com/brightcanvasdev/imagehosting/refs/heads/main/BlogsImages/3.webp",
    title: "Why a Good Logo is Important for Your Brand",
    date: "March 17, 2025 - 5 min read",
    routeName: "whyAgoodLogoIsImportant",
  },
];

const Blog = () => {
  return (
    <motion.section
      className="w-full h-full lg:h-screen flex flex-col justify-start items-center gap-10 lg:gap-16  pt-20 pb-10 lg:pt-36  text-center "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="mt-10 md:mt-0">
        <TitleHead Title="Blogs" extraClass="text-white" />
      </div>

      <div className="blogsContainer lg:px-20  flex justify-center items-center gap-6 lg:gap-12 flex-col flex-wrap lg:flex-row">
        {BlogData.map((blog, index) => (
          <HomeBlogCard
            ImageUrl={blog.ImageUrl}
            title={blog.title}
            date={blog.date}
            routeName={blog.routeName}
          />
        ))}
      </div>

      <Footer />
    </motion.section>
  );
};

export default Blog;
