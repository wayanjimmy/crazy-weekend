#include <stdio.h>
#include <conio.h>

typedef struct 
{
    int kodeBarang;
    float hargaBarang;
}barang;

typedef barang larikBarang[100];

int main()
{
    larikBarang[0].kodeBarang = 1;
    
    getch();
    return 0;
}
