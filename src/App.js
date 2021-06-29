// import React from "react";
// import "./App.css"

// const App = () => {
//     return (
//       <div>
//       <Person />
//       <Person />
//       <Person />
//       </div>
//     );
//   }
// const Person = () => {
//   return <p>I am a functional component</p>;
// };
// export default App;


// Example 2
// import React from "react";
// import "./App.css"
// const App = () => {
//     return (
//       <div>
//         <h1>I'm a class component</h1>
//         <Person name="Dan" age="34" />
//         <Person name="Stuart" age="30-something" />
//       </div>
//     );
//   }
// const Person = (props) => {
//   return (
//     <p>Hi I'm {props.name} and I'm {props.age} </p>
//   );
// };


// export default App;

// Example 3

// import React from "react";
// import "./App.css"
// const App = () => {
//     return (
//       <div>
//         <Job role="junior developer" />
//         <Job role="teacher" />
//         <Job role="builder" />
//       </div>
//     );
//   }
// const Job = (props) => {
//   return (
//     <p>Hi I'm a {props.role} </p>
//   );
// };


// export default App;

// Example 4 - PET
// import React from "react";
// import "./App.css"
// const Person = () => {
//     return (
//       <div>
//         <Pet petName="Rudi" petType="Pomeranian" />
//       </div>
//     );
//   }
// const Pet = (props) => {
//   return (
//     <p>My pet is a {props.petType} and is called {props.petName}</p>
//   );
// };


// export default Person;

// REACT TASK

import React from "react";
import "./App.css";
import Card from "./card.jsx";

import img1 from "./images/img1.jpeg";
import img2 from "./images/img2.jpeg";
import img3 from "./images/img3.jpeg";
import img4 from "./images/img4.jpeg";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Best Deals On Weekend Breaks</h1>
        <Card
          picture={img1}
          pictureAlt="house in the hills"
          tagLine="Get back to nature"
          prices="79"
        />
        <Card
          picture={img2}
          pictureAlt="floating hotel"
          tagLine="Weird and wonderful getaways"
          prices="129"
        />
        <Card
          picture={img3}
          pictureAlt="wood cabin"
          tagLine="Entire homes"
          prices="99"
        />
        <Card
          picture={img4}
          pictureAlt="Pug on a blanket"
          tagLine="Luxury weekend stay with your pet"
          prices="109"
        />
      </div>
    );
  }
}

export default App;