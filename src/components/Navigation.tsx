import { motion, useAnimationControls } from "framer-motion";
import { useState, useEffect } from "react";

const Navigation: React.FC<{ position: 'left' | 'right' }> = ({ position }) => {
  const containerVariants = {
    close: {
      width: "5rem",
      transition: {
        type: "spring",
        damping: 15,
        duration: 0.5,
      },
    },
    open: {
      width: "16rem",
      transition: {
        type: "spring",
        damping: 15,
        duration: 0.5,
      },
    },
  };

  const svgVariants = {
    close: {
      rotate: 360,
    },
    open: {
      rotate: 180,
    },
  };

  const [isOpen, setIsOpen] = useState(false);


  const containerControls = useAnimationControls();
  const svgControls = useAnimationControls();

  useEffect(() => {
    if (isOpen) {
      containerControls.start("open");
      svgControls.start("open");
    } else {
      containerControls.start("close");
      svgControls.start("close");
    }
  }, [isOpen]);

  const handleOpenClose = () => {
    setIsOpen(!isOpen);

  };

  return (
    <>
      <motion.nav
        variants={containerVariants}
        animate={containerControls}
        initial="close"
        className={`bg-blue-500 flex flex-col z-10 gap-20 p-5 absolute top-0 ${position === "left" ? "left-0" : "right-0"} h-full`}
      >
        <div className="flex flex-row w-full justify-between place-items-center">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-700 rounded-full" />
          <button
            className="p-1 rounded-full flex"
            onClick={() => handleOpenClose()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-8 h-8 stroke-slate-100"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={svgVariants}
                animate={svgControls}
                d={position === "left" ? "m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" : "m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"} // Conditional d attribute
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }} />
            </svg>
          </button>
        </div>
      </motion.nav>

    </>
  );
};

export default Navigation;
