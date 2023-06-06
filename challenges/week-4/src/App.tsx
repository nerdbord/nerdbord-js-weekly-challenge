import { motion } from 'framer-motion';
import GlassPlant from './images/glass_plant.png';
import HandedPlant from './images/handand_plant.png';
import LongPlant from './images/long_plant.png';
import StylishPlant from './images/stylish_plant.png';
import SmallPlant from './images/small_plant.png';
import CosyPlant from './images/cosy_plant.png';
import { useState } from 'react';

function App() {
  const [enter, setEnter] = useState(false);
  const productCard = [
    {
      id: 1,
      title: 'Glass Plant',
      img: GlassPlant,
    },
    {
      id: 2,
      title: 'Handand Plant',
      img: HandedPlant,
    },
    {
      id: 3,
      title: 'Long Plant',
      img: LongPlant,
    },
    {
      id: 4,
      title: 'Stylish Plant',
      img: StylishPlant,
    },
    {
      id: 5,
      title: 'Cosy Plant',
      img: CosyPlant,
    },
    {
      id: 6,
      title: 'Small Plant',
      img: SmallPlant,
    },
  ];
  return (
    <>
      <div className="w-screen h-screen p-10 flex justify-end">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {productCard.map((item) => (
            <motion.div
              onMouseEnter={() => {
                setEnter(true);
              }}
              onMouseLeave={() => {
                setEnter(false);
              }}
              className="w-[340px] h-[497px] rounded-xl shadow-xl"
              whileHover={{
                rotate: 4,
              }}
              key={item.id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {enter && (
                <motion.p
                  className="font-cursive text-[32px] text-white leading-[38.75px] p-3"
                  initial={{
                    position: 'static',
                    opacity: 1,
                    margin: 3,
                    translateY: -50,
                  }}
                  animate={{
                    position: 'absolute',
                    opacity: 1,
                    translateY: 10,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {item.title}
                </motion.p>
              )}
              <img
                className="w-full h-full rounded-xl"
                src={item.img}
                alt={item.title}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
