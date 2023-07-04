/**
 * 가장 큰 수(level 2)
 *
 * 주어진 양수들을 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.
 *
 * 정렬 규칙으로는 다음과 같습니다.
 * 가장 앞자리가 큰 수가 앞에 옵니다.
 * 만약 가장 앞자리가 같다면, 두번째 자리수가 큰 수가 앞에 옵니다.
 * 만약 두번째 자리수도 같다면, 세번째 자리수가 큰 수가 앞에 옵니다.
 * ...
 *
 * 위의 규칙대로라면 9가 34보다 큰 수이고, 34가 3보다 큰 수입니다.
 * 따라서 9 34 3 순으로 정렬하면 됩니다.
 *
 * 예를 들어서 [3, 30, 34, 5, 9] 가 주어지면
 * 9534330을 만들 수 있습니다.
 *
 * @autor yangsangwoo
 * @license MIT
 * @version 0.0.1
 * @see {@link https://programmers.co.kr/learn/courses/30/lessons/42746}
 *
 */

/**
 * compare
 *
 * a와 b를 비교한다
 *
 * @param {number} a // 비교할 숫자
 * @param {number} b // 비교할 숫자
 * @returns {number} // 비교 결과
 *
 * @example
 * compare(3, 30); // 330
 * compare(30, 3); // 330
 * compare(34, 3); // 343
 * compare(3, 34); // 343
 * compare(9, 34); // 934
 * compare(34, 9); // 934
 *
 */
const compare = (a, b) => {
	return Number(`${a}${b}`) - Number(`${b}${a}`);
};

/**
 * solution
 *
 * 주어진 양수들을 이어 붙여 만들 수 있는 가장 큰 수를 알아낸다
 *
 * @param {number[]} numbers // 양수들
 * @returns {string} // 가장 큰 수
 *
 */

function solution(numbers) {
	var answer = numbers
		.map((v) => v.toString())
		.sort(compare)
		.reverse()
		.join("");
	return answer[0] === "0" ? "0" : answer;
}
