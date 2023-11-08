import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Box } from "@chakra-ui/react";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeComponent />}>
      <Route path="apath" element={<AComp />} />
      <Route path="bpath" element={<BComp />} />
    </Route>,
  ),
);

function HomeComponent() {
  return (
    <Box>
      공통된 요소들
      <Outlet />
    </Box>
  );
}

function AComp() {
  return <Box>A 컴포넌트</Box>;
}

function BComp() {
  return <Box>B 컴포넌트</Box>;
}

function App(props) {
  return <RouterProvider router={routes} />;
}

export default App;
