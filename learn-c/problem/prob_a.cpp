#include <iostream>

using namespace std;

double cariFibo(int N);

int main()
{
    double testCase[100];
    int N[500];
    int i, T;
    
    cout << "Masukan jumlah Test Case = ";
    cin >> T;
    
    cout << cariFibo(9);
    
    for(i=0; i<T; i++)
    {
        cout << "Masukan N = ";
        cin >> N[i];
    }
    
    for(i=0; i<T; i++)
    {
        testCase[i]=cariFibo(N[i]-1);
    }
    
    for(i=0; i<T; i++)
    {
        cout << testCase[i] << endl;
    }
    
    system("PAUSE");
    return 0;
}

double cariFibo(int N)
{
    double fibo[500];
    int i;
    
    for(i=0; i<N; i++)
    {
        if((i==0) || (i==1))
        {
            fibo[i]=1;
        }else{
            fibo[i]=fibo[i-1]+fibo[i-2];
        }
    }
    
    return fibo[N];
}
