import Image from 'next/image';
import React from 'react';

type Props = {
  cardData: string[]
}

const SEOIssues: React.FC<Props> = ({cardData}) => {
  return (
    <div className="card seoOptimizer-left">
      {cardData.map((issue, index) => (
        <div key={index} className="flex justify-between items-center gap-3 mb-16">
          <p>{issue}</p>
          <span>
            <Image src="images/check-green.svg" alt="Check" width={20} height={20} />
          </span>
        </div>
      ))}
    </div>
  );
};

export default SEOIssues;
