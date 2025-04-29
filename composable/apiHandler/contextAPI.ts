import {
  ref,
  createApp,
  type DefineComponent,
  type App,
  type ComponentPublicInstance,
} from "vue";
import StateAPI from "./stateAPI";
import { Main } from "@/components/loading";

const loader: DefineComponent = defineComponent({
  render() {
    return h(Main);
  },
});

const loaderInstance: {
    app?: App<Element>;
    instance?: ComponentPublicInstance;
} = {};

const showLoader = (): void => {
    if (!loaderInstance?.app) {
        loaderInstance.app = createApp(loader);
        loaderInstance.instance = loaderInstance?.app?.mount(
            document?.createElement("div")
        ) as ComponentPublicInstance;

        const target: HTMLDivElement = document?.getElementById(
            "teleports"
        ) as HTMLDivElement;

        if (target) {
            target.innerHTML = "";
            target.appendChild(loaderInstance?.instance?.$el);
        }
    }
};

const closeLoader = (): void => {
    if (loaderInstance?.app) {

        const target: HTMLDivElement = document?.getElementById(
            "teleports"
        ) as HTMLDivElement;

        if (target) {
            target.innerHTML = "";
        }
        
        loaderInstance?.app?.unmount();
        loaderInstance.app = undefined;
        loaderInstance.instance = undefined;
    }
};

class ContextAPI {
  private state!: StateAPI;
  public loading: Ref<boolean> = ref<boolean>(false);
  constructor(state: StateAPI) {
    this.setStateAPI(state);
  }

  private setStateAPI(state: StateAPI): void {
    this.state = state;
    this.state.setContextAPI(this);
  }

  private setLoadingState(isLoading: boolean): void {
    this.loading.value = isLoading;
  }

  async post(
    endpoint: string,
    alert?: boolean,
    payload?: object
  ): Promise<object> {
    return this.state?.post(endpoint, payload, alert);
  }

  async get(
    endpoint: string,
    alert?: boolean,
    loading: boolean = true
  ): Promise<object> {
      this.setLoadingState(true);
      if (loading) showLoader();
      try {
        let result: object = {};
        if (process.client) {
          result = await this.state?.get(endpoint, alert);
        }
        return result;
      } finally {
        this.setLoadingState(false);
        if (loading) closeLoader();
      }
  }

  async update(
    endpoint: string,
    alert?: boolean,
    payload?: object
  ): Promise<object> {
    return this.state?.update(endpoint, payload, alert);
  }

  async delete(
    endpoint: string,
    alert?: boolean,
    payload?: object
  ): Promise<object> {
    return this.state?.delete(endpoint, payload, alert);
  }
}

export default ContextAPI;
