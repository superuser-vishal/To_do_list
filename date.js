exports.getDate = () => {
    // Get the current date
    const today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    // Format the date
    return today.toLocaleDateString("en-US", options);
}
