#include <stdio.h>

int main()
{
	int i,j, h;
	
	scanf("%d", &i);
	h=1;
	for(j=1;j<=i;j++)
	{
		h*=j;
	}
	printf("%d \n", h);
	
	return 0;
}