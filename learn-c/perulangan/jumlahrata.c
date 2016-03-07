#include <stdio.h>

int main()
{
	float n, i, j, x;
	float r;
	
	scanf("%f", &n);
	j=0;
	for(i=1;i<=n;i++)
	{
		scanf("%f", &x);
		j+=x;
	}
	r=j/n;
	printf("%f \n", r);
	return(0);
}