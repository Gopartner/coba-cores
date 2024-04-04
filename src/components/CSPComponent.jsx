import React, { useEffect, useState } from 'react';

const CSPComponent = () => {
  const [cspHeader, setCSPHeader] = useState("frame-ancestors 'none'");

  useEffect(() => {
    const metaTag = document.querySelector('meta[name="Content-Security-Policy"]');
    if (metaTag) {
      metaTag.setAttribute('content', cspHeader);
    } else {
      console.error('Tag <meta name="Content-Security-Policy"> tidak ditemukan.');
    }
  }, [cspHeader]);

  return (
    <div>
      <h1>Kebijakan Konten Keamanan (CSP)</h1>
      <p>Komponen ini menetapkan kebijakan CSP dengan frame-ancestors ke 'none'.</p>
      <p>Ini akan memastikan konten tidak dapat disematkan dalam iframe dari domain lain.</p>
    </div>
  );
};

export default CSPComponent;

