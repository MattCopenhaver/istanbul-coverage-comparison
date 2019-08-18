import istanbulCoverageComparison from '../index';

describe('Coverage Comparison', () => {
  test('placeholder', () => {
    expect(istanbulCoverageComparison(
      {"total": {"lines":{"total":12,"covered":11,"skipped":0,"pct":91.67},"statements":{"total":12,"covered":11,"skipped":0,"pct":91.67},"functions":{"total":2,"covered":2,"skipped":0,"pct":100},"branches":{"total":0,"covered":0,"skipped":0,"pct":100}}
  ,"/file1": {"lines":{"total":7,"covered":7,"skipped":0,"pct":100},"functions":{"total":1,"covered":1,"skipped":0,"pct":100},"statements":{"total":7,"covered":7,"skipped":0,"pct":100},"branches":{"total":0,"covered":0,"skipped":0,"pct":100}}
  ,"/file2": {"lines":{"total":5,"covered":4,"skipped":0,"pct":80},"functions":{"total":1,"covered":1,"skipped":0,"pct":100},"statements":{"total":5,"covered":4,"skipped":0,"pct":80},"branches":{"total":0,"covered":0,"skipped":0,"pct":100}}
  },
  {"total": {"lines":{"total":3,"covered":3,"skipped":0,"pct":100},"statements":{"total":3,"covered":3,"skipped":0,"pct":100},"functions":{"total":1,"covered":1,"skipped":0,"pct":100},"branches":{"total":2,"covered":1,"skipped":0,"pct":50}}
    ,"/file1": {"lines":{"total":3,"covered":3,"skipped":0,"pct":100},"functions":{"total":1,"covered":1,"skipped":0,"pct":100},"statements":{"total":3,"covered":3,"skipped":0,"pct":100},"branches":{"total":2,"covered":1,"skipped":0,"pct":50}}
    }
    
  )).toEqual({
    "total": {"branches": {"covered": -1, "pct": 50, "skipped": 0, "total": -2}, "functions": {"covered": 1, "pct": 0, "skipped": 0, "total": 1}, "lines": {"covered": 8, "pct": -8.329999999999998, "skipped": 0, "total": 9}, "statements": {"covered": 8, "pct": -8.329999999999998, "skipped": 0, "total": 9}},
    "/file1": {"branches": {"covered": -1, "pct": 50, "skipped": 0, "total": -2}, "functions": {"covered": 0, "pct": 0, "skipped": 0, "total": 0}, "lines": {"covered": 4, "pct": 0, "skipped": 0, "total": 4}, "statements": {"covered": 4, "pct": 0, "skipped": 0, "total": 4}}, 
    "/file2": {"lines":{"total":5,"covered":4,"skipped":0,"pct":80},"functions":{"total":1,"covered":1,"skipped":0,"pct":100},"statements":{"total":5,"covered":4,"skipped":0,"pct":80},"branches":{"total":0,"covered":0,"skipped":0,"pct":100}}
  })
  });


  test('placeholder2', () => {
    expect(istanbulCoverageComparison(
      {"total": {"lines":{"total":3,"covered":3,"skipped":0,"pct":100},"statements":{"total":3,"covered":3,"skipped":0,"pct":100},"functions":{"total":1,"covered":1,"skipped":0,"pct":100},"branches":{"total":2,"covered":1,"skipped":0,"pct":50}}
    ,"/file1": {"lines":{"total":3,"covered":3,"skipped":0,"pct":100},"functions":{"total":1,"covered":1,"skipped":0,"pct":100},"statements":{"total":3,"covered":3,"skipped":0,"pct":100},"branches":{"total":2,"covered":1,"skipped":0,"pct":50}}
    },
    {"total": {"lines":{"total":12,"covered":11,"skipped":0,"pct":91.67},"statements":{"total":12,"covered":11,"skipped":0,"pct":91.67},"functions":{"total":2,"covered":2,"skipped":0,"pct":100},"branches":{"total":0,"covered":0,"skipped":0,"pct":100}}
    ,"/file1": {"lines":{"total":7,"covered":7,"skipped":0,"pct":100},"functions":{"total":1,"covered":1,"skipped":0,"pct":100},"statements":{"total":7,"covered":7,"skipped":0,"pct":100},"branches":{"total":0,"covered":0,"skipped":0,"pct":100}}
    ,"/file2": {"lines":{"total":5,"covered":4,"skipped":0,"pct":80},"functions":{"total":1,"covered":1,"skipped":0,"pct":100},"statements":{"total":5,"covered":4,"skipped":0,"pct":80},"branches":{"total":0,"covered":0,"skipped":0,"pct":100}}
    }
  )).toEqual({
    "total": {"branches": {"covered": 1, "pct": -50, "skipped": 0, "total": 2}, "functions": {"covered": -1, "pct": 0, "skipped": 0, "total": -1}, "lines": {"covered": -8, "pct": 8.329999999999998, "skipped": 0, "total": -9}, "statements": {"covered": -8, "pct": 8.329999999999998, "skipped": 0, "total": -  9}},
    "/file1": {"branches": {"covered": 1, "pct": -50, "skipped": 0, "total": 2}, "functions": {"covered": 0, "pct": 0, "skipped": 0, "total": 0}, "lines": {"covered": -4, "pct": 0, "skipped": 0, "total": -4}, "statements": {"covered": -4, "pct": 0, "skipped": 0, "total": -4}}, 
    "/file2": {"lines":{"total":-5,"covered":-4,"skipped":0,"pct":-80},"functions":{"total":-1,"covered":-1,"skipped":0,"pct":-100},"statements":{"total":-5,"covered":-4,"skipped":0,"pct":-80},"branches":{"total":0,"covered":0,"skipped":0,"pct":-100}}
  })
  });
});