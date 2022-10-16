import { useCallback, useState } from 'react';

const aggregateByName = (acc, { name, resource, value }) => {
  const prevData = acc[name] || {};
  const newData = {
    ...prevData,
    [resource]: (prevData[resource] || 0) + value,
  };
  return { ...acc, [name]: newData };
};

const getSummary = (summary, rowData) => {
  const { resource, value } = rowData;
  const amount = summary[resource] || 0;
  const newAmount = amount + value;
  return { ...summary, [resource]: newAmount };
};

export function useReduceResources(allResourceInfo) {
  const [displayResources, setDisplayResources] = useState([]);

  const reduceResources = useCallback(
    (timestampMax) => {
      const aggregatedResources = allResourceInfo
        .filter(({ timestamp }) => timestamp <= timestampMax)
        .reduce(aggregateByName, {});

      const arrayOfAggregatedResources = Object.keys(
        aggregatedResources
      ).reduce((acc, name) => {
        const userResources = aggregatedResources[name];
        const allUserResources = Object.keys(aggregatedResources[name]).map(
          (resource) => ({
            key: name + resource,
            name,
            resource,
            value: userResources[resource],
          })
        );
        return [...acc, ...allUserResources];
      }, []);

      const summary = arrayOfAggregatedResources.reduce(getSummary, {});

      const resourcesWithSummary = [
        ...arrayOfAggregatedResources,
        ...Object.keys(summary).map((resource) => ({
          name: '',
          key: resource,
          resource,
          value: summary[resource],
        })),
      ]
        .sort((a, b) => a.name.localeCompare(b.name))
        .sort((a, b) => a.resource.localeCompare(b.resource));

      setDisplayResources(resourcesWithSummary);
    },
    [setDisplayResources, allResourceInfo]
  );

  return { displayResources, reduceResources };
}
