import React, { useEffect } from 'react';

const LiveChatWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://path-to-live-chat-widget.js'; // Replace with actual widget URL
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default LiveChatWidget;
