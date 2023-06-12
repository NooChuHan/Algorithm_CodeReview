/**
 * -> 의상의 경우의 수를 구한다. ( 입지 않은 경우도 포함해야 )
 * -> 의상의 종류별로 갯수를 구한다. ( 모두 입지 않은 경우를 빼야. )
 */

function solution(clothes) {
  // NOTE: 의상 종류별로 갯수를 저장
  const clothesMap = clothes.reduce((map, arr) => {
    const [, name] = arr;
    if (map.has(name)) {
      map.set(name, map.get(name) + 1);
    } else {
      map.set(name, 1);
    }

    return map;
  }, new Map());

  // NOTE: 모든 옷을 입지 않은 경우를 제외해야 한다.
  return [...clothesMap.values()].reduce((acc, cur) => acc * (cur + 1), 1) - 1;
}

console.log(
  solution([
    ['yellow_hat', 'headgear'],
    ['blue_sunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ])
);
