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

/**
 * countPlaysByGenres
 *
 * 장르별 재생횟수 총합을 구한다
 *
 * @param {string[]} genres
 * @param {number[]} plays
 * @returns {Object} countPlaysByGenres
 */
function countPlaysByGenres(genres, plays) {
	const countPlaysByGenres = {};

	// 장르별 재생횟수 총합을 구한다
	for (let i = 0; i < genres.length; i++) {
		const genre = genres[i];
		const play = plays[i];

		if (!countPlaysByGenres[genre]) {
			countPlaysByGenres[genre] = play;
		} else {
			countPlaysByGenres[genre] += play;
		}
	}

	return countPlaysByGenres;
}

/**
 * 	sortGenresByPlayCount
 *
 * 장르별 재생횟수 총합을 내림차순으로 정렬한다
 *
 * @param {Object} countPlaysByGenres
 * @returns {string[]} sortedGenres
 */
function sortGenresByPlayCount(countPlaysByGenres) {
	// 장르별 재생횟수 총합을 내림차순으로 정렬한다
	const sortedGenres = Object.entries(countPlaysByGenres)
		.sort((a, b) => b[1] - a[1])
		.map((entry) => entry[0]);

	return sortedGenres;
}

/**
 * groupAlbumsByGenre
 *
 * 장르별 앨범을 그룹화한다
 *
 * @param {string[]} genres
 * @param {number[]} plays
 * @returns {Object} groupedAlbums
 */
function groupAlbumsByGenre(genres, plays) {
	const albums = [];

	for (let i = 0; i < genres.length; i++) {
		albums.push({ id: i, genre: genres[i], play: plays[i] });
	}

	const groupedAlbums = albums.reduce((acc, album) => {
		const { genre } = album;

		if (!acc[genre]) {
			acc[genre] = [album];
		} else {
			acc[genre].push(album);
		}

		return acc;
	}, {});

	return groupedAlbums;
}

function getBestAlbumOrder(genres, plays) {
	const countPlays = countPlaysByGenres(genres, plays);
	const sortedGenres = sortGenresByPlayCount(countPlays);
	const groupedAlbums = groupAlbumsByGenre(genres, plays);

	const bestAlbumOrder = sortedGenres.reduce((acc, genre) => {
		const sortedAlbums = groupedAlbums[genre]
			.sort((a, b) => b.play - a.play || a.id - b.id) // 재생횟수가 같은 경우 고유번호가 낮은 순으로 정렬한다
			.slice(0, 2);

		// 장르별로 2개씩 고유번호를 리턴한다
		return [...acc, ...sortedAlbums.map((album) => album.id)];
	}, []);

	return bestAlbumOrder;
}

function solution(genres, plays) {
	return getBestAlbumOrder(genres, plays);
}
