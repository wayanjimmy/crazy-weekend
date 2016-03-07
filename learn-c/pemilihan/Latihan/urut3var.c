#include <stdio.h>

int main()
{
	int A, B, C;
	int maks, med, min;
	
	scanf("%d %d %d", &A, &B, &C);
	if(A>B)
	{
		maks=A;
	}else{
		maks=B;
	}
	if(C>maks)
	{
		maks=C;
	}
	
	if(maks==A)
	{
		if(B>C)
		{
			med=B;
			min=C;
		}else{
			med=C;
			min=B;
		}
	}else if(maks==B)
	{
		if(A>C)
		{
			med=A;
			min=C;
		}else{
			med=C;
			min=A;
		}
	}else if(maks==C)
	{
		if(A>B)
		{
			med=A;
			min=B;
		}else{
			med=B;
			min=A;
		}
	}
	printf("%d %d %d \n", maks, med, min);
	return(0);
}