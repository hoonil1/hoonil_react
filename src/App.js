import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

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
      <Flex gap={"50px"}>
        {/*리액트에서 라우트 사용시 a 태그 사용 불가*/}
        <Box>
          <a href="/apath">A로 이동 1</a>
        </Box>
        <Box>
          <a href="/bpath">B로 이동 1</a>
        </Box>
        {/*대신 Link 컴포넌트를 사용하면 된다.*/}
        <Box>
          <Link to={"/apath"}>A로 이동 2</Link>
        </Box>
        <Box>
          <Link to={"/bpath"}>B로 이동 2</Link>
        </Box>
      </Flex>
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
