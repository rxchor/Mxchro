import { Mode } from "./Mode";

export interface Macro {
    actionKey: string;
    disableToggleKey?: string;
    mode: Mode;
    blockOriginalKey: boolean;
}