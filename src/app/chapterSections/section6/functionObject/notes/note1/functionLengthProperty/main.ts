export default function () {
    type zeroArgHandler = () => void;
    type argedHandler = (arg: boolean) => boolean;

    function ask(
        question: string,
        ...handlers: Array<zeroArgHandler | argedHandler>
    ): void {
        if (handlers.length < 2) {
            throw new Error(
                "at least 2 or more handlers arg is required",
            );
        }
        const isYes = confirm(question);
        for (const handler of handlers) {
            if (handler.length === 0) {
                if (isYes) {
                    console.log("question is yes");
                    (handler as zeroArgHandler)();
                }
                continue;
            }
            console.log(
                `handler: ${handler.name ? handler.name : "ANONYMOUS"} has a parameter... logging question value:`,
                handler(isYes),
            );
        }
    }

    ask(
        "Question?",
        function firstHandler(): void {
            alert("you said yes");
        } as zeroArgHandler,
        function secondHandler(result): boolean {
            return result;
        } as argedHandler,
    );

}
