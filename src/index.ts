import { HTMLAttributes, ReactChild } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
}

export { default as Table } from './Table';
export { default as TableBody } from './TableBody';
export { default as TableCell } from './TableCell';
export { default as TableHead } from './TableHead';
export { default as TableRow } from './TableRow';

export { default as Box } from './TableRow';
export { default as Flex } from './TableRow';

export { default as Typography } from './Typography';

export { default as Popup } from './Popup';
export * from './Popup';

export { default as Input } from './Input';

export { default as Dropdown } from './Dropdown';
export { default as Select } from './Select';

export { default as SearchInput } from './SearchInput';

export { default as Button } from './Button';
export { default as IconButton } from './IconButton';

export { default as HorizontalSelectors } from './HorizontalSelectors';

export { default as Tooltip } from './Tooltip';