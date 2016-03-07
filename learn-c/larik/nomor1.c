#include <stdio.h>

int cariIndeks(int A[], int n, int X);

int main()
{
    int Larik[6] = {1, 2, 3, 4, 5, 3};
    int X;

    X=3;
    printf("%d \n", cariIndeks(Larik, 6, X));
    return 0;
}

int cariIndeks(int A[], int n, int X)
{
    int hitung, hasil;

    hitung=0;
    for(hitung=0; hitung<n; hitung++)
    {
        if(A[hitung]==X)
        {
            hasil=hitung;
        }
    }
    if(!hasil)
    {
        hasil=0;
    }
    return hasil;
}
