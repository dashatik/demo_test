export const COST_TRENDS = {
  Compute: [
    { region: 0, transtar: 1100, aws: 2000 },
    { region: 1, transtar: 1300, aws: 2180 },
    { region: 2, transtar: 1550, aws: 2440 },
    { region: 3, transtar: 1810, aws: 2790 },
    { region: 4, transtar: 2080, aws: 3125 },
    { region: 5, transtar: 2340, aws: 3370 },
  ],
  Bandwidth: [
    { region: 0, transtar: 250, aws: 800 },
    { region: 1, transtar: 420, aws: 940 },
    { region: 2, transtar: 630, aws: 1200 },
    { region: 3, transtar: 810, aws: 1510 },
    { region: 4, transtar: 990, aws: 1760 },
    { region: 5, transtar: 1160, aws: 2040 },
  ],
  Logging: [
    { region: 0, transtar: 350, aws: 900 },
    { region: 1, transtar: 510, aws: 1050 },
    { region: 2, transtar: 740, aws: 1340 },
    { region: 3, transtar: 960, aws: 1630 },
    { region: 4, transtar: 1180, aws: 1860 },
    { region: 5, transtar: 1390, aws: 2130 },
  ],
  "Disaster Recovery": [
    { region: 0, transtar: 600, aws: 900 },
    { region: 1, transtar: 870, aws: 1080 },
    { region: 2, transtar: 1100, aws: 1375 },
    { region: 3, transtar: 1340, aws: 1620 },
    { region: 4, transtar: 1580, aws: 1925 },
    { region: 5, transtar: 1840, aws: 2185 },
  ],
};


export default COST_TRENDS;
