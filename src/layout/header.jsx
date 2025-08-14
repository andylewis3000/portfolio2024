// import { useState } from 'react';
// import Navbar from '../components/header/navbar';

// const Header = () => {
//   // Header color change on scroll
//   const [color, setColor] = useState(false);
//   const changeColor = () => {
//     if (window.scrollY >= 72) {
//       setColor(true);
//     } else {
//       setColor(false);
//     }
//   };

//   window.addEventListener('scroll', changeColor);

//   return (
//     <>
//       <section className={color ? 'header header-bg-color' : 'header'}>
//         <div className="container">
//           <div className="header-content">
//             <Navbar />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Header;

import { useState, useEffect } from 'react';
import Navbar from '../components/header/navbar';

const Header = () => {
  // Header color change on scroll
  const [color, setColor] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 72) {
        setColor(true);
      } else {
        setColor(false);
      }
    };

    // Add event listener on mount
    window.addEventListener('scroll', changeColor);

    // Cleanup function to remove event listener on unmount
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      <section className={color ? 'header header-bg-color' : 'header'}>
        <div className="container">
          <div className="header-content">
            <Navbar />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
