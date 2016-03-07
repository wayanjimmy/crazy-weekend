#include<stdio.h>

void segitiga(int n);
void isispasi(int n);

int main()
{
    int n[100],i, j,m;
    scanf("%d", &m);
    for(i=0; i<m; i++)
    {
        scanf("%d", &n[i]);
    }
    for(j=0; j<m; j++)
    {
        for(i=1; i<=n[j]; i++)
        {
            segitiga(i+1);
        }
    }

    return 0;
}

void segitiga(int n)
{
    int i,j, part;

    for(i=0; i<n; i++)
    {
        part=1+2*i;
        isispasi(n-i-1);
        for(j=0; j<part; j++)
        {
            printf("*");
        }
        printf("\n");
    }
}

void isispasi(int n)
{
    int i;

    for(i=0; i<n; i++)
    {
        printf(" ");
    }
}
