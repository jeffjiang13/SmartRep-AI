"use client"
import React, { useEffect } from 'react';

const ChatbotIframe = () => {
  useEffect(() => {
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

    iframe.src = "https://jj-smartrep.vercel.app/chatbot";
    iframe.classList.add('chat-frame');
    document.body.appendChild(iframe);

    const handleMessage = (e: MessageEvent) => {
      if (e.origin !== "https://jj-smartrep.vercel.app") return null;

      try {
        const data = JSON.parse(e.data);

        if (data && data.width && data.height) {
          iframe.style.width = data.width + "px";
          iframe.style.height = data.height + "px";
          iframe.contentWindow?.postMessage("2531aab1-1ea1-446e-8e7e-bedf41ad9021", "https://jj-smartrep.vercel.app/");
        } else {
          console.error('Unexpected message data:', e.data);
        }
      } catch (error) {
        console.error('Error parsing message data:', e.data, error);
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
