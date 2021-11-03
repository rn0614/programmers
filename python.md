# Level1

   

## 로또의 최고 순위와 최저순위

- 알 수 없는 정보 0
- 최대 등수와 최소등수를 출력

```python
def solution(lottos, win_nums):
    # key : value = 맞춘갯수 : 등수 (맞춘갯수가 접근하기 더 쉬움)
    dict1={6:1,5:2,4:3,3:4,2:5,1:6,0:6}
    # 교집합을 통해 일치하는 요소 갯수 세기
    list1=set(lottos)&set(win_nums)
    
    # dict1[맞은갯수]= 등수 , 낙서때문에 알 수 없는 0의 경우 전부 정답 or 오답처리로 최대 최소 추출
    return [dict1[len(list1)+lottos.count(0)], dict1[len(list1)]]
```





## 신규 아이디 추천(정규식)

- 정규식 사용법 `import re` 
  - re.match(pattern, string, flags)
  - re.search(pattern, string, flags) : pattern이  string에 포햄되면 match Object반환 아니면 none 반환
  - re.findall(pattern, string, flags) : pattern을 string에서 전부 찾아서 list로 반환
  - re.finditer(pattern, string, flags) : findall에서 match Object로 반환 , 찾은 문자열의 시작과 끝을 알 수 있음.
    - `__next__().group()` : finditer에서 하나씩 꺼내오기 가능.
    - `__next__().span()` : 일치된 문자열의 시작 끝위치 튜플 반환 
- 변수 = 문자열
- 새로운 변수=re.sub('정규식', '대체문자', 변수)
  - 정규식 표현
  - \d, [0-9] : 모든 숫자 `앞에  ^을 붙이면 not의 의미를 가짐` / 이를 이용하면 sub으로 ~빼고 나머지 제거 가능

``` python
import re

def solution(new_id):
    answer = ''
    # 1단계 & 2단계 : 소문자 치환 [a-z\d\-\_\.]이 아닌 것을 ""로 대체
    answer = re.sub('[^a-z\d\-\_\.]', '', new_id.lower())
    print(answer)
    # 3단계 : 마침표 2번 이상 > 하나로 \.\.or \.\.\. 식으로 계속 늘어나는 것을 .하나로 변경
    answer = re.sub('\.\.+', '.', answer)
    # 4단계 : 양 끝 마침표 제거 ^가 안에 있으면 시작점 , $가 뒤에 있으면 끝나는 곳 |는 or 역할
    answer = re.sub('^\.|\.$', '', answer)
    # 5단계 : 빈 문자열이면 a 대입
    if answer == '':
        answer = 'a'
    # 6단계 : 길이가 16자 이상이면 1~15자만 남기기 & 맨 끝 마침표 제거
    answer = re.sub('\.$', '', answer[0:15])
    # 7단계 : 길이가 3이 될 때까지 반복해서 끝에 붙이기
    while len(answer) < 3:
        answer += answer[-1:]
    return answer
```



```python
# 정규식 정리
[0-9], \d 숫자 한자리
[^0-9]    숫자가 아닌 것들 한자리씩
^[0-9]	  첫 문자가 숫자인것
\s        공백
\S , ^\s  비공백 
\w [^a-zA-Z0-9] 숫자도 영어도 아닌것

```



## 숫자와 문자열(딕셔너리, replace를 이용한 특정 요소 변형)

- 문자 안에 일정 패턴을 다른 패턴으로 바꿀 때
- `문자열.replace(원래문자 , 바꿀문자)`
- 바꾸는 방향이 정해진 것은 dict와 for key, value in dict.items(): 를 통해 바꿀 수 있다.

``` python
def solution(s):
    # key, value 형태로 나타냄
    lang_to_number= {'zero': '0', 'one': '1', 'two': '2', 'three':'3',
                    'four':'4' , 'five':'5', 'six':'6', 'seven':'7', 
                    'eight':'8', 'nine':'9'}
    answer = s
    for key, value in lang_to_number.items():
        answer = answer.replace(key, value)
        
    return int(answer)
```



## 키패드 누르기(행렬에서 특정조건에 맞게 인덱스 지정)

- 조건에 따라 움직일 대상을 번갈아가면서 움직임. 위치좌표(index)와 값 좌표(pad)가 다른 테이블 형태
- hand를 이동시킬 조건은 핸드폰 번호이고, hand의 위치정보는 행렬의 인덱스로 나타내는 것이 관건
- 행렬 조건에 따라 손의 위치를 이동시킨다
  - pad[0].index('값') : 값이 중복해서 여러번 나오지 않는다는 가정하에 값이 있는 위치를 알 수 있음.
- 조건1 왼쪽 오른쪽에 따라/ 조건2 가운데는 가까운 손부터 / 조건 3 왼손잡이 오른손잡이

``` python
def solution(numbers, hand):
    answer = ''
    lh=[0,3]
    rh=[2,3]
    pad=[[1,4,7,'*'],[2,5,8,0],[3,6,9,'#']]
    for i in numbers:
        if i in pad[0]:
            answer+='L'				# 문자열은 +=로 뒤에 추가가 가능하다는 것을 잊지말자.
            lh=[0,pad[0].index(i)]  # 손위치 (0,pad[0].index(i)) 에 위치
            
        elif i in pad[2]:
            answer+='R'
            rh=[2,pad[2].index(i)]
            
        else:
            j=pad[1].index(i)		# 가운데일때 가까운 손 선택과정
            
            lk=abs(lh[0]-1)+abs(lh[1]-j)
            rk=abs(rh[0]-1)+abs(rh[1]-j)
            if lk<rk:
                lh=[1,j]
                answer+='L'
            elif lk>rk:
                rh=[1,j]
                answer+='R'
            else:						# 거리가 같을때 어떤 손잡인지 확인해서 할당하는 과정
                if hand=="right":
                    rh=[1,j]
                    answer+='R'
                else:
                    lh=[1,j]
                    answer+='L'
    
    return answer
```





