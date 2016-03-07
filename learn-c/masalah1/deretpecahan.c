#include <stdio.h>
#include <conio.h>

main()
{
	/*
	float jumlah;
	float N, i, p;
	
	scanf("%f", &N);
	jumlah=0;
	i=1;
	p=1;
	while(p<=N)
	{
		if(i%2==1)
		{
			jumlah+=1/p;
		}else{
			
			jumlah-=1/p;
		}
		i+=1;
		p+=2;
	}
	printf("%f \n", jumlah);
	
	*/
	float jumlah;
	float N, p, tanda;
	
	scanf("%f", &N);
	jumlah=0;
	tanda=1;
	p=1;
	while(p<=N)
	{
		jumlah=jumlah+(tanda*1/p);
		p+=2;
		tanda=-(tanda);
	}
	printf("%f \n", jumlah);
	
	getch();
}
