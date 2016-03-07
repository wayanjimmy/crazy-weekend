#include <stdio.h>

int main()
{
	int i, j;
	scanf("%d", &i);
	j = i%2;
	if(j == 0)
	{
		printf("genap \n");
	}else{
		printf("ganjil \n");
	}
	
	return(0);
}