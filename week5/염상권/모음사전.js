/**
 * 구할 수 있는 모든 경우의 수를 구한다. ( A, I, E, O, U ) -> 5^1 + 5^2 + 5^3 + 5^4 + 5^5 = 3905 가지
 * -> 그 경우의 수를 사전순으로 정렬한다.
 * -> 정렬된 배열에서, 해당 단어의 인덱스를 구한다.
 */

const vowels = ["A", "E", "I", "O", "U"];

const dfs = (maxLen) => {
  const loop = (now) => {
    if (now.length === maxLen) {
      return [now];
    }

    return vowels.flatMap((vowel) => loop(now + vowel));
  };

  return loop("");
};

const solution = (word) => {
  const arr = [];

  for (let i = 1; i <= 5; i++) {
    arr.push(...dfs(i));
  }

  console.log(arr.length);

  const sortedArr = arr.sort();
  const answer = sortedArr.findIndex((element) => element === word) + 1;

  return answer;
};

console.log(
  solution('AAAAE')
);
