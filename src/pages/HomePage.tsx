import { invoke } from "@tauri-apps/api/core";
import { useState } from "react";

export function HomePage() {

    const [disabled, setDisabled] = useState(false);


    function handleClick() {
        setDisabled(true);
        invoke('macro_test');
        setTimeout(() => setDisabled(false), 3000);
    }

    return (
        <div>
            <h1 className='font-semibold text-3xl'>Home Page</h1>
            <button 
                disabled={disabled} 
                onClick={handleClick} 
                className={`mt-4 px-4 py-2 bg-blue-500 text-white rounded 
                    ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600 cursor-pointer'}`}
            >
                {disabled ? 'Processing...' : 'Click me to see magic... heh...'}
            </button>
        </div>
    );
}