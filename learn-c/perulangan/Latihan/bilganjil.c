#include <stdio.h>

int main()
{
	int i, j, n, a, x;
	
	a=1;
	x=0;
	scanf("%d", &n);
	for(i=1;i<=n;i++)
	{
		j=a+2*(i-1);
		printf("%d ", j);
		x+=j;
	}
	printf("jumlah = %d \n", x);
	return 0;
}