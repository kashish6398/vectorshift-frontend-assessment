// textNode.js

import { useState, useEffect } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

// Regex to find variables properly formatted as {{ variable_name }}
// Ensuring it handles spaces inside the curly braces correctly
const variableRegex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);

  useEffect(() => {
    const matches = Array.from(currText.matchAll(variableRegex)).map(match => match[1]);
    const uniqueVars = [...new Set(matches)];
    setVariables(uniqueVars);
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const handles = [
    // Dynamic handles for each extracted variable
    ...variables.map((v, index) => ({
      type: 'target',
      position: Position.Left,
      id: `${id}-${v}`,
      // Dynamically spread handles evenly across the left side
      style: { top: `${((index + 1) * 100) / (variables.length + 1)}%` }
    })),
    // Standard output handle
    { type: 'source', position: Position.Right, id: `${id}-output` }
  ];

  // Calculate generic sizing dynamically
  const calculateSize = () => {
    const lines = currText.split('\n');
    const rows = lines.length;
    const maxCols = Math.max(...lines.map(line => line.length));
    
    return {
      width: Math.max(200, maxCols * 8 + 30),
      height: Math.max(80, rows * 20 + 50),
    };
  };

  const size = calculateSize();

  return (
    <BaseNode id={id} label="Text" handles={handles} style={{ width: size.width, height: size.height }}>
      <label>
        Text:
        <textarea 
          value={currText} 
          onChange={handleTextChange} 
          style={{ width: '100%', height: `${size.height - 50}px`, boxSizing: 'border-box', overflow: 'hidden', resize: 'none' }}
        />
      </label>
    </BaseNode>
  );
}
