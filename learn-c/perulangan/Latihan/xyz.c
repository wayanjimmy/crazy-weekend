#include <stdio.h>
#include <conio.h>

main()
{
	int x, y, z;
	
	printf("x y z \n");
	for(x=0;x<=25;x++)
	{
		for(y=0;y<=25;y++)
		{
			for(z=0;z<=25;z++)
			{
				if(x+y+z==25)
				{
					printf("%d %d %d \n", x, y, z);
				}
			}
		}
	}
	getch();
}
