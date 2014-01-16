var sys = require('sys');
var colors = require('colors');

function main()
{
    sys.puts("args...".cyan);
    sys.puts(sys.inspect(process.argv, { colors: true }));
    return 0;
}

module.exports = {
    main: main
};
