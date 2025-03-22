import React from "react";
import HomeBlogCard from "../components/HomeBlogCard";

const BlogData = [
  {
    id: 1,
    ImageUrl:
      "https://raw.githubusercontent.com/brightcanvasdev/imagehosting/refs/heads/main/BlogsImages/1.webp",
    title: "How Branding Can Help You Enhance Your Visual Presence",
    date: "April 24, 2022 - 5 min read",
    routeName: "howBrandingCanHelpYou",
  },
  {
    id: 2,
    ImageUrl:
      "https://raw.githubusercontent.com/brightcanvasdev/imagehosting/refs/heads/main/BlogsImages/2.webp",
    title:
      "Creating a Strong Visual Presence for Your Restaurant: The Power of Branding",
    date: "April 24, 2022 - 5 min read",
    routeName: "creatingAStrongVisualPresenceforRestaurant",
  },
  {
    id: 3,
    ImageUrl:
      "https://raw.githubusercontent.com/brightcanvasdev/imagehosting/refs/heads/main/BlogsImages/3.webp",
    title: "Why a Good Logo is Important for Your Brand",
    date: "April 24, 2022 - 5 min read",
    routeName: "whyAgoodLogoIsImportant",
  },
];

const BlogCollection = () => {
  return (
    <div className=" flex justify-center items-center gap-6 lg:gap-10 flex-col lg:flex-row ">
      {/* {BlogData.map((blog, index) => (
        <HomeBlogCard
          ImageUrl={blog.ImageUrl}
          title={blog.title}
          date={blog.date}
        />
      ))} */}
      {BlogData.map((blog, index) => (
        <HomeBlogCard
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
