// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [...arr1, ...arr2];
// const combined2 = [arr1, arr2];
// console.log(combined);
// console.log(combined2);

// const person = {
//   name: 'John',
//   age: 30,
//   city: 'New York',
// };

// const updatedPerson1 = {
//   person,
//   age: 31,
//   country: 'USA',
// };

// const updatedPerson2 = {
//   ...person,
//   age: 31,
//   country: 'USA',
// };

// console.log('updated Person w/o spread...: ', updatedPerson1);
// console.log('updated Person w spread ...: ', updatedPerson2);

const ChildComponent = (props) => {
  console.log(props);

  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

const App = () => {
  const obj = {
    title: 'Hello World',
    description: 'This is a description passed from the parent component.',
  };

  return <ChildComponent {...obj} obj={obj} />;
};

export default App;
