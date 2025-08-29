const TwoColumnLayout = ({ children, reverse = false, extraClass = '' }) => {
  const sectionClasses = `block-2col${extraClass ? ` ${extraClass}` : ''}`;
  const contentClasses = `content-2col${reverse ? ' reverse' : ''}`;

  return (
    <section className={sectionClasses}>
      <div className="container">
        <div className={contentClasses}>{children}</div>
      </div>
    </section>
  );
};

export default TwoColumnLayout;
