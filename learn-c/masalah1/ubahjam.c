#include <stdio.h>

int main()
{
	typedef struct{
		int hh;
		int mm;
		int ss;
	}Jam;
	Jam J;
	int p, totalDetik, sisa;
	
	J.hh = 16;
	J.mm = 10;
	J.ss = 34;
	
	printf("%d %d %d \n", J.hh, J.mm, J.ss);
	scanf("%d", &p);
	totalDetik=(J.hh*3600)+(J.mm*60)+J.ss+(p*60);
	J.hh = totalDetik/3600;
	sisa = totalDetik%3600;
	J.mm = sisa/60;
	J.ss = sisa%60;
	printf("%d %d %d \n", J.hh, J.mm, J.ss);
	
	return 0;
}