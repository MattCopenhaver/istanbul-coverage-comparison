import compareSingleCoverageObject from '../compare-single-coverage-object';

describe('Compare single coverage object', () => {
  test('Unchanged in new vs old', () => {
    expect(compareSingleCoverageObject({
      "lines": {
          "total": 3,
          "covered": 3,
          "skipped": 0,
          "pct": 100
      },
      "statements": {
          "total": 3,
          "covered": 3,
          "skipped": 0,
          "pct": 100
      },
      "functions": {
          "total": 1,
          "covered": 1,
          "skipped": 0,
          "pct": 100
      },
      "branches": {
          "total": 2,
          "covered": 1,
          "skipped": 0,
          "pct": 50
      }
  }, {
    "lines": {
        "total": 3,
        "covered": 3,
        "skipped": 0,
        "pct": 100
    },
    "statements": {
        "total": 3,
        "covered": 3,
        "skipped": 0,
        "pct": 100
    },
    "functions": {
        "total": 1,
        "covered": 1,
        "skipped": 0,
        "pct": 100
    },
    "branches": {
        "total": 2,
        "covered": 1,
        "skipped": 0,
        "pct": 50
    }
})).toEqual({
    "lines": {
        "total": 0,
        "covered": 0,
        "skipped": 0,
        "pct": 0
    },
    "statements": {
        "total": 0,
        "covered": 0,
        "skipped": 0,
        "pct": 0
    },
    "functions": {
        "total": 0,
        "covered": 0,
        "skipped": 0,
        "pct": 0
    },
    "branches": {
        "total": 0,
        "covered": 0,
        "skipped": 0,
        "pct": 0
    }
})
  })
});