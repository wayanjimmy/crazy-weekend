#include <stdio.h>
#include <stdlib.h>

int main()
{
    int Larik[] = {1, 2, 3, 4, 5, 6};
    int panjang, jarak;

    panjang=sizeof(Larik)/4;

    jarak=Larik[panjang-1]-Larik[0];

    printf("%d \n", jarak);
    return 0;
}