## 크레인 인형뽑기 인형(행렬에서 특정조건에 맞게 뽑기)

- if  ~ break를 통해 한번만 실행하는 문장을 만들 수 있음. 
- list의 뒤쪽의 2개의 값을 확인하기 위해서는 [-1] 을 사용

```python
def solution(board, moves):
    answer = 0
    list=[]
    for i in moves:
        for j in range(len(board)):			# 1~5 까지 점점 아래로 내려가는걸 알 수 있음.
            if board[j][i-1]!=0:
                list.append(board[j][i-1])
                board[j][i-1]=0 			# 해당 값을 뽑기
                
                # 같은 값이 연속해서 2번 나올 때 쓰는 방식
                if len(list)>=2:			# list=[0]으로 하면 안 넣어도 됨.
                    if list[-2]==list[-1]: 	# 뒤에 2개 살펴서 같으면 제거하는 과정
                        list.pop(-1)
                        list.pop(-1)
                        answer+=2
                break						# 한번 뽑고는 break 필요
    
    print(list)
    return answer
```



## 음양더하기(zip 사용하기)

- zip을 사용하여 두 리스트의 변수를 한번에 가져오기

```python
def solution(absolutes, signs):
    answer=0
    for absolute,sign in zip(absolutes,signs):
        if sign:
            answer+=absolute
        else:
            answer-=absolute
    return answer


#### 리스트 컴프레션으로 한줄로 풀기
	answer=sum([i if j else -i for i,j in zip(absolutes,signs)])
```



## 내적(zip 사용)

- zip 사용 위 음양더하기와 같음
- 

```python
def solution(a, b):
    answer = 0
    for i,j in zip(a,b):
        answer+=i*j
    return answer

answer=sum([i*j for i,j in zip(a,b)])
```





## 소수만들기(combinations , 소수 판별(for-else문))

- 리스트에서 3개를 뽑기 `from itertools import combinations(리스트, 3)`
- 소수 판별하기

```python
from itertools import combinations
def solution(nums):
    answer = 0
    answer_list=[]
    result=combinations(nums,3)
    for i in result:
        answer_list.append(sum(i))
    
    for i in answer_list:
        for j in range(2,i):
            if i%j==0:
                break
        else:
            answer+=1
                
    return answer

#####################################

from itertools import combinations
def solution(nums):
    answer = 0
    list1=list(combinations(nums,3))
    for i in list1:
        if is_target(sum(i)):
            answer+=1
    return answer

def is_target(number):
	# any(number%i==0 for i in range(2,number)) #지금 경우는 안하는게 더빠름.
    for i in range(2,number):
        if number%i==0:
            return False
    else:
        return True
```



## 완주하지 못한 선수(두 리스트를 비교해서 다른 하나의 값 찾기)

- Counter 객체를 사칙연산시 같은 값이 있으면 value 값이 빼짐.
- list(Counter 객체) 실행 시 Counter 객체의 이름 부분만 추출됨을 알 수 있음.
- Counter 객체는 쉽게 dict계열 함수를 쓸 수 있음.(keys(), items())

``` python
from collections import Counter
def solution(participant, completion):
    answer=Counter(participant)-Counter(completion)
    #print(list(dict(answer).keys())[0])
    print(answer)
    print(list(answer))
    return list(answer)[0]
```



```python
from collections import Counter
answer=Counter[리스트]
list(answer.most_common())     #-> [(값,갯수), (값, 갯수)] # 또 가장 빈번한 수부터 배치

#Counter은 +,- &, | 등의 연산이 가능하다. 
```





## k번째 수

