import { Badge, BadgeProps, Calendar, CalendarProps } from "antd";
import { Dayjs } from "dayjs";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setEvents } from "../../redux/slice/eventsSlice";

const CalendarComponent = () => {
  const dispatch = useDispatch();
  const a = async () => {
    const t = await dispatch(setEvents("111"));
    console.log("+++++++", t);
  };

  useEffect(() => {
    a();
  }, []);

  const getListData = (value: Dayjs) => {
    // console.log("date", `${value.date()}-${value.month() + 1}-${value.year()}`);
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: "warning", content: "This is warning event." },
          { type: "success", content: "This is usual event." },
        ];
        break;
      case 10:
        listData = [
          { type: "warning", content: "This is warning event." },
          { type: "success", content: "This is usual event." },
          { type: "error", content: "This is error event." },
        ];
        break;
      case 15:
        listData = [
          { type: "warning", content: "This is warning event" },
          { type: "success", content: "This is very long usual event......" },
          { type: "error", content: "This is error event 1." },
          { type: "error", content: "This is error event 2." },
          { type: "error", content: "This is error event 3." },
          { type: "error", content: "This is error event 4." },
        ];
        break;
      default:
    }
    return listData || [];
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);

    return (
      <ul>
        {listData.map((item) => (
          <li key={item.content}>
            <Badge
              status={item.type as BadgeProps["status"]}
              text={item.content}
            />
          </li>
        ))}
      </ul>
    );
  };

  const cellRender: CalendarProps<Dayjs>["cellRender"] = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    return info.originNode;
  };

  return (
    <Calendar
      onSelect={(value: Dayjs, selectInfo: any) => console.log(value)}
      cellRender={cellRender}
    />
  );
};

export default CalendarComponent;
