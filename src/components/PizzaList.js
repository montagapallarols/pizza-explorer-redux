import React from "react";
import { useSelector } from "react-redux";

const selectUser = reduxState => {
  return reduxState.user;
};

// function selectUser(reduxState) {
//     return reduxState.user
// }


// Define a selector to get the list of pizzas, 
// and then add a line of text showing the total number of known pizzas.

const selectListOfPizzas = reduxState => {
    return reduxState.pizzas 
    
}

// Render the pizzas to an <ul> list with an <li> list item for each pizza, 
// showing the pizza's name and description as well as number of times it was bought.

export default function PizzaList() {
    const user = useSelector(selectUser);
    console.log("What is user?", user)
    const pizzas = useSelector(selectListOfPizzas)
    console.log("What is pizzas?", pizzas)

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>! Your favorite pizzas:
      </p>
      <h2>List of pizzas:</h2>
      <ul>
        {pizzas.map(pizza => {
            return <li><strong>{pizza.name}</strong>: <p>{pizza.description}</p></li>
        })}
      </ul>
    </div>
  );
}