#[allow(dead_code)]
pub type KeyEvent = Box<dyn Fn() + Send + 'static>;