#include <stdio.h>

int Fak(int x);
int Pangkat(int a, int b);
float Expx(float x);

int main()
{
	float x;
	
	x=0;
	while(x<=100)
	{
		printf("%.2f\t%.2f\n", x, Expx(x));
		x+=0.5;
	}
	return 0;
}

int Fak(int x)
{
	int i, j;
	
	j=1;
	for(i=1; i<=x; i++)
	{
		j*=i;
	}
	return j;
}

int Pangkat(int a, int b)
{
	int i, j;
	
	j=1;
	for(i=1; i<=b; i++)
	{
		j*=a;
	}
	return j;
}

float Expx(float x)
{
	float i;
	float s;
	
	s=0;
	for(i=2;i<=x; i++)
	{
		s+=Pangkat(x, i)/Fak(i);
	}
	s+=1+x;
	return s;
}