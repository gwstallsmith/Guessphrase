#include <iostream>
#include <fstream>
#include <string>

using std::ifstream; using std::ofstream;
using std::string;
using std::cout; using std::endl;


int main(int argc, char** argv) {
    if(argc != 3) { return 1; }

    ifstream inputFile(argv[1]);
    ofstream outputFile(argv[2]);

    string arrayify = "[";
    string line;

    while(getline(inputFile, line)) {
        cout << line << endl;
        arrayify += "\"" + line + "\", ";
    }

    if (!arrayify.empty()) {
        arrayify.pop_back();
        arrayify.pop_back();
    }

    arrayify += "]";

    cout << arrayify << endl;

    outputFile << arrayify;

    inputFile.close();
    outputFile.close();

    return 0;
}