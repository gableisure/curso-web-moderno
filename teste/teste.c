#include <stdio.h>


#define CLASS_LENGTH 8

int fac(int freq[]) {
    int fac[CLASS_LENGTH];
    fac[0] = freq[0];
    for(int j = 1; j < CLASS_LENGTH; j++){
        fac[j] = fac[j-1] + freq[j];
    }
    return fac;
}

int main(){
    int freq[] = {3, 5, 7, 12, 10, 6, 5, 2};
    int resul[] = fac(freq);
    printf("%d", resul[0]);
    return 0;
}