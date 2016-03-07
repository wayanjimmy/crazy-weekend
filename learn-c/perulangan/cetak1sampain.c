#include <stdio.h>
/*
int main()
{
	int i, n;
	
	scanf("%d", &n);
	for(i=1;i<=n;i++)
	{
		printf("%d \n", i);
	}
	
	return(0);
}
*/

int main()
{
	int i, n;
	
	i=1;
	scanf("%d", &n);
	do{
		printf("%d ", i);
		i++;
	}while(i<=n);
	printf("\n");
	
	return(0);
}