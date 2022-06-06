# Spring



# DI(Dependency Injection)

- 조립형으로 만들면 모듈을 바꿀 수 있어서 유지관리에 용이

``` java
// 종속형
A a = new A(); // 안에 구조를 잘 모름


// 조립형
B b = new B();   // new B() == Dependency
A a = new A();

a.setB(b);       // injection 과정
```



# IOC 컨테이너(Inversion of control)

> spring은 주문서(xml,annotation)대로 조립
>
> 역순으로 객체를 생성하는 컨테이너
>
> source 코드를 수정하지 않고도 프로그램을 변경할 수 있도록 하는 컨테이너
>
> sourceCode의 내용을 xml 로 바꿔서 소스코드 수정 없이 바로 바뀔 수 있도록 하는 프로그램



- main.java

```java
package spring.di;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import spring.di.ui.ExamConsole;

public class Program {
	public static void main(String[] args) {
		
		/* 스프링에게 지시하는 지시서로 바꿈
		 * Exam exam = new NewlecExam(); //ExamConsole console = new
		 * InlineExamConsole(exam); 
		 * ExamConsole console = new GridExamConsole(exam);
		 * 
		 * console.setExam(exam);
		 */
		
		// 지시서를 가져옴
		ApplicationContext context =
				new ClassPathXmlApplicationContext("spring/di/setting.xml");
		
		// 지시서에서 이름으로 가져오기
		//ExamConsole console =(ExamConsole) context.getBean("console") ;
		
		// 자료형명으로가져오기
		ExamConsole console =context.getBean(ExamConsole.class) ;
		console.print();
	}
}

```



- setting.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
	<!-- Exam exam = new Newlecexam() -->
	<!-- id 형태로 꺼내 사용 가능  -->
	<bean id="exam" class="spring.di.entity.NewlecExam" />
	
	<!-- ExamConsole console = new GridExamConsole(exam); -->
	<bean id="console" class="spring.di.ui.InlineExamConsole">
		<!-- console.setExam(exam); -->
		<!-- 꺼내오는건 setExam 이지만 생략 및 소문자  -->
		<property name="exam" ref="exam"></property>
	</bean>
</beans>



해당클래스에서 SetExam 을 가져옴 + 
<bean id="console" class="spring.di.ui.InlineExamConsole">
	<property name="exam" ref="exam"></property>
  	<property name="kor" value="30"></property>
</bean>
```



위의 내용은 <property name="exam" ref="exam"></property> 즉 ref 값을 수정하는 내용임

값을 변경하기 위해서는 

<property name="kor" value="30"></property>





# anotation

@Component

> anotation 을 이용하여 코드와 설정을 함께 가져감

```xml
<property name="exam" ref="exam" />

@Autowired
private Exam exam;
```



# @Autowired

set 함수 위에 있으며 set함수를 실행해 준다

> 1. bean에서 class 가 참조할 수 있는 객체를 가져온다
> 2. 만약 bean이 2개라 모호할 때는 Exam exam 변수명까지 본ㄷ다.



<context:annotation-config/> xml에 필요함

1. console.setExam(exam)    --소스파일
2. <property name="exam" ref="exam"/>      --xml에
3. @Autowired                        --setExam 위에    //  --xml에



# @Qualifier

> 변수명이 다른 두개의 bean과 Autowired를 연결시키기 위한 annotation
>
> @Qualifier("exam1")
>
> public void setExam(Exam exam){}

> <bean id="exam1"



# Autowired의 위치와 required 옵션

위치

1. 파라미터 위              -- 기본생성자 호출시
2. 생성자 위          --
3. setter 위            -- setter 호출시



@Autowired(required=false)  : 이 경우 <bean>이 없으면 null로 처리

default 값이 true인데 <bean>이 없으면 오류나는 경우 발생





# 어노테이션을 이용한 객체 생성

<bean id ="console" class="ul.InlineExamConsole"></baen>  --xml에서

을 



클래스 위 의 @Component   / <context:component-scan base-package="spring.di.ui"/>



@Component

class InlineExamConsole{

}