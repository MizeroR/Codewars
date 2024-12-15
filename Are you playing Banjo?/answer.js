function areYouPlayingBanjo(name) {
    // Convert the first character to uppercase and check if it's 'R'
      if (name.charAt(0).toUpperCase() === 'R') {
          return name + " plays banjo";
      } else {
          return name + " does not play banjo";
      }
  }