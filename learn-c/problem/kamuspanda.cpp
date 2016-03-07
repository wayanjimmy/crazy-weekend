#include <iostream>
#include <cstring>
using namespace std;

int hitungKar(char kalimat[]);

int main()
{
    char input[100][256];
    int n;

    cin >> n;
    for(int i=0; i<n; i++)
    {
        cin >> input[i];
    }
    for(int i=0; i<n; i++)
    {
        cout << hitungKar(input[i]) << endl;
    }
    return 0;
}

int hitungKar(char kalimat[])
{
    for(int i=0; i<strlen(kalimat); i++)
    {
        int j=kalimat[i]
    }
}
