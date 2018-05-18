const os = require("os");

const systemStats = {
  freemem: os.freemem(),
  loadLast: os.loadavg()[0],
  loadFiveMinutes: os.loadavg()[1],
  loadFifteenMinutes: os.loadavg()[2],
  cpus: os.cpus()
};

module.exports = systemStats;
