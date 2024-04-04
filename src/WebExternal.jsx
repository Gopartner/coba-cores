import React from 'react';

const WebExternal = () => {

  const kpmg = "https://kpmg.com/xx/en/home.html";
  const ey = "https://www.ey.com/en_gl" ;

  return (
    <iframe
      title="External Website"
      src={kpmg}
      width="100%"
      height="500px"
      frameborder="0"
      allowfullscreen
    ></iframe>
  );
};

export default WebExternal;

