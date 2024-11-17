import { delay, motion } from "framer-motion";
import "./App.css";
import { forwardRef } from "react";
import { i } from "framer-motion/client";

function App() {
  // const Button = forwardRef((props,ref) => {
  //   return <button>...</button>
  // });
  // const MotionButton = motion(Button)

  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.button
        className="bg-black text-white px-3 py-2 rounded-md"
        animate={{
          backgroundColor: "#f00",
          scaleX :2,
          scaleY:2,
          y:'50%'
        }}
        transition={{
          repeatDelay:0.5,
          repeatType :'reverse',
          delay: 2,
          ease : 'easeInOut',
          repeat : 4, 
          scaleX: {
            delay :2,
            repeatDelay :2,
          }
        }}
        
      >
        Hello world
      </motion.button>
    </div>
  );
}

export default App;
