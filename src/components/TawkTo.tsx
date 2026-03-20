import { useEffect } from "react";

// SETUP: Go to tawk.to → sign up → create a property for uncodeai.io
// Then paste your Property ID and Widget ID below (from the widget embed code)
const TAWK_PROPERTY_ID = "69bd656e977ac51c36883e84";
const TAWK_WIDGET_ID = "1jk5t8efp";

declare global {
  interface Window {
    Tawk_API: object;
    Tawk_LoadStart: Date;
  }
}

const TawkTo = () => {
  useEffect(() => {
    if (!TAWK_PROPERTY_ID || TAWK_PROPERTY_ID === "YOUR_PROPERTY_ID") return;

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://embed.tawk.to/${TAWK_PROPERTY_ID}/${TAWK_WIDGET_ID}`;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default TawkTo;
