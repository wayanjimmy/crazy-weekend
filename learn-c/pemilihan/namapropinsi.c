#include <stdio.h>
#include <string.h>

int main()
{
	char ibk[10];
	
	scanf("%s", &ibk);
	if(strcmp(ibk, "serang")==0)
	{
		printf("banten \n");
	}else if(strcmp(ibk, "jakarta")==0)
	{
		printf("dki jakarta \n");
	}else if(strcmp(ibk, "bandung")==0)
	{
		printf("jawa barat \n");
	}else if(strcmp(ibk, "semarang")==0)
	{
		printf("jawa tengah \n");
	}else if(strcmp(ibk, "yogyakarta")==0)
	{
		printf("di yogyakarta \n");
	}else if(strcmp(ibk, "surabaya")==0)
	{
		printf("jawa timur \n");
	}else{
		printf("Kamu memang Sontoloyo! \n");
	}
	
	return(0);
}