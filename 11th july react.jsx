// 1.	Create a component named "Person" that takes two props - "name" and "age". The component should display the person's name and age in a paragraph element.

import React from 'react' ;

function Persion(props){
    return(
        <p>{props.name}is{props.age} years old.</p>
    );
}

// Usage 

<Person name="John" age="30"/>


// ------------or----------
import React from 'react';

const Person = ({ name, age }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default Person;

// usage 

import React from 'react';
import Person from './Person';

const App = () => {
  return (
    <div>
      <h1>People</h1>
      <Person name="John" age={30} />
      <Person name="Jane" age={25} />
    </div>
  );
};

export default App;



// 2.	Create a component named "Button" that takes two props - "text" and "onClick". The component should display a button element with the given text and call the onClick function when clicked.

function Button(props) {
    return(
        <button on Click = {props.onClick}>{props.text}</button>
    );
}

//  Usage 

<Button text="Clickme!" on Click={() => console.log("Button clicked")} /> 

//   ----------++++    OR +++++-----------

import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>{text}</button>
  );
};

export default Button;

//  Usage 

import React from 'react';
import Button from './Button';

const handleClick = () => {
  alert('Button clicked!');
};

const App = () => {
  return (
    <div>
      <h1>Button Example</h1>
      <Button text="Click me" onClick={handleClick} />
    </div>
  );
};

export default App;

// 3.	Create a component named "Header" that takes one prop - "title". The component should display a header element with the given title.

function Header(props){
    return <h1>{props.title}</h1>
}

//  usage 
<Header title= "Wellcome to my website"/>

//  -----------+++++ OR  ++++++-----

import React from 'react';

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;

// / Usage

import React from 'react';
import Header from './Header';

const App = () => {
  return (
    <div>
      <Header title="My Website" />
      {/* Other content of your application */}
    </div>
  );
};

export default App;


// 4.	Create a component named "List" that takes one prop - "items". The component should display an unordered list element with the given list items.

function List(props) {
    const listItems= props.item.map((item) =>
    <li key={item}>{items}</li>
    )

    return <ul>{listitems}</ul>
}

// Usage
<List items={['apple','mengo', 'Banana']} />


//  ------++++++++  OR  ++++++-----------


import React from 'react';

const List = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default List;


// usage  

import React from 'react';
import List from './List';

const App = () => {
  const items = ['Apple', 'Banana', 'Orange'];

  return (
    <div>
      <List items={items} />
      {/* Other content of your application */}
    </div>
  );
};

export default App;
