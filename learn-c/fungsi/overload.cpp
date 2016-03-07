#include <iostream>
using namespace std;

void x()
{
    int x = 10;
    cout << "fungsi 1" << endl;
}

void x(int a)
{
    int x = 10;
    cout << "fungsi 2" << ends << a << endl;
}

int main()
{
    x(2);
    return 0;
}
