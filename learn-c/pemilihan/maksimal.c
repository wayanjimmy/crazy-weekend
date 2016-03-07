#include <stdio.h>

int main()
{
	int A, B, C, maks;
	
	scanf("%d %d %d", &A, &B, &C);
	
	if(A>B)
	{
		maks=A;
	}else{
		maks=B;
	}
	if(maks<C)
	{
		maks=C;
	}
	
	printf("nilai terbesar = %d \n", maks);
		
	return(0);
}