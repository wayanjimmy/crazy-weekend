#include <iostream>
#include <fstream>
#include <cstring>
using namespace std;

char ubahHori(int i);
char ubahVeri(int i);

enum {a=0, b, c, d, e, f, g};
int bilangan[][7] = {
    { 1, 1, 1, 1, 1, 1, 0 }, //0
    { 0, 1, 1, 0, 0, 0, 0 }, //1
    { 1, 1, 0, 1, 1, 0, 1 }, //2
    { 1, 1, 1, 1, 0, 0, 1 }, //3
    { 0, 1, 1, 0, 0, 1, 1 }, //4
    { 1, 0, 1, 1, 0, 1, 1 }, //5
    { 1, 0, 1, 1, 1, 1, 1 }, //6
    { 1, 1, 1, 0, 0, 0, 0 }, //7
    { 1, 1, 1, 1, 1, 1, 1 }, //8
    { 1, 1, 1, 1, 0, 1, 1 }, //9
};

int main()
{
    ifstream fin("input.txt");
    ofstream fout("output.txt");
    
    int skala;
    char strAngka[10];
    int panjangAngka;
    
    while(fin >> skala >> strAngka)
    {
        panjangAngka = strlen(strAngka);
    
        for(int i=0; i<panjangAngka; i++)
        {
            fout << ends;
            if(i!=0) fout << ends << ends;
            for(int j=0; j<skala; j++)
            {
                fout << ubahHori(bilangan[(strAngka[i])-48][a]);
            }
        }
        fout << endl;
        for(int i=0; i<skala; i++)
        {
            for(int j=0; j<panjangAngka; j++)
            {
                fout << ubahVeri(bilangan[(strAngka[j])-48][f]);
                for(int k=0; k<skala; k++) fout << " ";
                fout << ubahVeri(bilangan[(strAngka[j])-48][b]) << ends;
            }
            fout << endl;
        }
        for(int i=0; i<panjangAngka; i++)
        {
            fout << ends;
            if(i!=0) fout << ends << ends;
            for(int j=0; j<skala; j++)
            {
                fout << ubahHori(bilangan[(strAngka[i])-48][g]);
            }
        }
        fout << endl;
        for(int i=0; i<skala; i++)
        {
            for(int j=0; j<panjangAngka; j++)
            {
                fout << ubahVeri(bilangan[(strAngka[j])-48][e]);
                for(int k=0; k<skala; k++) fout << " ";
                fout << ubahVeri(bilangan[(strAngka[j])-48][c]) << ends;
            }
            fout << endl;
        }
        for(int i=0; i<panjangAngka; i++)
        {
            fout << ends;
            if(i!=0) fout << ends << ends;
            for(int j=0; j<skala; j++)
            {
                fout << ubahHori(bilangan[(strAngka[i])-48][d]);
            }
        }
        fout << endl << endl;
    }
    fin.close();
    fout.close();
    return 0;
}

char ubahHori(int i)
{
    if(i==1) return '-';
    else return ' ';
}

char ubahVeri(int i)
{
    if(i==1) return '|';
    else return ' ';
}
