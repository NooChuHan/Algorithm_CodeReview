// 끊어진 부분을 이미 지나온 길이라고 생각하고 dfs를 돌려서 길이를 구하면 될 것 같다.
function solution(n, wires) {
	// variable
	let answer = [];

	const wireLength = wires.length;
	let grahp = {};

	// 연결 상태를 나타내는 그래프 만들기
	for (let wire of wires) {
		if (!(wire[0] in grahp)) grahp[wire[0]] = [wire[1]];
		else grahp[wire[0]].push(wire[1]);
		if (!(wire[1] in grahp)) grahp[wire[1]] = [wire[0]];
		else grahp[wire[1]].push(wire[0]);
	}

	// function

	/**
	 * checkWire
	 *
	 * @param {number[]} wire
	 * @returns {number} wireCount
	 *
	 */

	const dfsStack = (wire) => {
		const [start, end] = wire;
		const stack = [...grahp[start]];
		const visited = {};
		let count = 1;

		visited[start] = true;
		visited[end] = true;

		while (stack.length !== 0) {
			const temp = stack.pop();
			if (!visited[temp]) {
				visited[temp] = true;
				stack.push(...grahp[temp]);
				count += 1;
			}
		}
		answer.push(Math.abs(count * 2 - n));
	};

	// main

	for (let i = 0; i < wireLength; i++) {
		dfsStack(wires[i]);
	}

	return Math.min(...answer);
}

console.log(
	solution(9, [
		[1, 3],
		[2, 3],
		[3, 4],
		[4, 5],
		[4, 6],
		[4, 7],
		[7, 8],
		[7, 9],
	])
); // 0
