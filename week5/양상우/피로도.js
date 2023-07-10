// 순열을 만들고 최대 던전을 구하자, 만약 모든 던전만큼 길이가 나온다면 그 즉시 종료하자

function solution(k, dungeons) {
	// variable

	var answer = -1;
	const dungeonLength = dungeons.length;
	const dungeonCombination = [];
	const dungeonsChecked = Array.from({ length: dungeonLength }, () => false);

	// function

	/**
	 * dfsPermutaion
	 *
	 * 순열을 만들고 최대 던전을 구하자, 만약 모든 던전만큼 길이가 나온다면 그 즉시 종료하자
	 *
	 * @param {number} level
	 * @param {number[]} dungeonCombination
	 */
	const dfsPermutaion = (level) => {
		if (answer === dungeonLength) return;

		if (level == dungeonLength) {
			// 만족하면 출력
			answer = Math.max(checkDungeon(dungeonCombination), answer);
		}

		for (let i = 0; i < dungeons.length; i++) {
			if (dungeonsChecked[i]) continue;
			dungeonCombination[level] = dungeons[i];
			dungeonsChecked[i] = true; // 결과값으로 쓰였으면 true
			dfsPermutaion(level + 1); // 해당 재귀가 끝나면
			dungeonsChecked[i] = false; // 해당 재귀를 호출한 부모 노드도 다시 true로
		}
	};

	/**
	 * checkDungeon
	 *
	 * 던전을 체크하자, 더이상 피로도가 남아있지 않으면 종료하자
	 *
	 * @param {number[]} dungeon
	 * @returns {number} clear
	 */

	const checkDungeon = (dungeon) => {
		let clear = 0;
		let currentK = k;

		for (const [need, span] of dungeon) {
			if (currentK < need) continue;

			currentK -= span;
			clear++;
		}

		return clear;
	};

	// main
	dfsPermutaion(0);
	return answer;
}
