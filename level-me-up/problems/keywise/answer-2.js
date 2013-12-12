// Generated by CoffeeScript 1.6.3
(function() {
  var db, key, operations, row, rows;

  db = require('level')(process.argv[2], {
    valueEncoding: 'json'
  });

  rows = require(process.argv[3]);

  operations = (function() {
    var _i, _len, _results;
    _results = [];
    for (_i = 0, _len = rows.length; _i < _len; _i++) {
      row = rows[_i];
      if (row.type === 'repo') {
        key = row.user + '!' + row.name;
      }
      if (row.type === 'user') {
        key = row.name;
      }
      _results.push({
        type: 'put',
        key: key,
        value: row
      });
    }
    return _results;
  })();

  db.batch(operations);

}).call(this);
