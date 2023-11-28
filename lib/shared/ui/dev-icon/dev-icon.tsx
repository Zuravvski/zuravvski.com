import { Tooltip } from "react-tooltip";
import clsx from "clsx";
import uniqueId from "lodash/uniqueId";

import { DevIconType } from "./dev-icon-type";

interface DevIconProps {
  id?: string;
  icon: DevIconType;
  colored?: boolean;
  tooltip?: string;
}

export const DevIcon = ({
  id,
  icon,
  colored = false,
  tooltip,
}: DevIconProps) => {
  id = id ?? uniqueId();

  return (
    <>
      <i
        data-tooltip-id={id}
        data-tooltip-content={tooltip}
        className={clsx(
          `devicon-${icon}-plain`,
          colored && "colored",
          "transition-colors",
        )}
      />
      <Tooltip id={id} />
    </>
  );
};
