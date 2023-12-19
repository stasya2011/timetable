import { Calendar } from "antd";

const CalendarComponent = () => {
  const dateCellRender = (value: any) => {
    return (
      <div style={{ backgroundColor: "pink", fontWeight: 700 }}>
        <p>{value.date()}</p>
      </div>
    );
  };
  return (
    <div>
      <Calendar cellRender={dateCellRender} />
    </div>
  );
};

export default CalendarComponent;
