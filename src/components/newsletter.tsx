import { ReactNode, useEffect } from "react";

declare global {
  interface Window {
    SubstackFeedWidget?: {
      substackUrl: string;
      posts: number;
      layout: string;
    };
  }
}

function Newsletter() {
    useEffect(() => {
        window.SubstackFeedWidget = {
            substackUrl: "gustx21.substack.com",
            posts: 3,
            layout: "center"
        };

        const script = document.createElement("script");
        script.src = "https://substackapi.com/embeds/feed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div id="substack-feed-embed" className="cards"></div>
    )
};

export default Newsletter;