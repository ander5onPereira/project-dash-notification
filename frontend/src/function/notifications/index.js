import { toast } from 'react-toastify';

export function toastSuccess(content, options) {
  const settings = {
    ...options,
  };
  return toast.success(content, settings);
}

export function toastWarning(content, options) {
  const settings = {
    ...options,
  };
  return toast.warning(content, settings);
}

export function toastInfo(content, options) {
  const settings = {
    ...options,
  };
  return toast.info(content, settings);
}

export function toastError(content, options) {
  const settings = {
    ...options,
  };
  return toast.error(content, settings);
}
