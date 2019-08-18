const compareSingleCoverageObject = (newCoverage, oldCoverage) => {

  const coverageDifference = {};

  for (let [coverageType, coverageTypeObject] of Object.entries(oldCoverage)) {
    coverageDifference[coverageType] = {};
    for (let [coverageAttribute, coverageValue] of Object.entries(coverageTypeObject)) {
      coverageDifference[coverageType][coverageAttribute] = newCoverage[coverageType][coverageAttribute] - coverageValue;
    }
  }

  return coverageDifference  
}

export default compareSingleCoverageObject;