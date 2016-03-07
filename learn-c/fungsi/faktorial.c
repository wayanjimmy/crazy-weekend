#include <stdio.h>

int fak(int n);

int main()
{
	int i;
	
	scanf("%d", &i);
	printf("%d \n", fak(i));
	return 0;
}

int fak(int n)
{
	int i, j;
	
	j=1;
	for(i=1; i<=n; i++)
	{
		j = j*i;
	}
	return j;
}