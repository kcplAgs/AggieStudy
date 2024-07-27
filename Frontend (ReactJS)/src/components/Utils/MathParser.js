import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';

const parseAndRenderMath = (text) => {
  // Regular expression to match LaTeX equations
  // Inline math: $...$
  // Block math: $$...$$
  const mathRegex = /(\$\$[\s\S]+?\$\$|\$[\s\S]+?\$)/g;

  const parts = text.split(mathRegex);

  return parts.map((part, index) => {
    if (part.startsWith('$$') && part.endsWith('$$')) {
      // Block math
      return <BlockMath key={index} math={part.slice(2, -2)} />;
    } 
    else if (part.startsWith('$') && part.endsWith('$')) {
      // Inline math
      return <InlineMath key={index} math={part.slice(1, -1)} />;
    } 
    else {
      // Regular text
      return part;
    }
  });
};

export default parseAndRenderMath;