#include <iostream>
#include <cmath>
using namespace std;

int main()
{
    int pemberat[61];
    int beratBebek, beratKucing;

    for(int i=0; i<=60; i++)
    {
        pemberat[i] = pow(2, i);
    }
    while(cin >> beratBebek >> beratKucing)
    {
        int selisih = beratKucing-beratBebek;
        for(int i=0; i<=60; i++)
        {
            for(int j=i+1; j<=60; j++)
            {
                if()
            }
        }
    }
    return 0;
}
