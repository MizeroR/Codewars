function formatDuration(seconds) {
    let year = Math.floor(seconds / 31536000);
    let day = Math.floor((seconds % 31536000) / 86400);
    let hour = Math.floor((seconds % 86400) / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let second = seconds % 60;
  
    let yearmessage = year === 1 ? "1 year" : year > 1 ? `${year} years` : "";
    let daymessage = day === 1 ? "1 day" : day > 1 ? `${day} days` : "";
    let hourmessage = hour === 1 ? "1 hour" : hour > 1 ? `${hour} hours` : "";
    let minutesmessage = minutes === 1 ? "1 minute" : minutes > 1 ? `${minutes} minutes` : "";
    let secondmessage = second === 1 ? "1 second" : second > 1 ? `${second} seconds` : '';
  
    let array = [yearmessage, daymessage, hourmessage, minutesmessage, secondmessage];
    let newArr = array.filter((elem) => elem.length > 0);
    
    if (seconds === 0){return 'now'}
  
    
    return newArr.length === 1 ? newArr[0] : newArr.slice(0, -1).join(", ") + " and " + newArr.slice(-1);
  }