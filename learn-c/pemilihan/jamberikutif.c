#include <stdio.h>

int main()
{
	typedef struct{
		int hh;
		int mm;
		int ss;
	}Jam;
	Jam J;
	const int penambah=1;
	int tampung;
	
	scanf("%d %d %d", &J.hh, &J.mm, &J.ss);
	J.ss+=penambah;
	if(J.ss>=60)
	{
		J.mm=J.mm+(J.ss/60);
		J.ss=J.ss%60;
		if(J.mm>=60)
		{
			J.hh=J.hh+(J.mm/60);
			J.mm=J.mm%60;
			if(J.hh>24)
			{
				J.hh=J.hh%24;
			}
		}
	}
	printf("%d %d %d \n", J.hh, J.mm, J.ss);
	
	return(0);
}