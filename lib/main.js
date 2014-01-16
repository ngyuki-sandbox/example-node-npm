var sys = require('sys');
var colors = require('colors');

function main()
{
    var pkg = require('../package.json');

    sys.puts("version: ".cyan + pkg.version);
    sys.puts("args:".cyan);
    sys.puts(sys.inspect(process.argv, { colors: true }));

    return 0;
}

module.exports = {
    main: main
};
