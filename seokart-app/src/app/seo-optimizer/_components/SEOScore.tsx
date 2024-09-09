import Image from 'next/image';
import React from 'react';

interface SEOScoreProps {
  score: string;
}

const SEOScore: React.FC<SEOScoreProps> = ({ score }) => {
  return (
    <div className="flex items-center optimizerScore gap-3 justify-center">
      <div className="optimizer-logo">
        <Image src="images/seokart-logo-icon.svg" alt="Logo" width="50" height="50" />
      </div>
      <div className="optimizer-auditInfo">
        <div className="flex items-baseline mb-1">
          <h2 className="Text--headingXl mb-0 green-text">{score}</h2>
        </div>
        <h2 className="text-headingMd mb-0">SEO SCORE</h2>
      </div>
    </div>
  );
};

export default SEOScore;
