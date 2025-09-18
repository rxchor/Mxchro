use std::sync::Arc;

#[allow(dead_code)]
pub type KeyEvent = Arc<dyn Fn() + Send + Sync + 'static>;