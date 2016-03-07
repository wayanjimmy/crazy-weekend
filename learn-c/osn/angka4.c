#include <stdio.h>
#include <conio.h>

typedef enum {false, true}boolean;

boolean cekKomposit(int angka);

int main()
{
    int angka1, angka2, i, nKomposit;
    
    printf("Masukan rentang = ");
    scanf("%d %d", &angka1, &angka2);
    
    nKomposit=0;
    for(i=angka1; i<=angka2; i++)
    {
        if(cekKomposit(i))
        {
            nKomposit++;
        }
    }
    printf("%d \n", nKomposit);
    getch();
    
    return 0;
}

boolean cekKomposit(int angka)
{
    int i;
    boolean hasil;
    
    hasil=false;
    for(i=2; i<angka; i++)
    {
        if(angka%i==0)
        {
            hasil=true;
            break;
        }
    }
    return hasil;
}
