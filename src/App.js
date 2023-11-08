import React, { Children, useEffect, useState } from "react";
import axios from "axios";
import { Box, Select, Spinner, Text } from "@chakra-ui/react";

function App(props) {
  const [employeeId, setEmployeeId] = useState(0);
  const [employee, setEmployee] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [employeeIdList, setEmployeeIdList] = useState([]);
  useEffect(() => {
    axios
      .get("/api/main1/sub7")
      .then((response) => setEmployeeIdList(response.data));
  }, []);
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
        {Children.toArray(
          employeeIdList.map((id) => <option value={id}>{id}</option>),
        )}
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
