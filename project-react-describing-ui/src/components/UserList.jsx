function User({ name }) {
  return <li>{name}</li>;
}

function UserList() {
  const users = ["Lei", "Alex", "Kai"];

  return (
    <div>
      <h3>User List</h3>
      <ul>
        {users.map((user, index) => (
          <User key={index} name={user} />
        ))}
      </ul>
    </div>
  );
}

export default UserList;
