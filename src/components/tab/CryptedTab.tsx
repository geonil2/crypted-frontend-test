import React, { ReactElement, useMemo, useState } from "react";

import { CryptedTabHeader } from "src/components/tab";

interface CryptedTabProps {
  children: ReactElement[];
}

/**
 * 공통 Tab Component
 * @param props
 * @constructor
 */
const CryptedTab = ({ children }: CryptedTabProps) => {
  const titles = useMemo(() => {
    const values = children.map((child, index) => child.props?.title);
    return values;
  }, [children]);

  const [active, setActive] = useState<string>(titles[0]);

  const handleTab = (e: React.MouseEvent<HTMLLIElement>) => {
    const value = (e.target as HTMLLIElement).textContent;
    value && setActive(value);
  };

  return (
    <>
      {/* header*/}
      <CryptedTabHeader
        title={titles}
        active={active}
        onTabClickHandler={handleTab}
      ></CryptedTabHeader>
      {/* Body */}
      {children.filter((child, index) => {
        return active === child.props.title && child;
      })}
    </>
  );
};

export default CryptedTab;
