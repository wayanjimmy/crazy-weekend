#include <stdio.h>

int main()
{
	float nilai;
	char indeks;
	
	scanf("%f", &nilai);
	if(nilai>=80)
	{
		indeks='A';
	}else if((nilai<80) && (nilai>=70))
	{
		indeks='B';
	}else if((nilai<70) && (nilai>=55))
	{
		indeks='C';
	}else if((nilai<55) && (nilai>=40))
	{
		indeks='D';
	}else{
		indeks='E';
	}
	printf("%.2f, %c \n", nilai, indeks); 
	return(0);
}