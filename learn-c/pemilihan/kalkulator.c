#include <stdio.h>

int main()
{
	int op1, op2;
	char opt;
	
	scanf("%d%c%d", &op1, &opt, &op2);
	switch(opt)
	{
		case '+':
			printf("%d \n", op1+op2);
			break;
		case '-':
			printf("%d \n", op1-op2);
			break;
		case '*':
			printf("%d \n", op1*op2);
			break;
		case '/':
			if(op2==0)
			{
				printf("GilaKamuYa! \n");
			}else{
				printf("%d \n", op1/op2);
			}
			break;
		default:
			printf("Masuk RSJ aja! \n");
	}
	return(0);
}