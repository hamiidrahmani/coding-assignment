import { CloseIcon } from "@/icons";
import { getScrollbarSize } from "@/shared/utils";
import clsx from "clsx";
import type { PropsWithChildren, ReactNode } from "react";
import { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { Portal } from "../portal";
import { Typography } from "../typography";
import { backdrop, closeIconWrapper, modal, modalContainer, modalHeader, modalWrapper } from "./Modal.css";

export interface ModalProps {
  open: boolean;
  title?: ReactNode;
  modalClassName?: string;
  onClose: () => void;
}

const TIME_OUT = 225;

export const Modal = ({ open, title, onClose, children, modalClassName, ...props }: PropsWithChildren<ModalProps>) => {
  const nodeRef = useRef<HTMLDivElement>(null);
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
  };

  useEffect(() => {
    const bodyEl = document.querySelector("body") as HTMLBodyElement;

    if (bodyEl) {
      if (open) {
        const bodyEl = document.querySelector("body") as HTMLBodyElement;
        bodyEl.style.paddingRight = `${getScrollbarSize(document)}px`;
        bodyEl.style.overflow = "hidden";
      } else {
        const bodyEl = document.querySelector("body") as HTMLBodyElement;
        bodyEl.style.overflow = "auto";
        bodyEl.style.paddingRight = "0px";
      }
    }
  }, [open]);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);

  return (
    <Portal>
      <CSSTransition in={open} timeout={TIME_OUT} classNames="modal" nodeRef={nodeRef} unmountOnExit>
        <div className={modalWrapper} ref={nodeRef} {...props}>
          <div className={backdrop} onClick={onClose} />

          <div className={modalContainer}>
            <div className={clsx(modal, modalClassName)} onClick={handleBackdropClick}>
              <div className={modalHeader}>
                <button className={closeIconWrapper} onClick={onClose}>
                  <CloseIcon />
                </button>
                {title && (
                  <Typography variant="h4" component="div">
                    {title}
                  </Typography>
                )}
              </div>

              {children}
            </div>
          </div>
        </div>
      </CSSTransition>
    </Portal>
  );
};
