class PriorityQueue {
	constructor() {
		this.heap = [];
	}

	push(item) {
		this.heap.push(item);
		this._siftUp();
	}

	pop() {
		const item = this.heap[0];
		const lastItem = this.heap.pop();
		if (this.heap.length > 0) {
			this.heap[0] = lastItem;
			this._siftDown();
		}
		return item;
	}

	size() {
		return this.heap.length;
	}

	_siftUp() {
		let index = this.heap.length - 1;
		while (index > 0) {
			const parentIndex = Math.floor((index - 1) / 2);
			if (this.heap[parentIndex][0] <= this.heap[index][0]) break;
			[this.heap[parentIndex], this.heap[index]] = [
				this.heap[index],
				this.heap[parentIndex],
			];
			index = parentIndex;
		}
	}

	_siftDown() {
		let index = 0;
		const length = this.heap.length;
		while (index < length) {
			const leftChildIndex = 2 * index + 1;
			const rightChildIndex = 2 * index + 2;
			let smallestIndex = index;
			if (
				leftChildIndex < length &&
				this.heap[leftChildIndex][0] < this.heap[smallestIndex][0]
			) {
				smallestIndex = leftChildIndex;
			}
			if (
				rightChildIndex < length &&
				this.heap[rightChildIndex][0] < this.heap[smallestIndex][0]
			) {
				smallestIndex = rightChildIndex;
			}
			if (smallestIndex === index) break;
			[this.heap[smallestIndex], this.heap[index]] = [
				this.heap[index],
				this.heap[smallestIndex],
			];
			index = smallestIndex;
		}
	}
}
// 라이브러리를 사용하고 풀이

function solution(jobs) {
	const heap_jobs = new PriorityQueue();
	let answer = 0;
	let end = 0;
	let pro_time = 0;
	let i = 0;
	let start = -1;
	const idx = jobs.length;

	while (i < idx) {
		for (const job of jobs) {
			if (start < job[0] && job[0] <= end) {
				heap_jobs.push([job[1], job[0]]);
			}
		}

		if (heap_jobs.size() > 0) {
			const root_node = heap_jobs.pop();
			start = end;
			end += root_node[0];
			pro_time += end - root_node[1];
			i += 1;
		} else {
			end += 1;
		}
	}

	answer = pro_time;
	return Math.floor(answer / idx);
}
