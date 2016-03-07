#include <stdio.h>
#include <string.h>

int main()
{
	char s1[20], s2[20];
	float value;
	
	scanf("%s", s1);
	strcpy(s2, "kentang");
	
	value = strcmp(s1, s2);
	
	if(value == 0)
	{
		printf("password correct! \n");
	}else{
		printf("password error! \n");
	}
	
	return(0);
}