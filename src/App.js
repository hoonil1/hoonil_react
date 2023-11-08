import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="path1" element={<AComp />} />
    </Route>,
  ),
);
function Home() {
  const navigate = useNavigate();
  return (
    <Box>
      <Box>
        <Button onClick={() => navigate("/path1?id=1")}>1번 고객 보기</Button>
        <Button onClick={() => navigate("/path1?id=2")}>2번 고객 보기</Button>
        <Button onClick={() => navigate("/path1?id=3")}>3번 고객 보기</Button>
      </Box>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
}

function AComp() {
  // 쿼리 스트링을 얻기
  const [searchParams] = useSearchParams();
  console.log(searchParams);
  console.log(searchParams.get("id"));
  console.log(searchParams.toString());
  return <Box>A Component</Box>;
}

function App(props) {
  return <RouterProvider router={routes} />;
}

export default App;
