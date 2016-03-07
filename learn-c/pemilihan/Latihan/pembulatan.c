#include <stdio.h>

int main()
{
	int nilaiBelanja, nilaiPembulatan;
	
	scanf("%d", &nilaiBelanja);
	nilaiPembulatan = nilaiBelanja-(nilaiBelanja%25);
	printf("%d \n", nilaiPembulatan);
	return(0);
}