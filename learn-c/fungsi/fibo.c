#include <stdio.h>

int fibo(int n);

int main()
{
	int x;
	
	scanf("%d", &x);
	printf("%d \n", fibo(x));
	return 0;
}

int fibo(int n)
{
	int i, p, q, r;
	
	if(n<=1)
	{
		return n;
	}else{
		p=0;
		q=1;
		for(i=2; i<=n; i++)
		{
			r=p+q;
			p=q;
			q=r;
		}
		return r;
	}
}
