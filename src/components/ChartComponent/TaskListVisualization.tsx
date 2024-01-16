import { IChart } from "../../redux/types";

const TaskListVisualization = ({ chartReducer }: { chartReducer: IChart }) => {
  return (
    <div style={{ display: "flex" }}>
      <ul style={{ border: "2px solid green", width: "200px" }}>
        {chartReducer.data.todo.map((element) => (
          <li>{element.content}</li>
        ))}
      </ul>

      <ul style={{ border: "2px solid blue", width: "200px" }}>
        {chartReducer.data.proccess.map((element) => (
          <li>{element.content}</li>
        ))}
      </ul>

      <ul style={{ border: "2px solid grey", width: "200px" }}>
        {chartReducer.data.done.map((element) => (
          <li>{element.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskListVisualization;
