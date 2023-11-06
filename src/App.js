import { useState } from "react";
import { Input, Text } from "@chakra-ui/react";
import { useImmer } from "use-immer";

function App(props) {
  const [person, setPerson] = useState({ name: "son", city: "seoul" });
  // immer 사용
  const [user, updateUser] = useImmer({
    name: "lee",
    city: "kangwon",
  });

  function handleNameChange(e) {
    const nextPerson = { ...person };
    nextPerson.name = e.target.value;
    setPerson(nextPerson);
  }

  function handleCityChange(e) {
    const nextPerson = { ...person };
    nextPerson.city = e.target.value;

    setPerson(nextPerson);
  }

  function handleUserNameChange(e) {
    updateUser((draft) => {
      draft.name = e.target.value;
    });
  }

  function handleUserCityChange(e) {
    updateUser((draft) => {
      draft.city = e.target.value;
    });
  }

  return (
    <div>
      <Input value={person.name} onChange={handleNameChange}></Input>
      <Input value={person.city} onChange={handleCityChange}></Input>
      <Text>
        {person.name}은 {person.city}에 삽니다.
      </Text>

      <hr />
      <Input value={user.name} onChange={handleUserNameChange}></Input>
      <Input value={user.city} onChange={handleUserCityChange}></Input>
      <Text>
        {user.name} 은 {user.city} 에 삽니다.
      </Text>
    </div>
  );
}

export default App;
