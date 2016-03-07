#include <stdio.h>
#include <math.h>

int main()
{
	float a, b, c;
	float D;
	float x1, x2;
	
	scanf("%f %f %f", &a, &b, &c);
	D = b*b - 4*a*c;
	if(D>0)
	{
		x1 = (-(b) + sqrt(D))/ (2*a);
		x2 = (-(b) - sqrt(D))/ (2*a);
	}else if(D==0)
	{
		x1 = (-(b) + sqrt(D))/ (2*a);
		x2 = x1;
	}
	printf("%.2f %.2f \n", x1, x2);
	
	return 0;
}