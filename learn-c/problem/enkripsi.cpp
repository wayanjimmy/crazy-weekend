#include <iostream>
#include <cstring>
#include <cstdio>
using namespace std;

char hurufAsli[] =  "abcdefghijklmnopqrstuvwxyz ";
char hurufBalik[] = "zyxwvutsrqponmlkjihgfedcba ";
int cari(char kalimat[], char dicari);

int main()
{
    char inputKalimat[100][100];
    int n;

    cin >> n;
    for(int i=0; i<n; i++)
    {
        fflush(stdin);
        cin.getline(inputKalimat[i], 100);
    }

    for(int i=0; i<n; i++)
    {
        for(int j=0; j<strlen(inputKalimat[i]); j++)
        {
            if(inputKalimat[i][j] == '(')
            {
                if(inputKalimat[i][j+1] == '\'')
                {

                }
            }
        }
        for(int j=0; j<k; j++)
        {
            cout << hurufBalik[cari(hurufAsli, inputKalimat[i][j])];
        }
    }
    return 0;
}

int cari(char kalimat[], char dicari)
{
    for(int i=0; i<strlen(kalimat); i++)
    {
        if(kalimat[i] == dicari) return i;
    }
}
