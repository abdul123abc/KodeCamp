function formatName(name) {
 name = name.trim();
 const words = name.split(' ');
 const capitalizedName = words.map(word => {
   return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
 });
 const formattedName = capitalizedName.join(' ');
 return formattedName;
}
