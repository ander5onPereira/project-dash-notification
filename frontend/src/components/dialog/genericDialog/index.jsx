import Dialog from '..';

export default function GenericDialog({ children, onClose, ...nProps }) {
  return (
    <Dialog height='100' onClose={() => onClose()} displayClose {...nProps}>
      {children}
    </Dialog>
  );
}
