export const convertDate = (date) =>{
    const originalDate = new Date(date);
    const dateFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
    const timeFormatOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedDate = originalDate.toLocaleString('en-US', dateFormatOptions);
    const formattedTime = originalDate.toLocaleTimeString('en-US', timeFormatOptions);
    
    return { formattedDate,formattedTime }
}
