function solution(array, commands) {
  return commands.map(([sPosition, ePosition, position]) => {
    return array
      .filter(
        (value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1
      )
      .sort((a, b) => a - b)[position - 1];
  });
}
