#include <iostream>
#include <cstring>
using namespace std;

char kata[20][50];
char ada[50];

bool cari(int len,char cek)
{
    int kode=0;
    for(int i=0;i<len;i++)
    {
        if(cek==ada[i])
        {
            kode=1;
            break;
        }
    }
    if(kode==0) return(true);
    else return(false);
}

main()
{
    int pjg,n,counter[20],pjgada;
    char cek;
    cin>>n;
    for(int j=0;j<n;j++)
    {
        cin>>kata[j];
        pjg=strlen(kata[j]);
        pjgada=0;
        counter[j]=0;
        for(int i=0;i<pjg;i++)
        {
            if(cari(pjgada,kata[j][i])==true)
            {
                ada[pjgada]=kata[j][i];
                counter[j]++;
                pjgada++;
            }
        }
    }
    for(int j=0;j<n;j++)
    {
        cout<<counter[j]<<endl;
    }
}
