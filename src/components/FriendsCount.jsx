import { renderPhrase } from "../helpers/renderPhrase";

export const FriendsCount = ({ users }) => {
  return (
    <div className={"badge bg-" + (users.length ? "primary" : "danger")}>
      {renderPhrase(users.length)}
    </div>
  );
};
