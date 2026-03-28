// databaseNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const DatabaseNode = ({ id, data }) => {
  const [dbName, setDbName] = useState(data?.dbName || 'users_db');
  const [action, setAction] = useState(data?.action || 'READ');

  const handleDbNameChange = (e) => setDbName(e.target.value);
  const handleActionChange = (e) => setAction(e.target.value);

  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-query` },
    { type: 'source', position: Position.Right, id: `${id}-result` }
  ];

  return (
    <BaseNode id={id} label="Database" handles={handles}>
      <label>
        DB Name:
        <input type="text" value={dbName} onChange={handleDbNameChange} />
      </label>
      <label>
        Action:
        <select value={action} onChange={handleActionChange}>
          <option value="READ">READ</option>
          <option value="WRITE">WRITE</option>
        </select>
      </label>
    </BaseNode>
  );
}
