import { FC, MouseEventHandler, PropsWithChildren } from "react";
import styled, { createGlobalStyle } from "styled-components";

import { ANIMATIONS } from "src/config/styles";

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  animation: 0.3s ${ANIMATIONS.fadeIn} forwards;
  overflow-y: scroll;

  &.disappear {
    animation: 0.3s ${ANIMATIONS.fadeOut} forwards;
  }
`;

interface Props {
  selector: string;
  onClose: () => void;
  className?: string;
}

const ScreenOverlay: FC<PropsWithChildren<Props>> = ({
  selector,
  onClose,
  className,
  children,
}) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
    const container =
      typeof document !== "undefined"
        ? document.getElementById(selector)
        : null;
    if (container && !container.contains(event.target as Node)) {
      onClose();
    }
  };

  return (
    <>
      <GlobalStyle />
      <Overlay className={className} onClick={handleClick}>
        {children}
      </Overlay>
    </>
  );
};

export default ScreenOverlay;
