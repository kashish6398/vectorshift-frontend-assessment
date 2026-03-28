// conditionNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const ConditionNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || 'value > 0');

  const handleConditionChange = (e) => setCondition(e.target.value);

  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-input` },
    { type: 'source', position: Position.Right, id: `${id}-true`, style: { top: '30%' } },
    { type: 'source', position: Position.Right, id: `${id}-false`, style: { top: '70%' } }
  ];

  return (
    <BaseNode id={id} label="Condition" handles={handles}>
      <label>
        If:
        <input type="text" value={condition} onChange={handleConditionChange} />
      </label>
    </BaseNode>
  );
}
