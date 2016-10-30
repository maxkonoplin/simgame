function log(message, level){
    $('#block-logs').prepend(`<p class=bg-${level}>${message}</p>`);
}

export default {
    info(message){
        log(message, 'info');
    },
    warning(message){
        log(message, 'warning');
    },
    error(message){
        log(message, 'danger');
    },
    success(message){
        log(message, 'success');
    }
};