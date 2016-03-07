#include <stdio.h>

int main()
{
	int a, b, c;
	int A, B, C;
	
	scanf("%d %d %d", &a, &b, &c);
	A=a*a;
	B=b*b;
	C=c*c;
	if(C==A+B)
	{
		printf("siku-siku \n");
	}else if(C>A+B)
	{
		printf("tumpul \n");
	}else if(C<A+B)
	{
		printf("lancip \n");
	}
	return(0);
}