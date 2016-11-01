let modalWindow = $('#work-modal'),
    modalTitle = modalWindow.find('.modal-title'),
    modalContent = modalWindow.find('.modal-message'),
    progressBar = modalWindow.find('.progress-bar');

function modalHide() {
    modalWindow.modal('hide');
    progressBar.css('width', '0');
}

export default function modalDuration(message, title, duration) {
    modalWindow.modal({
        backdrop: true,
        keyboard: false,
        show: true
    });
    modalTitle.text(title);
    modalContent.text(message);
    progressBar.animate({
        width: '100%'
    }, duration, function() {
        modalHide();
    });
};