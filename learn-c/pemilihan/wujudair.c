#include <stdio.h>

int main()
{
	int T;
	
	printf("Masukan suhu air dalam derajat Celcius :");
	scanf("%d", &T);
	
	if(T<=0)
	{
		printf("padat \n");
	}else if((T>0) && (T<100))
	{
		printf("cair \n");
	}else if(T>=100)
	{
		printf("gas atau uap \n");
	}
	
	return(0);
}