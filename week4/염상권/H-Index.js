function solution(citations) {
  const maxH = citations
    .sort((a, b) => b - a)
    .findIndex((citation, index) => citation < index + 1);

  return maxH === -1 ? citations.length : maxH;
}
