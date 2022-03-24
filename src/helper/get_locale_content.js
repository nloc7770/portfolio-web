import localeContent from "../locale-content/content.json"

export function getLocaleContent(locale, key){
    if(!localeContent || !locale || !key) return "";
    if(key.split(".").length){
      let result = localeContent[locale];
      const arr = key.split(".");
      arr.forEach((el) => {
        if(result[el]){
          result = result[el]
        } 
      })
      return typeof(result) === "string" ? result : ""
    }
    return "";
  }