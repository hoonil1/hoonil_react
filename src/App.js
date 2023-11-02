import { Button, useToast } from "@chakra-ui/react";

function App() {
  const toast = useToast();
  return (
    <>
      <Button
        onClick={() =>
          toast({
            description: "게시물이 저장되었습니다.",
            title: "저장완료",
            duration: 500,
            position: "center",
            isClosable: true,
          })
        }
      >
        토스트 띄우기
      </Button>
      <Button
        onClick={() =>
          toast({
            description: "게시물이 저장되지 않았습니다.",
            title: "저장실패",
            duration: 500,
            position: "top",
            isClosable: true,
            status: "error",
          })
        }
      >
        토스트 띄우기
      </Button>
    </>
  );
}

export default App;
