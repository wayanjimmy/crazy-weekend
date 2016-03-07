#include <iostream>
#include <cstdlib>
using namespace std;

void tukar(int &a, int &b);
int posAwal(int posAkhir, int x1[], int x2[], int a[], int m, int n);

int main()
{
    int n, m;
    int x1[100], x2[100];
    int q, x[100], a[100];
    
    while(cin >> n >> m)
    {
        break;
    }
    
    int i=1;
    while(cin >> x1[i] >> x2[i])
    {
        i++;
        if(i>m) break;
    }
    
    while(cin >> q)
    {
        break;
    }
    
    i=1;
    while(cin >> x[i])
    {
        i++;
        if(i>q) break;
    }
    
    for(int i=1; i<=q; i++)
    {
        cout << posAwal(x[i], x1, x2, a, m, n) << endl; 
    }
    system("pause");
    return 0;
}

void tukar(int &a, int &b)
{
    int tampung = a;
    a = b;
    b = tampung;
}

int posAwal(int posAkhir, int x1[], int x2[], int a[], int m, int n)
{
    for(int i=1; i<=n; i++)
    {
        a[i] = 0;
    }
    a[posAkhir] = 1;
    for(int i=m; i>=1; i--)
    {
        tukar(a[x1[i]], a[x2[i]]);   
    }
    for(int i=1; i<=n; i++)
    {
        if(a[i] == 1) return i;
    }
}
