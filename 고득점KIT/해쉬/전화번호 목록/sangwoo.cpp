#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

// 시간적으로 짧은 접두어 부터 정렬하는게 좋을것 같다
// 짧은 접두어를 가지고 반복문을 돌려 하나라도 성공하는 순간 false를 return 하며 끝내자

// sudo code:
/*
1. 입력받은 phone_book을 정렬한다
2. 반복문을 통해 phone_num을 꺼내와 접두어(start_text)로 설정하고 다른 숫자들과 비교한다.
*/

using namespace std;

bool solution(vector<string> phone_book) {
    bool answer = true;

    // 입력 벡터를 오름차순으로 정렬
    sort(phone_book.begin(), phone_book.end());

    for (int i = 0; i < phone_book.size() - 1; ++i) {
        // 현재 번호와 다음 번호를 비교
        if (phone_book[i + 1].substr(0, phone_book[i].length()) == phone_book[i]) {
            answer = false;
            break;
        }
    }

    return answer;
}


