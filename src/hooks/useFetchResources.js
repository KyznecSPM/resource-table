import { useEffect, useState } from 'react';
import { convertToJSON } from '../helpers';
import { URL } from '../constants';

export function useFetchResources() {
  const [allResourceInfo, setAllResourceInfo] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.text())
      .then((data = '') =>
        convertToJSON(data).sort((a, b) => a.timestamp - b.timestamp)
      )
      .then((normalizedData = []) => {
        setAllResourceInfo(normalizedData);
      });
  }, []);

  return allResourceInfo;
}
