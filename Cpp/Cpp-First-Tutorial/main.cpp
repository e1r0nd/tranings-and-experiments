// ConsoleApplication1.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include "pch.h"
#include <iostream>
#include <string>

using namespace std;

int main()
{
    // Chars
    cout << "Chars:" << endl;
    char new_str[5] = "0123"; // not more that 4 symbols
    char new_line[] = "Hello, world!";
    cout << new_str << " " << new_line << endl;
    char txt[500];
    cout << "Enter you text:" << endl;
    gets_s(txt);
    cout << "your text is:" << txt;
    cout << endl
         << "------" << endl;

    // Arrays
    cout << "Arrays:" << endl;
    int *ptrnum = new int;
    *ptrnum = 7;
    cout << "*ptrnum =" << *ptrnum << endl;
    delete ptrnum;

    float *ptrarray = new float[10];
    for (int i = 0; i < 10; i++)
    {
        ptrarray[i] = rand() % 80 + 1;
    }
    for (int i = 0; i < 10; i++)
    {
        cout << ptrarray[i] << " ";
    }

    delete[] ptrarray;
    cout << endl
         << "------" << endl;
    // Constants
    int r = 8;
    r = 3.14;

    const float pi = 3.14;
    // pi = 2; // error
    cout << pi << endl;

    // Pointers & Reference
    cout << "Pointers & Reference:" << endl;
    int value = 8;
    int *ptr_value = &value;

    cout << value << endl;
    *ptr_value = 10;
    cout << "Modified value:" << value << ", by addr:" << ptr_value << endl;

    int value1 = 100;
    int &ref = value1;
    ref = 101;
    cout << "Modified value1:" << value1 << " and a reference:" << ref << endl;
    // Arrays
    cout << "Arrays:" << endl;
    int arr1[2];
    int arr2[] = {1, 2, 3};
    arr2[2] = 0;
    cout << "arr2[0]=" << arr2[0] << endl;
    for (int i = 0; i < 3; i++)
    {
        cout << " " << arr2[i];
    }
    cout << endl;
    int arr3[3][2] = {{2, 3}, {0, 1}, {9, 8}};
    for (int x = 0; x < 3; x++)
    {
        for (int y = 0; y < 2; y++)
        {
            cout << "arr2[" << x << "][" << y << "]=" << arr3[x][y] << " ";
        }
        cout << endl;
    }

    // Try/Catch
    cout << endl
         << "Try/Catch:" << endl;
    cout << "Devide by 0" << endl;
    int num1 = 10;
    int num2 = 0;
    try
    {
        if (num2 == 0)
        {
            throw 123;
        }
        cout << num1 / num2 << endl;
    }
    catch (int err)
    {
        cout << "Error #" << err << ": Devide by zero" << endl;
    }
    for (int counter = 0; counter < 10; counter++)
    {
        if (counter == 2)
        {
            continue;
        }
        cout << " " << counter;
        if (counter > 5)
        {
            break;
        }
    }
    cout << endl;

    // Random
    cout << endl
         << "Random:" << endl;
    int j = 10;
    while (j > 0)
    {
        cout << " " << j;
        j--;
    }
    cout << endl;

    cout << "random number:" << 1 + rand() % 80 << endl;
    cout << "random number:" << 1 + rand() % 80 << endl;

    string name;
    string name_1 = "test";
    cout << "Enter your name:" << endl;
    getline(cin, name);
    if (name.length() != 0)
    {
        cout << "Your name:" << name << endl;
    }
    else
    {
        cout << "Error" << endl;
    }
    if (name == name_1)
    {
        cout << "name is Equal to name_1" << endl;
        ;
    }
    cout << name + name_1 << endl;

    // If
    cout << endl
         << "If:" << endl;
    int num = 10;
    cout << "Hello World!\n";
    cout << "Num:" << num << "\n";

    int x;
    cout << "Enter an integer number: ";
    cin >> x;
    if (x == 0)
    {
        cout << "X is zero" << endl;
    }
    else if (x > 0 && x < 2)
    {
        cout << "X is 1" << endl;
    }
    else
    {
        x == 3
            ? cout << "X is 3"
            : cout << "X: " << x << endl;
    }

    // Switch/Case
    cout << endl
         << "Switch/Case:" << endl;
    switch (x)
    {
    case 1:
        cout << "X is 1" << endl;
        break;
    case 2:
        cout << "X is 2" << endl;
        break;
    case 3:
        cout << "X is 3" << endl;
        break;
    default:
        cout << "X: " << x << endl;
    }
}

// Run program: Ctrl + F5 or Debug > Start Without Debugging menu
// Debug program: F5 or Debug > Start Debugging menu

// Tips for Getting Started:
//   1. Use the Solution Explorer window to add/manage files
//   2. Use the Team Explorer window to connect to source control
//   3. Use the Output window to see build output and other messages
//   4. Use the Error List window to view errors
//   5. Go to Project > Add New Item to create new code files, or Project > Add Existing Item to add existing code files to the project
//   6. In the future, to open this project again, go to File > Open > Project and select the .sln file
