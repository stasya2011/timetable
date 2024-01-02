import { Badge, BadgeProps, Calendar, CalendarProps } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEvents } from "../../redux/slice/eventsSlice";
import { IListData, IState } from "../../redux/types";
import styles from "./calendar.module.scss";

const CalendarComponent = () => {
  const currentDate = dayjs();
  const [selectedData, setSelectedData] = useState<Dayjs>(currentDate);
  const dispatch = useDispatch();
  const events = useSelector((state: { events: IState[] }) => state.events);
  useEffect(() => {
    dispatch(setEvents(selectedData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log("selected Data", selectedData);
    console.log("state", events);
  });

  const dateCellRender = (value: Dayjs) => {
    return (
      <>
        {events.map((event) =>
          event.date.date() === value.date() &&
          event.date.month() === value.month() &&
          event.date.year() === value.year() ? (
            <ul className={styles["listOfEvents"]}>
              {event.listData.map((item: IListData) => (
                <li key={item.id}>
                  <Badge
                    status={item.type as BadgeProps["status"]}
                    text={item.content}
                  />
                </li>
              ))}
            </ul>
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
