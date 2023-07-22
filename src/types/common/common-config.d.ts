import type { PluginBase } from '../plugin/plugin-base';
import type { StorageBase } from '../storage/storage-base';

/**
 * Configuration parameters for the 'set` method.
 */
export type SetConfigOption =
	| Partial<Omit<CommonConfig, 'set' | 'lock'>>
	;

export interface CommonConfig {
	/**
	 * A static class that implements metadata {@link Storage} logic.
	 * @default Storage
	 */
	storage: StorageBase,

	/**
	 * The prefix by which the path of the controller method will be modified.
	 * @default '/api'
	 */
	prefixApi: string,

	/**
	 * A set of plugins, plugin events will be called in the order they are declared.
	 */
	plugins: PluginBase[],

	/**
	 * Lock the configuration and make it read-only.
	 * Use this to prevent accidental configuration editing.
	 * @readonly
	 */
	readonly lock: () => void,

	/**
	 * Set config parameters.
	 * After using this method, the configuration object will become read-only.
	 * @param config - Config params.
	 * @readonly
	 */
	readonly set: <T extends SetConfigOption>(config: T) => void,
}