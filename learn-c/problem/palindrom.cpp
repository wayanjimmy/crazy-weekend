#include <iostream>
#include <cstring>
#include <fstream>
#include <conio.h>
#define MAKS 10
using namespace std;

bool cekPalindrom(int angka);
int balik(int angka);
int balikTambah(int angka, int &iterasi);

int main()
{
    int angkaAtas[0], banyak;
    ifstream fin("input2.txt");
    ofstream fout("output2.txt");
    while(fin >> banyak)
    {
        break;   
    }
    for(int i=0; i<banyak; i++)
    {
        fin >> angkaAtas[i];
    }
    for(int i=0; i<banyak; i++)
    {
        cout << angkaAtas[i] << endl;
    }
    getch();
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
