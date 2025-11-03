/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
export function ProjectCard({ card, index = 0 }) {
  const { name, category, image, details, Link } = card;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="w-full min-w-[380px] px-2 h-96"
    >
      <div className="relative w-full h-full overflow-hidden transition-shadow duration-300 shadow-lg rounded-2xl group hover:shadow-2xl">
        {/* Image */}
        <motion.img
          src={image}
          alt={name}
          className="object-cover w-full h-full"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.75 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black backdrop-blur-sm"
        />

        {/* Content - centered button and details */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="mb-8 text-center"
          >
            <h3 className="mb-2 text-3xl font-bold tracking-tight text-white">
              {name}
            </h3>
            <p className="mb-3 text-sm font-medium text-gray-200">{category}</p>
            <p className="max-w-xs text-xs text-gray-300 line-clamp-2">
              {details}
            </p>
          </motion.div>

          {/* Preview button */}
          <motion.a
            href={Link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="px-8 py-3 font-semibold text-black transition-colors duration-200 bg-white rounded-full shadow-xl hover:bg-gray-100 active:bg-gray-200 hover:shadow-2xl"
          >
            Preview
          </motion.a>
        </div>

        {/* Border accent */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 border-2 pointer-events-none rounded-2xl border-white/20"
        />
      </div>
    </motion.div>
  );
}
