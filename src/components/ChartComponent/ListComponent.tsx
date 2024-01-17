import classNames from "classnames";
import { ReactNode } from "react";

const ListComponent = ({
  children,
  atr,
}: {
  children: ReactNode;
  atr: string[];
}) => {
  return <ul className={classNames(...atr)}>{children}</ul>;
};

export default ListComponent;
