/**
 * 문제 설명
 * 분류하고 2개씩 모아 베스트 앨뱀을 만든다
 * 필터를 통해 어떤걸 수록해야할지를 정해야한다
 * 1. 장르의 분류
 * 2. 재생의 분류
 * 3. 고유번호의 분류
 *
 * 장르의 분류
 * 1. 해쉬를 사용하여 장르별 고유번호를 분류한다
 *
 * 재생의 분류
 * 2. 장르별로 분류된 고유번호를 재생의 합으로 분류한다
 * 3. 재생횟수합이 높은 순으로 정렬한다
 *
 * 고유 번호의 분류
 * 4. 재생횟수로 정렬된 고유번호를 고유번호로 분류한다
 * 5. 재생횟수가 같은 경우 고유번호가 낮은 순으로 정렬한다
 *
 * 베스트 앨범의 분류
 * 6. 장르별로 2개씩 베스트 앨범을 만든다
 *
 * 이상적인 데이터 구조
 * 장르별 고유번호 분류
 * 장르별 재생횟수총합 분류
 *
 */
function getTotalPlaysBasedOnGenres(genres, plays) {
	const totalPlaysBasedOnGenres = new Map();

	for (let i = 0; i < genres.length; i++) {
		const genre = genres[i];
		const play = plays[i];

		if (totalPlaysBasedOnGenres.has(genre)) {
			totalPlaysBasedOnGenres.set(
				genre,
				totalPlaysBasedOnGenres.get(genre) + play
			);
		} else {
			totalPlaysBasedOnGenres.set(genre, play);
		}
	}

	return totalPlaysBasedOnGenres;
}

function getSortedTotalPlaysBasedOnGenres(totalPlaysBasedOnGenres) {
	const sortedTotalPlaysBasedOnGenres = [...totalPlaysBasedOnGenres]
		.sort((a, b) => b[1] - a[1])
		.map((entry) => entry[0]);

	return sortedTotalPlaysBasedOnGenres;
}

function getIndexesBasedOnGenres(genres) {
	const indexesBasedOnGenres = new Map();

	for (let i = 0; i < genres.length; i++) {
		const genre = genres[i];

		if (indexesBasedOnGenres.has(genre)) {
			indexesBasedOnGenres.get(genre).push(i);
		} else {
			indexesBasedOnGenres.set(genre, [i]);
		}
	}

	return indexesBasedOnGenres;
}

function getSortedIndexesBasedOnPlays(indexesBasedOnGenres, plays) {
	const sortedIndexesBasedOnPlays = new Map();

	for (const [genre, indexes] of indexesBasedOnGenres) {
		indexes.sort((a, b) => {
			if (plays[a] !== plays[b]) {
				return plays[b] - plays[a];
			} else {
				return a - b;
			}
		});

		sortedIndexesBasedOnPlays.set(genre, indexes);
	}

	return sortedIndexesBasedOnPlays;
}

function getBestAlbum(
	sortedTotalPlaysBasedOnGenres,
	sortedIndexesBasedOnPlays
) {
	const bestAlbum = [];

	for (const genre of sortedTotalPlaysBasedOnGenres) {
		const indexes = sortedIndexesBasedOnPlays.get(genre);

		bestAlbum.push(...indexes.slice(0, 2));
	}

	return bestAlbum;
}

function solution(genres, plays) {
	const totalPlaysBasedOnGenres = getTotalPlaysBasedOnGenres(genres, plays);
	const sortedTotalPlaysBasedOnGenres = getSortedTotalPlaysBasedOnGenres(
		totalPlaysBasedOnGenres
	);
	const indexesBasedOnGenres = getIndexesBasedOnGenres(genres);
	const sortedIndexesBasedOnPlays = getSortedIndexesBasedOnPlays(
		indexesBasedOnGenres,
		plays
	);
	const bestAlbum = getBestAlbum(
		sortedTotalPlaysBasedOnGenres,
		sortedIndexesBasedOnPlays
	);

	return bestAlbum;
}
