/**
 * 문제이해
 *
 * truck_weight와
 * bride를 만든다
 *
 * 반복문을 돌리고,
 * truck_weight길이와 bridge 길이가 모두 0이 되기 전까지 계속 돌린다.
 *
 *
 * 먼저 bridege에서 pop()하고,
 * brdege에 올라간 트럭 전체합을 구한다음
 * weight랑 비교했을때 weight가 더 크면
 * truck_weight pop해서 bridge에 추가하고
 * weight가 더 작으면
 * 0을 추가한다.
 * time 1초 추가한다
 *
 */

function solution(bridge_length, weight, truck_weights) {
  let bridge = Array(bridge_length).fill(0)
  let arrivedQueue = []
  let time = 0

  while (truck_weights.length !== arrivedQueue.length) {
    const sumTruckWeights = bridge.reduce((a, b) => a + b, 0)

    if (truck_weights[0]) {
      if (sumTruckWeights + truck_weights[0] <= weight) {
        bridge.push(truck_weights.shift())
      } else {
        bridge.push(0)
      }
    }

    time += 1
    console.log(truck_weights)
    console.log(bridge)
  }

  return time

  function moveTruck() {
    const goingOutTruck = bridge.shift()

    if (goingOutTruck !== 0) {
      arrivedQueue.push(goingOutTruck)
    }
  }

  function getSumTruckWeights() {}
}
