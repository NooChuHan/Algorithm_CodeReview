function solution(bridge_length, weight, truck_weights) {
  let bridge = Array(bridge_length).fill(0)
  let time = 0

  while (truck_weights.length > 0) {
    const truackWeight = truck_weights.shift()
    const sumTruckWeights = bridge.reduce((a, b) => a + b, 0)

    if (sumTruckWeights + truackWeight > weight) {
      bridge.push(0)
    } else {
      bridge.shift()
      bridge.push(truackWeight)
    }

    time += 1
  }

  return time
}

// 정답을 틀렸는데, 왜 오답이 나오는지 이유를 모르겠습니다!
