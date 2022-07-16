import { useState, useMemo } from "react";
import {
  Container,
  DerivedStateContainer,
  SubContainer,
  Title,
} from "../global/styledPages/styledSkills";

const Skills = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Omar", age: 28 },
    { id: 2, name: "Mariam", age: 27 },
    { id: 3, name: "Menna", age: 30 },
    { id: 4, name: "Ahmed", age: 31 },
  ]);
  const [selectedUserId, setSelectedUserId] = useState<number | null>();
  const selectedUser = useMemo(
    () => users.find((user) => user.id === selectedUserId),
    [users, selectedUserId]
  );

  function incrementAge(id) {
    setUsers((currectUser) => {
      return currectUser.map((user) => {
        if (user.id === id) {
          return { ...user, age: user.age + 1 };
        } else {
          return user;
        }
      });
    });
  }

  function selectUser(id) {
    setSelectedUserId(id);
  }

  const usersMap = users.map((user) => (
    <div key={user.id}>
      {user.name} is {user.age} years old{" "}
      <button onClick={() => incrementAge(user.id)}>Increment</button>
      <button onClick={() => selectUser(user.id)}>Select</button>
    </div>
  ));

  return (
    <Container>
      <SubContainer>
        <Title>Derived State</Title>
        <DerivedStateContainer>
          <h3>
            Selected User:{" "}
            {selectedUser == null
              ? "None"
              : `${selectedUser.name} is ${selectedUser.age}`}{" "}
            years old
          </h3>
          {usersMap}
        </DerivedStateContainer>
      </SubContainer>
    </Container>
  );
};

export default Skills;
