import React from "react";

function Product() {
  //   const [name, setName] = useState("Aman");

  // useeffect called only when name variable is get changed:
  // useEffect(() => {
  //   console.log("component changed");
  // }, [name]);

  // return (
  //   <>
  //     <div>
  //       <h1>{name}</h1>
  //       <h2>20000</h2>
  //       <button
  //         onClick={() => {
  //           setName("Namrata");
  //         }}
  //       >
  //         change name
  //       </button>
  //     </div>
  //   </>
  // );

  useEffect(() => {
    console.log("component mounted");

    return () => {
      console.log("component mounted unmounted");
    };
  }, [third]);

  return (
    <>
      <h2>Product</h2>
    </>
  );
}

export default Product;
