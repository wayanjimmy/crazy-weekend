#include <stdio.h>

void cekSama(int A[], int n);

int main()
{
    int A[]={1, 1, 1, 1, 1, 1};

    cekSama(A, 6);

    return 0;
}

void cekSama(int A[], int n)
{
    int pembanding, hitung, hasil[n], jumlah;

    pembanding=A[0];
    for(hitung=0; hitung<n; hitung++)
    {
        if(A[hitung]==pembanding)
        {
            hasil[hitung]=1;
        }else{
            hasil[hitung]=0;
        }
    }

    jumlah=0;
    for(hitung=0; hitung<n; hitung++)
    {
        jumlah+=hasil[hitung];
    }
    if(jumlah==n)
    {
        printf("semua elemen sama \n");
    }else{
        printf("elemen tidak sama\n");
    }
}
