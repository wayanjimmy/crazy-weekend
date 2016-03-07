#include <stdio.h>

int main()
{
	/*
	int x, min, i, n;
	
	scanf("%d", &n);
	scanf("%d", &x);
	min=x;
	for(i=2;i<=n;i++)
	{
		scanf("%d", &x);
		if(x<min)
		{
			min=x;
		}
	}
	printf("%d", min);
	*/
	
	int x, min;
	
	scanf("%d", &x);
	if(x!=9999)
	{
		min=x;
		scanf("%d", &x);
		while(x!=9999)
		{
			if(x<min)
			{
				min=x;
			}
			scanf("%d", &x);
		}
		printf("%d \n", min);
	}
	
	return 0;
}