// BaseNode.js

import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, label, children, handles = [], style = {} }) => {
  return (
    <div className="custom-node" style={style}>
      {handles.map((h, i) => (
        <Handle 
          key={h.id || i} 
          type={h.type} 
          position={h.position} 
          id={h.id} 
          style={h.style} 
        />
      ))}
      <div className="node-header">
        <span>{label}</span>
      </div>
      <div className="node-content">
        {children}
      </div>
    </div>
  );
};
