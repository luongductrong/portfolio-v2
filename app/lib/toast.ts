import { toast as sonnerToast } from 'vue-sonner';

const error: typeof sonnerToast.error = function (message, options) {
  return sonnerToast.error(message, {
    ...options,
    richColors: options?.richColors ?? true,
  });
};

// @export
export const toast = new Proxy(sonnerToast, {
  get(target, property, receiver) {
    return property === 'error' ? error : Reflect.get(target, property, receiver);
  },
});
