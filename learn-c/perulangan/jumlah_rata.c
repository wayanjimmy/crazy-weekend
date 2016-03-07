#include <stdio.h>

/*
int main()
{
	float i, j, n, r;
	
	scanf("%f", &n);
	j=0;
	i=1;
	while(i<=n)
	{
		j+=i;
		printf("%f \n", i);
		i++;
	}
	r=j/n;
	printf("%f \n", r);
	return(0);
}
*/

int main()
{
	float i, j, x, n, r;
	
	j=0;
	scanf("%f", &x);
	n=0;
	do{
		j+=x;
		scanf("%f", &x);
		n++;
	}while(x!=0);
	r=j/n;
	printf("%f \n", r);
	
	return(0);
}