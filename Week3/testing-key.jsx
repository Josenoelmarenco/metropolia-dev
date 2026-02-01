const users = [
  { id: 1, name: "Noel" },
  { id: 2, name: "Carl" },
  { id: 3, name: "Anastasio" },
];

<ul>
    {users.map((user) =>(
        <li key={user.id}>Noel (#{user.name})</li>
        ))}
</ul>

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(u => u * 2);
console.log(doubled); // [2, 4, 6, 8]