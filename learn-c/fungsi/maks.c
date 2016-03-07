#include <stdio.h>

int maks(int a, int b);

int main()
{
	int i, j;
	
	scanf("%d %d", &i, &j);
	printf("%d\n", maks(i, j));
	return 0;
}

int maks(int a, int b)
{
	if(a<b)
	{
		return b;
	}else{
		return a;
	}
}