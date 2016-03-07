#include <stdio.h>

int main()
{
	int A, B, C;
	
	scanf("%d %d %d", &A, &B, &C);
	
	if(A>B)
	{
		if(A>C)
		{
			printf("Bilangan terbesar = %d \n", A);
		}else if(A<=C){
			printf("Bilangan terbesar = %d \n", C);
		}
	}
	if(B>=A)
	{
		if(B>C)
		{
			printf("Bilangan terbesar = %d \n", B);
		}else if(B<=C){
			printf("Bilangan terbesar = %d \n", C);
		}
	}
	
	return(0);
}
