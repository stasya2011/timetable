import { Calendar, CalendarProps } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { setEvents } from "../../redux/slice/eventsSlice";
import { RootState, useAppDispatch } from "../../redux/store";
import { setSelectedDate } from "../../redux/slice/selectSlice";
import { formatDate } from "../../utils";
import TaskList from "../TaskList";

const CalendarComponent = () => {
  const currentDate = dayjs();
  const dispatch = useAppDispatch();
  const { events } = useSelector((state: RootState) => state);

  useEffect(() => {
    const a = dispatch(setSelectedDate(currentDate));
    dispatch(setEvents(a.payload));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dateCellRender = (value: Dayjs) => {
    return (
      <>
        {events.map((event) =>
          formatDate(event.date) === formatDate(value) ? (
            <TaskList event={event} key={event.date.millisecond()} />
          ) : null
        )}
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
