import { useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import './dialog.css';

let mouseDown = null;
export default function Dialog({
  children,
  onClose,
  anchor,
  height,
  displayClose,
  disableOverlayClose,
}) {
  function close() {
    if (onClose) onClose();
  }
  async function overClickClose(e) {
    if (e?.target === e?.currentTarget && e?.target === mouseDown?.target) {
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

  return (
    <div
      tabIndex={-1}
      data-height={height}
      data-anchor={anchor || ''}
      className={'dialog-wrapper'}
      onClick={(e) => {
        if (!disableOverlayClose) overClickClose(e);
      }}
      onMouseDown={(e) => {
        mouseDown = e;
      }}
    >
      <div id='dialog-content-box' className={'dialog'}>
        {displayClose && (
          <div className={'close-section'}>
            <IoMdClose onClick={() => close()} size={20} />
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
