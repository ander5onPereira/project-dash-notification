import { IoMdClose } from 'react-icons/io';
import './dialog.css';
import { useDialogEvents } from './useDialogEvents';

export default function Dialog(props) {
  const { children, anchor, height, displayClose, disableOverlayClose } = props;
  const { close, overClickClose, mouseDownRef } = useDialogEvents(props);

  return (
    <div
      tabIndex={-1}
      data-height={height}
      data-anchor={anchor || ''}
      className={'dialog-wrapper'}
      onClick={(e) => {
        if (!disableOverlayClose) overClickClose(e);
      }}
      ref={mouseDownRef}
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
