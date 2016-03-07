#include <stdio.h>

int main()
{
	char c;
	
	scanf("%c", &c);
	
	if((c=='a') || (c=='b') || (c=='c') || (c=='d') || (c=='e'))
	{
		printf("%c adalah vokal \n", c);
	}else{
		printf("%c adalah konsonan \n", c);
	}
	
 	return(0);
}