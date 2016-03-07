#include <iostream>

using namespace std;

int cariFibo(int N);

int main()
{
    cout << cariFibo(2) << endl;
    
    system("PAUSE");
    return 0;
}

int cariFibo(int N)
{
    int fibo[100];
    int i=0;
    
    while(i<N)
    {
        if((i==0) || (i==1))
        {
            fibo[i]=1;
        }else{
            fibo[i]=fibo[i-1]+fibo[i-2];
        }
        i++;
    }
    return fibo[i];
}
