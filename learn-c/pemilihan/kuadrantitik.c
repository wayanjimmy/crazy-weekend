#include <stdio.h>

int main()
{
	typedef struct{
		int x;
		int y;
	}Titik;
	
	Titik P;
	
	scanf("%d %d", &P.x, &P.y);
	
	if((P.x>0) && (P.y>0))
	{
		printf("Kuadran 1 \n");
	}else if((P.x<0) && (P.y>0))
	{
		printf("Kuadran 2 \n");
	}else if((P.x<0) && (P.y))
	{
		printf("Kuadran 3 \n");
	}else if((P.x>0) && (P.y<0))
	{
		printf("Kuadran 4 \n");
	}else{
		printf("(x, y) = (0, 0) \n");
	}
	
	return(0);
}