import { Logs } from "./logs.ts";

export const Env =  {
	/**
	 * Get Environement Variable Value as String
	 * @param name : Env Var name
	 * @param required : True = crash if empty or missing
	 */
	getEnvVarAsString(name: string, required = true): string {
		if (!name && required) {
			if (name === undefined) {
				Logs.printFatal(`Missing Env Var name !`);
				// Since printFatal stop the code, we can return an empty string
				return "";
			}
		}
		// We get the environement variable value
		// According to the documentation, var will be undefined if not set
		const envValue = Deno.env.get(name);

		if (envValue === undefined) {
			// If Env Var is undefined
			if (required) {
				Logs.printFatal(`Missing Env Var ${name}`);
				return "";
			} else {
				return "";
			}
		} else if (envValue.length === 0) {
			// If Env Var is an empty string
			if (required) {
				Logs.printFatal(`Empty Env Var ${name}`);
				return "";
			}
		}
		return envValue;
	},

    /**
	 * Get Environement Variable Value as Number
	 * @param name : Env Var name
	 * @param required : True = crash if empty or missing
	 */
	getEnvVarAsNumber(name: string, required = true): number {
		const valAsStr = this.getEnvVarAsString(name, required);
		const valAsNumber = parseInt(valAsStr);
		return valAsNumber;
	}
}
