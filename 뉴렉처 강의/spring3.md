> spring3

# project 명 url 에 안보이게 하기

- properties -> web Project Setting의 context root /로 변경





# spring mvc(dispatcher 사용)





# 외부에서 바로 jsp로 접근 못하게 하기

- view 폴더를 WEB-INF 에 만들어서 jsp 넣기
- web.xml 에 dispatcher의 servletet-mapping 에 url-pattern 에 /로 모든 화면단이 dispathcer을 거치게 변경



# web-inf 를 경로에 계속 쓰는 문제

- view resolver 를 사용한다

- controller 에

- ```java
  // 생성자 인스턴트에 index
  ModelAndView mv = new ModelAndView("index");
  		mv.addObject("data", "Hello Spring MVC ~");
  		//mv.setViewName("/WEB-INF/view/index.jsp");
  ```

- dispatcher-servlet.xml 에 

  ```xml
  <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
  	<property name="prefix" value="/WEB-INF/view/"></property>
  	<property name="surfix" value=".jsp"></property>
  </bean>
  ```



# webapp

> 얘가 web -root, 즉 / 위치임





# 정적인 애들 jsp 에 추가하기 위한 mvc resource

dispatcher-servlet.xml

```xml
<beans xmlns="http://www.springframework.org/schema/beans"
		xmlns:mvc="http://www.springframework.org/schema/mvc"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.springframework.org/schema/beans
        https://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/mvc
        https://www.springframework.org/schema/mvc/spring-mvc.xsd">
  
  <mvc:resources location="/static/" mapping="/**"></mvc:resources>

```



static  안에 정적인 것들 넣어놓기

static은 없는 것으로 치고 주소에 넣으면 맞음



# page 별 공통으로 들어있는  header 집중화

전에는 include 를 썼는데 리소스를 너무 잡아먹음

tiles를 이용하여 각 페이지 부분을 모듈화 하고 tiles로 위치를 지정하는 방식으로 변경

- tiles는 백엔드에서 화면을 만드는 작업인데 최근에는 이게 다 front로 감

- tiles.xml (어떤 페이지를 참조할지 선택) controller에서 /로 돼있는 주소를 .으로 바꿈

- (notice/list  ->  notice.list )

- ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <!DOCTYPE tiles-definitions PUBLIC
         "-//Apache Software Foundation//DTD Tiles Configuration 3.0//EN"
         "http://tiles.apache.org/dtds/tiles-config_3_0.dtd">
  <tiles-definitions>
    <definition name="notice.list" template="/WEB-INF/view/customer/inc/layout.jsp">
      <put-attribute name="title" value="Tiles tutorial homepage" />
      <put-attribute name="header" value="/WEB-INF/view/inc/header.jsp" />
      <put-attribute name="visual" value="/WEB-INF/view/customer/inc/visual.jsp" />
      <put-attribute name="aside" value="/WEB-INF/view/customer/inc/aside.jsp" />
      <put-attribute name="body" value="/WEB-INF/view/customer/notice/list.jsp" />
      <put-attribute name="footer" value="/WEB-INF/view/inc/footer.jsp" />
    </definition>
  </tiles-definitions>
  ```





# bean 의 실행 순서 제어

- order 을 통해 우선순위를 정하여 실행 순서를 정한다.

``` xml
	<bean
		class="org.springframework.web.servlet.view.UrlBasedViewResolver">
		<property name="viewClass"
			value="org.springframework.web.servlet.view.tiles3.TilesView" />
		<property name="order" value="1" />
	</bean>


	<bean
		class="org.springframework.web.servlet.view.InternalResourceViewResolver">
		<property name="prefix" value="/WEB-INF/view/"></property>
		<property name="suffix" value=".jsp"></property>
		<property name="order" value="2"/>
	</bean>

```





# ioc

```xml
<bean id="/notice/list"
		class="com.newlecture.web.controller.notice.ListController" >
		<property name="noticeService" ref="noticeService"/>
	</bean>

<bean id="noticeService" class="com.newlecture.web.service.NoticeService" />
```





# 느슨한 결합

- interface 사용시 xml 설정에서 class 만 변경해주면 된다

```xml

<bean id="noticeService" class="com.newlecture.web.service.JDBCNoticeService" />
```





# 설정파일 분리하기

- web.xml

```xml
<listener>
		<listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
	</listener>
	<context-param>
		<param-name>contextConfigLocation</param-name>
		<param-value>
			/WEB-INF/spring/service-context.xml
			/WEB-INF/spring/security-context.xml
		</param-value>
	</context-param>
  
	<servlet>
		<servlet-name>dispatcher</servlet-name>
		<servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
		<init-param>
			<param-name>contextConfigLocation</param-name>
			<param-value>/WEB-INF/spring/servlet-context.xml</param-value>
		</init-param>
		<load-on-startup>1</load-on-startup>
		<async-supported>true</async-supported>
	</servlet>
	<servlet-mapping>
		<servlet-name>dispatcher</servlet-name>
		<url-pattern>/</url-pattern>
	</servlet-mapping>
```



- 해당 주소에 xml 추가로 만들어서 각자 설정하기
  - service-context.xml
  - security-context.xml
  - servlet-context.xml