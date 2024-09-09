import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { users as usersData } from "../api";

import { FriendsCount } from "./FriendsCount";
import { FriendsTable } from "./FriendsTable";

export const Users = () => {
  const [users, setUsers] = useState(usersData);

  return (
    <>
      <FriendsCount users={users} />
      <FriendsTable users={users} setUsers={setUsers} />
    </>
  );
};
