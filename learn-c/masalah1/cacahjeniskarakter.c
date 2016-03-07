#include <stdio.h>

int main()
{
	char cc;
	int nAngka, nSpasi, nLain;
	
	nAngka = 0;
	nSpasi = 0;
	nLain = 0;
	
	scanf("%c", &cc);
	while(cc!='.')
	{
		switch(cc)
		{
			case '1':
			case '2':
			case '3':
			case '4':
			case '5':
			case '6':
			case '7':
			case '8':
			case '9':
			case '0':
			{
				nAngka++;
				break;
			}
			case ' ':
			{
				nSpasi++;
				break;
			}
			default:
				nLain++;
		}
		scanf("%c", &cc);
	}
	printf("%d %d %d \n", nAngka, nSpasi, nLain);
	
	return 0;
}