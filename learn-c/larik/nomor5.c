#include <stdio.h>

void tukar(int *a, int *b);
void tukarElemen(int A[], int B[], int n);
void cetakElemen(int A[], int n);

int main()
{
    int A[]={1, 3, 5, 7, 9};
    int B[]={2, 4, 6, 8, 10};
    int n=5, hitung;

    printf("sebelum \nA =");
    cetakElemen(A, n);
    printf("\n");
    printf("B =");
    cetakElemen(B, n);
    printf("\n");

    tukarElemen(A, B, n);

    printf("\nsesudah \nA =");
    cetakElemen(A, n);
    printf("\n");
    printf("B =");
    cetakElemen(B, n);
    printf("\n");

    return 0;
}

void tukar(int *a, int *b)
{
    int tampung;

    tampung=*a;
    *a=*b;
    *b=tampung;
}

void tukarElemen(int A[], int B[], int n)
{
    int hitung;

    for(hitung=0; hitung<n; hitung++)
    {
        tukar(&A[hitung], &B[hitung]);
    }
}

void cetakElemen(int A[], int n)
{
    int hitung;

    for(hitung=0; hitung<n; hitung++)
    {
        printf(" %d", A[hitung]);
    }
}
