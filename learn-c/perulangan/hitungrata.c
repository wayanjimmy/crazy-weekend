#include <stdio.h>

int main()
{
	float i, n, x, r;
	
	n=0;
	i=0;
	scanf("%f", &x);
	while(x!=0)
	{
		i+=x;
		n++;
		scanf("%f", &x);
	}
	if(n!=0)
	{
		r=i/n;
		printf("%f \n", r);
	}else{
		printf("tidak ada data yang dimasukan! \n");
	}
	return(0);
}