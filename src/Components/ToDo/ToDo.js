import { useState } from "react";
import "./ToDo.css";
import Item from "./Item";

const List = () => {
  const [lista, setLista] = useState([]);
  const [tarefa, setTarefa] = useState();

  function adicionarItem(e) {
    if (!tarefa) {
      e.preventDefault();
      alert("Coloque uma tarefa");
    } else {
      e.preventDefault();
      lista.push(tarefa);
      setTarefa(e.target.value);
      document.getElementById("tarefa").value = "";
    }
  }

  return (
    <div className="listaTarefas">
      <form onSubmit={adicionarItem}>
        <label htmlFor="tarefa">Tarefa:</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          onChange={(e) => setTarefa(e.target.value)}
        />
        <input type="submit" value="Cadastrar" />
      </form>
      {lista.length === 0 ? (
        <p>Lista vazia :/</p>
      ) : (
        <Item array={lista} setArray={setLista} />
      )}
    </div>
  );
};

export default List;
