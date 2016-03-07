#include <stdio.h>
#include <conio.h>

const int maksOrdo=15;

int main() {
    int matriks[maksOrdo][maksOrdo], ordo, i, j, selisih1, selisih2;

    scanf("%d", &ordo);

    //pengisian nilai masing-masing indeks matriks
    selisih1=2;
    selisih2=selisih1;
    for(i=0; i<ordo; i++) {
        for(j=0; j<ordo; j++) {
            if(i==0) {
                if(j==0) {
                    matriks[i][j]=1;
                } else {
                    matriks[i][j]=matriks[i][j-1]+selisih1;
                    selisih1++;
                }
            } else {
                if(j==0) {
                    matriks[i][j]=matriks[i-1][j]+selisih2;
                    selisih2++;
                } else {
                    matriks[i][j]=matriks[i][j-1]+matriks[i-1][j];
                }
            }
        }
    }

    //cetak isi matriks
    for(i=0; i<ordo; i++) {
        for(j=0; j<ordo; j++) {
            printf("%d ", matriks[i][j]);
        }
        printf("\n");
    }
    getch();
    return 0;
}
