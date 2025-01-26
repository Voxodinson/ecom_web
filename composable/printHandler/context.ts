import State from "./state";

class Context
{
    private state!: State;

    constructor(state: State)
    {
        this.setState(state);
    }

    private setState(state: State): void
    {
        this.state = state;
        this.state.setContext(this);
    }

    public print(html: string, title?: string, size?: [number, number] | string): void 
    {
        this.state.print(html, title, size);
    }
}

export default Context;