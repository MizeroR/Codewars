function removeUrlAnchor(url){
    if(!url.includes('#')){
      return url
    }
    let index = url.indexOf('#')
    let newUrl = url.slice(0,index)
    return newUrl
  }