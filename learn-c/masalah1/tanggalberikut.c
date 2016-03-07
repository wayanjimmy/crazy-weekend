#include <stdio.h>

int main()
{
	typedef struct{
		int dd;
		int mm;
		int yy;
	}Tanggal;
	Tanggal T;
	
	scanf("%d %d %d", &T.dd, &T.mm, &T.yy);
	switch(T.mm)
	{
		case 4:
		case 6:
		case 9:
		case 11:
		{
			if(T.dd<30)
			{
				T.dd++;
			}else{
				T.dd=1;
				T.mm++;
			}
			break;
		}
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		{
			if(T.dd<31)
			{
				T.dd++;
			}else{
				T.dd=1;
				T.mm++;
			}
			break;
		}
		case 2:
		{
			if(T.dd<28)
			{
				T.dd++;
			}else if(T.dd==28)
			{
				if((T.yy%4==0) && (T.yy%100==0))
				{
					T.dd++;
				}else{
					T.dd=1;
					T.mm++;
				}
			}else{
				T.dd=1;
				T.mm++;
			}
			break;
		}
		case 12:
		{
			if(T.dd<31)
			{
				T.dd++;
			}else{
				T.dd=1;
				T.mm=1;
				T.yy++;
			}
			break;
		}
	}
	printf("%d %d %d \n", T.dd, T.mm, T.yy);
	
	return 0;
}