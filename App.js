import  React from "react" ;
import ReactDOM from "react-dom/client";


/**
 * 
 * <div id ="parent">
 *   <div id = "child">
 *    <h1>i am h1 tag</h1>
 *    <h2>i am h2 tag</h1>
 * </div>
 * </div>
 * 
 */


//   const heading = React.createElement("div", {id : "parent"}, 
//                React.createElement("div", {id :"child"} , 
//                React.createElement("h1" , {} , "i am h1 tag")
//              )
//             );


const JsxHeading = () => ( 
  <h1 className = "heading" style={{backgroundColor :"green",}}>  this  syntd form react </h1>
);


// React Functional component 
// commponet compostion
const HedingFunction = () => (
        
        <div>
            <JsxHeading/>
             <h1>this functional component</h1>;
        </div>
       
);

const Header = () => (
    <div
  id="container"
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
  }}
>
  <img src="/ANL07074.jpg" alt="left-image" width="100" />

  <input
    type="search"
    placeholder="Search..."
    style={{
      width: "300px",
      padding: "10px",
      borderRadius: "5px",
    }}
  />

  <img src="/ANL07074.jpg" alt="right-image" width="100" />
</div>
);





// const heading =  React.createElement("h1", {id: "heading"} ,  "hello world form react!");

   const root =  ReactDOM.createRoot(document.getElementById("root"));

   root.render(<Header/>);