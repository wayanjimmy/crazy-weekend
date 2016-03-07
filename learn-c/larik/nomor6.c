#include <stdio.h>

int panjang(char A[]);
void tukar(char *a, char *b);
void balikanLarik(char A[]);

int main()
{
    char A[]={'m', 'a', 'r', ' ', 'a', 'h', '\0'};

    printf("%s \n", A);
    balikanLarik(A);
    printf("%s \n", A);

    return 0;
}

int panjang(char A[])
{
    int hitung;

    hitung=0;
    while(A[hitung]!='\0')
    {
        hitung++;
    }
    return hitung;
}

void tukar(char *a, char *b)
{
    int tampung;

    tampung=*a;
    *a=*b;
    *b=tampung;
}

void balikanLarik(char A[])
{
    int hitung;

    for(hitung=0; hitung<panjang(A)/2; hitung++)
    {
        tukar(&A[hitung], &A[panjang(A)-hitung-1]);
    }
}
