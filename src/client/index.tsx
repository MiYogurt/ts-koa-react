import * as React from "react";
import * as ReactDOM from "react-dom";

ReactDOM.render(
    <h1>Hello Koa and React Day~</h1>,
    document.getElementById("app")
);



console.log("123122223122222adfasdfa22");

if(module.hot){
	module.hot.accept();
}


declare global {
    interface NodeModule {
        hot: {
            accept(dependencies: string[], callback: (updatedDependencies: string[]) => void): void;
            accept(dependency: string, callback: () => void): void;
            accept(errHandler?: (err: any) => void): void;
            decline(dependencies: string[]): void;
            decline(dependency: string): void;
            decline(): void;

            dispose(callback: (data: any) => void): void;
            addDisposeHandler(callback: (data: any) => void): void;

            removeDisposeHandler(callback: (data: any) => void): void;
            // ...
        }
    }
    export const a : number;
}