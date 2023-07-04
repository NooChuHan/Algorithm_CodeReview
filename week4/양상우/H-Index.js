/**
 * H-Index (Level 2)
 *
 * H-Index를 구하는 문제입니다.
 *
 * @param {number[]} citations // 인용 횟수 배열
 * @returns {number} // H-Index 값
 *
 * @see {@link https://programmers.co.kr/learn/courses/30/lessons/42747}
 */
function solution(citations) {
	const sortedCitations = citations.sort((a, b) => b - a);
	let hIndex = 0;

	for (let i = 0; i < sortedCitations.length; i++) {
		if (sortedCitations[i] > i) {
			hIndex++;
		} else {
			break;
		}
	}

	return hIndex;
}
