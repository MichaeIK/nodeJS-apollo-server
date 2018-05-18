const systemStatus = require("../utils").systemStatus;

const systemStatsSchema = [
  {
    data: systemStatus.freemem,
    stats: "Free memory"
  },
  {
    data: systemStatus.loadLast,
    stats: "Last cpu load"
  },
  {
    data: systemStatus.loadFiveMinutes,
    stats: "Load for last 5 minutes"
  },
  {
    data: systemStatus.loadFifteenMinutes,
    stats: "Load for last 15 minutes"
  },
  {
    data: systemStatus.cpus,
    stats: "Total cpus"
  }
];

module.exports = systemStatsSchema;
