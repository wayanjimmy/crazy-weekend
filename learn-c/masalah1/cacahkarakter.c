#include <stdio.h>

int main()
{
	char cc;
	int n;
	
	n=0;
	scanf("%c", &cc);
	while(cc!='.')
	{
		scanf("%c", &cc);
		n++;
	}
	printf("%d \n", n);
	
	return 0;
}