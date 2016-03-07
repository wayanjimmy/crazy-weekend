#include <stdio.h>

int main()
{
	int x, genap;
	
	genap=0;
	
	scanf("%d", &x);
	if(x!=9999)
	{
		if(x%2==0)
		{
			genap++;
		}
		while(x!=9999)
		{
			scanf("%d", &x);
			if(x%2==0)
			{
			genap++;
			}
		}
		printf("%d \n", genap);
	}
	return 0;
}