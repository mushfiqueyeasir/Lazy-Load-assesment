import ProfileCard from "./component/ProfileCard";
import useUsers from "./hooks/useUsers";

function App() {
  const [users, loading] = useUsers();
  if (loading) {
    return <h1>loading....</h1>;
  }
  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-3 px-3">
      {users.map((user) => (
        <ProfileCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default App;
