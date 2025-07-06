import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Let&apos;s Connect! 🚀
      </motion.h2>

      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Location Card */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-6 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                📍
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                Location
              </h3>
              <p className="text-neutral-300">{CONTACT.address}</p>
            </div>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-6 backdrop-blur-sm border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                📞
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">Phone</h3>
              <a
                href={`tel:${CONTACT.phoneNo}`}
                className="text-neutral-300 hover:text-green-400 transition-colors duration-200"
              >
                {CONTACT.phoneNo}
              </a>
            </div>
          </motion.div>

          {/* Email Card */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-orange-900/20 to-red-900/20 p-6 backdrop-blur-sm border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white">
                ✉️
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">Email</h3>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-neutral-300 hover:text-orange-400 transition-colors duration-200"
              >
                {CONTACT.email}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block rounded-full bg-gradient-to-r from-purple-600 to-blue-600 p-1"
          >
            <div className="rounded-full bg-neutral-900 px-8 py-4">
              <p className="text-lg font-medium text-white">
                Ready to collaborate? Let&apos;s build something amazing
                together! 💫
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 flex justify-center space-x-6"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 text-white hover:bg-neutral-700 transition-colors duration-200"
          >
            <span className="text-xl">🐙</span>
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 text-white hover:bg-neutral-700 transition-colors duration-200"
          >
            <span className="text-xl">💼</span>
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 text-white hover:bg-neutral-700 transition-colors duration-200"
          >
            <span className="text-xl">🐦</span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
