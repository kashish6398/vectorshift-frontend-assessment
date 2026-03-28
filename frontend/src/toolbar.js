// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
    return (
        <div className="pipeline-toolbar">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginRight: '16px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                <h2 style={{ margin: 0, fontSize: '18px', color: 'var(--primary)', fontWeight: 600 }}>Pipeline Builder</h2>
            </div>
            <DraggableNode type='customInput' label='Input' />
            <DraggableNode type='llm' label='LLM' />
            <DraggableNode type='customOutput' label='Output' />
            <DraggableNode type='text' label='Text' />
            <DraggableNode type='api' label='API Request' />
            <DraggableNode type='database' label='Database' />
            <DraggableNode type='transform' label='Transform' />
            <DraggableNode type='condition' label='Condition' />
            <DraggableNode type='webhook' label='Webhook' />
        </div>
    );
};
