#include <stdio.h>

float F(float x);

int main()
{
	float i, j;
	
	printf("--------------\n");
	printf("x\tF(x)\n");
	printf("--------------\n");
	i=10;
	while(i<=15)
	{
		printf("%.2f\t%.2f\n", i, F(i));
		i+=0.2;
	}
	printf("--------------\n");
	return 0;
}

float F(float x)
{
	return 2*x*x+5*x-8;
}