#include <stdio.h>

int main()
{
	const int jamNormal = 48;
	const long int upahLembur = 3000;
	
	char namaKaryawan[20];
	int jamKerja;
	long int upahPerJam, upahTotal;
	char gg;
	
	scanf("%s ", namaKaryawan);
	scanf("%c ", &gg);
	scanf("%d", &jamKerja);
	
	if(gg == 'a')
	{
		upahPerJam = 4000;
	}else if(gg == 'b')
	{
		upahPerJam = 5000;
	}else if(gg == 'c')
	{
		upahPerJam = 6000;
	}else if(gg == 'd')
	{
		upahPerJam = 7500;
	}else{
		printf("Udah bosen Idup ya??? \n");
	}
	
	if(jamKerja<jamNormal)
	{
		upahTotal = jamKerja * upahPerJam;
	}else{
		upahTotal = (jamNormal * upahPerJam) + ((jamKerja - jamNormal) * upahLembur);
	}
	
	printf("Total Gaji Karyawan %s dengan Golongan %c = Rp%ld \n", namaKaryawan, gg, upahTotal);
	
	return(0);
}