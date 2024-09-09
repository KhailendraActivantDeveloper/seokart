import React from 'react';

interface SEOSectionProps {
  title: string;
  children: React.ReactNode;
}

const SEOSection: React.FC<SEOSectionProps> = ({ title, children }) => {
  return (
    <div className="seo-optimizer--innerArea">
      <h1 className="Text--headingLg">{title}</h1>
      <div className="flex gap24">
        {children}
      </div>
    </div>
  );
};

export default SEOSection;
