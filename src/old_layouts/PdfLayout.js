const PdfLayout = ({ children }) => {

  return (
    <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">
      {children}
    </div>
  );
};

export default PdfLayout;
