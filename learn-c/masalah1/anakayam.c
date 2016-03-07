#include <stdio.h>

int main()
{
	int a,b;
	
	a=10;
	printf("Anak ayam turun %d \n", a);
	while(a>0)
	{
		b=a-1;
		if(b==0)
		{
			printf("Anak ayam turun %d, mati satu tinggal Induknya \n", a, b);
		}else{
			printf("Anak ayam turun %d, mati satu tinggal %d \n", a, b);
		}
		a--;
	}
	return 0;
}