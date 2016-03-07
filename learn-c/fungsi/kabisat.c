#include <stdio.h>

int kabisat(int th);

int main()
{
	int tahun;
	
	scanf("%d", &tahun);
	if(kabisat(tahun)!=1)
	{
		printf("bukan kabisat \n");
	}else{
		printf("kabisat \n");
	}
	return 0;
}

int kabisat(int th)
{
	if((th%4==0) || ((th%100==0) && (th%400==0)))
	{
		return 1;
	}else{
		return 0;
	}
}