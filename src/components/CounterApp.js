import React from 'react';
import { createRoot } from 'react-dom/client';

export class CounterApp extends React.Component {

    constructor(props) {
        super(props);

        // inisialisasi nilai count di dalam state
        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <div>
                <p>TODO: selesaikan component-nya!</p>
            </div>
        );
    }
}


const root = createRoot(document.getElementById('root'));
root.render(<CounterApp />)