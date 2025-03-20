import React, { useState } from 'react';
import LifeLoop from '../modules/lifeloop';
import Tasks from '../modules/tasks';
import Calendar from '../modules/calendar';

const Core = () => {
    const [activeModule, setActiveModule] = useState('lifeloop');

    return (
        <div>
            <nav>
                <button onClick={() => setActiveModule('lifeloop')}>LifeLoop 🔄</button>
                <button onClick={() => setActiveModule('tasks')}>Uzdevumi ✅</button>
                <button onClick={() => setActiveModule('calendar')}>Kalendārs 📅</button>
            </nav>
            
            <div>
                {activeModule === 'lifeloop' && <LifeLoop />}
                {activeModule === 'tasks' && <Tasks />}
                {activeModule === 'calendar' && <Calendar />}
            </div>
        </div>
    );
};

export default Core;

