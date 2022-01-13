```c++
#include <stdio.h>

int main(){
    int n, sum=0;			//변수 선언 방식
    scanf("%d", &n);		
    while(n>0 && n%5){		// n>0 이상이며 나머지가 0이 아니면
        n-=3; sum++;		// n에서 3 빼고 sum에 1 추가
    }
    sum+=n/5;				// 이후 sum을  n/5로 다시 재설정
    if(n<0) printf("-1");	// n이 음수이면 -1 출력
    else printf("%d",sum);	// 아니면 횟수인 sum 출력
}
```





``` c++
#include <stdio.h>

int main()
{
    int n;
    int data[1001]={0};  //==[0 for i in range(1001)]
    int dummy;
    int ans =0;
    int value=0;
    
    scanf("%d",&n);
    
    while(n--)
    {
        scanf("%d",&dummy);
        data[dummy]++;
    }
    
    for (int i=0; i<=1000; i++){
        while (data[i]){
            value=value+i;
            ans=ans+value;
            data[i]--;
        }
    }
    printf("%d\n",ans);
    
    return 0;
}
```



``` C++
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <string.h>

int main(){
    char str[30]="I have Banana";
    char *ptr=strtok(s1," ");
    
    while(ptr!=NULL){
        printf(%s\n, ptr);
        prt=strok(NULL," ");
    }
    return 0;
}
```





``` C++
#include <stdio.h>

int main(void){
    int i, j, min, index, temp;
    int array[10]={1,10,5,8,7,6,4,3,2,9};
    for(i=0; i<10; i++){
        min=9999;
        for(j=i; j<10;j++){
            if(min>array[j]){
                min=array[j];
                index=j;
            }
        }
    }
    
}
```

