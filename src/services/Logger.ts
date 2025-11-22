/**
 * Logger Service - Singleton Pattern
 * Provides centralized logging with different log levels
 */

export enum LogLevel {
    DEBUG = 'DEBUG',
    INFO = 'INFO',
    WARN = 'WARN',
    ERROR = 'ERROR'
}

interface LogEntry {
    timestamp: string;
    level: LogLevel;
    module: string;
    message: string;
    data?: any;
}

class Logger {
    private static instance: Logger;
    private logs: LogEntry[] = [];
    private isDevelopment: boolean = true;
    private maxLogs: number = 500;

    private constructor() {
        // In browser extensions, always enable development logging
        this.isDevelopment = true;
    }

    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    /**
     * Format log message for console output
     */
    private formatConsoleMessage(
        level: LogLevel,
        module: string,
        message: string
    ): string {
        const timestamp = new Date().toLocaleTimeString();
        return `[${timestamp}] [${level}] [${module}] ${message}`;
    }

    /**
     * Log debug level message
     */
    public debug(module: string, message: string, data?: any): void {
        this.log(LogLevel.DEBUG, module, message, data);
        if (this.isDevelopment) {
            console.debug(this.formatConsoleMessage(LogLevel.DEBUG, module, message), data);
        }
    }

    /**
     * Log info level message
     */
    public info(module: string, message: string, data?: any): void {
        this.log(LogLevel.INFO, module, message, data);
        console.log(this.formatConsoleMessage(LogLevel.INFO, module, message), data);
    }

    /**
     * Log warning level message
     */
    public warn(module: string, message: string, data?: any): void {
        this.log(LogLevel.WARN, module, message, data);
        console.warn(this.formatConsoleMessage(LogLevel.WARN, module, message), data);
    }

    /**
     * Log error level message
     */
    public error(module: string, message: string, data?: any): void {
        this.log(LogLevel.ERROR, module, message, data);
        console.error(this.formatConsoleMessage(LogLevel.ERROR, module, message), data);
    }

    /**
     * Internal log storage
     */
    private log(level: LogLevel, module: string, message: string, data?: any): void {
        const entry: LogEntry = {
            timestamp: new Date().toISOString(),
            level,
            module,
            message,
            data
        };

        this.logs.push(entry);

        // Maintain max logs limit
        if (this.logs.length > this.maxLogs) {
            this.logs = this.logs.slice(-this.maxLogs);
        }
    }

    /**
     * Get all logs
     */
    public getLogs(): LogEntry[] {
        return [...this.logs];
    }

    /**
     * Clear all logs
     */
    public clearLogs(): void {
        this.logs = [];
        this.info('Logger', 'Logs cleared');
    }

    /**
     * Export logs as JSON
     */
    public exportLogs(): string {
        return JSON.stringify(this.logs, null, 2);
    }

    /**
     * Download logs as file
     */
    public downloadLogs(): void {
        const logsJson = this.exportLogs();
        const blob = new Blob([logsJson], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `chat-logs-${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }
}

export default Logger.getInstance();