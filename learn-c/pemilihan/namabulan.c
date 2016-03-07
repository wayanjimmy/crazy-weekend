#include <stdio.h>
#include <string.h>

int main()
{
	int nomorBulan;
	char namaBulan[10];
	
	scanf("%d", &nomorBulan);
	switch(nomorBulan)
	{
		case 1:
			strcpy(namaBulan, "Januari");
			break;
		case 2:
			strcpy(namaBulan, "Februari");
			break;
		case 3:
			strcpy(namaBulan, "Maret");
			break;
		case 4:
			strcpy(namaBulan, "April");
			break;
		case 5:
			strcpy(namaBulan, "Mei");
			break;
		case 6:
			strcpy(namaBulan, "Juni");
			break;
		case 7:
			strcpy(namaBulan, "Juli");
			break;
		case 8:
			strcpy(namaBulan, "Agustus");
			break;
		case 9:
			strcpy(namaBulan, "September");
			break;
		case 10:
			strcpy(namaBulan, "Oktober");
			break;
		case 11:
			strcpy(namaBulan, "Nopember");
			break;
		case 12:
			strcpy(namaBulan, "Desember");
			break;
		default:
			strcpy(namaBulan, "GilaKamuYa");
	}
	printf("%d %s \n", nomorBulan, namaBulan);
	
	return(0);
}