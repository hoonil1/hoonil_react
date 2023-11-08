import React, { useEffect, useState } from "react";
import { Box, Select, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";

function App(props) {
  const [customerId, setCustomerId] = useState(0);
  const [customer, setCustomer] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [customerIdList, setCustomerIdList] = useState({});

  useEffect(() => {
    // 고객번호들 가져오기
    axios
      .get("/api/main1/sub6")
      .then((response) => setCustomerIdList(response.data));
  }, []);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/api/main1/sub4?id=" + customerId)
      .then((response) => response.data)
      .then((data) => setCustomer(data))
      .catch(() => setCustomer(null))
      .finally(() => setIsLoading(false));
  }, [customerId]);
  return (
    <div>
      <Select
        placeholder="고객 번호를 선택하세요"
        onChange={(e) => setCustomerId(e.target.value)}
      >
        {customerIdList.map((id) => (
          <option value={id}>{id}</option>
        ))}
      </Select>
      <Box>
        {isLoading && <Spinner />}
        {isLoading || (
          <>
            {customer === null ? (
              <Text>조회한 고객이 없습니다</Text>
            ) : (
              <Text>고객 이름 : {customer.name}</Text>
            )}
          </>
        )}
      </Box>
    </div>
  );
}

export default App;
