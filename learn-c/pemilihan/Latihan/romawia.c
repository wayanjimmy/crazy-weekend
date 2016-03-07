#include <stdio.h>

int main()
{
	int i, j, a, b;
	
	scanf("%d", &i);
	if((i>0) && (i<=3))
	{
		a=i/1;
		for(j=1;j<=a;j++)
		{
			printf("I");
		}
		printf("\n");
	}else if((i>=5) && (i<=8))
	{
		a=i%5;
		printf("V");
		if(a!=0)
		{
			for(j=1;j<=a;j++)
			{
				printf("I");
			}
		}
		printf("\n");
	}
	
	return(0);
}