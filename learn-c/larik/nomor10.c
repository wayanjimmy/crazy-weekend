#include <stdio.h>

float median(float A[], int n);

int main()
{
    float A[]={1, 2, 3, 4};

    printf("median = %f \n", median(A, 4));
    return 0;
}

float median(float A[], int n)
{
    int k;
    float hasil;

    if(n%2==0)
    {
        k=n/2-1;
        hasil=(A[k]+A[k+1])/2;
    }else{
        k=(n)/2;
        hasil=A[k];
    }

    return hasil;
}
