#include <stdio.h>

int main()
{
	int nomorBulan, tahun, jumlahHari;
	
	printf("Bulan (1-12)?");
	scanf("%d", &nomorBulan);
	printf("Tahun?");
	scanf("%d", &tahun);
	switch(nomorBulan)
	{
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
			jumlahHari=31;
			break;
		case 4:
		case 6:
		case 9:
		case 11:
			jumlahHari=30;
			break;
		case 2:
			if((tahun%4==0) && (tahun%100!=0))
			{
				jumlahHari=29;
			}else{
				jumlahHari=28;
			}
		
	}
	printf("Jumlah hari dalam bulan %d adalah %d \n", nomorBulan, jumlahHari);
	
	return(0);
}