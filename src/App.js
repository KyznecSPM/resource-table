import { Range } from './components/Range';
import { Table } from './components/Table';
import { useFetchResources } from './hooks/useFetchResources';
import { useReduceResources } from './hooks/useReduceResources';
import { useRange } from './hooks/useRange';

export function App() {
  const allResourceInfo = useFetchResources();
  const { displayResources, reduceResources } =
    useReduceResources(allResourceInfo);

  const { min, max, values, rangeChange } = useRange(
    reduceResources,
    allResourceInfo
  );
  return (
    <>
      <Range min={min} max={max} values={values} rangeChange={rangeChange} />
      <Table data={displayResources} />
    </>
  );
}
