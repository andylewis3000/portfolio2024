const GlowPulse = ({ position, size }) => {
  return <div className={`glow-pulse ${position || ''} ${size || ''}`}></div>;
};

export default GlowPulse;
