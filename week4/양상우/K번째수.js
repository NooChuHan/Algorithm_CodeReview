/**
 * K번째수 (Level 1)
 *
 * i부터 j까지 자르고 정렬했을 때 k번째에 있는 수를 구하려고 합니다.
 *
 * @author yangsangwoo
 * @license MIT
 * @ version 0.0.1
 * @ see {@link https://programmers.co.kr/learn/courses/30/lessons/42748}
 */

/**
 * sliceAndSort
 *
 * i부터 j까지 자르고 정렬한다
 *
 * @param {number[]} array // 배열
 * @param {number} i // 시작 인덱스
 * @param {number} j // 끝 인덱스
 * @returns {number[]} sliceAndSort // i부터 j까지 자르고 정렬한 배열
 *
 */
const sliceAndSort = (array, i, j) => {
	return array.slice(i - 1, j).sort((a, b) => a - b);
};

/**
 * getKthNumber
 *
 * i부터 j까지 자르고 정렬했을 때 k번째에 있는 수를 구한다
 *
 * @param {number[]} array // 배열
 * @param {number} i // 시작 인덱스
 * @param {number} j // 끝 인덱스
 * @param {number} k // k번째
 * @returns {number} kthNumber // k번째에 있는 수
 *
 */
const getKthNumber = (array, i, j, k) => {
	return sliceAndSort(array, i, j)[k - 1];
};

function solution(array, commands) {
	var answer = [];
	for (const [i, j, k] of commands) {
		answer.push(getKthNumber(array, i, j, k));
	}

	return answer;
}
