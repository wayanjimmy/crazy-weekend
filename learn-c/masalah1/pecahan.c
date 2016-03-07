#include <stdio.h>

int main()
{
	typedef struct{
		int a;
		int b;
	}Pecahan;
	Pecahan P1, P2, P3;
	
	scanf("%d %d", &P1.a, &P1.b);
	scanf("%d %d", &P2.a, &P2.b);
	
	P3.a = (P1.a*P2.b)+(P2.a*P1.b);
	P3.b = P1.b*P2.b;
	printf("%d/%d + %d/%d = %d/%d \n", P1.a, P1.b, P2.a, P2.b, P3.a, P3.b);
	
	P3.a = (P1.a*P2.b)-(P2.a*P1.b);
	P3.b = P1.b*P2.b;
	printf("%d/%d - %d/%d = %d/%d \n", P1.a, P1.b, P2.a, P2.b, P3.a, P3.b);
	
	P3.a = P1.a*P2.a;
	P3.b = P1.b*P2.b;
	printf("%d/%d * %d/%d = %d/%d \n", P1.a, P1.b, P2.a, P2.b, P3.a, P3.b);
	
	P3.a = P1.a*P2.b;
	P3.b = P1.b*P2.a;
	printf("%d/%d : %d/%d = %d/%d \n", P1.a, P1.b, P2.a, P2.b, P3.a, P3.b);
	
	return 0;
}