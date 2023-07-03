function solution(numbers) {
  // 1차시도
  let answer = "";
  let arr = [];
  for (let i = 0; i < numbers.length; i++) {
    arr.push(numbers[i].toString()); // 문자열로 변환하여 배열에 넣기
  }
  arr.sort((a, b) => b + a - (a + b)); // 문자열을 합쳐서 비교하기
  answer = sortArray(arr);
  return answer[0] === "0" ? "0" : answer; // answer의 첫번째가 0이면 0을 리턴
}

function sortArray(arr) {
  let answer = "";
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i]; // 정렬된 배열을 answer에 넣기
  }
  return answer;
}
