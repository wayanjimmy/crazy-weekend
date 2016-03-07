#include <stdio.h>
#include <conio.h>

void gabungTeks(char s1[], char s2[], char s3[]);

int main()
{
    char s3[10];

    gabungTeks("Halo ", "TI", s3);
    printf("%s", s3);
    getch();
    return 0;
}

void gabungTeks(char *s1, char *s2, char *s3)
{
    int i, j;

    i=0;
    while(s1[i])
    {
        s3[i]=s1[i];
        i++;
    }
    j=0;
    while(s2[j])
    {
        s3[i]=s2[j];
        i++;
        j++;
    }
    s3[i]='\0';
}
