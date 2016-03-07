#include <iostream>
#include <cmath>
using namespace std;

void cariPemberat(int pemberat[], int selisih);

int main()
{
    int beratBebek, beratKucing;
    int pemberat[60];

    for(int i=0; i<=60; i++) pemberat[i] = pow(2, i);
    cin >> beratBebek >> beratKucing;
    cariPemberat(pemberat, beratKucing-beratBebek);
    return 0;
}

void cariPemberat(int pemberat[], int selisih)
{
    int i=0;
    while(selisih>0){

    }
}
