/**
 * 1. 속한 노래가 많이 재생된 장르를 먼저 수록
 * 2. 장르 내에서 많이 재생된 노래를 먼저 수록
 * 3. 장르 내에서 재생 횟수가 같은 노래중에서는 고유 번호가 낮은 노래를 먼저 수록
 *
 * 노래의 장르를 나타내는 문자열 배열 genres와
 * 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때
 * 베스트 엘범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하라.
 *
 * -> 정렬이 되어야할 장르의 순서를 먼저 구한다.
 * -> 장르별로 구분한다.
 * -> 순서를 구한 장르별로 정렬한다.
 * -> 정렬된 장르별로 2개씩 뽑는다.
 * -> 뽑은 고유번호를 리턴한다.
 */

const zip = (a, b) =>
  Array.from(Array(Math.max(b.length, a.length)), (_, i) => [a[i], b[i]]);

function solution(genres, plays) {
  // NOTE: 장르별로 재생 횟수를 구한다.
  const countPlayListByGenres = zip(genres, plays).reduce((acc, cur) => {
    const [genre, play] = cur;

    if (!acc[genre]) return { ...acc, [genre]: play };

    return { ...acc, [genre]: acc[genre] + play };
  }, {});

  // NOTE: 재생 횟수가 가장 많은 장르 순으로 정렬한다.
  const genreOrder = Object.entries(countPlayListByGenres)
    .sort((a, b) => b[1] - a[1])
    .map((v) => v[0]);

  // NOTE: 포멧에 맞게 엘범을 만든다.
  const albums = zip(genres, plays).map((v, i) => {
    // NOTE: [고유번호, 장르, 재생횟수]
    return [i, ...v];
  });

  // NOTE: 엘범을 장르별로 구분한다.
  const divideByAlbum = albums.reduce((acc, cur) => {
    const [, genre] = cur;

    if (!acc[genre]) return { ...acc, [genre]: [cur] };

    return { ...acc, [genre]: [...acc[genre], cur] };
  }, {});

  // NOTE: 장르별로 계산하여, 최종 값을 도출한다.
  return genreOrder.reduce((acc, cur) => {
    const sortedAlbum = divideByAlbum[cur]
      .sort((a, b) => b[2] - a[2])
      .slice(0, 2);

    return [...acc, ...sortedAlbum.map((v) => v[0])];
  }, []);
}

console.log(
  solution(
    ['classic', 'pop', 'classic', 'classic', 'pop'],
    [500, 600, 150, 800, 2500]
  )
);
