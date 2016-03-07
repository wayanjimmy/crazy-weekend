#include <iostream>
#include <cctype>
#include <iomanip>
using namespace std;

int main()
{
    int angka1, angka2, hasilKurang, hasilKali, benar;
    char jawab;

    do
    {
        system("cls");

        cout << "masukan angka1 : ";
        cin >> angka1;
        cout << "masukan angka2 : ";
        cin >> angka2;

        hasilKurang = angka1-angka2;
        hasilKali = angka1*angka2;

        cout << endl;
        cout << " " << setw(6) << angka1 << "    " << " " << setw(6) << angka1 << endl;
        cout << "-" << setw(6) << angka2 << "    " << "x" << setw(6) << angka2 << endl;
        cout << "-------" << "...." << "-------" << endl;
        cout << " " << setw(6) << hasilKurang << "    " << " " << setw(6) << hasilKali << endl;

        cout << "\ncoba lagi ? [y/t] : ";
        do
        {
            cin >> jawab;
            benar = (toupper(jawab) == 'Y' || toupper(jawab) == 'T');
        }while(!benar);
    }while(toupper(jawab) == 'Y');
    return 0;
}
