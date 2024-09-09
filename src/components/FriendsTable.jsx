import { TableWrapper } from "./TableWrapper";
import { Qualities } from "./Qualities";
import { RemoveFriend } from "./RemoveFriend";

export const FriendsTable = ({ users, setUsers }) => {
  const handDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  if (!users.length) {
    return null;
  }

  return (
    <TableWrapper>
      {users.map(
        ({ _id, name, qualities, profession, completedMeetings, rate }) => (
          <tr key={_id}>
            <td>{name}</td>
            <td>
              {qualities.map((item) => (
                <Qualities item={item} key={item._id} />
              ))}
            </td>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{rate}</td>
            <td>
              <RemoveFriend onClick={() => handDelete(_id)} />
            </td>
          </tr>
        )
      )}
    </TableWrapper>
  );
};
