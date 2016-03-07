#include <stdio.h>

typedef struct
{
	float x;
	float y;
}titik;

titik titikTengah(titik P1, titik P2);

int main()
{
	titik P1, P2;
	titik Pt;
	
	printf("Titik P1:");
	scanf("%f %f", &P1.x, &P1.y);
	printf("Titik P2:");
	scanf("%f %f", &P2.x, &P2.y);
	Pt = titikTengah(P1, P2);
	printf("Titik Tengah (%.2f, %.2f) \n", Pt.x, Pt.y);
	return 0;
}

titik titikTengah(titik P1, titik P2)
{
	titik Pt;
	
	Pt.x = (P1.x+P2.x)/2;
	Pt.y = (P1.y+P2.y)/2;
	return Pt;
}