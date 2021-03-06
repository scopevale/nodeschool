// Generated by CoffeeScript 1.6.3
(function() {
  var http, i, results, task, url, urls;

  http = require('http');

  urls = (function() {
    var _i, _len, _ref, _results;
    _ref = process.argv.slice(2, 5);
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      url = _ref[_i];
      _results.push(url);
    }
    return _results;
  })();

  results = {};

  task = function(i) {
    return function(res) {
      var data;
      data = '';
      res.setEncoding('utf8');
      res.on('error', console.error);
      res.on('data', function(d) {
        return data += d;
      });
      return res.on('end', function() {
        var _i, _len, _ref, _results;
        results[i] = data;
        if (Object.keys(results).length === 3) {
          _ref = [0, 1, 2];
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            i = _ref[_i];
            _results.push(console.log(results[i]));
          }
          return _results;
        }
      });
    };
  };

  for (i in urls) {
    url = urls[i];
    http.get(url, task(i)).on('error', console.error);
  }

}).call(this);
