export function studlyCase(string) {
    return string.replace(/[\-|\_]/g, ' ')
                .replace(/\w\S*/g, str => {
                    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
                })
                .replace(/\s/g, '')
                .replace(/\w\S*/g, str => {
                    return str.charAt(0).toLowerCase() + str.substr(1);
                });
}