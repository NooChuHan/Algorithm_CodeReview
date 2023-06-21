from heapq import heappush, heappop, heapify


def mixFood(scoville):
    # 가장 맵지 않은 두 음식을 추출합니다.
    firstFood = heappop(scoville)
    secondFood = heappop(scoville)
    # 새로운 음식의 스코빌 지수를 계산합니다.
    newFood = secondFood * 2 + firstFood
    # 새로운 음식을 스코빌 리스트에 추가합니다.
    heappush(scoville, newFood)
    # 새로운 음식의 스코빌 지수를 반환합니다.
    return newFood


def solution(scoville, K):
    answer = 0
    # 스코빌 리스트를 힙으로 변환합니다.
    heapify(scoville)

    while scoville[0] < K:
        # 스코빌 리스트의 길이가 2보다 작으면 K 이상으로 만들 수 없으므로 -1을 반환합니다.
        if len(scoville) < 2:
            return -1

        answer += 1
        # 음식을 섞어서 새로운 음식을 만듭니다.
        resultFood = mixFood(scoville)

    # 섞은 횟수를 반환합니다.
    return answer
