import React from "react";
import { motion } from "framer-motion";

import { Gallery, Navbar } from "../components";
import { fadeIn, slideIn, zoomIn } from "../utils";

import { SectionWrapper } from '../hoc';

import { image } from "../constants";
import { styles } from "../js";

const DocumentationPage = () => {
  return (
    <>
      <div className="blue-gradient bg-cover bg-center bg-no-repeat text-black-200">
        <Navbar />
      </div>
      <Gallery />
    </>
  );
};

export default DocumentationPage;
