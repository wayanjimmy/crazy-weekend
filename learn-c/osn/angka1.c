#include <stdio.h>

int main()
{
	int i, j, k, n;
	
	printf("Masukan n = ");
	scanf("%d", &n);
	
	j=2;
	k=1;
	for(i=1; i<=n; i++)
	{
		printf("%d \n", k);
		k+=j;
		j++;
	}
	return 0;
}

/*
#include <stdio.h>
#include <conio.h>

const int ordo=6;

int main()
{
    int deret[ordo], i, selisih;
    
    deret[0]=1;
    selisih=2;
    for(i=1; i<ordo; i++)
    {
        deret[i]=deret[i-1]+selisih;
        selisih++;
    }
    
    for(i=0; i<ordo; i++)
    {
        printf("%d ", deret[i]);
    }
    getch();
    
    return 0;
}
*/
