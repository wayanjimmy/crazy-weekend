#include <stdio.h>

int main()
{
	long saldo, transaksi;
	int nomorMenu;
	
	saldo = 0;
	
	do{
		printf("Tekan 1 untuk menarik \n");
		printf("Tekan 2 untuk menyetor \n");
		printf("Tekan 3 untuk melihat saldo \n");
		printf("Tekan 4 untuk selesai \n");
		scanf("%d", &nomorMenu);
		switch(nomorMenu)
		{
			case 1:
			{
				printf("Masukan jumlah yang ingin anda tarik:");
				scanf("%ld", &transaksi);
				if(saldo-transaksi<10000)
				{
					printf("Maaf anda tidak bisa melakukan penarikan dengan jumlah ini! \n");
				}else{
					saldo-=transaksi;
					printf("Transaksi Sukses! \n");
				}
				break;
			}
			case 2:
			{
				printf("Masukan jumlah yang ingin anda setor:");
				scanf("%ld", &transaksi);
				saldo+=transaksi;
				printf("Transaksi Sukses! \n");
				break;
			}
			case 3:
			{
				printf("Jumlah saldo anda : Rp%ld \n", saldo);
				break;
			}
			case 4:
			{
				printf("Sampai Jumpa! \n");
				break;
			}
		}
	}while(nomorMenu!=4);
	printf("\n");
	
	return 0;
}