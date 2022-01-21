/* eslint-disable no-console */
const log = (...content: string[] | unknown[]): void => console.log(content);
const logError = (...content: string[] | unknown[]): void =>
	console.error(content);

const isRendered = (controllerName: string): void =>
	log(`* Component "${controllerName}" Rendered *`);

export { log, logError, isRendered };
