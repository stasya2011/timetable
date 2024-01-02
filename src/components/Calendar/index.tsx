import { Calendar, CalendarProps } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { setEvents } from "../../redux/slice/eventsSlice";
import { RootState, useAppDispatch } from "../../redux/store";
import TaskList from "../TaskList";

const CalendarComponent = () => {
  const currentDate = dayjs();
  const [selectedData, setSelectedData] = useState<Dayjs>(currentDate);
  const dispatch = useAppDispatch();
  const events = useSelector((state: RootState) => state.events);

  useEffect(() => {
    dispatch(setEvents(selectedData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dateCellRender = (value: Dayjs) => {
    return (
      <>
        {events.map((event) =>
          event.date.date() === value.date() &&
          event.date.month() === value.month() &&
          event.date.year() === value.year() ? (
            <TaskList event={event} />
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
      onSelect={(value: Dayjs) => setSelectedData(value)}
      cellRender={cellRender}
    />
  );
};

export default CalendarComponent;
