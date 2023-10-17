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

    string block;



    while(getline(inputFile, line)) {
        cout << line << endl;


        size_t firstPos = line.find('\t'); // Find the position of the first tab
        size_t secondPos = line.find('\t', firstPos + 1); // Find the position of the second tab
        size_t thirdPos = line.find('\t', secondPos + 1); // Find the position of the third tab

        
        if (thirdPos == std::string::npos) {
            // If there is no third tab, you can use spaces as delimiters
            thirdPos = line.find(' ', secondPos + 1);
        }


        block = line.substr(secondPos + 1, thirdPos - secondPos - 1);


        arrayify += "\"" + block + "\", ";
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