#include <stdio.h>

int main()
{
	int x;
	scanf("%d", &x);
	
	if(x>0)
	{
		printf("positif \n");
	}else if(x<0)
	{
		printf("negatif \n");
	}else{
		printf("x=0 \n");
	}
	
	return(0);
}