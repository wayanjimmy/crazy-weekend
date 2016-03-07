#include <stdio.h>

float F(float x);

int main()
{
	printf("%.2f \n", F(5));
	return 0;
}

float F(float x)
{
	return 2*x*x + 5*x - 8;
}