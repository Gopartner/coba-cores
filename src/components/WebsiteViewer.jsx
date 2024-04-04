import React, { useState, useEffect } from 'react';

const WebsiteViewer = ({ url }) => {
  const [pageContent, setPageContent] = useState('');

  useEffect(() => {
    const fetchWebsiteContent = async () => {
      try {
        const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
        if (response.ok) {
          const data = await response.json();
          setPageContent(data.contents);
        } else {
          throw new Error('Network response was not ok.');
        }
      } catch (error) {
        console.error('Error fetching website content:', error);
      }
    };

    fetchWebsiteContent();
  }, [url]);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
    </div>
  );
};

export default WebsiteViewer;

