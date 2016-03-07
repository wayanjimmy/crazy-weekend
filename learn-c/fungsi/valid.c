#include <stdio.h>
#include <string.h>

int valid(char masuk[10]);

int main()
{
	char i[10];
	
	scanf("%s", &i);
	if(valid(i)==1)
	{
		printf("sukses \n");
	}else{
		printf("gagal \n");
	}
	return 0;
}

int valid(char masuk[10])
{
	if(strcmp(masuk, "abc123")==0)
	{
		return 1;
	}else{
		return 0;
	}
}