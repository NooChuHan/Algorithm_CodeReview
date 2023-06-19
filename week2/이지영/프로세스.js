/**
 * 문제 설명
 * 특정 프로세스가 몇번째로 실행되는지 여부를 결정해야한다
 *
 * 먼저 현재 큐(FIFO) pop,
 * 현재 큐에 우선순위 더 높은 프로세스 있다면 큐에 push한다.
 * 없다면 프로세스를 실행해야 한다.
 * 단, 한번 실행한 프로세스 다시 큐에 넣지 않아야 한다.
 *
 *
 * 필요한 데이터 구조
 * 프로세스 실행 횟수 카운트 정보 담긴 변수 answer
 * 우선순위 정보 담긴 배열 queue
 * 프로세스 인덱스 정보담긴 배열 processes
 */

/**
 *
 * @param {Number[]} queue
 * @param {Number[]} processes
 * @param {Number} location
 */

function getLocationProcessIdx(queue, processes, location) {
  let answer = 0

  while (queue.length > 0) {
    const processesA = processes.shift()
    const priorityA = queue.shift()
    const res = queue.filter((priorityB) => priorityA < priorityB)

    if (res.length > 0) {
      queue.push(priorityA)
      processes.push(processesA)
    } else {
      // 실행시킨다
      answer += 1
      if (processesA === location) {
        return answer
      }
    }
  }
}

function solution(queue, location) {
  const processes = queue.map((val, idx) => idx)
  return getLocationProcessIdx(queue, processes, location)
}
