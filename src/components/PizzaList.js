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


export default function PizzaList() {
    const user = useSelector(selectUser);
    console.log("What is user?", user)
    const pizzas = useSelector(selectListOfPizzas)
    console.log("What is pizzas?", pizzas)

    function compare(a,b) {
        return b.bought - a.bought;
    }

    const sortedPizzas = pizzas.sort(compare)

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>! Your favorite pizzas:
      </p>
      <h2>List of pizzas ({pizzas.length})</h2>
      <ul>
        {sortedPizzas.map(pizza => {
            return <li>
                <strong>{pizza.name}</strong>: 
            <p>{pizza.description}</p>
        <p><em>Bought {pizza.bought} times</em></p>
            </li>
        })}
      </ul>
    </div>
  );
}