/*
// Cara pertama
#include <stdio.h>

int main()
{
	int a, i, n, p;
	
	p=1;
	scanf("%d %d", &a, &n);
	for(i=1;i<=n;i++)
	{
		p*=a;
	}
	printf("%d \n",p);
	
	return 0;
}
*/

/* Cara kedua */

#include <stdio.h>
#include <stdlib.h>

int main()
{
	float a, p;
	int n, m, i;
	
	scanf("%f %d", &a, &n);
	p=1;
	for(i=1;i<=abs(n);i++)
	{
		p*=a;
	}
	if(n<0)
	{
		printf("%f \n", 1/p);
	}else{
		printf("%f \n", p);
	}
	
	return 0;
}