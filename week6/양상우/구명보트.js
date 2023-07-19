// 구명보트
/**
 * 문제 설명
 *
 * 무인도에 갇힌 사람들을 구명보트를 이용하여 구출하려고 합니다.
 * 탐욕법을 이용해서 구명보트를 최대한 적게 사용하여 모든 사람을 구출하려고 합니다.
 *
 * sudo code
 * 1. people을 오름차순으로 정렬한다.
 * 2. people의 가장 큰 값과 가장 작은 값을 더한다.
 * 3. 더한 값이 limit보다 크면 가장 큰 값을 빼고, answer에 1을 더한다. (넘는다면, 큰것만)
 * 4. 더한 값이 limit보다 작거나 같으면 가장 큰 값과 가장 작은 값을 빼고, answer에 1을 더한다. ( 안넘는다면, 큰것과 작은것)
 *
 * @autor yangsawoo
 * @date 2021-10-19
 */

const greedy = (people, limit) => {
	let answer = 0;
	let left = 0;
	let right = people.length - 1;

	while (left < right) {
		if (people[left] + people[right] <= limit) {
			left++;
		}
		right--;
		answer++;
	}

	if (left === right) answer++;

	return answer;
};

function solution(people, limit) {
	var answer = 0;

	people.sort((a, b) => a - b);

	answer = greedy(people, limit);

	return answer;
}
