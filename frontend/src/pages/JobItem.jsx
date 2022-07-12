import React from 'react';

function JobItem({ job }) {
  const { title, location, type, company, created_at } = job;

  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
}

export default JobItem;
