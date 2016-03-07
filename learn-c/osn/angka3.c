#include <stdio.h>
#include <conio.h>

void keBasisX(int masukan, int basis, int keluaran[]);
void tukar(int *a, int *b);

int main()
{
    int hasil[10], i;
    
    keBasisX(12, 2, hasil);
    
    for(i=0; i<10; i++)
    {
        printf("%d", hasil[i]);
    }
    getch();
    return 0;
}

void tukar(int *a, int *b)
{
    int tampung;
    
    tampung=*a;
    *a=*b;
    *b=tampung;    
}

void keBasisX(int masukan, int basis, int *keluaran)
{
    int dibagi, i, j, panjang;
    
    i=0;
    dibagi=masukan;
    while(dibagi>1)
    {
        keluaran[i]=dibagi%basis;
        i++;
        dibagi/=basis;
    }
    panjang=i;
    j=0;
    while(j<panjang/2)
    {
        tukar(&keluaran[j], &keluaran[i]);
        j++;
        i--;
    }
}
