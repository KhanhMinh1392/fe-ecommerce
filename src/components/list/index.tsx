import { memo, ReactNode } from 'react';

interface ListComponentProps<T> extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: Array<T>;
  renderItems: (item: T, index: number) => ReactNode;
}

function ListComponent<T>(props: ListComponentProps<T>) {
  const { data, renderItems, ...restProps } = props;
  return <div {...restProps}>{data.map((item, index) => renderItems(item, index))}</div>;
}

export default memo(ListComponent);
