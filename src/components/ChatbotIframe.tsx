"use client"
import React, { useEffect } from 'react';

const ChatbotIframe = () => {
  useEffect(() => {
    const existingIframe = document.querySelector('.chat-frame');
    if (existingIframe) return;

    const iframe = document.createElement("iframe");

    const iframeStyles = (styleString:any) => {
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
        z-index: 999999;
      }
    `);

    iframe.src = "https://jj-smartrep.vercel.app/chatbot";
    iframe.classList.add('chat-frame');
    document.body.appendChild(iframe);

    const handleMessage = (e:any) => {
      if (e.origin !== "https://jj-smartrep.vercel.app") return null;
      try {
        const dimensions = JSON.parse(e.data);
        iframe.style.width = dimensions.width + "px";
        iframe.style.height = dimensions.height + "px";
      } catch (error) {
        console.error('Invalid message data:', e.data);
      }
      iframe.contentWindow?.postMessage("2531aab1-1ea1-446e-8e7e-bedf41ad9021", "https://jj-smartrep.vercel.app/");
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
      if (document.body.contains(iframe)) {
        document.body.removeChild(iframe);
      }
    };
  }, []);

  return null;
};

export default ChatbotIframe;
