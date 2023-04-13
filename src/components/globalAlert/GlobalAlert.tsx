import {
  createRef,
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";

import { COLORS, MEDIA } from "src/config/styles";

import ScreenOverlay from "src/components/screenOverlay";

const AlertCtnr = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.white};
  border-radius: 8px;
  overflow-x: hidden;
  padding: 20px;
`;

const AlertMsg = styled.p`
  line-height: 22px;
  text-align: center;

  ${MEDIA.mobile} {
    font-size: 12px;
  }
`;

type AlertFn = (message: string) => void;

const showAlertRef: MutableRefObject<AlertFn | null> = createRef<AlertFn>();

export const showAlert: AlertFn = (message) => {
  if (showAlertRef.current) {
    showAlertRef.current(message);
  }
};

const domSelector = "alert-container";

const GlobalAlert = () => {
  const [message, setMessage] = useState<string>();
  const [visible, setVisible] = useState(!!message);
  const visibleTimer = useRef<NodeJS.Timer>();

  const handleClose = useCallback(() => {
    setVisible(false);
    if (visibleTimer.current) {
      clearTimeout(visibleTimer.current);
    }
    visibleTimer.current = setTimeout(() => {
      setMessage(undefined);
    }, 300);
  }, []);

  useEffect(() => {
    showAlertRef.current = (msg) => {
      if (msg) {
        setMessage(msg);
        setVisible(true);
      } else {
        handleClose();
      }
    };
  }, [handleClose]);

  useEffect(() => {
    if (visible) {
      const handler = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          e.preventDefault();
          e.stopPropagation();
          handleClose();
        }
      };
      window.addEventListener("keydown", handler);

      return () => {
        window.removeEventListener("keydown", handler);
      };
    }
  }, [visible, handleClose]);

  useEffect(() => {
    if (visibleTimer.current) {
      clearTimeout(visibleTimer.current);
    }
  }, [message]);

  if (!message) {
    return null;
  }

  return (
    <ScreenOverlay
      className={!visible && message ? "disappear" : undefined}
      selector={domSelector}
      onClose={handleClose}
    >
      <AlertCtnr id={domSelector}>
        <AlertMsg>{message}</AlertMsg>
      </AlertCtnr>
    </ScreenOverlay>
  );
};

export default GlobalAlert;
