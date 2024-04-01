"use client";
import React, { useEffect } from "react";

function GoogleReview() {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "EmbedSocialHashtagScript";
    script.src = "https://embedsocial.com/cdn/ht.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div
      className="embedsocial-hashtag"
      data-ref="29e49bfcc0393b026bb741e3d86cd4c8f9387276"
    >
      <style>
        {`
          .embedsocial-hashtag .feed-powered-by-es {
            display: none !important;
          }
          .embedsocial-hashtag .feed-powered-by-es-badge-img {
            display: none !important;
          }
        `}
      </style>
      <a
        className="feed-powered-by-es feed-powered-by-es-badge-img"
        href="https://embedsocial.com/blog/embed-google-reviews/"
        target="_blank"
        title="Embed Google reviews"
      >
        <img
          src="https://embedsocial.com/cdn/images/embedsocial-icon.png"
          alt="EmbedSocial"
        />
      </a>
    </div>
  );
}

export default GoogleReview;
