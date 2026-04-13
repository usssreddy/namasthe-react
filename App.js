


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


  const heading = React.createElement("div", {id : "parent"}, 
               React.createElement("div", {id :"child"} , 
               [React.createElement("h1" , {} , "i am h1 tag") , React.createElement("h2" , {} , "i am h2 tag") ]
             )
            );




// const heading =  React.createElement("h1", {id: "heading"} ,  "hello world form react!");

   const root =  ReactDOM.createRoot(document.getElementById("root"));

   root.render(heading);