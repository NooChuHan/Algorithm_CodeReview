/**
 * 트럭이 지나갈 수 있는 자료구조를 만든다.
 * -> 트럭이 지나가면서 무게를 계산한다.
 *    -> 새로운 트럭이 지나갈 수 있다면, 트럭을 넣는다.
 *    -> 새로운 트럭이 트럭이 지나갈 수 없다면, 현재 있는 트럭만 앞으로 갈 수 있도록 한다.
 * -> 이 과정을 모든 트럭이 지나갈 때까지 반복한다.
 */

function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  const bridge = Array.from(Array(bridge_length), () => 0);
  const sumOfBridgeWeight = (array) => array.reduce((acc, cur) => acc + cur, 0);

  while (bridge.length) {
    // NOTE: 일단 트럭은 한 칸 앞으로 이동한 것으로 가정.
    bridge.shift();

    const currentSum = sumOfBridgeWeight([...bridge]);
    const currentTruckWeight = truck_weights.length;

    if (currentTruckWeight > 0) {
      const [nextTruckWeight] = truck_weights;

      // NOTE: 꽉 찼다면 0을 넣어 트럭이 한 칸 앞으로 이동할 수 있게 한다.
      if (currentSum + nextTruckWeight > weight) bridge.push(0);
      // NOTE: 꽉 차지 않았다면 그 다음 트럭이 지나갈 수 있게 한다.
      else {
        bridge.push(nextTruckWeight);
        truck_weights.shift();
      }
    }

    ++answer;
  }

  return answer;
}

console.log(solution(2, 10, [7, 4, 5, 6])); // 8
