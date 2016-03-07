#include <stdio.h>
#include <conio.h>

void hitungModus(int larik[], int n, int *modus, int *frekModus);

int main()
{
    int larik[] = {4, 4, 4, 4, 4, 4, 4, 4, 6, 6, 6, 9, 9};
    int n=13;
    int modus, fm;
    
    hitungModus(larik, n, &modus, &fm);
    printf("%d %d", modus, fm);
    getch();
    return 0;
}

//fungsi mencari modus larik harus dalam keadaaan terurut menaik
void hitungModus(int larik[], int n, int *modus, int *frekModus)
{
    int kandidatModus, modusSementara, hit;
    int frekKandidatModus[2] = {0, 0};
    
    kandidatModus = larik[0];
    modusSementara = kandidatModus;
    for(hit=0; hit<n; hit++)
    {    
        if(larik[hit] == kandidatModus)
        {
            frekKandidatModus[0]++;
        }else{
            if(larik[hit] != kandidatModus)
            {
                if(frekKandidatModus[0] > frekKandidatModus[1])
                {
                    modusSementara = kandidatModus;
                    frekKandidatModus[1] = frekKandidatModus[0];
                    frekKandidatModus[0] = 0;
                }
                kandidatModus = larik[hit];
            }
        }
    }
    *modus = modusSementara;
    *frekModus = frekKandidatModus[1];
}
