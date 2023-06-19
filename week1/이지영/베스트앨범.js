function solution(genres, plays) {
  var answer = []
  // 노래 고유번호별 장르,고유번호,재생횟수 담은 배열 infoForSongs
  let infoForSongs = []
  //장르에 따른 총 재생 횟수 담은 객체 totalPlayGenre
  let totalPlayGenre = {}

  genres.forEach((genre, idx) => {
    let info = { genre: '', index: 0, playCnt: 0 }
    info['genre'] = genres[idx]
    info['index'] = idx
    info['playCnt'] = plays[idx]
    infoForSongs.push(info)

    totalPlayGenre[genre]
      ? (totalPlayGenre[genre] = totalPlayGenre[genre] + plays[idx])
      : (totalPlayGenre[genre] = plays[idx])
  })
  
  totalPlayGenre = Object.entries(totalPlayGenre).sort((a, b) => b[1] - a[1])
  infoForSongs = infoForSongs.sort((a, b) => b.playCnt - a.playCnt)

  totalPlayGenre.forEach((genre, totalPlay) => {
    // 장르별 최대 2개까지만 앨범 출시 위한 임시 카운트 tempIdx
    let tempCount = 2

    for (let i = 0; i < infoForSongs.length; i++) {
      if (tempCount === 0) break

      if (genre[0] === infoForSongs[i]['genre']) {
        tempCount -= 1
        answer.push(infoForSongs[i]['index'])
      }
    }
  })

  return answer
}
