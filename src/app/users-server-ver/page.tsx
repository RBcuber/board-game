import User from "@/types/User";

const UsersServerVersion = async () => {
  const res = await fetch("https://dummyjson.com/users", {
    // cache: "force-cache",
    // cache: "force-cache",
    // next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw Error("Failed to fetch");
  }
  const { users } = await res.json();
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-semibold mb-4 text-gray-800">Users</h1>
            <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {users.map((user: User) => (
                    <li
                        key={user.id}
                        className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="shrink-0 h-12 w-12 rounded-full bg-indigo-500 text-white flex items-center justify-center font-medium">
                            {user.firstName?.[0]?.toUpperCase() ?? user.email[0]?.toUpperCase()}
                        </div>
                        <div className="min-w-0">
                            <div className="text-sm font-medium text-gray-900 truncate">
                                {user.firstName ? `${user.firstName} ${user.lastName}` : user.email}
                            </div>
                            <div className="text-xs text-gray-500 truncate">{user.email}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
    
  );
};

export default UsersServerVersion;