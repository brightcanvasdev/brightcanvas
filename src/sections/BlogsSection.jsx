import React from "react";
import Title from "../components/Title";
import HomeBlogCard from "../components/HomeBlogCard";
import Footer from "../components/Footer";
import BlogCollection from "./BlogCollection";

// const BlogData = [
//   {
//     id: 1,
//     ImageUrl: "./src/assets/BlogImages/Blog_1.png",
//     title: "How Branding Can Help You Enhance Your Visual Presence",
//     date: "March 5, 2025 - 5 min read",
//   },
//   {
//     id: 2,
//     ImageUrl: "./src/assets/BlogImages/Blog_2.png",
//     title: "How Branding Can Help You Enhance Your Visual Presence",
//     date: "March 12, 2025 - 5 min read",
//   },
//   {
//     id: 3,
//     ImageUrl: "./src/assets/BlogImages/Blog_3.png",
//     title: "How Branding Can Help You Enhance Your Visual Presence",
//     date: "March 17, 2025 - 5 min read",
//   },
// ];

const BlogsSection = () => {
  return (
    <section className="  w-full h-full flex flex-col justify-center items-center gap-10 lg:gap-12  lg:pt-5 text-center  ">
      <Title Title={"Blogs"} />
      {/* bg-project-sec-orange */}
      <div className="bg-black pt-10 pb-10 lg:pt-25 lg:pb-12 w-full h-full flex  flex-col justify-center items-center gap-10 lg:gap-20 rounded-t-[30px]">
        <BlogCollection />

        <Footer />
      </div>
    </section>
  );
};

export default BlogsSection;
