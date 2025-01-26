import Context from "./context";

abstract class State
{
    protected context!: Context;

    public setContext(context: Context): void
    {
        this.context = context;
    }

    abstract print(html: string, title?: string, size?: [number, number] | string): void;
}

export default State;