#include <stdio.h>
#include <string.h>

char sandiLewat[10];
int sah, i;

int CekSandi(char p[10]);

int main()
{
	i=1;
	sah=0;
	do
	{
		scanf("%s", &sandiLewat);
		if(CekSandi(sandiLewat)==1)
		{
			sah=1;
			break;
		}else{
			i++;
		}
	}while((sah!=1) && (i<=3));
	if(sah!=1)
	{
		printf("Anda memang sontoloyo\n");
	}else{
		printf("Anda hebat\n");
	}
	return 0;
}

int CekSandi(char p[10])
{
	if(strcmp(p, "kentang")==0)
	{
		return 1;
	}else{
		return 0;
	}
}

