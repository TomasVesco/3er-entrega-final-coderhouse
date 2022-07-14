import log4js from 'log4js';

log4js.configure({
    appenders: {
        console: { type: "console" },
        errorFile: { type: "file", filename: "./logs/error.log" },
        logConsole: { type: "logLevelFilter", appender: "console", level: "info" },
        logError: { type: "logLevelFilter", appender: "errorFile", level: "error" },
    },
    categories: {
        default: { appenders: ["logConsole"], level: "info" },
        error: { appenders: ["logError"], level: "error"}
    }
});

export default log4js;