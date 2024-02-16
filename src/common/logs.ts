export const Logs = {
  /**
   * Print Warn
   * @param msg string : Message to print
   */
  printWarn(msg: string): void {
    printColor("yellow");
    console.log(`WARN : ${msg}`);
    printColor("reset");
  },

  /**
   * Print Debug
   * @param msg string : Message to print
   */
  printDebug(msg: string): void {
    console.log(`DEBUG : ${msg}`);
  },

  /**
   * Print Error
   * @param msg string : Message to print
   */
  printError(msg: string): void {
    printColor("red");
    console.log(`ERROR : ${msg}`);
    printColor("reset");
  },

  /**
   * Print Fatal Error
   * @param msg string : Message to print
   */
  printFatal(msg: string): string {
    printColor("red");
    console.log(`FATAL : ${msg}`);
    printColor("reset");
    Deno.exit(1);
  }
}

/**
 * Print given color
 * @param color string : Color to print
 */
function printColor(color: string): void {
  switch (color) {
    case "reset": {
      console.log(`\x1b[0m`);
      break;
    }
    case "red": {
      console.log(`\x1b[31m`);
      break;
    }
    case "yellow": {
      console.log(`\x1b[33m`);
      break;
    }
    default:
      break;
  }
}
