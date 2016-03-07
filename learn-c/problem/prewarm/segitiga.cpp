#include <iostream>
using namespace std;

int main()
{
    int n, m[100];

    cin >> n;
    for(int i=0; i<n; i++)
    {
        cin >> m[i];
    }
    for(int i=0; i<n; i++)
    {
        for(int j=0; j<m[i]; j++)
        {
            for(int k=m[i]; k>j; k--)
            {
                cout << "*";
            }
            cout << endl;
        }
        if(i!=n-1) cout << endl;
    }
    return 0;
}
