#include <stdio.h>
//#include <conio.h>

void hilangkanC(char src[], char dst[]);

int main()
{
    char hasil[10];
    
    hilangkanC("casciscus", hasil);
    printf("%s", hasil);
    //getch();
    
    return 0;
}

void hilangkanC(char *src, char *dst)
{
    int i, j;
    
    i=0;
    j=0;
    while(src[i])
    {
        if(src[i]!='c')
        {
            dst[j]=src[i];
            j++;
        }
        i++;
    }
    dst[j]='\0';
}
