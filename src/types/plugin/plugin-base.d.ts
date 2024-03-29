import type { PluginEventCallback } from './plugin-event-callback';
import type { PluginEventMap, PluginEventNames } from './plugin-events-map';

/**
 * A set of required fields for storage implementation.
 */
export interface PluginBase<Config extends object = any> {
	config: Config,
	configurate: (config: Config) => void,
	on: <T extends PluginEventNames> (event: T, cb: PluginEventCallback<PluginEventMap[T], Config>) => void,
	callEvent: <T extends PluginEventNames> (event: T, params: PluginEventMap[T]) => void,
}