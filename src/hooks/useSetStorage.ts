import { useState } from 'react';
import {User} from "./useUsers"

//this custom hook provides access to the set where the users fetched are stored, for use in other parts eg the left panel
function useSetStorage() {
  const [dataSet, setDataSet] = useState<Set<User>>(new Set());

  function updateDataSet(prevSet: Set<User>, newValue) { //newValue is type "any"??
    setDataSet(new Set([...prevSet, ...newValue]))
  }

  return {dataSet, updateDataSet}
}

export {useSetStorage}