import React, { useEffect } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import ScrollToTop from "src/components/scrollToTop/ScrollToTop";
import { GlobalAlert } from "src/components/globalAlert";
import Router from "src/routes";

const banner = "\n" + "Powered by crypted.";

function App() {
  useEffect(() => {
    console.info(`%c${banner}`, "color: #8070df");
  }, []);

  return (
    <>
      <ScrollToTop />
      <GlobalAlert />
      <Router />
      {process.env.NODE_ENV === "production" ? null : (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </>
  );
}

export default App;
