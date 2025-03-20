import React, { useState } from 'react';
import TaskManager from './components/TaskManager';

function App() {
    const [view, setView] = useState('1/3');

    return (
        <div className="App">
            <h1>Planner App</h1>
            <nav>
                <button onClick={() => setView('1/3')}>1/3</button>
                <button onClick={() => setView('2/3')}>2/3</button>
                <button onClick={() => setView('3/3')}>3/3</button>
            </nav>
            {view === '1/3' && <TaskManager />}
            {view === '2/3' && <h2>Plānotājs (2/3)</h2>}
            {view === '3/3' && <h2>Kalendārs (3/3)</h2>}
        </div>
    );
}

export default App;
