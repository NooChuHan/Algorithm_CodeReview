/**
 * dfs를 이용하여 본인이 방문한 던전의 갯수를 세어준다.
 * 
 * dfs를 이용하여, 각 던전을 방문한 카운트를 세어준다.
 * -> 재귀를 통해, 각각의 루프를 돌면서, 본인이 방문한 던전의 갯수를 카운트한다.
 * -> 재귀의 종료조건은, 현재 피로도가 던전의 최소 피로도보다 작거나, 이미 방문한 던전일 때 종료한다.
 * -> 재귀의 루프가 종료되면 가질 수 있는 최대 값을 답으로 정한다.
 */

function dfs(k, dungeons, footPrint, count = 0) { 
  return dungeons.reduce((acc, dungeon, index) => {
    const [fatigue, stress] = dungeon;
    const isVisited = footPrint[index];

    if (k < fatigue || isVisited) return acc;

    const newFootPrint = [...footPrint];
    newFootPrint[index] = true;

    return Math.max(acc, dfs(k - stress, dungeons, newFootPrint, count + 1));
  }, count);
}

function solution(k, dungeons) {
  return dfs(k, dungeons, Array(dungeons.length).fill(false));
}

console.log(
  solution(80, [[80, 20], [50, 40], [30, 10]])
)
