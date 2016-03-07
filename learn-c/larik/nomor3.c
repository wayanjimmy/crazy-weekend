#include <stdio.h>

void cariTerbesar(int A[], int n, int *maks1, int *maks2);

int main()
{
    int larik[]={1, 2, 3, 4, 5, 6, 7};
    int a1, a2, panjang;

    panjang=sizeof(larik)/4;
    cariTerbesar(larik, panjang, &a1, &a2);

    printf("%d %d \n", a1, a2);
    return 0;
}

void cariTerbesar(int A[], int n, int *maks1, int *maks2)
{
    *maks1=A[n-1];
    *maks2=A[n-2];
}

