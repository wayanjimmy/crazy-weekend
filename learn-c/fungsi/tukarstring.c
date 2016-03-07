#include <stdio.h>

void tukarString(char **a, char **b);

int main()
{

    tukarString(&p, &q);
    printf("%s %s", p, q);

    return 0;
}

void tukarString(char **a, char **b)
{
   char *c = *a;
   *a = *b;
   *b = c;
}
