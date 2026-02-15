import React from "react";
import { motion } from "motion/react";
import { ScrollToTop } from "../utils/ScrollToTop";
import Footer from "../components/Footer";
import Form from "../components/Form";
import BlogCollection from "../sections/BlogCollection";

import CloudinaryVideo from "../components/CloudinaryVideo";
import Button from "../components/Button";
import BlogsSection from "../sections/BlogsSection";
import Contact from "../sections/Contact";

const Tech = () => {
  ScrollToTop();
  return (
    <motion.div
      className="h-full lg:h-max flex flex-col justify-start items-center gap-10 lg:gap-0 pt-24 pb-10 lg:pt-36  text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <section
        className=" flex flex-col justify-center items-center gap-4 lg:gap-0  lg:pb-10 lg:text-justify"
        id="Tech"
      >
        <div className="flex flex-col items-start w-full lg:w-5/6 p-10 lg:p-0 ">
          <h2 className="text-xl lg:text-3xl cabinetMedium mb-5">
            Ai Intelligent Systems Division
          </h2>

          <div className="w-full h-full lg:h-[600px] rounded-3xl flex justify-center overflow-hidden">
            <CloudinaryVideo
              videoUrl="https://res.cloudinary.com/dllipzmff/video/upload/v1771160520/Lead_Gen_Bot_video_ngwya1.mp4"
              posterUrl="https://res.cloudinary.com/dllipzmff/image/upload/v1771165119/TechPagePoster_rdkksn.png"
              className="w-full h-full lg:h-[600px] object-cover"
            />
          </div>
        </div>
        <section className="tech-bg flex flex-col lg:flex-row items-center justify-center w-full lg:h-screen gap-8 lg:gap-16 py-0 lg:py-12 text-left ">
          <div className="w-full lg:w-5/6  p-8 lg:p-0">
            <div className="w-full lg:w-1/2 leading-7">
              <h2 className="cabinetExtraBold text-xl lg:text-3xl mb-5">
                AI Lead Generation – LinkedIn Growth Engine
              </h2>
              <p className="cabinetLight text-sm lg:text-lg text-left mb-5 leading-7">
                Turn LinkedIn into a predictable revenue machine. Our AI-powered
                LinkedIn bot identifies your Ideal Customer Profile (ICP),
                initiates hyper-personalized outreach, nurtures conversations,
                qualifies prospects, and books meetings automatically.
              </p>
              <h4 className="cabinetMedium text-xl lg:text-xl">
                What is Does:
              </h4>
              <ul className="list-disc pl-5 mb-5 cabinetLight text-sm lg:text-lg">
                <li className="">
                  Smart ICP targeting based on industry, role, geography &
                  intent
                </li>
                <li className="">
                  Human-like AI messaging sequences (no spam patterns)
                </li>
                <li className="">
                  Automated follow-ups with behavioral triggers
                </li>
                <li className="">
                  Conversation qualification & meeting booking
                </li>
                <li className="">CRM sync + pipeline tracking</li>
              </ul>

              <p className="cabinetLight text-sm lg:text-lg text-left mb-5">
                Consistent inbound-quality leads without manual prospecting.
                This isn't outreach. It's intelligent demand capture.
              </p>
              <br />
              <Button Content={"BOOK FREE DEMO"} width={200} />
            </div>
            <div className="w-full lg:w-1/2"></div>
          </div>
        </section>
        <section className="flex flex-col lg:flex-row items-center justify-center w-full lg:h-max gap-8 py-0 lg:gap-16 lg:py-12 text-left  ">
          <div className="w-full lg:w-5/6  px-8 lg:p-0 flex lg:flex-row-reverse gap-8 flex-col-reverse">
            <div className="w-full lg:w-1/2 leading-7 flex flex-col justify-center items-start ">
              <h2 className="cabinetExtraBold text-xl lg:text-3xl mb-5">
                AI Automation Eliminate Manual Bottlenecks
              </h2>
              <p className="cabinetLight text-sm lg:text-lg text-left mb-5 leading-7">
                Every company suffers from hidden operational drag repetitive
                tasks, slow approvals, data silos, and human dependency. We
                automate your internal workflows using AI + automation tools
                like n8n, Zapier, custom APIs, and AI decision engines.
              </p>
              <h4 className="cabinetMedium text-xl lg:text-xl">We Automate:</h4>
              <ul className="list-disc pl-5 mb-5 cabinetLight text-sm lg:text-lg">
                <li className="">Lead routing & assignment</li>
                <li className="">HR onboarding workflows</li>
                <li className="">Proposal & invoice generation</li>
                <li className="">Customer support ticket classification</li>
                <li className="">Reporting dashboards</li>
                <li className="">Email & follow-up systems</li>
                <li className="">Multi-department coordination processes</li>
              </ul>

              <p className="cabinetLight text-sm lg:text-lg text-left mb-5">
                Imagine removing 30–60% of operational friction within 60 days.
                Your team focuses on thinking Ai handles execution.
              </p>
              <br />
              {/* <Button Content={"BOOK FREE DEMO"} width={200} /> */}
            </div>
            <div className="w-full lg:w-1/2 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="https://raw.githubusercontent.com/brightcanvasdev/imagehosting/refs/heads/main/techpage/ai%20automation.webp"
                alt="AI Automation"
                className="w-full lg:w-[70%] h-full object-cover "
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col lg:flex-row items-center justify-center w-full lg:h-max gap-8 py-0 lg:gap-16 lg:py-12 text-left ">
          <div className="w-full lg:w-5/6  px-8 lg:p-0 flex lg:flex-row gap-8 flex-col-reverse">
            <div className="w-full lg:w-1/2 leading-7 flex flex-col justify-center items-start ">
              <h2 className="cabinetExtraBold text-xl lg:text-3xl mb-5">
                AI Lead Generation Platform Agnostic
              </h2>
              <p className="cabinetLight text-sm lg:text-lg text-left mb-5 leading-7">
                LinkedIn is powerful but your audience may live elsewhere. We
                build AI-driven lead generation systems across:
              </p>
              <h4 className="cabinetMedium text-xl lg:text-xl">We Automate:</h4>
              <ul className="list-disc pl-5 mb-5 cabinetLight text-sm lg:text-lg">
                <li className="">LinkedIn</li>
                <li className="">Instagram</li>
                <li className="">Facebook</li>
                <li className="">Email</li>
                <li className="">Cold Email Infrastructure</li>
                <li className="">WhatsApp</li>
                <li className="">Website Funnels</li>
                <li className="">Google Ads & Meta Ads</li>
                <li className="">Industry-specific platforms</li>
              </ul>
              <h4 className="cabinetMedium text-xl lg:text-xl">
                How it Works:
              </h4>
              <ul className="list-disc pl-5 mb-5 cabinetLight text-sm lg:text-lg">
                <li className="">
                  Define your ICP deeply (pain points, triggers, buying
                  signals).
                </li>
                <li className="">Map buyer journey touchpoints.</li>
                <li className="">Deploy AI-driven outreach & retargeting.</li>
                <li className="">
                  Capture, qualify, and nurture leads automatically.
                </li>
                <li className="">
                  Push to CRM with scoring & priority tagging.
                </li>
              </ul>

              <p className="cabinetLight text-sm lg:text-lg text-left mb-5">
                Your lead engine becomes data-driven, not hope-driven.
              </p>
              <br />
              {/* <Button Content={"BOOK FREE DEMO"} width={200} /> */}
            </div>
            <div className="w-full lg:w-1/2 flex items-center justify-center  rounded-lg ">
              <img
                src="https://raw.githubusercontent.com/brightcanvasdev/imagehosting/refs/heads/main/techpage/ai%20lead%20gen.webp"
                alt="AI Automation"
                className="w-full lg:w-[100%] h-full object-cover "
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col lg:flex-row items-center justify-center w-full lg:h-max gap-8 py-0 lg:gap-16 lg:py-12 text-left  ">
          <div className="w-full lg:w-5/6  px-8 lg:p-0 flex lg:flex-row-reverse gap-8 flex-col-reverse">
            <div className="w-full lg:w-1/2 leading-7 flex flex-col justify-center items-start ">
              <h2 className="cabinetExtraBold text-xl lg:text-3xl mb-5">
                SEO Boosting Organic Authority Engine
              </h2>
              <p className="cabinetLight text-sm lg:text-lg text-left mb-5 leading-7">
                Traffic without authority is noise. Authority without traffic is
                invisible.We combine AI-driven keyword intelligence, content
                clustering, and technical SEO optimization to increase organic
                discoverability
              </p>
              <h4 className="cabinetMedium text-xl lg:text-xl">
                What we Build:
              </h4>
              <ul className="list-disc pl-5 mb-5 cabinetLight text-sm lg:text-lg">
                <li className="">AI keyword gap analysis</li>
                <li className="">Competitor reverse-engineering</li>
                <li className="">SEO-optimized landing pages</li>
                <li className="">Blog clusters targeting buying intent</li>
                <li className="">Technical performance improvements</li>
                <li className="">
                  AI-generated but human-refined content strategy
                </li>
                <li className="">Local & global search positioning</li>
              </ul>

              <p className="cabinetLight text-sm lg:text-lg text-left mb-5">
                SEO isn’t just ranking for vanity keywords, It’s owning your
                industry conversations.
              </p>
              <br />
              {/* <Button Content={"BOOK FREE DEMO"} width={200} /> */}
            </div>
            <div className="w-full lg:w-1/2 flex items-center justify-center overflow-hidden rounded-lg ">
              <img
                src="https://raw.githubusercontent.com/brightcanvasdev/imagehosting/refs/heads/main/techpage/seo.webp"
                alt="AI Automation"
                className="w-full lg:w-[70%] h-full object-cover "
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col lg:flex-row items-center justify-center w-full lg:h-max gap-8 py-0 lg:gap-16 lg:py-12 text-left ">
          <div className="w-full lg:w-5/6  px-8 lg:p-0 flex lg:flex-row gap-8 flex-col-reverse">
            <div className="w-full lg:w-1/2 leading-7 flex flex-col justify-center items-start ">
              <h2 className="cabinetExtraBold text-xl lg:text-3xl mb-5">
                CRM Integration Centralized Intelligence
              </h2>
              <p className="cabinetLight text-sm lg:text-lg text-left mb-5 leading-7">
                Disconnected tools kill growth. We integrate your CRM (HubSpot,
                Zoho, Salesforce, GoHighLevel, custom CRM, etc.) with your
                entire marketing and sales ecosystem.
              </p>
              <h4 className="cabinetMedium text-xl lg:text-xl">
                What you Get:
              </h4>
              <ul className="list-disc pl-5 mb-5 cabinetLight text-sm lg:text-lg">
                <li className="">Automated lead capture from all platforms</li>
                <li className="">Lead scoring & segmentation</li>
                <li className="">Automated nurturing workflows</li>
                <li className="">Real-time pipeline visibilit</li>
                <li className="">Performance dashboards</li>
                <li className="">Sales team activity tracking</li>
                <li className="">Revenue forecasting</li>
              </ul>

              <p className="cabinetLight text-sm lg:text-lg text-left mb-5">
                Your CRM becomes your command center not just a contact list.
              </p>
              <br />
              {/* <Button Content={"BOOK FREE DEMO"} width={200} /> */}
            </div>
            <div className="w-full lg:w-1/2 flex items-center justify-center  rounded-lg ">
              <img
                src="https://raw.githubusercontent.com/brightcanvasdev/imagehosting/refs/heads/main/techpage/crm.webp"
                alt="AI Automation"
                className="w-full lg:w-[100%] h-full object-cover "
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col lg:flex-row items-center justify-center w-full lg:h-max gap-8 py-0 lg:gap-16 lg:py-12 text-left  ">
          <div className="w-full lg:w-5/6  px-8 lg:p-0 flex lg:flex-row-reverse gap-8 flex-col-reverse">
            <div className="w-full lg:w-1/2 leading-7 flex flex-col justify-center items-start ">
              <h2 className="cabinetExtraBold text-xl lg:text-3xl mb-5">
                AI Calling Agents 24/7 Sales & Follow-Up
              </h2>
              <p className="cabinetLight text-sm lg:text-lg text-left mb-5 leading-7">
                Speed to contact = higher conversion.
              </p>
              <h4 className="cabinetMedium text-xl lg:text-xl">
                We deploy AI voice agents that:
              </h4>
              <ul className="list-disc pl-5 mb-5 cabinetLight text-sm lg:text-lg">
                <li className="">Call new leads instantly</li>
                <li className="">Qualify prospects via conversational AI</li>
                <li className="">Answer FAQs</li>
                <li className="">Schedule appointment</li>
                <li className="">Send SMS/Email follow-ups</li>
                <li className="">Re-engage cold leads</li>
              </ul>

              <p className="cabinetLight text-sm lg:text-lg text-left mb-5">
                Human-like voice. Script-trained on your brand. Available 24/7
              </p>
              <br />
              {/* <Button Content={"BOOK FREE DEMO"} width={200} /> */}
            </div>
            <div className="w-full lg:w-1/2 flex items-center justify-center overflow-hidden rounded-lg ">
              <img
                src="https://raw.githubusercontent.com/brightcanvasdev/imagehosting/refs/heads/main/techpage/ai%20calling%20agent.webp"
                alt="AI Automation"
                className="w-full lg:w-[70%] h-full object-cover "
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col lg:flex-row items-center justify-center w-full lg:h-max gap-8 py-0 lg:gap-16 lg:py-12 text-left ">
          <div className="w-full lg:w-5/6  px-8 lg:p-0 flex lg:flex-row gap-8 flex-col-reverse">
            <div className="w-full lg:w-1/2 leading-7 flex flex-col justify-center items-start ">
              <h2 className="cabinetExtraBold text-xl lg:text-3xl mb-5">
                Vibe Marketing Tech
              </h2>
              <p className="cabinetLight text-sm lg:text-lg text-left mb-5 leading-7">
                Marketing today is emotional before it’s logical. We combine AI
                analytics + creative storytelling + behavioral targeting to
                create “vibe-based marketing systems.”
              </p>
              <h4 className="cabinetMedium text-xl lg:text-xl">
                What That Means:
              </h4>
              <ul className="list-disc pl-5 mb-5 cabinetLight text-sm lg:text-lg">
                <li className="">Audience sentiment analysis</li>
                <li className="">Trend-based content triggers</li>
                <li className="">Behavioral ad sequencing</li>
                <li className="">Personalized landing experiences</li>
                <li className="">AI-powered creative testing</li>
                <li className="">Emotional brand positioning in ads</li>
              </ul>

              <p className="cabinetLight text-sm lg:text-lg text-left mb-5">
                We don’t just market products, we create digital gravity.
              </p>
              <br />
              {/* <Button Content={"BOOK FREE DEMO"} width={200} /> */}
            </div>
            <div className="w-full lg:w-1/2 flex items-center justify-center  rounded-lg ">
              <img
                src="https://raw.githubusercontent.com/brightcanvasdev/imagehosting/refs/heads/main/techpage/vibe%20marketing.webp"
                alt="AI Automation"
                className="w-full lg:w-[100%] h-full object-cover "
              />
            </div>
          </div>
        </section>
        <div className="w-full lg:w-5/6 p-8 lg:p-0">
          <Contact />
        </div>

        {/* <BlogCollection /> */}
        {/* <div className="mt-12">
        </div>
        <Footer /> */}
        <BlogsSection />
      </section>
    </motion.div>
  );
};

export default Tech;
// className="  w-full h-full flex flex-col justify-center items-center  gap-8 lg:gap-16 px-8 lg:py-10 text-center mb-20 "

{
  /* <p className="cabinetLight text-sm lg:text-base lg:w-3/4 text-left lg:text-justify ">
            Sometimes it begins quietly with an idea you can’t stop thinking
            about, a problem you know can be solved better, or a vision waiting
            for the right partner. If that sounds like you, let’s talk. Tell us
            where you are and where you want to go, and we’ll listen carefully,
            ask the right questions, and help you shape what comes next with
            clarity, creativity, and intent. Reach out when you’re ready this
            could be the start of something worth building.
          </p> */
}
