import { useEffect, RefObject } from 'react';

export interface UseInputSelectOptions {
  delay?: number;
  scrollIntoView?: boolean;
  caretToEnd?: boolean;
}

/**
 * Selects the contents of an input or textarea element when the component mounts.
 * @param ref - React ref to the input or textarea element
 * @param options - Optional settings: delay (ms), scrollIntoView, caretToEnd
 */
export function useInputSelectOnMount(
  ref: RefObject<HTMLInputElement | HTMLTextAreaElement>,
  options: UseInputSelectOptions = {}
) {
  const { delay = 0, scrollIntoView = false, caretToEnd = false } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const selectText = () => {
      if (scrollIntoView) el.scrollIntoView({ block: 'nearest' });

      if (!caretToEnd) {
        el.select();
      } else {
        const len = el.value.length;
        el.setSelectionRange(len, len);
      }
    };

    if (delay > 0) {
      const t = setTimeout(selectText, delay);
      return () => clearTimeout(t);
    } else {
      requestAnimationFrame(selectText);
    }
  }, [ref, delay, scrollIntoView, caretToEnd]);
}

export default useInputSelectOnMount;
