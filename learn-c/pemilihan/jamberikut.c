#include <stdio.h>

int main()
{
	typedef struct{
		int hh;
		int mm;
		int ss;
	}Jam;
	Jam J;
	int totalDetik, sisa;
	
	scanf("%d %d %d", &J.hh, &J.mm, &J.ss);
	totalDetik=(J.hh*3600)+(J.mm*60)+(J.ss);
	totalDetik+=1;
	J.hh=totalDetik/3600;
	sisa=totalDetik%3600;
	J.mm=sisa/60;
	J.ss=sisa%60;
	printf("%d %d %d \n", J.hh, J.mm, J.ss);
	
	return(0);
}