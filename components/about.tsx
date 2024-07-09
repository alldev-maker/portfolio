"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <span className="font-bold">
          React, Next.js, Gatsby.js, Vue, Nuxt.js, Astro.js, Blazor
        </span>{" "}
        for the <span className="italic underline">Frontend</span>,{" "}
        <span className="font-bold">.NET Core, Node.js</span> for the{" "}
        <span className="italic underline">Backend</span>,{" "}
        <span className="font-bold">
          Sanity, Strapi, Contentful, Prismic, Storyblok, DatoCMS, Umbraco,
          Sitecore, Shopify, WordPress, Craft
        </span>{" "}
        for the <span className="italic underline">Headless CMS</span>, with
        extensive knowledge of Web3, UX, and user psychology. Proven
        problem-solver with high-level time and task management skills. Notable
        achievements include boosting the conversion rate of an existing website
        by 90% with improved code and design.
      </p>

      <p>
        Committed to staying updated with the{" "}
        <span className="font-medium">latest technologies</span> and
        continuously enhancing skills to{" "}
        <span className="underline">drive innovation</span> and achieve{" "}
        <span className="underline">organizational goals</span>.
      </p>
    </motion.section>
  );
}
