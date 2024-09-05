import React from 'react';

type Props = {
    count: number|string;
    total: number|string;
    label: string
}

const AuditInfo:React.FC<Props> = ({ count, total, label }) => {
  return (
    <div className="optimizer-auditInfo2 flex-grow">
      <div className="flex items-baseline justify-center mb-2">
        <h2 className="Text--heading2xl mb-0 green-text">{count}</h2>
        <span>/{total}</span>
      </div>
      <h2 className="Text--headingMd text-subbed mb-0">{label}</h2>
    </div>
  );
};

export default AuditInfo;
