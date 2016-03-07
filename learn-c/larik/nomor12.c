#include <stdio.h>
#include <string.h>

void kopiTeks(char s[], int i, int n, char h[]);

int main()
{
    char hasil[20];

    kopiTeks("Pascal", 5, 4, hasil);
    printf("%s \n", hasil);
    return 0;
}

void kopiTeks(char *s, int i, int n, char *h)
{
    int a, b, k;
    a=i;
    b=0;
    if((i>=strlen(s)) || ((strlen(s)-i>n)))
    {
        k=a;
    }else{
        k=i+n;
    }
    while((s[a]) && (a!=k))
    {
        h[b]=s[a];
        b++;
        a++;
    }
    h[b]='\0';
}
