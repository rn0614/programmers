# PGA(Program Global Area)

> 개별 프로세스들이 독립적으로 사용하는 비공유 메모리

PGA는 개별 세션에 대한 바인드변수 정보, sort Area, cusor 처리 등의 작업을 돕는 역할을 함

1. 바인드 변수

   query 문에서 자주 변하는 상수값이 있을때 모든 쿼리를 파싱하면 여러번 파싱을 해야하는데 이때 반복적으로 변하는 변수를 바인드 변수로 바꿔주면 한번만 파싱해 sql문을 재사용하게 된다.

   따라서 성능이 향상된다.

2. Sort_Area

   정렬이 필요한 작업에서 정렬 속도를 향상시킬 수 있다. 정렬할 데이터를 sort_area에서 정렬하는 방식

3. 커서처리

   개발자는 프로그램 실행시 커서를 열거나 private SQL 영역을 이용한다.

   OPEN_CURSORS 를 처리한다.

   CONN system SHOW PARAMETER OPEN_CURSOR 을 통해 값을 확인한다.

   ​

   ​

# 계층형 쿼리

> connect by 계층형 쿼리는 오라클의 기능 데이터를 선택하여 계층적인 순서 그대로 리턴하는데 사용

- 최상단 부모노드가 level 1 ~  구조
- table에서 부모 노드를 가르키는 column이 하나 존재함



1. 상위 노드를 선택했을 때 하위 노드들을 추출하기(순방향)
2. 하위 노드를 선택했을 때 상위 노드를 추출하기(역방향)

```mysql
select tree_name, tree_lvl, tree_h_name, level	-- level 은 connect by 쓸 때만 사용가능
from tree
start with tree_h_name is null 					-- 계층의 시작점 정하기(tree_h_name이 null값인 노드부터 시작함. 복수의 노드가 존재할 수도 있음)
connect by prior tree_name = tree_h_name		-- prior 노드명 = 상위노드명
order siblings by tree_name;					-- sibling 이 들어가면 정렬함
```



```mysql
select *, level									-- level은 역방향일 때는 제일 아래 것을 1로봄
from 테이블
start with [시작노드의 조건]
connect by prior 자식명colmn = 부모명column		-- 자식명앞에 prior 시 하향(순방향)
order siblings by [자식채colmn];					-- 자식컬럼기준으로 정렬
```









# PL/SQL 개요

> SQL 구문을 절차적인 형태로 프로그래밍 할 수 있게 한 SQL의 확장

- BEGIN ~ END 사이에 PL/SQL 코드를 기술하여 비지니스 로직을 처리
- DML문, 제어문, 반복문 등을 사용하여 SQL을 프로그래밍 가능
- 2가지 종류가 있다
  - 익명블록(DECALRE선언)
  - 값을 리턴(FUNCTION)
  - 실행만 하는(PROCEDURE)
  - 트리거링 이벤트에 의한 (TRIGGER)
- 익명블럭은 오라클 서버에 컴파일되어 SGA SHARED POOL에 위치 소스코드와 컴파일코드는 별도 저장하지 않음
- 함수, 프로시저,패키지, 트리거등은 전부 CREATE로 생성하긴 한다.
- 실행방식
  - 절차적 구문은 PROCEDUREAL STATEMENT EXECUTOR에서 실행
  - SQL 구문은 SQL STATEMENT EXECUTOR에서 실행

![2131231231](C:\Users\rn061\OneDrive\바탕 화면\2131231231.PNG)



- PL/SQL 문 장점
  - 블록구조로 한번에 여려 SQL 문 송신가능(수행속도 향상 및 통신량 감소)
  - 블록 IN 블록 구조로 코드를 모듈화 가능
  - 데이터 타입 : 단일형, 복합형, 상수 등 여러형태 변수 선언가능
  - 테이블의 컬럼을 참조하는 동적 변수 정의 가능(%TYPE : 컬럼과 같은 타입값, %POWTYPE : EMP? 타입과 같은 타입)
  - LOOP~ END LOOP(단순블록), FOR ...LOOP ~ END LOOP, WHILE ... LOOP END LOOP



``` plsql
CREATE PROCEDURE A AS
...
BEGIN
...
END A;
/
```

- 명령문의 종료는 ;(세미클론)
- CREATE 구문의 끝에는 /
- 익명블록(DECLARE) . 이름블록(CREATE) 로 생성
- BEGIN 과 END가 한쌍 
- 생성 에러시 확인하는 곳 다름
  - DECLARE : 컴파일에서 확인
  - CREATE : SHOW ERROR 로 확인



```plsql
DECLARE
    variable declaration        -- 변수선언부
BEGIN
	program Execution			-- 비지니스 로직
	...
EXCEPTION
	Excetion handling			-- 예외처리
	...
END
```



### DECLARE

```plsql
DECLARE
	CURSOR 커서명 IS SELECT EMPNO, ENAME FROM EMP WHERE DEPTNO=1;  -- 셀렉트 구문에서 한 행씩 확인하는 CURSOR 변수
	goodsNo NUMBER(4); --변수선언
```

- 커서 선언
  -  BEGIN과 END 사이에는 SELECT가 한번만 호출 따라서 마지막 SELECT에서 사용할 내용들을 미리 커서에 두어 반복적으로 실행
- 변수 선언



### BEGIN ~ END

```PLSQL
DECLARE
   ...
BEGIN
	-- 실행절
EXCEPTION
	-- 예외절
END
```





예문

```PLSQL
-- 1부터 10까지 출력
SET SERVEROUTPUT ON -- DBMS에서 출력 활성화
DECLARE
BEGIN
	FOR X IN 1..10 LOOP
	   DBMS_OUTPUT.PUT_LINE(X);
	END LOOP;
END;
/

-- REVERSE를 이용한 10부터 1가지 출력
SET SERVEROUTPUT ON -- DBMS에서 출력 활성화
DECLARE
BEGIN
	FOR X IN REVERSE 1..10 LOOP
	   DBMS_OUTPUT.PUT_LINE(X);
	END LOOP;
END;
/
```





# 함수 결과 캐싱

>  11g는 함수결과를 캐싱하는 기능을 가지고 있음. 함수 호출시 같은 파라미터 입력값으로 이미 실행되었는지 검사하고 만약 동일한 기능을 수행한 적 있을 시 캐시영역에서 결과치를 리턴
>
>  만약 원본 데이터가 변경/커밋 했다면 캐시에 있는 값을 삭제
>
>  캐싱은  SGA  내부에 데이터 저장



예문

``` plsql
-- 캐싱을 안한경우
-- get_sal() 함수 선언 / 입력값은 p_depto 라는 number 자료형 / 반환값은 number형
create or replace function get_sal(p_deptno in number)
retrun number
is
	v_sal number
begin
 	select sum(sal)
 	into v_sal
 	from myemp1
 	where deptno = p_deptno;
 	return v_sal;
end get_sal;
/
-- 실행문
select get_sal(1) from dual;



-- 캐싱을 한 경우
create or replace function get_sal(p_deptno in number)
retrun number
result_cache relies_on (myemp1) --myemp1이 데이터가 바뀌면 다시 실행
is
	v_sal number
begin
 	select sum(sal)
 	into v_sal
 	from myemp1
 	where deptno = p_deptno;
 	return v_sal;
end get_sal;
/
-- 실행문
select get_sal(1) from dual;

```







# 동적 SQL( Dynamic SQL)

