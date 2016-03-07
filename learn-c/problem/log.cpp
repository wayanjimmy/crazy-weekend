#include <iostream.h>
#include <math.h>
#include <iomanip.h>

int faktorial(int x)
{
   int fak=1;
   for(int i=1;i<=x;i++)
   {
       fak*=i;    
   }
   return fak;
}

main()
{
    int n,m[20],pjg;
    float hasil[20];
    char tampil[20];
    cin>>n;
    for(int i=0;i<n;i++)
    {
        cin>>m[i];
        hasil[i]=log10(faktorial(m[i]));    
    }
    for(int i=0;i<n;i++)
    {
        cout<<setprecision(3)<<hasil[i]<<endl;
    }
}
