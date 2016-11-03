let containerLog = $('#block-logs');
function log(message, level){
    if(containerLog.find('p').length > 20) {
        containerLog.find('p:last-child').remove();
    }
    containerLog.prepend(`<p class=bg-${level}>${message}</p>`);
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