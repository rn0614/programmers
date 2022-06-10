# Spring



# DI(Dependency Injection)

> 의존성 주입이라고 불리우며  클래스간의 종속관계를 느슨한 구조로 만드는 것을 목적으로 생겨남
>
> 코드 수정이 용이해짐(모듈변경)
>
> 재사용이 용이

``` java
// 종속형 하나의 객체 안에서 다른 객체를 사용하는 경우(A를 선언하는데 안에 B객체가 있음)
class A{
  private B b;
  
  public A(){
    b = new B();
  }
}

// 사용을 할 때
A a = new A();
```



```java
// 조립형은 필요한 자원을 외부에서 생성자를 통해 넣어준다.
class A{
  private B b;
  
  public A(){
  }
  
  public void setB(B b){
    this.b = b;
  }
}


// 사용을 할 때 (밖에서 B 객체를 생성한 후 A에 꽂아 넣는다)
B b = bew B();
A a = new A();
a.setB(b)
```







# IOC 컨테이너(Inversion of control)

> spring은 주문서(xml,annotation)대로 조립
>
> 역순으로 객체를 생성하는 컨테이너(사용자 요청에 대해서 역순)
>
> source 코드를 수정하지 않고도 프로그램을 변경할 수 있도록 하는 컨테이너





# 예시

존재하는 객체

1. 자료구조 클래스
2. console 클래스
3. dao 클래스

일반적인 순서라면 console 안에 dao와 자료구조가 있다. IOC를 적용하면 다음과 같다.

``` java
class main(){
  //자료구조 클래스
  InterfaceA a = new ClassA();
  
  InterfaceConsole console = new ClassConsole1(a);    // 생성할 때 a를 생성자로 가져감
  //InterfaceConsole console = new ClassConsole2(a); 
}
```



```java
class Console{
  private ClassA a;
  
  public Console(ClassA a){
    this.a = a;
  }
}
```





# 객체 결합시 소스코드 내용 설정으로 빼기 

> 2가지 방식이 있음 xml과 annotation





# xml 을 이용하는 방법

> xml을 작성하고 java에서 ApplicationContext 를 통해 가져오기

- xml의 경우 ClassPathXmlApplicationContext() 를 이용함
- xml에 설정한 '특정 bean' 을 가져오기 위해서는 2가지 방식이 있음 
  - (ExamConsole) context.getBean("console")
  - context.getBean(ExamConsole.class)

main.java

```java
package spring.di;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import spring.di.ui.ExamConsole;

public class Program {
	public static void main(String[] args) {
		
		/* 직접 주입하는 방식
		 * Exam exam = new NewlecExam(); //ExamConsole console = new
		 * InlineExamConsole(exam); 
		 * ExamConsole console = new GridExamConsole(exam);
		 * 
		 * console.setExam(exam);
		 */
		
		// 외부설정파일(xml) 에서 가져오는 방식
		ApplicationContext context =
				new ClassPathXmlApplicationContext("spring/di/setting.xml");
		
		// (1) 지시서에서 이름으로 가져오기
		//ExamConsole console =(ExamConsole) context.getBean("console") ;
		
		// (2) 자료형명으로가져오기
		ExamConsole console =context.getBean(ExamConsole.class) ;
		console.print();
	}
}

```



setting.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
	<!-- Exam exam = new Newlecexam() 대신 아래같이 설정 -->
	<!-- id로 특정하거나, class로 특정하여 사용 가능  -->
	<bean id="exam" class="spring.di.entity.NewlecExam" />
	
	<!-- ExamConsole console = new GridExamConsole(exam); -->
	<bean id="console" class="spring.di.ui.InlineExamConsole">
		<!-- console.setExam(exam);  대신 아래같이 설정 -->
		<!-- 꺼내오는건 setExam 이지만 생략 및 소문자  -->
		<property name="exam" ref="exam"></property>
      	<property name="kor" value="30"></property>
	</bean>
</beans>
```



위의 내용은 <property name="exam" ref="exam"></property> 즉 ref 값을 수정하는 내용임

값을 변경하기 위해서는 

<property name="kor" value="30"></property>





# anotation

> xml보다 설정하기 쉬운 annotation을 많이 사용함.

dI구현을 위한 기본적인 annotation

- component   // 모듈 위에 존재 해당 클래스를 특정함
- autowired     // setExam을 대신해주는 존재 
- qualifier



Autowired는 3곳에서 선언할 수 있다.

```java
@Component("console")
public class InlineExamConsole implements ExamConsole {

	//가능자리 1(기본생성자 호출시 annotation)
	@Autowired(required=false)
	@Qualifier("exam")
	private Exam exam;
	
	public InlineExamConsole() {
	}
  
