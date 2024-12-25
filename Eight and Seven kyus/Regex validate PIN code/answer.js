function validatePIN(pin) {
    // Ensure `pin` is a string, then check its length and if it contains only digits
    let newPin = pin.toString();
    
    if ((newPin.length === 4 || newPin.length === 6) && /^\d+$/.test(newPin)) {
      return true; // Valid PIN
    }
    
    return false; // Invalid PIN
}