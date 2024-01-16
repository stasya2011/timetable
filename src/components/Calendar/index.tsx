import { Calendar, CalendarProps } from "antd";
import { Dayjs } from "dayjs";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { setSelectedDate } from "../../redux/slice/selectSlice";
import { formatDate } from "../../utils";
import TaskList from "../TaskList";

const CalendarComponent = () => {
  const dispatch = useAppDispatch();
  const { events } = useSelector((state: RootState) => state);

  const dateCellRender = (value: Dayjs) => {
    return (
      <>
        {events.map((event) => {
          return formatDate(event.date) === formatDate(value) ? (
            <TaskList event={event} key={event.date.millisecond()} />
          ) : null;
        })}
      </>
    );
  };

  const cellRender: CalendarProps<Dayjs>["cellRender"] = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    return info.originNode;
  };

  return (
    <Calendar
      onSelect={(value: Dayjs) => dispatch(setSelectedDate(value))}
      cellRender={cellRender}
    />
  );
};

export default CalendarComponent;
