#include <iostream>
using namespace std;

char papan[50][50][50];
int jumlahBom(int indeks, int x, int y);

int main()
{
    int m[50], n[50];
    int indeks=0;

    while(1)
    {
        cin >> n[indeks] >> m[indeks];
        if(n[indeks] == 0 && m[indeks] == 0) break;
        for(int i=0; i<n[indeks]; i++)
        {
            for(int j=0; j<m[indeks]; j++)
            {
                cin >> papan[indeks][i][j];
            }
        }
        indeks++;
    }

    for(int i=0; i<indeks; i++)
    {
        cout << "Field #" << i+1 << endl;
        for(int j=0; j<n[i]; j++)
        {
            for(int k=0; k<m[i]; k++)
            {
                if(papan[i][j][k] != '*') cout << jumlahBom(i, j, k);
                else cout << "*";
            }
            cout << endl;
        }
        cout << endl;
    }
    return 0;
}

int jumlahBom(int indeks, int x, int y)
{
    int hitung=0;
    for(int i=x-1; i<=x+1; i++)
    {
        for(int j=y-1; j<=y+1; j++)
        {
            if(papan[indeks][i][j] == '*') hitung++;
        }
    }
    return hitung;
}
