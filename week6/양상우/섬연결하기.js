// 섬연결하기
/**
 * 문제 설명
 *
 * n개의 섬 사이에 다리를 건설하는 비용(costs)이 주어질 때,
 * 최소의 비용으로 모든 섬이 서로 통행 가능하도록 만들 때
 * 필요한 최소 비용을 return 하도록 solution을 완성하세요.
 *
 * 다익스트라 알고리즘을 사용하면 될 것 같다.
 * union-find알고리즘은 이렇다
 * 가중치를 중심으로 그래프를 만든다.(오름차순)
 * 가중치가 가장 작은 간선을 선택한다.( 제일 앞)
 *
 * parent를 이용해 부모를 찾는다.
 *
 * 부모가 만약 다르다면 union을 통해 합친다. (한쪽 간선에 선택이 되게)
 *
 * 부모가 같다면 사이클이 생기므로 선택하지 않는다.
 *
 * sudo code:
 */

const find = (parent, x) => {
	if (parent[x] !== x) {
		parent[x] = find(parent, parent[x]);
	}

	return parent[x];
};

const union = (parent, rank, a, b) => {
	a = find(parent, a);
	b = find(parent, b);

	if (a === b) return;

	if (rank[a] > rank[b]) {
		parent[b] = a;
	}

	if (rank[a] < rank[b]) {
		parent[a] = b;
	}

	if (rank[a] === rank[b]) {
		parent[b] = a;
		rank[a] += 1;
	}
};

function solution(n, costs) {
	var answer = 0;
	const parent = Array(n)
		.fill(0)
		.map((_, i) => i);
	const rank = Array(n).fill(0);

	costs.sort((a, b) => a[2] - b[2]);

	for (const [from, to, cost] of costs) {
		if (find(parent, from) !== find(parent, to)) {
			union(parent, rank, from, to);
			answer += cost;
		}
	}

	return answer;
}
