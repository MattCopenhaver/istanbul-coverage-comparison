import compareSingleCoverageObject from './compare-single-coverage-object';
import blankCoverageObject from './constants/blank-coverage-object';

const istanbulCoverageComparison = (newJsonSummary, oldJsonSummary) => {
  const newReport = Object.assign(newJsonSummary)
  const oldReport = Object.assign(oldJsonSummary)

  const coverageDifference = {}

  for (let [fileName, coverageObject] of Object.entries(oldReport)) {
    if (newReport[fileName]) {

      coverageDifference[fileName] = compareSingleCoverageObject(newReport[fileName], coverageObject)

      delete oldReport[fileName];
      delete newReport[fileName];
    } else {
      coverageDifference[fileName] = compareSingleCoverageObject(blankCoverageObject, coverageObject)
      delete oldReport[fileName];
    }
  }

  for (let [fileName, coverageObject] of Object.entries(newReport)) {
    coverageDifference[fileName] = compareSingleCoverageObject(coverageObject, blankCoverageObject)
    delete newReport[fileName];
  }
  
  return coverageDifference;
}

export default istanbulCoverageComparison;