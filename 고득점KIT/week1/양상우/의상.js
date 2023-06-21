// 각 종류에 따른 옷을 분류하고 경우의 수를 return 하면 된다
/**
 *
 * sudo code:
 * 1. 종류별로 의상을 분류 한다
 * 2. 경우의 수를 구한다(종류별로 의상의 개수 + 하나만 입는 경우)
 */

/**
 * categoryClothes
 * 의상을 종류별로 분류한다
 *
 * @param {['clothes', 'categori'][]} clothes // 의상 이름, 의상 종류
 * @returns {Map} categorized // 의상 종류, 의상 개수
 */
const categorizedClothes = (clothes) => {
	const categorized = new Map();
	for (const [cloteh, categori] of clothes) {
		if (categorized.has(categori)) {
			categorized.set(categori, categorized.get(categori) + 1);
		} else {
			categorized.set(categori, 1);
		}
	}
	return categorized;
};

/**
 * getCombination
 * 경우의 수를 구한다
 *
 * @param {Map} categorized // 의상 종류, 의상 개수
 * @returns {number} combination // 경우의 수
 *
 * @example
 */
const getCombination = (categorized) => {
	let combination = 1;
	for (const [key, value] of categorized) {
		combination *= value + 1;
	}

	// 모든 의상을 섵낵하지 않는 경우
	return combination - 1;
};

function solution(clothes) {
	// 1. 종류별로 의상을 분류 한다
	const categorized = categorizedClothes(clothes);
	// 2. 경우의 수를 구한다(종류별로 의상의 개수 + 하나만 입는 경우)
	const answer = getCombination(categorized);
	return answer;
}
