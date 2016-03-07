#include <iostream>
#include <cctype>
using namespace std;

float ubahFahkeCel(float F)
{
    float C;
    F-=32;
    C = 5*F;
    C/=9;
    return C;
}

int main()
{
    float dFahrenheit;
    int benar;
    char jawab;

    do
    {
        system("cls");
        cout << "Masukan derajar Fahrenheit : ";
        cin >> dFahrenheit;

        cout << dFahrenheit << " Fah = " << ubahFahkeCel(dFahrenheit) << " Cel" << endl;

        cout << "coba lagi ? [y/t] : ";
        do
        {
            cin >> jawab;
            benar = (toupper(jawab) == 'Y' || toupper(jawab) == 'T');
        }while(!benar);
    }while(toupper(jawab) == 'Y');
    return 0;
}
