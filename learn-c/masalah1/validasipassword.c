#include <stdio.h>
#include <string.h>

int  main()
{
	char pass[10];
	char input[10];
	int count;
	
	strcpy(pass, "abc123");
	count=1;
	while((count<=3) && (strcmp(input, pass)!=0))
	{
		scanf("%s", &input);
		count++;
		if(strcmp(input, pass)==0)
		{
		printf("Success! \n");
		}else{
		printf("Wrong! \n");
		}
	}
	
	return 0;
}