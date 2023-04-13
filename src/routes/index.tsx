import { ElementType, lazy } from "react";
import { useRoutes } from "react-router-dom";

import ErrorPage from "src/pages/ErrorPage";

import AsyncBoundary from "src/components/asyncBoundary";
import SpinnerUI from "src/components/loadingUI";
import HomeLayout from "src/components/layout/HomeLayout";

const Loadable = (Component: ElementType) => (props: any) => {
  return (
    <AsyncBoundary
      errorFallback={<ErrorPage />}
      suspenseFallback={<SpinnerUI />}
    >
      <Component {...props} />
    </AsyncBoundary>
  );
};

const Home = Loadable(lazy(() => import("../pages/TabviewPage")));

const router = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useRoutes([
    // Main Routes
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        { element: <Home />, index: true },
        {
          path: "tab",
          element: <Home />,
        },
      ],
    },

    // Error Routes
    { path: "*", element: <ErrorPage /> },
  ]);
};

export default router;
