import classNames from 'classnames';

import Shelf from '../shelf';
import useShelves from './_.hook';
import { ShelvesProps } from './_.type';

export default function Shelves({ className }: ShelvesProps) {
  const { states } = useShelves();

  return (
    <div className={classNames('d-flex flex-column gap-4', className)}>
      {states.shelfPropsList.map((shelfProps) => (
        <Shelf key={shelfProps.data.id} {...shelfProps} />
      ))}
    </div>
  );
}
