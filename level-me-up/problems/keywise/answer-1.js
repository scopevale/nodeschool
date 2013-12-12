// Generated by CoffeeScript 1.6.3
(function() {
  var batch, db, row, rows, _i, _len;

  db = require('level')(process.argv[2], {
    valueEncoding: 'json'
  });

  rows = require(process.argv[3]);

  batch = db.batch();

  for (_i = 0, _len = rows.length; _i < _len; _i++) {
    row = rows[_i];
    if (row.type === 'user') {
      batch.put(row.name, row);
    }
    if (row.type === 'repo') {
      batch.put("" + row.user + "!" + row.name, row);
    }
  }

  batch.write();

}).call(this);
