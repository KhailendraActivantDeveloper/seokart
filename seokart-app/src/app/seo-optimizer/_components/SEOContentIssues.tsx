import React from 'react';

interface SEOIssue {
  id: number;
  issue: string;
  description: string;
}

const issues: SEOIssue[] = [
  {
    id: 1,
    issue: 'Missing Meta Description',
    description: 'A meta description tag is missing from this page. Adding a meta description can improve your click-through rate from search engine results.',
  },
  {
    id: 2,
    issue: 'Title Tag Too Short',
    description: 'The title tag is too short. Make sure it is descriptive and includes relevant keywords.',
  },
  {
    id: 3,
    issue: 'Broken Links',
    description: 'There are broken links on the page. Fix or remove these links to improve user experience and search engine rankings.',
  },
];

const SEOContentIssues: React.FC = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">SEO Content Issues</h2>
      <ul className="space-y-4">
        {issues.map((issue) => (
          <li key={issue.id} className="p-4 bg-white rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">{issue.issue}</h3>
            <p className="text-gray-700 mt-2">{issue.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SEOContentIssues;
