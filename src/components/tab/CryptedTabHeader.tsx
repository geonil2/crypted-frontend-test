import React from "react";
import styled from "styled-components";

import { COLORS, MEDIA } from "src/config/styles";

const UlStyle = styled.ul`
  margin-top: 20px;
`;

interface TabTitleProps {
  active: boolean;
}

const TabTitle = styled.li<TabTitleProps>`
  display: inline-block;
  width: 50%;
  font-weight: 700;
  color: ${COLORS.white};
  text-align: center;
  border-bottom: 2px solid
    ${({ active }) => (active ? COLORS.white : COLORS.main)};
  padding: 10px 0px;
  cursor: pointer;

  ${MEDIA.mobile} {
    font-size: 14px;
  }
`;

interface CryptedTabHeaderProps {
  title: string[];
  active: string;
  onTabClickHandler: (e: React.MouseEvent<HTMLLIElement>) => void;
}

/**
 * 공통 탭 header 영역
 * @param props
 * @constructor
 */
const CryptedTabHeader = ({
  title,
  active,
  onTabClickHandler,
}: CryptedTabHeaderProps) => {
  return (
    <>
      <UlStyle>
        {title?.map((title, idx) => {
          return (
            <TabTitle
              key={`crypted-tab-header-key-${idx}`}
              active={active === title}
              onClick={onTabClickHandler}
            >
              {title}
            </TabTitle>
          );
        })}
      </UlStyle>
    </>
  );
};

export default CryptedTabHeader;
