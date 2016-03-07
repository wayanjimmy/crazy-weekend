/*
ID: wynjmy1
PROG: ride
LANG: C++
*/
#include <iostream>
#include <string>
#include <fstream>
using namespace std;

int ubahHurufKeAngka(char h);
long int cariHasil(string k);

int main()
{
    string a, b;
    ifstream fin("ride.in");
    ofstream fout("ride.out");

    fin >> a;
    fin >> b;
    if(cariHasil(a) != cariHasil(b))
        fout << "STAY" << endl;
    else
        fout << "GO" << endl;

    return 0;
}

int ubahHurufKeAngka(char h)
{
    int x;
    x = h;
    return x-64;
}

long int cariHasil(string k)
{
    long int hasil=1;
    for(int i=0; i<k.size(); i++)
    {
        hasil *= ubahHurufKeAngka(k[i]);
    }
    return hasil%47;
}
