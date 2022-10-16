import { useCallback, useEffect, useState } from 'react';

export const useRange = (reduceResources, allResourceInfo) => {
  const lastIndex = allResourceInfo.length - 1;
  const min = allResourceInfo[0]?.timestamp || 0;
  const max = allResourceInfo[lastIndex]?.timestamp;

  const [values, setValues] = useState([0]);

  useEffect(() => {
    setValues([min]);
  }, [min]);

  const rangeChange = useCallback(
    (values) => {
      setValues(values);
      const timestamp = values[0];
      reduceResources(timestamp);
    },
    [reduceResources]
  );

  return { min, max, values, rangeChange };
};
