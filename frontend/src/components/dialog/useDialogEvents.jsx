import { useEffect, useRef } from 'react';

export function useDialogEvents({ onClose, disableOverlayClose }) {
  const mouseDownRef = useRef(null);
  function close() {
    if (onClose) onClose();
  }
  async function overClickClose(e) {
    if (e.target === e.currentTarget && e.target === mouseDownRef.current) {
      close();
    }
  }
  function keyHandler(e) {
    if (e.key === 'Escape' && onClose && !disableOverlayClose) {
      onClose();
    }
  }

  useEffect(() => {
    window.addEventListener('keyup', (e) => keyHandler(e));
  }, []);
  const onMouseDown = (e) => {
    if (!disableOverlayClose) overClickClose(e);
  };

  return {
    onMouseDown,
    overClickClose,
    close,
    mouseDownRef,
  };
}
