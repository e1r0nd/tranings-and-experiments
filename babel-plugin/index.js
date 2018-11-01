import looksLike from 'babel-looks-like';

function isConsoleLog({ node }) {
  return looksLike(node, {
    callee: {
      object: { name: 'console' },
      property: { name: 'log' },
    },
  });
}

export default ({ types: t }) => {
  return {
    visitor: {
      CallExpression(path) {
        if (isConsoleLog(path)) {
          path.node.arguments.unshift(t.stringLiteral('Bonify rocks'));
        }
      },
    },
  };
};
