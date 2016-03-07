/* @JUDGE_ID:wynjmy 100 C++ */
#include <iostream>
#include <cstdio>
using namespace std;

int jmlSiklus(long int n);

int main()
{
    int m, n, maks, tampung;
    int mAsli, nAsli;
    int i;

    while(scanf("%d %d\n", &m, &n) == 2)
    {
        mAsli = m;
        nAsli = n;

        if(m > n)
        {
            tampung = m;
            m = n;
            n = tampung;
        }

        maks = jmlSiklus(m);
        for(i=m+1; i<=n; i++)
        {
            tampung = jmlSiklus(i);
            if(tampung>maks)
                maks = tampung;
        }
        cout << mAsli << " " << nAsli << " " << maks << endl;
    }
    return 0;
}

int jmlSiklus(long int n)
{
    int jml=1;

    while(n != 1)
    {
        if(n%2 == 0)
            n = n/2;
        else
            n = (3*n)+1;
        jml++;
    }
    return jml;
}
