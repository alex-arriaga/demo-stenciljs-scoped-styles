/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Talk } from "./models/Talk";
export namespace Components {
    interface DemoEventAgenda {
    }
    interface DemoEventAgendaNoShadowNonScopedItemList {
        "talks": Talk[];
    }
    interface DemoEventAgendaNoShadowScopedItemList {
        "talks": Talk[];
    }
    interface DemoEventAgendaShadowNonScopedItemList {
        "talks": Talk[];
    }
    interface DemoFooter {
    }
    interface DemoHeader {
    }
    interface DemoLoader {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLDemoEventAgendaElement extends Components.DemoEventAgenda, HTMLStencilElement {
    }
    var HTMLDemoEventAgendaElement: {
        prototype: HTMLDemoEventAgendaElement;
        new (): HTMLDemoEventAgendaElement;
    };
    interface HTMLDemoEventAgendaNoShadowNonScopedItemListElement extends Components.DemoEventAgendaNoShadowNonScopedItemList, HTMLStencilElement {
    }
    var HTMLDemoEventAgendaNoShadowNonScopedItemListElement: {
        prototype: HTMLDemoEventAgendaNoShadowNonScopedItemListElement;
        new (): HTMLDemoEventAgendaNoShadowNonScopedItemListElement;
    };
    interface HTMLDemoEventAgendaNoShadowScopedItemListElement extends Components.DemoEventAgendaNoShadowScopedItemList, HTMLStencilElement {
    }
    var HTMLDemoEventAgendaNoShadowScopedItemListElement: {
        prototype: HTMLDemoEventAgendaNoShadowScopedItemListElement;
        new (): HTMLDemoEventAgendaNoShadowScopedItemListElement;
    };
    interface HTMLDemoEventAgendaShadowNonScopedItemListElement extends Components.DemoEventAgendaShadowNonScopedItemList, HTMLStencilElement {
    }
    var HTMLDemoEventAgendaShadowNonScopedItemListElement: {
        prototype: HTMLDemoEventAgendaShadowNonScopedItemListElement;
        new (): HTMLDemoEventAgendaShadowNonScopedItemListElement;
    };
    interface HTMLDemoFooterElement extends Components.DemoFooter, HTMLStencilElement {
    }
    var HTMLDemoFooterElement: {
        prototype: HTMLDemoFooterElement;
        new (): HTMLDemoFooterElement;
    };
    interface HTMLDemoHeaderElement extends Components.DemoHeader, HTMLStencilElement {
    }
    var HTMLDemoHeaderElement: {
        prototype: HTMLDemoHeaderElement;
        new (): HTMLDemoHeaderElement;
    };
    interface HTMLDemoLoaderElement extends Components.DemoLoader, HTMLStencilElement {
    }
    var HTMLDemoLoaderElement: {
        prototype: HTMLDemoLoaderElement;
        new (): HTMLDemoLoaderElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "demo-event-agenda": HTMLDemoEventAgendaElement;
        "demo-event-agenda-no-shadow-non-scoped-item-list": HTMLDemoEventAgendaNoShadowNonScopedItemListElement;
        "demo-event-agenda-no-shadow-scoped-item-list": HTMLDemoEventAgendaNoShadowScopedItemListElement;
        "demo-event-agenda-shadow-non-scoped-item-list": HTMLDemoEventAgendaShadowNonScopedItemListElement;
        "demo-footer": HTMLDemoFooterElement;
        "demo-header": HTMLDemoHeaderElement;
        "demo-loader": HTMLDemoLoaderElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface DemoEventAgenda {
    }
    interface DemoEventAgendaNoShadowNonScopedItemList {
        "talks"?: Talk[];
    }
    interface DemoEventAgendaNoShadowScopedItemList {
        "talks"?: Talk[];
    }
    interface DemoEventAgendaShadowNonScopedItemList {
        "talks"?: Talk[];
    }
    interface DemoFooter {
    }
    interface DemoHeader {
    }
    interface DemoLoader {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "demo-event-agenda": DemoEventAgenda;
        "demo-event-agenda-no-shadow-non-scoped-item-list": DemoEventAgendaNoShadowNonScopedItemList;
        "demo-event-agenda-no-shadow-scoped-item-list": DemoEventAgendaNoShadowScopedItemList;
        "demo-event-agenda-shadow-non-scoped-item-list": DemoEventAgendaShadowNonScopedItemList;
        "demo-footer": DemoFooter;
        "demo-header": DemoHeader;
        "demo-loader": DemoLoader;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "demo-event-agenda": LocalJSX.DemoEventAgenda & JSXBase.HTMLAttributes<HTMLDemoEventAgendaElement>;
            "demo-event-agenda-no-shadow-non-scoped-item-list": LocalJSX.DemoEventAgendaNoShadowNonScopedItemList & JSXBase.HTMLAttributes<HTMLDemoEventAgendaNoShadowNonScopedItemListElement>;
            "demo-event-agenda-no-shadow-scoped-item-list": LocalJSX.DemoEventAgendaNoShadowScopedItemList & JSXBase.HTMLAttributes<HTMLDemoEventAgendaNoShadowScopedItemListElement>;
            "demo-event-agenda-shadow-non-scoped-item-list": LocalJSX.DemoEventAgendaShadowNonScopedItemList & JSXBase.HTMLAttributes<HTMLDemoEventAgendaShadowNonScopedItemListElement>;
            "demo-footer": LocalJSX.DemoFooter & JSXBase.HTMLAttributes<HTMLDemoFooterElement>;
            "demo-header": LocalJSX.DemoHeader & JSXBase.HTMLAttributes<HTMLDemoHeaderElement>;
            "demo-loader": LocalJSX.DemoLoader & JSXBase.HTMLAttributes<HTMLDemoLoaderElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
