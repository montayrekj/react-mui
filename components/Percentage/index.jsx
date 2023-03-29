import React, { useMemo } from "react";
import styled from "@emotion/styled";

const PercentageText = styled.span`
  color: ${(props) => (props.positive ? "#48BB78" : "#E53E3E")};
  font-size: 14px;
  margin-left: 5px;
  line-height: 18px;
`;

const Percentage = ({ value, ...props }) => {
  const isPositive = useMemo(() => value.includes("+"), [value]);
  return (
    <PercentageText positive={isPositive} {...props}>
      {value}
    </PercentageText>
  );
};

export default Percentage;
