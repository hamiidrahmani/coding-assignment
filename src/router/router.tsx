import { Layout } from "@/router/Layout";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        lazy: async () => {
          const { Home } = await import("@/pages/home");
          return { Component: Home };
        },
      },
      {
        path: "favorite",
        lazy: async () => {
          const { Favorite } = await import("@/pages/favorite");
          return { Component: Favorite };
        },
      },
      {
        path: "watch-later",
        lazy: async () => {
          const { WatchLater } = await import("@/pages/watch-later");
          return { Component: WatchLater };
        },
      },
    ],
  },
  {
    path: "*",
    lazy: async () => {
      const { NotFound } = await import("@/pages/not-found");
      return { Component: NotFound };
    },
  },
]);
