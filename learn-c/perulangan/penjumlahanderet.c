#include <stdio.h>

int main()
{
	int i, j, n;
	
	scanf("%d", &n);
	j=0;
	for(i=1;i<=n;i++)
	{
		j+=i;
	}
	printf("%d \n", j);
	return(0);
}