- 리스트[a-1, b] = 리스트의 a~b 까지의 요소
- map(함수, 리스트)
  - 함수에 map(lambda x : sorted(array[x[0]-1: x[1]], 리스트) 
  - 이때 x는 리스트로부터 하나씩 꺼내온 요소값

``` python
def solution(array, commands):
    answer=[]
    for command in commands:
        a=sorted(array[command[0]-1:command[1]])
        answer.append(a[command[2]-1])
    return answer


#########################

def solution(array, commands):
    answer = []
    for i in commands:
        answer.append(sorted(array[i[0]-1:i[1]])[i[2]-1])
    return answer

	[sorted(array[i[0]-1:i[1]])[i[2]-1] for i in commands]
```



## 모의고사

- 반복적으로 수행되는 것과 하나의 행렬을 비교하기
- 리스트 내 가장 큰 숫자들을 오름차순으로 정렬하는 법
- import collections.deque 를 한번 써볼것
  - deque를 통해 선입 선출이 가능함
  - deq=deque(리스트)
  - deq.append()
  - deq.pop()
- import itertools.cycle 써볼것
  - next(cycle)
- `순차적 반복의 핵심은 나머지 [i%len(list1[k])]`

``` python
def solution(answers):
    answer = []

    sol=[0,0,0]
    list=[[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]] #찍는 반복순서
    for i in range(3):
        n=len(answers)//len(list[i])
        list[i]*=(n+1)
    for i in range(3):
        for j in range(len(answers)):
            if answers[j]==list[i][j]:
                sol[i]+=1
    
    for i in range(3):
        if sol[i]==max(sol):
            answer.append(i+1)
    
    return answer


#############

def solution(answers):
    sol=[]
    list1=[[1,2,3,4,5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]]
    answer = [0,0,0]
    for k in range(3):
        for i,j in enumerate(answers):
            if list1[k][i%len(list1[k])]==answers[i]:
                answer[k]+=1
    
    # 리스트 내 가장 큰 숫자들을 오름차순으로 정렬하는 법
    for i in range(3):
        if answer[i]==max(answer):
            sol.append(i+1)
    
    return sol
            
###

from itertools import cycle

def solution(answers):
    giveups = [
        cycle([1,2,3,4,5]),
        cycle([2,1,2,3,2,4,2,5]),
        cycle([3,3,1,1,2,2,4,4,5,5]),
    ]
    scores = [0, 0, 0]
    for num in answers:
        for i in range(3):
            if next(giveups[i]) == num:
                scores[i] += 1
    highest = max(scores)

    return [i + 1 for i, v in enumerate(scores) if v == highest]
```



## 체육복

- 정렬문제

```python
def solution(n, lost, reserve):
    lost.sort()
    reserve.sort()
    answer = 0
    lost1=lost
            
    for i in range(n):
        for reserve1 in reserve:
            if reserve1-1 in lost:
                lost.remove(reserve1-1)
                reserve.remove(reserve1)
            elif reserve1 in lost:
                lost.remove(reserve1)
                reserve.remove(reserve1)
            elif reserve1+1 in lost:
                lost.remove(reserve1+1)
                reserve.remove(reserve1)
    answer= n-len(lost)
    return answer
###############

def solution(n, lost, reserve):
    lost_new=[i for i in lost if i not in reserve]
    reserve_new =[i for i in reserve if i not in lost]
    
    for i in reserve_new:
        if i-1 in lost_new:
            lost_new.remove(i-1)
            reserve_new.remove(i)
        elif i+1 in lost_new:
            lost_new.remove(i+1)
            reserve_new.remove(i)
        
    answer = n-len(lost_new)
    return answer
##################################3

def solution(n, lost, reserve):
    lost = set(lost)
    num_lost = len(lost)
    reserved = set(reserve) - set(lost)
    losted = set(lost) - set(reserve)

    for r in sorted(reserved):
        if r - 1 in losted:
            losted = losted - {r - 1}

        elif r + 1 in losted:
            losted = losted - {r + 1}

    return n - len(losted)
```



## 포켓몬

- Counter을 통해 종류를 묶고 해당 종류 수와 전체 종류 수 중 최소값 선택 
- 최대 최소값을 구하는 경우 경우를 나누고 해당 경우들의 min, max를 통해 값을 구할 수 있음.

```python
def solution(ls):
    return min(len(ls)/2, len(set(ls)))


from collections import Counter
def solution(nums):
    answer = 0
    a=Counter(nums)
    if (len(nums)/2) <= len(list(a)):
        answer=(len(nums)/2)
    else:
        answer=len(list(a))
    return answer
```





## 2주차(상호평가) 

- 해당 열을 더해서 평균
- 단 특정열 (i==j) 에서 그 값이 max 혹은 min 이면 그 값을 제거하고 계산

```python
def solution(scores):
    answer = []
    current_student=[]
    for i,score in enumerate(scores):
        for j in range(len(score)):
            current_student.append(scores[j][i])
        if max(current_student)==current_student[i] and current_student.count(current_student[i])==1:
            current_student.pop(i)
        elif min(current_student)==current_student[i] and current_student.count(current_student[i])==1:
            current_student.pop(i)
        a=sum(current_student)/len(current_student)
        answer.append(grade(a))
        current_student=[]
    return ''.join(answer)

def grade(a):
    if a>=90:
        return 'A'
    elif a>=80:
        return 'B'
    elif a>=70:
        return 'C'
    elif a>=50:
        return 'D'
    else:
        return 'F'
    
    
    
#2차 행렬에서 행과 열을 바꾸는 코드
scores = list(map(list, zip(*scores)))
```





## 실패율

- 특정인덱스에서 특정인덱스 / 상위 리스트의 합
- 여기서 denominator이 중요
- dict에서 value 값에 따라 키 값을 정렬하는 방법 `sorted( dictionary, key=lambda x : result[x], reverse=True)`

```python
def solution(N, stages):
    result = {}
    denominator = len(stages)
    for stage in range(1, N+1):
        if denominator != 0:
            count = stages.count(stage)
            result[stage] = count / denominator
            denominator -= count
        else:
            result[stage] = 0
    # x를 가져와서 결국 answer[x] 이 key 로 들어감. 해당 x는 어디서 오는거임?
    return sorted(result, key=lambda x : result[x], reverse=True) #dict의 value값으로 key 값 정렬하는 방법


##################
from collections import Counter
def solution(N, stages):
    fail_list=[]
    fail_dict=dict(Counter(stages))
    cur_len=len(stages)
    for i in range(1,N+1):
        try:
            fail_list.append(fail_dict[i]/cur_len)
            cur_len-=fail_dict[i]
        except:
            fail_list.append(0)
    answer=dict([(i+1,j) for i,j in enumerate(fail_list)])
    print(answer)
    return sorted(answer, key=lambda x : answer[x], reverse=True)
```



## 약수의 개수와 덧셈

```python
def solution(left, right):
    answer=0
    for i in range(left,right+1):
        count=0
        for j in range(1,i+1):
            if i%j==0:
                count+=1
        
        # 짝수면 +i를 answer에 더하고 홀수면 -i를 더하는 알고리즘
        if count%2==0:
            answer+=i
        else:
            answer-=i
    return answer
```





## 3진법 뒤집기

- str 형태는 +=str로 추가할 수 있음.
- %와 /을 반복하면 진법을 만들 수 있음.

``` python
def solution(n):
    # 3진법을 만드는 방법 //10진번 -> 3진법
    temp=''
    while n:
        temp +=str(n%3)
        n=n//3
    print(temp[::-1])
    
    # 3진법을 10진법으로 바꾸기
    answer = int(temp,3)
    return answer
```





## 예산

- for을 그냥 리스트 길이만큼 설정하고
- if, break를 통해 그 전에 빠져 나올 수 있도록 함.

```python
def solution(d, budget):
    answer = 0
    d.sort()
    i=0
    for i in range(len(d)):
        budget-=d[i]
        if budget<0:
            break
        answer+=1
    return answer


##################

# 최대한 많은 부서에 예산 분배
def solution(d, budget):
    temp=0
    d.sort()
    for i,j in enumerate(d):
        temp+=j
        if temp>budget:
            return i
    return len(d)
```





## 부족한 금액 계산하기

- money 를 for문 전에 answer에 대입한게 포인트
  - 반복해서 뺄 것과 처음 한번 계산하는걸 인식하고 코드 작성하기

```python
def solution(price, money, count):
    answer = money
    for i in range(1,count+1):
        answer-=i*price
    if answer<0:
        return -answer
    else:
        return 0
    
#######

def solution(price, money, count):
    return max(0,price*(count+1)*count//2-money)
```



## 두 개 뽑아 더하기

- for i,j를 사용해서 2개씩 뽑는방법
- itertools.combinations를 사용해서 두개를 뽑아 더하는 법
  - `combinations(리스트,뽑을 갯수)`

```python
def solution(numbers):
    answer = []
    for i in range(len(numbers)):
        for j in range(i+1, len(numbers)):
            a=numbers[i]+numbers[j]
            if a in answer:
                continue
            else:
                answer.append(a)
        
    answer.sort()
    return answer


#######

from itertools import combinations
def solution(numbers):
    return sorted(set(map(sum,list(combinations(numbers,2)))))
# sorted()는 내부에 set을 받을 수 있고 결과는 list로 반환함.
```



## 2016년

- 반복적으로 나오는 것은 리스트로 빠르게 확인 가능하다
- 리스트와 %쓴 나머지 순번은 같이 쓰기 좋다

```python
def solution(a, b):
    week=['SUN','MON','TUE','WED','THU','FRI','SAT']
    month=[31,29,31,30,31,30,31,31,30,31,30,31]
    answer = week[(sum(month[:a-1])+b+4)%7]
    return answer
```



## 최소직사각형

- 이중 리스트에서 큰것 중에 가장 큰 값, 작은 것중에 가장 큰 값을 찾아 곱하는 알고리즘

```python
def solution(sizes):
    max1=[]
    min1=[]
    for size in sizes:
        max1.append(max(size))
        min1.append(min(size))
    answer=max(max1)*max(min1)
    return answer
```



##  나머지가 1이 되는 숫자

```python
def solution(n):
    for i in range(1,1000001):
        if n%i==1:
            return i
```



## 부족한 금액 계산하기

```python
def solution(price, money, count):
    answer = money
    for i in range(1,count+1):
        answer-=i*price
    if answer<0:
        return -answer
    else:
        return 0
```





## 비밀지도

- bin 을 사용하면 0b101010 식으로 0b를 제외한 뒤에 bin(숫자)[2:] 사용시 이진법으로 변경가능 
- bin(a|b) 사용시 a,b중 하나라도 1이 있으면 1을 반환
- `"0"*(n-len(bin_str))+bin_str)` 을 통해 일정한 길이(n)으로 통합 가능
- `문자열.rjust(갯수, '채울 문자') // 문자열.zfill(갯수) = rjust(갯수, '0')`

```python
def solution(n, arr1, arr2):
    ans=[]
    for i in range(n):
        bin_str= bin(arr1[i]|arr2[i])[2:]
        ans.append(("0"*(n-len(bin_str))+bin_str).replace("1","#").replace("0"," "))
    return ans

########3
def solution(n, arr1, arr2):
    answer = []
    for i,j in zip(arr1,arr2):
        cur=''
        for k in range(n):
            if (two(n,i)[k]=='1') | (two(n,j)[k]=='1'):
                cur+='#'
            else:
                cur+=' '
        answer.append(cur)
    return answer

def two(n,number):
    temp=''
    while number:
        temp+=str(number%2)
        number=number//2
    return temp[::-1].zfill(n)


####
def solution(n, arr1, arr2):
    answer = []
    for i,j in zip(arr1,arr2):
        a12 = str(bin(i|j)[2:])
        a12=a12.rjust(n,'0')     # rjust로 오른쪽으로 쉽게 붙일 수 있음.
        a12=a12.replace('1','#')
        a12=a12.replace('0',' ')
        answer.append(a12)
    return answer
```



## 가운데 글자 가져오기

- `s[len(s)-1//2 : len(s)//2+1]` 가운데가 하나면 1개만 가져오고 아니면 2개를 가져오는 함수
- 문자열에서 위치조건 문자열을 가져오기 위해서는 s[여기에 조건에 맞게 인덱스를 집을 수 있도록 설정]

```python
def solution(s):
    answer = ''
    print((len(s)-1)//2)
    print(len(s)//2+1)
    return s[(len(s)-1)//2:len(s)//2+1]
```



## 다트게임

- 같은 구조를 반복하는 문자열에서 정보를 추출하는 방식
- 규칙에 관련하여 dict에 저장한 후 사용하는 것이 바람직( key 값이 나오면 value값을 넣는 구조)
- re 정규식 사용
  - 변수=re.compile(규칙)
  - 변수2=변수1.findall(문자열)

```python
import re
def solution(dartResult):
    bonus = {'S' : 1, 'D' : 2, 'T' : 3}
    option = {'' : 1, '*' : 2, '#' : -1}
    p = re.compile('(\d+)([SDT])([*#]?)')  # +는 여러개, []는 내부중 하나 , []?은 없을 수도
    dart = p.findall(dartResult)
    for i in range(len(dart)):
        if dart[i][2] == '*' and i > 0:
            dart[i-1] *= 2
        dart[i] = int(dart[i][0]) ** bonus[dart[i][1]] * option[dart[i][2]]

    answer = sum(dart)
    return answer
```



## 같은 숫자는 싫어

- 비어있는 answer에서도 실행하기 위해서는 [-1:]을 사용하여 리스트([])끼리 비교하도록한다.

```python
def solution(arr):
    answer = []
    for i in arr:
        if answer[-1:]==[i]: continue
        answer.append(i)
    return answer

###########
def solution(arr):
    answer = [arr[0]]
    for i in arr:
        if answer[-1]!=i:
            answer.append(i)
    return answer
```





## 나누어 떨어지는 숫자 배열(쉬움)

```python
def solution(arr, divisor):
    answer = []
    for i in arr:
        if i%divisor==0:
            answer.append(i)
    if answer==[]:
        answer.append(-1)
    return sorted(answer)

#######

def solution(arr, divisor): return sorted([n for n in arr if n%divisor == 0]) or [-1]
```





## 두 정수 사이의 합(a,b 사이 숫자들의 합)

```python
def solution(a, b):
    answer = 0
    
    for i in range(min(a,b),max(a,b)+1):
        answer+=i
    return answer
```





## 문자열 내 마음대로 정렬하기

- lambda x 제대로 사용하기
  - 함수자리에 위치하며 `lambda x : 변환결과 `로 사용,리트스 요소가 x에 들어오고 변환결과로 나옴
  - map(lambda x: 식) , sorted(리스트. key=lambda x : 식)

```python
def solution(strings, n):
    answer = []
    new=[]
    for i in strings:
        i=i[n]+i
        new.append(i)
    new.sort()
    for i in new:
        answer.append(i[1:])
    return answer


### sorted 의 key parameter 사용하기.
def strange_sort(strings, n):
    # sorted(리스트, key=lambda x : x[n]+x) 여기서 x는 리스트의 요소중 하나
    return sorted(strings, key=lambda x: x[n]+x)
```





## 문자열 내 p와 y의 개수

- `==`의 결과가 boolean 인 것을 기억하자 

```python
def solution(s):
	return s.lower().count('p') == s.lower().count('y')
```





## 문자열 내림차순으로 배치하기

- 리스트 -> 문자열은 `''.join()` 사용
- `sorted(문자열)` 은 사용 가능함. 반환은 리스트 형태로 이루어짐

```python
def solution(s):
    return ''.join(sorted(s, reverse=True))
```



- 문자열.isdigit() : 숫자인지 확인
- 문자열.islower() : 소문자인지 확인 



## 문자열 다루기 기본

```python
def solution(s):
    return (len(s)==4 or len(s)==6) and s.isdigit()  or False
```



## 서울에서 김서방찾기

- 리스트의 요소값으로 인덱스 찾기

```python
def solution(seoul):
    a= seoul.index("Kim")
    answer = f"김서방은 {a}에 있다"
    return answer
```

- index랑 find 차이  : find는 문자가 없으면 -1을 반환
- 대신 find는 문자열에만 사용가능
- index는 문자열, 리스트, 튜플, 딕셔너리에서 사용 가능





## 소수찾기

- list끼리는 뺄셈 불가
- collections.Counter을 사용해서 뺄 수도 있다
- 제일 처음 소수가 아닌 것에서 나머지 것을 빼는 것이 제일 효율적

```python
def solution(n):
    num=set(range(2,n+1))   # 차집합 쓰려고 set 사용.(없는 것을 빼도 무시)
    for i in range(2, n+1):
        if i in num:
            num-=set(range(2*i, n+1,i))
    return len(num)
```





## 수박수박수박수박수박수?

- n번째마다 특정하기`n%3`으로 특정가능

```python
def solution(n):
    answer = ''
    for i in range(n):
        if i%2==1:
            answer+='박'
        else:
            answer+='수'
    return answer

#############
def solution(n):
    dict1={0:'수',1:'박'}
    answer=''
    for i in range(n):
        answer+=dict1[i%2]
    return answer
```



## 시저암호(다시풀기)

- 문자열 함수에서 ord 사용하여 유니코드 변경후 해당 유니코드를 통해 위치 산정하기

```python
def solution(s, n):
    answer = ''
    s=list(s)
    for i in range(len(s)):
        if s[i].isupper():
            s[i]=chr((ord(s[i])-ord('A')+n)%26+ord('A'))
        elif s[i].islower():
            s[i]=chr((ord(s[i])-ord('a')+n)%26+ord('a'))
    return "".join(s)
```



## 약수의 합

- 약수판별과 %

```python
def solution(n):
    answer = 0
    for i in range(1,n+1):
        if n%i==0:
            answer+=i
    return answer
```





## 이상한 문자 만들기

```python
def solution(s):
    s=list(s)
    print(s)
    cnt=0
    for i in range(len(s)):
        if s[i]==" ":
            cnt=0
        elif cnt%2==0:
            s[i]=s[i].upper()
            cnt+=1
        elif cnt%2==1:
            s[i]=s[i].lower()
            cnt+=1
    return "".join(s)

##########


def toWeirdCase(s):
    return " ".join(map(lambda x: "".join([a.lower() if i % 2 else a.upper() for i, a in enumerate(x)]), s.split(" ")))


##############3

def solution(s):
    cnt=0
    answer = ''
    for i in s:
        if i.isalpha():
            if cnt%2==0:
                answer+=i.upper()
            else:
                answer+=i.lower()
            cnt+=1
        else:
            answer+=i
            cnt=0
    return answer
```





## 자릿수 더하기

```python
def solution(n):
    a=map(int,list(str(n)))
    answer=sum(a)
    return answer



######재귀함수
def sum_digit(number):
    if number < 10:
        return number;
    return (number % 10) + sum_digit(number // 10) 



#### 문자열에서도 in 쓰면 문자하나씩 가져오는걸 잊지말자.
def sum_digit(number):
    return sum(map(int,[i for i in str(n)]))

```





## 자연수 뒤집어 배열로 만들기

```python
def solution(n):
    answer = []
    answer=list(map(int,list(str(n))))
    a=reversed(answer)
    return list(a)
```





## 정수 내립차순으로 배치하기

```python
def solution(n):
    answer=sorted(str(n))
    answer.reverse()
    answer=int("".join(answer))
    return answer

######

def solution(n):
    return int(''.join(sorted(str(n), reverse=True)))

# sorted의 반환형은 list형태
```



## 정수 제곱근 판별

- 정수의 제곱근이면 **0.5와 int가 같음

```python
def solution(n):
    a=n**0.5
    if a==int(n**0.5):
        return (a+1)**2
    else:
        return -1
```





## 제일 작은 수 제거하기

- 리스트.remove(값)

```python
def solution(arr):
    arr.remove(min(arr))
    if arr==[]:
        return [-1]
    return arr
```





## 최대공약수와 최소공배수

- 최대공약수 구하는 방법  ###의 while문 주의 깊게 볼 것 
  - step1 : 작은수2=큰 수1% 작은수1
  - step2 : 작은수1이 작은수2보다 크고 위에 식 반복(나머지가 0이 될 때까지)
- 최소공배수는 두 수의 곱 빼기 최대공약수

```python
from math import gcd
def solution(n, m):
    answer = [gcd(n,m), n*m/gcd(n,m)]
    return answer

##########
def gcdlcm(a, b):
    c, d = max(a, b), min(a, b)
    t = 1
    while t > 0:
        t = c % d    #큰거에서 작은걸 나눈 나머지가 0이 될 때까지 작은거, 나머지로 진행.
        c, d = d, t
    answer = [c, int(a*b/c)]

    return answer
```





# 콜라츠 추측

```python
def solution(num):
    answer = 0
    while num!=1:
        if num%2==0:
            num//=2
            answer+=1
            print(num)
        else:
            num=num*3+1
            answer+=1
            print(num)
        if answer==500:
            answer=-1
            break
    return answer
```





## 하샤드 수

- 숫자를 자릿수에 따라 구분하려면 `list(map(int,str(숫자)))` 형태가 가장 강력하다

```python
def solution(x):
    answer = False
    if x%sum(list(map(int,str(x))))==0:
        answer=True
    return answer
```





## 핸드폰 번호가리기

- 정규식

```python
def solution(phone_number):
    answer = '*'*(len(phone_number)-4)
    answer+=phone_number[-4:]
    return answer

#######
import re

def hide_numbers(s):
    p = re.compile(r'\d(?=\d{4})')
    return p.sub("*", s, count = 0)
```





## 행렬의 덧셈

```python
def solution(A,B):
    answer = [[c + d for c, d in zip(a, b)] for a, b in zip(A,B)]
    return answer


############3
def solution(arr1, arr2):
    answer = []
    for i,j in zip(arr1,arr2):
        cur=[]
        for k in range(len(i)):
            cur.append(i[k]+j[k])
        answer.append(cur)
    return answer
```



## X만큼 간격이 있는 n개의 숫자

```python
def solution(x, n):
    answer = []
    for i in range(1,n+1):
        answer.append(x*i)
    return answer
```



## 가로 a, 세로 b 만큼 별 찍기

```python
a, b = map(int, input().strip().split(' '))
for i in range(b):
    print ("*"*a)
```





# level2

- 하나의 리스트에서 앞뒤 두개의 요소를 비교할 때 쓰는 기법

```python
list_example=[1,2,3,4]
# 맨 마지막을 판단에 따라 '', 0,-1 등으로 하여 문제 없게 돌리는 방식
for i,j in zip(list_example,list_example[1:]+['']):
    print(i,j)

# 맨 마지막은 두개 비교하고 끝에 한개는 비교하지 않는 방식 
for i in range(len(list_example)-1):
    print(list_exaple[i], list_example[i+1])    
```



- `range(시작, 끝, 간격)` 잘 이용하기. 간격과 안 맞으면 끝 내용은 그냥 간격보다 적게 묶임
- 





## 문자열 압축(다시풀기)

- zip을 할때 2개씩 묶는데 여기서는 빈 리스트 ['']를 더해 주므로 해결함.
- `words = [text[i:i+tok_len] for i in range(0, len(text), tok_len)]`
  - text 라는 문자열을 tok_len 길이로 파싱하는 방법
- 첫 값인 cur_word[0]은 입력받을 수 없음. 따라서 초기값으로 세팅
- res의 형태는 [['a',1],['b',1]] 형식으로 들어감. 

```python
def compress(text, tok_len):
    #문자열 text를 tok_len 길이만큼 나누는 과정
    words = [text[i:i+tok_len] for i in range(0, len(text), tok_len)]
    
    res = []
    cur_word = words[0]
    cur_cnt = 1
    
    # zip(words,words[1:]+[''])는 전거와 다음거 선택하는 과정
    for a, b in zip(words, words[1:] + ['']):
        if a == b:
            cur_cnt += 1
        else:
            res.append([cur_word, cur_cnt])
            cur_word = b
            cur_cnt = 1
    
    return sum(len(word) + (len(str(cnt)) if cnt > 1 else 0) for word, cnt in res)

def solution(text):
    return min(compress(text, tok_len) for tok_len in list(range(1, int(len(text)/2) + 1)) + [len(text)])

a = [
    "aabbaccc",
    "ababcdcdababcdcd",
    "abcabcdede",
    "abcabcabcabcdededededede",
    "xababcdcdababcdcd",

    'aaaaaa',
]

for x in a:
    print(solution(x))
```





## 오픈채팅방

```python
# 결국 uid별 맨 마지막 Enter or Change를 찾는 문제
# 해당 내역에서 nickname을 이용하여 전체 메세지를 처리하여 출력

def solution(record):
    answer = []
    nickname={}
    for i in record:
        j=i.split(' ') # spilt(' ') 띄어쓰기 주의 문제에서 공백을 연속으로 낼 건지 아니면 하나만 내는지 파악해서 쓸 것
        cur_doing=j[0]
        cur_id=j[1]
        
        if cur_doing=='Enter' or cur_doing=='Change':
            nickname[cur_id]=j[2]
    for i in record:
        j=i.split(' ')
        cur_doing=j[0]
        cur_id=j[1]
        
        if cur_doing=='Enter':
            answer.append(f'{nickname[j[1]]}님이 들어왔습니다.')
        elif cur_doing=='Leave':
            answer.append(f'{nickname[j[1]]}님이 나갔습니다.')
    return answer
```





## 멀쩡한 사각형

- 공식이 필요한 문제
  - 사각형의 대각선을 그었을 때 그 선에 겹치는 사각형의 수는 w+h-gcd(w,h)
    - gcd는 최소공배수 math.gcd로 구할 수 있음

```python
from math import gcd
def solution(w,h):
    return w * h-w-h+gcd(w, h)
```







## 124나라 숫자

- 3진법과 같은점 : 숫자를 3개 사용
- 다른점 0이 없고 4 라는 10 숫자가 있음.
- 1,2,4  ,11,12,14,21,22,24   ,41  ,42  ,44
- 1,2,10,11,12,20,21,22,100,101,102,110

```python
def solution(n):
    answer = ''
    num_dict ={1: "1", 2: "2",0:"4"}
    mok=1
    na=1
    while mok!=0:
        na= n%3
        mok= n//3
        if na==0:
            mok-=1
        n=mok
        answer= num_dict[na]+answer
    

    return answer


#####

def change124(n):
    if n<=3:
        return '124'[n-1]
    else:
        q, r = divmod(n-1, 3) 
        return change124(q) + '124'[r]
```





## 기능개발

```python
from math import ceil
def solution(progresses, speeds):
    answer = []
    list1=[ceil((100-progress)/speed) for progress, speed in zip(progresses,speeds)]
    temp=list1[0]
    cnt=0
    for i in range(len(list1)):
        if list1[i]<=temp:
            cnt+=1
        else:
            answer.append(cnt)
            cnt=1
            temp = list1[i]
    answer.append(cnt)
    return answer

#########

def solution(progresses, speeds):
    answer = []
    for progress,speed in zip(progresses,speeds):
        if len(answer)==0 or answer[-1][0]< -((progress-100)//speed):
            answer.append([-((progress-100)//speed),1])
            print(answer)
        else:
            answer[-1][1] +=1
            print(answer)
    return [q[1] for q in answer]

```



## 더 맵게

- heapq 사용 : 지속적으로 변하는 리스트에서 제일 작은 것을 계속 pop할 때 사용
  - heapq.heappush(리스트, 요소) : 리스트에 요소를 추가
  - heapq.heappop(리스트) : 리스트에서 가장 작은 것 추출

```python
import heapq
def solution(scoville, K):
    scovile.sort()
    while scoville[0]<K:
        try:
            heapq.heappush(scoville,heapq.heappop(scoville)+(heapq.heappop(scoville)*2))
        except IndexError:
            return -1
        answer+=1
    return answer



###########
import heapq as hq

def solution(scoville, K):

    hq.heapify(scoville)
    answer = 0
    while True:
        first = hq.heappop(scoville)
        if first >= K:
            break
        if len(scoville) == 0:
            return -1
        second = hq.heappop(scoville)
        hq.heappush(scoville, first + second*2)
        answer += 1  

    return answer
```





## 타겟 넘버

- +/- 둘다 진행해야하는 것은 임시 리스트에 추가하고 임시리스트를 새로 리스트로 변경하기

```python
from itertools import product
def solution(numbers, target):
    l = [(x, -x) for x in numbers]
    s = list(map(sum, product(*l)))
    return s.count(target)


#####


def solution(numbers, target):
    q = [0]
    for n in numbers:
        s = []
        for _ in range(len(q)):
            x = q.pop()
            s.append(x + n)
            s.append(x + n*(-1))
        q = s
    return q.count(target)
```



## 짝지어 제거하기

- stack이 비면 무조건 더하고
- stack의 마지막 요소와 지금 살피고 있는 요소와 비교해서 더하거나 빼기

```python
def solution(s): 
    stack = []
    for i in s:
        if len(stack) == 0: stack.append(i)
        elif stack[-1] == i: stack.pop()
        else: stack.append(i)
    if len(stack) == 0: return 1
    else: return 0
```





## 5주차,모음사전

``` python
from itertools import product
def solution(word):
    answer=[]
    list1=[('A','E','I','O','U',' '),('A','E','I','O','U',' '),('A','E','I','O','U',' '),('A','E','I','O','U',' '),('A','E','I','O','U',' ')]
    temp=list(product(*list1))

    for i in sorted(temp):
        temp=''.join(i).replace(' ','')
        answer.append(temp)
        
    a=list(set(answer))
    a.sort()
    return (a.index(word))
```





## 행렬 테두리 회전하기

-

```python
def solution(rows, columns, queries):
    answer = []
    table = []
    for r in range(rows):
        table.append([a for a in range(r*columns+1, (r+1)*columns+1)])
    
    for query in queries:
        query = [x-1 for x in query] # 0부터 시작하는 인덱스에 맞춰 1씩 빼줌
        tmp = table[query[0]][query[1]] # 왼쪽 위 값 저장
        small = tmp
        
        # left
        for i in range(query[0]+1, query[2]+1):
            table[i-1][query[1]] = table[i][query[1]]
            small = min(small, table[i][query[1]])
        # bottom
        for i in range(query[1]+1, query[3]+1):
            table[query[2]][i-1] = table[query[2]][i]
            small = min(small, table[query[2]][i])
        # right
        for i in range(query[2]-1, query[0]-1, -1):
            table[i+1][query[3]] = table[i][query[3]]
            small = min(small, table[i][query[3]])
        # top
        for i in range(query[3]-1, query[1]-1, -1):
            table[query[0]][i+1] = table[query[0]][i]
            small = min(small, table[query[0]][i])
        table[query[0]][query[1]+1] = tmp
        
        answer.append(small)
    
    return answer
```



## 메뉴 리뉴얼

- `v == most_ordered[0][1]` 이부분이 왜 들어가는지 의문

```python 
import collections
import itertools

def solution(orders, course):
    result = []

    for course_size in course:
        order_combinations = []
        for order in orders:
            order_combinations += itertools.combinations(sorted(order), course_size)

        most_ordered = collections.Counter(order_combinations).most_common()
        result += [ k for k, v in most_ordered if v > 1 and v == most_ordered[0][1] ]

    return [ ''.join(v) for v in sorted(result) ]

```





## 뉴스 클러스터링

- Counter은 set과 같이 |, & 등을 쓸 수 있음.
- elements() 를 쓰면 key 값만 가져옴.

```python
from collections import Counter
def solution(str1, str2):
    answer = 0
    str1_low=str1.lower()
    str2_low=str2.lower()
    
    str1_lst = []
    str2_lst = []
    
    for i in range(len(str1_low)-1):
        if str1_low[i].isalpha() and str1_low[i+1].isalpha():
            str1_lst.append(str1_low[i]+str1_low[i+1])
    for j in range(len(str2_low)-1):
        if str2_low[j].isalpha() and str2_low[j+1].isalpha():
            str2_lst.append(str2_low[j]+str2_low[j+1])
    print(str1_lst)
    print(str2_lst)
    
    Counter1 = Counter(str1_lst)
    Counter2 = Counter(str2_lst)
    
    inter = list((Counter1 & Counter2).elements())
    union = list((Counter1 | Counter2).elements())
    
    if len(union)==0 and len(inter)==0:
        return 65536
    else:
        return int(len(inter)/len(union)*65536)
    return answer
```

 





## 거리두기 확인하기

``` python
from collections import deque
d=((0,1),(1,0),(-1,0),(0,-1)) # 이동방향 정의 한칸씩 이동
SIZE=5

# places로 부터 
def make_maps(place):
    arr = []
    men = []
    for i, string in enumerate(place):
        for j, ch in enumerate(string):
            if ch == 'P': men.append((i,j))
        arr.append(list(string))
    return arr,men

## table 범위 내에 (x,y)가 있는지 확인
def isin(y,x):
    if -1<y<SIZE and -1<x<SIZE: return True
    return False

def bfs(arr, sy, sx):
    q = deque()
    q.append((sy, sx))
    #전체 -1인 table 생성
    table = [[-1 for _ in range(SIZE)] for _ in range(SIZE)]
    table[sy][sx] = 0

    while q:
        y, x = q.popleft()

        for dy, dx in d:
            ny = y + dy
            nx = x + dx

            if not isin(ny, nx): continue
            if arr[ny][nx] != 'X' and table[ny][nx] == -1:
                table[ny][nx] = table[y][x] + 1
                q.append((ny, nx))
    
    return table
                
def solution(places):
    answer = []
    for place in places:
        arr, men = make_maps(place)
        ok = True

        for man in men:
            table = bfs(arr, man[0], man[1])
            for other_man in men:
                if man != other_man:
                    y = other_man[0]
                    x = other_man[1]
                    if -1 < table[y][x] <= 2:
                        ok = False
                        break
            
            if not ok: break
        
        if ok: answer.append(1)
        else: answer.append(0)
            
    return answer
```





## 소수찾기

```python
from itertools import permutations
def is_prime(num):
    if num>=2:
        for i in range(2,num):
            if num%i==0:
                return False
        return True


def solution(numbers):
    num_list=[num for num in numbers]
    num_list2=[]
    for i in range(1,len(num_list)+1):
        num_list2+=(list(permutations(num_list,i)))
        # +=와 append의 차이 리스트 append면 2중리스트로 들어가고
        # +=면 하나의 리스트에 요소를 추가하는 형식
    num_set=set([int(("").join(p)) for p in num_list2])
    answer = 0
    for i in num_set:
        if is_prime(i):
            answer+=1
    
    return answer


####################

from itertools import permutations
def solution(n):
    a = set()
    for i in range(len(n)):
        a |= set(map(int, map("".join, permutations(list(n), i + 1))))
    a -= set(range(0, 2))
    for i in range(2, int(max(a) ** 0.5) + 1):
        a -= set(range(i * 2, max(a) + 1, i))
    return len(a)
```





## 가장 큰 수

```python
def solution(numbers):
    # 기본적으로 numbers의 요소를 str 형태로 붙임으로 map으로 전부 str화 해준다. 
    list1=list(map(str,numbers))
    # numbers를 정렬하는 기준을 세운다.
    # 전체를 구한다음 그중 최고값을 구한다?
    # greedy 한 방식이 있을 것
    list2=sorted(list1, key=lambda x : x*3, reverse=True)
    
    # list2를 순서대로 합친뒤 문자로
    return str(int(''.join(list2)))
```





## 튜플

```python
import re
from collections import Counter

def solution(s):
    s = Counter(re.findall('\d+', s))
    return list(map(int, [k for k, v in sorted(s.items(), key=lambda x: x[1], reverse=True)]))


#######

def solution(s):
    #리스트 안에 집합이 있는 형태로변환/ 길이가 짧은 것부터 배열
    list1=s[2:-2].split('},{')
    list2=[set()]+[set(map(int,i.split(','))) for i in list1]
    list2.sort(key=len)
    
    
    #그 뒤부터 다음set-전set =요소 1개 나온 것을 answer에 추가
    answer = []
    for i in range(1,len(list2)):
        a=list2[i]-list2[i-1]
        answer.append(a.pop())
    return answer
```



## 프린터

```python
def solution(priorities, location):
    answer = 0
    queue=[(idx,priority) for idx, priority in enumerate(priorities)]
    while True:
        cur=queue.pop(0)
        if any(cur[1]<q[1] for q in queue):
            queue.append(cur)
        else:
            # 인쇄작동
            answer+=1
            # 인쇄 한게 location과 같으면 해당 인쇄번수가 정답
            if cur[0]==location:
                return answer
```





## 전화번호부

```python


def solution(phone_book):
    #phone_book.sort(key=len)
    
    for i in range(len(phone_book)):
        cur=phone_book.pop(0)
        if cur==phone_book[0][:len(cur)]:
             return False
    answer = True
    return answer
```



## 행렬의 곱셈

```PYTHON
import numpy as np

def solution(arr1, arr2):
    arr11=np.array(arr1)
    arr22=np.array(arr2)
    answer=(arr11.dot(arr22)).tolist()
    return answer


#####

def productMatrix(A, B):
    return [[sum(a*b for a, b in zip(A_row,B_col)) for B_col in zip(*B)] for A_row in A]
```

