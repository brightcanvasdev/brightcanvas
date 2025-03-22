import React from "react";
import { motion } from "motion/react";
import BlogsSection from "../sections/BlogsSection";
import BlogCollection from "../sections/BlogCollection";
import Footer from "../components/Footer";
import { ScrollToTop } from "../utils/ScrollToTop";
import { BlogContent } from "../content/BlogContent";
import { useParams } from "react-router";

const BlogPage = () => {
  ScrollToTop();

  const BlogData = BlogContent;
  console.log(BlogData);

  const { routeName } = useParams();
  const imageLink = BlogData[routeName]?.imgLink;
  console.log(imageLink);

  return (
    <motion.section
      className="w-full h-full lg:min-h-screen flex flex-col justify-start items-center gap-10 lg:gap-12 pt-20 pb-10 lg:pt-32 text-left "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* gap-14 lg:gap-16  */}
      <div className="flex flex-col gap-10 lg:gap-12 mt-10 md:mt-0 w-[85%] lg:w-[80%] ">
        {/* heading */}
        <div className="">
          <h1 className="cabinetBold text-xl lg:text-3xl">
            {/* How Branding Can Help You Enhance Your Visual Presence */}
            {BlogData[routeName]?.blogTitle}
          </h1>
          <span className="date text-project-gray">
            {" "}
            {/* April 24, 2022 - 5 min read */}
            {BlogData[routeName]?.datePosted}
          </span>
        </div>

        {/* image */}
        <div className="rounded-3xl overflow-hidden">
          <img src={imageLink} alt="" className="w-full lg:h-110" />
        </div>

        {/* content */}
        <div
          className="flex flex-col gap-12"
          dangerouslySetInnerHTML={{
            __html: BlogData[routeName]?.blogContent,
          }}
        ></div>
        <BlogCollection />
      </div>
      <Footer />
    </motion.section>
  );
};

export default BlogPage;
