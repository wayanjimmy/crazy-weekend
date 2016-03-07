#include <stdio.h>

int main()
{
	typedef struct{
		int dd;
		int mm;
		int yy;
	}Tanggal;
	Tanggal T;
	
	T.mm=2;
	scanf("%d %d", &T.dd, &T.yy);
	if(T.dd<28)
	{
		T.dd++;
	}else if(T.dd==28)
	{
		if(((T.yy%4==0) && (T.yy%100!=0)) || (T.yy%400==0))
		{
			T.dd=29;
		}else{
			T.dd=1;
			T.mm++;
		}
	}else{
		T.dd=1;
		T.mm++;
	}
	printf("%d %d %d \n", T.dd, T.mm, T.yy);
	
	return 0;
}