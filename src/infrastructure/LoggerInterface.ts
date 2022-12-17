import pino from 'pino';
interface LoggerInterface {
    info(message: string, data: pino.Bindings): void;
    error(message: string, data: pino.Bindings): void;
    warn(message: string, data: pino.Bindings): void;
}
export default LoggerInterface;
