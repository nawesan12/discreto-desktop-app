// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[tauri::command]
fn console_message(message: &str) -> String {
    format!("Message from backend: {}", message)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![console_message])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
