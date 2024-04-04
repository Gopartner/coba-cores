import React from 'react';
import WebsiteViewer from './components/WebsiteViewer';

const App = () => {

  const ey = "https://www.ey.com/en_gl";

  return (
    <div>
      <WebsiteViewer url={ey} />
    </div>
  );
};

export default App;

