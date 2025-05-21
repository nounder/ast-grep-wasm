/* tslint:disable */
/* eslint-disable */
/**
* @returns {Promise<void>}
*/
export function initializeTreeSitter(): Promise<void>;
/**
* @param {string} lang_name
* @param {string} parser_path
* @returns {Promise<void>}
*/
export function setupParser(lang_name: string, parser_path: string): Promise<void>;
/**
* @param {string} src
* @param {any[]} configs
* @returns {any}
*/
export function findNodes(src: string, configs: any[]): any;
/**
* @param {string} src
* @param {any[]} configs
* @returns {string}
*/
export function fixErrors(src: string, configs: any[]): string;
/**
* @param {string} src
* @returns {any}
*/
export function dumpASTNodes(src: string): any;
/**
* @param {string} src
* @param {string | undefined} [selector]
* @returns {any}
*/
export function dumpPattern(src: string, selector?: string): any;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly initializeTreeSitter: () => number;
  readonly setupParser: (a: number, b: number, c: number, d: number) => number;
  readonly findNodes: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly fixErrors: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly dumpASTNodes: (a: number, b: number, c: number) => void;
  readonly dumpPattern: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0c741fae27896180: (a: number, b: number, c: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly wasm_bindgen__convert__closures__invoke2_mut__h2c92f3b1207b1427: (a: number, b: number, c: number, d: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
