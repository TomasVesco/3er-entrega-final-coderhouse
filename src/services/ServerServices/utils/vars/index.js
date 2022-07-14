const args = process.argv.slice(2);

function param(p){
    const index = args.indexOf(p);
    return args[index + 1];
}

const MODE = param('--mode') || false;

export { MODE };