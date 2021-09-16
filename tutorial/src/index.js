import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
      {/* <p>{let x = 6}</p> */}
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/810HqnD6-eS._AC_UL640_QL65_.jpg"
    alt=""
  />
);

const Title = () => {
  const title = "I love you to the Moon and Back";
  return <h1>{title}</h1>;
};
const Author = () => {
  // <h4 style={{ color: "#617d98", fontSize: "0.85rem", marginTop: "0.25rem" }}>
  //   Amelia Hepworth
  // </h4>
  const author = "Amelia Hepworth";
  return <h4>{author.toUpperCase()}</h4>;
};

ReactDOM.render(<BookList />, document.getElementById("root"));

// function Greeting() {
//   return (
//     <div>
//       <h2>Un fel de titlu</h2>
//       <p>This is a message</p>
//       <hr />
//       <Person />
//       <Message />
//     </div>
//   );
// }

// const Person = () => <h3>Un fell de test</h3>;
// const Message = () => {
//   return <p>This is my message</p>;
// };

// function Greeting() {
//   return (
//     <React.Fragment>
//       <article>
//         <h1>This is a component</h1>
//         <ul>
//           <li>
//             <a href="#">Va pup</a>
//           </li>
//           <img src="" alt="" />
//           <input type="text" name="" id="" />
//         </ul>
//       </article>
//       <div></div>
//     </React.Fragment>
//   );
// }

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Saultari gogule")
//   );
// };

// ReactDOM.render(<Greeting />, document.getElementById("root"));
