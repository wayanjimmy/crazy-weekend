#include <iostream>
using namespace std;

int main()
{
    int n,m[20],i,j,k,l,o,p;
    cin>>n;
    for(i=0; i<n; i++)
    {
        cin>>m[i];
    }
    for(i=0; i<n; i++)
    {

        for(p=1; p<=m[i]; p++)
        {
            o=m[i];
            for(j=1; j<=(p+1); j++)
            {
                for(k=o; k>=1; k--)
                {
                    cout<<" ";
                }
                for(l=1; l<=((j*2)-1); l++)
                {
                    cout<<"*";
                }
                o--;
                cout<<endl;
            }
        }
    }
    return 0;
}
