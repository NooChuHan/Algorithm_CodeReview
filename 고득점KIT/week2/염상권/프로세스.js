/**
 *  데이터 구조와 구현을 위해 우선순위와 문자를 매칭시켜준다.
 *  -> 실질적으로 실행될 우선순위에 따라 정렬시킨다.
 *  -> 정렬된 데이터를 가지고 인덱스를 찾아 반환한다.
 */

function solution(priorities, location) {
  const sortByPriority = (data) => {
    const d = data.map((v) => [...v]);

    for (let i = 0; i < d.length; i++) {
      const [, value] = d[i];
      const isMaxPriority = d.slice(i + 1).every(([, v]) => v <= value);

      if (isMaxPriority) continue;

      // NOTE: 해당 프로세스보다 우선순위가 높은 프로세스가 존재할 경우
      const [cur] = d.splice(i, 1);
      d.push(cur);
      i--;
    }

    return d;
  };

  const { data, target } = priorities.reduce(
    (acc, cur, i) => {
      const CHAR_A = 65;
      const char = String.fromCharCode(CHAR_A + i);

      return {
        data: [...acc.data, [char, cur]],
        target: i === location ? char : acc.target,
      };
    },
    {
      data: [],
      target: null,
    }
  );

  // NOTE: 정렬된 데이터에서 target의 인덱스를 찾아 반환한다.
  return sortByPriority(data).findIndex(([char]) => char === target) + 1;
}

console.log(solution([2, 1, 3, 2], 2)); // 1
