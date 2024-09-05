import Image from 'next/image';
import React from 'react';

interface CardProps {
  title: string;
  total: string | number;
  data: { label: string; value: string | number; badge: string }[];
}

const Card: React.FC<CardProps> = ({ title, total, data }) => {
  return (
    <div className="card">
      <h5 className="Text--headingSm mt-0">{title}</h5>
      <div className="analytics-graphBox">
        <div className="analytics-graph h-32 bg-gray-100 flex items-center justify-center">
          Graph here
        </div>
      </div>
      <div className="analytics-graphInfo">
        <div className="analytics-graphInfo--box  flex justify-between items-center">
          <h5 className="Text--headingSm mb-0">Total</h5>
          <div className="flex items-center gap-3">
            <span className="keywordCompetitor-rank">{total}</span>
            <span className="badge keywordBadge">
              <Image width="20" height="20" src="images/equal-arrow.svg" alt="Equal arrow" />
            </span>
          </div>
        </div>
        {data.map((item, index) => (
          <div key={index} className="analytics-graphInfo--box flex justify-between items-center">
            <h5 className="Text--headingSm mb-0">
              <span className={` ${item.badge}`}></span> {item.label}
            </h5>
            <div className="flex items-center gap-3">
              <span className="keywordCompetitor-rank">{item.value}</span>
              <span className="badge keywordBadge">
                <Image width="20" height="20" src="images/equal-arrow.svg" alt="Equal arrow" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
