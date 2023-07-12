// A, AA, AAA ... UUUUU /
// 무식한 방법으로는 사전 배열을 만들고 해당 값에 맞는 문자열을 찾으면 된다.

function solution(word) {
	var answer = 0;

	const arr = ["A", "E", "I", "O", "U"];
	const result = [];
	const combination = [];

	const combinationDFS = (level, tagetLevel) => {
		if (level == tagetLevel) {
			result.push(combination.join(""));
			return;
		}

		for (let i = 0; i < arr.length; i++) {
			combination[level] = arr[i];
			combinationDFS(level + 1, tagetLevel);
		}
	};

	for (let i = 0; i < arr.length; i++) {
		combinationDFS(0, i + 1);
	}

	result.sort();
	answer = result.indexOf(word) + 1;
	return answer;
}
