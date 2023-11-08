import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { Box, Button, Flex } from "@chakra-ui/react";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeComponent />}>
      <Route path="apath" element={<AComp />} />
      <Route path="bpath" element={<BComp />} />
    </Route>,
  ),
);

function HomeComponent() {
  // 경로 이동시 useNavigate Hook 메소드 사용
  const navigate = useNavigate();
  return (
    <Box>
      <Flex gap={"50px"}>
        <Box>
          <Button onClick={() => (window.location.href = "/apath")}>
            {/* 자바스크립트를 이용한 태그 구현 */}
            A로 이동
          </Button>
        </Box>
        <Box>
          <Button onClick={() => (window.location.href = "/bpath")}>
            B로 이동
          </Button>
        </Box>
        <Box>
          <Button onClick={() => navigate("/apath")}>A로 이동2</Button>
        </Box>
        <Box>
          <Button onClick={() => navigate("/bpath")}>B로 이동2</Button>
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
