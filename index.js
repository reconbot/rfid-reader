#!/usr/bin/env node

var serialport = require("serialport");
var baud = 1200;

var findPort = function (cb) {

  serialport.list(function (err, result) {

    var ports = result.filter(function (val) {
      return (/usb|acm|com/i).test(val.comName);
    }).map(function (val) {
      return val.comName;
    });

    if (!ports.length) {
      console.error("Board", "No USB devices detected");
      process.exit(3);
      return;
    }

    // Continue with connection routine attempts
    console.info(
      "Serial",
      "Found port", ports[0]
    );
    cb(null, ports[0]);
  });

};

var makeParser = function () {
  var data = new Buffer(6);
  var position = 0;

  var parser = function (emitter, buffer) {
    buffer.copy(data, position);
    position += buffer.length;
    if (position === 6) {
      emitter.emit('data', data);
      position = 0;
    }
    if (position > 6) {
      console.error("The data didn't do what you thought it would");
      position = 0;
    }
  };

  return parser;
};

var openPort = function (port_name) {

  var openOptions = {
    baudRate: baud,
    parser: makeParser()
  };

  var port = new serialport.SerialPort(port_name, openOptions);

  port.on("data", function (data) {
    console.log(data.toJSON());
  });

  return port;
};

findPort(function (err, port_name) {
  openPort(port_name);
});
