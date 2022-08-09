const Item = ({ array, setArray }) => {
  return (
    <>
      <ul>
        {array.map((el, index) => {
          return (
            <div className="tarefas">
              <li key={index}>{el}</li>
              <p
                onClick={(index) => {
                  array.splice(index, 1);
                  document.getElementById("tarefa").value = "";
                  setArray([...array]);
                }}
              >
                X
              </p>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default Item;
