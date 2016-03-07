#include <stdio.h>

typedef enum
{
	false = 0, true = 1
}Boolean;

Boolean cekPrima(int x);

int main()
{
	int x;
	
	scanf("%d", &x);
	if(cekPrima(x))
	{
		printf("prima \n");
	}else{
		printf("bukan prima \n");
	}
	return 0;
}

//ALGORITMA OYE
Boolean cekPrima(int x)
{
	int i, counter;
	
	counter=0;
	for(i=1; i<=x; i++)
	{
		if(x%i==0)
		{
			counter++;
		}
	}
	if(counter==2)
	{
		return true;
	}else{
		return false;
	}
}
