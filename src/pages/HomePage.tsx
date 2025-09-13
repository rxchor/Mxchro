import { invoke } from "@tauri-apps/api/core";

export function HomePage() {

    function handleClick() {
        invoke('macro_test');
    }

    return (
        <div>
            <h1 className='font-semibold text-3xl'>Home Page</h1>
            <button onClick={handleClick} className='p-2 border-2 border-black cursor-pointer'>Click me to see magic... heh</button>
        </div>
    );
}