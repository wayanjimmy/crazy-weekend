#include <iostream>
using namespace std;

void tukar(int& a, int& b);

int main()
{
    int a, b;

    cin >> a;
    cin >> b;

    tukar(a, b);

    cout << "a : " << a << endl << "b : " << b << endl;
    return 0;
}

void tukar(int& a, int& b)
{
    int c;
    c = a;
    a = b;
    b = c;
}