	//가능자리 2(오버로드 생성자 호출시)
	@Autowired
	public InlineExamConsole(Exam exam) {
		this.exam = exam;
	}

	@Override
	public void print() {
		System.out.printf("total is %d , avg is %f\n", exam.total(), exam.avg());
	}
	
	// 가능자리3
	@Override
	public void setExam(Exam exam) {
		this.exam =exam;
	}
}
```







# @Component

> anotation 을 이용하여 코드와 설정을 함께 가져감

하위 anotation

- controller
- service
- Repository

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

> 변수명이 다른 두개의 bean을 연결할 때 특정하기 위한 annotation
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





# @Configuration

> xml설정을 가져오기 

Config.java( xml설정과 exam bean 생성)

``` java
package spring.di;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import spring.di.entity.Exam;
import spring.di.entity.NewlecExam;

@ComponentScan({"spring.di.ui", "spring.di.entity"})
@Configuration
public class NewlecDIConfig {
	@Bean
	public Exam exam() {    //<bean id="exam" class="spring.di.entity.NewlecExam" p:kor="10" p:eng="10" p:com="10" p:math="10"/> 과 동일
		return new NewlecExam();
	}
}

```



main.java

```java
public class Program {
	public static void main(String[] args) {
      
		// 지시서를 가져옴
		ApplicationContext context =
				new AnnotationConfigApplicationContext(NewlecDIConfig.class);
		
		// 지시서에서 이름으로 가져오기(console 객체는 Component로 만들어져 있음)
		ExamConsole console =(ExamConsole) context.getBean("console") ;
		
		// 자료형명으로가져오기
		//ExamConsole console =context.getBean(ExamConsole.class) ;
		console.print();
    }
}
```







# AOP(Aspect Oriented Programming)

> 하나의 방법론 
>
> 사용자의 요구사항 로직 : oop (object orient)
>
> 개발자, 운영자 관점에서 사용하기 위한 로직 :  AOP



primary Concern(주 업무)

cross cutting concern() : 로그처리, 보안처리, 트랜잭션 처리

보통 주 업무의 앞 뒤에 위치함

이런 업무들을 관리하는데 있어 주업무를 처리하는 source code를 건들이게 돼 있음

따라서 해당 내용을 따로 빼서 꽂아 넣을 수 있도록 하는 시스템이 AOP



proxy class를 이용하여 가운데 primary Concern 을 생성하고 해당 부분을 구현함



main.java

```java
package spring.aop;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;


import spring.aop.entity.Exam;
import spring.aop.entity.NewlecExam;

public class Program {
	public static void main(String[] args) {
		
		Exam exam = new NewlecExam(1,1,1,1);
		
        // 가져다 쓰는 class로 classload 후, 사용하는 인터페이스, handler 사용 
		Exam proxy = (Exam) Proxy.newProxyInstance(NewlecExam.class.getClassLoader(), 
				new Class[] {Exam.class}, 
				new InvocationHandler() {
					
                    
					@Override
					public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
						
						long start= System.currentTimeMillis();
						
                      	// method.invoke(클래스며, args)로 끼어넣을곳 특정
						Object result = method.invoke(exam, args);
						
						long end= System.currentTimeMillis();
						String message = (end-start) +"ms 시간이 걸림";
						
						System.out.println(message);
						
						return result;
					}
			
		});
		
		System.out.printf("total is %d \n", proxy.total());
		System.out.printf("avg is %f \n", proxy.avg());
	}
}
```





이런 부가적인 업무는 

- before (앞에만 존재)
- after returnning (뒤에만 존재)
- after throwing (예외처리)
- around (앞, 뒤 다 존재)







# around

main.java

```java
ApplicationContext context =
				new ClassPathXmlApplicationContext("spring/aop/setting.xml");
		
		Exam proxy =(Exam) context.getBean("proxy");
		
		
		System.out.printf("total is %d \n", proxy.total());
		System.out.printf("avg is %f \n", proxy.avg());
```



setting.xml

```xml
<bean id="target" class="spring.aop.entity.NewlecExam" p:kor="10" p:eng="10" p:com="10" p:math="10"/>
	<bean id="logAroundAdvice" class="spring.aop.advice.LogAroundAdvice"></bean>
	<bean id="proxy" class="org.springframework.aop.framework.ProxyFactoryBean">
		<property name="target" ref="target"/>
		<property name="interceptorNames">
			<list>
				<value>logAroundAdvice</value>
			</list>
		</property>
	</bean>
</beans>
```





# Pointcuts

> weaving  : cross cutting Concern -> core Concern  으로 가는 과정에서 뜨개질 같은 형사잉 나오는거
>
> join point : 연결되는 Core Concern
>
> proxy 는 기본적으로 전부 join point로 생각함.
>
> 하나의 method만 join point로 특정하는 것이 pointcuts



