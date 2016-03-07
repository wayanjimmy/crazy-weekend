#include <stdio.h>

int main()
{
	int x;
	
	scanf("%d", &x);
	
	switch(x%2)
	{
		case 0:
		{
			printf("genap \n");
			break;
		}
		case 1:
		{
			printf("ganjil \n");
			break;
		}
	}
	
	return(0);
}