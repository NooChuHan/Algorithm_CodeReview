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
			if (this.heap[parentIndex] <= this.heap[index]) break;
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
				this.heap[leftChildIndex] < this.heap[smallestIndex]
			) {
				smallestIndex = leftChildIndex;
			}
			if (
				rightChildIndex < length &&
				this.heap[rightChildIndex] < this.heap[smallestIndex]
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

function solution(operations) {
	const answer = [];
	const pq = new PriorityQueue();

	for (const oper of operations) {
		const [l_v, r_v] = oper.split(" ");
		if (l_v === "I") {
			pq.push(parseInt(r_v));
		} else if (l_v === "D" && r_v === "1") {
			if (pq.size() > 0) {
				const maxNum = Math.max(...pq.heap);
				const maxIndex = pq.heap.indexOf(maxNum);
				pq.heap.splice(maxIndex, 1);
			}
		} else if (l_v === "D" && r_v === "-1") {
			if (pq.size() > 0) {
				pq.pop();
			}
		}
	}

	if (pq.size() === 0) {
		answer.push(0, 0);
	} else {
		answer.push(Math.max(...pq.heap), Math.min(...pq.heap));
	}

	return answer;
}
