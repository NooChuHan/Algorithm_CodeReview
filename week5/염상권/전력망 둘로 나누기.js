function dfs(targetNode, connectedNode, tree) {
  let count = 0;
  const visit = new Set();
  const queue = [targetNode];
  visit.add(targetNode);

  while (queue.length) {
    const nodeNum = queue.shift();
    for (const node of tree[nodeNum]) {
      if (node !== connectedNode && !visit.has(node)) {
        visit.add(node);
        queue.push(node);
      }
    }
    count++;
  }
  
  return count;
}

function makeTree(n, wires) { 
  const tree = Array.from(Array(n + 1), () => []);

  wires.forEach((element) => {
    const [v1, v2] = element;

    tree[v1].push(v2);
    tree[v2].push(v1);
  });

  return tree;
}

function solution(n, wires) {
  let tree = makeTree(n, wires);

  return Math.min(...wires.map((element) => {
    let [v1, v2] = element;
    return Math.abs(dfs(v1, v2, tree) - dfs(v2, v1, tree));
  }));
}

console.log(
  solution(9,[[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]])
)

