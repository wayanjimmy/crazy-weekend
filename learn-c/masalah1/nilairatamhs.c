#include <stdio.h>
#include <conio.h>

main()
{
	char nama[10];
	int N, m;
	float nilai, rerata, jumlah;
	int i, j;
	
	scanf("%d %d", &N, &m);
	i=1;
	while(i<=N)
	{
		scanf("%s", &nama);
		j=1;
		jumlah=0;
		while(j<=m)
		{
			scanf("%f", &nilai);
			jumlah+=nilai;
			j++;
		}
		rerata=jumlah/m;
		printf("%s : %f \n", nama, rerata);
		i++;
	}
	getch();
}
