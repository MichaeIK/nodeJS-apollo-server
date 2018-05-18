const os = require("os");

const systemStatus = {
  freemem: os.freemem(),
  loadLast: os.loadavg()[0],
  loadFiveMinutes: os.loadavg()[1],
  loadFifteenMinutes: os.loadavg()[2],
  cpus: os.cpus().length
};

module.exports = systemStatus;
