import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Select, Spinner, Text } from "@chakra-ui/react";

function App(props) {
  const [employeeId, setEmployeeId] = useState(0);
  const [employee, setEmployee] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/api/main1/sub5?id=" + employeeId)
      .then((response) => response.data)
      .then((data) => setEmployee(data))
      .catch((error) => setEmployee(null))
      .finally(() => setIsLoading(false));
  }, [employeeId]);
  return (
    // 직원 번호를 선택하면 직원의 이름이 출력
    <div>
      <Select
        placeholder="직원 번호를 선택하세요"
        onChange={(e) => setEmployeeId(e.target.value)}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </Select>
      <Box>
        {isLoading && <Spinner />}
        {isLoading || (
          <>
            {employee === null ? (
              <Text>조회 결과가 없습니다</Text>
            ) : (
              <>
                <Text>조회결과 : </Text>
                <Text>ID : {employee.id}</Text>
                <Text>LASTNAME : {employee.lastName}</Text>
                <Text>FIRSTNAME : {employee.firstName}</Text>
                <Text>BIRTH : {employee.birthDate}</Text>
                <Text>PHOTO : {employee.photo}</Text>
                <Text>NOTES : </Text>
                <textarea
                  name=""
                  id=""
                  cols="50"
                  rows="10"
                  style={{ border: "1px solid black" }}
                >
                  {employee.notes}
                </textarea>
              </>
            )}
          </>
        )}
      </Box>
    </div>
  );
}

export default App;
