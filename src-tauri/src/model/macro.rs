use Mode;

struct Macro {
    triggerKey: VIRTUAL_KEY,
    mode: Mode, // TOGGLE, HOLD, ONCE
    action: KeyEvent,
    blockOriginalEvent: bool,
    repeat: Option<bool>,
}