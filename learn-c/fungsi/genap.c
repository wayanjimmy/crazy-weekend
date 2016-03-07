#include <stdio.h>

int genap(int n);

int main()
{
	int input;
	
	scanf("%d", &input);
	if(genap(input)!=1)
	{
		printf("ganjil \n");
	}else{
		printf("genap \n");
	}
	return 0;
}

int genap(int n)
{
	if(n%2==0)
	{
		return 1;
	}else{
		return 0;
	}
}