function jsxxCurly () {
  const name = 'Rishabh';
  let x=10;
  let y=20; 
  function fruit() {
    return 'Mango';
  }
  function add(a,b) {
    return a+b;
  } 

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <h1>Sum of {x} and {y} is {x+y}</h1>
      <h1>Sum of {x} and {y} is {add(x,y)}</h1>
      <p>{fruit()}</p>  
    </div>
  );
}

export default jsxxCurly;