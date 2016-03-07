#include <stdio.h>
#include <math.h>

float simpanganBaku(float X[], int n);

int main()
{
    float X[]={1, 2, 3, 4, 5, 6, 7, 8, 9, 15};

    printf("%f \n", simpanganBaku(X, 7));
    return 0;
}

float simpanganBaku(float X[], int n)
{
    float jumlah, rata, atas, hasil;
    int i;

    jumlah=0;
    for(i=0; i<n; i++)
    {
        jumlah+=X[i];
    }
    rata=jumlah/n;

    atas=0;
    for(i=0; i<n; i++)
    {
        atas+=pow(X[i]-rata, 2);
    }

    hasil=sqrt(atas/n-1);

    return hasil;
}
