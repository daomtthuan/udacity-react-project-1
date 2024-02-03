import { EffectCallback, useLayoutEffect } from 'react';

export function useLayoutEffectOnce(effect: EffectCallback) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useLayoutEffect(effect, []);
}
