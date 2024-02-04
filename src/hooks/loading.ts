import { useMemo, useRef } from 'react';

export default function useLoading() {
  const elementRef = useRef<HTMLDivElement>(document.querySelector('#loading'));

  return useMemo(
    () => ({
      show: () => {
        const element = elementRef.current;
        if (!element) {
          return;
        }

        element.classList.add('show', 'z-1');
        element.classList.remove('hide');
      },

      hide: () => {
        const element = elementRef.current;
        if (!element) {
          return;
        }

        setTimeout(() => {
          element.classList.add('hide');
          element.classList.remove('show', 'z-1');
        }, 500);
      },
    }),
    [],
  );
}
