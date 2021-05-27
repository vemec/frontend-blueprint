// Core
import React, { cloneElement, useMemo, Fragment } from 'react';

// regex
const tagRe = /<(\w+)>(.*?)<\/\1>|<(\w+)\/>/;
const nlRe = /(?:\r\n|\r|\n)/g;

const getElements = (parts) => {
  if (!parts.length) return [];
  const [paired, children, unpaired, after] = parts.slice(0, 4);
  return [
    [(paired || unpaired), children || '', after],
  ].concat(getElements(parts.slice(4, parts.length)));
}

const formatElements = (value, elements = []) => {
  const parts = value.replace(nlRe, '').split(tagRe);
  if (parts.length === 1) return value;
  const tree = [];
  const before = parts.shift();
  if (before) tree.push(before);
  getElements(parts).forEach(([key, children, after], realIndex) => {
    const element = elements[key] || React.createElement(Fragment, null);
    tree.push(cloneElement(element, { key: realIndex },
      children ? formatElements(children, elements) : element.props.children));
    if (after) tree.push(after);
  });
  return tree;
}

export default function StringToHtml({ string, components }) {
  const result = useMemo(() => {
    const text = string;
    if (!components || components.length === 0) return text;
    return formatElements(text, components);
  }, [string, components]);
  return result;
}
