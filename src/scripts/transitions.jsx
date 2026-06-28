// Page fade-in wrapper. Each route is keyed by pathname in App.jsx, so this
// element remounts on navigation and the CSS `pageFadeIn` animation re-runs.
// Replaces framer-motion (~150KB) with a zero-dependency CSS fade.
const PageTransition = ({ children }) => {
  return <div className="page page-transition">{children}</div>;
};

export default PageTransition;
