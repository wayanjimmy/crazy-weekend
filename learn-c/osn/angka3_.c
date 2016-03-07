#include <stdio.h>
#include <conio.h>

void keBasisX(int masukan, int basis);

int main()
{
    int angka, basis;
    
    printf("Masukan angka = ");
    scanf("%d", &angka);
    printf("Masukan basis = ");
    scanf("%d", &basis);
    keBasisX(angka, basis);
    
    getch();
    return 0;
}

void keBasisX(int masukan, int basis)
{
    int sisaBagi;
    
    while(masukan>0)
    {
        sisaBagi=masukan%basis;
        masukan/=basis;
        printf("%d", sisaBagi);
    }
}
