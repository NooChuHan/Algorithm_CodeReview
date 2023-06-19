def solution(phone_book):
    answer = True

    # 전화번호 목록을 정렬
    phone_book.sort()
    
    # 인덱스 범위를 이용하여 인접한 전화번호를 비교합니다.
    for i in range(len(phone_book)-1):
        
        # 현재 전화번호의 길이가 다음 전화번호의 길이보다 작은 경우
        if len(phone_book[i]) < len(phone_book[i+1]):
            
            # 현재 전화번호로 다음 전화번호를 접두사로 가지고 있는지 확인
            if phone_book[i + 1][:len(phone_book[i])] == phone_book[i]:
                
                # 접두사가 있다면 중복된 전화번호가 있으므로 answer를 False로 설정하고 반복을 종료
                answer = False
                break
    
    return answer
