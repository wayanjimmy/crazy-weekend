#include <stdio.h>

/*
int main()
{
	int i, p;
	
	for(i=100;i>=0;i--)
	{
		for(p=1;p<=1000;p++)
		{
		}
		printf("%d \n", i);
	}
	printf("GO! \n");
	return(0);
}
*/

int main()
{
	int i;
	
	i=100;
	do{
		printf("%d \n", i);
		i--;
	}while(i>0);
	printf("GO! \n");
	
	return(0);
}