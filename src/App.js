import "./App.css";
import React, { useCallback, useState } from "react";

function App() {
  const todoData = [
    {
      type: "Fruit",
      name: "Apple",
    },
    {
      type: "Vegetable",
      name: "Broccoli",
    },
    {
      type: "Vegetable",
      name: "Mushroom",
    },
    {
      type: "Fruit",
      name: "Banana",
    },
    {
      type: "Vegetable",
      name: "Tomato",
    },
    {
      type: "Fruit",
      name: "Orange",
    },
    {
      type: "Fruit",
      name: "Mango",
    },
    {
      type: "Fruit",
      name: "Pineapple",
    },
    {
      type: "Vegetable",
      name: "Cucumber",
    },
    {
      type: "Fruit",
      name: "Watermelon",
    },
    {
      type: "Vegetable",
      name: "Carrot",
    },
  ];

  const [fruit, setFruit] = useState([]);
  const [vegetable, setVegetable] = useState([]);

  const handleFilter = (data) => {
    if (data.type.toLowerCase() === "fruit") {
      setFruit((old) => [...old, data]);
    } else {
      setVegetable((old) => [...old, data]);
    }
  };

  const callBack = useCallback((data) => {
    if (data.type.toLowerCase() === "fruit") {
      setTimeout(() => {
        fruit.pop();
        setFruit(fruit);
      }, 5000);
    } else {
      setTimeout(() => {
        vegetable.pop();
        setVegetable(vegetable);
      }, 5000);
    }
  }, []);

  return (
    <div className="container">
      <div className="grid grid-cols-3 gap-4 mx-28 mt-4">
        <div className="col-span-1">
          {todoData.map((data, index) => {
            return (
              <React.Fragment key={index}>
                <div className="gap-4">
                  <button
                    className={`border m-1 py-2 px-4 rounded-md w-full ${
                      fruit.find((f) => f.name === data.name) ||
                      vegetable.find((f) => f.name === data.name) !== undefined
                        ? "hidden"
                        : "none"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      callBack(data);
                      handleFilter(data);
                    }}
                  >
                    {data.name}
                  </button>
                </div>
              </React.Fragment>
            );
          })}
        </div>
        <div className="col-span-1 border h-fit">
          <div className="mt-1">
            <div className="text-center py-2">Fruits</div>
          </div>

          {fruit.map((data, index) => {
            return (
              <React.Fragment key={index}>
                <div className="mx-2">
                  <button
                    className="border m-1 py-2 rounded-md w-full"
                    onClick={(e) => {
                      e.preventDefault();
                      const oldData = fruit.filter((f) => f.name !== data.name);
                      setFruit(oldData);
                    }}
                  >
                    {data.name}
                  </button>
                </div>
              </React.Fragment>
            );
          })}
        </div>
        <div className="col-span-1 border h-fit">
          <div className="mt-1">
            <div className="text-center py-2">Vegetable</div>
          </div>

          {vegetable.map((data, index) => {
            return (
              <React.Fragment key={index}>
                <div className="mx-2">
                  <button
                    className="border my-1 py-2 rounded-md w-full"
                    onClick={(e) => {
                      e.preventDefault();
                      const oldData = vegetable.filter(
                        (f) => f.name !== data.name
                      );
                      setVegetable(oldData);
                    }}
                  >
                    {data.name}
                  </button>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
