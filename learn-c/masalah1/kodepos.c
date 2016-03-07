#include <stdio.h>
#include <string.h>

int main()
{
	char namaKota[10];
	char kodePos[5];
	
	scanf("%s", &namaKota);
	if(strcmp(namaKota, "padang")==0)
	{
		strcpy(kodePos, "25000");
	}else if(strcmp(namaKota, "bandung")==0)
	{
		strcpy(kodePos, "40300");
	}else if(strcmp(namaKota, "solo")==0)
	{
		strcpy(kodePos, "52100");
	}else if(strcmp(namaKota, "denpasar")==0)
	{
		strcpy(kodePos, "72000");
	}else if(strcmp(namaKota, "palu")==0)
	{
		strcpy(kodePos, "92500");
	}else{
		strcpy(kodePos, "GILA!");
	}
	printf("%s \n", kodePos);
	
	return 0;
}