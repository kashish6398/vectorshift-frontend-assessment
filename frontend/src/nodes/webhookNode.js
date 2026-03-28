// webhookNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const WebhookNode = ({ id, data }) => {
  const [endpoint, setEndpoint] = useState(data?.endpoint || '/api/webhook');

  const handleEndpointChange = (e) => setEndpoint(e.target.value);

  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-payload` }
  ];

  return (
    <BaseNode id={id} label="Webhook" handles={handles}>
      <label>
        Endpoint:
        <input type="text" value={endpoint} onChange={handleEndpointChange} />
      </label>
      <div>Listens for events.</div>
    </BaseNode>
  );
}
