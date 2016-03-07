#include <stdio.h>
/*
int main()
{
	int i, j, n;
	
	scanf("%d", &n);
	j=0;
	i=1;
	while(i<=n)
	{
		j+=i;
		i++;
	}
	printf("%d \n", j);
	return(0);
}
*/

int main()
{
	int i, j, n, x;
	
	i=1;
	j=0;
	scanf("%d", &n);
	do{
		if(i==(n))
		{
			printf("%d ", i);
		}else{
			printf("%d+", i);
		}
		j+=i;
		i++;
	}while(i<=n);
	printf("= %d \n", j);
	
	return(0);
}