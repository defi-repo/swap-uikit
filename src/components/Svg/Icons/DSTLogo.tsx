import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();

  return (
    <Svg viewBox="0 0 559 558" {...props}>
      <image
        width="559"
        height="558"
        xlinkHref="data:img/png;base64,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"
      />
    </Svg>
  );
};

export default Icon;