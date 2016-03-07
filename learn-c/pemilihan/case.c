#include <stdio.h>

int main()
{
	int i;
	
	scanf("%d", &i);
	
	switch(i)
	{
		case 1:
		{
			printf("satu \n");
			break;
		}
		case 2:
		{
			printf("dua \n");
			break;
		}
		case 3:
		{
			printf("tiga \n");
			break;
		}
		case 4:
		{
			printf("empat \n");
			break;
		}
		default:
			printf("angka yang dimasukan harus 1 s.d 4 \n");
	}
}