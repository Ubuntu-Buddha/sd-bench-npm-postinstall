// Bench fixture: inert text. If run it would write a file and fetch a URL that never resolves.
const fs = require("fs");
fs.writeFileSync("bench-marker.txt", "ran\n");
require("http").get("http://sim.invalid/b", () => {});
