#include <iostream>
using namespace std;

int cariFibo(int n);

int main()
{
    int fibo[100];
    int hasil[100];
    int m, n;

    cin >> n;
    for(int i=0; i<n; i++)
    {
        cin >> m;

        int jumlah=0;
        for(int j=1; j<=m; j++)
        {
            if(j%2==0)
            {
                jumlah-=cariFibo(j);
            }else{
                jumlah+=cariFibo(j);
            }
        }
        hasil[i] = jumlah;
    }
    for(int i=0; i<n; i++)
    {
        cout << hasil[i] << endl;
    }
    return 0;
}

int cariFibo(int n)
{
    int a, b, c;

    a=1;
    b=1;
    if(n==1) return 1;
    else if(n==2) return 1;
    else{
        for(int i=3; i<=n; i++)
        {
            c=a+b;
            a=b;
            b=c;
        }
    }
    return c;
}
