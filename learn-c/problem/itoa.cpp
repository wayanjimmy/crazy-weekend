#include <iostream>
#include <conio.h>
using namespace std;

int main()
{
    int a;
    char b[10];
    cin >> a;
    itoa(a, b, sizeof(b));
    cout << b;
    getch();
    return 0;
}
