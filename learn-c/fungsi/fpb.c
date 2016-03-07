#include <stdio.h>

int fpb(int m, int n);
void tukar(int m, int n);

int main()
{
	int a, b;
	
	scanf("%d %d", &a, &b);
	if(a<b)
	{
		tukar(a, b);
	}
	printf("%d\n", fpb(a, b));
	return 0;
}

int fpb(int m, int n)
{
	int r;
	
	while(n!=0)
	{
		r=m%n;
		m=n;
		n=r;
	}
	return m;
}

void tukar(int m, int n)
{
	int r;
	
	r=m;
	m=n;
	n=r;
}