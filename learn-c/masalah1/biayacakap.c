#include <stdio.h>
#include <string.h>


int main()
{
	typedef struct{
		long int hh;
		long int mm;
		long int ss;
	}Jam;
	Jam J1, J2, J3;
	long int sisa, biaya, detikCakap;
	int lamaPulsa, tarif;
	char kodeWil[4];
	
	scanf("%ld %ld %ld \n", &J1.hh, &J1.mm, &J1.ss);
	scanf("%ld %ld %ld \n", &J2.hh, &J2.mm, &J2.ss);
	scanf("%s", &kodeWil);
	
	detikCakap = ((J2.hh*3600)+(J2.mm*60)+J2.ss) - ((J1.hh*3600)+(J1.mm*60)+J1.ss);
	J3.hh = detikCakap/3600;
	sisa = detikCakap%3600;
	J3.mm = sisa/60;
	J3.ss = sisa%60;
	/*
	if(strcmp(kodeWil, "02")==0)
	{
		detikCakap/=60;
		biaya = 150*detikCakap;
	}else if(strcmp(kodeWil, "0751")==0)
	{
		detikCakap/=30;
		biaya = 250*detikCakap;
	}else if(strcmp(kodeWil, "0737")==0)
	{
		detikCakap/=25;
		biaya = 375*detikCakap;
	}else if(strcmp(kodeWil, "091")==0)
	{
		detikCakap/=20;
		biaya = 415*detikCakap;
	}else if(strcmp(kodeWil, "098")==0)
	{
		detikCakap/=17;
		biaya = 510*detikCakap;
	}
	printf("Durasi %ld : %ld : %ld Biaya %ld \n",J3.hh, J3.mm, J3.ss, biaya);
	*/
	
	if(strcmp(kodeWil, "02")==0)
	{
		lamaPulsa = 60;
		tarif = 150;
	}else
	if(strcmp(kodeWil, "0751")==0)
	{
		lamaPulsa = 30;
		tarif = 250;
	}else
	if(strcmp(kodeWil, "0737")==0)
	{
		lamaPulsa = 25;
		tarif = 375;
	}else
	if(strcmp(kodeWil, "02")==0)
	{
		lamaPulsa = 20;
		tarif = 415;
	}else
	if(strcmp(kodeWil, "17")==0)
	{
		lamaPulsa = 60;
		tarif = 510;
	}else{
		printf("Dari RSJ Mana Pak??? \n");
	}
	detikCakap /= lamaPulsa;
	biaya = tarif*detikCakap;
	printf("Durasi %ld %ld %ld Biaya %ld \n", J3.hh, J3.mm, J3.ss, biaya);
	
	return 0;
}
