#include <stdio.h>

int pangkat(int a, int b);

int main()
{
	int i, j;
	
	scanf("%d %d", &i, &j);
	printf("%d \n", pangkat(i, j));
	return 0;
}

int pangkat(int a, int b)
{
	int i, j;
	
	j=1;
	for(i=1; i<=b; i++)
	{
		j*=a;
	}
	return j;
}