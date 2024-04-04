import React, { useState, useEffect } from 'react';

const CorsAnywhereViewer = ({ url }) => {
  const [pageContent, setPageContent] = useState('');

  useEffect(() => {
    const fetchCorsAnywhereContent = async () => {
      try {
        const response = await fetch(`https://your-cors-anywhere-server.herokuapp.com/${encodeURIComponent(url)}`);
        if (response.ok) {
          const data = await response.text();
          setPageContent(data);
        } else {
          throw new Error('Network response was not ok.');
        }
      } catch (error) {
        console.error('Error fetching CORS Anywhere content:', error);
      }
    };

    fetchCorsAnywhereContent();
  }, [url]);

  return (
    <div>
      <h1>CORS Anywhere Viewer</h1>
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
    </div>
  );
};

export default CorsAnywhereViewer;

