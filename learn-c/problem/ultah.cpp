#include <iostream>
#include <cstring>
using namespace std;

typedef struct
{
    char nama[30];
    int telepon;
}penduduk;
penduduk isiBukuKuning[100];

int telepon(char dicari[], int n);

int main()
{
    int n, q;
    char teman[100][30];

    cin >> n >> q;
    for(int i=0; i<n; i++)
    {
        cin >> isiBukuKuning[i].nama >> isiBukuKuning[i].telepon;
    }
    for(int i=0; i<q; i++)
    {
        cin >> teman[i];
    }
    for(int i=0; i<q; i++)
    {
        cout << telepon(teman[i], n) << endl;
    }
    return 0;
}

int telepon(char dicari[], int n)
{
    for(int i=0; i<n; i++)
    {
        if(strcmp(dicari, isiBukuKuning[i].nama) == 0)
        {
            return isiBukuKuning[i].telepon;
        }
    }
}
