#include <stdio.h>

int main()
{
	int i, value;
	long int j;
	
	scanf("%d", &value);
	j=1;
	for(i=1; i<=value; i++)
	{
		j=j*i;
	}
	
	printf("Faktorial dari %d adalah %ld \n", value, j);
	
	return(0);
}