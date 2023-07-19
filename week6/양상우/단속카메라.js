// 단속 카메라
/**
 * 문제 설명
 *
 * 고속도로를 이동하는 모든 차량이 고속도로를 이용하면서 단속용 카메라를
 * 한 번은 만나도록 카메라를 설치하려고 합니다.
 *
 * Greddy 알고리즘을 사용하여 문제를 해결하자.
 * 빠지는 차량의 시간 순서대로 정렬하고, 진입 차량의 시간과 비교한다.
 * 카메라 위치가 진입하는 카메라 보다 뒤에 있다면, 카메라를 설치한다, 이후 카메라 위치를 갱신한다.
 */

function solution(routes) {
	var answer = 0;

	routes.sort((a, b) => a[1] - b[1]);

	let camera = -30001;

	for (const [start, end] of routes) {
		if (camera < start) {
			camera = end;
			answer++;
		}
	}

	return answer;
}
