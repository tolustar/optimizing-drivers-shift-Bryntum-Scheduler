import { BryntumScheduler } from '@bryntum/scheduler-react';
import { schedulerConfig } from './SchedulerConfig';
import './App.scss';

function App() {
    return (
        <BryntumScheduler {...schedulerConfig} />
    );
}

// If you plan to use stateful React collections for data binding please check this guide
// https://www.bryntum.com/docs/scheduler/guide/Scheduler/integration/react/data-binding

export default App;
