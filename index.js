          function farsi_checker(input) {
                var error = 0;
                var farsi_chracter = ['?', ' ', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?'];
                for (var i = 0; i < input.length; i++)
                    if (farsi_chracter.indexOf(input.substr(i, 1)) == -1) {
                        error = 1;
                        break;
                    }
                return (error ? false : true);
            }