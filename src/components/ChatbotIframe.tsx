"use client"
import React, { useEffect } from 'react';

const ChatbotIframe = () => {
  useEffect(() => {
    // Ensure there's only one instance of the iframe
    const existingIframe = document.querySelector('.chat-frame');
    if (existingIframe) return;

    const iframe = document.createElement("iframe");

    const iframeStyles = (styleString: string) => {
      const style = document.createElement('style');
      style.textContent = styleString;
      document.head.append(style);
    };

    iframeStyles(`
      .chat-frame {
        position: fixed;
        bottom: 20px;
        right: 20px;
        border: none;
        z-index: 2147483647; /* Maximum z-index value to ensure it's on top */
      }
    `);

    iframe.src = "http://localhost:3000/chatbot";
    iframe.classList.add('chat-frame');
    document.body.appendChild(iframe);

    const handleMessage = (e: MessageEvent) => {
      if (e.origin !== "http://localhost:3000") return;

      if (typeof e.data === 'string' && e.data.startsWith('{')) {
        try {
          const dimensions = JSON.parse(e.data);
          iframe.style.width = `${dimensions.width}px`;
          iframe.style.height = `${dimensions.height}px`;
          iframe.contentWindow?.postMessage("2531aab1-1ea1-446e-8e7e-bedf41ad9021", "http://localhost:3000/");
        } catch (error) {
          console.error('Error parsing message data:', e.data, error);
        }
      } else {
        console.error('Unexpected message data:', e.data);
      }
    };

    window.addEventListener("message", handleMessage);

    // Cleanup the event listener and iframe on component unmount
    return () => {
      window.removeEventListener("message", handleMessage);
      document.body.removeChild(iframe);
    };
  }, []);

  return null; // This component does not render anything itself
};

export default ChatbotIframe;
