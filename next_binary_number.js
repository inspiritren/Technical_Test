function next_binary_number(binary) {

    for (var i = binary.length - 1; i > 0; i--) {
        if (binary[i] == 0) { 
            binary[i] = 1;
            return binary;
        }
        if (!binary.includes(0)) {
            binary.push(0);
        }
        if (binary[i] == 1) {
            binary[i] = 0;
        }
    }
    
    return binary;
    
}
