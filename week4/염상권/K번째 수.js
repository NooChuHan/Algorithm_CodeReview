function solution(array, commands) {
  return commands.map((command) => {
    const [start, end, k] = command;
    return array.slice(start - 1, end).sort((a, b) => a - b)[k - 1];
  });
}
