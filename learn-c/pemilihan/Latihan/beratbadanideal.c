#include <stdio.h>

int main()
{
	int tinggiBadan, beratBadanIdeal, beratBadanAnda;
	
	scanf("%d", &tinggiBadan);
	scanf("%d", &beratBadanAnda);
	
	beratBadanIdeal = (tinggiBadan-100)-(0.1*(tinggiBadan-100));
	//printf("%d \n", beratBadanIdeal);
	if((beratBadanAnda-beratBadanIdeal>=-2) && (beratBadanAnda-beratBadanIdeal<=2))
	{
		printf("ideal \n");
	}else{
		printf("tidak ideal \n");
	}
	
	return(0);
}