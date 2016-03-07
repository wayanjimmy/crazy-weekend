#include <stdio.h>

int main()
{
	int nomorMenu;
	float panjang, lebar;
	float luas, keliling, diagonal, pita;
	
	printf("\t MENU EMPAT PERSEGI PANJANG \n \
	 1. Hitung Luas \n \
	 2. Hitung Keliling \n \
	 3. Hitung Panjang Diagonal \n \
	 4. Keluar Program \
	\t Masukan pilihan (1/2/3/4) : ");
	scanf("%d", &nomorMenu);
	
	switch(nomorMenu)
	{
		case 1:
			scanf("%f %f", &panjang, &lebar);
			luas=panjang*lebar;
			printf("%f \n", luas);
			break;
		case 2:
			scanf("%f %f", &panjang, &lebar);
			keliling=2*panjang+2*lebar;
			printf("%f \n", keliling);
			break;
		case 3:
			scanf("%f %f", &panjang, &lebar);
			pita=panjang*panjang+lebar*lebar;
			diagonal=sqrt(pita);
			printf("%f \n", diagonal);
			break;
		case 4:
			printf("Keluar Program \n");
			break;
		default:
			printf("Keluar \n");
	}
	
	return(0);
}