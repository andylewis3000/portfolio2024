// import { keyframes } from '@emotion/react';

// export const customAnimation = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(-10px);
//     transition: all 0.3s ease-in;
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// export const defaultRevealProps = {
//   cascade: true,
//   damping: 0.2,
//   fraction: 0.75,
//   keyframes: customAnimation,
//   triggerOnce: true,
// };

import { keyframes } from '@emotion/react';

export const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.3s ease-in;
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const defaultRevealProps = {
  cascade: true,
  damping: 0.2,
  fraction: 0.75,
  keyframes: customAnimation,
  triggerOnce: true,
};
