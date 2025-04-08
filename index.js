
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaUserAstronaut, FaGlobe, FaStar } from 'react-icons/fa'

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-black text-blue-300 min-h-screen font-mono">
      <header className="flex justify-between items-center p-4 border-b border-blue-500">
        <h1 className="text-xl futuristic-glow">PERSONAL WEBSITE</h1>
        <div className="flex gap-4">
          <button className="nav-button">DESIGN</button>
          <button className="nav-button">INFOZONE</button>
          <button className="nav-button">EXPLORE</button>
        </div>
      </header>

      <main className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 p-6 futuristic-bg">
        <motion.div
          className="rounded-2xl p-4 border border-blue-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://via.placeholder.com/200"
            alt="Profile"
            className="rounded-xl border border-blue-400 mb-4"
          />
          <div className="flex justify-around mt-2">
            <FaUserAstronaut className="icon-glow" />
            <FaGlobe className="icon-glow" />
            <FaStar className="icon-glow" />
          </div>
        </motion.div>

        <motion.div
          className="col-span-1 flex flex-col items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="text-5xl futuristic-glow">2025</h2>
          <p className="text-blue-200 text-center">PERSONAL MODE</p>
          <div className="animated-grid mt-4"></div>
        </motion.div>

        <motion.div
          className="rounded-xl p-4 border border-blue-500"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl futuristic-glow">WELCOME</h3>
          <p className="text-sm mt-2 text-blue-400">
            This futuristic portfolio belongs to Auly Ullah. Designed with sci-fi vision and clean UI structure.
          </p>
          <button className="mt-4 nav-button">ENTER</button>
        </motion.div>
      </main>

      <footer className="text-center py-6 border-t border-blue-500 text-blue-500">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          © 2025 Auly Ullah — All Rights Reserved
        </motion.p>
      </footer>
    </div>
  )
}
