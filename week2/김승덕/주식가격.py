# 이중 for문을 사용
# i를 기준으로 자신의 다음 숫자들을 비교하면서
# 더 작은 숫자가 오면 break


def solution(prices):
    answer = []  # 정답을 담을 리스트

    # prices의 길이만큼 반복
    for i in range(len(prices)):
        second = 0  # 초를 담을 변수

        # i를 기준으로 자신의 다음 숫자들을 비교하면서
        # 더 작은 숫자가 오면 break
        # 더 큰 숫자가 오면 second += 1
        for j in range(i + 1, len(prices)):
            second += 1
            if prices[i] > prices[j]:
                break
        # answer에 second를 추가
        answer.append(second)

    return answer
