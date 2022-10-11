import { BryntumScheduler } from '@bryntum/scheduler-react';
import { schedulerConfig } from './SchedulerConfig';
import './App.scss';

function App() {

    const onEventDrag = (value) => {
      // Performing custom operation
      console.log("Event Dragged", value);
    }

    const eventDoubleClick = (value) => {
      // Performing custom operation
      console.log("Event Double Clicked", value);
    }

    return (
        <BryntumScheduler {...schedulerConfig} onEventDrag={onEventDrag} onEventDblClick={eventDoubleClick} eventDragCreateFeature={false} />
    );
}

// If you plan to use stateful React collections for data binding please check this guide
// https://www.bryntum.com/docs/scheduler/guide/Scheduler/integration/react/data-binding

export default App;
