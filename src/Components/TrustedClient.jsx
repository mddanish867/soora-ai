
import { useEffect } from "react"
import { motion, useAnimationControls } from "framer-motion"
import { Instagram, Twitter, Facebook, Linkedin, Youtube, EyeIcon, Table2, CheckCheckIcon } from "lucide-react"

export default function TrustedClient() {
  const icons = [Instagram, Twitter, Facebook, Linkedin, Youtube, EyeIcon, Table2, CheckCheckIcon]
  const controls = useAnimationControls()

  useEffect(() => {
    const animate = async () => {
      await controls.start({
        x: ["0%", "-50%"],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        },
      })
    }

    animate()
  }, [controls])

  return (
    <div className="relative w-full overflow-hidden bg-transparent h-20">
      <motion.div
        className="flex space-x-8 absolute left-0 top-0"
        animate={controls}
        style={{ width: "200%" }}
      >
        {[...icons, ...icons].map((Icon, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center w-16 h-16 bg-transparent rounded-full shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon className="w-8 h-8 text-blue-400" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}