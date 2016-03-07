#include <stdio.h>

int main()
{
	int i;
	
	scanf("%d", &i);
	if(i==1)
	{
		printf("satu \n");
	}else if(i==2)
	{
		printf("dua \n");
	}else if(i==3)
	{
		printf("tiga \n");
	}else if(i==4)
	{
		printf("empat \n");
	}else{
		printf("angka yang dimasukan harus 1 s.d 4 \n");
	}
	
	return(0);
}