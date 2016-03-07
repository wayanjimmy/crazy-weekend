#include <iostream>
#include <fstream>
#include <cstring>
#define MAKS 10
using namespace std;

bool cekPalindrom(int angka);
int balik(int angka);
int balikTambah(int angka, int &iterasi);

int main()
{
    ifstream fin("input.txt");
    ofstream fout("output.txt");
    
    int n;
    int p;
    
    fin >> n;
    for(int i=0; i<n; i++)
    {
        fin >> p;
        int iter;
        int hasil = balikTambah(p, iter);
        fout << iter << ends << hasil << endl;     
    }
    return 0;
}

bool cekPalindrom(int angka)
{
    char strAngka[MAKS], tampung[MAKS];
    itoa(angka, strAngka, 10); 
    strcpy(tampung, strAngka);
    strrev(tampung);
    if(strcmp(tampung, strAngka) == 0) return true;
    else return false;
}

int balik(int angka)
{
    char strAngka[MAKS];
    itoa(angka, strAngka, 10);
    strrev(strAngka);
    return atoi(strAngka);
}

int balikTambah(int angka, int &iterasi)
{
    iterasi=0;
    int jumlah;
    int angkaAtas = angka;
    do
    {
        jumlah = angkaAtas+balik(angkaAtas);
        angkaAtas = jumlah;
        iterasi++;
    }while(!cekPalindrom(jumlah));
    return jumlah;
}
