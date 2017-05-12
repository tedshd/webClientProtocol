/**
 *
 * @authors Your Name (you@example.org)
 * @date    2017-05-12 10:40:59
 * @version $Id$
 */

(function () {
    function webClientProtocol() {
        var protocol = '';
        function sms(number, msg) {
            if (!number) {
                console.error('not set number');
                return;
            }
            var msg = msg || '',
                platform,
                ua = navigator.userAgent,
                apple = false,
                ios = ['iPhone', 'iPod', 'iPad'];
            for (var d = 0; d < ios.length; d++) {
                if (ua.match(new RegExp(ios[d], 'i'))) {
                    apple = true;
                    break;
                }
            }
            if (apple) {
                platform = '&';
            } else {
                platform = '?';
            }
            protocol = 'sms:' + number + platform + 'body=' + msg;
            location.href = protocol;
        }
        function tel(number) {
            if (!number) {
                console.error('not set number');
                return;
            }
            protocol = 'tel:' + number;
            location.href = protocol;
        }
        function mailto(email) {
            if (!email) {
                console.error('not set email');
                return;
            }
            protocol = 'mailto:' + email;
            location.href = protocol;
        }
        this.sms = sms;
        this.tel = tel;
        this.mail = mailto;
    }
    window.webClientProtocol = webClientProtocol;
})();