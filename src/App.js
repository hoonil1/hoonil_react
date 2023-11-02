import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  CardFooter,
  Flex,
  SimpleGrid,
  Button,
  Table,
  Th,
  Tbody,
  Thead,
  Tr,
  Td,
} from "@chakra-ui/react";

function App() {
  return (
    <>
      <SimpleGrid columns={1} gap={5}>
        <Box>
          {/* Table>Thead>Tr>Th*4>lorem1^^^Tbody>Tr*5>Td*4>lorem1 */}
          <Table>
            <Thead>
              <Tr>
                <Th>Lorem.</Th>
                <Th>Inventore!</Th>
                <Th>Repellat.</Th>
                <Th>Sapiente!</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Eius.</Td>
                <Td>Ex?</Td>
                <Td>Neque.</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Voluptas.</Td>
                <Td>Maxime?</Td>
                <Td>Obcaecati!</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Labore.</Td>
                <Td>Veniam.</Td>
                <Td>Consequuntur.</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Quas.</Td>
                <Td>Iure?</Td>
                <Td>Sed.</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Officia?</Td>
                <Td>Excepturi.</Td>
                <Td>Minus.</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
        <Box>
          <Table variant="simple" size={"sm"}>
            <Thead>
              <Tr>
                <Th>Lorem.</Th>
                <Th>Hic!</Th>
                <Th>Odio?</Th>
                <Th>Corporis?</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Nam!</Td>
                <Td>Repellat?</Td>
                <Td>Facere.</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </SimpleGrid>
    </>
  );
}

export default App;
