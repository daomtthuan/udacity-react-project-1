import classNames from 'classnames';
import { EmptyObject } from 'type-fest';

export type PropsWithClassName<P = EmptyObject> = {
  className?: classNames.Argument;
} & P;
