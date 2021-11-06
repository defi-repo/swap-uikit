import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 22 22" {...props}>
      <image width="22" height="22" xlinkHref="data:image/png;base64,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"/>
    </Svg>
  );
};

export default Icon;