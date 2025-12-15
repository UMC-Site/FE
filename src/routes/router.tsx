import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import { Suspense, lazy } from "react";

import Spinner from "../components/Spinner/Spinner";
import HomePage from "../pages/home/Home";
const ProjectsListPage = lazy(
  () => import("../pages/projects/projectsList/ProjectsList")
);
const ProjectDetailPage = lazy(
  () => import("../pages/projects/projectDetail/ProjectDetail")
);
const QnaPage = lazy(() => import("../pages/qna/Qna"));
const NotFoundPage = lazy(() => import("../pages/notFound/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "project",
        element: (
          <Suspense fallback={<Spinner />}>
            <ProjectsListPage />
          </Suspense>
        ),
      },
      {
        path: "project/:id",
        element: (
          <Suspense fallback={<Spinner />}>
            <ProjectDetailPage />
          </Suspense>
        ),
      },
      {
        path: "qna",
        element: (
          <Suspense fallback={<Spinner />}>
            <QnaPage />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<Spinner />}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
